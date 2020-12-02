
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
      // data = self.parseDataFormat(data);
      // var resp = data;
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
      global.ticket_id = data.ticket_id;
      global.settings.balance = data.balance;
      global.consoScore = data.consoleScore;
      global.perfectScore = data.perfectScore;
      global.platform = data.platform;
      global.finishGetData = true;
    });
    global.getSocket().on('kick-user-maintenance', function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJpc1BhcnNhYmxlIiwiaW5wdXQiLCJKU09OIiwicGFyc2UiLCJlIiwicGFyc2VEYXRhRm9ybWF0IiwiZGF0YSIsImNvbm5lY3RTb2NrZXQiLCJsb2ciLCJzZWxmIiwiZmlyc3RDb25uZWN0IiwiZGV2aWNlX3R5cGUiLCJzeXMiLCJpc01vYmlsZSIsImlzTmF0aXZlIiwid2luZG93IiwiaW8iLCJTb2NrZXRJTyIsInRlbXBTb2NrZXQiLCJjb25uZWN0IiwiY29uc3RhbnQiLCJnZXRTb2NrZXRVUkwiLCJnbG9iYWwiLCJzZXRTb2NrZXQiLCJnZXRTb2NrZXQiLCJjb25uZWN0ZWQiLCJvbiIsImVtaXRfb2JqIiwiZW1pdCIsImxpc3RlbkV2ZW50Iiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJyZXNwIiwiZWNyeXB0IiwiZGVjcnlwdCIsImNvbW1vbkVycm9yTWVzc2FnZSIsIlVSTCIsImxhbmciLCJzdGF0dXNfY29kZSIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQTtBQUNBQyxFQUFBQSxN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QUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckMsSUFBZixDQUFYO0FBQ0FtQyxNQUFBQSxJQUFJLEdBQUdoQyxJQUFJLENBQUNKLGVBQUwsQ0FBcUJvQyxJQUFyQixDQUFQOztBQUVBLFVBQUdHLGtCQUFrQixDQUFDQyxHQUFHLENBQUNDLElBQUwsQ0FBbEIsQ0FBNkJMLElBQUksQ0FBQ00sV0FBbEMsS0FBa0QsSUFBckQsRUFBMEQsQ0FDdEQ7QUFDSDs7QUFFRCxVQUFHTixJQUFJLENBQUNNLFdBQUwsSUFBb0IsTUFBdkIsRUFBOEI7QUFDMUJ6QixRQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUJ3QixVQUFuQjtBQUNIO0FBQ0osS0FmRDtBQWdCSCxHQXZLSTtBQXlLTEMsRUFBQUEsbUJBQW1CLEVBQUUsK0JBQVU7QUFDM0IzQixJQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUJ5QixtQkFBbkIsQ0FBdUMsU0FBdkM7QUFDQTNCLElBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQnlCLG1CQUFuQixDQUF1QyxjQUF2QztBQUNBM0IsSUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CeUIsbUJBQW5CLENBQXVDLFdBQXZDO0FBQ0EzQixJQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUJ5QixtQkFBbkIsQ0FBdUMsaUJBQXZDO0FBQ0EzQixJQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUJ5QixtQkFBbkIsQ0FBdUMsVUFBdkM7QUFDQTNCLElBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQnlCLG1CQUFuQixDQUF1Qyx1QkFBdkM7QUFDQTNCLElBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQnlCLG1CQUFuQixDQUF1QyxXQUF2QztBQUNIO0FBakxJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgLy9tZzIwMjBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmKFVSTC5sYW5nICE9IG51bGwpe1xyXG4gICAgICAgIC8vICAgICBpZihVUkwubGFuZyA9PSBcImVuXCIgfHwgVVJMLmxhbmcgPT0gXCJjaFwiIHx8IFVSTC5sYW5nID09IFwidHdcIiApe1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsLnNldExhbmcoVVJMLmxhbmcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbC5zZXRMYW5nKFwiZW5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICBVUkwubGFuZyA9IFwiZW5cIjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBnbG9iYWwuc2V0TGFuZyhcImVuXCIpO1xyXG4gICAgICAgIC8vICAgICBVUkwubGFuZyA9IFwiZW5cIjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGFyc2FibGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGlucHV0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlRGF0YUZvcm1hdDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJzYWJsZShkYXRhKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29ubmVjdFNvY2tldDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tIENvbm5lY3RpbmcgU29ja2V0IC0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZGV2aWNlX3R5cGUgPSBcIkRlc2t0b3BcIjtcclxuICAgICAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xyXG4gICAgICAgICAgICBkZXZpY2VfdHlwZSA9IFwiTW9iaWxlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pbyA9IFNvY2tldElPO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cuaW8gPSBTb2NrZXRJTyB8fCBpbztcclxuICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tIEpTQiAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgYmV0IGluIGtldHVwYXRcclxuICAgICAgICAgICAgaWYoZGF0YSA9PSBcImJldFwiKXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8uY29ubmVjdChjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpby5jb25uZWN0KGNvbnN0YW50LmdldFNvY2tldFVSTCgpICk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tIGRlZmF1bHQgLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAvLyB3aW5kb3cuaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBiZXQgaW4ga2V0dXBhdFxyXG4gICAgICAgICAgICBpZihkYXRhID09IFwiYmV0XCIpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgPSBcIitjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNvbnN0YW50LmdldFNvY2tldFVSTCgpID0gXCIrY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpbyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeFwiKVxyXG4gICAgICAgIGNjLmxvZygnY2hlY2sgMScsIGdsb2JhbC5nZXRTb2NrZXQoKS5jb25uZWN0ZWQpO1xyXG4gICAgICAgIC8vIGlmKCFjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJTb2NrZXQgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICBjYy5sb2coJ2NoZWNrIDInLCBnbG9iYWwuZ2V0U29ja2V0KCkuY29ubmVjdGVkKTtcclxuICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0X29iaiA9IGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfb2JqKSk7XHJcbiAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KFwic3Vic2NyaWJlXCIsZW1pdF9vYmopO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLmxpc3RlbkV2ZW50KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KFwiTWFpbk1lbnVcIikubG9hZF9sYXllci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoXCJNYWluTWVudVwiKS5pbml0aWFsaXplVmFyaWFibGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGlzdGVuRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignYmFsYW5jZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAvLyBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHZhciByZXNwID0gZGF0YTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5hZnRlcl9iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdGluZycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyByZWNvbm5lY3RcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignZ2V0UmVzdWx0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGdsb2JhbC50aWNrZXRfaWQgPSBkYXRhLnRpY2tldF9pZDtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgPSBkYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gZGF0YS5jb25zb2xlU2NvcmU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPWRhdGEucGVyZmVjdFNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGxhdGZvcm0gPSBkYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2V0RGF0YSA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2ljay11c2VyLW1haW50ZW5hbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIC8vIGRhdGEgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChkYXRhKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlc3AgPSBkYXRhO1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gZWNyeXB0LmRlY3J5cHQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJlc3AgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChyZXNwKTtcclxuICAgICAgICAgICAgY2MubG9nKHJlc3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VsZi5nZXRDb21wb25lbnQoXCJ1aUNvbnRyb2xsZXJcIikuc2hvd0Vycm9yTWVzc2FnZShjb21tb25FcnJvck1lc3NhZ2VbVVJMLmxhbmddW3Jlc3Auc3RhdHVzX2NvZGVdLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdraWNrLXVzZXInLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY2MubG9nKFwia2ljay1Vc2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIHJlc3AgPSBkYXRhO1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gZWNyeXB0LmRlY3J5cHQoZGF0YSk7XHJcbiAgICAgICAgICAgIHJlc3AgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChyZXNwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbW1vbkVycm9yTWVzc2FnZVtVUkwubGFuZ11bcmVzcC5zdGF0dXNfY29kZV0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLmdldENvbXBvbmVudChcInVpQ29udHJvbGxlclwiKS5zaG93RXJyb3JNZXNzYWdlKGNvbW1vbkVycm9yTWVzc2FnZVtVUkwubGFuZ11bcmVzcC5zdGF0dXNfY29kZV0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwLnN0YXR1c19jb2RlID09IFwiMTAyOFwiKXtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmFsYW5jZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdFwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU3Vic2NyaWJlRG9uZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uUmVzdWx0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyLW1haW50ZW5hbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbiJdfQ==