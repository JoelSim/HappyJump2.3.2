"use strict";
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