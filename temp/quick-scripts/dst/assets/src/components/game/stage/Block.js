
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/stage/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '007507xQ0hEcbmFDxV+eRZJ', 'Block');
// src/components/game/stage/Block.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUR2QztRQUFBLHFFQTJHQztRQXZHVSxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdqQixxQkFBZSxHQUFtQixFQUFFLENBQUM7UUFFckMsb0JBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRXBDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFFbEIsUUFBRSxHQUFXLElBQUksQ0FBQztRQUVsQixvQkFBYyxHQUFXLElBQUksQ0FBQztRQUMvQixlQUFTLEdBQVcsQ0FBQyxDQUFDOztRQStEN0Isb0JBQW9CO1FBQ3BCLHFFQUFxRTtRQUNyRSxnREFBZ0Q7UUFDaEQsSUFBSTtRQUVKLHdCQUF3QjtRQUN4Qix1REFBdUQ7UUFDdkQsa0NBQWtDO1FBQ2xDLElBQUk7UUFFSixxQkFBcUI7UUFDckIsZ0VBQWdFO1FBQ2hFLDhDQUE4QztRQUM5QyxJQUFJO0lBRVIsQ0FBQztJQTVFVSxpQ0FBaUIsR0FBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVNLGlDQUFpQixHQUF4QixVQUF5QixRQUFnQixFQUFDLFNBQWdCLEVBQUUsYUFBYTtRQUNyRSxJQUFJ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USxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cUNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDb0I7SUEzQjdCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0EwR2pCO0lBQUQsWUFBQztDQTFHRCxBQTBHQyxDQTFHMEIsRUFBRSxDQUFDLFNBQVMsR0EwR3RDO0FBMUdZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIG1heFNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIG1pblNjYWxlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIG1heERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGFuY2hvck9mZnNldDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIHNjb3JlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBwcml2YXRlIHJpZ2h0QW5jaG9yTGlzdDogQXJyYXk8Y2MuTm9kZT4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBwcml2YXRlIGxlZnRBbmNob3JMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNlbnRlckFuY2hvcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHAxOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHAyOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBwcml2YXRlIGxvY2FsUGxheWVyUG9zOmNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHVibGljIHRydWVTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VudGVyUG9zaXRpb24oKTpjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXJBbmNob3IucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmNlbnRlckFuY2hvci5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFuY2hvckxvY2F0aW9uKHdvcmxkUG9zOmNjLlZlYzIsZGlyZWN0aW9uOm51bWJlciAscGxhdGZvcm1TdGF0ZSk6Y2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICBsZXQgYW5jaG9yTGlzdCA9IGRpcmVjdGlvbj4wP3RoaXMucmlnaHRBbmNob3JMaXN0OnRoaXMubGVmdEFuY2hvckxpc3RcclxuICAgICAgICBsZXQgbmVhckFuY2hvciA9IGFuY2hvckxpc3RbMF07XHJcbiAgICAgICAgbGV0IGZhckFuY2hvciA9IGFuY2hvckxpc3RbMF07XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTtpIDwgYW5jaG9yTGlzdC5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiggYW5jaG9yTGlzdFtpXS5wb3NpdGlvbi5zdWIobG9jYWxQb3MpLm1hZygpPCBuZWFyQW5jaG9yLnBvc2l0aW9uLnN1Yihsb2NhbFBvcykubWFnKClcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIG5lYXJBbmNob3IgPSBhbmNob3JMaXN0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBmYXJBbmNob3IgPSBhbmNob3JMaXN0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5lYXJBbmNob3IucG9zaXRpb24uc3ViKGxvY2FsUG9zKS5tYWcoKSA8PXRoaXMuYW5jaG9yT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGlmKHBsYXRmb3JtU3RhdGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFBsYXllclBvcyA9IG5lYXJBbmNob3IucG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxQbGF5ZXJQb3MgPSBmYXJBbmNob3IucG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9wQWxsQWN0aW9uKHBsYXRmb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnRydWVTY29yZSA9IHRoaXMuZ2V0U2NvcmUocGxhdGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZWFyQW5jaG9yLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobmVhckFuY2hvci5wb3NpdGlvbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMZWZ0VGFuKCk6bnVtYmVyIHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucDEueS8oLXRoaXMucDEueCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJpZ2h0VGFuKCk6bnVtYmVyIHtcclxuICAgICAgICBjYy5sb2codGhpcy5wMi55L3RoaXMucDIueCk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5wMi55L3RoaXMucDIueDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheVNjb3JlQW5pbSgpIHtcclxuICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLm5vZGUpLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXMvc3RhZ2UvU2NvcmVMYXllclwiKTtcclxuICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIrTWF0aC5yb3VuZCh0aGlzLnRydWVTY29yZSoxMCkvMTA7XHJcbiAgICAgICAgY2MuZmluZChcInNjb3JlXCIsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjb3JlKHBsYXRmb3JtU3RhdGUpe1xyXG4gICAgICAgIHJldHVybiBjYy5maW5kKFwicGVyZmVjdFNjb3JlXCIsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoXCJTY29yZU1vdmluZ1wiKS5nZXRTY29yZShwbGF0Zm9ybVN0YXRlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdG9wQWxsQWN0aW9uKHBsYXRmb3JtU3RhdGUpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJwZXJmZWN0U2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChcIlNjb3JlTW92aW5nXCIpLnN0b3BBbGwodGhpcy5sb2NhbFBsYXllclBvcyxwbGF0Zm9ybVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQZXJmZWN0U2NvcmUoKXtcclxuICAgICAgICBjYy5maW5kKFwicGVyZmVjdFNjb3JlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHB1YmxpYyBzaHJpbmsoKSB7XHJcbiAgICAvLyAgICAgLy8gY2MuZmluZChcInNwcml0ZVwiLHRoaXMubm9kZSkucnVuQWN0aW9uKGNjLnNjYWxlVG8oMiwxLDAuNSkpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygyLDEsMC41KSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0b3BTaHJpbmsoKSB7XHJcbiAgICAvLyAgICAgLy8gY2MuZmluZChcInNwcml0ZVwiLHRoaXMubm9kZSkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZW5sYXJnZSgpIHtcclxuICAgIC8vICAgICBjYy5maW5kKFwic3ByaXRlXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24oY2Muc2NhbGVUbygxLDEsMSkpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygxLDEsMSkpO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG4iXX0=