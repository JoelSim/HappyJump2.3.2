
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4eb76347PJBwZKH/rdxU5j/', 'G');
// src/G.ts

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
var GameScene_1 = require("./components/game/GameScene");
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super.call(this) || this;
    }
    Global.prototype.startGame = function (selectedPlayer) {
        cc.director.loadScene("game", function (err, scene) {
            if (!err) {
                var gameScene = scene.getChildByName("Canvas").getComponent(GameScene_1.GameScene);
                cc.audioEngine.play(gameScene.bgm, true, 1);
            }
        });
    };
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.Global = Global;
exports.G = Global.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUV4RDtJQUE0QiwwQkFBYztJQUd0QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVNLDBCQUFTLEdBQWhCLFVBQWlCLGNBQXFCO1FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxVQUFDLEdBQUcsRUFBQyxLQUFLO1lBQ25DLElBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxTQUFTLEdBQWEsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxDQUFDO2dCQUNqRixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWJzQixlQUFRLEdBQVUsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQWUxRCxhQUFDO0NBaEJELEFBZ0JDLENBaEIyQixFQUFFLENBQUMsV0FBVyxHQWdCekM7QUFoQlksd0JBQU07QUFrQk4sUUFBQSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZS9HYW1lU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWwgZXh0ZW5kcyBjYy5FdmVudFRhcmdldCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEluc3RhbmNlOkdsb2JhbCA9IG5ldyBHbG9iYWwoKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0R2FtZShzZWxlY3RlZFBsYXllcjpudW1iZXIpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIsKGVycixzY2VuZSk9PntcclxuICAgICAgICAgICAgaWYoIWVycikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWVTY2VuZTpHYW1lU2NlbmUgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoR2FtZVNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoZ2FtZVNjZW5lLmJnbSx0cnVlLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRyA9IEdsb2JhbC5JbnN0YW5jZTsiXX0=