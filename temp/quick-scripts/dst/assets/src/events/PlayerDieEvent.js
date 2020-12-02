
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/PlayerDieEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFBsYXllckRpZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQW9DLGtDQUFvQjtJQUdwRDtlQUNJLGtCQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFKc0IsbUJBQUksR0FBRyxXQUFXLENBQUM7SUFNOUMscUJBQUM7Q0FQRCxBQU9DLENBUG1DLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU92RDtBQVBZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBsYXllckRpZUV2ZW50IGV4dGVuZHMgY2MuRXZlbnQuRXZlbnRDdXN0b20ge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FID0gXCJQbGF5ZXJEaWVcIjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoUGxheWVyRGllRXZlbnQuTkFNRSx0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19