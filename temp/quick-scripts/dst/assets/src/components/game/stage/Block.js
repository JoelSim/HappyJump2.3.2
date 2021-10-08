
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBMEdDO1FBdkdVLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFFcEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsUUFBRSxHQUFXLElBQUksQ0FBQztRQUVsQixRQUFFLEdBQVcsSUFBSSxDQUFDO1FBRWxCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQy9CLGVBQVMsR0FBVyxDQUFDLENBQUM7O1FBK0Q3QixvQkFBb0I7UUFDcEIscUVBQXFFO1FBQ3JFLGdEQUFnRDtRQUNoRCxJQUFJO1FBRUosd0JBQXdCO1FBQ3hCLHVEQUF1RDtRQUN2RCxrQ0FBa0M7UUFDbEMsSUFBSTtRQUVKLHFCQUFxQjtRQUNyQixnRUFBZ0U7UUFDaEUsOENBQThDO1FBQzlDLElBQUk7SUFFUixDQUFDO0lBNUVVLGlDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0saUNBQWlCLEdBQXhCLFVBQXlCLFFBQWdCLEVBQUMsU0FB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QUM7cUNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNvQjtJQTNCN0IsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTBHakI7SUFBRCxZQUFDO0NBMUdELEFBMEdDLENBMUcwQixFQUFFLENBQUMsU0FBUyxHQTBHdEM7QUExR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWF4U2NhbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWluU2NhbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWluRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgYW5jaG9yT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHByaXZhdGUgcmlnaHRBbmNob3JMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHByaXZhdGUgbGVmdEFuY2hvckxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgY2VudGVyQW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcDE6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcDI6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHByaXZhdGUgbG9jYWxQbGF5ZXJQb3M6Y2MuVmVjMiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdHJ1ZVNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXRDZW50ZXJQb3NpdGlvbigpOmNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlckFuY2hvci5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2VudGVyQW5jaG9yLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QW5jaG9yTG9jYXRpb24od29ybGRQb3M6Y2MuVmVjMixkaXJlY3Rpb246bnVtYmVyICxwbGF0Zm9ybVN0YXRlKTpjYy5WZWMyIHtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGxldCBhbmNob3JMaXN0ID0gZGlyZWN0aW9uPjA/dGhpcy5yaWdodEFuY2hvckxpc3Q6dGhpcy5sZWZ0QW5jaG9yTGlzdFxyXG4gICAgICAgIGxldCBuZWFyQW5jaG9yID0gYW5jaG9yTGlzdFswXTtcclxuICAgICAgICBsZXQgZmFyQW5jaG9yID0gYW5jaG9yTGlzdFswXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAxO2kgPCBhbmNob3JMaXN0Lmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCBhbmNob3JMaXN0W2ldLnBvc2l0aW9uLnN1Yihsb2NhbFBvcykubWFnKCk8IG5lYXJBbmNob3IucG9zaXRpb24uc3ViKGxvY2FsUG9zKS5tYWcoKVxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgbmVhckFuY2hvciA9IGFuY2hvckxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGZhckFuY2hvciA9IGFuY2hvckxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmVhckFuY2hvci5wb3NpdGlvbi5zdWIobG9jYWxQb3MpLm1hZygpIDw9dGhpcy5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICAgICAgaWYocGxhdGZvcm1TdGF0ZT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsUGxheWVyUG9zID0gbmVhckFuY2hvci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFBsYXllclBvcyA9IGZhckFuY2hvci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb24ocGxhdGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1ZVNjb3JlID0gdGhpcy5nZXRTY29yZShwbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lYXJBbmNob3IucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZWFyQW5jaG9yLnBvc2l0aW9uKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExlZnRUYW4oKTpudW1iZXIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5wMS55LygtdGhpcy5wMS54KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmlnaHRUYW4oKTpudW1iZXIge1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLnAyLnkvdGhpcy5wMi54KTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnAyLnkvdGhpcy5wMi54O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5U2NvcmVBbmltKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMubm9kZSkucGFyZW50ID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZS9TY29yZUxheWVyXCIpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIitNYXRoLnJvdW5kKHRoaXMudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NvcmUocGxhdGZvcm1TdGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuIGNjLmZpbmQoXCJwZXJmZWN0U2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChcIlNjb3JlTW92aW5nXCIpLmdldFNjb3JlKHBsYXRmb3JtU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0b3BBbGxBY3Rpb24ocGxhdGZvcm1TdGF0ZSl7XHJcbiAgICAgICAgY2MuZmluZChcInBlcmZlY3RTY29yZVwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KFwiU2NvcmVNb3ZpbmdcIikuc3RvcEFsbCh0aGlzLmxvY2FsUGxheWVyUG9zLHBsYXRmb3JtU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVBlcmZlY3RTY29yZSgpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJwZXJmZWN0U2NvcmVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcHVibGljIHNocmluaygpIHtcclxuICAgIC8vICAgICAvLyBjYy5maW5kKFwic3ByaXRlXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24oY2Muc2NhbGVUbygyLDEsMC41KSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDIsMSwwLjUpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RvcFNocmluaygpIHtcclxuICAgIC8vICAgICAvLyBjYy5maW5kKFwic3ByaXRlXCIsdGhpcy5ub2RlKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBlbmxhcmdlKCkge1xyXG4gICAgLy8gICAgIGNjLmZpbmQoXCJzcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDEsMSwxKSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDEsMSwxKSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==