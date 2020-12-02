"use strict";
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