
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxPdmVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUQzQztRQUFBLHFFQTRDQztRQXhDVyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM5QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQXlCMUIsQ0FBQztJQXhCVSx3QkFBSSxHQUFYLFVBQVksS0FBYSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLE1BQVc7UUFDdEYsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRSxLQUFLLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ3NCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ3FCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ29CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ21CO0lBakI1QixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBMkNyQjtJQUFELGdCQUFDO0NBM0NELEFBMkNDLENBM0M4QixFQUFFLENBQUMsU0FBUyxHQTJDMUM7QUEzQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE92ZXJQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgd2luQW1vdW50U3RyaW5nOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHNpbmdsZU1heFdpbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0b3RhbEJldFN0cmluZzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHJlc3RhcnRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGhvbWVCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwZXJmZWN0U3RyaW5nOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbG9hZGluZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpc1F1aXQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzaG93KHNjb3JlOiBudW1iZXIsY2IsaG9tZSx3aW5BbW91bnQsdG90YWxCZXQsc2luZ2xlTWF4V2luLHBlcmZlY3RTY29yZSx0YXJnZXQ/OmFueSkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5V2luKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSBzY29yZSArIFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxjYix0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVCdXR0b24ub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsaG9tZSx0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzUXVpdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRCdXR0b24uYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUJ1dHRvbi5wb3NpdGlvbiA9IGNjLnYyKDAsLTQ0NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53aW5BbW91bnRTdHJpbmcuc3RyaW5nID0gKE1hdGgucm91bmQod2luQW1vdW50KjEwKS8xMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEJldFN0cmluZy5zdHJpbmc9dG90YWxCZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlTWF4V2luLnN0cmluZyA9KE1hdGgucm91bmQoc2luZ2xlTWF4V2luKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5wZXJmZWN0U3RyaW5nLnN0cmluZyA9IHBlcmZlY3RTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIH0sMC41KTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il19