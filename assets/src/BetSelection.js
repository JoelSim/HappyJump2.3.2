// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
import * as globalData from "GlobalData";
cc.Class({

    extends: cc.Component,

    properties: {
        canvas:{
            default:null,
            type:cc.Node,
        },
		playButton:{
            default:null,
            type:cc.Button
		},
		selectedBet:{
			default:[],
			type:[cc.Node]
        },
        loadingLayer:{
            default:null,
            type:cc.Node,
        },
		betOptionsLabel:{
			default:[],
			type:[cc.Label],
		},
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		this.selectedBetOption = 0;
	},

    start () {
        if(cc.sys.isMobile){
			cc.view.resizeWithBrowserSize(true);
			cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
		}else{
			this.canvas.getComponent(cc.Canvas).fitHeight = true;
			this.canvas.getComponent(cc.Canvas).fitWidth = true;
		}

    },

	updateBetRangeAndBetAmountConfig(settings){
		globalData.configBetRange[0] = settings.bet_chip_1;
		globalData.configBetRange[1] = settings.bet_chip_2;
		globalData.configBetRange[2] = settings.bet_chip_3;
		globalData.configBetRange[3] = settings.bet_chip_4;
		globalData.configBetAmount[0] = settings.bet_amount_1;
		globalData.configBetAmount[1] = settings.bet_amount_2;
		globalData.configBetAmount[2] = settings.bet_amount_3;
		globalData.configBetAmount[3] = settings.bet_amount_4;
		globalData.configBetAmount[4] = settings.bet_amount_5;

		for(let i = 0; i < this.betOptionsLabel.length; i++){
			let index = i;
			this.betOptionsLabel[i].string = "x" + globalData.configBetRange[index];
		}
	},

	selectBetOption(event, value){
		this.selectedBetOption = Number(value);
	
		for(let i = 0; i < this.selectedBet.length; i++){
			if(i == value){
				this.selectedBet[i].active=true;
			}else{
				this.selectedBet[i].active=false;
			}
		}
		globalData.setBetSelection(value);
	},

    StartGame(){
		//send server
        this.loadingLayer.active = true;
		//start game
        cc.director.loadScene("game");
	},
});
