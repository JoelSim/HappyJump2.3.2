
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0Q0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE4R0M7UUEzR1Usa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUUsS0FBSyxDQUFDO1FBQ2xCLGVBQVMsR0FBRSxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQUUsSUFBSSxDQUFDOztJQWtGeEIsQ0FBQztJQWpGRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENB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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi4vLi4vLi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBqdW1wRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgcGxhdGZvcm1Db25zb1JhdGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHB1YmxpYyBwb3dlcjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBpbml0U3BlZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpc1JlYWR5SnVtcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW8gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpb0lkID0gLTE7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBqdW1wQXVkaW8gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBqdW1wQXVkaW9JZCA9IC0xO1xyXG4gICAgcHJpdmF0ZSBpc0NoYXJnaW5nID1mYWxzZTtcclxuICAgIHByaXZhdGUgaXNKdW1waW5nID1mYWxzZTtcclxuICAgIHByaXZhdGUgcmFuZG9tVGltZXIgPSAyO1xyXG4gICAgcHJpdmF0ZSB0aW1lciA9IDA7XHJcbiAgICBwcml2YXRlIGp1bXBDb3VudCA9IDA7XHJcbiAgICBwcml2YXRlIHN0YWdlID1udWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXRsZVwiLHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IGNjLmZpbmQoXCJDYW52YXMvc3RhZ2VcIikuZ2V0Q29tcG9uZW50KFwiU3RhZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWR5SnVtcCgpIHtcclxuICAgICAgICB0aGlzLnJlYWR5SnVtcEF1ZGlvSWQgPSAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJlYWR5SnVtcEF1ZGlvLGZhbHNlLGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDIsMSwwLjUpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNoaWNrZW5DaGFyZ2VcIik7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMubm9kZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5pbml0U3BlZWQ7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5SnVtcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0NoYXJnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVtcFRvKHdvcmxkUG9zOmNjLlZlYzIsY2I6RnVuY3Rpb24sY2JUYXJnZXQ/OmFueSkge1xyXG4gICAgICAgIHRoaXMuanVtcENvdW50Kz0xO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3BhcnRpY2xlc3lzdGVtXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmc9ZmFsc2U7XHJcbiAgICAgICAgfSwxKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlbklkbGVcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlYWR5SnVtcEF1ZGlvSWQpO1xyXG4gICAgICAgIGlmKGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuanVtcEF1ZGlvLGZhbHNlLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3Nwcml0ZVwiLHRoaXMubm9kZSkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVzZXRBY3Rpb24gPSBjYy5zY2FsZVRvKDEsMSwxKTtcclxuICAgICAgICBsZXQganVtcEFjdGlvbiA9IGNjLmp1bXBUbygwLjUsdGFyZ2V0UG9zLDUwMCwxKTtcclxuICAgICAgICAgbGV0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZUJ5KDAuNSx0aGlzLmRpcmVjdGlvbiooLTM2MCkpO1xyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5qdW1wQ291bnQ+PTMpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb249PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPS0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ291bnQ9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3RoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKT4wLjU/MTotMTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LGNiVGFyZ2V0KTtcclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3Nwcml0ZVwiLHRoaXMubm9kZSkucnVuQWN0aW9uKHJlc2V0QWN0aW9uKTtcclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24ocm90YXRlQWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGp1bXBBY3Rpb24sZmluaXNoZWQpKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFJhbmRvbUludChtaW4sIG1heCl7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxIC0gbWluKSArIG1pbikpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcj49dGhpcy5yYW5kb21UaW1lcil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzQ2hhcmdpbmcmJiF0aGlzLmlzSnVtcGluZyYmIXRoaXMuc3RhZ2UuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuU2luZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSB0aGlzLlJhbmRvbUludCgyLDgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc1JlYWR5SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkICs9IGR0ICogdGhpcy5wb3dlcjtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRGlzdGFuY2UgKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19