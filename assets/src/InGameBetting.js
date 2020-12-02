// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import * as globalData from "GlobalData";
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
        if (!globalData.getSocket()) {
            this.getComponent("Socket").connectSocket();
        }
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

    SetAmount(even, value) {
        this.maintBetOption = globalData.getBetSelection();
        if (this.maintBetOption == 0) {
            this.myValue = 0.5;
        }
        if (this.maintBetOption == 1) {
            this.myValue = 5;

        }
        if (this.maintBetOption == 2) {
            this.myValue = 10;
        }
        if (this.maintBetOption == 3) {
            this.myValue = 20;
        }
        for (let i = 0; i < this.bettingOptionText.length; i++) {
            if (i == 0) {
                this.bettingOptionText[i].getComponent(cc.Label).string = ((1 * this.myValue));
            }
            else if (i == 1) {
                this.bettingOptionText[i].getComponent(cc.Label).string = ((1 * this.myValue)) * 2;
            }
            else if (i == 2) {
                this.bettingOptionText[i].getComponent(cc.Label).string = ((1 * this.myValue)) * 3;
            }
            else {
                this.bettingOptionText[i].getComponent(cc.Label).string = ((1 * this.myValue) / (this.bettingOptionText.length - i)) * 10;
            }
        }

        if (this.selectedBetOption < 3) {
            this.currentBetting = ((1 * this.myValue)) * (this.selectedBetOption + 1);
        }
        else {
            this.currentBetting = ((1 * this.myValue) / (this.bettingOptionText.length - this.selectedBetOption)) * 10;
        }

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
                // this.currentBettingLabel.string = this.currentBetting;
                //eligible for betting;
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

                        };
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
                            'betAmount': this.currentBetting,
                            "key": "Happy Jump bet with these index 1st",
                            "description": "bet",
                            "user_id": globalData.settings.user_id,
                            'api_url':globalData.api_url,
                            "requestType": "bet",
                            "currentBetSlot":globalData.currentBetSlot,
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
        //this.lastBetting = this.currentBetting;

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

        if (this.selectedBetOption < 3) {
            this.currentBetting = ((1 * this.myValue)) * (this.selectedBetOption + 1);
        }
        else {
            this.currentBetting = ((1 * this.myValue) / (this.bettingOptionText.length - this.selectedBetOption)) * 10;
        }

        globalData.setBetAmount(this.currentBetting);

        if (this.lastBetting != this.currentBetting) {
            if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
                //eligible for betting;
                globalData.currentBetSlot=this.selectedBetOption;
                globalData.currentBet = Number(value);
                // this.currentBettingLabel.string = this.currentBetting;
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

                    };
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
        // calculate multiplier
        platform = parseInt(Math.random() * (1 - 0) + 0);
        multiplierPerfect = (Math.random() * (1.5 - 1.1) + 1.1);
        multiplierConso = (Math.random() * (1 - 0.7) + 0.7);
        perfectScore = Math.round((this.currentBetting * multiplierPerfect) * 10) / 10;
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

                };
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
                        'betAmount': this.currentBetting,
                        "key": "Happy Jump bet with these index 1st",
                        "description": "bet",
                        "user_id": globalData.settings.user_id,
                        'api_url':globalData.api_url,
                        "requestType": "social_addon",
                        'ticket_id': globalData.ticket_id,
                        "currentBetSlot":globalData.currentBetSlot,
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
