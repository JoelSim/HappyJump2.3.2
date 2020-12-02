"use strict";
cc._RF.push(module, '366b7avfPRDxLX31qGk9Pzy', 'AutojumpManager');
// src/AutojumpManager.js

"use strict";

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
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    plusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusButton: {
      "default": null,
      type: cc.Sprite
    },
    minusButton: {
      "default": null,
      type: cc.Sprite
    },
    autoJumpSprite: {
      "default": [],
      type: [cc.Node]
    },
    autoJumpPanel: {
      "default": null,
      type: cc.Node
    },
    autoJumpNumber: 10,
    autoJumpLabel: {
      "default": null,
      type: cc.Label
    },
    lastSelectedJumpNumber: 10,
    jumpCount: {
      "default": null,
      type: cc.Label
    },
    jumpAmountLibrary: {
      "default": [],
      type: [cc.Integer]
    },
    currentValue: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.jumpAmountLibrary = [10, 50, 100, 500];
  },
  getSuccess: function getSuccess() {},
  openPanel: function openPanel() {
    if (this.autoJumpSprite[1].active) {
      this.stopJump();
    } else {
      this.autoJumpNumber = this.lastSelectedJumpNumber;
      this.autoJumpPanel.active = true;
    }
  },
  stopJump: function stopJump() {
    cc.find("Canvas/stage").getComponent("Stage").autoJump = false;
    this.autoJumpSprite[1].active = false;
    this.autoJumpSprite[0].active = true;
  },
  closePanel: function closePanel() {
    this.autoJumpPanel.active = false;
  },
  addValue: function addValue() {
    this.currentValue++;

    if (this.currentValue >= 3) {
      this.currentValue = 3;
      this.plusButton.spriteFrame = this.plusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  minusValue: function minusValue() {
    this.currentValue--;

    if (this.currentValue <= 0) {
      this.currentValue = 0;
      this.minusButton.spriteFrame = this.minusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  confirmJump: function confirmJump() {
    this.lastSelectedJumpNumber = this.autoJumpNumber;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";
    cc.find("Canvas/stage").getComponent("Stage").autoJump = true;
    this.autoJumpSprite[1].active = true;
    this.autoJumpSprite[0].active = false;
    this.closePanel();
  },
  updateJumpTimes: function updateJumpTimes() {
    this.autoJumpNumber -= 1;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";

    if (this.autoJumpNumber <= 0) {
      this.stopJump();
    }
  } // update (dt) {},

});

cc._RF.pop();