
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
exports.G = exports.Global = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFFeEQ7SUFBNEIsMEJBQWM7SUFHdEM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixjQUFxQjtRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsVUFBQyxHQUFHLEVBQUMsS0FBSztZQUNuQyxJQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNMLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQztnQkFDakYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFic0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUFlMUQsYUFBQztDQWhCRCxBQWdCQyxDQWhCMkIsRUFBRSxDQUFDLFdBQVcsR0FnQnpDO0FBaEJZLHdCQUFNO0FBa0JOLFFBQUEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWUvR2FtZVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuRXZlbnRUYXJnZXQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJbnN0YW5jZTpHbG9iYWwgPSBuZXcgR2xvYmFsKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoc2VsZWN0ZWRQbGF5ZXI6bnVtYmVyKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiLChlcnIsc2NlbmUpPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnYW1lU2NlbmU6R2FtZVNjZW5lID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGdhbWVTY2VuZS5iZ20sdHJ1ZSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEcgPSBHbG9iYWwuSW5zdGFuY2U7Il19