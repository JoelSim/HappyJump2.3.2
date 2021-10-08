
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

var ecrypt = _interopRequireWildcard(require("Encrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkZWNvZGUiLCJkYXRhIiwiYXRvYiIsImVuY29kZSIsImJ0b2EiLCJzb2NrZXRSZWNlaXZlQWN0aW9uIiwiZ2xvYmFsIiwiaXNFbmNyeXB0IiwiSlNPTiIsInBhcnNlIiwiaXNQYXJzYWJsZSIsImlucHV0IiwiZSIsInBhcnNlRGF0YUZvcm1hdCIsImNvbm5lY3RTb2NrZXQiLCJsb2ciLCJzZWxmIiwiZmlyc3RDb25uZWN0IiwiZGV2aWNlX3R5cGUiLCJzeXMiLCJpc01vYmlsZSIsImlzTmF0aXZlIiwid2luZG93IiwiaW8iLCJTb2NrZXRJTyIsInRlbXBTb2NrZXQiLCJjb25uZWN0IiwiY29uc3RhbnQiLCJnZXRTb2NrZXRVUkwiLCJzZXRTb2NrZXQiLCJnZXRTb2NrZXQiLCJjb25uZWN0ZWQiLCJvbiIsImVtaXRfb2JqIiwiZW1pdCIsImxpc3RlbkV2ZW50Iiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJyZXNwIiwiZWNyeXB0IiwiZGVjcnlwdCIsImlzS2lja2VkIiwia2lja01lc3NhZ2UiLCJtZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FB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eExJO0FBMExMQyxFQUFBQSxtQkFBbUIsRUFBRSwrQkFBVTtBQUMzQmxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsU0FBdkM7QUFDQWxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsY0FBdkM7QUFDQWxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsV0FBdkM7QUFDQWxELElBQUFBLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUIwQixtQkFBbkIsQ0FBdUMsaUJBQXZDO0FBQ0FsRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CMEIsbUJBQW5CLENBQXVDLFVBQXZDO0FBQ0FsRCxJQUFBQSxNQUFNLENBQUN3QixTQUFQLEdBQW1CMEIsbUJBQW5CLENBQXVDLHVCQUF2QztBQUNBbEQsSUFBQUEsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQjBCLG1CQUFuQixDQUF1QyxXQUF2QztBQUNIO0FBbE1JLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgLy9tZzIwMjBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmKFVSTC5sYW5nICE9IG51bGwpe1xyXG4gICAgICAgIC8vICAgICBpZihVUkwubGFuZyA9PSBcImVuXCIgfHwgVVJMLmxhbmcgPT0gXCJjaFwiIHx8IFVSTC5sYW5nID09IFwidHdcIiApe1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsLnNldExhbmcoVVJMLmxhbmcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbC5zZXRMYW5nKFwiZW5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICBVUkwubGFuZyA9IFwiZW5cIjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBnbG9iYWwuc2V0TGFuZyhcImVuXCIpO1xyXG4gICAgICAgIC8vICAgICBVUkwubGFuZyA9IFwiZW5cIjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vI3JlZ2lvbiBFbmNyeXB0aW9uXHJcbiAgICBkZWNvZGUoZGF0YSl7XHJcbiAgICAgICAgLy8gY29udmVydCBmcm9tIGJhc2U2NCBhbmQgcmV0dXJuIG9iamVjdCBpbiBzdHJpbmdcclxuICAgICAgICByZXR1cm4gYXRvYihkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5jb2RlKGRhdGEpe1xyXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIG9iamVjdCB0byBiYXNlNjQgc3RyaW5nIGFuZCByZXR1cm4gdGhlIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBidG9hKGRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmRlY29kZShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXNQYXJzYWJsZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgcGFyc2VEYXRhRm9ybWF0OiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBpZiAodGhpcy5pc1BhcnNhYmxlKGRhdGEpID09IHRydWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIGNvbm5lY3RTb2NrZXQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLSBDb25uZWN0aW5nIFNvY2tldCAtLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmZpcnN0Q29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGRldmljZV90eXBlID0gXCJEZXNrdG9wXCI7XHJcbiAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlKXtcclxuICAgICAgICAgICAgZGV2aWNlX3R5cGUgPSBcIk1vYmlsZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaW8gPSBTb2NrZXRJTztcclxuICAgICAgICAgICAgLy8gd2luZG93LmlvID0gU29ja2V0SU8gfHwgaW87XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLSBKU0IgLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIGJldCBpbiBrZXR1cGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT0gXCJiZXRcIil7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvLmNvbm5lY3QoY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8uY29ubmVjdChjb25zdGFudC5nZXRTb2NrZXRVUkwoKSApO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLSBkZWZhdWx0IC0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgLy8gd2luZG93LmlvID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgYmV0IGluIGtldHVwYXRcclxuICAgICAgICAgICAgaWYoZGF0YSA9PSBcImJldFwiKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNvbnN0YW50LmdldFNvY2tldFVSTCgpID0gXCIrY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpbyhjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuc2V0U29ja2V0KHRlbXBTb2NrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjb25zdGFudC5nZXRTb2NrZXRVUkwoKSA9IFwiK2NvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8oY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWHhcIilcclxuICAgICAgICBjYy5sb2coJ2NoZWNrIDEnLCBnbG9iYWwuZ2V0U29ja2V0KCkuY29ubmVjdGVkKTtcclxuICAgICAgICAvLyBpZighY2Muc3lzLmlzTmF0aXZlKXtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiU29ja2V0IENvbm5lY3RlZFwiKTtcclxuICAgICAgICAgICAgY2MubG9nKCdjaGVjayAyJywgZ2xvYmFsLmdldFNvY2tldCgpLmNvbm5lY3RlZCk7XHJcbiAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gZW1pdF9vYmogPSBlY3J5cHQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShlbWl0X29iaikpO1xyXG4gICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdChcInN1YnNjcmliZVwiLGVtaXRfb2JqKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5saXN0ZW5FdmVudCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChcIk1haW5NZW51XCIpLmxvYWRfbGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KFwiTWFpbk1lbnVcIikuaW5pdGlhbGl6ZVZhcmlhYmxlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxpc3RlbkV2ZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2JhbGFuY2UnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5hZnRlcl9iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdGluZycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjb25uZWN0aW5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ3JlY29ubmVjdCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyByZWNvbm5lY3RcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbignZ2V0UmVzdWx0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGdsb2JhbC50aWNrZXRfaWQgPSBkYXRhLnRpY2tldF9pZDtcclxuICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgPSBkYXRhLmJhbGFuY2U7XHJcbiAgICAgICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gZGF0YS5jb25zb2xlU2NvcmU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPWRhdGEucGVyZmVjdFNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGxhdGZvcm0gPSBkYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmluaXNoR2V0RGF0YSA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKFwiY2hlYXRcIixmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdsb2JhbC5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yO1xyXG4gICAgICAgICAgICBnbG9iYWwucGxheWVyQmFsYW5jZSA9IGRhdGEuYWZ0ZXJfYmFsYW5jZTtcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdraWNrLXVzZXItbWFpbnRlbmFuY2UnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgLy8gZGF0YSA9IHNlbGYucGFyc2VEYXRhRm9ybWF0KGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcmVzcCA9IGRhdGE7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnBhcnNlRGF0YUZvcm1hdChkYXRhKTtcclxuICAgICAgICAgICAgdmFyIHJlc3AgPSBlY3J5cHQuZGVjcnlwdChkYXRhKTtcclxuICAgICAgICAgICAgcmVzcCA9IHNlbGYucGFyc2VEYXRhRm9ybWF0KHJlc3ApO1xyXG4gICAgICAgICAgICBjYy5sb2cocmVzcCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZWxmLmdldENvbXBvbmVudChcInVpQ29udHJvbGxlclwiKS5zaG93RXJyb3JNZXNzYWdlKGNvbW1vbkVycm9yTWVzc2FnZVtVUkwubGFuZ11bcmVzcC5zdGF0dXNfY29kZV0sIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2tpY2stdXNlcicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsLmlzS2lja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmtpY2tNZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmFsYW5jZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdFwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU3Vic2NyaWJlRG9uZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uUmVzdWx0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyLW1haW50ZW5hbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcbiJdfQ==