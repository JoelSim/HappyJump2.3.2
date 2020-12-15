
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("Encrypt"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  onLoad: function onLoad() {// if(URL.lang != null){
    //     if(URL.lang == "en" || URL.lang == "ch" || URL.lang == "tw" ){
    //         global.setLang(URL.lang);
    //     }else{
    //         global.setLang("en");
    //         URL.lang = "en";
    //     }
    // }else{
    //     global.setLang("en");
    //     URL.lang = "en";
    // }
  },
  //#region Encryption
  decode: function decode(data) {
    // convert from base64 and return object in string
    return atob(data);
  },
  encode: function encode(data) {
    // convert string object to base64 string and return the string
    return btoa(data);
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

    cc.log("XXXXXXXXXXXXXXXXXXXXXXx");
    cc.log('check 1', global.getSocket().connected); // if(!cc.sys.isNative){

    global.getSocket().on('connect', function () {
      cc.log("Socket Connected");
      cc.log('check 2', global.getSocket().connected);
      var emit_obj = {}; // emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));

      global.getSocket().emit("subscribe", emit_obj);
    });
    self.listenEvent(); // }
    // this.getComponent("MainMenu").load_layer.active = false;
    // this.getComponent("MainMenu").initializeVariable();
  },
  listenEvent: function listenEvent() {
    var self = this;
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
    }), global.getSocket().on('kick-user-maintenance', function (data) {
      // data = self.parseDataFormat(data);
      // var resp = data;
      data = self.parseDataFormat(data);
      var resp = ecrypt.decrypt(data);
      resp = self.parseDataFormat(resp);
      cc.log(resp); // self.getComponent("uiController").showErrorMessage(commonErrorMessage[URL.lang][resp.status_code], true);
    });
    global.getSocket().on('kick-user', function (data) {
      cc.log("kick-User"); // var resp = data;

      data = self.parseDataFormat(data);
      var resp = ecrypt.decrypt(data);
      resp = self.parseDataFormat(resp);

      if (commonErrorMessage[URL.lang][resp.status_code] != null) {// self.getComponent("uiController").showErrorMessage(commonErrorMessage[URL.lang][resp.status_code], true);
      }

      if (resp.status_code == "1028") {
        global.getSocket().disconnect();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkZWNvZGUiLCJkYXRhIiwiYXRvYiIsImVuY29kZSIsImJ0b2EiLCJzb2NrZXRSZWNlaXZlQWN0aW9uIiwiZ2xvYmFsIiwiaXNFbmNyeXB0IiwiSlNPTiIsInBhcnNlIiwiaXNQYXJzYWJsZSIsImlucHV0IiwiZSIsInBhcnNlRGF0YUZvcm1hdCIsImNvbm5lY3RTb2NrZXQiLCJsb2ciLCJzZWxmIiwiZmlyc3RDb25uZWN0IiwiZGV2aWNlX3R5cGUiLCJzeXMiLCJpc01vYmlsZSIsImlzTmF0aXZlIiwid2luZG93IiwiaW8iLCJTb2NrZXRJTyIsInRlbXBTb2NrZXQiLCJjb25uZWN0IiwiY29uc3RhbnQiLCJnZXRTb2NrZXRVUkwiLCJzZXRTb2NrZXQiLCJnZXRTb2NrZXQiLCJjb25uZWN0ZWQiLCJvbiIsImVtaXRfb2JqIiwiZW1pdCIsImxpc3RlbkV2ZW50Iiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJyZXNwIiwiZWNyeXB0IiwiZGVjcnlwdCIsImNvbW1vbkVycm9yTWVzc2FnZSIsIlVSTCIsImxhbmciLCJzdGF0dXNfY29kZSIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtB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QUFQLENBQWVuRCxJQUFmLENBQVg7QUFDQWlELE1BQUFBLElBQUksR0FBR2xDLElBQUksQ0FBQ0gsZUFBTCxDQUFxQnFDLElBQXJCLENBQVA7O0FBRUEsVUFBR0csa0JBQWtCLENBQUNDLEdBQUcsQ0FBQ0MsSUFBTCxDQUFsQixDQUE2QkwsSUFBSSxDQUFDTSxXQUFsQyxLQUFrRCxJQUFyRCxFQUEwRCxDQUN0RDtBQUNIOztBQUVELFVBQUdOLElBQUksQ0FBQ00sV0FBTCxJQUFvQixNQUF2QixFQUE4QjtBQUMxQmxELFFBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIyQixVQUFuQjtBQUNIO0FBQ0osS0FmRDtBQWdCSCxHQWxNSTtBQW9NTEMsRUFBQUEsbUJBQW1CLEVBQUUsK0JBQVU7QUFDM0JwRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CNEIsbUJBQW5CLENBQXVDLFNBQXZDO0FBQ0FwRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CNEIsbUJBQW5CLENBQXVDLGNBQXZDO0FBQ0FwRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CNEIsbUJBQW5CLENBQXVDLFdBQXZDO0FBQ0FwRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CNEIsbUJBQW5CLENBQXVDLGlCQUF2QztBQUNBcEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjRCLG1CQUFuQixDQUF1QyxVQUF2QztBQUNBcEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjRCLG1CQUFuQixDQUF1Qyx1QkFBdkM7QUFDQXBELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUI0QixtQkFBbkIsQ0FBdUMsV0FBdkM7QUFDSDtBQTVNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuaW1wb3J0ICogYXMgY29uc3RhbnQgZnJvbSBcIkNvbnN0YW50XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdCBmcm9tIFwiRW5jcnlwdFwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIC8vbWcyMDIwXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBpZihVUkwubGFuZyAhPSBudWxsKXtcclxuICAgICAgICAvLyAgICAgaWYoVVJMLmxhbmcgPT0gXCJlblwiIHx8IFVSTC5sYW5nID09IFwiY2hcIiB8fCBVUkwubGFuZyA9PSBcInR3XCIgKXtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbC5zZXRMYW5nKFVSTC5sYW5nKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWwuc2V0TGFuZyhcImVuXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgVVJMLmxhbmcgPSBcImVuXCI7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgZ2xvYmFsLnNldExhbmcoXCJlblwiKTtcclxuICAgICAgICAvLyAgICAgVVJMLmxhbmcgPSBcImVuXCI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyNyZWdpb24gRW5jcnlwdGlvblxyXG4gICAgZGVjb2RlKGRhdGEpe1xyXG4gICAgICAgIC8vIGNvbnZlcnQgZnJvbSBiYXNlNjQgYW5kIHJldHVybiBvYmplY3QgaW4gc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGF0b2IoZGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGVuY29kZShkYXRhKXtcclxuICAgICAgICAvLyBjb252ZXJ0IHN0cmluZyBvYmplY3QgdG8gYmFzZTY0IHN0cmluZyBhbmQgcmV0dXJuIHRoZSBzdHJpbmdcclxuICAgICAgICByZXR1cm4gYnRvYShkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKXtcclxuICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5kZWNvZGUoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGFyc2FibGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGlucHV0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlRGF0YUZvcm1hdDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJzYWJsZShkYXRhKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBjb25uZWN0U29ja2V0OiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0gQ29ubmVjdGluZyBTb2NrZXQgLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maXJzdENvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkZXZpY2VfdHlwZSA9IFwiRGVza3RvcFwiO1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgIGRldmljZV90eXBlID0gXCJNb2JpbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgd2luZG93LmlvID0gU29ja2V0SU87XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5pbyA9IFNvY2tldElPIHx8IGlvO1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gSlNCIC0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBiZXQgaW4ga2V0dXBhdFxyXG4gICAgICAgICAgICBpZihkYXRhID09IFwiYmV0XCIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpby5jb25uZWN0KGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvLmNvbm5lY3QoY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gZGVmYXVsdCAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIGJldCBpbiBrZXR1cGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT0gXCJiZXRcIil7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjb25zdGFudC5nZXRTb2NrZXRVUkwoKSA9IFwiK2NvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8oY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgPSBcIitjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFh4XCIpXHJcbiAgICAgICAgY2MubG9nKCdjaGVjayAxJywgZ2xvYmFsLmdldFNvY2tldCgpLmNvbm5lY3RlZCk7XHJcbiAgICAgICAgLy8gaWYoIWNjLnN5cy5pc05hdGl2ZSl7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdjb25uZWN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlNvY2tldCBDb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGNjLmxvZygnY2hlY2sgMicsIGdsb2JhbC5nZXRTb2NrZXQoKS5jb25uZWN0ZWQpO1xyXG4gICAgICAgICAgICB2YXIgZW1pdF9vYmogPSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXRfb2JqID0gZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKTtcclxuICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoXCJzdWJzY3JpYmVcIixlbWl0X29iaik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYubGlzdGVuRXZlbnQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoXCJNYWluTWVudVwiKS5sb2FkX2xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChcIk1haW5NZW51XCIpLmluaXRpYWxpemVWYXJpYWJsZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBsaXN0ZW5FdmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdiYWxhbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSA9IGRhdGEuYWZ0ZXJfYmFsYW5jZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3RpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3QnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVjb25uZWN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2dldFJlc3VsdCcsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICBnbG9iYWwudGlja2V0X2lkID0gZGF0YS50aWNrZXRfaWQ7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuY29uc29TY29yZSA9IGRhdGEuY29uc29sZVNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGVyZmVjdFNjb3JlID1kYXRhLnBlcmZlY3RTY29yZTtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gZGF0YS5wbGF0Zm9ybTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdldERhdGEgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbihcImNoZWF0XCIsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBnbG9iYWwuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcjtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXllckJhbGFuY2UgPSBkYXRhLmFmdGVyX2JhbGFuY2U7XHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2ljay11c2VyLW1haW50ZW5hbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIC8vIGRhdGEgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChkYXRhKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlc3AgPSBkYXRhO1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gZWNyeXB0LmRlY3J5cHQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJlc3AgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChyZXNwKTtcclxuICAgICAgICAgICAgY2MubG9nKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VsZi5nZXRDb21wb25lbnQoXCJ1aUNvbnRyb2xsZXJcIikuc2hvd0Vycm9yTWVzc2FnZShjb21tb25FcnJvck1lc3NhZ2VbVVJMLmxhbmddW3Jlc3Auc3RhdHVzX2NvZGVdLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdraWNrLXVzZXInLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY2MubG9nKFwia2ljay1Vc2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIHJlc3AgPSBkYXRhO1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gZWNyeXB0LmRlY3J5cHQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJlc3AgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChyZXNwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbW1vbkVycm9yTWVzc2FnZVtVUkwubGFuZ11bcmVzcC5zdGF0dXNfY29kZV0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLmdldENvbXBvbmVudChcInVpQ29udHJvbGxlclwiKS5zaG93RXJyb3JNZXNzYWdlKGNvbW1vbkVycm9yTWVzc2FnZVtVUkwubGFuZ11bcmVzcC5zdGF0dXNfY29kZV0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwLnN0YXR1c19jb2RlID09IFwiMTAyOFwiKXtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmFsYW5jZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdFwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU3Vic2NyaWJlRG9uZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uUmVzdWx0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyLW1haW50ZW5hbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbiJdfQ==