
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJtZXNzYWdlIiwicHJvbXB0IiwiZXJyb3JCdXR0b25zIiwib3BlblN1cmVUb0V4aXQiLCJhY3RpdmUiLCJjbG9zZVN1cmVUb0V4aXQiLCJvbkxvYWQiLCJhcGkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0U2V0dGluZ3MiLCJnbG9iYWxEYXRhIiwiZ2V0U29ja2V0IiwiY29ubmVjdFNvY2tldCIsImlzSU9TMTREZXZpY2UiLCJzeXMiLCJvcyIsIk9TX0lPUyIsImlzQnJvd3NlciIsImlzTW9iaWxlIiwidGVzdCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIk1lc2hCdWZmZXIiLCJwcm90b3R5cGUiLCJjaGVja0FuZFN3aXRjaEJ1ZmZlciIsInZlcnRleENvdW50IiwidmVydGV4T2Zmc2V0IiwidXBsb2FkRGF0YSIsIl9iYXRjaGVyIiwiX2ZsdXNoIiwiZm9yd2FyZEluZGljZVN0YXJ0VG9PZmZzZXQiLCJzd2l0Y2hCdWZmZXIiLCJmdWxsU2NyZWVuIiwic2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInVwZGF0ZUNyZWRpdExhYmVsIiwic3RyaW5nIiwiTWF0aCIsInJvdW5kIiwic2V0dGluZ3MiLCJzdGFydCIsImJsYW5rU2NyZWVuIiwibG9iYnlfdXJsIiwib3BlbiIsIm9wZW5TZXR0aW5nIiwiY2xvc2VTZXR0aW5nIiwidG9nZ2xlTXV0ZSIsImlzQ2hlY2tlZCIsImF1ZGlvRW5naW5lIiwic2V0TXVzaWNWb2x1bWUiLCJzZXRFZmZlY3RWb2x1bWUiLCJ1cGRhdGUiLCJkdCIsImlzS2lj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QUEyQixJQUEzQjtBQUNILEdBakhJO0FBbUhMNEMsRUFBQUEsWUFuSEssMEJBbUhTO0FBQ1YsU0FBS3RELFlBQUwsQ0FBa0JVLE1BQWxCLEdBQTJCLEtBQTNCO0FBRUgsR0F0SEk7QUF3SEw2QyxFQUFBQSxVQXhISyx3QkF3SE87QUFDUixRQUFHLEtBQUsxRCxXQUFMLENBQWlCMkQsU0FBcEIsRUFBOEI7QUFDMUIvRCxNQUFBQSxFQUFFLENBQUNnRSxXQUFILENBQWVDLGNBQWYsQ0FBOEIsQ0FBOUI7QUFDQXpDLE1BQUFBLFVBQVUsQ0FBQzBDLGVBQVgsQ0FBMkIsQ0FBM0I7QUFFSCxLQUpELE1BS0k7QUFDQWxFLE1BQUFBLEVBQUUsQ0FBQ2dFLFdBQUgsQ0FBZUMsY0FBZixDQUE4QixDQUE5QjtBQUNBekMsTUFBQUEsVUFBVSxDQUFDMEMsZUFBWCxDQUEyQixDQUEzQjtBQUdIO0FBQ0osR0FwSUk7QUFzSUxDLEVBQUFBLE1BdElLLGtCQXNJR0MsRUF0SUgsRUFzSU87QUFDUixRQUFHNUMsVUFBVSxDQUFDNkMsUUFBZCxFQUF1QjtBQUM1QixXQUFLdEQsWUFBTCxDQUFrQixDQUFsQixFQUFxQkUsTUFBckIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLRixZQUFMLENBQWtCLENBQWxCLEVBQXFCRSxNQUFyQixHQUE4QixJQUE5QjtBQUNTLFdBQUtKLE9BQUwsQ0FBYXVDLE1BQWIsR0FBc0I1QixVQUFVLENBQUM4QyxXQUFqQztBQUNBLFdBQUt4RCxNQUFMLENBQVlHLE1BQVosR0FBcUIsSUFBckI7QUFDVDtBQUNFO0FBN0lJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIG11c2ljVG9nZ2xlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlRvZ2dsZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXR0aW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmFsYW5jZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cmVUb0V4aXQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTGFiZWxcclxuXHRcdH0sXHJcbiAgICAgICAgcHJvbXB0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cdFx0ZXJyb3JCdXR0b25zOntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbY2MuTm9kZV0sXHJcblx0XHR9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9wZW5TdXJlVG9FeGl0KCl7XHJcbiAgICAgICAgdGhpcy5zdXJlVG9FeGl0LmFjdGl2ZT10cnVlO1xyXG4gICAgfSxcclxuICAgIGNsb3NlU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJBUElcIik7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0U2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgaWYoIWdsb2JhbERhdGEuZ2V0U29ja2V0KCkpe1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzSU9TMTREZXZpY2UgPSBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzQnJvd3NlciAmJiBjYy5zeXMuaXNNb2JpbGUgJiYgL2lQaG9uZSBPUyAxNC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgaWYgKGlzSU9TMTREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2MuTWVzaEJ1ZmZlci5wcm90b3R5cGUuY2hlY2tBbmRTd2l0Y2hCdWZmZXIgPSBmdW5jdGlvbiAodmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRleE9mZnNldCArIHZlcnRleENvdW50ID4gNjU1MzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXRjaGVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9OyAgICAgXHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG5cclxuICAgICAgICBpZihjYy5zY3JlZW4uZnVsbFNjcmVlbigpKXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLmV4aXRGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLnNjcmVlbi5yZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ3JlZGl0TGFiZWwoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlLnN0cmluZyA9IE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICoxMDApLzEwMDtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG4gICAgYmxhbmtTY3JlZW4oKXtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmwgIT0gbnVsbCAmJiBnbG9iYWxEYXRhLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbERhdGEuc2V0dGluZ3MubG9iYnlfdXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiYWJvdXQ6YmxhbmtcIiwgXCJfc2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9ZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0tpY2tlZCl7XHJcblx0XHRcdHRoaXMuZXJyb3JCdXR0b25zWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVycm9yQnV0dG9uc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc3RyaW5nID0gZ2xvYmFsRGF0YS5raWNrTWVzc2FnZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=