
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
    global.is_promotion = this.getParameterByName('is_promotion');
    global.h5_app = this.getParameterByName('access_token');
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

            self.getErrorMessage();
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
          }

          self.getErrorMessage(); //global.balance = global.settings.balance;

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

      var _url = apiURL + "/api/user/get-settings?host_id=" + global.host_id + "&access_token=" + global.access_token + "&game_code=" + global.game_code;

      "&is_promotion=" + global.is_promotion + "&h5_app=" + global.h5_app;
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
  },
  getH5App: function getH5App() {
    var h5_app = this.getParameterByName('h5_app', undefined);

    if (h5_app == null || h5_app == "") {
      return 99;
    }

    return h5_app;
  },
  getErrorMessage: function getErrorMessage() {
    var url = global.settings.dynamic_assets_url + '/errorMessage.json';
    cc.loader.load(url, function (err, info) {
      if (!err) {
        global.commonErrorMessage = info;
        cc.log("getErrorMessage:", global.commonErrorMessage);
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsImlzX3Byb21vdGlvbiIsImg1X2FwcCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsImNvbnN0YW50Iiwic2V0U29ja2V0VVJMIiwic29ja2V0X3VybCIsImdldFNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJnZXRFcnJvck1lc3NhZ2UiLCJzY2hlZHVsZU9uY2UiLCJib2R5IiwianNvbiIsInN0cmluZ2lmeSIsImFwaVVSTCIsInVuZGVmaW5lZCIsImlzUHJvZHVjdGlvbiIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVycm9yIiwibWVzc2FnZSIsIkRlbW9TZXR0aW5ncyIsImlzUGxheWVyQmFsYW5jZVVwZGF0ZWQiLCJnYW1lX2NvZGUiLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRINUFwcCIsImR5bmFtaWNfYXNzZXRzX3VybCIsImxvYWRlciIsImxvYWQiLCJlcnIiLCJpbmZvIiwiY29tbW9uRXJyb3JNZXNzYWdlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ047QUFFQUMsSUFBQUEsUUFBUSxFQUFDO0FBQ1IsaUJBQVEsSUFEQTtBQUVSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQSxLQVpLO0FBaUJkQyxJQUFBQSxVQUFVLEVBQUM7QUFDVixpQkFBUSxJQURFO0FBRVZGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZFLEtBakJHO0FBc0JkRSxJQUFBQSxVQUFVLEVBQUM7QUFDVixpQkFBUSxJQURFO0FBRVZILE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUztBQUZFLEtBdEJHO0FBMkJkQyxJQUFBQSxRQUFRLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZBO0FBM0JLLEdBSFA7QUFvQ0w7QUFDQUssRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ25CLENBdENJO0FBd0NMQyxFQUFBQSxLQXhDSyxtQkF3Q0UsQ0FDSDtBQUNILEdBMUNJO0FBMkNSQyxFQUFBQSxjQTNDUSw0QkEyQ1M7QUFDaEIsU0FBS04sVUFBTCxDQUFnQk8sTUFBaEIsR0FBdUIsS0FBdkI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLElBQWhCO0FBQ0Es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LENBQUNlLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxRQUFJLENBQUNBLE9BQU8sQ0FBQyxDQUFELENBQVosRUFBaUIsT0FBTyxFQUFQO0FBRWhCLFdBQU9FLGtCQUFrQixDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBRCxDQUF6QjtBQUNELEdBbE1PO0FBbU1STSxFQUFBQSxRQW5NUSxzQkFvTUw7QUFDSSxRQUFJNUMsTUFBTSxHQUFHLEtBQUtILGtCQUFMLENBQXdCLFFBQXhCLEVBQWtDMkIsU0FBbEMsQ0FBYjs7QUFDQSxRQUFHeEIsTUFBTSxJQUFJLElBQVYsSUFBa0JBLE1BQU0sSUFBSSxFQUEvQixFQUNBO0FBQ0ksYUFBTyxFQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsTUFBUDtBQUNILEdBM01JO0FBNE1Sa0IsRUFBQUEsZUE1TVEsNkJBNE1TO0FBQ1YsUUFBSVEsR0FBRyxHQUFHOUMsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQmtDLGtCQUFoQixHQUFxQyxvQkFBL0M7QUFDQWhGLElBQUFBLEVBQUUsQ0FBQ2lGLE1BQUgsQ0FBVUMsSUFBVixDQUFlckIsR0FBZixFQUFvQixVQUFTc0IsR0FBVCxFQUFjQyxJQUFkLEVBQW1CO0FBQ25DLFVBQUcsQ0FBQ0QsR0FBSixFQUFRO0FBQ0pwRSxRQUFBQSxNQUFNLENBQUNzRSxrQkFBUCxHQUE0QkQsSUFBNUI7QUFDQXBGLFFBQUFBLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBTyxrQkFBUCxFQUEyQnZFLE1BQU0sQ0FBQ3NFLGtCQUFsQztBQUNIO0FBQ0osS0FMRDtBQU1IO0FBcE5JLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdENvbnRvbGxlciBmcm9tICdlY3J5cHQnO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG5cdFx0Ly8gLi4uXHJcblx0XHRcclxuXHRcdGJldFNjZW5lOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yTGF5ZXI6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGVycm9yTGFiZWw6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTGFiZWwsXHJcblx0XHR9LFxyXG5cclxuXHRcdGJhY2tIb21lOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHRcclxuXHRcdH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0QVBJKCk7XHJcbiAgICB9LFxyXG5cdHN0YXJ0R3Vlc3RNb2RlKCkge1xyXG5cdFx0dGhpcy5lcnJvckxheWVyLmFjdGl2ZT1mYWxzZTtcclxuXHRcdGdsb2JhbC5pc0RlbW8gPSB0cnVlO1xyXG5cdFx0dGhpcy5iZXRTY2VuZS5nZXRDb21wb25lbnQoXCJTdGFydFNjZW5lXCIpLnVwZGF0ZUNyZWRpdExhYmVsKCk7XHJcblx0fSxcclxuICAgIGdldFNldHRpbmdzKCl7XHJcblx0XHRpZih3aW5kb3cuZW5kUG9pbnRDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnID0gZWNyeXB0Q29udG9sbGVyLmRlY3J5cHQod2luZG93LmVuZFBvaW50Q29uZmlnKTtcclxuICAgICAgICAgICAgaWYobmV0d29ya0NvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnSnNvbiA9IEpTT04ucGFyc2UobmV0d29ya0NvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKTtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmFwaV91cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZW9JUF91cmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmw7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuYXBpX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmFwaV91cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGdsb2JhbC5TZXRHZW9pcF9VcmwobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEFwaV9VcmwobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdGdsb2JhbC5ob3N0X2lkID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2hvc3RfaWQnKTtcclxuXHRcdGdsb2JhbC5hY2Nlc3NfdG9rZW4gPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyk7XHJcblx0XHRnbG9iYWwuaXNfcHJvbW90aW9uID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2lzX3Byb21vdGlvbicpO1xyXG5cdFx0Z2xvYmFsLmg1X2FwcCA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZihnbG9iYWwuaG9zdF9pZD09bnVsbCAmJiBnbG9iYWwuYWNjZXNzX3Rva2VuPT1udWxsKXtcclxuXHRcdFx0aWYoIWdsb2JhbC5pc0RlbW8pe1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmc9XCIgWW91IEFyZSBQbGF5aW5nIEZvciBGdW4uXCI7XHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdFx0aWYoIWdsb2JhbC5nZXRTb2NrZXQoKSl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0RXJyb3JNZXNzYWdlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sMC4yKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwrXCIvYXBpL3VzZXIvZ2V0LXNldHRpbmdzLWRlbW9cIjtcclxuXHRcdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wMSZnYW1lX2NvZGU9MjFcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJih4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcclxuXHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncyA9IHBhcnNlZC5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdGlmKCFnbG9iYWwuZ2V0U29ja2V0KCkpe1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZWxmLmdldEVycm9yTWVzc2FnZSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2dsb2JhbC5iYWxhbmNlID0gZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2U7XHJcblx0XHJcblx0XHRcdFx0XHRpZihnbG9iYWwuc2V0dGluZ3M9PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmVycm9yTGFiZWwuc3RyaW5nID0gcGFyc2VkLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncz1nbG9iYWwuRGVtb1NldHRpbmdzO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJhY2tIb21lLmFjdGl2ZT10cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmlzUGxheWVyQmFsYW5jZVVwZGF0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdsb2JhbC5nZXRTZXR0aW5ncygpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHJcblx0XHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRcdFwiaG9zdF9pZFwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpLCBcclxuXHRcdFx0XHRcImFjY2Vzc190b2tlblwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyksXHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMID0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnbG9iYWwuYXBpX3VybD1hcGlVUkw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwgKyBcIi9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD1cIitnbG9iYWwuaG9zdF9pZCtcclxuXHRcdFx0XCImYWNjZXNzX3Rva2VuPVwiK2dsb2JhbC5hY2Nlc3NfdG9rZW4rXHJcblx0XHRcdFwiJmdhbWVfY29kZT1cIiArIGdsb2JhbC5nYW1lX2NvZGVcclxuXHRcdFx0XCImaXNfcHJvbW90aW9uPVwiICsgZ2xvYmFsLmlzX3Byb21vdGlvbiArIFxyXG4gICAgICAgICAgICBcIiZoNV9hcHA9XCIgKyBnbG9iYWwuaDVfYXBwO1xyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBcImVuLVVTXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChqc29uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG5cdFx0aWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcblx0XHRcdHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0XHRpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fSxcclxuXHRnZXRINUFwcCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGg1X2FwcCA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdoNV9hcHAnLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmKGg1X2FwcCA9PSBudWxsIHx8IGg1X2FwcCA9PSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaDVfYXBwO1xyXG4gICAgfSxcclxuXHRnZXRFcnJvck1lc3NhZ2UoKXtcclxuICAgICAgICBsZXQgdXJsID0gZ2xvYmFsLnNldHRpbmdzLmR5bmFtaWNfYXNzZXRzX3VybCArICcvZXJyb3JNZXNzYWdlLmpzb24nOyBcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh1cmwsIGZ1bmN0aW9uKGVyciwgaW5mbyl7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmNvbW1vbkVycm9yTWVzc2FnZSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJnZXRFcnJvck1lc3NhZ2U6XCIsIGdsb2JhbC5jb21tb25FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19