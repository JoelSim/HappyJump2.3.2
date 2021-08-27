
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

var ecryptContoller = _interopRequireWildcard(require("ecrypt"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsImNvbnN0YW50Iiwic29ja2V0VVJMIiwic29ja2V0X3VybCIsImdldFNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJzY2hlZHVsZU9uY2UiLCJib2R5IiwianNvbiIsInN0cmluZ2lmeSIsImFwaVVSTCIsInVuZGVmaW5lZCIsImlzUHJvZHVjdGlvbiIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVycm9yIiwibWVzc2FnZSIsIkRlbW9TZXR0aW5ncyIsImlzUGxheWVyQmFsYW5jZVVwZGF0ZWQiLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0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QjtBQUNBeEIsTUFBQUEsR0FBRyxDQUFDMEIsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0ExQixNQUFBQSxHQUFHLENBQUMwQixnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQTFCLE1BQUFBLEdBQUcsQ0FBQzJCLElBQUosQ0FBU1IsSUFBVDtBQUNBO0FBRUQsR0FwTE87QUFxTFJyQixFQUFBQSxrQkFyTFEsOEJBcUxXa0MsSUFyTFgsRUFxTGlCUixHQXJMakIsRUFxTHNCO0FBQzdCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVQSxHQUFHLEdBQUd0QyxNQUFNLENBQUMrQyxRQUFQLENBQWdCQyxJQUF0QjtBQUNWRixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBUDtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsU0FBU0wsSUFBVCxHQUFnQixtQkFBM0IsQ0FBWjtBQUFBLFFBQ0NNLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdmLEdBQVgsQ0FEWDtBQUVBLFFBQUksQ0FBQ2MsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLFFBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUQsQ0FBWixFQUFpQixPQUFPLEVBQVA7QUFFaEIsV0FBT0Usa0JBQWtCLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0gsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQXpCO0FBQ0QsR0E5TE8sQ0ErTEw7QUFDQTtBQUVBOztBQWxNSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuaW1wb3J0ICogYXMgY29uc3RhbnQgZnJvbSBcIkNvbnN0YW50XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdCBmcm9tIFwiRW5jcnlwdFwiO1xyXG5pbXBvcnQgKiBhcyBlY3J5cHRDb250b2xsZXIgZnJvbSAnZWNyeXB0JztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuXHRcdC8vIC4uLlxyXG5cdFx0XHJcblx0XHRiZXRTY2VuZTp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHJcblx0XHRlcnJvckxheWVyOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRlcnJvckxhYmVsOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHJcblx0XHRiYWNrSG9tZTp7XHJcblx0XHRcdGRlZmF1bHQ6bnVsbCxcclxuXHRcdFx0dHlwZTpjYy5Ob2RlLFx0XHJcblx0XHR9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29ubmVjdEFQSSgpO1xyXG4gICAgfSxcclxuXHRzdGFydEd1ZXN0TW9kZSgpIHtcclxuXHRcdHRoaXMuZXJyb3JMYXllci5hY3RpdmU9ZmFsc2U7XHJcblx0XHRnbG9iYWwuaXNEZW1vID0gdHJ1ZTtcclxuXHRcdHRoaXMuYmV0U2NlbmUuZ2V0Q29tcG9uZW50KFwiU3RhcnRTY2VuZVwiKS51cGRhdGVDcmVkaXRMYWJlbCgpO1xyXG5cdH0sXHJcbiAgICBnZXRTZXR0aW5ncygpe1xyXG5cdFx0aWYod2luZG93LmVuZFBvaW50Q29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZyA9IGVjcnlwdENvbnRvbGxlci5kZWNyeXB0KHdpbmRvdy5lbmRQb2ludENvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmKG5ldHdvcmtDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZ0pzb24gPSBKU09OLnBhcnNlKG5ldHdvcmtDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybCk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2VvSVBfdXJsID0gbmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmFwaV91cmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0R2VvaXBfVXJsKG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGdsb2JhbC5TZXRBcGlfVXJsKG5ldHdvcmtDb25maWdKc29uLmFwaV91cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0XHRnbG9iYWwuaG9zdF9pZCA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdob3N0X2lkJyk7XHJcblx0XHRnbG9iYWwuYWNjZXNzX3Rva2VuID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2FjY2Vzc190b2tlbicpO1xyXG5cdFx0bGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGlmKGdsb2JhbC5ob3N0X2lkPT1udWxsICYmIGdsb2JhbC5hY2Nlc3NfdG9rZW49PW51bGwpe1xyXG5cdFx0XHRpZighZ2xvYmFsLmlzRGVtbyl7XHJcblx0XHRcdFx0c2VsZi5lcnJvckxheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0c2VsZi5lcnJvckxhYmVsLnN0cmluZz1cIiBZb3UgQXJlIFBsYXlpbmcgRm9yIEZ1bi5cIjtcclxuXHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGlmKHhoci5yZWFkeVN0YXRlID09IDQgJiYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0dmFyIHBhcnNlZCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncyA9IHBhcnNlZC5kYXRhO1xyXG5cdFx0XHRcdFx0XHRjb25zdGFudC5zb2NrZXRVUkwgPSBnbG9iYWwuc2V0dGluZ3Muc29ja2V0X3VybDtcclxuXHRcdFx0XHRcdFx0aWYoIWdsb2JhbC5nZXRTb2NrZXQoKSl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sMC4yKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwrXCIvYXBpL3VzZXIvZ2V0LXNldHRpbmdzLWRlbW9cIjtcclxuXHRcdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wMSZnYW1lX2NvZGU9MjFcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJih4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcclxuXHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncyA9IHBhcnNlZC5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3RhbnQuc29ja2V0VVJMID0gZ2xvYmFsLnNldHRpbmdzLnNvY2tldF91cmw7XHJcblx0XHRcdFx0XHRpZighZ2xvYmFsLmdldFNvY2tldCgpKXtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2dsb2JhbC5iYWxhbmNlID0gZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2U7XHJcblx0XHJcblx0XHRcdFx0XHRpZihnbG9iYWwuc2V0dGluZ3M9PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmVycm9yTGFiZWwuc3RyaW5nID0gcGFyc2VkLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncz1nbG9iYWwuRGVtb1NldHRpbmdzO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJhY2tIb21lLmFjdGl2ZT10cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmlzUGxheWVyQmFsYW5jZVVwZGF0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdsb2JhbC5nZXRTZXR0aW5ncygpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHJcblx0XHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRcdFwiaG9zdF9pZFwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpLCBcclxuXHRcdFx0XHRcImFjY2Vzc190b2tlblwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyksXHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMID0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnbG9iYWwuYXBpX3VybD1hcGlVUkw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwgKyBcIi9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD1cIitnbG9iYWwuaG9zdF9pZCtcIiZhY2Nlc3NfdG9rZW49XCIrZ2xvYmFsLmFjY2Vzc190b2tlbitcIiZnYW1lX2NvZGU9MjNcIjtcclxuXHRcdFx0Ly8gbGV0IHVybCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tL2FwaS91c2VyL2dldC1zZXR0aW5ncz9ob3N0X2lkPVwiK2dsb2JhbC5ob3N0X2lkK1wiJmFjY2Vzc190b2tlbj1cIitnbG9iYWwuYWNjZXNzX3Rva2VuK1wiJmdhbWVfY29kZT0yM1wiO1xyXG5cdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wNiZnYW1lX2NvZGU9MjNcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG5cdGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcclxuXHRcdGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG5cdFx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG5cdFx0aWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG5cdH0sXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19