
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '670f2hksQ5Lw7vOXZiYo8c+', 'GameScene');
// src/components/game/GameScene.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var OverPanel_1 = require("./OverPanel");
var G_1 = require("../../G");
var Stage_1 = require("./stage/Stage");
var PlayerDieEvent_1 = require("../../events/PlayerDieEvent");
var PlayerJumpSuccessEvent_1 = require("../../events/PlayerJumpSuccessEvent");
var global = require("../../GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = null;
        _this.scoreLabel = null;
        _this.score = 0;
        _this.overPanel = null;
        _this.bgm = null;
        _this.loadingLayer = null;
        _this.mainGame = null;
        _this.message = null;
        _this.prompt = null;
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        if (cc.sys.isMobile) {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = false;
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true;
        }
    };
    GameScene.prototype.start = function () {
        this.addListeners();
        this.startGame();
        this.mainGame = cc.find("Canvas/stage").getComponent("Stage");
    };
    GameScene.prototype.startGame = function () {
        this.stage.reset();
        this.stage.enableTouch();
    };
    GameScene.prototype.onPlayerJumpSuccess = function (event) {
        var score = event.score;
        this.addSocre(score);
        // this.stage.updateStage(()=>{
        //     this.stage.addBlock();
        // });
    };
    GameScene.prototype.addSocre = function (s) {
        this.score += s;
        this.scoreLabel.string = this.score;
    };
    GameScene.prototype.onOver = function () {
        var _this = this;
        this.stage.disableTouch();
        setTimeout(function () {
            _this.overPanel.show(_this.score, _this.onRestart, _this.onHome, _this.mainGame.winAmount, _this.mainGame.totalBet, _this.mainGame.singleMax, _this.mainGame.perfect, _this);
        }, 500);
        cc.log("游戏结束");
    };
    GameScene.prototype.onHome = function () {
        this.overPanel.hide();
        this.loadingLayer.active = true;
        cc.director.loadScene("StartScene");
    };
    GameScene.prototype.onRestart = function () {
        cc.find("Canvas/InGameBetting").getComponent("InGameBetting").isRestarting = true,
            // global.getSocket().disconnect();
            this.overPanel.hide();
        cc.director.loadScene("game");
    };
    GameScene.prototype.addListeners = function () {
        G_1.G.on(PlayerDieEvent_1.PlayerDieEvent.NAME, this.onOver, this);
        G_1.G.on(PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this);
    };
    GameScene.prototype.removeListeners = function () {
        G_1.G.off(PlayerDieEvent_1.PlayerDieEvent.NAME, this.onOver, this);
        G_1.G.off(PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this);
    };
    GameScene.prototype.update = function (dt) {
        if (global.isKicked) {
            this.message.string = global.kickMessage;
            this.prompt.active = true;
        }
    };
    GameScene.prototype.blankScreen = function () {
        if (global.settings.lobby_url != null && global.settings.lobby_url != "") {
            window.open(global.settings.lobby_url, "_self");
        }
        else {
            window.open("about:blank", "_self");
        }
    };
    __decorate([
        property(Stage_1.Stage)
    ], GameScene.prototype, "stage", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(OverPanel_1.OverPanel)
    ], GameScene.prototype, "overPanel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameScene.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "loadingLayer", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "message", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "prompt", void 0);
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDZCQUE0QjtBQUM1Qix1Q0FBc0M7QUFDdEMsOERBQTZEO0FBQzdELDhFQUE2RTtBQUU3RSx5Q0FBMkM7QUFFckMsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUErQiw2QkFBWTtJQUQzQztRQUFBLHFFQWlHQztRQTdGVyxXQUFLLEdBQVMsSUFBSSxDQUFDO1FBRW5CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFVixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFNBQUcsR0FBZ0IsSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBOEVsQixDQUFDO0lBNUVHLDBCQUFNLEdBQU47UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzVELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFR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QUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQTVGRDtRQURDLFFBQVEsQ0FBQyxhQUFLLENBQUM7NENBQ1c7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO2dEQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDbUI7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSjtJQUVmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0o7SUFsQkwsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQWdHckI7SUFBRCxnQkFBQztDQWhHRCxBQWdHQyxDQWhHOEIsRUFBRSxDQUFDLFNBQVMsR0FnRzFDO0FBaEdZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlclBhbmVsIH0gZnJvbSBcIi4vT3ZlclBhbmVsXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR1wiO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlL1N0YWdlXCI7XHJcbmltcG9ydCB7IFBsYXllckRpZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9QbGF5ZXJEaWVFdmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50IH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9QbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3N0YWdlL1BsYXllclwiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFN0YWdlKVxyXG4gICAgcHJpdmF0ZSBzdGFnZTpTdGFnZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzY29yZSA9IDA7XHJcbiAgICBAcHJvcGVydHkoT3ZlclBhbmVsKVxyXG4gICAgcHJpdmF0ZSBvdmVyUGFuZWw6T3ZlclBhbmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwdWJsaWMgYmdtOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbG9hZGluZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgIG1haW5HYW1lID1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1lc3NhZ2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm9tcHQgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICB0aGlzLm1haW5HYW1lID0gIGNjLmZpbmQoXCJDYW52YXMvc3RhZ2VcIikuZ2V0Q29tcG9uZW50KFwiU3RhZ2VcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5lbmFibGVUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGxheWVySnVtcFN1Y2Nlc3MoZXZlbnQ6UGxheWVySnVtcFN1Y2Nlc3NFdmVudCkge1xyXG4gICAgICAgIGxldCBzY29yZSA9IGV2ZW50LnNjb3JlO1xyXG4gICAgICAgIHRoaXMuYWRkU29jcmUoc2NvcmUpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhZ2UudXBkYXRlU3RhZ2UoKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZS5hZGRCbG9jaygpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNvY3JlKHMpIHtcclxuICAgICAgICB0aGlzLnNjb3JlKz1zO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLmRpc2FibGVUb3VjaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlclBhbmVsLnNob3codGhpcy5zY29yZSx0aGlzLm9uUmVzdGFydCx0aGlzLm9uSG9tZSx0aGlzLm1haW5HYW1lLndpbkFtb3VudCx0aGlzLm1haW5HYW1lLnRvdGFsQmV0LHRoaXMubWFpbkdhbWUuc2luZ2xlTWF4LHRoaXMubWFpbkdhbWUucGVyZmVjdCx0aGlzKTtcclxuICAgICAgICB9LDUwMCk7XHJcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCl7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0U2NlbmVcIik7XHJcbiAgICB9XHJcbiAgICBvblJlc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuaXNSZXN0YXJ0aW5nID0gdHJ1ZSxcclxuICAgICAgICAvLyBnbG9iYWwuZ2V0U29ja2V0KCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMub3ZlclBhbmVsLmhpZGUoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICBHLm9uKFBsYXllckRpZUV2ZW50Lk5BTUUsdGhpcy5vbk92ZXIsdGhpcyk7XHJcbiAgICAgICAgRy5vbihQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50Lk5BTUUsdGhpcy5vblBsYXllckp1bXBTdWNjZXNzLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgICAgICBHLm9mZihQbGF5ZXJEaWVFdmVudC5OQU1FLHRoaXMub25PdmVyLHRoaXMpO1xyXG4gICAgICAgIEcub2ZmKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0aGlzLm9uUGxheWVySnVtcFN1Y2Nlc3MsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKGdsb2JhbC5pc0tpY2tlZCl7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5zdHJpbmcgPSBnbG9iYWwua2lja01lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJvbXB0LmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgYmxhbmtTY3JlZW4oKXtcclxuICAgICAgICBpZiAoZ2xvYmFsLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBudWxsICYmIGdsb2JhbC5zZXR0aW5ncy5sb2JieV91cmwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihnbG9iYWwuc2V0dGluZ3MubG9iYnlfdXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiYWJvdXQ6YmxhbmtcIiwgXCJfc2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19