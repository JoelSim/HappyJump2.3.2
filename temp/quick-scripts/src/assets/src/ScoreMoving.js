"use strict";
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