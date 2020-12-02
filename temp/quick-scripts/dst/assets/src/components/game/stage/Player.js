
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        //cc.find("rotateAnchor/sprite",this.node).runAction(cc.scaleTo(2,1,0.5));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDRDQUE4QztBQUV4QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTRCLDBCQUFZO0lBRHhDO1FBQUEscUVBK0dDO1FBM0dVLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUU5QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXRCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFFLEtBQUssQ0FBQztRQUNsQixlQUFTLEdBQUUsS0FBSyxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsV0FBSyxHQUFFLElBQUksQ0FBQzs7SUFrRnhCLENBQUM7SUFqRkcsdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVN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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi8uLi9HXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMganVtcERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIHBsYXRmb3JtQ29uc29SYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgaW5pdFNwZWVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaXNSZWFkeUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW9JZCA9IC0xO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUganVtcEF1ZGlvID0gbnVsbDtcclxuICAgIHByaXZhdGUganVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIHByaXZhdGUgaXNDaGFyZ2luZyA9ZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzSnVtcGluZyA9ZmFsc2U7XHJcbiAgICBwcml2YXRlIHJhbmRvbVRpbWVyID0gMjtcclxuICAgIHByaXZhdGUgdGltZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBqdW1wQ291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGFnZSA9bnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL3N0YWdlXCIpLmdldENvbXBvbmVudChcIlN0YWdlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkeUp1bXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkeUp1bXBBdWRpb0lkID0gIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5yZWFkeUp1bXBBdWRpbyxmYWxzZSxnbG9iYWwuZ2V0RWZmZWN0Vm9sdW1lKCkpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXRsZVwiLHRoaXMubm9kZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL2NjLmZpbmQoXCJyb3RhdGVBbmNob3Ivc3ByaXRlXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24oY2Muc2NhbGVUbygyLDEsMC41KSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuQ2hhcmdlXCIpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1cIix0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuaW5pdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBUbyh3b3JsZFBvczpjYy5WZWMyLGNiOkZ1bmN0aW9uLGNiVGFyZ2V0PzphbnkpIHtcclxuICAgICAgICB0aGlzLmp1bXBDb3VudCs9MTtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nPWZhbHNlO1xyXG4gICAgICAgIH0sMSlcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNoaWNrZW5JZGxlXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZWFkeUp1bXBBdWRpb0lkKTtcclxuICAgICAgICBpZihnbG9iYWwuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBBdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmp1bXBBdWRpbyxmYWxzZSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmlzUmVhZHlKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlc2V0QWN0aW9uID0gY2Muc2NhbGVUbygxLDEsMSk7XHJcbiAgICAgICAgbGV0IGp1bXBBY3Rpb24gPSBjYy5qdW1wVG8oMC41LHRhcmdldFBvcyw1MDAsMSk7XHJcbiAgICAgICAgIGxldCByb3RhdGVBY3Rpb24gPSBjYy5yb3RhdGVCeSgwLjUsdGhpcy5kaXJlY3Rpb24qKC0zNjApKTtcclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuanVtcENvdW50Pj0zKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0tMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvdW50PTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCk+MC41PzE6LTE7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSxjYlRhcmdldCk7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihyZXNldEFjdGlvbik7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvclwiLHRoaXMubm9kZSkucnVuQWN0aW9uKHJvdGF0ZUFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShqdW1wQWN0aW9uLGZpbmlzaGVkKSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBSYW5kb21JbnQobWluLCBtYXgpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSAtIG1pbikgKyBtaW4pKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PXRoaXMucmFuZG9tVGltZXIpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0NoYXJnaW5nJiYhdGhpcy5pc0p1bXBpbmcmJiF0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlblNpbmdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbVRpbWVyID0gdGhpcy5SYW5kb21JbnQoMiw4KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNSZWFkeUp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSBkdCAqIHRoaXMucG93ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==