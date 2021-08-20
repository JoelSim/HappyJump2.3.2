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

        musicToggle:{
            default:null,
            type:cc.Toggle,
        },

        settingLayer:{
            default :null,
            type:cc.Node,
        },

        balance:{
            default:null,
            type:cc.Label,
        },

        loadingLayer:{
            default:null,
            type:cc.Node,
        },
        sureToExit:{
            default:null,
            type:cc.Node,
        },
        message:{
			default:null,
			type:cc.Label
		},
        prompt:{
            default:null,
            type:cc.Node
        },
		errorButtons:{
			default:[],
			type:[cc.Node],
		},
    },

    // LIFE-CYCLE CALLBACKS:
    openSureToExit(){
        this.sureToExit.active=true;
    },
    closeSureToExit(){
        this.sureToExit.active=false;
    },
    onLoad () {
        this.api = this.node.getComponent("API");
        this.api.getSettings();
        this.loadingLayer.active =true;
        const isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);
        if (isIOS14Device) {
            cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
                if (this.vertexOffset + vertexCount > 65535) {
                    this.uploadData();
                    this._batcher._flush();
                }
            };     
            cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
                this.uploadData();
                this.switchBuffer();
            }  
        }
    },
    fullScreen(){

        if(cc.screen.fullScreen()){
            cc.screen.exitFullScreen();
        }
        else{
            cc.screen.requestFullScreen();
        }
      
        // document.webkitExitFullscreen();
    },

    updateCreditLabel(){
        this.loadingLayer.active=false;
        this.balance.string = Math.round(globalData.settings.balance *100)/100;
    },
    start () {
    },
    blankScreen(){
        if (globalData.settings.lobby_url != null && globalData.settings.lobby_url != "") {
            window.open(globalData.settings.lobby_url, "_self");
        } else {
            window.open("about:blank", "_self");
        }
    },

    openSetting(){
        this.settingLayer.active  =true;
    },

    closeSetting(){
        this.settingLayer.active  =false;

    },

    toggleMute(){
        if(this.musicToggle.isChecked){
            cc.audioEngine.setMusicVolume(1);
            globalData.setEffectVolume(1);

        }
        else{
            cc.audioEngine.setMusicVolume(0);
            globalData.setEffectVolume(0);


        }
    },
    
    update (dt) {
        if(globalData.isKicked){
			this.errorButtons[0].active = false;
			this.errorButtons[1].active = true;
            this.message.string = globalData.kickMessage;
            this.prompt.active = true;
		}
    },
});
