
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
    },
    message: {
      "default": null,
      type: cc.Label
    },
    prompt: {
      "default": null,
      type: cc.Node
    },
    errorButtons: {
      "default": [],
      type: [cc.Node]
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
    if (globalData.settings.lobby_url != null && globalData.settings.lobby_url != "") {
      window.open(globalData.settings.lobby_url, "_self");
    } else {
      window.open("about:blank", "_self");
    }
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
  update: function update(dt) {
    if (globalData.isKicked) {
      this.errorButtons[0].active = false;
      this.errorButtons[1].active = true;
      this.message.string = globalData.kickMessage;
      this.prompt.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJtZXNzYWdlIiwicHJvbXB0IiwiZXJyb3JCdXR0b25zIiwib3BlblN1cmVUb0V4aXQiLCJhY3RpdmUiLCJjbG9zZVN1cmVUb0V4aXQiLCJvbkxvYWQiLCJhcGkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0U2V0dGluZ3MiLCJpc0lPUzE0RGV2aWNlIiwic3lzIiwib3MiLCJPU19JT1MiLCJpc0Jyb3dzZXIiLCJpc01vYmlsZSIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNZXNoQnVmZmVyIiwicHJvdG90eXBlIiwiY2hlY2tBbmRTd2l0Y2hCdWZmZXIiLCJ2ZXJ0ZXhDb3VudCIsInZlcnRleE9mZnNldCIsInVwbG9hZERhdGEiLCJfYmF0Y2hlciIsIl9mbHVzaCIsImZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0Iiwic3dpdGNoQnVmZmVyIiwiZnVsbFNjcmVlbiIsInNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVDcmVkaXRMYWJlbCIsInN0cmluZyIsIk1hdGgiLCJyb3VuZCIsImdsb2JhbERhdGEiLCJzZXR0aW5ncyIsInN0YXJ0IiwiYmxhbmtTY3JlZW4iLCJsb2JieV91cmwiLCJvcGVuIiwib3BlblNldHRpbmciLCJjbG9zZVNldHRpbmciLCJ0b2dnbGVNdXRlIiwiaXNDaGVja2VkIiwiYXVkaW9FbmdpbmUiLCJzZXRNdXNpY1ZvbHVtZSIsInNldEVmZmVjdFZvbHVtZSIsInVwZGF0ZSIsImR0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSJdLCJtYXBwaW5n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QUNSLFFBQUcsS0FBS3hELFdBQUwsQ0FBaUJ5RCxTQUFwQixFQUE4QjtBQUMxQjdELE1BQUFBLEVBQUUsQ0FBQzhELFdBQUgsQ0FBZUMsY0FBZixDQUE4QixDQUE5QjtBQUNBWCxNQUFBQSxVQUFVLENBQUNZLGVBQVgsQ0FBMkIsQ0FBM0I7QUFFSCxLQUpELE1BS0k7QUFDQWhFLE1BQUFBLEVBQUUsQ0FBQzhELFdBQUgsQ0FBZUMsY0FBZixDQUE4QixDQUE5QjtBQUNBWCxNQUFBQSxVQUFVLENBQUNZLGVBQVgsQ0FBMkIsQ0FBM0I7QUFHSDtBQUNKLEdBaklJO0FBbUlMQyxFQUFBQSxNQW5JSyxrQkFtSUdDLEVBbklILEVBbUlPO0FBQ1IsUUFBR2QsVUFBVSxDQUFDZSxRQUFkLEVBQXVCO0FBQzVCLFdBQUtwRCxZQUFMLENBQWtCLENBQWxCLEVBQXFCRSxNQUFyQixHQUE4QixLQUE5QjtBQUNBLFdBQUtGLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJFLE1BQXJCLEdBQThCLElBQTlCO0FBQ1MsV0FBS0osT0FBTCxDQUFhb0MsTUFBYixHQUFzQkcsVUFBVSxDQUFDZ0IsV0FBakM7QUFDQSxXQUFLdEQsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLElBQXJCO0FBQ1Q7QUFDRTtBQTFJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBtdXNpY1RvZ2dsZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ub2dnbGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0dGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdCA6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJhbGFuY2U6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9hZGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJlVG9FeGl0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLkxhYmVsXHJcblx0XHR9LFxyXG4gICAgICAgIHByb21wdDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHRcdGVycm9yQnV0dG9uczp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdLFxyXG5cdFx0fSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvcGVuU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZVN1cmVUb0V4aXQoKXtcclxuICAgICAgICB0aGlzLnN1cmVUb0V4aXQuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiQVBJXCIpO1xyXG4gICAgICAgIHRoaXMuYXBpLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID10cnVlO1xyXG4gICAgICAgIGNvbnN0IGlzSU9TMTREZXZpY2UgPSBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzQnJvd3NlciAmJiBjYy5zeXMuaXNNb2JpbGUgJiYgL2lQaG9uZSBPUyAxNC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgaWYgKGlzSU9TMTREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2MuTWVzaEJ1ZmZlci5wcm90b3R5cGUuY2hlY2tBbmRTd2l0Y2hCdWZmZXIgPSBmdW5jdGlvbiAodmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRleE9mZnNldCArIHZlcnRleENvdW50ID4gNjU1MzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXRjaGVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9OyAgICAgXHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG5cclxuICAgICAgICBpZihjYy5zY3JlZW4uZnVsbFNjcmVlbigpKXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLmV4aXRGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLnNjcmVlbi5yZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ3JlZGl0TGFiZWwoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlLnN0cmluZyA9IE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICoxMDApLzEwMDtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG4gICAgYmxhbmtTY3JlZW4oKXtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmwgIT0gbnVsbCAmJiBnbG9iYWxEYXRhLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbERhdGEuc2V0dGluZ3MubG9iYnlfdXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiYWJvdXQ6YmxhbmtcIiwgXCJfc2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9ZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0tpY2tlZCl7XHJcblx0XHRcdHRoaXMuZXJyb3JCdXR0b25zWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVycm9yQnV0dG9uc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc3RyaW5nID0gZ2xvYmFsRGF0YS5raWNrTWVzc2FnZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=