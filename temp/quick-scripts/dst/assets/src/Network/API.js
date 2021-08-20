
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

var ecryptContoller = _interopRequireWildcard(require("ecrypt_New"));

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
    if (window.endPointConfig != null) {
      var networkConfig = ecryptContoller.decrypt(window.endPointConfig);

      if (networkConfig != null) {
        var networkConfigJson = JSON.parse(networkConfig); //cc.log(networkConfigJson.geoip_url);
        //cc.log(networkConfigJson.api_url);

        global.geoIP_url = networkConfigJson.geoip_url;
        global.api_url = networkConfigJson.api_url; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
        // cc.log(global.SetApi_Url(networkConfigJson.api_url));
      }
    }

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
            constant.socketURL = global.settings.socket_url;

            if (!global.getSocket()) {
              self.getComponent("Socket").connectSocket();
            }
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
          global.settings = parsed.data;
          constant.socketURL = global.settings.socket_url;

          if (!global.getSocket()) {
            self.getComponent("Socket").connectSocket();
          } //global.balance = global.settings.balance;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsImNvbnN0YW50Iiwic29ja2V0VVJMIiwic29ja2V0X3VybCIsImdldFNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJzY2hlZHVsZU9uY2UiLCJib2R5IiwianNvbiIsInN0cmluZ2lmeSIsImFwaVVSTCIsInVuZGVmaW5lZCIsImlzUHJvZHVjdGlvbiIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVycm9yIiwibWVzc2FnZSIsIkRlbW9TZXR0aW5ncyIsImlzUGxheWVyQmFsYW5jZVVwZGF0ZWQiLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0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QjtBQUNBeEIsTUFBQUEsR0FBRyxDQUFDMEIsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0ExQixNQUFBQSxHQUFHLENBQUMwQixnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQTFCLE1BQUFBLEdBQUcsQ0FBQzJCLElBQUosQ0FBU1IsSUFBVDtBQUNBO0FBRUQsR0FwTE87QUFxTFJyQixFQUFBQSxrQkFyTFEsOEJBcUxXa0MsSUFyTFgsRUFxTGlCUixHQXJMakIsRUFxTHNCO0FBQzdCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVQSxHQUFHLEdBQUd0QyxNQUFNLENBQUMrQyxRQUFQLENBQWdCQyxJQUF0QjtBQUNWRixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBUDtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsU0FBU0wsSUFBVCxHQUFnQixtQkFBM0IsQ0FBWjtBQUFBLFFBQ0NNLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdmLEdBQVgsQ0FEWDtBQUVBLFFBQUksQ0FBQ2MsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLFFBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUQsQ0FBWixFQUFpQixPQUFPLEVBQVA7QUFFaEIsV0FBT0Usa0JBQWtCLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0gsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQXpCO0FBQ0QsR0E5TE8sQ0ErTEw7QUFDQTtBQUVBOztBQWxNSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuaW1wb3J0ICogYXMgY29uc3RhbnQgZnJvbSBcIkNvbnN0YW50XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdCBmcm9tIFwiRW5jcnlwdFwiO1xyXG5pbXBvcnQgKiBhcyBlY3J5cHRDb250b2xsZXIgZnJvbSAnZWNyeXB0X05ldyc7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcblx0XHQvLyAuLi5cclxuXHRcdFxyXG5cdFx0YmV0U2NlbmU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXJyb3JMYXllcjp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZXJyb3JMYWJlbDp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5MYWJlbCxcclxuXHRcdH0sXHJcblxyXG5cdFx0YmFja0hvbWU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcdFxyXG5cdFx0fSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3RBUEkoKTtcclxuICAgIH0sXHJcblx0c3RhcnRHdWVzdE1vZGUoKSB7XHJcblx0XHR0aGlzLmVycm9yTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG5cdFx0Z2xvYmFsLmlzRGVtbyA9IHRydWU7XHJcblx0XHR0aGlzLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHR9LFxyXG4gICAgZ2V0U2V0dGluZ3MoKXtcclxuXHRcdGlmKHdpbmRvdy5lbmRQb2ludENvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWcgPSBlY3J5cHRDb250b2xsZXIuZGVjcnlwdCh3aW5kb3cuZW5kUG9pbnRDb25maWcpO1xyXG4gICAgICAgICAgICBpZihuZXR3b3JrQ29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWdKc29uID0gSlNPTi5wYXJzZShuZXR3b3JrQ29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdlb0lQX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybDtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5hcGlfdXJsID0gbmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEdlb2lwX1VybChuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0QXBpX1VybChuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdFx0Z2xvYmFsLmhvc3RfaWQgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpO1xyXG5cdFx0Z2xvYmFsLmFjY2Vzc190b2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZihnbG9iYWwuaG9zdF9pZD09bnVsbCAmJiBnbG9iYWwuYWNjZXNzX3Rva2VuPT1udWxsKXtcclxuXHRcdFx0aWYoIWdsb2JhbC5pc0RlbW8pe1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmc9XCIgWW91IEFyZSBQbGF5aW5nIEZvciBGdW4uXCI7XHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdFx0Y29uc3RhbnQuc29ja2V0VVJMID0gZ2xvYmFsLnNldHRpbmdzLnNvY2tldF91cmw7XHJcblx0XHRcdFx0XHRcdGlmKCFnbG9iYWwuZ2V0U29ja2V0KCkpe1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuZ2V0Q29tcG9uZW50KFwiU29ja2V0XCIpLmNvbm5lY3RTb2NrZXQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRzZWxmLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0c2VsZi5iZXRTY2VuZS5nZXRDb21wb25lbnQoXCJTdGFydFNjZW5lXCIpLnVwZGF0ZUNyZWRpdExhYmVsKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LDAuMik7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdFx0dmFyIGJvZHkgPSB7XHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHRcdFx0dmFyIGFwaVVSTD0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdXJsID0gYXBpVVJMK1wiL2FwaS91c2VyL2dldC1zZXR0aW5ncy1kZW1vXCI7XHJcblx0XHRcclxuXHRcdFx0Ly8gbGV0IHVybCA9IFwiaHR0cHM6Ly9iby1zdGFnZS1hcGwudmVsYWNoaXAuY29tL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPTBlODMwODgwMjdkNGM0MmM4ZTk5MzQzODg0ODBjOTk2JmFjY2Vzc190b2tlbj1kZW1vMDEmZ2FtZV9jb2RlPTIxXCI7XHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUxhbmd1YWdlXCIsIFwiZW4tVVNcIik7XHJcblx0XHRcdHhoci5zZW5kKGpzb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsc2V7XHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHhoci5yZWFkeVN0YXRlID09IDQgJiYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuXHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHR2YXIgcGFyc2VkID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblx0XHJcblx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnN0YW50LnNvY2tldFVSTCA9IGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsO1xyXG5cdFx0XHRcdFx0aWYoIWdsb2JhbC5nZXRTb2NrZXQoKSl7XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0Q29tcG9uZW50KFwiU29ja2V0XCIpLmNvbm5lY3RTb2NrZXQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9nbG9iYWwuYmFsYW5jZSA9IGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlO1xyXG5cdFxyXG5cdFx0XHRcdFx0aWYoZ2xvYmFsLnNldHRpbmdzPT11bmRlZmluZWQpe1xyXG5cdFx0XHRcdFx0XHRzZWxmLmVycm9yTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0c2VsZi5lcnJvckxhYmVsLnN0cmluZyA9IHBhcnNlZC5lcnJvci5tZXNzYWdlO1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3M9Z2xvYmFsLkRlbW9TZXR0aW5ncztcclxuXHRcdFx0XHRcdFx0c2VsZi5iYWNrSG9tZS5hY3RpdmU9dHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5pc1BsYXllckJhbGFuY2VVcGRhdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0c2VsZi5iZXRTY2VuZS5nZXRDb21wb25lbnQoXCJTdGFydFNjZW5lXCIpLnVwZGF0ZUNyZWRpdExhYmVsKCk7XHJcblx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnbG9iYWwuZ2V0U2V0dGluZ3MoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFxyXG5cdFx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0XHRcImhvc3RfaWRcIjogdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2hvc3RfaWQnKSwgXHJcblx0XHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2FjY2Vzc190b2tlbicpLFxyXG5cdFx0XHRcdFwiZGV2aWNlX3R5cGVcIjogXCJEZXNrdG9wXCIsXHJcblx0XHRcdFx0XCJnYW1lX2NvZGVcIjogMjMsXHJcblx0XHRcdFx0XCJjb3VudHJ5X2NvZGVcIjogXCJNWVwiXHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHRcdFx0dmFyIGFwaVVSTCA9IGdsb2JhbC5hcGlfdXJsO1xyXG5cdFx0XHRpZiAoZ2xvYmFsLmFwaV91cmwgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0YXBpVVJMID0gXCJodHRwczovL2JvLXN0YWdlLnNsb3QyOC5jb21cIjtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLmlzUHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0YXBpVVJMID0gXCJodHRwczovL2JvLnNsb3QyOC5jb21cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Z2xvYmFsLmFwaV91cmw9YXBpVVJMO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgdXJsID0gYXBpVVJMICsgXCIvYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9XCIrZ2xvYmFsLmhvc3RfaWQrXCImYWNjZXNzX3Rva2VuPVwiK2dsb2JhbC5hY2Nlc3NfdG9rZW4rXCImZ2FtZV9jb2RlPTIzXCI7XHJcblx0XHRcdC8vIGxldCB1cmwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbS9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD1cIitnbG9iYWwuaG9zdF9pZCtcIiZhY2Nlc3NfdG9rZW49XCIrZ2xvYmFsLmFjY2Vzc190b2tlbitcIiZnYW1lX2NvZGU9MjNcIjtcclxuXHRcclxuXHRcdFx0Ly8gbGV0IHVybCA9IFwiaHR0cHM6Ly9iby1zdGFnZS1hcGwudmVsYWNoaXAuY29tL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPTBlODMwODgwMjdkNGM0MmM4ZTk5MzQzODg0ODBjOTk2JmFjY2Vzc190b2tlbj1kZW1vMDYmZ2FtZV9jb2RlPTIzXCI7XHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUxhbmd1YWdlXCIsIFwiZW4tVVNcIik7XHJcblx0XHRcdHhoci5zZW5kKGpzb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XHJcblx0XHRpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuXHRcdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuXHRcdGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuXHJcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuXHR9LFxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==