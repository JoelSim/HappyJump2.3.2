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

		inGameBettingNode:{
			default:null,
			type:cc.Node,
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
		this.selectedBetOption = globalData.getBetSelection();
	},

    start () {
		this.selectBet();

		for(let i = 0; i < this.betOptionsLabel.length; i++){
			let index = i;
			this.betOptionsLabel[i].string = "x" + globalData.configBetRange[index];
		}
		if(this.inGameBettingNode != null){
			this.inGameBettingNode.getComponent("InGameBetting").updateBetAmountLabel();
		}
    },

	// update (dt) {},

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

	selectBet(){
		for(let i = 0; i < this.selectedBet.length; i++){
			if(i == this.selectedBetOption ){
				this.selectedBet[i].active=true;
			}else{
				this.selectedBet[i].active=false;
			}
		}
	},
    StartGame(){
		//send server
        this.loadingLayer.active = true;
		//start game
        cc.director.loadScene("game");
	},
});
