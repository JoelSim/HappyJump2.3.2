
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/API.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74d1a+wziRMxaNOftsXDqxA', 'API');
// src/Network/API.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("Encrypt"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    betScene: {
      "default": null,
      type: cc.Node
    },
    errorLayer: {
      "default": null,
      type: cc.Node
    },
    errorLabel: {
      "default": null,
      type: cc.Label
    },
    backHome: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  start: function start() {// this.connectAPI();
  },
  startGuestMode: function startGuestMode() {
    this.errorLayer.active = false;
    global.isDemo = true;
    this.betScene.getComponent("StartScene").updateCreditLabel();
  },
  getSettings: function getSettings() {
    global.host_id = this.getParameterByName('host_id');
    global.access_token = this.getParameterByName('access_token');
    var xhr = new XMLHttpRequest();
    var self = this;

    if (global.host_id == null && global.access_token == null) {
      if (!global.isDemo) {
        self.errorLayer.active = true;
        self.errorLabel.string = " You Are Playing For Fun.";

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
            var response = xhr.responseText;
            var parsed = JSON.parse(response);
            global.settings = parsed.data;
          }
        };
      } else {
        self.scheduleOnce(function () {
          self.betScene.getComponent("StartScene").updateCreditLabel();
        }, 0.2);
      }

      var body = {
        "device_type": "Desktop",
        "game_code": 23,
        "country_code": "MY"
      };
      var json = JSON.stringify(body);
      var apiURL = global.api_url;

      if (global.api_url == undefined) {
        apiURL = "https://bo-stage.slot28.com";

        if (global.isProduction) {
          apiURL = "https://bo.slot28.com";
        }
      }

      var url = apiURL + "/api/user/get-settings-demo"; // let url = "https://bo-stage-apl.velachip.com/api/user/get-settings?host_id=0e83088027d4c42c8e9934388480c996&access_token=demo01&game_code=21";

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept-Language", "en-US");
      xhr.send(json);
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
          var response = xhr.responseText;
          var parsed = JSON.parse(response);
          global.settings = parsed.data; // global.setSettings(parsed.data);
          //global.balance = global.settings.balance;

          if (global.settings == undefined) {
            self.errorLayer.active = true;
            self.errorLabel.string = parsed.error.message;
            global.settings = global.DemoSettings;
            self.backHome.active = true;
          } else {
            global.isPlayerBalanceUpdated = true;
            self.betScene.getComponent("StartScene").updateCreditLabel();
          } // console.log(global.getSettings());

        } else {}
      };

      var body = {
        "host_id": this.getParameterByName('host_id'),
        "access_token": this.getParameterByName('access_token'),
        "device_type": "Desktop",
        "game_code": 23,
        "country_code": "MY"
      };
      var json = JSON.stringify(body);
      var apiURL = global.api_url;

      if (global.api_url == undefined) {
        apiURL = "https://bo-stage.slot28.com";

        if (global.isProduction) {
          apiURL = "https://bo.slot28.com";
        }

        global.api_url = apiURL;
      }

      var _url = apiURL + "/api/user/get-settings?host_id=" + global.host_id + "&access_token=" + global.access_token + "&game_code=23"; // let url = "https://bo.slot28.com/api/user/get-settings?host_id="+global.host_id+"&access_token="+global.access_token+"&game_code=23";
      // let url = "https://bo-stage-apl.velachip.com/api/user/get-settings?host_id=0e83088027d4c42c8e9934388480c996&access_token=demo06&game_code=23";


      xhr.open("POST", _url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept-Language", "en-US");
      xhr.send(json);
    }
  },
  getParameterByName: function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJob3N0X2lkIiwiZ2V0UGFyYW1ldGVyQnlOYW1lIiwiYWNjZXNzX3Rva2VuIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZWxmIiwic3RyaW5nIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwicmVzcG9uc2VUZXh0IiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwic2V0dGluZ3MiLCJkYXRhIiwic2NoZWR1bGVPbmNlIiwiYm9keSIsImpzb24iLCJzdHJpbmdpZnkiLCJhcGlVUkwiLCJhcGlfdXJsIiwidW5kZWZpbmVkIiwiaXNQcm9kdWN0aW9uIiwidXJsIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZXJyb3IiLCJtZXNzYWdlIiwiRGVtb1NldHRpbmdzIiwiaXNQbGF5ZXJCYWxhbmNlVXBkYXRlZCIsIm5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFD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QjtBQUNBdEIsTUFBQUEsR0FBRyxDQUFDd0IsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0F4QixNQUFBQSxHQUFHLENBQUN3QixnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQXhCLE1BQUFBLEdBQUcsQ0FBQ3lCLElBQUosQ0FBU1QsSUFBVDtBQUNBO0FBRUQsR0E5Sk87QUErSlJsQixFQUFBQSxrQkEvSlEsOEJBK0pXZ0MsSUEvSlgsRUErSmlCUixHQS9KakIsRUErSnNCO0FBQzdCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVQSxHQUFHLEdBQUdTLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBdEI7QUFDVkgsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFNBQVNOLElBQVQsR0FBZ0IsbUJBQTNCLENBQVo7QUFBQSxRQUNDTyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXaEIsR0FBWCxDQURYO0FBRUEsUUFBSSxDQUFDZSxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsUUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCLE9BQU8sRUFBUDtBQUVoQixXQUFPRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBekI7QUFDRCxHQXhLTyxDQXlLTDtBQUNBO0FBRUE7O0FBNUtLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcblx0XHQvLyAuLi5cclxuXHRcdFxyXG5cdFx0YmV0U2NlbmU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXJyb3JMYXllcjp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZXJyb3JMYWJlbDp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5MYWJlbCxcclxuXHRcdH0sXHJcblxyXG5cdFx0YmFja0hvbWU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcdFxyXG5cdFx0fSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3RBUEkoKTtcclxuICAgIH0sXHJcblx0c3RhcnRHdWVzdE1vZGUoKSB7XHJcblx0XHR0aGlzLmVycm9yTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG5cdFx0Z2xvYmFsLmlzRGVtbyA9IHRydWU7XHJcblx0XHR0aGlzLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHR9LFxyXG4gICAgZ2V0U2V0dGluZ3MoKXtcclxuXHRcdGdsb2JhbC5ob3N0X2lkID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2hvc3RfaWQnKTtcclxuXHRcdGdsb2JhbC5hY2Nlc3NfdG9rZW4gPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyk7XHJcblx0XHRsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0aWYoZ2xvYmFsLmhvc3RfaWQ9PW51bGwgJiYgZ2xvYmFsLmFjY2Vzc190b2tlbj09bnVsbCl7XHJcblx0XHRcdGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuXHRcdFx0XHRzZWxmLmVycm9yTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRzZWxmLmVycm9yTGFiZWwuc3RyaW5nPVwiIFlvdSBBcmUgUGxheWluZyBGb3IgRnVuLlwiO1xyXG5cdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJih4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0XHR2YXIgcGFyc2VkID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLnNldHRpbmdzID0gcGFyc2VkLmRhdGE7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0c2VsZi5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHNlbGYuYmV0U2NlbmUuZ2V0Q29tcG9uZW50KFwiU3RhcnRTY2VuZVwiKS51cGRhdGVDcmVkaXRMYWJlbCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSwwLjIpO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHJcblx0XHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRcdFwiZGV2aWNlX3R5cGVcIjogXCJEZXNrdG9wXCIsXHJcblx0XHRcdFx0XCJnYW1lX2NvZGVcIjogMjMsXHJcblx0XHRcdFx0XCJjb3VudHJ5X2NvZGVcIjogXCJNWVwiXHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHJcblx0XHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcblx0XHRcdHZhciBhcGlVUkw9IGdsb2JhbC5hcGlfdXJsO1xyXG5cdFx0XHRpZiAoZ2xvYmFsLmFwaV91cmwgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0YXBpVVJMID0gXCJodHRwczovL2JvLXN0YWdlLnNsb3QyOC5jb21cIjtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLmlzUHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0YXBpVVJMID0gXCJodHRwczovL2JvLnNsb3QyOC5jb21cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHVybCA9IGFwaVVSTCtcIi9hcGkvdXNlci9nZXQtc2V0dGluZ3MtZGVtb1wiO1xyXG5cdFx0XHJcblx0XHRcdC8vIGxldCB1cmwgPSBcImh0dHBzOi8vYm8tc3RhZ2UtYXBsLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD0wZTgzMDg4MDI3ZDRjNDJjOGU5OTM0Mzg4NDgwYzk5NiZhY2Nlc3NfdG9rZW49ZGVtbzAxJmdhbWVfY29kZT0yMVwiO1xyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBcImVuLVVTXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChqc29uKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbHNle1xyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0dmFyIHBhcnNlZCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFxyXG5cdFx0XHRcdFx0Z2xvYmFsLnNldHRpbmdzID0gcGFyc2VkLmRhdGE7XHJcblx0XHRcdFx0XHQvLyBnbG9iYWwuc2V0U2V0dGluZ3MocGFyc2VkLmRhdGEpO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2dsb2JhbC5iYWxhbmNlID0gZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2U7XHJcblx0XHJcblx0XHRcdFx0XHRpZihnbG9iYWwuc2V0dGluZ3M9PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmVycm9yTGFiZWwuc3RyaW5nID0gcGFyc2VkLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncz1nbG9iYWwuRGVtb1NldHRpbmdzO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJhY2tIb21lLmFjdGl2ZT10cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmlzUGxheWVyQmFsYW5jZVVwZGF0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdsb2JhbC5nZXRTZXR0aW5ncygpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHJcblx0XHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRcdFwiaG9zdF9pZFwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpLCBcclxuXHRcdFx0XHRcImFjY2Vzc190b2tlblwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyksXHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMID0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnbG9iYWwuYXBpX3VybD1hcGlVUkw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwgKyBcIi9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD1cIitnbG9iYWwuaG9zdF9pZCtcIiZhY2Nlc3NfdG9rZW49XCIrZ2xvYmFsLmFjY2Vzc190b2tlbitcIiZnYW1lX2NvZGU9MjNcIjtcclxuXHRcdFx0Ly8gbGV0IHVybCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPVwiK2dsb2JhbC5ob3N0X2lkK1wiJmFjY2Vzc190b2tlbj1cIitnbG9iYWwuYWNjZXNzX3Rva2VuK1wiJmdhbWVfY29kZT0yM1wiO1xyXG5cdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wNiZnYW1lX2NvZGU9MjNcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG5cdGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcclxuXHRcdGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG5cdFx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG5cdFx0aWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG5cdH0sXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19