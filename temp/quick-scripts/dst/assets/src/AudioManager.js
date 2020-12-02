
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdWRpb01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb3NlQXVkaW8iLCJ1cmwiLCJBdWRpb0NsaXAiLCJwZXJmZWN0QXVkaW8iLCJjb25zb0F1ZGlvIiwidWlCdXR0b25Tb3VuZCIsIndpbkF1ZGlvIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwib25Mb2FkIiwiYXVkaW9FbmdpbmUiLCJzZXRFZmZlY3RzVm9sdW1lIiwiZ2xvYmFsRGF0YSIsImdldEVmZmVjdFZvbHVtZSIsInN0YXJ0IiwiaXNDaGVja2VkIiwic2V0Vm9sdW1lIiwidmFsdWUiLCJwbGF5V2luIiwicGxheSIsInBsYXlMb3NlU291bmQiLCJwbGF5TGFuZFBlcmZlY3QiLCJwbGF5TGFuZENvbnNvIiwicGxheVVJYnV0dG9uU291bmQiLCJ0b2dnbGVNdXRlIiwic2V0TXVzaWNWb2x1bWUiLCJzZXRFZmZlY3RWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBUSxJQURGO0FBRU5DLE1BQUFBLEdBQUcsRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBakJGO0FBc0JSQyxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUSxJQURDO0FBRVRGLE1BQUFBLEdBQUcsRUFBQ0wsRUFBRSxDQUFDTTtBQUZFLEtBdEJMO0FBMEJSRSxJQUFBQSxVQUFVLEVBQUM7QUFDUCxp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SDtBQUNKLEdBcEhJLENBcUhMOztBQXJISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb3NlQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHVybDpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGVyZmVjdEF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB1cmw6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc29BdWRpbzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdXJsOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1aUJ1dHRvblNvdW5kOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB1cmw6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHVybDpjYy5BdWRpb0NsaXAsIFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG11c2ljVG9nZ2xlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNUb2dnbGUuaXNDaGVja2VkPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFZvbHVtZSh2YWx1ZSl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheVdpbigpe1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2luQXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5TG9zZVNvdW5kKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5sb3NlQXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIHBsYXlMYW5kUGVyZmVjdCgpe1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucGVyZmVjdEF1ZGlvLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5TGFuZENvbnNvKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jb25zb0F1ZGlvLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5VUlidXR0b25Tb3VuZCgpe1xyXG4gICAgICAgIGlmKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMudWlCdXR0b25Tb3VuZCxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlTXV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMubXVzaWNUb2dnbGUuaXNDaGVja2VkKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMSk7XHJcbiAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0RWZmZWN0Vm9sdW1lKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==