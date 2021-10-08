
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdWRpb01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb3NlQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwicGVyZmVjdEF1ZGlvIiwiY29uc29BdWRpbyIsInVpQnV0dG9uU291bmQiLCJ3aW5BdWRpbyIsIm11c2ljVG9nZ2xlIiwiVG9nZ2xlIiwib25Mb2FkIiwiYXVkaW9FbmdpbmUiLCJzZXRFZmZlY3RzVm9sdW1lIiwiZ2xvYmFsRGF0YSIsImdldEVmZmVjdFZvbHVtZSIsInN0YXJ0IiwiaXNDaGVja2VkIiwic2V0Vm9sdW1lIiwidmFsdWUiLCJwbGF5V2luIiwicGxheSIsInBsYXlMb3NlU291bmQiLCJwbGF5TGFuZFBlcmZlY3QiLCJwbGF5TGFuZENvbnNvIiwicGxheVVJYnV0dG9uU291bmQiLCJ0b2dnbGVNdXRlIiwic2V0TXVzaWNWb2x1bWUiLCJzZXRFZmZlY3RWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVEsSUFERjtBQUVOQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGRixLQWpCRjtBQXNCUkMsSUFBQUEsWUFBWSxFQUFDO0FBQ1QsaUJBQVEsSUFEQztBQUVURixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQyxLQXRCTDtBQTBCUkUsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVEsSUFE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cEhJLENBcUhMOztBQXJISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb3NlQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBlcmZlY3RBdWRpbzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zb0F1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1aUJ1dHRvblNvdW5kOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbkF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCwgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbXVzaWNUb2dnbGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlRvZ2dsZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpPT0wKXtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQ9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0Vm9sdW1lKHZhbHVlKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5V2luKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53aW5BdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlMb3NlU291bmQoKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxvc2VBdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGxheUxhbmRQZXJmZWN0KCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5wZXJmZWN0QXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlMYW5kQ29uc28oKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNvbnNvQXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlVSWJ1dHRvblNvdW5kKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy51aUJ1dHRvblNvdW5kLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBnbG9iYWxEYXRhLnNldEVmZmVjdFZvbHVtZSgwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19