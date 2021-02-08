
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJvcGVuU3VyZVRvRXhpdCIsImFjdGl2ZSIsImNsb3NlU3VyZVRvRXhpdCIsIm9uTG9hZCIsImFwaSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRTZXR0aW5ncyIsImdsb2JhbERhdGEiLCJnZXRTb2NrZXQiLCJjb25uZWN0U29ja2V0IiwiaXNJT1MxNERldmljZSIsInN5cyIsIm9zIiwiT1NfSU9TIiwiaXNCcm93c2VyIiwiaXNNb2JpbGUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTWVzaEJ1ZmZlciIsInByb3RvdHlwZSIsImNoZWNrQW5kU3dpdGNoQnVmZmVyIiwidmVydGV4Q291bnQiLCJ2ZXJ0ZXhPZmZzZXQiLCJ1cGxvYWREYXRhIiwiX2JhdGNoZXIiLCJfZmx1c2giLCJmb3J3YXJkSW5kaWNlU3RhcnRUb09mZnNldCIsInN3aXRjaEJ1ZmZlciIsImZ1bGxTY3JlZW4iLCJzY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwidXBkYXRlQ3JlZGl0TGFiZWwiLCJzdHJpbmciLCJNYXRoIiwicm91bmQiLCJzZXR0aW5ncyIsInN0YXJ0IiwiYmxhbmtTY3JlZW4iLCJsb2JieV91cmwiLCJvcGVuIiwib3BlblNldHRpbmciLCJjbG9zZVNldHRpbmciLCJ0b2dnbGVNdXRlIiwiaXNDaGVja2VkIiwiYXVkaW9FbmdpbmUiLCJzZXRNdXNpY1ZvbHVtZSIsInNldEVmZmVjdFZvbHVtZSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7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ZixDQUE4QixDQUE5QjtBQUNBekMsTUFBQUEsVUFBVSxDQUFDMEMsZUFBWCxDQUEyQixDQUEzQjtBQUdIO0FBQ0osR0F4SEk7QUEwSExDLEVBQUFBLE1BMUhLLGtCQTBIR0MsRUExSEgsRUEwSE8sQ0FFWDtBQTVISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBtdXNpY1RvZ2dsZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ub2dnbGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0dGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdCA6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJhbGFuY2U6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9hZGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJlVG9FeGl0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9wZW5TdXJlVG9FeGl0KCl7XHJcbiAgICAgICAgdGhpcy5zdXJlVG9FeGl0LmFjdGl2ZT10cnVlO1xyXG4gICAgfSxcclxuICAgIGNsb3NlU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJBUElcIik7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0U2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgaWYoIWdsb2JhbERhdGEuZ2V0U29ja2V0KCkpe1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzSU9TMTREZXZpY2UgPSBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzQnJvd3NlciAmJiBjYy5zeXMuaXNNb2JpbGUgJiYgL2lQaG9uZSBPUyAxNC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgaWYgKGlzSU9TMTREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2MuTWVzaEJ1ZmZlci5wcm90b3R5cGUuY2hlY2tBbmRTd2l0Y2hCdWZmZXIgPSBmdW5jdGlvbiAodmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRleE9mZnNldCArIHZlcnRleENvdW50ID4gNjU1MzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXRjaGVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9OyAgICAgXHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG5cclxuICAgICAgICBpZihjYy5zY3JlZW4uZnVsbFNjcmVlbigpKXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLmV4aXRGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLnNjcmVlbi5yZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ3JlZGl0TGFiZWwoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlLnN0cmluZyA9IE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICoxMDApLzEwMDtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG4gICAgYmxhbmtTY3JlZW4oKXtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmwgIT0gbnVsbCAmJiBnbG9iYWxEYXRhLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbERhdGEuc2V0dGluZ3MubG9iYnlfdXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiYWJvdXQ6YmxhbmtcIiwgXCJfc2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9ZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG59KTtcclxuIl19