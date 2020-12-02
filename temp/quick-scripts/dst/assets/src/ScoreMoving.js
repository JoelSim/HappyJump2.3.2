
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTY29yZU1vdmluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpcmVjdGlvbiIsInNwZWVkIiwibGVmdCIsInR5cGUiLCJOb2RlIiwicmlnaHQiLCJ1cCIsImRvd24iLCJjaGFuZ2VUSW1lIiwicGVyZmVjdENvbG9yIiwiQ29sb3IiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJwZXJmZWN0ZWZmZWN0Iiwib25EZXN0cm95Iiwic3lzdGVtRXZlbnQiLCJvZmYiLCJvbkxvYWQiLCJzZWxmIiwib24iLCJnZW5lcmF0ZVNjb3JlIiwic3RhcnQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJodnRHZW5lcmF0ZSIsInJhbmRvbVRpbWVyIiwibm90TW92aW5nIiwiYWxyZWFkeVN0b3AiLCJsb2ciLCJwZXJmZWN0U2NvcmUiLCJnbG9iYWxEYXRhIiwiY29uc29TY29yZSIsInN0cmluZyIsInJvdW5kIiwiZ2V0U2NvcmUiLCJwbGF0Zm9ybVN0YXRlIiwiZ2VuZXJhdGVMYXN0IiwibGFzdERpcmVjdGlvbiIsInVwZGF0ZSIsImR0IiwibW92ZSIsInBvc2l0aW9uIiwidmFsdWUiLCJhY3Rpb24iLCJtb3ZlVG8iLCJjdXJyZW50QWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsInN0b3BBbGwiLCJzdG9wQWN0aW9uIiwieSIsInNjaGVkdWxlT25jZSIsImNvbG9yIiwiYWN0aXZlIiwiZmluZCIsImdldENvbXBvbmVudCIsInBsYXlMYW5kUGVyZmVjdCIsInBsYXlMYW5kQ29uc28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxT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LEVBQWNGLEtBQWQsQ0FBYjtBQUNBLFdBQUtJLElBQUwsQ0FBVUMsU0FBVixDQUFvQkosTUFBcEI7QUFDQSxXQUFLUSxZQUFMLENBQWtCLFlBQVU7QUFDeEJ4RCxRQUFBQSxFQUFFLENBQUMyRCxJQUFILENBQVEscUJBQVIsRUFBK0JDLFlBQS9CLENBQTRDLGNBQTVDLEVBQTRERSxhQUE1RDtBQUVILE9BSEQsRUFHRSxHQUhGO0FBSUg7QUFFSjtBQTNLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBkaXJlY3Rpb246IDAsXHJcbiAgICAgICAgc3BlZWQ6IDYwLFxyXG4gICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlVEltZSA6MC41LFxyXG5cclxuICAgICAgICBwZXJmZWN0Q29sb3I6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQ29sb3IsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2NvcmVMYWJlbDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwZXJmZWN0ZWZmZWN0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihcIkNoYW5nZS1CZXRcIik7XHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy90aGlzLmdlbmVyYXRlU2NvcmUoKTtcclxuICAgICAgICB2YXIgc2VsZiA9dGhpcztcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihcIkNoYW5nZS1CZXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZ2VuZXJhdGVTY29yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqICgzICsgMSAtIDApICsgMCk7XHJcbiAgICAgICAgdGhpcy5odnRHZW5lcmF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yYW5kb21UaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5ub3RNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWxyZWFkeVN0b3AgPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBnZW5lcmF0ZVNjb3JlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuYWxyZWFkeVN0b3Ape1xyXG4gICAgICAgICAgICBjYy5sb2coXCJISUhJSElISVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wZXJmZWN0U2NvcmUgPSBnbG9iYWxEYXRhLnBlcmZlY3RTY29yZTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb1Njb3JlID0gZ2xvYmFsRGF0YS5jb25zb1Njb3JlO1xyXG4gICAgICAgICAgICBjYy5sb2codGhpcy5wZXJmZWN0U2NvcmUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gTWF0aC5yb3VuZCh0aGlzLnBlcmZlY3RTY29yZSAqIDEwKSAvIDEwO1xyXG4gICAgICAgICAgICBjYy5sb2coIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcrXCJBS0tBXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNjb3JlKHBsYXRmb3JtU3RhdGUpe1xyXG4gICAgICAgIGlmKHBsYXRmb3JtU3RhdGU9PTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gIHRoaXMucGVyZmVjdFNjb3JlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc29TY29yZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhdGVMYXN0KCkge1xyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaHZ0R2VuZXJhdGUgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hbHJlYWR5U3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbVRpbWVyICs9IGR0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmFuZG9tVGltZXIgPj0gdGhpcy5jaGFuZ2VUSW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5odnRHZW5lcmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVMYXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gdGhpcy5sYXN0RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDMgKyAxIC0gMCkgKyAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT0gdGhpcy5sYXN0RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odnRHZW5lcmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5kb21UaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub3RNb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMubGVmdC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMucmlnaHQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUodGhpcy51cC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5kb3duLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmUodmFsdWUpIHtcclxuICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZVRvKHRoaXMuY2hhbmdlVEltZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICAvL3RoaXMubm9kZS54IC09IGR0KnRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmN1cnJlbnRBY3Rpb24pO1xyXG4gICAgICAgIHRoaXMubm90TW92aW5nID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wQWxsKHZhbHVlLHBsYXRmb3JtU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFjdGlvbih0aGlzLmN1cnJlbnRBY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYWxyZWFkeVN0b3AgPSB0cnVlO1xyXG4gICAgICAgIGlmKHBsYXRmb3JtU3RhdGUgPT0xKXtcclxuICAgICAgICAgICAgdmFsdWUueSArPTE1O1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZVRvKDAuNSx2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMucGVyZmVjdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0ZWZmZWN0LmFjdGl2ZSA9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMYW5kUGVyZmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sMC4xKVxyXG5cclxuICAgICAgICAgICAgfSwwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjUsdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheUxhbmRDb25zbygpO1xyXG5cclxuICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==