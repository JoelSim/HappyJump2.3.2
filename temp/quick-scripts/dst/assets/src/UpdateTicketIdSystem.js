
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/UpdateTicketIdSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe477PxJR5JGIKv8JEaaTwx', 'UpdateTicketIdSystem');
// src/UpdateTicketIdSystem.ts

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
var global = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UpdateTicketIdSystem = /** @class */ (function (_super) {
    __extends(UpdateTicketIdSystem, _super);
    function UpdateTicketIdSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actualTicketId = null;
        _this.actualDemoMode = null;
        _this.label = null;
        return _this;
    }
    UpdateTicketIdSystem.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    UpdateTicketIdSystem.prototype.update = function () {
        if (global.ticket_id == this.actualTicketId && global.isDemo == this.actualDemoMode)
            return;
        this.actualTicketId = global.ticket_id;
        this.actualDemoMode = global.isDemo;
        if (global.isDemo) {
            this.label.string = "DEMO MODE";
        }
        else {
            if (this.actualTicketId == null) {
                this.label.string = "";
            }
            else {
                this.label.string = global.ticket_id;
            }
        }
    };
    UpdateTicketIdSystem = __decorate([
        ccclass
    ], UpdateTicketIdSystem);
    return UpdateTicketIdSystem;
}(cc.Component));
exports.default = UpdateTicketIdSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxVcGRhdGVUaWNrZXRJZFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUM7QUFFakMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUF1QkM7UUF0Qkcsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFvQmpCLENBQUM7SUFsQkcscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDSSxJQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUMzRixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUcsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztTQUNuQzthQUNHO1lBQ0EsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksRUFBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQzFCO2lCQUFJO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDeEM7U0FDSjtJQUNMLENBQUM7SUF0QmdCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBdUJ4QztJQUFELDJCQUFDO0NBdkJELEFBdUJDLENBdkJpRCxFQUFFLENBQUMsU0FBUyxHQXVCN0Q7a0JBdkJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVUaWNrZXRJZFN5c3RlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBhY3R1YWxUaWNrZXRJZCA9IG51bGw7XHJcbiAgICBhY3R1YWxEZW1vTW9kZSA9IG51bGw7XHJcbiAgICBsYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKGdsb2JhbC50aWNrZXRfaWQgPT0gdGhpcy5hY3R1YWxUaWNrZXRJZCAmJiBnbG9iYWwuaXNEZW1vID09IHRoaXMuYWN0dWFsRGVtb01vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFjdHVhbFRpY2tldElkID0gZ2xvYmFsLnRpY2tldF9pZDtcclxuICAgICAgICB0aGlzLmFjdHVhbERlbW9Nb2RlID0gZ2xvYmFsLmlzRGVtbztcclxuICAgICAgICBpZihnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkRFTU8gTU9ERVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLmFjdHVhbFRpY2tldElkID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gZ2xvYmFsLnRpY2tldF9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=