"use strict";
cc._RF.push(module, 'b702fWA3yZGha6sOqGGOWpd', 'OverPanel');
// src/components/game/OverPanel.ts

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
exports.OverPanel = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverPanel = /** @class */ (function (_super) {
    __extends(OverPanel, _super);
    function OverPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.winAmountString = null;
        _this.singleMaxWin = null;
        _this.totalBetString = null;
        _this.restartButton = null;
        _this.homeButton = null;
        _this.perfectString = null;
        _this.loadingLayer = null;
        _this.isQuit = false;
        return _this;
    }
    OverPanel.prototype.show = function (score, cb, home, winAmount, totalBet, singleMaxWin, perfectScore, target) {
        this.scheduleOnce(function () {
            cc.find("Canvas/AudioManager").getComponent("AudioManager").playWin();
            this.node.active = true;
            this.messageLabel.string = score + "";
            this.restartButton.once(cc.Node.EventType.TOUCH_END, cb, target);
            this.homeButton.once(cc.Node.EventType.TOUCH_END, home, target);
            if (this.isQuit) {
                this.restartButton.active = false;
                this.homeButton.position = cc.v2(0, -445);
            }
            this.winAmountString.string = (Math.round(winAmount * 10) / 10).toString();
            this.totalBetString.string = totalBet;
            this.singleMaxWin.string = (Math.round(singleMaxWin * 10) / 10).toString();
            this.perfectString.string = perfectScore.toString();
        }, 0.5);
    };
    OverPanel.prototype.hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "winAmountString", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "singleMaxWin", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "totalBetString", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "restartButton", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "homeButton", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "perfectString", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "loadingLayer", void 0);
    OverPanel = __decorate([
        ccclass
    ], OverPanel);
    return OverPanel;
}(cc.Component));
exports.OverPanel = OverPanel;

cc._RF.pop();