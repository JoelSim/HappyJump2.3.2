
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
      type: cc.AudioClip
    },
    perfectAudio: {
      "default": null,
      type: cc.AudioClip
    },
    consoAudio: {
      "default": null,
      type: cc.AudioClip
    },
    uiButtonSound: {
      "default": null,
      type: cc.AudioClip
    },
    winAudio: {
      "default": null,
      type: cc.AudioClip
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdWRpb01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb3NlQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwicGVyZmVjdEF1ZGlvIiwiY29uc29BdWRpbyIsInVpQnV0dG9uU291bmQiLCJ3aW5BdWRpbyIsIm11c2ljVG9nZ2xlIiwiVG9nZ2xlIiwib25Mb2FkIiwiYXVkaW9FbmdpbmUiLCJzZXRFZmZlY3RzVm9sdW1lIiwiZ2xvYmFsRGF0YSIsImdldEVmZmVjdFZvbHVtZSIsInN0YXJ0IiwiaXNDaGVja2VkIiwic2V0Vm9sdW1lIiwidmFsdWUiLCJwbGF5V2luIiwicGxheSIsInBsYXlMb3NlU291bmQiLCJwbGF5TGFuZFBlcmZlY3QiLCJwbGF5TGFuZENvbnNvIiwicGxheVVJYnV0dG9uU291bmQiLCJ0b2dnbGVNdXRlIiwic2V0TXVzaWNWb2x1bWUiLCJzZXRFZmZlY3RWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBUSxJQURGO0FBRU5DLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZGLEtBakJGO0FBc0JSQyxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUSxJQURDO0FBRVRGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZDLEtBdEJMO0FBMEJSRSxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJ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R0FwSEksQ0FxSEw7O0FBckhLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIGxvc2VBdWRpbzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGVyZmVjdEF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnNvQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVpQnV0dG9uU291bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLCBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtdXNpY1RvZ2dsZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuVG9nZ2xlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCk9PTApe1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljVG9nZ2xlLmlzQ2hlY2tlZD0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRWb2x1bWUodmFsdWUpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlXaW4oKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndpbkF1ZGlvLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUxvc2VTb3VuZCgpe1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubG9zZUF1ZGlvLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBwbGF5TGFuZFBlcmZlY3QoKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnBlcmZlY3RBdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGxheUxhbmRDb25zbygpe1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY29uc29BdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGxheVVJYnV0dG9uU291bmQoKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnVpQnV0dG9uU291bmQsZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZU11dGUoKXtcclxuICAgICAgICBpZih0aGlzLm11c2ljVG9nZ2xlLmlzQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpO1xyXG4gICAgICAgICAgICBnbG9iYWxEYXRhLnNldEVmZmVjdFZvbHVtZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0RWZmZWN0Vm9sdW1lKDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=