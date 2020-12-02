"use strict";
cc._RF.push(module, '0598aP9w/pK4qHQkgTWsX9/', 'PlayerDieEvent');
// src/events/PlayerDieEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerDieEvent = /** @class */ (function (_super) {
    __extends(PlayerDieEvent, _super);
    function PlayerDieEvent() {
        return _super.call(this, PlayerDieEvent.NAME, true) || this;
    }
    PlayerDieEvent.NAME = "PlayerDie";
    return PlayerDieEvent;
}(cc.Event.EventCustom));
exports.PlayerDieEvent = PlayerDieEvent;

cc._RF.pop();