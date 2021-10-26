
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
      data = self.socketReceiveAction(data); // global.isKicked = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiTW9iaWxlRGV0ZWN0IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibW9iaWxlRGV0ZWN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGVjb2RlIiwiZGF0YSIsImVjcnlwdCIsImRlY3J5cHQiLCJlbmNvZGUiLCJlbmNyeXB0Iiwic29ja2V0UmVjZWl2ZUFjdGlvbiIsImdsb2JhbCIsImlzRW5jcnlwdCIsIkpTT04iLCJwYXJzZSIsImlzUGFyc2FibGUiLCJpbnB1dCIsImUiLCJwYXJzZURhdGFGb3JtYXQiLCJjb25uZWN0U29ja2V0IiwibG9nIiwic2VsZiIsImZpcnN0Q29ubmVjdCIsImRldmljZV90eXBlIiwic3lzIiwiaXNNb2JpbGUiLCJpc05hdGl2ZSIsImlvIiwiU29ja2V0SU8iLCJ0ZW1wU29ja2V0IiwiY29ubmVjdCIsImNvbnN0YW50IiwiZ2V0U29ja2V0VVJMIiwic2V0U29ja2V0IiwibGlzdGVuRXZlbnQiLCJnZXRTb2NrZXQiLCJvbiIsImlzRGVtbyIsImJvZHkiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwiYWNjZXNzX3Rva2VuIiwiZ2FtZV9jb2RlIiwiYXBpX3VybCIsImhvc3RfaWQiLCJ1c2VyX2lkIiwiZ2V0RGV2aWNlVHlwZSIsImdldEJyb3dzZXJUeXBlIiwiZ2V0T1N2ZXJzaW9uIiwiZ2V0T1NUeXBlIiwiaDVfYXBwIiwiZ2V0UGhvbmVNb2RlbCIsImdldFVzZXJBZ2VudCIsImVtaXQiLCJzdHJpbmdpZnkiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJraWNrTWVzc2FnZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YWJsZXQiLCJicm93c2VyVHlwZSIsImJyb3dzZXJWZXJzaW9uIiwib3NWZXJzaW9uIiwib3MiLCJwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUSxHQUhQO0FBZ0JMO0FBQ0E7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLFlBQUwsR0FBb0IsSUFBSVAsWUFBSixDQUFpQlEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxTQUFsQyxDQUFwQjtBQUNILEdBcEJJO0FBc0JMO0FBQ0FDLEVBQUFBLE1BdkJLLGtCQXVCRUMsSUF2QkYsRUF1Qk87QUFDUjtBQUNBLFdBQU9DLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixJQUFmLENBQVA7QUFDSCxHQTFCSTtBQTRCTEcsRUFBQUEsTUE1Qkssa0JBNEJFSCxJQTVCRixFQTRCTztBQUNSO0FBQ0EsV0FBT0MsTUFBTSxDQUFDRyxPQUFQLENBQWVKLElBQWYsQ0FBUDtBQUNILEdBL0JJO0FBaUNMSyxFQUFBQSxtQkFqQ0ssK0JBaUNlTCxJQWpDZixFQWlDb0I7QUFDckIsUUFBR00sTUFBTSxDQUFDQyxTQUFWLEVBQW9CO0FBQ2hCLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtWLE1BQUwsQ0FBWUMsSUFBWixDQUFYLENBQVA7QUFDSCxLQUZELE1BR0k7QUFDQSxhQUFPQSxJQUFQO0FBQ0g7QUFDSixHQXhDSTtBQTBDTFUsRUFBQUEsVUFBVSxF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LEdBbk9JO0FBb09MdkIsRUFBQUEsWUFwT0ssMEJBb09VO0FBQ1gsV0FBT25ELE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsU0FBeEI7QUFDSCxHQXRPSSxDQXVPTDs7QUF2T0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50IGZyb20gXCJDb25zdGFudFwiO1xyXG5pbXBvcnQgKiBhcyBlY3J5cHQgZnJvbSBcImVjcnlwdFwiO1xyXG52YXIgTW9iaWxlRGV0ZWN0ID0gcmVxdWlyZSgnbW9iaWxlLWRldGVjdCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIC8vbWcyMDIwXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vYmlsZURldGVjdCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyNyZWdpb24gRW5jcnlwdGlvblxyXG4gICAgZGVjb2RlKGRhdGEpe1xyXG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBiYXNlNjQgYW5kIHJldHVybiBvYmplY3QgaW4gc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGVjcnlwdC5kZWNyeXB0KGRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmNvZGUoZGF0YSl7XHJcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmcgb2JqZWN0IHRvIGJhc2U2NCBzdHJpbmcgYW5kIHJldHVybiB0aGUgc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGVjcnlwdC5lbmNyeXB0KGRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmRlY29kZShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXNQYXJzYWJsZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgcGFyc2VEYXRhRm9ybWF0OiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBpZiAodGhpcy5pc1BhcnNhYmxlKGRhdGEpID09IHRydWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIGNvbm5lY3RTb2NrZXQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLSBDb25uZWN0aW5nIFNvY2tldCAtLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmZpcnN0Q29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGRldmljZV90eXBlID0gXCJEZXNrdG9wXCI7XHJcbiAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlKXtcclxuICAgICAgICAgICAgZGV2aWNlX3R5cGUgPSBcIk1vYmlsZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaW8gPSBTb2NrZXRJTztcclxuICAgICAgICAgICAgLy8gd2luZG93LmlvID0gU29ja2V0SU8gfHwgaW87XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLSBKU0IgLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIGJldCBpbiBrZXR1cGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT0gXCJiZXRcIil7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvLmNvbm5lY3QoY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8uY29ubmVjdChjb25zdGFudC5nZXRTb2NrZXRVUkwoKSApO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLSBkZWZhdWx0IC0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgLy8gd2luZG93LmlvID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgYmV0IGluIGtldHVwYXRcclxuICAgICAgICAgICAgaWYoZGF0YSA9PSBcImJldFwiKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNvbnN0YW50LmdldFNvY2tldFVSTCgpID0gXCIrY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpbyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjb25zdGFudC5nZXRTb2NrZXRVUkwoKSA9IFwiK2NvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8oY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5saXN0ZW5FdmVudCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBsaXN0ZW5FdmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJTb2NrZXQgQ29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYoZ2xvYmFsLmlzRGVtbykgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogZ2xvYmFsLnNldHRpbmdzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJhY2Nlc3NfdG9rZW5cIjogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9jb2RlXCI6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBcImFwaV91cmxcIjogZ2xvYmFsLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICBcImhvc3RfaWRcIjogZ2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICBcImRldmljZV90eXBlXCI6IHNlbGYuZ2V0RGV2aWNlVHlwZSgpLFxyXG4gICAgICAgICAgICAgICAgXCJicm93c2VyX3R5cGVcIjogc2VsZi5nZXRCcm93c2VyVHlwZSgpLFxyXG4gICAgICAgICAgICAgICAgXCJvc192ZXJzaW9uXCI6IHNlbGYuZ2V0T1N2ZXJzaW9uKCksXHJcbiAgICAgICAgICAgICAgICBcIm9zX3R5cGVcIjogc2VsZi5nZXRPU1R5cGUoKSxcclxuICAgICAgICAgICAgICAgIFwiaDVfYXBwXCI6IGdsb2JhbC5oNV9hcHAsXHJcbiAgICAgICAgICAgICAgICBcInBob25lX21vZGVsXCI6IHNlbGYuZ2V0UGhvbmVNb2RlbCgpLFxyXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2FnZW50XCI6IHNlbGYuZ2V0VXNlckFnZW50KCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWwuaXNFbmNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc3Vic2NyaWJlJywgc2VsZi5lbmNvZGUoSlNPTi5zdHJpbmdpZnkoYm9keSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzdWJzY3JpYmUnLCBib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2JhbGFuY2UnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5hZnRlcl9iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdGluZycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyByZWNvbm5lY3RcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignZ2V0UmVzdWx0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGdsb2JhbC50aWNrZXRfaWQgPSBkYXRhLnRpY2tldF9pZDtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgPSBkYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gZGF0YS5jb25zb2xlU2NvcmU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPWRhdGEucGVyZmVjdFNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGxhdGZvcm0gPSBkYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2V0RGF0YSA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKFwiY2hlYXRcIixmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdsb2JhbC5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yO1xyXG4gICAgICAgICAgICBnbG9iYWwucGxheWVyQmFsYW5jZSA9IGRhdGEuYWZ0ZXJfYmFsYW5jZTtcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdraWNrLXVzZXItbWFpbnRlbmFuY2UnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdraWNrVXNlcicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2xvYmFsLmlzS2lja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmtpY2tNZXNzYWdlID0gXCJZb3UgaGF2ZSBleGNlZWRlZCBkYWlseSBwcm9maXQgbGltaXQuXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVjb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVjb25uZWN0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwib25TdWJzY3JpYmVEb25lXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwib25SZXN1bHRcIik7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJraWNrLXVzZXItbWFpbnRlbmFuY2VcIik7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJraWNrLXVzZXJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vI3JlZ2lvbiBHZXQgRGV2aWNlIEluZm8gRnVuY3Rpb25zXHJcbiAgICBnZXREZXZpY2VUeXBlKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vYmlsZURldGVjdC50YWJsZXQoKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRCcm93c2VyVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gY2Muc3lzLmJyb3dzZXJUeXBlICsgXCIgOiBcIiArIGNjLnN5cy5icm93c2VyVmVyc2lvbjtcclxuICAgIH0sXHJcbiAgICBnZXRPU3ZlcnNpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5vc1ZlcnNpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0T1NUeXBlKCkge1xyXG4gICAgICAgIHN3aXRjaCAoY2Muc3lzLm9zKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJPUyBYXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgY2FzZSBcIkFuZHJvaWRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICBjYXNlIFwiV2luZG93c1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMaW51eFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpT1NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgZ2V0UGhvbmVNb2RlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2JpbGVEZXRlY3QucGhvbmUoKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRlc2t0b3BcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2JpbGVEZXRlY3QucGhvbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGdldFVzZXJBZ2VudCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB9LFxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbn0pO1xyXG4iXX0=