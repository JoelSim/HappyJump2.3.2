const { ccclass, property } = cc._decorator;

@ccclass
export class Block extends cc.Component {

    @property(cc.Float)
    public maxScale: number = 0;
    @property(cc.Float)
    public minScale: number = 0;
    @property(cc.Float)
    public minDistance: number = 0;
    @property(cc.Float)
    public maxDistance: number = 0;
    @property(cc.Float)
    public anchorOffset: number = 0;
    @property(cc.Integer)
    public score: number = 1;

    @property([cc.Node])
    private rightAnchorList: Array<cc.Node> = [];
    @property([cc.Node])
    private leftAnchorList: Array<cc.Node> = [];
    @property(cc.Node)
    private centerAnchor: cc.Node = null;

    @property(cc.Node)
    private p1:cc.Node = null;
    @property(cc.Node)
    private p2:cc.Node = null;
    @property(cc.Vec2)
    private localPlayerPos:cc.Vec2 = null;
    public trueScore: number = 0;

    public getCenterPosition():cc.Vec2 {
        return this.centerAnchor.parent.convertToWorldSpaceAR(this.centerAnchor.position);
    }

    public getAnchorLocation(worldPos:cc.Vec2,direction:number ,platformState):cc.Vec2 {
        let localPos = this.node.convertToNodeSpaceAR(worldPos);
        let anchorList = direction>0?this.rightAnchorList:this.leftAnchorList
        let nearAnchor = anchorList[0];
        let farAnchor = anchorList[0];
        for(let i = 1;i < anchorList.length;i++) {

            if( anchorList[i].position.sub(localPos).mag()< nearAnchor.position.sub(localPos).mag()
            ){
                nearAnchor = anchorList[i];
            }
            else{
                farAnchor = anchorList[i];
            }
        }
        // if(nearAnchor.position.sub(localPos).mag() <=this.anchorOffset) {
            if(platformState==1){
                this.localPlayerPos = nearAnchor.position;
            }
            else{
                this.localPlayerPos = farAnchor.position;
            }
            this.stopAllAction(platformState);
            this.trueScore = this.getScore(platformState);
            return nearAnchor.parent.convertToWorldSpaceAR(nearAnchor.position);
        // }else{
        //     return null;
        // }


    }

    public getLeftTan():number { 
        return this.p1.y/(-this.p1.x);
    }

    public getRightTan():number {
        cc.log(this.p2.y/this.p2.x);        
        return this.p2.y/this.p2.x;
    }

    public playScoreAnim() {
        cc.find("score",this.node).parent = cc.find("Canvas/stage/ScoreLayer");
        cc.find("score",this.node).getComponent(cc.Label).string = "+"+Math.round(this.trueScore*10)/10;
        cc.find("score",this.node).getComponent(cc.Animation).play();
    }

    public getScore(platformState){
        return cc.find("perfectScore",this.node).getComponent("ScoreMoving").getScore(platformState);
    }
    public stopAllAction(platformState){
        cc.find("perfectScore",this.node).getComponent("ScoreMoving").stopAll(this.localPlayerPos,platformState);
    }

    public closePerfectScore(){
        cc.find("perfectScore",this.node).active = false;
    }
    // public shrink() {
    //     // cc.find("sprite",this.node).runAction(cc.scaleTo(2,1,0.5));
    //     this.node.runAction(cc.scaleTo(2,1,0.5));
    // }

    // public stopShrink() {
    //     // cc.find("sprite",this.node).stopAllActions();
    //     this.node.stopAllActions();
    // }

    // public enlarge() {
    //     cc.find("sprite",this.node).runAction(cc.scaleTo(1,1,1));
    //     this.node.runAction(cc.scaleTo(1,1,1));
    // }

}
