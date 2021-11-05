
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
        _this.particle = null;
        _this.particle2 = null;
        return _this;
    }
    Player.prototype.onLoad = function () {
        cc.find("title", this.node).active = false;
        this.stage = cc.find("Canvas/stage").getComponent("Stage");
        this.particle = cc.find("rotateAnchor/particlesystem", this.node);
        this.particle2 = cc.find("rotateAnchor/particlesystemGreen", this.node);
    };
    Player.prototype.readyJump = function () {
        this.readyJumpAudioId = cc.audioEngine.play(this.readyJumpAudio, false, global.getEffectVolume());
        cc.find("title", this.node).active = true;
        this.node.getComponent(cc.Animation).play("ChickenCharge");
        this.particle.active = true;
        this.speed = this.initSpeed;
        this.isReadyJump = true;
        this.isCharging = true;
    };
    Player.prototype.jumpTo = function (worldPos, cb, cbTarget) {
        var _this = this;
        this.jumpCount += 1;
        this.isCharging = false;
        this.isJumping = true;
        this.particle.active = false;
        this.particle2.active = false;
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
            if (this.jumpDistance >= 380 && this.jumpDistance <= 600) {
                if (this.particle2.active == false) {
                    this.particle.active = false;
                    this.particle2.active = true;
                }
            }
            else {
                if (this.particle.active == false) {
                    this.particle.active = true;
                    this.particle2.active = false;
                }
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE4SEM7UUEzSFUsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUUsS0FBSyxDQUFDO1FBQ2xCLGVBQVMsR0FBRSxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQUUsSUFBSSxDQUFDO1FBQ1osY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWdHN0IsQ0FBQztJQTlGRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxF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aUJBQ0c7Z0JBQ0EsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUM7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNqQzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBMUhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ2E7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDa0I7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNVO0lBUzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ087SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDRTtJQXJCaEIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQThIbEI7SUFBRCxhQUFDO0NBOUhELEFBOEhDLENBOUgyQixFQUFFLENBQUMsU0FBUyxHQThIdkM7QUE5SFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMganVtcERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIHBsYXRmb3JtQ29uc29SYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgaW5pdFNwZWVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaXNSZWFkeUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW9JZCA9IC0xO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUganVtcEF1ZGlvID0gbnVsbDtcclxuICAgIHByaXZhdGUganVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIHByaXZhdGUgaXNDaGFyZ2luZyA9ZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzSnVtcGluZyA9ZmFsc2U7XHJcbiAgICBwcml2YXRlIHJhbmRvbVRpbWVyID0gMjtcclxuICAgIHByaXZhdGUgdGltZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBqdW1wQ291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGFnZSA9bnVsbDtcclxuICAgIHByaXZhdGUgcGFydGljbGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZTIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL3N0YWdlXCIpLmdldENvbXBvbmVudChcIlN0YWdlXCIpO1xyXG4gICAgICAgIHRoaXMucGFydGljbGUgPSBjYy5maW5kKFwicm90YXRlQW5jaG9yL3BhcnRpY2xlc3lzdGVtXCIsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlMiA9IGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1HcmVlblwiLHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWR5SnVtcCgpIHtcclxuICAgICAgICB0aGlzLnJlYWR5SnVtcEF1ZGlvSWQgPSAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJlYWR5SnVtcEF1ZGlvLGZhbHNlLGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlbkNoYXJnZVwiKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuaW5pdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBUbyh3b3JsZFBvczpjYy5WZWMyLGNiOkZ1bmN0aW9uLGNiVGFyZ2V0PzphbnkpIHtcclxuICAgICAgICB0aGlzLmp1bXBDb3VudCs9MTtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlMi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmc9ZmFsc2U7XHJcbiAgICAgICAgfSwxKVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlbklkbGVcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlYWR5SnVtcEF1ZGlvSWQpO1xyXG4gICAgICAgIGlmKGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuanVtcEF1ZGlvLGZhbHNlLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3Nwcml0ZVwiLHRoaXMubm9kZSkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKVxyXG4gICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVzZXRBY3Rpb24gPSBjYy5zY2FsZVRvKDEsMSwxKTtcclxuICAgICAgICBsZXQganVtcEFjdGlvbiA9IGNjLmp1bXBUbygwLjUsdGFyZ2V0UG9zLDUwMCwxKTtcclxuICAgICAgICAgbGV0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZUJ5KDAuNSx0aGlzLmRpcmVjdGlvbiooLTM2MCkpO1xyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5qdW1wQ291bnQ+PTMpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb249PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPS0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ291bnQ9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3RoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKT4wLjU/MTotMTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LGNiVGFyZ2V0KTtcclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3Nwcml0ZVwiLHRoaXMubm9kZSkucnVuQWN0aW9uKHJlc2V0QWN0aW9uKTtcclxuICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24ocm90YXRlQWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGp1bXBBY3Rpb24sZmluaXNoZWQpKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFJhbmRvbUludChtaW4sIG1heCl7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxIC0gbWluKSArIG1pbikpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcj49dGhpcy5yYW5kb21UaW1lcil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzQ2hhcmdpbmcmJiF0aGlzLmlzSnVtcGluZyYmIXRoaXMuc3RhZ2UuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuU2luZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSB0aGlzLlJhbmRvbUludCgyLDgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc1JlYWR5SnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkICs9IGR0ICogdGhpcy5wb3dlcjtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRGlzdGFuY2UgKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICBpZih0aGlzLmp1bXBEaXN0YW5jZSA+PSAzODAgJiYgdGhpcy5qdW1wRGlzdGFuY2UgPD0gNjAwKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGFydGljbGUyLmFjdGl2ZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBhcnRpY2xlLmFjdGl2ZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGUyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==