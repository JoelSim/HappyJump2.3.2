// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import * as globalData from "GlobalData";
import * as ecrypt from "ecrypt";

cc.Class({
    extends: cc.Component,

    properties: {
        isGenerating: false,
        myButton: {
            default: [],
            type: [cc.Node],
        },
        isRestarting: false,
        bettingOptionText: {
            default: [],
            type: [cc.Node]
        },

        selectedBet: {
            default: [],
            type: [cc.Node]
        },
        anim: {
            default: null,
            type: cc.Animation
        },

        // currentBettingLabel: {
        //     default: null,
        //     type: cc.Label,
        // },

        loadingLayer: {
            default: null,
            type: cc.Node,
        },
        insufficient: {
            default: null,
            type: cc.Node,
        },
        balanceText: {
            default: null,
            type: cc.Label,
        },
        hiding: false,
        currentBetting: 0,
        lastBetting: 0,
        playerDie:false,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.selectedBetOption = globalData.currentBet;
        this.SetAmount(1);
    },

    hide() {
        if (!this.hiding) {
            this.anim.play("Hide");
            this.hiding = true;
        }
        else {
            this.anim.play("Show");
            this.hiding = false;
        }
    },

    updateBetAmountLabel(){
        for (let i = 0; i < this.bettingOptionText.length; i++) {
            let index = i;
            this.bettingOptionText[index].getComponent(cc.Label).string = globalData.configBetRange[globalData.getBetSelection()] * globalData.configBetAmount[index];
        }
    },

    SetAmount(even, value) {
        this.maintBetOption = globalData.getBetSelection();
        this.myValue = globalData.configBetRange[this.maintBetOption];

        this.updateBetAmountLabel();

        this.currentBetting = globalData.configBetRange[globalData.getBetSelection()] * globalData.configBetAmount[globalData.betAmountIndex];

        globalData.setBetAmount(this.currentBetting);
        for (let i = 0; i < this.selectedBet.length; i++) {
            if (i == this.selectedBetOption) {
                this.selectedBet[i].active = false;
                // this.myButton[i].scale = cc.v2(0.9, 0.9);

            } else {
                this.selectedBet[i].active = true;
                // this.myButton[i].scale = cc.v2(0.7, 0.7);

            }
        }

        if (this.lastBetting != this.currentBetting) {
            if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
                globalData.currentBetSlot=this.selectedBetOption;
                this.loadingLayer.opacity = 255;
                this.loadingLayer.active = true;
                if (Number(value) == 0) {

                    if (!globalData.isDemo) {
                        var emit_result = {
                            'host_id': globalData.host_id,
                            'access_token': globalData.access_token,
                            'ticket_id': globalData.ticket_id,
                            'result': this.lastBetting,
                            'key': "Change bet: " + this.lastBetting,
                            'game_code': globalData.game_code,
                            'description': "Get previous bet and change bet",
                            'user_id': globalData.settings.user_id,
                            'api_url':globalData.api_url,
                            'changeBet':true,
                            'is_angpao': 0,
                        };
                        if(globalData.isEncrypt){
                            emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
                        }
                        globalData.getSocket().emit('send-result', emit_result);
                        this.generatingBalance = true;
                        this.lastBetting = this.currentBetting;
                    }
                    else {
                        globalData.settings.balance += this.lastBetting;
                        this.generatingBalance = true;
                        this.lastBetting = this.currentBetting;
                    }

                }

                else {
                    this.lastBetting = this.currentBetting;
                    this.insufficient.active = false;
                    if (!globalData.isDemo) {
                        var emit_obj = {
                            'host_id': globalData.host_id,
                            'access_token': globalData.access_token,
                            'game_code': 23,
                            'betAmount': globalData.configBetRange[globalData.getBetSelection()] * globalData.configBetAmount[globalData.betAmountIndex],
                            "key": "Happy Jump bet with these index 1st",
                            "description": "bet",
                            "user_id": globalData.settings.user_id,
                            'api_url':globalData.api_url,
                            "requestType": "bet",
                            "currentBetSlot":globalData.currentBetSlot,
                        }
                        if(globalData.isEncrypt){
                            emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
                        }
                        globalData.getSocket().emit('changeBet', emit_obj);
                        this.generateScore2();
                    }
                    else {
                        globalData.settings.balance -= this.currentBetting;
                        this.generateScore2();
                    }

                }
            }
            else {
                this.insufficient.active = true;

            }
        }

        else {

        }

    },


    selectBetOption(event, value) {
        this.selectedBetOption = Number(value);
        globalData.betAmountIndex = this.selectedBetOption;

        this.canPlay = true;
        // this.node.active = false;
        cc.log("Selected bet option:" + this.selectedBetOption);
        for (let i = 0; i < this.selectedBet.length; i++) {
            if (i == value) {
                this.selectedBet[i].active = false;
                // this.myButton[i].scale = cc.v2(0.9, 0.9);

            } else {
                this.selectedBet[i].active = true;
                // this.myButton[i].scale = cc.v2(0.7, 0.7);

            }
        }

        this.currentBetting = globalData.configBetRange[globalData.getBetSelection()] * globalData.configBetAmount[globalData.betAmountIndex];

        globalData.setBetAmount(this.currentBetting);

        if (this.lastBetting != this.currentBetting) {
            if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
                //eligible for betting;
                globalData.currentBetSlot=this.selectedBetOption;
                globalData.currentBet = Number(value);
                this.loadingLayer.opacity = 255;
                this.loadingLayer.active = true;

                if (!globalData.isDemo) {
                    var emit_result = {
                        'host_id': globalData.host_id,
                        'access_token': globalData.access_token,
                        'ticket_id': globalData.ticket_id,
                        'result': this.lastBetting,
                        'key': "Change bet: " + this.lastBetting,
                        'game_code': globalData.game_code,
                        'description': "Get previous bet and change bet",
                        'user_id': globalData.settings.user_id,
                        'api_url':globalData.api_url,
                        'changeBet':true,
                        'is_angpao': 0,
                    };
                    if(globalData.isEncrypt){
                        emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
                    }
                    globalData.getSocket().emit('send-result', emit_result);
                    this.lastBetting = this.currentBetting;
                    this.generatingBalance = true;
                }
                else {
                    globalData.settings.balance += this.lastBetting;
                    this.lastBetting = this.currentBetting;
                    this.generatingBalance = true;
                }
            }
            else {
                this.insufficient.active = true;
            }
        }
        else {
            if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
                this.insufficient.active = false;
            }
        }



    },
    start() {

    },

    
    generateScore2() {
        this.isGenerating = true;

    },
    demoGenerateScore() {
        this.loadingLayer.active = false;
        var multiplierPerfect;
        var multiplierConso;
        var platform;
        var perfectScore;
        var consoleScore;
        platform  =   (Math.random() * (1 - 0) + 0);
        if(platform>=0.3){
            platform = 1;
        }
        else{
            platform = 0;
        }

        // calculate multiplier
        // platform = parseInt(Math.random() * (1 - 0) + 0);
        multiplierPerfect = (Math.random() * (10 - 2) +2);
        multiplierConso = 0.2;
        perfectScore =(this.currentBetting * Math.floor(multiplierPerfect));
        consoleScore = Math.round((this.currentBetting * multiplierConso) * 10) / 10;
        globalData.consoScore = consoleScore;
        globalData.perfectScore = perfectScore;
        globalData.platform = platform;
        this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
        cc.systemEvent.emit("Change-Bet");
    },
    generateScore() {
        this.loadingLayer.active = false;
        this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
        cc.systemEvent.emit("Change-Bet");

    },
    onDestroy() {
        if (!globalData.isDemo) {
            if (!this.playerDie) {
                var emit_result = {
                    'host_id': globalData.host_id,
                    'access_token': globalData.access_token,
                    'ticket_id': globalData.ticket_id,
                    'result': this.lastBetting,
                    'key': "Go to home: " + this.lastBetting,
                    'game_code': globalData.game_code,
                    'description': "Cancel bet and go to home",
                    'user_id': globalData.settings.user_id,
                    'api_url':globalData.api_url,
                    'changeBet':true,
                    'is_angpao': 0,
                };
                if(globalData.isEncrypt){
                    emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
                }
                globalData.getSocket().emit('send-result', emit_result);
            }

        }
        else {
            if (!this.playerDie) {
                globalData.settings.balance += this.lastBetting;
            }
        }
    },

    update(dt) {
        if (this.isGenerating) {
            if (!globalData.isDemo) {
                if (globalData.finishGetData) {
                    //sendresult
                    this.isGenerating = false;
                    globalData.finishGetData = false;
                    this.scheduleOnce(function () {
                        this.generateScore();

                    }, 0.2);

                }
            }
            else {
                this.isGenerating = false;
                this.scheduleOnce(function () {
                    this.demoGenerateScore();

                }, 0.2);
            }


        }

        if (this.generatingBalance) {
            if (!globalData.isDemo) {
                if (globalData.finishGeneratingBalance) {
                    this.insufficient.active = false;
                    var emit_obj = {
                        'host_id': globalData.host_id,
                        'access_token': globalData.access_token,
                        'game_code': 23,
                        'betAmount': globalData.configBetRange[globalData.getBetSelection()] * globalData.configBetAmount[globalData.betAmountIndex],
                        "key": "Happy Jump bet with these index 1st",
                        "description": "bet",
                        "user_id": globalData.settings.user_id,
                        'api_url':globalData.api_url,
                        "requestType": "social_addon",
                        'ticket_id': globalData.ticket_id,
                        "currentBetSlot":globalData.currentBetSlot,
                    }
                    if(globalData.isEncrypt){
                        emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
                    }
                    globalData.getSocket().emit('changeBet', emit_obj);
                    this.generateScore2();
                    this.generatingBalance = false;
                    globalData.finishGeneratingBalance = false;

                }
            }

            else {
                this.insufficient.active = false;
                this.generateScore2();
                this.generatingBalance = false;
            }

        }

    },
});
