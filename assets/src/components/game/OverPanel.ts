const { ccclass, property } = cc._decorator;

@ccclass
export class OverPanel extends cc.Component {

    @property(cc.Label)
    private messageLabel: cc.Label = null;
    @property(cc.Label)
    private winAmountString: cc.Label = null;
    @property(cc.Label)
    private singleMaxWin: cc.Label = null;
    @property(cc.Label)
    private totalBetString: cc.Label = null;
    @property(cc.Node)
    private restartButton: cc.Node = null;
    @property(cc.Node)
    private homeButton: cc.Node = null;
    @property(cc.Label)
    private perfectString: cc.Label = null;
    @property(cc.Node)
    private loadingLayer: cc.Node = null;
    public isQuit = false;
    public show(score: number,cb,home,winAmount,totalBet,singleMaxWin,perfectScore,target?:any) {
        this.scheduleOnce(function(){
            cc.find("Canvas/AudioManager").getComponent("AudioManager").playWin();
            this.node.active = true;
            this.messageLabel.string = score + "";
            this.restartButton.once(cc.Node.EventType.TOUCH_END,cb,target);
            this.homeButton.once(cc.Node.EventType.TOUCH_END,home,target);
            if(this.isQuit){
                this.restartButton.active =false;
                this.homeButton.position = cc.v2(0,-445);
            }
           
            this.winAmountString.string = (Math.round(winAmount*10)/10).toString();
            this.totalBetString.string=totalBet;
            this.singleMaxWin.string =(Math.round(singleMaxWin*10)/10).toString();
            this.perfectString.string = perfectScore.toString();
        },0.5);
        

    }

    public hide() {
        this.node.active = false;
    }
}