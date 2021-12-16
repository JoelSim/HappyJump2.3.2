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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        loseAudio:{
            default:null,
            type:cc.AudioClip,
        },

        perfectAudio:{
            default:null,
            type:cc.AudioClip,
        },
        consoAudio:{
            default:null,
            type:cc.AudioClip,
        },

        uiButtonSound:{
            default:null,
            type:cc.AudioClip,
        },
        winAudio:{
            default:null,
            type:cc.AudioClip, 
        },

        musicToggle:{
            default:null,
            type: cc.Toggle,
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

       
        cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
    },

    start () {
        if(globalData.getEffectVolume()==0){
            this.musicToggle.isChecked= false;
        }
    },

    setVolume(value){
        cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
    },

    playWin(){
        if(globalData.getEffectVolume()!=0){
            cc.audioEngine.play(this.winAudio,false,0.2);

        }
    },
    playLoseSound(){
        if(globalData.getEffectVolume()!=0){
            cc.audioEngine.play(this.loseAudio,false,0.2);

        }


    },
    playLandPerfect(){
        if(globalData.getEffectVolume()!=0){
            cc.audioEngine.play(this.perfectAudio,false,0.2);

        }

    },

    playLandConso(){
        if(globalData.getEffectVolume()!=0){
            cc.audioEngine.play(this.consoAudio,false,0.2);

        }

    },

    playUIbuttonSound(){
        if(globalData.getEffectVolume()!=0){
            cc.audioEngine.play(this.uiButtonSound,false,0.2);

        }

    },

    toggleMute(){
        if(this.musicToggle.isChecked){
            cc.audioEngine.setMusicVolume(0.2);
            globalData.setEffectVolume(0.2);
        }
        else{
            cc.audioEngine.setMusicVolume(0);
            globalData.setEffectVolume(0);

        }
    },
    // update (dt) {},
});
