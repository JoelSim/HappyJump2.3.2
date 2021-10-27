
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/Socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79234/ObK1KAJ+O8GLBqwKq', 'Socket');
// src/Network/Socket.js

"use strict";

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MobileDetect = require('mobile-detect');

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  //mg2020
  onLoad: function onLoad() {
    this.mobileDetect = new MobileDetect(window.navigator.userAgent);
  },
  //#region Encryption
  decode: function decode(data) {
    // convert from base64 and return object in string
    return ecrypt.decrypt(data);
  },
  encode: function encode(data) {
    // convert string object to base64 string and return the string
    return ecrypt.encrypt(data);
  },
  socketReceiveAction: function socketReceiveAction(data) {
    if (global.isEncrypt) {
      return JSON.parse(this.decode(data));
    } else {
      return data;
    }
  },
  isParsable: function isParsable(input) {
    try {
      JSON.parse(input);
    } catch (e) {
      return false;
    }

    return true;
  },
  parseDataFormat: function parseDataFormat(data) {
    if (this.isParsable(data) == true) {
      return JSON.parse(data);
    } else {
      return data;
    }
  },
  //#endregion
  connectSocket: function connectSocket(data) {
    cc.log("--------- Connecting Socket ----------------");
    var self = this;
    this.firstConnect = true;
    var device_type = "Desktop";

    if (cc.sys.isMobile) {
      device_type = "Mobile";
    }

    if (cc.sys.isNative) {
      window.io = SocketIO; // window.io = SocketIO || io;

      cc.log("------------ JSB -------------"); // not using bet in ketupat

      if (data == "bet") {
        var tempSocket = io.connect(constant.getSocketURL());
        global.setSocket(tempSocket);
        cc.log(constant.getSocketURL());
      } else {
        var tempSocket = io.connect(constant.getSocketURL());
        global.setSocket(tempSocket);
        cc.log(constant.getSocketURL());
      }
    } else {
      cc.log("------------ default -------------"); // window.io = require('socket.io-client');
      // not using bet in ketupat

      if (data == "bet") {
        cc.log("constant.getSocketURL() = " + constant.getSocketURL());
        var tempSocket = io(constant.getSocketURL());
        global.setSocket(tempSocket);
      } else {
        cc.log("constant.getSocketURL() = " + constant.getSocketURL());
        var tempSocket = io(constant.getSocketURL());
        global.setSocket(tempSocket);
      }
    }

    self.listenEvent();
  },
  listenEvent: function listenEvent() {
    var self = this;
    global.getSocket().on('connect', function () {
      cc.log("Socket Connected");
      if (global.isDemo) return;
      var body = {
        "username": global.settings.username,
        "access_token": global.access_token,
        "game_code": global.game_code,
        "api_url": global.api_url,
        "host_id": global.host_id,
        "user_id": global.settings.user_id,
        "device_type": self.getDeviceType(),
        "browser_type": self.getBrowserType(),
        "os_version": self.getOSversion(),
        "os_type": self.getOSType(),
        "h5_app": global.h5_app,
        "phone_model": self.getPhoneModel(),
        "user_agent": self.getUserAgent()
      };

      if (global.isEncrypt) {
        global.getSocket().emit('subscribe', self.encode(JSON.stringify(body)));
      } else {
        global.getSocket().emit('subscribe', body);
      }
    });
    global.getSocket().on('balance', function (data) {
      data = self.socketReceiveAction(data);
      global.settings.balance = data.after_balance;
      global.finishGeneratingBalance = true;
    });
    global.getSocket().on('reconnecting', function () {
      console.log("reconnecting");
    });
    global.getSocket().on('reconnect', function () {
      console.log("success reconnect");
    });
    global.getSocket().on('getResult', function (data) {
      data = self.socketReceiveAction(data);
      global.ticket_id = data.ticket_id;
      global.settings.balance = data.balance;
      global.consoScore = data.consoleScore;
      global.perfectScore = data.perfectScore;
      global.platform = data.platform;
      global.finishGetData = true;
    });
    global.getSocket().on("cheat", function (data) {
      data = self.socketReceiveAction(data);
      global.errorMessage = data.error;
      global.playerBalance = data.after_balance;
    }), global.getSocket().on('kick-user-maintenance', function (data) {});
    global.getSocket().on('kickUser', function (data) {
      data = self.socketReceiveAction(data);
      global.isKicked = true;
      global.kickMessage = "You have exceeded daily profit limit.";
    });
  },
  removeEventListener: function removeEventListener() {
    global.getSocket().removeEventListener("balance");
    global.getSocket().removeEventListener("reconnecting");
    global.getSocket().removeEventListener("reconnect");
    global.getSocket().removeEventListener("onSubscribeDone");
    global.getSocket().removeEventListener("onResult");
    global.getSocket().removeEventListener("kick-user-maintenance");
    global.getSocket().removeEventListener("kick-user");
  },
  //#region Get Device Info Functions
  getDeviceType: function getDeviceType() {
    if (cc.sys.isMobile) {
      return 1;
    } else if (this.mobileDetect.tablet() != null) {
      return 2;
    } else {
      return 0;
    }
  },
  getBrowserType: function getBrowserType() {
    return cc.sys.browserType + " : " + cc.sys.browserVersion;
  },
  getOSversion: function getOSversion() {
    return cc.sys.osVersion;
  },
  getOSType: function getOSType() {
    switch (cc.sys.os) {
      case "OS X":
        return 3;

      case "Android":
        return 0;

      case "Windows":
        return 2;

      case "Linux":
        return 4;

      case "iOS":
        return 1;

      default:
        return 99;
    }
  },
  getPhoneModel: function getPhoneModel() {
    if (this.mobileDetect.phone() == null) {
      return "Desktop";
    } else {
      return this.mobileDetect.phone();
    }
  },
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiTW9iaWxlRGV0ZWN0IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibW9iaWxlRGV0ZWN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGVjb2RlIiwiZGF0YSIsImVjcnlwdCIsImRlY3J5cHQiLCJlbmNvZGUiLCJlbmNyeXB0Iiwic29ja2V0UmVjZWl2ZUFjdGlvbiIsImdsb2JhbCIsImlzRW5jcnlwdCIsIkpTT04iLCJwYXJzZSIsImlzUGFyc2FibGUiLCJpbnB1dCIsImUiLCJwYXJzZURhdGFGb3JtYXQiLCJjb25uZWN0U29ja2V0IiwibG9nIiwic2VsZiIsImZpcnN0Q29ubmVjdCIsImRldmljZV90eXBlIiwic3lzIiwiaXNNb2JpbGUiLCJpc05hdGl2ZSIsImlvIiwiU29ja2V0SU8iLCJ0ZW1wU29ja2V0IiwiY29ubmVjdCIsImNvbnN0YW50IiwiZ2V0U29ja2V0VVJMIiwic2V0U29ja2V0IiwibGlzdGVuRXZlbnQiLCJnZXRTb2NrZXQiLCJvbiIsImlzRGVtbyIsImJvZHkiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwiYWNjZXNzX3Rva2VuIiwiZ2FtZV9jb2RlIiwiYXBpX3VybCIsImhvc3RfaWQiLCJ1c2VyX2lkIiwiZ2V0RGV2aWNlVHlwZSIsImdldEJyb3dzZXJUeXBlIiwiZ2V0T1N2ZXJzaW9uIiwiZ2V0T1NUeXBlIiwiaDVfYXBwIiwiZ2V0UGhvbmVNb2RlbCIsImdldFVzZXJBZ2VudCIsImVtaXQiLCJzdHJpbmdpZnkiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJpc0tpY2tlZCIsImtpY2tNZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhYmxldCIsImJyb3dzZXJUeXBlIiwiYnJvd3NlclZlcnNpb24iLCJvc1ZlcnNpb24iLCJvcyIsInBob25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQTtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsWUFBTCxHQUFvQixJQUFJUCxZQUFKLENBQWlCUSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQWxDLENBQXBCO0FBQ0gsR0FwQkk7QUFzQkw7QUFDQUMsRUFBQUEsTUF2Qkssa0JBdUJFQyxJQXZCRixFQXVCTztBQUNSO0FBQ0EsV0FBT0MsTUFBTSxDQUFDQyxPQUFQLENBQWVGLElBQWYsQ0FBUDtBQUNILEdBMUJJO0FBNEJMRyxFQUFBQSxNQTVCSyxrQkE0QkVILElBNUJGLEVBNEJPO0FBQ1I7QUFDQSxXQUFPQyxNQUFNLENBQUNHLE9BQVAsQ0FBZUosSUFBZixDQUFQO0FBQ0gsR0EvQkk7QUFpQ0xLLEVBQUFBLG1CQWpDSywrQkFpQ2VMLElBakNmLEVBaUNvQjtBQUNyQixRQUFHTSxNQUFNLENBQUNDLFNBQVYsRUFBb0I7QUFDaEIsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS1YsTUFBTCxDQUFZQyxJQUFaLENBQVgsQ0FBUDtBQUNILEtBRkQsTUFHSTtBQUNBLGFBQU9BLElBQVA7QUFDSDtBQUNKLEdBeENJO0FBMENMVSxFQUFBQSxVQUFVLEVBQUcsb0JBQVVDLEtBQVYsRUFBaUI7QUFDMUIsUUFBSTtBQUNBSCxNQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsS0FBWDtBQUNILEtBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDUixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQWpESTtBQW1ETEMsRUFBQUEsZUFBZSxFQUFFLHlCQUFTYixJQUFULEVBQWM7QUFDM0IsUUFBSSxLQUFLVSxVQUFMLENBQWdCVixJQUFoQixLQUF5QixJQUE3QixFQUFrQztBQUM5QixhQUFPUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsSUFBWCxDQUFQO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsYUFBT0EsSUFBUDtBQUNIO0FBQ0osR0F6REk7QUEwREw7QUFFQWMsRUFBQUEsYUFBYSxFQUFFLHVCQUFTZCxJQUFULEVBQWM7QUFDekJWLElBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBTyw4Q0FBUDtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFFBQUlDLFdBQVcsR0FBRyxTQUFsQjs7QUFDQSxRQUFHNUIsRUFBRSxDQUFDNkIsR0FBSCxDQUFPQyxRQUFWLEVBQW1CO0FBQ2ZGLE1BQUFBLFdBQVcsR0FBRyxRQUFkO0FBQ0g7O0FBRUQsUUFBSTVCLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT0UsUUFBWCxFQUFxQjtBQUNqQnpCLE1BQUFBLE1BQU0sQ0FBQzBCLEVBQVAsR0FBWUMsUUFBWixDQURpQixDQUVqQjs7QUFDQWpDLE1BQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBTyxnQ0FBUCxFQUhpQixDQUlqQjs7QUFDQSxVQUFHZixJQUFJLElBQUksS0FBWCxFQUFpQjtBQUNiLFlBQUl3QixVQUFVLEdBQUdGLEVBQUUsQ0FBQ0csT0FBSCxDQUFXQyxRQUFRLENBQUNDLFlBQVQsRUFBWCxDQUFqQjtBQUNBckIsUUFBQUEsTUFBTSxDQUFDc0IsU0FBUCxDQUFpQkosVUFBakI7QUFDQWxDLFFBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBT1csUUFBUSxDQUFDQyxZQUFULEVBQVA7QUFDSCxPQUpELE1BS0k7QUFDQSxZQUFJSCxVQUFVLEdBQUdGLEVBQUUsQ0FBQ0csT0FBSCxDQUFXQyxRQUFRLENBQUNDLFlBQVQsRUFBWCxDQUFqQjtBQUNBckIsUUFBQUEsTUFBTSxDQUFDc0IsU0FBUCxDQUFpQkosVUFBakI7QUFDQWxDLFFBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBT1csUUFBUSxDQUFDQyxZQUFULEVBQVA7QUFDSDtBQUNKLEtBZkQsTUFlTTtBQUNGckMsTUFBQUEsRUFBRSxDQUFDeUIsR0FBSCxDQUFPLG9DQUFQLEVBREUsQ0FFTjtBQUNJOztBQUNBLFVBQUdmLElBQUksSUFBSSxLQUFYLEVBQWlCO0FBQ2JWLFFBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBTywrQkFBNkJXLFFBQVEsQ0FBQ0MsWUFBVCxFQUFwQztBQUNBLFlBQUlILFVBQVUsR0FBR0YsRUFBRSxDQUFDSSxRQUFRLENBQUNDLFlBQVQsRUFBRCxDQUFuQjtBQUNBckIsUUFBQUEsTUFBTSxDQUFDc0IsU0FBUCxDQUFpQkosVUFBakI7QUFDSCxPQUpELE1BS0k7QUFDQWxDLFFBQUFBLEVBQUUsQ0FBQ3lCLEdBQUgsQ0FBTywrQkFBNkJXLFFBQVEsQ0FBQ0MsWUFBVCxFQUFwQztBQUNBLFlBQUlILFVBQVUsR0FBR0YsRUFBRSxDQUFDSSxRQUFRLENBQUNDLFlBQVQsRUFBRCxDQUFuQjtBQUNBckIsUUFBQUEsTUFBTSxDQUFDc0IsU0FBUCxDQUFpQkosVUFBakI7QUFDSDtBQUNKOztBQUVEUixJQUFBQSxJQUFJLENBQUNhLFdBQUw7QUFDSCxHQXJHSTtBQXVHTEEsRUFBQUEsV0FBVyxFQUFFLHVCQUFVO0FBQ25CLFFBQUliLElBQUksR0FBRyxJQUFYO0FBRUFWLElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJDLEVBQW5CLENBQXNCLFNBQXRCLEVBQWlDLFlBQVc7QUFDeEN6QyxNQUFBQSxFQUFFLENBQUN5QixHQUFILENBQU8sa0JBQVA7QUFFQSxVQUFHVCxNQUFNLENBQUMwQixNQUFWLEVBQWtCO0FBQ2xCLFVBQUlDLElBQUksR0FBRztBQUNQLG9CQUFZM0IsTUFBTSxDQUFDNEIsUUFBUCxDQUFnQkMsUUFEckI7QUFFUCx3QkFBZ0I3QixNQUFNLENBQUM4QixZQUZoQjtBQUdQLHFCQUFhOUIsTUFBTSxDQUFDK0IsU0FIYjtBQUlQLG1CQUFXL0IsTUFBTSxDQUFDZ0MsT0FKWDtBQUtQLG1CQUFXaEMsTUFBTSxDQUFDaUMsT0FMWDtBQU1QLG1CQUFXakMsTUFBTSxDQUFDNEIsUUFBUCxDQUFnQk0sT0FOcEI7QUFPUCx1QkFBZXhCLElBQUksQ0FBQ3lCLGFBQUwsRUFQUjtBQVFQLHdCQUFnQnpCLElBQUksQ0FBQzBCLGNBQUwsRUFSVDtBQVNQLHNCQUFjMUIsSUFBSSxDQUFDMkIsWUFBTCxFQVRQO0FBVVAsbUJBQVczQixJQUFJLENBQUM0QixTQUFMLEVBVko7QUFXUCxrQkFBVXRDLE1BQU0sQ0FBQ3VDLE1BWFY7QUFZUCx1QkFBZTdCLElBQUksQ0FBQzhCLGFBQUwsRUFaUjtBQWFQLHNCQUFjOUIsSUFBSSxDQUFDK0IsWUFBTDtBQWJQLE9BQVg7O0FBZUEsVUFBSXpDLE1BQU0sQ0FBQ0MsU0FBWCxFQUFzQjtBQUNsQkQsUUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQmtCLElBQW5CLENBQXdCLFdBQXhCLEVBQXFDaEMsSUFBSSxDQUFDYixNQUFMLENBQVlLLElBQUksQ0FBQ3lDLFNBQUwsQ0FBZWhCLElBQWYsQ0FBWixDQUFyQztBQUNILE9BRkQsTUFFTztBQUNIM0IsUUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQmtCLElBQW5CLENBQXdCLFdBQXhCLEVBQXFDZixJQUFyQztBQUNIO0FBQ0osS0F4QkQ7QUEwQkEzQixJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CQyxFQUFuQixDQUFzQixTQUF0QixFQUFpQyxVQUFTL0IsSUFBVCxFQUFjO0FBQzNDQSxNQUFBQSxJQUFJLEdBQUdnQixJQUFJLENBQUNYLG1CQUFMLENBQXlCTCxJQUF6QixDQUFQO0FBRUFNLE1BQUFBLE1BQU0sQ0FBQzRCLFFBQVAsQ0FBZ0JnQixPQUFoQixHQUEwQmxELElBQUksQ0FBQ21ELGFBQS9CO0FBQ0E3QyxNQUFBQSxNQUFNLENBQUM4Qyx1QkFBUCxHQUFpQyxJQUFqQztBQUNILEtBTEQ7QUFPQTlDLElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJDLEVBQW5CLENBQXNCLGNBQXRCLEVBQXNDLFlBQVU7QUFDNUNzQixNQUFBQSxPQUFPLENBQUN0QyxHQUFSLENBQVksY0FBWjtBQUNILEtBRkQ7QUFJQVQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQkMsRUFBbkIsQ0FBc0IsV0FBdEIsRUFBbUMsWUFBVTtBQUN6Q3NCLE1BQUFBLE9BQU8sQ0FBQ3RDLEdBQVIsQ0FBWSxtQkFBWjtBQUNILEtBRkQ7QUFJQVQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQkMsRUFBbkIsQ0FBc0IsV0FBdEIsRUFBbUMsVUFBUy9CLElBQVQsRUFBYztBQUM3Q0EsTUFBQUEsSUFBSSxHQUFHZ0IsSUFBSSxDQUFDWCxtQkFBTCxDQUF5QkwsSUFBekIsQ0FBUDtBQUNBTSxNQUFBQSxNQUFNLENBQUNnRCxTQUFQLEdBQW1CdEQsSUFBSSxDQUFDc0QsU0FBeEI7QUFDQWhELE1BQUFBLE1BQU0sQ0FBQzRCLFFBQVAsQ0FBZ0JnQixPQUFoQixHQUEwQmxELElBQUksQ0FBQ2tELE9BQS9CO0FBQ0E1QyxNQUFBQSxNQUFNLENBQUNpRCxVQUFQLEdBQW9CdkQsSUFBSSxDQUFDd0QsWUFBekI7QUFDQWxELE1BQUFBLE1BQU0sQ0FBQ21ELFlBQVAsR0FBcUJ6RCxJQUFJLENBQUN5RCxZQUExQjtBQUNBbkQsTUFBQUEsTUFBTSxDQUFDb0QsUUFBUCxHQUFrQjFELElBQUksQ0FBQzBELFFBQXZCO0FBQ0FwRCxNQUFBQSxNQUFNLENBQUNxRCxhQUFQLEdBQXVCLElBQXZCO0FBRUgsS0FURDtBQVlBckQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQkMsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBOEIsVUFBUy9CLElBQVQsRUFBYztBQUN4Q0EsTUFBQUEsSUFBSSxHQUFHZ0IsSUFBSSxDQUFDWCxtQkFBTCxDQUF5QkwsSUFBekIsQ0FBUDtBQUVBTSxNQUFBQSxNQUFNLENBQUNzRCxZQUFQLEdBQXNCNUQsSUFBSSxDQUFDNkQsS0FBM0I7QUFDQXZELE1BQUFBLE1BQU0sQ0FBQ3dELGFBQVAsR0FBdUI5RCxJQUFJLENBQUNtRCxhQUE1QjtBQUNILEtBTEQsR0FPQTdDLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJDLEVBQW5CLENBQXNCLHVCQUF0QixFQUErQyxVQUFTL0IsSUFBVCxFQUFjLENBQzVELENBREQsQ0FQQTtBQVVBTSxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CQyxFQUFuQixDQUFzQixVQUF0QixFQUFrQyxVQUFTL0IsSUFBVCxFQUFjO0FBQzVDQSxNQUFBQSxJQUFJLEdBQUdnQixJQUFJLENBQUNYLG1CQUFMLENBQXlCTCxJQUF6QixDQUFQO0FBRUFNLE1BQUFBLE1BQU0sQ0FBQ3lELFFBQVAsR0FBa0IsSUFBbEI7QUFDQXpELE1BQUFBLE1BQU0sQ0FBQzBELFdBQVAsR0FBcUIsdUNBQXJCO0FBQ0gsS0FMRDtBQU1ILEdBL0tJO0FBaUxMQyxFQUFBQSxtQkFBbUIsRUFBRSwrQkFBVTtBQUMzQjNELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJtQyxtQkFBbkIsQ0FBdUMsU0FBdkM7QUFDQTNELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJtQyxtQkFBbkIsQ0FBdUMsY0FBdkM7QUFDQTNELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJtQyxtQkFBbkIsQ0FBdUMsV0FBdkM7QUFDQTNELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUJtQyxtQkFBbkIsQ0FBdUMsaUJBQXZDO0FBQ0EzRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CbUMsbUJBQW5CLENBQXVDLFVBQXZDO0FBQ0EzRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CbUMsbUJBQW5CLENBQXVDLHVCQUF2QztBQUNBM0QsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQm1DLG1CQUFuQixDQUF1QyxXQUF2QztBQUNILEdBekxJO0FBMkxMO0FBQ0F4QixFQUFBQSxhQTVMSywyQkE0TFc7QUFDWixRQUFJbkQsRUFBRSxDQUFDNkIsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCLGFBQU8sQ0FBUDtBQUNILEtBRkQsTUFFTyxJQUFJLEtBQUt6QixZQUFMLENBQWtCdUUsTUFBbEIsTUFBOEIsSUFBbEMsRUFBd0M7QUFDM0MsYUFBTyxDQUFQO0FBQ0gsS0FGTSxNQUVBO0FBQ0gsYUFBTyxDQUFQO0FBQ0g7QUFDSixHQXBNSTtBQXFNTHhCLEVBQUFBLGNBck1LLDRCQXFNWTtBQUNiLFdBQU9wRCxFQUFFLENBQUM2QixHQUFILENBQU9nRCxXQUFQLEdBQXFCLEtBQXJCLEdBQTZCN0UsRUFBRSxDQUFDNkIsR0FBSCxDQUFPaUQsY0FBM0M7QUFDSCxHQXZNSTtBQXdNTHpCLEVBQUFBLFlBeE1LLDBCQXdNVTtBQUNYLFdBQU9yRCxFQUFFLENBQUM2QixHQUFILENBQU9rRCxTQUFkO0FBQ0gsR0ExTUk7QUEyTUx6QixFQUFBQSxTQTNNSyx1QkEyTU87QUFDUixZQUFRdEQsRUFBRSxDQUFDNkIsR0FBSCxDQUFPbUQsRUFBZjtBQUNJLFdBQUssTUFBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLFNBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0osV0FBSyxTQUFMO0FBQ0ksZUFBTyxDQUFQOztBQUNKLFdBQUssT0FBTDtBQUNJLGVBQU8sQ0FBUDs7QUFDSixXQUFLLEtBQUw7QUFDSSxlQUFPLENBQVA7O0FBQ0o7QUFDSSxlQUFPLEVBQVA7QUFaUjtBQWVILEdBM05JO0FBNE5MeEIsRUFBQUEsYUE1TkssMkJBNE5XO0FBQ1osUUFBSSxLQUFLbkQsWUFBTCxDQUFrQjRFLEtBQWxCLE1BQTZCLElBQWpDLEVBQXVDO0FBQ25DLGFBQU8sU0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sS0FBSzVFLFlBQUwsQ0FBa0I0RSxLQUFsQixFQUFQO0FBQ0g7QUFFSixHQW5PSTtBQW9PTHhCLEVBQUFBLFlBcE9LLDBCQW9PVTtBQUNYLFdBQU9uRCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQXhCO0FBQ0gsR0F0T0ksQ0F1T0w7O0FBdk9LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJlY3J5cHRcIjtcclxudmFyIE1vYmlsZURldGVjdCA9IHJlcXVpcmUoJ21vYmlsZS1kZXRlY3QnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICAvL21nMjAyMFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVEZXRlY3QgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8jcmVnaW9uIEVuY3J5cHRpb25cclxuICAgIGRlY29kZShkYXRhKXtcclxuICAgICAgICAvLyBjb252ZXJ0IGZyb20gYmFzZTY0IGFuZCByZXR1cm4gb2JqZWN0IGluIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBlY3J5cHQuZGVjcnlwdChkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5jb2RlKGRhdGEpe1xyXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIG9iamVjdCB0byBiYXNlNjQgc3RyaW5nIGFuZCByZXR1cm4gdGhlIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBlY3J5cHQuZW5jcnlwdChkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKXtcclxuICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5kZWNvZGUoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGFyc2FibGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGlucHV0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlRGF0YUZvcm1hdDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJzYWJsZShkYXRhKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBjb25uZWN0U29ja2V0OiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0gQ29ubmVjdGluZyBTb2NrZXQgLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maXJzdENvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkZXZpY2VfdHlwZSA9IFwiRGVza3RvcFwiO1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgIGRldmljZV90eXBlID0gXCJNb2JpbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgd2luZG93LmlvID0gU29ja2V0SU87XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5pbyA9IFNvY2tldElPIHx8IGlvO1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gSlNCIC0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBiZXQgaW4ga2V0dXBhdFxyXG4gICAgICAgICAgICBpZihkYXRhID09IFwiYmV0XCIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpby5jb25uZWN0KGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvLmNvbm5lY3QoY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gZGVmYXVsdCAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIGJldCBpbiBrZXR1cGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT0gXCJiZXRcIil7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjb25zdGFudC5nZXRTb2NrZXRVUkwoKSA9IFwiK2NvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8oY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgPSBcIitjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYubGlzdGVuRXZlbnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGlzdGVuRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiU29ja2V0IENvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGdsb2JhbC5pc0RlbW8pIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IGdsb2JhbC5zZXR0aW5ncy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWNjZXNzX3Rva2VuXCI6IGdsb2JhbC5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBcImdhbWVfY29kZVwiOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgXCJhcGlfdXJsXCI6IGdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgXCJob3N0X2lkXCI6IGdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IGdsb2JhbC5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZpY2VfdHlwZVwiOiBzZWxmLmdldERldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgICAgIFwiYnJvd3Nlcl90eXBlXCI6IHNlbGYuZ2V0QnJvd3NlclR5cGUoKSxcclxuICAgICAgICAgICAgICAgIFwib3NfdmVyc2lvblwiOiBzZWxmLmdldE9TdmVyc2lvbigpLFxyXG4gICAgICAgICAgICAgICAgXCJvc190eXBlXCI6IHNlbGYuZ2V0T1NUeXBlKCksXHJcbiAgICAgICAgICAgICAgICBcImg1X2FwcFwiOiBnbG9iYWwuaDVfYXBwLFxyXG4gICAgICAgICAgICAgICAgXCJwaG9uZV9tb2RlbFwiOiBzZWxmLmdldFBob25lTW9kZWwoKSxcclxuICAgICAgICAgICAgICAgIFwidXNlcl9hZ2VudFwiOiBzZWxmLmdldFVzZXJBZ2VudCgpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmlzRW5jcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3N1YnNjcmliZScsIHNlbGYuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGJvZHkpKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc3Vic2NyaWJlJywgYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdiYWxhbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSA9IGRhdGEuYWZ0ZXJfYmFsYW5jZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3RpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3QnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVjb25uZWN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2dldFJlc3VsdCcsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICBnbG9iYWwudGlja2V0X2lkID0gZGF0YS50aWNrZXRfaWQ7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuY29uc29TY29yZSA9IGRhdGEuY29uc29sZVNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGVyZmVjdFNjb3JlID1kYXRhLnBlcmZlY3RTY29yZTtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gZGF0YS5wbGF0Zm9ybTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdldERhdGEgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbihcImNoZWF0XCIsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBnbG9iYWwuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcjtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXllckJhbGFuY2UgPSBkYXRhLmFmdGVyX2JhbGFuY2U7XHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2ljay11c2VyLW1haW50ZW5hbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2lja1VzZXInLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbC5pc0tpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5raWNrTWVzc2FnZSA9IFwiWW91IGhhdmUgZXhjZWVkZWQgZGFpbHkgcHJvZml0IGxpbWl0LlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmFsYW5jZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdFwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU3Vic2NyaWJlRG9uZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uUmVzdWx0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyLW1haW50ZW5hbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyNyZWdpb24gR2V0IERldmljZSBJbmZvIEZ1bmN0aW9uc1xyXG4gICAgZ2V0RGV2aWNlVHlwZSgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2JpbGVEZXRlY3QudGFibGV0KCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0QnJvd3NlclR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5icm93c2VyVHlwZSArIFwiIDogXCIgKyBjYy5zeXMuYnJvd3NlclZlcnNpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0T1N2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3NWZXJzaW9uO1xyXG4gICAgfSxcclxuICAgIGdldE9TVHlwZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKGNjLnN5cy5vcykge1xyXG4gICAgICAgICAgICBjYXNlIFwiT1MgWFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBbmRyb2lkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgY2FzZSBcIldpbmRvd3NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiTGludXhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiaU9TXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGdldFBob25lTW9kZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlRGV0ZWN0LnBob25lKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEZXNrdG9wXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9iaWxlRGV0ZWN0LnBob25lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBnZXRVc2VyQWdlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgfSxcclxuICAgIC8vI2VuZHJlZ2lvblxyXG59KTtcclxuIl19