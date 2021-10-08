
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/menu/MenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxtZW51XFxNZW51U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUV0QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTRCQztRQXpCVyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUF1QjFDLENBQUM7SUFyQkcsMEJBQU0sR0FBTjtRQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUMsS0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDZ0I7SUFMN0IsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTRCckI7SUFBRCxnQkFBQztDQTVCRCxBQTRCQyxDQTVCOEIsRUFBRSxDQUFDLFNBQVMsR0E0QjFDO0FBNUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzdGFydEJ1dHRvbjpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcclxuICAgIHByaXZhdGUgc2VsZWN0UGFnZTpjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWFza1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBuID0gdGhpcy5zZWxlY3RQYWdlLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgICAgICBHLnN0YXJ0R2FtZShuKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0blN0YXJ0LHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=