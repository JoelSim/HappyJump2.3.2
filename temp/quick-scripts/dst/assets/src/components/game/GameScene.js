
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDZCQUE0QjtBQUM1Qix1Q0FBc0M7QUFDdEMsOERBQTZEO0FBQzdELDhFQUE2RTtBQUl2RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBRDNDO1FBQUEscUVBOEVDO1FBMUVXLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFHLElBQUksQ0FBQztRQUVWLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRSxJQUFJLENBQUM7O0lBZ0U1QixDQUFDO0lBL0RHLDBCQUFNLEdBQU47UUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzVELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7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QU87T0FDSyxTQUFTLENBNkVyQjtJQUFELGdCQUFDO0NBN0VELEFBNkVDLENBN0U4QixFQUFFLENBQUMsU0FBUyxHQTZFMUM7QUE3RVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVyUGFuZWwgfSBmcm9tIFwiLi9PdmVyUGFuZWxcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UvU3RhZ2VcIjtcclxuaW1wb3J0IHsgUGxheWVyRGllRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckRpZUV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllckp1bXBTdWNjZXNzRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckp1bXBTdWNjZXNzRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vc3RhZ2UvUGxheWVyXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi4vLi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoU3RhZ2UpXHJcbiAgICBwcml2YXRlIHN0YWdlOlN0YWdlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuICAgIEBwcm9wZXJ0eShPdmVyUGFuZWwpXHJcbiAgICBwcml2YXRlIG92ZXJQYW5lbDpPdmVyUGFuZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHB1YmxpYyBiZ20gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxvYWRpbmdMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlICBtYWluR2FtZSA9bnVsbDtcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICB0aGlzLm1haW5HYW1lID0gIGNjLmZpbmQoXCJDYW52YXMvc3RhZ2VcIikuZ2V0Q29tcG9uZW50KFwiU3RhZ2VcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5lbmFibGVUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGxheWVySnVtcFN1Y2Nlc3MoZXZlbnQ6UGxheWVySnVtcFN1Y2Nlc3NFdmVudCkge1xyXG4gICAgICAgIGxldCBzY29yZSA9IGV2ZW50LnNjb3JlO1xyXG4gICAgICAgIHRoaXMuYWRkU29jcmUoc2NvcmUpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhZ2UudXBkYXRlU3RhZ2UoKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZS5hZGRCbG9jaygpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNvY3JlKHMpIHtcclxuICAgICAgICB0aGlzLnNjb3JlKz1zO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnN0YWdlLmRpc2FibGVUb3VjaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlclBhbmVsLnNob3codGhpcy5zY29yZSx0aGlzLm9uUmVzdGFydCx0aGlzLm9uSG9tZSx0aGlzLm1haW5HYW1lLndpbkFtb3VudCx0aGlzLm1haW5HYW1lLnRvdGFsQmV0LHRoaXMubWFpbkdhbWUuc2luZ2xlTWF4LHRoaXMubWFpbkdhbWUucGVyZmVjdCx0aGlzKTtcclxuICAgICAgICB9LDUwMCk7XHJcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCl7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0U2NlbmVcIik7XHJcbiAgICB9XHJcbiAgICBvblJlc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuaXNSZXN0YXJ0aW5nID0gdHJ1ZSxcclxuICAgICAgICAvLyBnbG9iYWwuZ2V0U29ja2V0KCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMub3ZlclBhbmVsLmhpZGUoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICBHLm9uKFBsYXllckRpZUV2ZW50Lk5BTUUsdGhpcy5vbk92ZXIsdGhpcyk7XHJcbiAgICAgICAgRy5vbihQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50Lk5BTUUsdGhpcy5vblBsYXllckp1bXBTdWNjZXNzLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgICAgICBHLm9mZihQbGF5ZXJEaWVFdmVudC5OQU1FLHRoaXMub25PdmVyLHRoaXMpO1xyXG4gICAgICAgIEcub2ZmKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0aGlzLm9uUGxheWVySnVtcFN1Y2Nlc3MsdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=