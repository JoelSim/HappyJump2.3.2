"use strict";
cc._RF.push(module, '007507xQ0hEcbmFDxV+eRZJ', 'Block');
// src/components/game/stage/Block.ts

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
exports.Block = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxScale = 0;
        _this.minScale = 0;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.anchorOffset = 0;
        _this.score = 1;
        _this.rightAnchorList = [];
        _this.leftAnchorList = [];
        _this.centerAnchor = null;
        _this.p1 = null;
        _this.p2 = null;
        _this.localPlayerPos = null;
        _this.trueScore = 0;
        return _this;
        // public shrink() {
        //     // cc.find("sprite",this.node).runAction(cc.scaleTo(2,1,0.5));
        //     this.node.runAction(cc.scaleTo(2,1,0.5));
        // }
        // public stopShrink() {
        //     // cc.find("sprite",this.node).stopAllActions();
        //     this.node.stopAllActions();
        // }
        // public enlarge() {
        //     cc.find("sprite",this.node).runAction(cc.scaleTo(1,1,1));
        //     this.node.runAction(cc.scaleTo(1,1,1));
        // }
    }
    Block.prototype.getCenterPosition = function () {
        return this.centerAnchor.parent.convertToWorldSpaceAR(this.centerAnchor.position);
    };
    Block.prototype.getAnchorLocation = function (worldPos, direction, platformState) {
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        var anchorList = direction > 0 ? this.rightAnchorList : this.leftAnchorList;
        var nearAnchor = anchorList[0];
        var farAnchor = anchorList[0];
        for (var i = 1; i < anchorList.length; i++) {
            if (anchorList[i].position.sub(localPos).mag() < nearAnchor.position.sub(localPos).mag()) {
                nearAnchor = anchorList[i];
            }
            else {
                farAnchor = anchorList[i];
            }
        }
        if (nearAnchor.position.sub(localPos).mag() <= this.anchorOffset) {
            if (platformState == 1) {
                this.localPlayerPos = nearAnchor.position;
            }
            else {
                this.localPlayerPos = farAnchor.position;
            }
            this.stopAllAction(platformState);
            this.trueScore = this.getScore(platformState);
            return nearAnchor.parent.convertToWorldSpaceAR(nearAnchor.position);
        }
        else {
            return null;
        }
    };
    Block.prototype.getLeftTan = function () {
        return this.p1.y / (-this.p1.x);
    };
    Block.prototype.getRightTan = function () {
        cc.log(this.p2.y / this.p2.x);
        return this.p2.y / this.p2.x;
    };
    Block.prototype.playScoreAnim = function () {
        cc.find("score", this.node).parent = cc.find("Canvas/stage/ScoreLayer");
        cc.find("score", this.node).getComponent(cc.Label).string = "+" + Math.round(this.trueScore * 10) / 10;
        cc.find("score", this.node).getComponent(cc.Animation).play();
    };
    Block.prototype.getScore = function (platformState) {
        return cc.find("perfectScore", this.node).getComponent("ScoreMoving").getScore(platformState);
    };
    Block.prototype.stopAllAction = function (platformState) {
        cc.find("perfectScore", this.node).getComponent("ScoreMoving").stopAll(this.localPlayerPos, platformState);
    };
    Block.prototype.closePerfectScore = function () {
        cc.find("perfectScore", this.node).active = false;
    };
    __decorate([
        property(cc.Float)
    ], Block.prototype, "maxScale", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "minScale", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "minDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "maxDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "anchorOffset", void 0);
    __decorate([
        property(cc.Integer)
    ], Block.prototype, "score", void 0);
    __decorate([
        property([cc.Node])
    ], Block.prototype, "rightAnchorList", void 0);
    __decorate([
        property([cc.Node])
    ], Block.prototype, "leftAnchorList", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "centerAnchor", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "p1", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "p2", void 0);
    __decorate([
        property(cc.Vec2)
    ], Block.prototype, "localPlayerPos", void 0);
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.Block = Block;

cc._RF.pop();