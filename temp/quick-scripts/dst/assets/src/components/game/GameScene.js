
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.GameScene = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4Qyw2QkFBNEI7QUFDNUIsdUNBQXNDO0FBQ3RDLDhEQUE2RDtBQUM3RCw4RUFBNkU7QUFFN0UseUNBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBZ0dDO1FBN0ZXLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFFLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUE4RWxCLENBQUM7SUE1RUcsMEJBQU0sR0FBTjtRQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENB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SUFBSSxDQUFDO1NBQ25DO0lBQ0MsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFDSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBNUZEO1FBREMsUUFBUSxDQUFDLGFBQUssQ0FBQzs0Q0FDVztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLHFCQUFTLENBQUM7Z0RBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUlyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNKO0lBRWY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSjtJQWxCTCxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0dyQjtJQUFELGdCQUFDO0NBaEdELEFBZ0dDLENBaEc4QixFQUFFLENBQUMsU0FBUyxHQWdHMUM7QUFoR1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVyUGFuZWwgfSBmcm9tIFwiLi9PdmVyUGFuZWxcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UvU3RhZ2VcIjtcclxuaW1wb3J0IHsgUGxheWVyRGllRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckRpZUV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllckp1bXBTdWNjZXNzRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckp1bXBTdWNjZXNzRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vc3RhZ2UvUGxheWVyXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi4vLi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoU3RhZ2UpXHJcbiAgICBwcml2YXRlIHN0YWdlOlN0YWdlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuICAgIEBwcm9wZXJ0eShPdmVyUGFuZWwpXHJcbiAgICBwcml2YXRlIG92ZXJQYW5lbDpPdmVyUGFuZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHB1YmxpYyBiZ206Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2FkaW5nTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSAgbWFpbkdhbWUgPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWVzc2FnZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb21wdCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbkdhbWUgPSAgY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnN0YWdlLmVuYWJsZVRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJKdW1wU3VjY2VzcyhldmVudDpQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNjb3JlID0gZXZlbnQuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5hZGRTb2NyZShzY29yZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFnZS51cGRhdGVTdGFnZSgoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlLmFkZEJsb2NrKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU29jcmUocykge1xyXG4gICAgICAgIHRoaXMuc2NvcmUrPXM7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuZGlzYWJsZVRvdWNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLnNjb3JlLHRoaXMub25SZXN0YXJ0LHRoaXMub25Ib21lLHRoaXMubWFpbkdhbWUud2luQW1vdW50LHRoaXMubWFpbkdhbWUudG90YWxCZXQsdGhpcy5tYWluR2FtZS5zaW5nbGVNYXgsdGhpcy5tYWluR2FtZS5wZXJmZWN0LHRoaXMpO1xyXG4gICAgICAgIH0sNTAwKTtcclxuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIilcclxuICAgIH1cclxuXHJcbiAgICBvbkhvbWUoKXtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRTY2VuZVwiKTtcclxuICAgIH1cclxuICAgIG9uUmVzdGFydCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5pc1Jlc3RhcnRpbmcgPSB0cnVlLFxyXG4gICAgICAgIC8vIGdsb2JhbC5nZXRTb2NrZXQoKS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIEcub24oUGxheWVyRGllRXZlbnQuTkFNRSx0aGlzLm9uT3Zlcix0aGlzKTtcclxuICAgICAgICBHLm9uKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0aGlzLm9uUGxheWVySnVtcFN1Y2Nlc3MsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIEcub2ZmKFBsYXllckRpZUV2ZW50Lk5BTUUsdGhpcy5vbk92ZXIsdGhpcyk7XHJcbiAgICAgICAgRy5vZmYoUGxheWVySnVtcFN1Y2Nlc3NFdmVudC5OQU1FLHRoaXMub25QbGF5ZXJKdW1wU3VjY2Vzcyx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsLmlzS2lja2VkKXtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnN0cmluZyA9IGdsb2JhbC5raWNrTWVzc2FnZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBibGFua1NjcmVlbigpe1xyXG4gICAgICAgIGlmIChnbG9iYWwuc2V0dGluZ3MubG9iYnlfdXJsICE9IG51bGwgJiYgZ2xvYmFsLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbC5zZXR0aW5ncy5sb2JieV91cmwsIFwiX3NlbGZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJhYm91dDpibGFua1wiLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=