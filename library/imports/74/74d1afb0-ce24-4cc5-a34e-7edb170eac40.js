"use strict";
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