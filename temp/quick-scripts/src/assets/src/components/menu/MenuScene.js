"use strict";
cc._RF.push(module, 'd53944AFM9HprOUPOgbFtLe', 'MenuScene');
// src/components/menu/MenuScene.ts

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
exports.MenuScene = void 0;
var G_1 = require("../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.selectPage = null;
        return _this;
    }
    MenuScene.prototype.onLoad = function () {
        if (cc.sys.isMobile) {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = false;
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true;
        }
    };
    MenuScene.prototype.start = function () {
        this.addListeners();
    };
    MenuScene.prototype.onBtnStart = function () {
        cc.find("Canvas/mask").active = true;
        var n = this.selectPage.getCurrentPageIndex();
        G_1.G.startGame(n);
    };
    MenuScene.prototype.addListeners = function () {
        this.startButton.on(cc.Node.EventType.TOUCH_END, this.onBtnStart, this);
    };
    __decorate([
        property(cc.Node)
    ], MenuScene.prototype, "startButton", void 0);
    __decorate([
        property(cc.PageView)
    ], MenuScene.prototype, "selectPage", void 0);
    MenuScene = __decorate([
        ccclass
    ], MenuScene);
    return MenuScene;
}(cc.Component));
exports.MenuScene = MenuScene;

cc._RF.pop();