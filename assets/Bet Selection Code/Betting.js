// // Learn cc.Class:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// // Learn Attribute:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// import * as global from "GlobalVar";

// cc.Class({
//     extends: cc.Component,

//     properties: {
// 		bet_options:{
// 			default:[],
// 			type:[cc.Node]
// 		},
//     },

// 	setOptionsAmount(index, amount){
// 		this.label = this.bet_options[index].getChildByName("Label").getComponent(cc.Label);
// 		this.label.string = amount;
// 	},

// 	selectBetOption(event, value){
//         this.playEffect(this.button_click, global.getEffectVolume());

// 		this.selectedBetOption = Number(value);
// 		cc.log("Selected bet option:" + this.selectedBetOption);

// 		for(let i = 0; i < this.bet_options.length; i++){
// 			if(i == value){
// 				this.bet_options[i].getChildByName("SelectedSprite").active = true;
// 			}else{
// 				this.bet_options[i].getChildByName("SelectedSprite").active = false;
// 			}
// 		}
//     },
    	
// 	playEffect(audio, volume){
// 		this.effect_id2 = cc.audioEngine.play(audio, false);
// 		if(global.getSound() == 0 ){
// 			cc.audioEngine.setVolume(this.effect_id2, 0.0);
// 		}else if(volume != null){
// 			cc.audioEngine.setVolume(this.effect_id2, volume);
// 		}
// 		return this.effect_id2;
// 	},

//     // LIFE-CYCLE CALLBACKS:

//     // onLoad () {},

//     start () {
// 		this.selectedBetOption = -1;
//     },

//     // update (dt) {},
// });
