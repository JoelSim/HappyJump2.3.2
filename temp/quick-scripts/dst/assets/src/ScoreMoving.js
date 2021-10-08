
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/ScoreMoving.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cb7bdk8ZhMmbkhTEUhuGzl', 'ScoreMoving');
// src/ScoreMoving.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    direction: 0,
    speed: 60,
    left: {
      "default": null,
      type: cc.Node
    },
    right: {
      "default": null,
      type: cc.Node
    },
    up: {
      "default": null,
      type: cc.Node
    },
    down: {
      "default": null,
      type: cc.Node
    },
    changeTIme: 0.5,
    perfectColor: {
      "default": null,
      type: cc.Color
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    },
    perfecteffect: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onDestroy: function onDestroy() {
    //
    cc.systemEvent.off("Change-Bet");
  },
  onLoad: function onLoad() {
    //this.generateScore();
    var self = this;
    cc.systemEvent.on("Change-Bet", function () {
      self.generateScore();
    });
  },
  start: function start() {
    this.direction = parseInt(Math.random() * (3 + 1 - 0) + 0);
    this.hvtGenerate = true;
    this.randomTimer = 0;
    this.notMoving = true;
    this.alreadyStop = false;
  },
  generateScore: function generateScore() {
    if (!this.alreadyStop) {
      cc.log("HIHIHIHI");
      this.perfectScore = globalData.perfectScore;
      this.consoScore = globalData.consoScore;
      cc.log(this.perfectScore);
      this.scoreLabel.string = Math.round(this.perfectScore * 10) / 10;
      cc.log(this.scoreLabel.string + "AKKA");
    }
  },
  getScore: function getScore(platformState) {
    if (platformState == 1) {
      return this.perfectScore;
    } else {
      return this.consoScore;
    }
  },
  generateLast: function generateLast() {
    this.lastDirection = this.direction;
    this.hvtGenerate = false;
  },
  update: function update(dt) {
    if (!this.alreadyStop) {
      this.randomTimer += dt;

      if (this.randomTimer >= this.changeTIme) {
        if (this.hvtGenerate) {
          this.generateLast();
        }

        if (this.direction == this.lastDirection) {
          this.direction = parseInt(Math.random() * (3 + 1 - 0) + 0);
        }

        if (this.direction != this.lastDirection) {
          this.hvtGenerate = true;
          this.randomTimer = 0;
          this.notMoving = true;
        }
      }

      if (this.notMoving) {
        if (this.direction == 0) {
          this.move(this.left.position);
        } else if (this.direction == 1) {
          this.move(this.right.position);
        } else if (this.direction == 2) {
          this.move(this.up.position);
        } else {
          this.move(this.down.position);
        }
      }
    }
  },
  move: function move(value) {
    var action = cc.moveTo(this.changeTIme, value);
    this.currentAction = action; //this.node.x -= dt*this.speed;

    this.node.runAction(this.currentAction);
    this.notMoving = false;
  },
  stopAll: function stopAll(value, platformState) {
    this.node.stopAction(this.currentAction);
    this.alreadyStop = true;

    if (platformState == 1) {
      value.y += 15;
      var action = cc.moveTo(0.5, value);
      this.node.runAction(action);
      this.scheduleOnce(function () {
        this.node.color = this.perfectColor;
        this.perfecteffect.active = true;
        this.scheduleOnce(function () {
          cc.find("Canvas/AudioManager").getComponent("AudioManager").playLandPerfect();
        }, 0.1);
      }, 0.5);
    } else {
      var action = cc.moveTo(0.5, value);
      this.node.runAction(action);
      this.scheduleOnce(function () {
        cc.find("Canvas/AudioManager").getComponent("AudioManager").playLandConso();
      }, 0.5);
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTY29yZU1vdmluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpcmVjdGlvbiIsInNwZWVkIiwibGVmdCIsInR5cGUiLCJOb2RlIiwicmlnaHQiLCJ1cCIsImRvd24iLCJjaGFuZ2VUSW1lIiwicGVyZmVjdENvbG9yIiwiQ29sb3IiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJwZXJmZWN0ZWZmZWN0Iiwib25EZXN0cm95Iiwic3lzdGVtRXZlbnQiLCJvZmYiLCJvbkxvYWQiLCJzZWxmIiwib24iLCJnZW5lcmF0ZVNjb3JlIiwic3RhcnQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJodnRHZW5lcmF0ZSIsInJhbmRvbVRpbWVyIiwibm90TW92aW5nIiwiYWxyZWFkeVN0b3AiLCJsb2ciLCJwZXJmZWN0U2NvcmUiLCJnbG9iYWxEYXRhIiwiY29uc29TY29yZSIsInN0cmluZyIsInJvdW5kIiwiZ2V0U2NvcmUiLCJwbGF0Zm9ybVN0YXRlIiwiZ2VuZXJhdGVMYXN0IiwibGFzdERpcmVjdGlvbiIsInVwZGF0ZSIsImR0IiwibW92ZSIsInBvc2l0aW9uIiwidmFsdWUiLCJhY3Rpb24iLCJtb3ZlVG8iLCJjdXJyZW50QWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsInN0b3BBbGwiLCJzdG9wQWN0aW9uIiwieSIsInNjaGVkdWxlT25jZSIsImNvbG9yIiwiYWN0aXZlIiwiZmluZCIsImdldENvbXBvbmVudCIsInBsYXlMYW5kUGVyZmVjdCIsInBsYXlMYW5kQ29uc28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsU0FB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QUFjRixLQUFkLENBQWI7QUFDQSxXQUFLSSxJQUFMLENBQVVDLFNBQVYsQ0FBb0JKLE1BQXBCO0FBQ0EsV0FBS1EsWUFBTCxDQUFrQixZQUFVO0FBQ3hCeEQsUUFBQUEsRUFBRSxDQUFDMkQsSUFBSCxDQUFRLHFCQUFSLEVBQStCQyxZQUEvQixDQUE0QyxjQUE1QyxFQUE0REUsYUFBNUQ7QUFFSCxPQUhELEVBR0UsR0FIRjtBQUlIO0FBRUo7QUEzS0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCAqIGFzIGdsb2JhbERhdGEgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uOiAwLFxyXG4gICAgICAgIHNwZWVkOiA2MCxcclxuICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZVRJbWUgOjAuNSxcclxuXHJcbiAgICAgICAgcGVyZmVjdENvbG9yOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkNvbG9yLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlTGFiZWw6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGVyZmVjdGVmZmVjdDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXCJDaGFuZ2UtQmV0XCIpO1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5nZW5lcmF0ZVNjb3JlKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPXRoaXM7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oXCJDaGFuZ2UtQmV0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLmdlbmVyYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMyArIDEgLSAwKSArIDApO1xyXG4gICAgICAgIHRoaXMuaHZ0R2VuZXJhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFscmVhZHlTdG9wID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZ2VuZXJhdGVTY29yZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmFscmVhZHlTdG9wKXtcclxuICAgICAgICAgICAgY2MubG9nKFwiSElISUhJSElcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZmVjdFNjb3JlID0gZ2xvYmFsRGF0YS5wZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29TY29yZSA9IGdsb2JhbERhdGEuY29uc29TY29yZTtcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMucGVyZmVjdFNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5wZXJmZWN0U2NvcmUgKiAxMCkgLyAxMDtcclxuICAgICAgICAgICAgY2MubG9nKCB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nK1wiQUtLQVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTY29yZShwbGF0Zm9ybVN0YXRlKXtcclxuICAgICAgICBpZihwbGF0Zm9ybVN0YXRlPT0xKXtcclxuICAgICAgICAgICAgcmV0dXJuICB0aGlzLnBlcmZlY3RTY29yZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnNvU2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlTGFzdCgpIHtcclxuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmh2dEdlbmVyYXRlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYWxyZWFkeVN0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21UaW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbVRpbWVyID49IHRoaXMuY2hhbmdlVEltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaHZ0R2VuZXJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IHRoaXMubGFzdERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqICgzICsgMSAtIDApICsgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9IHRoaXMubGFzdERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHZ0R2VuZXJhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm90TW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLmxlZnQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnJpZ2h0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMudXAucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMuZG93bi5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbyh0aGlzLmNoYW5nZVRJbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgLy90aGlzLm5vZGUueCAtPSBkdCp0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5jdXJyZW50QWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vdE1vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEFsbCh2YWx1ZSxwbGF0Zm9ybVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb24odGhpcy5jdXJyZW50QWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFscmVhZHlTdG9wID0gdHJ1ZTtcclxuICAgICAgICBpZihwbGF0Zm9ybVN0YXRlID09MSl7XHJcbiAgICAgICAgICAgIHZhbHVlLnkgKz0xNTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjUsdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLnBlcmZlY3RDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGVmZmVjdC5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5TGFuZFBlcmZlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LDAuMSlcclxuXHJcbiAgICAgICAgICAgIH0sMC41KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oMC41LHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMYW5kQ29uc28oKTtcclxuXHJcbiAgICAgICAgICAgIH0sMC41KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=