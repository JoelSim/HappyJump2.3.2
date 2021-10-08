"use strict";
cc._RF.push(module, '8c4d8M2FYNB8pqHAGurgrUI', 'BetSelection');
// src/BetSelection.js

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
    canvas: {
      "default": null,
      type: cc.Node
    },
    playButton: {
      "default": null,
      type: cc.Button
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = 0;
  },
  start: function start() {
    if (cc.sys.isMobile) {
      cc.view.resizeWithBrowserSize(true);
      cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
    } else {
      this.canvas.getComponent(cc.Canvas).fitHeight = true;
      this.canvas.getComponent(cc.Canvas).fitWidth = true;
    }
  },
  // update (dt) {},
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }

    globalData.setBetSelection(value);
  },
  StartGame: function StartGame() {
    //send server
    this.loadingLayer.active = true; //start game

    cc.director.loadScene("game");
  }
});

cc._RF.pop();