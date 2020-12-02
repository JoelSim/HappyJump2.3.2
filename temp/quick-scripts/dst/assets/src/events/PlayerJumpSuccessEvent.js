
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFBsYXllckp1bXBTdWNjZXNzRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBNEMsMENBQW9CO0lBRzVELGdDQUFtQixLQUFZO1FBQS9CLFlBQ0ksa0JBQU0sc0JBQXNCLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUUxQztRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUN2QixDQUFDO0lBTHNCLDJCQUFJLEdBQVUsbUJBQW1CLENBQUM7SUFNN0QsNkJBQUM7Q0FQRCxBQU9DLENBUDJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQU8vRDtBQVBZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50IGV4dGVuZHMgY2MuRXZlbnQuRXZlbnRDdXN0b20ge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FOnN0cmluZyA9IFwiUGxheWVySnVtcFN1Y2Nlc3NcIjtcclxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcmU6bnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoUGxheWVySnVtcFN1Y2Nlc3NFdmVudC5OQU1FLHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgIH1cclxufSJdfQ==