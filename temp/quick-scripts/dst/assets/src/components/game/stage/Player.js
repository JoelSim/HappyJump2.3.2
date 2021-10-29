
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/stage/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bd49uTlnBLrLGadJkec3pf', 'Player');
// src/components/game/stage/Player.ts

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
exports.Player = void 0;
var global = require("../../../GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpDistance = 0;
        _this.platformConsoRate = 0;
        _this.power = 0;
        _this.initSpeed = 0;
        _this.speed = 0;
        _this.isReadyJump = false;
        _this.direction = 1;
        _this.readyJumpAudio = null;
        _this.readyJumpAudioId = -1;
        _this.jumpAudio = null;
        _this.jumpAudioId = -1;
        _this.isCharging = false;
        _this.isJumping = false;
        _this.randomTimer = 2;
        _this.timer = 0;
        _this.jumpCount = 0;
        _this.stage = null;
        return _this;
    }
    Player.prototype.onLoad = function () {
        cc.find("title", this.node).active = false;
        this.stage = cc.find("Canvas/stage").getComponent("Stage");
    };
    Player.prototype.readyJump = function () {
        this.readyJumpAudioId = cc.audioEngine.play(this.readyJumpAudio, false, global.getEffectVolume());
        cc.find("title", this.node).active = true;
        this.node.getComponent(cc.Animation).play("ChickenCharge");
        cc.find("rotateAnchor/particlesystem", this.node).active = true;
        this.speed = this.initSpeed;
        this.isReadyJump = true;
        this.isCharging = true;
    };
    Player.prototype.jumpTo = function (worldPos, cb, cbTarget) {
        var _this = this;
        this.jumpCount += 1;
        this.isCharging = false;
        this.isJumping = true;
        cc.find("rotateAnchor/particlesystem", this.node).active = false;
        this.scheduleOnce(function () {
            _this.isJumping = false;
        }, 1);
        this.node.getComponent(cc.Animation).play("ChickenIdle");
        cc.audioEngine.stop(this.readyJumpAudioId);
        if (global.getEffectVolume() != 0) {
            this.jumpAudioId = cc.audioEngine.play(this.jumpAudio, false, 1);
        }
        cc.find("rotateAnchor/sprite", this.node).stopAllActions();
        cc.find("title", this.node).active = false;
        var targetPos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.node.color = cc.Color.WHITE;
        this.isReadyJump = false;
        var resetAction = cc.scaleTo(1, 1, 1);
        var jumpAction = cc.jumpTo(0.5, targetPos, 500, 1);
        var rotateAction = cc.rotateBy(0.5, this.direction * (-360));
        var finished = cc.callFunc(function () {
            if (_this.jumpCount >= 3) {
                if (_this.direction == 1) {
                    _this.direction = -1;
                }
                else {
                    _this.direction = 1;
                }
                _this.jumpCount = 0;
            }
            //this.direction = Math.random()>0.5?1:-1;
            _this.speed = 0;
            _this.jumpDistance = 0;
            cb();
        }, cbTarget);
        cc.find("rotateAnchor/sprite", this.node).runAction(resetAction);
        cc.find("rotateAnchor", this.node).runAction(rotateAction);
        this.node.runAction(cc.sequence(jumpAction, finished));
    };
    Player.prototype.RandomInt = function (min, max) {
        return parseInt((Math.random() * ((max + 1 - min) + min)).toString());
    };
    Player.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.randomTimer) {
            if (!this.isCharging && !this.isJumping && !this.stage.autoJump) {
                this.node.getComponent(cc.Animation).play("ChickenSingin");
            }
            this.randomTimer = this.RandomInt(2, 8);
            this.timer = 0;
        }
        if (this.isReadyJump) {
            this.speed += dt * this.power;
            this.jumpDistance += this.speed * dt;
        }
    };
    __decorate([
        property(cc.Float)
    ], Player.prototype, "jumpDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "platformConsoRate", void 0);
    __decorate([
        property(cc.Integer)
    ], Player.prototype, "power", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "initSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "readyJumpAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "jumpAudio", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0Q0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE2R0M7UUExR1Usa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUUsS0FBSyxDQUFDO1FBQ2xCLGVBQVMsR0FBRSxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQUUsSUFBSSxDQUFDOztJQWlGeEIsQ0FBQztJQWhGRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENB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Y2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuLi8uLi8uLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGp1bXBEaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBwbGF0Zm9ybUNvbnNvUmF0ZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIHBvd2VyOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGluaXRTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGlzUmVhZHlKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGp1bXBBdWRpb0lkID0gLTE7XHJcbiAgICBwcml2YXRlIGlzQ2hhcmdpbmcgPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0p1bXBpbmcgPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSByYW5kb21UaW1lciA9IDI7XHJcbiAgICBwcml2YXRlIHRpbWVyID0gMDtcclxuICAgIHByaXZhdGUganVtcENvdW50ID0gMDtcclxuICAgIHByaXZhdGUgc3RhZ2UgPW51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZHlKdW1wKCkge1xyXG4gICAgICAgIHRoaXMucmVhZHlKdW1wQXVkaW9JZCA9ICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucmVhZHlKdW1wQXVkaW8sZmFsc2UsZ2xvYmFsLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuQ2hhcmdlXCIpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1cIix0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuaW5pdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBUbyh3b3JsZFBvczpjYy5WZWMyLGNiOkZ1bmN0aW9uLGNiVGFyZ2V0PzphbnkpIHtcclxuICAgICAgICB0aGlzLmp1bXBDb3VudCs9MTtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nPWZhbHNlO1xyXG4gICAgICAgIH0sMSlcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNoaWNrZW5JZGxlXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZWFkeUp1bXBBdWRpb0lkKTtcclxuICAgICAgICBpZihnbG9iYWwuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBBdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmp1bXBBdWRpbyxmYWxzZSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmlzUmVhZHlKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlc2V0QWN0aW9uID0gY2Muc2NhbGVUbygxLDEsMSk7XHJcbiAgICAgICAgbGV0IGp1bXBBY3Rpb24gPSBjYy5qdW1wVG8oMC41LHRhcmdldFBvcyw1MDAsMSk7XHJcbiAgICAgICAgIGxldCByb3RhdGVBY3Rpb24gPSBjYy5yb3RhdGVCeSgwLjUsdGhpcy5kaXJlY3Rpb24qKC0zNjApKTtcclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuanVtcENvdW50Pj0zKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0tMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvdW50PTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCk+MC41PzE6LTE7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSxjYlRhcmdldCk7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihyZXNldEFjdGlvbik7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvclwiLHRoaXMubm9kZSkucnVuQWN0aW9uKHJvdGF0ZUFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShqdW1wQWN0aW9uLGZpbmlzaGVkKSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBSYW5kb21JbnQobWluLCBtYXgpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSAtIG1pbikgKyBtaW4pKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PXRoaXMucmFuZG9tVGltZXIpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0NoYXJnaW5nJiYhdGhpcy5pc0p1bXBpbmcmJiF0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlblNpbmdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbVRpbWVyID0gdGhpcy5SYW5kb21JbnQoMiw4KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNSZWFkeUp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSBkdCAqIHRoaXMucG93ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==