"use strict";
cc._RF.push(module, '4131c/FWx9Dd7nWFL8TgiJp', 'AudioManager');
// src/AudioManager.js

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
    loseAudio: {
      "default": null,
      url: cc.AudioClip
    },
    perfectAudio: {
      "default": null,
      url: cc.AudioClip
    },
    consoAudio: {
      "default": null,
      url: cc.AudioClip
    },
    uiButtonSound: {
      "default": null,
      url: cc.AudioClip
    },
    winAudio: {
      "default": null,
      url: cc.AudioClip
    },
    musicToggle: {
      "default": null,
      type: cc.Toggle
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
  },
  start: function start() {
    if (globalData.getEffectVolume() == 0) {
      this.musicToggle.isChecked = false;
    }
  },
  setVolume: function setVolume(value) {
    cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
  },
  playWin: function playWin() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.winAudio, false, 1);
    }
  },
  playLoseSound: function playLoseSound() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.loseAudio, false, 1);
    }
  },
  playLandPerfect: function playLandPerfect() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.perfectAudio, false, 1);
    }
  },
  playLandConso: function playLandConso() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.consoAudio, false, 1);
    }
  },
  playUIbuttonSound: function playUIbuttonSound() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.uiButtonSound, false, 1);
    }
  },
  toggleMute: function toggleMute() {
    if (this.musicToggle.isChecked) {
      cc.audioEngine.setMusicVolume(1);
      globalData.setEffectVolume(1);
    } else {
      cc.audioEngine.setMusicVolume(0);
      globalData.setEffectVolume(0);
    }
  } // update (dt) {},

});

cc._RF.pop();