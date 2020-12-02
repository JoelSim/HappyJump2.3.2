
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/API_NEW .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38f7cig6B9PpbijkJxqKnw1', 'API_NEW ');
// src/Network/API_NEW .js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ecryptContoller = _interopRequireWildcard(require("ecrypt_New"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var global = require("GlobalData");

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    if (window.endPointConfig != null) {
      var networkConfig = ecryptContoller.decrypt(window.endPointConfig);

      if (networkConfig != null) {
        var networkConfigJson = JSON.parse(networkConfig); //cc.log(networkConfigJson.geoip_url);
        //cc.log(networkConfigJson.api_url);

        global.geoIP_UrL = networkConfigJson.geoip_url;
        global.api_Url = networkConfigJson.api_url; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
        // cc.log(global.SetApi_Url(networkConfigJson.api_url));
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUElfTkVXIC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIndpbmRvdyIsImVuZFBvaW50Q29uZmlnIiwibmV0d29ya0NvbmZpZyIsImVjcnlwdENvbnRvbGxlciIsImRlY3J5cHQiLCJuZXR3b3JrQ29uZmlnSnNvbiIsIkpTT04iLCJwYXJzZSIsImdlb0lQX1VyTCIsImdlb2lwX3VybCIsImFwaV9VcmwiLCJhcGlfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFDUjtBQUNJLFFBQUdDLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QixJQUE1QixFQUFpQztBQUM3QixVQUFJQyxhQUFhLEdBQUdDLGVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JKLE1BQU0sQ0FBQ0MsY0FBL0IsQ0FBcEI7O0FBQ0EsVUFBR0MsYUFBYSxJQUFJLElBQXBCLEVBQXlCO0FBQ3JCLFlBQUlHLGlCQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsYUFBWCxDQUF4QixDQURxQixDQUdyQjtBQUNBOztBQUVBUixRQUFBQSxNQUFNLENBQUNjLFNBQVAsR0FBbUJILGlCQUFpQixDQUFDSSxTQUFyQztBQUVBZixRQUFBQSxNQUFNLENBQUNnQixPQUFQLEdBQWlCTCxpQkFBaUIsQ0FBQ00sT0FBbkMsQ0FScUIsQ0FTckI7QUFDQTtBQUNIO0FBQ0o7QUFDSjtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlY3J5cHRDb250b2xsZXIgZnJvbSAnZWNyeXB0X05ldyc7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKFwiR2xvYmFsRGF0YVwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZih3aW5kb3cuZW5kUG9pbnRDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnID0gZWNyeXB0Q29udG9sbGVyLmRlY3J5cHQod2luZG93LmVuZFBvaW50Q29uZmlnKTtcclxuICAgICAgICAgICAgaWYobmV0d29ya0NvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnSnNvbiA9IEpTT04ucGFyc2UobmV0d29ya0NvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKTtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmFwaV91cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZW9JUF9VckwgPSBuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmFwaV9VcmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGdsb2JhbC5TZXRHZW9pcF9VcmwobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEFwaV9VcmwobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==