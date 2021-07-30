
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
      data = self.socketReceiveAction(data);
      global.isKicked = true;
      global.kickMessage = data.message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkZWNvZGUiLCJkYXRhIiwiYXRvYiIsImVuY29kZSIsImJ0b2EiLCJzb2NrZXRSZWNlaXZlQWN0aW9uIiwiZ2xvYmFsIiwiaXNFbmNyeXB0IiwiSlNPTiIsInBhcnNlIiwiaXNQYXJzYWJsZSIsImlucHV0IiwiZSIsInBhcnNlRGF0YUZvcm1hdCIsImNvbm5lY3RTb2NrZXQiLCJsb2ciLCJzZWxmIiwiZmlyc3RDb25uZWN0IiwiZGV2aWNlX3R5cGUiLCJzeXMiLCJpc01vYmlsZSIsImlzTmF0aXZlIiwid2luZG93IiwiaW8iLCJTb2NrZXRJTyIsInRlbXBTb2NrZXQiLCJjb25uZWN0IiwiY29uc3RhbnQiLCJnZXRTb2NrZXRVUkwiLCJzZXRTb2NrZXQiLCJnZXRTb2NrZXQiLCJjb25uZWN0ZWQiLCJvbiIsImVtaXRfb2JqIiwiZW1pdCIsImxpc3RlbkV2ZW50Iiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJyZXNwIiwiZWNyeXB0IiwiZGVjcnlwdCIsImlzS2lja2VkIiwia2lja01lc3NhZ2UiLCJtZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7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R0F4TEk7QUEwTExDLEVBQUFBLG1CQUFtQixFQUFFLCtCQUFVO0FBQzNCbEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjBCLG1CQUFuQixDQUF1QyxTQUF2QztBQUNBbEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjBCLG1CQUFuQixDQUF1QyxjQUF2QztBQUNBbEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjBCLG1CQUFuQixDQUF1QyxXQUF2QztBQUNBbEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjBCLG1CQUFuQixDQUF1QyxpQkFBdkM7QUFDQWxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsVUFBdkM7QUFDQWxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsdUJBQXZDO0FBQ0FsRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CMEIsbUJBQW5CLENBQXVDLFdBQXZDO0FBQ0g7QUFsTUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50IGZyb20gXCJDb25zdGFudFwiO1xyXG5pbXBvcnQgKiBhcyBlY3J5cHQgZnJvbSBcIkVuY3J5cHRcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICAvL21nMjAyMFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gaWYoVVJMLmxhbmcgIT0gbnVsbCl7XHJcbiAgICAgICAgLy8gICAgIGlmKFVSTC5sYW5nID09IFwiZW5cIiB8fCBVUkwubGFuZyA9PSBcImNoXCIgfHwgVVJMLmxhbmcgPT0gXCJ0d1wiICl7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWwuc2V0TGFuZyhVUkwubGFuZyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsLnNldExhbmcoXCJlblwiKTtcclxuICAgICAgICAvLyAgICAgICAgIFVSTC5sYW5nID0gXCJlblwiO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIGdsb2JhbC5zZXRMYW5nKFwiZW5cIik7XHJcbiAgICAgICAgLy8gICAgIFVSTC5sYW5nID0gXCJlblwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8jcmVnaW9uIEVuY3J5cHRpb25cclxuICAgIGRlY29kZShkYXRhKXtcclxuICAgICAgICAvLyBjb252ZXJ0IGZyb20gYmFzZTY0IGFuZCByZXR1cm4gb2JqZWN0IGluIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBhdG9iKGRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmNvZGUoZGF0YSl7XHJcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmcgb2JqZWN0IHRvIGJhc2U2NCBzdHJpbmcgYW5kIHJldHVybiB0aGUgc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGJ0b2EoZGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYoZ2xvYmFsLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZGVjb2RlKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1BhcnNhYmxlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXJzZURhdGFGb3JtYXQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGFyc2FibGUoZGF0YSkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgY29ubmVjdFNvY2tldDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tIENvbm5lY3RpbmcgU29ja2V0IC0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZGV2aWNlX3R5cGUgPSBcIkRlc2t0b3BcIjtcclxuICAgICAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xyXG4gICAgICAgICAgICBkZXZpY2VfdHlwZSA9IFwiTW9iaWxlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pbyA9IFNvY2tldElPO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cuaW8gPSBTb2NrZXRJTyB8fCBpbztcclxuICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tIEpTQiAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgYmV0IGluIGtldHVwYXRcclxuICAgICAgICAgICAgaWYoZGF0YSA9PSBcImJldFwiKXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8uY29ubmVjdChjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpby5jb25uZWN0KGNvbnN0YW50LmdldFNvY2tldFVSTCgpICk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tIGRlZmF1bHQgLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAvLyB3aW5kb3cuaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBiZXQgaW4ga2V0dXBhdFxyXG4gICAgICAgICAgICBpZihkYXRhID09IFwiYmV0XCIpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgPSBcIitjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNvbnN0YW50LmdldFNvY2tldFVSTCgpID0gXCIrY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpbyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeFwiKVxyXG4gICAgICAgIGNjLmxvZygnY2hlY2sgMScsIGdsb2JhbC5nZXRTb2NrZXQoKS5jb25uZWN0ZWQpO1xyXG4gICAgICAgIC8vIGlmKCFjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJTb2NrZXQgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICBjYy5sb2coJ2NoZWNrIDInLCBnbG9iYWwuZ2V0U29ja2V0KCkuY29ubmVjdGVkKTtcclxuICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0X29iaiA9IGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfb2JqKSk7XHJcbiAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KFwic3Vic2NyaWJlXCIsZW1pdF9vYmopO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLmxpc3RlbkV2ZW50KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KFwiTWFpbk1lbnVcIikubG9hZF9sYXllci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoXCJNYWluTWVudVwiKS5pbml0aWFsaXplVmFyaWFibGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGlzdGVuRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignYmFsYW5jZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgPSBkYXRhLmFmdGVyX2JhbGFuY2U7XHJcbiAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigncmVjb25uZWN0aW5nJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNvbm5lY3RpbmdcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigncmVjb25uZWN0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIHJlY29ubmVjdFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdnZXRSZXN1bHQnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgZ2xvYmFsLnRpY2tldF9pZCA9IGRhdGEudGlja2V0X2lkO1xyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSA9IGRhdGEuYmFsYW5jZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmNvbnNvU2NvcmUgPSBkYXRhLmNvbnNvbGVTY29yZTtcclxuICAgICAgICAgICAgZ2xvYmFsLnBlcmZlY3RTY29yZSA9ZGF0YS5wZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wbGF0Zm9ybSA9IGRhdGEucGxhdGZvcm07XHJcbiAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZXREYXRhID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oXCJjaGVhdFwiLGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZ2xvYmFsLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3I7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wbGF5ZXJCYWxhbmNlID0gZGF0YS5hZnRlcl9iYWxhbmNlO1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2tpY2stdXNlci1tYWludGVuYW5jZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAvLyBkYXRhID0gc2VsZi5wYXJzZURhdGFGb3JtYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHZhciByZXNwID0gZGF0YTtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYucGFyc2VEYXRhRm9ybWF0KGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgcmVzcCA9IGVjcnlwdC5kZWNyeXB0KGRhdGEpO1xyXG4gICAgICAgICAgICByZXNwID0gc2VsZi5wYXJzZURhdGFGb3JtYXQocmVzcCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhyZXNwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbGYuZ2V0Q29tcG9uZW50KFwidWlDb250cm9sbGVyXCIpLnNob3dFcnJvck1lc3NhZ2UoY29tbW9uRXJyb3JNZXNzYWdlW1VSTC5sYW5nXVtyZXNwLnN0YXR1c19jb2RlXSwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2ljay11c2VyJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWwuaXNLaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBnbG9iYWwua2lja01lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVjb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVjb25uZWN0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwib25TdWJzY3JpYmVEb25lXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwib25SZXN1bHRcIik7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJraWNrLXVzZXItbWFpbnRlbmFuY2VcIik7XHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJraWNrLXVzZXJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG59KTtcclxuIl19