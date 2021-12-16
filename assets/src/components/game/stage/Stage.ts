import { Player } from "./Player";
import { Block } from "./Block";
import { G } from "../../../G";
import { PlayerDieEvent } from "../../../events/PlayerDieEvent";
import { PlayerJumpSuccessEvent } from "../../../events/PlayerJumpSuccessEvent";
import * as global from "../../../GlobalData";
import * as ecrypt from "../../../Network/ecrypt";

const { ccclass, property } = cc._decorator;

@ccclass
export class Stage extends cc.Component {
    @property(cc.Boolean)
    public autoJump: boolean = true;

    @property(Number)
    private failChance: Number = 0;
    @property(Player)
    private player: Player = null;
    public playerDie = false;
    @property(cc.Vec2)
    public leftOrigin: cc.Vec2 = cc.v2();
    @property(cc.Vec2)
    public rightOrigin: cc.Vec2 = cc.v2();
    @property(cc.Node)
    public blockLayer: cc.Node = null;
    @property(cc.Node)
    public propLayer: cc.Node = null;
    @property(cc.Node)
    public bg: cc.Node = null;
    @property(cc.Node)
    public loadingLayer: cc.Node = null;
    @property(cc.Node)
    public blockInputLayer: cc.Node = null;
    @property(cc.Node)
    public insufficient: cc.Node = null;
    @property(cc.Float)
    public arrayRatio: number = 0.556047197640118;
    @property
    public canJump = true;
    @property([cc.Prefab])
    private greenblockList: Array<cc.Prefab> = [];
    @property([cc.Prefab])
    private orangeblockList: Array<cc.Prefab> = [];
    @property([cc.Prefab])
    private purpleblockList: Array<cc.Prefab> = [];
    @property(cc.Prefab)
    private grassPropList: cc.Prefab = null;
    @property(cc.Prefab)
    private desertPropList: cc.Prefab = null;
    @property(cc.Prefab)
    private purplePropList: cc.Prefab = null;
    @property(cc.Label)
    private balanceText: cc.Label = null;
    @property(cc.Label)
    private winAmountText: cc.Label = null;
    public winAmount = 0;
    public perfect =0;
    public singleMax =0;
    private currBlock: Block = null;
    public totalBet=0;
    private nextBlock: Block = null;
    private currentValue = 0;
    @property(cc.AudioClip)
    private readyJumpAudio = null;
    private readyJumpAudioId = -1;
    private generatingBalance = false;
    private generatingScore =false;
    timerforLoading=0;
    public reset() {
        this.blockLayer.removeAllChildren();

        // 添加第一个方块
        this.addScore(0);
        let blockNode = cc.instantiate(this.greenblockList[5]);
        this.blockLayer.addChild(blockNode);
        let block = blockNode.getComponent(Block);
        block.closePerfectScore();
        blockNode.position = this.blockLayer.parent.convertToNodeSpaceAR(this.leftOrigin);

        this.currBlock = block;
        this.nextBlock = block;
        this.player.node.position = this.node.parent.convertToNodeSpaceAR(this.currBlock.getCenterPosition());

        this.addBlock();

        //this.addProp();

    }

    public enableTouch() {
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, this.onReadyJump, this);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this.onJump, this);
    }

    public disableTouch() {
        cc.find("Canvas").targetOff(this);
        cc.systemEvent.targetOff(this);
    }


    private onReadyJump() {
        if(this.checkQualify()&&!this.autoJump){
            this.player.readyJump();
        }
        else{

        }
    }

    private addScore(value){
    //    // global.setBalance(global.getBalance() + value);
    //     this.balanceText.string = (Math.round(global.getBalance()*10)/10).toString();

         this.winAmountText.string =(Math.round((this.winAmount + value)*10)/10).toString();
         this.winAmount +=value;
    }

    private updateBalance(){
        this.balanceText.string = (Math.round(global.settings.balance*10)/10).toString();
    }
    public addTotalBet(value){
        this.totalBet+=value;
    }
    public checkQualify(){
        if(global.settings.balance>=cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting){
            return true;
        }
        else{
            return false;
        }
    }
    private onJump() {

        if(!this.autoJump){
            this.blockInputLayer.active = true;
            let jumpDistance = this.player.jumpDistance;
            let dir = this.player.direction;
            let targetPos = new cc.Vec2(this.player.node.x + jumpDistance * dir, this.player.node.y + jumpDistance * this.arrayRatio);
            let targetWorldPos = this.player.node.parent.convertToWorldSpaceAR(targetPos);
            let formatPos = this.nextBlock.getAnchorLocation(targetWorldPos, dir, global.platform);
            this.addTotalBet(cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting);
            if (formatPos !== null) {
                this.player.jumpTo(formatPos, () => {
                    this.currBlock = this.nextBlock;
                    //this.currBlock.playScoreAnim();
                    this.addScore(this.currBlock.trueScore);
                    if(this.currBlock.trueScore>this.singleMax){
                        this.singleMax = this.currBlock.trueScore;
                    }
                    if(global.platform==1){
                        this.perfect++;
                    }
                    cc.find("score",this.player.node).getComponent(cc.Label).string = "+"+Math.round(this.currBlock.trueScore*10)/10;
                    cc.find("score",this.player.node).getComponent(cc.Animation).play();
                    //this.currBlock.stopAllAction(this.player.platformState);
                    G.dispatchEvent(new PlayerJumpSuccessEvent(this.currBlock.score));
                    if(this.checkQualify()){

                        if(!global.isDemo){
                            var emit_result = {
                                'host_id':global.host_id,
                                'access_token': global.access_token,
                                'ticket_id': global.ticket_id,
                                'result': this.currBlock.trueScore,
                                'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                'game_code': global.game_code,
                                'description': "Get previous bet and change bet",
                                'user_id': global.settings.user_id,
                                'api_url':global.api_url,
                                "changeBet":false,

                            };
                            if(global.isEncrypt){
                                global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
                            }
                            else{
                                global.getSocket().emit('send-result', emit_result);
                            }
                            this.generatingBalance = true;
                        }
                        else{
                            global.settings.balance+= this.currBlock.trueScore;
                            this.generatingBalance = true;
                        }
                        this.loadingLayer.opacity = 0;
                        this.loadingLayer.active=true;
                        this.timerforLoading=0;
                    }
                    else{
                        this.insufficient.active = true;
                    }

                });
            } else {
                this.player.jumpTo(targetWorldPos, () => {
                    this.playerDie = true;
                    cc.find("Canvas/AudioManager").getComponent("AudioManager").playLoseSound();
                    var action =  cc.rotateBy(0.2,-90);

                    if(!global.isDemo){
                        var emit_result = {
                            'host_id':global.host_id,
                            'access_token': global.access_token,
                            'ticket_id': global.ticket_id,
                            'result': 0,
                            'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                            'game_code': global.game_code,
                            'description': "Get previous bet and change bet",
                            'user_id': global.settings.user_id,
                            'api_url':global.api_url,
                            "changeBet":false,

                        };
                        if(global.isEncrypt){
                            global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
                        }
                        else{
                            global.getSocket().emit('send-result', emit_result);
                        }
                        this.generatingBalance = true;
                    }
                    else{
                        global.settings.balance+=0;
                        this.generatingBalance = true;
                    }
                    this.loadingLayer.opacity = 0;
                    this.loadingLayer.active=true;
                    this.timerforLoading=0;
                    this.player.node.runAction(action);
                    this.blockInputLayer.active = false;


                });
            }
        }
    }

    public addProp(value,position){

        var propNode;
        this.currentValue = value;
        if(value>=4 &&value<=7){
            propNode = cc.instantiate(this.desertPropList);

        }
        else if(value>=8&&value<=12){
            propNode = cc.instantiate(this.purplePropList);
        }
        else{
            propNode = cc.instantiate(this.grassPropList);
        }
        this.propLayer.addChild(propNode);
        propNode.y = position;
        // let scale = block.minScale + Math.random() * (block.maxScale - block.minScale);

    }

    RandomInt(min, max){
        return min + Math.random() * (max -min);
    }

    public addBlock() {
        let n ;
        let blockNode ;
        if(this.currentValue>=4 &&this.currentValue<=7){

            n = Math.floor(Math.random() * this.orangeblockList.length);
            blockNode = cc.instantiate(this.orangeblockList[n]);
        }
        else if(this.currentValue>=8&&this.currentValue<=12){
            n = Math.floor(Math.random() * this.purpleblockList.length)
            blockNode = cc.instantiate(this.purpleblockList[n]);
        }
        else{
            n = Math.floor(Math.random() * this.greenblockList.length)
            blockNode = cc.instantiate(this.greenblockList[n]);
        }


        this.blockLayer.addChild(blockNode);
        let block = blockNode.getComponent(Block);
        let scale = block.minScale + Math.random() * (block.maxScale - block.minScale);
        //let scale = 1;
       // let distance = block.minDistance + Math.random() * (block.maxDistance - block.minDistance);
        blockNode.scale = scale;
        if (this.player.direction > 0) {
            blockNode.x = this.currBlock.node.x + 500;
            blockNode.y = this.currBlock.node.y + 500 * this.arrayRatio;
        } else {
            blockNode.x = this.currBlock.node.x - 500;
            blockNode.y = this.currBlock.node.y + 500 * this.arrayRatio;
        }
        this.currBlock = this.nextBlock;
        this.nextBlock = block;
        return block;

    }

    public removeBlock() {

    }

    public checkOver(): boolean {
        return this.player.node.position.sub(this.currBlock.node.position).mag()> this.currBlock.node.width / 2 * this.currBlock.node.scale;
    }

    public updateStage(cb:Function,cbTarget?:any) {
        let moveVector;
        let playerWorldPos = this.player.node.parent.convertToWorldSpaceAR(this.player.node.position);
        if(this.player.direction > 0) {
            playerWorldPos.sub(this.leftOrigin);
            moveVector = playerWorldPos.sub(this.leftOrigin);
        }else {
            moveVector = playerWorldPos.sub(this.rightOrigin);
        }
        let finished = cc.callFunc(cb, cbTarget);
        let action = cc.sequence(cc.moveTo(0.7,this.node.position.sub(moveVector)),finished);
        this.bg.runAction(cc.moveTo(0.7,cc.v2(0,this.node.position.sub(moveVector).y)));
        this.node.runAction(action);
    }

    demoGenerateScore(){
        this.loadingLayer.active = false;
        var multiplierPerfect;
        var multiplierConso;
        var platform;
        var perfectScore;
        var consoleScore;
        // calculate multiplier
        platform =   (Math.random() * (1 - 0) + 0);
        if(platform>=0.4){
            platform=1;
        }
        multiplierPerfect = (Math.random() * (10 - 2) + 2);
        multiplierConso = 0.2;
        perfectScore = (cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting * Math.floor(multiplierPerfect));
        consoleScore = Math.round((cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting  * multiplierConso) * 10) / 10;
        global.consoScore = consoleScore;
        global.perfectScore = perfectScore;
        global.platform = platform;
        this.balanceText.string = (Math.round(global.settings.balance*100)/100).toString();
    }
    update(dt){
        if(this.autoJump){
            this.onAutoJump();
        }

        if(this.timerforLoading>=2){
            this.loadingLayer.opacity=255;
        }

        if(this.generatingBalance){
            this.timerforLoading+=dt;
            if(!global.isDemo){
                if(global.finishGeneratingBalance){
                    this.generatingBalance = false;
                    global.finishGeneratingBalance = false;
                    var emit_obj = {
                        'host_id':global.host_id,
                        'access_token': global.access_token,
                        'game_code': 23,
                        'betAmount': global.configBetRange[global.getBetSelection()] * global.configBetAmount[global.betAmountIndex],
                        "key": "Happy Jump bet with these index 1st",
                        "description": "bet",
                        "user_id": global.settings.user_id,
                        'api_url':global.api_url,
                        "requestType": "bet",
                        "currentBetSlot":global.currentBetSlot,

                    }
                    cc.find("Canvas/InGameBetting").getComponent("InGameBetting").playerDie=this.playerDie;
                    if(!this.playerDie){
                        if(global.isEncrypt){
                            global.getSocket().emit('changeBet', ecrypt.encrypt(JSON.stringify(emit_obj)));
                        }
                        else{
                            global.getSocket().emit('changeBet', emit_obj);
                        }
                        this.generatingScore = true;
                    }
                    else{
                        this.loadingLayer.active=false;
                        G.dispatchEvent(new PlayerDieEvent());
                    }
                }
            }
            else {
                this.generatingBalance = false;
                cc.find("Canvas/InGameBetting").getComponent("InGameBetting").playerDie = this.playerDie;
                if (!this.playerDie) {
                    global.settings.balance -= cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting;
                    this.generatingScore = true;
                }
                else {
                    this.loadingLayer.active = false;
                    G.dispatchEvent(new PlayerDieEvent());
                }

            }

        }

        if(this.generatingScore){
            this.timerforLoading+=dt;
            if(!global.isDemo){
                if(global.finishGetData){
                    this.generatingScore = false;
                    global.finishGetData =false;
                    this.scheduleOnce(function(){
                        this.emitChangebet();
                    },1);

                }
            }
            else{
                this.demoGenerateScore();
                this.emitChangebet();
                this.generatingScore = false;
            }

        }
    }

    emitChangebet(){
         this.updateStage(()=>{
            this.addBlock();
            cc.systemEvent.emit("Change-Bet");
        });
        this.loadingLayer.active = false;
        this.blockInputLayer.active = false;
        this.canJump= true;
        this.updateBalance();


    }

    private onAutoJump() {
        if(this.checkQualify()&&this.autoJump){
            if(this.canJump){
                this.player.node.getComponent(cc.Animation).play("ChickenCharge");
                cc.find("rotateAnchor/particlesystem",this.player.node).active = true;
                cc.find("Canvas/AutoJumpManager").getComponent("AutojumpManager").updateJumpTimes();
                this.readyJumpAudioId = cc.audioEngine.play(this.readyJumpAudio,false,global.getEffectVolume());
                this.canJump=false;
                this.scheduleOnce(function(){
                    cc.audioEngine.stop(this.readyJumpAudioId);
                    this.addTotalBet(cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting);
                    let fail = this.RandomInt(0, 100);
                    let jumpDistance = 460 + Math.random() * (520 -460);
                    if(fail<=this.failChance){
                        jumpDistance = this.RandomInt(300,380);
                    }
                   let randomPerfect = 0;
                   if(global.platform == 1 ){
                        global.platform=1;
                   }
                    let dir = this.player.direction;
                    let targetPos = new cc.Vec2(this.player.node.x + jumpDistance * dir, this.player.node.y + jumpDistance * this.arrayRatio);
                    let targetWorldPos = this.player.node.parent.convertToWorldSpaceAR(targetPos);
                    let formatPos = this.nextBlock.getAnchorLocation(targetWorldPos, dir,global.platform);
                    if (formatPos !== null) {
                        this.player.jumpTo(formatPos, () => {
                            this.currBlock = this.nextBlock;
                            //this.currBlock.playScoreAnim();
                            this.addScore(this.currBlock.trueScore);
                            if(this.currBlock.trueScore>this.singleMax){
                                this.singleMax = this.currBlock.trueScore;
                            }
                            if(global.platform==1){
                                this.perfect++;
                            }

                            cc.find("score",this.player.node).getComponent(cc.Label).string = "+"+Math.round(this.currBlock.trueScore*10)/10;
                            cc.find("score",this.player.node).getComponent(cc.Animation).play();
                            //this.currBlock.stopAllAction(this.player.platformState);
                            G.dispatchEvent(new PlayerJumpSuccessEvent(this.currBlock.score));
                            if(this.checkQualify()){
                                if(!global.isDemo){
                                    var emit_result = {
                                        'host_id':global.host_id,
                                        'access_token': global.access_token,
                                        'ticket_id': global.ticket_id,
                                        'result': this.currBlock.trueScore,
                                        'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                        'game_code': global.game_code,
                                        'description': "Get previous bet and change bet",
                                        'user_id': global.settings.user_id,
                                        "changeBet":false,

                                    };
                                    if (global.isEncrypt) {
                                        global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
                                    }
                                    else {
                                        global.getSocket().emit('send-result', emit_result);
                                    }
                                }
                                else{
                                    global.settings.balance+=this.currBlock.trueScore;
                                }
                                this.loadingLayer.opacity = 0;
                                this.loadingLayer.active=true;
                                this.timerforLoading=0;

                                this.generatingBalance = true;
                            }
                            else{
                                this.insufficient.active = true;
                            }


                        });
                    } else {
                        this.player.jumpTo(targetWorldPos, () => {
                            this.playerDie = true;
                            cc.find("Canvas/AudioManager").getComponent("AudioManager").playLoseSound();
                            var action =  cc.rotateBy(0.2,-90);
                            this.player.node.runAction(action);
                            if(!global.isDemo){
                                var emit_result = {
                                    'host_id':global.host_id,
                                    'access_token': global.access_token,
                                    'ticket_id': global.ticket_id,
                                    'result': 0,
                                    'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                    'game_code': global.game_code,
                                    'description': "Get previous bet and change bet",
                                    'user_id': global.settings.user_id,
                                    'api_url':global.api_url,
                                    "changeBet":false,

                                };
                                if (global.isEncrypt) {
                                    global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
                                }
                                else {
                                    global.getSocket().emit('send-result', emit_result);
                                }
                            }
                            else{
                                global.settings.balance+=0;
                            }
                            this.loadingLayer.opacity=0;
                            this.loadingLayer.active=true;
                            this.generatingBalance = true;
                            this.timerforLoading=0;
                            cc.find("Canvas/overPanel").getComponent("OverPanel").isQuit = false;
                            this.canJump=false;
                        });
                    }

                },1);

            }
        }

    }
}
