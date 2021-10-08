
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/OverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxPdmVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBMkNDO1FBeENXLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzlCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBeUIxQixDQUFDO0lBeEJVLHdCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsTUFBVztRQUN0RixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUdYLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDc0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDcUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDb0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDbUI7SUFqQjVCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0EyQ3JCO0lBQUQsZ0JBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQzhCLEVBQUUsQ0FBQyxTQUFTLEdBMkMxQztBQTNDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgT3ZlclBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5BbW91bnRTdHJpbmc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2luZ2xlTWF4V2luOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRvdGFsQmV0U3RyaW5nOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcmVzdGFydEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaG9tZUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBlcmZlY3RTdHJpbmc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2FkaW5nTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGlzUXVpdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNob3coc2NvcmU6IG51bWJlcixjYixob21lLHdpbkFtb3VudCx0b3RhbEJldCxzaW5nbGVNYXhXaW4scGVyZmVjdFNjb3JlLHRhcmdldD86YW55KSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlXaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IHNjb3JlICsgXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELGNiLHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUJ1dHRvbi5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxob21lLHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNRdWl0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lQnV0dG9uLnBvc2l0aW9uID0gY2MudjIoMCwtNDQ1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLndpbkFtb3VudFN0cmluZy5zdHJpbmcgPSAoTWF0aC5yb3VuZCh3aW5BbW91bnQqMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQmV0U3RyaW5nLnN0cmluZz10b3RhbEJldDtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXhXaW4uc3RyaW5nID0oTWF0aC5yb3VuZChzaW5nbGVNYXhXaW4qMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZlY3RTdHJpbmcuc3RyaW5nID0gcGVyZmVjdFNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSwwLjUpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=