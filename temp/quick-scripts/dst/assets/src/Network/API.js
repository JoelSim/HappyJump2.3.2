
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
        global.api_url = networkConfigJson.api_url;
        constant.socketURL = constant.prodSocketURL; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiY29uc3RhbnQiLCJzb2NrZXRVUkwiLCJwcm9kU29ja2V0VVJMIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsInNjaGVkdWxlT25jZSIsImJvZHkiLCJqc29uIiwic3RyaW5naWZ5IiwiYXBpVVJMIiwidW5kZWZpbmVkIiwiaXNQcm9kdWN0aW9uIiwidXJsIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZXJyb3IiLCJtZXNzYWdlIiwiRGVtb1NldHRpbmdzIiwiaXNQbGF5ZXJCYWxhbmNlVXBkYXRlZCIsIm5hbWUiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBv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R0EsSUFBSSxDQUFDRyxPQUFMLENBQWEsU0FBYixFQUF3QixNQUF4QixDQUFQO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxTQUFTTCxJQUFULEdBQWdCLG1CQUEzQixDQUFaO0FBQUEsUUFDQ00sT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV2YsR0FBWCxDQURYO0FBRUEsUUFBSSxDQUFDYyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsUUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCLE9BQU8sRUFBUDtBQUVoQixXQUFPRSxrQkFBa0IsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBekI7QUFDRCxHQXpMTyxDQTBMTDtBQUNBO0FBRUE7O0FBN0xLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdENvbnRvbGxlciBmcm9tICdlY3J5cHRfTmV3JztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuXHRcdC8vIC4uLlxyXG5cdFx0XHJcblx0XHRiZXRTY2VuZTp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHJcblx0XHRlcnJvckxheWVyOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRlcnJvckxhYmVsOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHJcblx0XHRiYWNrSG9tZTp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFx0XHJcblx0XHR9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29ubmVjdEFQSSgpO1xyXG4gICAgfSxcclxuXHRzdGFydEd1ZXN0TW9kZSgpIHtcclxuXHRcdHRoaXMuZXJyb3JMYXllci5hY3RpdmU9ZmFsc2U7XHJcblx0XHRnbG9iYWwuaXNEZW1vID0gdHJ1ZTtcclxuXHRcdHRoaXMuYmV0U2NlbmUuZ2V0Q29tcG9uZW50KFwiU3RhcnRTY2VuZVwiKS51cGRhdGVDcmVkaXRMYWJlbCgpO1xyXG5cdH0sXHJcbiAgICBnZXRTZXR0aW5ncygpe1xyXG5cdFx0aWYod2luZG93LmVuZFBvaW50Q29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZyA9IGVjcnlwdENvbnRvbGxlci5kZWNyeXB0KHdpbmRvdy5lbmRQb2ludENvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmKG5ldHdvcmtDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZ0pzb24gPSBKU09OLnBhcnNlKG5ldHdvcmtDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybCk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2VvSVBfdXJsID0gbmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmFwaV91cmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsO1xyXG4gICAgICAgICAgICAgICAgY29uc3RhbnQuc29ja2V0VVJMID0gY29uc3RhbnQucHJvZFNvY2tldFVSTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEdlb2lwX1VybChuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0QXBpX1VybChuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdFx0Z2xvYmFsLmhvc3RfaWQgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpO1xyXG5cdFx0Z2xvYmFsLmFjY2Vzc190b2tlbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZihnbG9iYWwuaG9zdF9pZD09bnVsbCAmJiBnbG9iYWwuYWNjZXNzX3Rva2VuPT1udWxsKXtcclxuXHRcdFx0aWYoIWdsb2JhbC5pc0RlbW8pe1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmc9XCIgWW91IEFyZSBQbGF5aW5nIEZvciBGdW4uXCI7XHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRzZWxmLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0c2VsZi5iZXRTY2VuZS5nZXRDb21wb25lbnQoXCJTdGFydFNjZW5lXCIpLnVwZGF0ZUNyZWRpdExhYmVsKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LDAuMik7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdFx0dmFyIGJvZHkgPSB7XHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHRcdFx0dmFyIGFwaVVSTD0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdXJsID0gYXBpVVJMK1wiL2FwaS91c2VyL2dldC1zZXR0aW5ncy1kZW1vXCI7XHJcblx0XHRcclxuXHRcdFx0Ly8gbGV0IHVybCA9IFwiaHR0cHM6Ly9iby1zdGFnZS1hcGwudmVsYWNoaXAuY29tL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPTBlODMwODgwMjdkNGM0MmM4ZTk5MzQzODg0ODBjOTk2JmFjY2Vzc190b2tlbj1kZW1vMDEmZ2FtZV9jb2RlPTIxXCI7XHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUxhbmd1YWdlXCIsIFwiZW4tVVNcIik7XHJcblx0XHRcdHhoci5zZW5kKGpzb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsc2V7XHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHhoci5yZWFkeVN0YXRlID09IDQgJiYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuXHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHR2YXIgcGFyc2VkID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblx0XHJcblx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdC8vIGdsb2JhbC5zZXRTZXR0aW5ncyhwYXJzZWQuZGF0YSk7XHJcblx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vZ2xvYmFsLmJhbGFuY2UgPSBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZTtcclxuXHRcclxuXHRcdFx0XHRcdGlmKGdsb2JhbC5zZXR0aW5ncz09dW5kZWZpbmVkKXtcclxuXHRcdFx0XHRcdFx0c2VsZi5lcnJvckxheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmcgPSBwYXJzZWQuZXJyb3IubWVzc2FnZTtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLnNldHRpbmdzPWdsb2JhbC5EZW1vU2V0dGluZ3M7XHJcblx0XHRcdFx0XHRcdHNlbGYuYmFja0hvbWUuYWN0aXZlPXRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuaXNQbGF5ZXJCYWxhbmNlVXBkYXRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNlbGYuYmV0U2NlbmUuZ2V0Q29tcG9uZW50KFwiU3RhcnRTY2VuZVwiKS51cGRhdGVDcmVkaXRMYWJlbCgpO1xyXG5cdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2xvYmFsLmdldFNldHRpbmdzKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcclxuXHRcdFx0dmFyIGJvZHkgPSB7XHJcblx0XHRcdFx0XCJob3N0X2lkXCI6IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdob3N0X2lkJyksIFxyXG5cdFx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKSxcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcblx0XHRcdHZhciBhcGlVUkwgPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdsb2JhbC5hcGlfdXJsPWFwaVVSTDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHVybCA9IGFwaVVSTCArIFwiL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPVwiK2dsb2JhbC5ob3N0X2lkK1wiJmFjY2Vzc190b2tlbj1cIitnbG9iYWwuYWNjZXNzX3Rva2VuK1wiJmdhbWVfY29kZT0yM1wiO1xyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLnNsb3QyOC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9XCIrZ2xvYmFsLmhvc3RfaWQrXCImYWNjZXNzX3Rva2VuPVwiK2dsb2JhbC5hY2Nlc3NfdG9rZW4rXCImZ2FtZV9jb2RlPTIzXCI7XHJcblx0XHJcblx0XHRcdC8vIGxldCB1cmwgPSBcImh0dHBzOi8vYm8tc3RhZ2UtYXBsLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD0wZTgzMDg4MDI3ZDRjNDJjOGU5OTM0Mzg4NDgwYzk5NiZhY2Nlc3NfdG9rZW49ZGVtbzA2JmdhbWVfY29kZT0yM1wiO1xyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBcImVuLVVTXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChqc29uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG5cdFx0aWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcblx0XHRcdHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0XHRpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fSxcclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=