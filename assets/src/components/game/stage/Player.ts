import { G } from "../../../G";

import * as global from "../../../GlobalData";

const { ccclass, property } = cc._decorator;

@ccclass
export class Player extends cc.Component {

    @property(cc.Float)
    public jumpDistance: number = 0;
    @property(cc.Float)
    public platformConsoRate: number = 0;
    @property(cc.Integer)
    public power: number = 0;
    @property(cc.Float)
    public initSpeed: number = 0;

    public speed: number = 0;

    public isReadyJump: boolean = false;

    public direction: number = 1;

    @property(cc.AudioClip)
    private readyJumpAudio = null;
    private readyJumpAudioId = -1;
    @property(cc.AudioClip)
    private jumpAudio = null;
    private jumpAudioId = -1;
    private isCharging =false;
    private isJumping =false;
    private randomTimer = 2;
    private timer = 0;
    private jumpCount = 0;
    private stage =null;
    onLoad() {
        cc.find("title",this.node).active = false;
        this.stage = cc.find("Canvas/stage").getComponent("Stage");
    }

    public readyJump() {
        this.readyJumpAudioId =  cc.audioEngine.play(this.readyJumpAudio,false,global.getEffectVolume());
        cc.find("title",this.node).active = true;
        //cc.find("rotateAnchor/sprite",this.node).runAction(cc.scaleTo(2,1,0.5));
        this.node.getComponent(cc.Animation).play("ChickenCharge");
        cc.find("rotateAnchor/particlesystem",this.node).active = true;
        this.speed = this.initSpeed;
        this.isReadyJump = true;
        this.isCharging = true;
    }

    public jumpTo(worldPos:cc.Vec2,cb:Function,cbTarget?:any) {
        this.jumpCount+=1;
        this.isCharging = false;
        this.isJumping = true;
        cc.find("rotateAnchor/particlesystem",this.node).active = false;

        this.scheduleOnce(()=>{
            this.isJumping=false;
        },1)
        this.node.getComponent(cc.Animation).play("ChickenIdle");
        cc.audioEngine.stop(this.readyJumpAudioId);
        if(global.getEffectVolume()!=0){
            this.jumpAudioId = cc.audioEngine.play(this.jumpAudio,false,1);
        }
        cc.find("rotateAnchor/sprite",this.node).stopAllActions();
        cc.find("title",this.node).active = false;
        let targetPos = this.node.parent.convertToNodeSpaceAR(worldPos)
        this.node.color = cc.Color.WHITE;
        this.isReadyJump = false;
        let resetAction = cc.scaleTo(1,1,1);
        let jumpAction = cc.jumpTo(0.5,targetPos,500,1);
         let rotateAction = cc.rotateBy(0.5,this.direction*(-360));
        let finished = cc.callFunc(()=>{
          
            if(this.jumpCount>=3){
                if(this.direction==1){
                    this.direction=-1;
                }
                else{
                    this.direction=1;
                }
                this.jumpCount=0;
            }
            //this.direction = Math.random()>0.5?1:-1;
            this.speed = 0;
            this.jumpDistance = 0;
            cb();
        },cbTarget);
        cc.find("rotateAnchor/sprite",this.node).runAction(resetAction);
        cc.find("rotateAnchor",this.node).runAction(rotateAction);
        this.node.runAction(cc.sequence(jumpAction,finished))
        
    }

    RandomInt(min, max){
        return parseInt((Math.random() * ((max + 1 - min) + min)).toString());
    }

    public update(dt) {

        this.timer += dt;

        if(this.timer>=this.randomTimer){
            if(!this.isCharging&&!this.isJumping&&!this.stage.autoJump){
                this.node.getComponent(cc.Animation).play("ChickenSingin");
            }
            this.randomTimer = this.RandomInt(2,8);
            this.timer = 0;
        }
        if(this.isReadyJump) {
            this.speed += dt * this.power;
            this.jumpDistance += this.speed * dt;
        }
    }

}
