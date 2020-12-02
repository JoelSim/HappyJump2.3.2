
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/StartScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a98da22QxGVrT4WQx6TGck', 'StartScene');
// src/StartScene.js

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
    musicToggle: {
      "default": null,
      type: cc.Toggle
    },
    settingLayer: {
      "default": null,
      type: cc.Node
    },
    balance: {
      "default": null,
      type: cc.Label
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    },
    sureToExit: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  openSureToExit: function openSureToExit() {
    this.sureToExit.active = true;
  },
  closeSureToExit: function closeSureToExit() {
    this.sureToExit.active = false;
  },
  onLoad: function onLoad() {
    this.api = this.node.getComponent("API");
    this.api.getSettings();
    this.loadingLayer.active = true;

    if (!globalData.getSocket()) {
      this.getComponent("Socket").connectSocket();
    }

    var isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);

    if (isIOS14Device) {
      cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
        if (this.vertexOffset + vertexCount > 65535) {
          this.uploadData();

          this._batcher._flush();
        }
      };

      cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
        this.uploadData();
        this.switchBuffer();
      };
    }
  },
  fullScreen: function fullScreen() {
    if (cc.screen.fullScreen()) {
      cc.screen.exitFullScreen();
    } else {
      cc.screen.requestFullScreen();
    } // document.webkitExitFullscreen();

  },
  updateCreditLabel: function updateCreditLabel() {
    this.loadingLayer.active = false;
    this.balance.string = Math.round(globalData.settings.balance * 100) / 100;
  },
  start: function start() {},
  blankScreen: function blankScreen() {
    window.location.href = globalData.settings.lobby_url;
  },
  openSetting: function openSetting() {
    this.settingLayer.active = true;
  },
  closeSetting: function closeSetting() {
    this.settingLayer.active = false;
  },
  toggleMute: function toggleMute() {
    if (this.musicToggle.isChecked) {
      cc.audioEngine.setMusicVolume(1);
      globalData.setEffectVolume(1);
    } else {
      cc.audioEngine.setMusicVolume(0);
      globalData.setEffectVolume(0);
    }
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJvcGVuU3VyZVRvRXhpdCIsImFjdGl2ZSIsImNsb3NlU3VyZVRvRXhpdCIsIm9uTG9hZCIsImFwaSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRTZXR0aW5ncyIsImdsb2JhbERhdGEiLCJnZXRTb2NrZXQiLCJjb25uZWN0U29ja2V0IiwiaXNJT1MxNERldmljZSIsInN5cyIsIm9zIiwiT1NfSU9TIiwiaXNCcm93c2VyIiwiaXNNb2JpbGUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTWVzaEJ1ZmZlciIsInByb3RvdHlwZSIsImNoZWNrQW5kU3dpdGNoQnVmZmVyIiwidmVydGV4Q291bnQiLCJ2ZXJ0ZXhPZmZzZXQiLCJ1cGxvYWREYXRhIiwiX2JhdGNoZXIiLCJfZmx1c2giLCJmb3J3YXJkSW5kaWNlU3RhcnRUb09mZnNldCIsInN3aXRjaEJ1ZmZlciIsImZ1bGxTY3JlZW4iLCJzY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwidXBkYXRlQ3JlZGl0TGFiZWwiLCJzdHJpbmciLCJNYXRoIiwicm91bmQiLCJzZXR0aW5ncyIsInN0YXJ0IiwiYmxhbmtTY3JlZW4iLCJsb2NhdGlvbiIsImhyZWYiLCJsb2JieV91cmwiLCJvcGVuU2V0dGluZyIsImNsb3NlU2V0dGluZyIsInRvZ2dsZU11dGUiLCJpc0NoZWNrZWQiLCJhdWRpb0VuZ2luZSIsInNldE11c2ljVm9sdW1lIiwic2V0RWZmZWN0Vm9sdW1lIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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cm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCAqIGFzIGdsb2JhbERhdGEgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgbXVzaWNUb2dnbGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuVG9nZ2xlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldHRpbmdMYXllcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOm51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBiYWxhbmNlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxvYWRpbmdMYXllcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VyZVRvRXhpdDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvcGVuU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZVN1cmVUb0V4aXQoKXtcclxuICAgICAgICB0aGlzLnN1cmVUb0V4aXQuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiQVBJXCIpO1xyXG4gICAgICAgIHRoaXMuYXBpLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID10cnVlO1xyXG4gICAgICAgIGlmKCFnbG9iYWxEYXRhLmdldFNvY2tldCgpKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0lPUzE0RGV2aWNlID0gY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5pc0Jyb3dzZXIgJiYgY2Muc3lzLmlzTW9iaWxlICYmIC9pUGhvbmUgT1MgMTQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIGlmIChpc0lPUzE0RGV2aWNlKSB7XHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmNoZWNrQW5kU3dpdGNoQnVmZmVyID0gZnVuY3Rpb24gKHZlcnRleENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0ZXhPZmZzZXQgKyB2ZXJ0ZXhDb3VudCA+IDY1NTM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTsgICAgIFxyXG4gICAgICAgICAgICBjYy5NZXNoQnVmZmVyLnByb3RvdHlwZS5mb3J3YXJkSW5kaWNlU3RhcnRUb09mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZ1bGxTY3JlZW4oKXtcclxuXHJcbiAgICAgICAgaWYoY2Muc2NyZWVuLmZ1bGxTY3JlZW4oKSl7XHJcbiAgICAgICAgICAgIGNjLnNjcmVlbi5leGl0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5zY3JlZW4ucmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC8vIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUNyZWRpdExhYmVsKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZS5zdHJpbmcgPSBNYXRoLnJvdW5kKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSAqMTAwKS8xMDA7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfSxcclxuICAgIGJsYW5rU2NyZWVuKCl7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Z2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmw7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9ZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG59KTtcclxuIl19