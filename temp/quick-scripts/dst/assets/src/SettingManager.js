
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/SettingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4205UA9ohBwpoCELzXYWU1', 'SettingManager');
// src/SettingManager.js

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
    settingLayer: {
      "default": null,
      type: cc.Node
    },
    tips: {
      "default": null,
      type: cc.Node
    },
    tipsLabel: {
      "default": null,
      type: cc.Label
    }
  },
  fullScreen: function fullScreen() {
    if (cc.screen.fullScreen()) {
      cc.screen.exitFullScreen();
    } else {
      cc.screen.requestFullScreen();
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
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
  start: function start() {
    this.game = cc.find("Canvas").getComponent("GameScene");
    this.stage = cc.find("Canvas/stage").getComponent("Stage");
  },
  openSetting: function openSetting() {
    this.settingLayer.active = true;
  },
  closeSetting: function closeSetting() {
    this.settingLayer.active = false;
  },
  restartGame: function restartGame() {
    if (this.stage.autoJump) {
      this.openTips();
      this.tipsLabel.string = "Cannot Restart Game While Auto Jumping";
    } else {
      this.settingLayer.active = false;
      this.game.onOver();
    }
  },
  quitGame: function quitGame() {
    if (this.stage.autoJump) {
      this.openTips();
      this.tipsLabel.string = "Cannot Quit Game While Auto Jumping";
    } else {
      cc.find("Canvas/overPanel").getComponent("OverPanel").isQuit = true;
      this.settingLayer.active = false;
      this.game.onOver();
    }
  },
  openTips: function openTips() {
    this.tips.active = true;
  },
  closeTips: function closeTips() {
    this.tips.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTZXR0aW5nTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNldHRpbmdMYXllciIsInR5cGUiLCJOb2RlIiwidGlwcyIsInRpcHNMYWJlbCIsIkxhYmVsIiwiZnVsbFNjcmVlbiIsInNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJvbkxvYWQiLCJpc0lPUzE0RGV2aWNlIiwic3lzIiwib3MiLCJPU19JT1MiLCJpc0Jyb3dzZXIiLCJpc01vYmlsZSIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNZXNoQnVmZmVyIiwicHJvdG90eXBlIiwiY2hlY2tBbmRTd2l0Y2hCdWZmZXIiLCJ2ZXJ0ZXhDb3VudCIsInZlcnRleE9mZnNldCIsInVwbG9hZERhdGEiLCJfYmF0Y2hlciIsIl9mbHVzaCIsImZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0Iiwic3dpdGNoQnVmZmVyIiwic3RhcnQiLCJnYW1lIiwiZmluZCIsImdldENvbXBvbmVudCIsInN0YWdlIiwib3BlblNldHRpbmciLCJhY3RpdmUiLCJjbG9zZVNldHRpbmciLCJyZXN0YXJ0R2FtZSIsImF1dG9KdW1wIiwib3BlblRpcHMiLCJzdHJpbmciLCJvbk92ZXIiLCJxdWl0R2FtZSIsImlzUXVpdCIsImNsb3NlVGlwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkMsS0FETDtBQUtSQyxJQUFBQSxJQUFJ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VVcsTUFBVjtBQUNIO0FBRUgsR0FuRkc7QUFvRkpGLEVBQUFBLFFBcEZJLHNCQW9GTTtBQUNQLFNBQUt0QyxJQUFMLENBQVVrQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0YsR0F0Rkc7QUF3RkpTLEVBQUFBLFNBeEZJLHVCQXdGTztBQUNSLFNBQUszQyxJQUFMLENBQVVrQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0YsR0ExRkcsQ0EyRkw7O0FBM0ZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzZXR0aW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpcHM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGUgOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGlwc0xhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlIDpjYy5MYWJlbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG4gICAgICAgIGlmKGNjLnNjcmVlbi5mdWxsU2NyZWVuKCkpe1xyXG4gICAgICAgICAgICBjYy5zY3JlZW4uZXhpdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLnJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zdCBpc0lPUzE0RGV2aWNlID0gY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5pc0Jyb3dzZXIgJiYgY2Muc3lzLmlzTW9iaWxlICYmIC9pUGhvbmUgT1MgMTQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIGlmIChpc0lPUzE0RGV2aWNlKSB7XHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmNoZWNrQW5kU3dpdGNoQnVmZmVyID0gZnVuY3Rpb24gKHZlcnRleENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0ZXhPZmZzZXQgKyB2ZXJ0ZXhDb3VudCA+IDY1NTM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTsgICAgIFxyXG4gICAgICAgICAgICBjYy5NZXNoQnVmZmVyLnByb3RvdHlwZS5mb3J3YXJkSW5kaWNlU3RhcnRUb09mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVTY2VuZVwiKTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb3BlblNldHRpbmcoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAgcmVzdGFydEdhbWUoKXtcclxuICAgICAgICBpZih0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVGlwcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmcgPSBcIkNhbm5vdCBSZXN0YXJ0IEdhbWUgV2hpbGUgQXV0byBKdW1waW5nXCI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbk92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICB9LFxyXG5cclxuICAgICBxdWl0R2FtZSgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVGlwcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmcgPSBcIkNhbm5vdCBRdWl0IEdhbWUgV2hpbGUgQXV0byBKdW1waW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbk92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuICAgICBvcGVuVGlwcygpe1xyXG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmU9dHJ1ZTtcclxuICAgICB9LFxyXG5cclxuICAgICBjbG9zZVRpcHMoKXtcclxuICAgICAgICB0aGlzLnRpcHMuYWN0aXZlPWZhbHNlO1xyXG4gICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==