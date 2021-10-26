"use strict";
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