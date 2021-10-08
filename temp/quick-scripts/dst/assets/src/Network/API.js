
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

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("Encrypt"));

var ecryptContoller = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
            constant.setSocketURL(global.settings.socket_url);

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
          constant.setSocketURL(global.settings.socket_url);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsImNvbnN0YW50Iiwic2V0U29ja2V0VVJMIiwic29ja2V0X3VybCIsImdldFNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJzY2hlZHVsZU9uY2UiLCJib2R5IiwianNvbiIsInN0cmluZ2lmeSIsImFwaVVSTCIsInVuZGVmaW5lZCIsImlzUHJvZHVjdGlvbiIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVycm9yIiwibWVzc2FnZSIsIkRlbW9TZXR0aW5ncyIsImlzUGxheWVyQmFsYW5jZVVwZGF0ZWQiLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVz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dEI7QUFDQXhCLE1BQUFBLEdBQUcsQ0FBQzBCLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBMUIsTUFBQUEsR0FBRyxDQUFDMEIsZ0JBQUosQ0FBcUIsaUJBQXJCLEVBQXdDLE9BQXhDO0FBQ0ExQixNQUFBQSxHQUFHLENBQUMyQixJQUFKLENBQVNSLElBQVQ7QUFDQTtBQUVELEdBcExPO0FBcUxSckIsRUFBQUEsa0JBckxRLDhCQXFMV2tDLElBckxYLEVBcUxpQlIsR0FyTGpCLEVBcUxzQjtBQUM3QixRQUFJLENBQUNBLEdBQUwsRUFBVUEsR0FBRyxHQUFHdEMsTUFBTSxDQUFDK0MsUUFBUCxDQUFnQkMsSUFBdEI7QUFDVkYsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFNBQVNMLElBQVQsR0FBZ0IsbUJBQTNCLENBQVo7QUFBQSxRQUNDTSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXZixHQUFYLENBRFg7QUFFQSxRQUFJLENBQUNjLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxRQUFJLENBQUNBLE9BQU8sQ0FBQyxDQUFELENBQVosRUFBaUIsT0FBTyxFQUFQO0FBRWhCLFdBQU9FLGtCQUFrQixDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBRCxDQUF6QjtBQUNELEdBOUxPLENBK0xMO0FBQ0E7QUFFQTs7QUFsTUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50IGZyb20gXCJDb25zdGFudFwiO1xyXG5pbXBvcnQgKiBhcyBlY3J5cHQgZnJvbSBcIkVuY3J5cHRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0Q29udG9sbGVyIGZyb20gJ2VjcnlwdCc7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcblx0XHQvLyAuLi5cclxuXHRcdFxyXG5cdFx0YmV0U2NlbmU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXJyb3JMYXllcjp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZXJyb3JMYWJlbDp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5MYWJlbCxcclxuXHRcdH0sXHJcblxyXG5cdFx0YmFja0hvbWU6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcdFxyXG5cdFx0fSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3RBUEkoKTtcclxuICAgIH0sXHJcblx0c3RhcnRHdWVzdE1vZGUoKSB7XHJcblx0XHR0aGlzLmVycm9yTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG5cdFx0Z2xvYmFsLmlzRGVtbyA9IHRydWU7XHJcblx0XHR0aGlzLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHR9LFxyXG4gICAgZ2V0U2V0dGluZ3MoKXtcclxuXHRcdGlmKHdpbmRvdy5lbmRQb2ludENvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWcgPSBlY3J5cHRDb250b2xsZXIuZGVjcnlwdCh3aW5kb3cuZW5kUG9pbnRDb25maWcpO1xyXG4gICAgICAgICAgICBpZihuZXR3b3JrQ29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWdKc29uID0gSlNPTi5wYXJzZShuZXR3b3JrQ29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdlb0lQX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybDtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5hcGlfdXJsID0gbmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEdlb2lwX1VybChuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0QXBpX1VybChuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdFx0Z2xvYmFsLmhvc3RfaWQgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpO1xyXG5cdFx0Z2xvYmFsLmFjY2Vzc190b2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZihnbG9iYWwuaG9zdF9pZD09bnVsbCAmJiBnbG9iYWwuYWNjZXNzX3Rva2VuPT1udWxsKXtcclxuXHRcdFx0aWYoIWdsb2JhbC5pc0RlbW8pe1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmc9XCIgWW91IEFyZSBQbGF5aW5nIEZvciBGdW4uXCI7XHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdFx0aWYoIWdsb2JhbC5nZXRTb2NrZXQoKSl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sMC4yKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwrXCIvYXBpL3VzZXIvZ2V0LXNldHRpbmdzLWRlbW9cIjtcclxuXHRcdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wMSZnYW1lX2NvZGU9MjFcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJih4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcclxuXHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncyA9IHBhcnNlZC5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdGlmKCFnbG9iYWwuZ2V0U29ja2V0KCkpe1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vZ2xvYmFsLmJhbGFuY2UgPSBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZTtcclxuXHRcclxuXHRcdFx0XHRcdGlmKGdsb2JhbC5zZXR0aW5ncz09dW5kZWZpbmVkKXtcclxuXHRcdFx0XHRcdFx0c2VsZi5lcnJvckxheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmcgPSBwYXJzZWQuZXJyb3IubWVzc2FnZTtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLnNldHRpbmdzPWdsb2JhbC5EZW1vU2V0dGluZ3M7XHJcblx0XHRcdFx0XHRcdHNlbGYuYmFja0hvbWUuYWN0aXZlPXRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuaXNQbGF5ZXJCYWxhbmNlVXBkYXRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNlbGYuYmV0U2NlbmUuZ2V0Q29tcG9uZW50KFwiU3RhcnRTY2VuZVwiKS51cGRhdGVDcmVkaXRMYWJlbCgpO1xyXG5cdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2xvYmFsLmdldFNldHRpbmdzKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcclxuXHRcdFx0dmFyIGJvZHkgPSB7XHJcblx0XHRcdFx0XCJob3N0X2lkXCI6IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdob3N0X2lkJyksIFxyXG5cdFx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKSxcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcblx0XHRcdHZhciBhcGlVUkwgPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdsb2JhbC5hcGlfdXJsPWFwaVVSTDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHVybCA9IGFwaVVSTCArIFwiL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPVwiK2dsb2JhbC5ob3N0X2lkK1wiJmFjY2Vzc190b2tlbj1cIitnbG9iYWwuYWNjZXNzX3Rva2VuK1wiJmdhbWVfY29kZT0yM1wiO1xyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLnNsb3QyOC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9XCIrZ2xvYmFsLmhvc3RfaWQrXCImYWNjZXNzX3Rva2VuPVwiK2dsb2JhbC5hY2Nlc3NfdG9rZW4rXCImZ2FtZV9jb2RlPTIzXCI7XHJcblx0XHJcblx0XHRcdC8vIGxldCB1cmwgPSBcImh0dHBzOi8vYm8tc3RhZ2UtYXBsLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD0wZTgzMDg4MDI3ZDRjNDJjOGU5OTM0Mzg4NDgwYzk5NiZhY2Nlc3NfdG9rZW49ZGVtbzA2JmdhbWVfY29kZT0yM1wiO1xyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBcImVuLVVTXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChqc29uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG5cdFx0aWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcblx0XHRcdHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0XHRpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fSxcclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=