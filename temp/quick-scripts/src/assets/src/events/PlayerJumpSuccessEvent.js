"use strict";
cc._RF.push(module, 'c94d8XNGTlNI5QI/kwQbDIQ', 'PlayerJumpSuccessEvent');
// src/events/PlayerJumpSuccessEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerJumpSuccessEvent = void 0;
var PlayerJumpSuccessEvent = /** @class */ (function (_super) {
    __extends(PlayerJumpSuccessEvent, _super);
    function PlayerJumpSuccessEvent(score) {
        var _this = _super.call(this, PlayerJumpSuccessEvent.NAME, true) || this;
        _this.score = score;
        return _this;
    }
    PlayerJumpSuccessEvent.NAME = "PlayerJumpSuccess";
    return PlayerJumpSuccessEvent;
}(cc.Event.EventCustom));
exports.PlayerJumpSuccessEvent = PlayerJumpSuccessEvent;

cc._RF.pop();