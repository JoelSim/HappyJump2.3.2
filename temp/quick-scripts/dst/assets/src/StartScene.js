
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJtZXNzYWdlIiwicHJvbXB0IiwiZXJyb3JCdXR0b25zIiwib3BlblN1cmVUb0V4aXQiLCJhY3RpdmUiLCJjbG9zZVN1cmVUb0V4aXQiLCJvbkxvYWQiLCJhcGkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0U2V0dGluZ3MiLCJpc0lPUzE0RGV2aWNlIiwic3lzIiwib3MiLCJPU19JT1MiLCJpc0Jyb3dzZXIiLCJpc01vYmlsZSIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNZXNoQnVmZmVyIiwicHJvdG90eXBlIiwiY2hlY2tBbmRTd2l0Y2hCdWZmZXIiLCJ2ZXJ0ZXhDb3VudCIsInZlcnRleE9mZnNldCIsInVwbG9hZERhdGEiLCJfYmF0Y2hlciIsIl9mbHVzaCIsImZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0Iiwic3dpdGNoQnVmZmVyIiwiZnVsbFNjcmVlbiIsInNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVDcmVkaXRMYWJlbCIsInN0cmluZyIsIk1hdGgiLCJyb3VuZCIsImdsb2JhbERhdGEiLCJzZXR0aW5ncyIsInN0YXJ0IiwiYmxhbmtTY3JlZW4iLCJsb2JieV91cmwiLCJvcGVuIiwib3BlblNldHRpbmciLCJjbG9zZVNldHRpbmciLCJ0b2dnbGVNdXRlIiwiaXNDaGVja2VkIiwiYXVkaW9FbmdpbmUiLCJzZXRNdXNpY1ZvbHVtZSIsInNldEVmZmVjdFZvbHVtZSIsInVwZGF0ZSIsImR0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSJdLCJtYXBwaW5n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O0FBQ1IsUUFBRyxLQUFLeEQsV0FBTCxDQUFpQnlELFNBQXBCLEVBQThCO0FBQzFCN0QsTUFBQUEsRUFBRSxDQUFDOEQsV0FBSCxDQUFlQyxjQUFmLENBQThCLENBQTlCO0FBQ0FYLE1BQUFBLFVBQVUsQ0FBQ1ksZUFBWCxDQUEyQixDQUEzQjtBQUVILEtBSkQsTUFLSTtBQUNBaEUsTUFBQUEsRUFBRSxDQUFDOEQsV0FBSCxDQUFlQyxjQUFmLENBQThCLENBQTlCO0FBQ0FYLE1BQUFBLFVBQVUsQ0FBQ1ksZUFBWCxDQUEyQixDQUEzQjtBQUdIO0FBQ0osR0FqSUk7QUFtSUxDLEVBQUFBLE1BbklLLGtCQW1JR0MsRUFuSUgsRUFtSU87QUFDUixRQUFHZCxVQUFVLENBQUNlLFFBQWQsRUFBdUI7QUFDNUIsV0FBS3BELFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJFLE1BQXJCLEdBQThCLEtBQTlCO0FBQ0EsV0FBS0YsWUFBTCxDQUFrQixDQUFsQixFQUFxQkUsTUFBckIsR0FBOEIsSUFBOUI7QUFDUyxXQUFLSixPQUFMLENBQWFvQyxNQUFiLEdBQXNCRyxVQUFVLENBQUNnQixXQUFqQztBQUNBLFdBQUt0RCxNQUFMLENBQVlHLE1BQVosR0FBcUIsSUFBckI7QUFDVDtBQUNFO0FBMUlJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIG11c2ljVG9nZ2xlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlRvZ2dsZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXR0aW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmFsYW5jZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cmVUb0V4aXQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTGFiZWxcclxuXHRcdH0sXHJcbiAgICAgICAgcHJvbXB0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cdFx0ZXJyb3JCdXR0b25zOntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbY2MuTm9kZV0sXHJcblx0XHR9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9wZW5TdXJlVG9FeGl0KCl7XHJcbiAgICAgICAgdGhpcy5zdXJlVG9FeGl0LmFjdGl2ZT10cnVlO1xyXG4gICAgfSxcclxuICAgIGNsb3NlU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJBUElcIik7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0U2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgY29uc3QgaXNJT1MxNERldmljZSA9IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuaXNCcm93c2VyICYmIGNjLnN5cy5pc01vYmlsZSAmJiAvaVBob25lIE9TIDE0Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICBpZiAoaXNJT1MxNERldmljZSkge1xyXG4gICAgICAgICAgICBjYy5NZXNoQnVmZmVyLnByb3RvdHlwZS5jaGVja0FuZFN3aXRjaEJ1ZmZlciA9IGZ1bmN0aW9uICh2ZXJ0ZXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVydGV4T2Zmc2V0ICsgdmVydGV4Q291bnQgPiA2NTUzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhdGNoZXIuX2ZsdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07ICAgICBcclxuICAgICAgICAgICAgY2MuTWVzaEJ1ZmZlci5wcm90b3R5cGUuZm9yd2FyZEluZGljZVN0YXJ0VG9PZmZzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQnVmZmVyKCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmdWxsU2NyZWVuKCl7XHJcblxyXG4gICAgICAgIGlmKGNjLnNjcmVlbi5mdWxsU2NyZWVuKCkpe1xyXG4gICAgICAgICAgICBjYy5zY3JlZW4uZXhpdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLnJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDcmVkaXRMYWJlbCgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLmJhbGFuY2Uuc3RyaW5nID0gTWF0aC5yb3VuZChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKjEwMCkvMTAwO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH0sXHJcbiAgICBibGFua1NjcmVlbigpe1xyXG4gICAgICAgIGlmIChnbG9iYWxEYXRhLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBudWxsICYmIGdsb2JhbERhdGEuc2V0dGluZ3MubG9iYnlfdXJsICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oZ2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmwsIFwiX3NlbGZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJhYm91dDpibGFua1wiLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlblNldHRpbmcoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmUgID10cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9zZVNldHRpbmcoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmUgID1mYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZU11dGUoKXtcclxuICAgICAgICBpZih0aGlzLm11c2ljVG9nZ2xlLmlzQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDEpO1xyXG4gICAgICAgICAgICBnbG9iYWxEYXRhLnNldEVmZmVjdFZvbHVtZSgxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBnbG9iYWxEYXRhLnNldEVmZmVjdFZvbHVtZSgwKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmlzS2lja2VkKXtcclxuXHRcdFx0dGhpcy5lcnJvckJ1dHRvbnNbMF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZXJyb3JCdXR0b25zWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5zdHJpbmcgPSBnbG9iYWxEYXRhLmtpY2tNZXNzYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnByb21wdC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==