
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/PlayerJumpSuccessEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFBsYXllckp1bXBTdWNjZXNzRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTRDLDBDQUFvQjtJQUc1RCxnQ0FBbUIsS0FBWTtRQUEvQixZQUNJLGtCQUFNLHNCQUFzQixDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FFMUM7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7SUFDdkIsQ0FBQztJQUxzQiwyQkFBSSxHQUFVLG1CQUFtQixDQUFDO0lBTTdELDZCQUFDO0NBUEQsQUFPQyxDQVAyQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FPL0Q7QUFQWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFNRTpzdHJpbmcgPSBcIlBsYXllckp1bXBTdWNjZXNzXCI7XHJcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlclxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3JlOm51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0cnVlKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcbn0iXX0=