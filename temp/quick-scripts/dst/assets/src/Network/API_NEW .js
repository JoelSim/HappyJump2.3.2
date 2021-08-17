
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

var constant = _interopRequireWildcard(require("Constant"));

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

        global.geoIP_url = networkConfigJson.geoip_url;
        global.api_url = networkConfigJson.api_url;
        constant.socketURL = constant.prodSocketURL; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUElfTkVXIC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIndpbmRvdyIsImVuZFBvaW50Q29uZmlnIiwibmV0d29ya0NvbmZpZyIsImVjcnlwdENvbnRvbGxlciIsImRlY3J5cHQiLCJuZXR3b3JrQ29uZmlnSnNvbiIsIkpTT04iLCJwYXJzZSIsImdlb0lQX3VybCIsImdlb2lwX3VybCIsImFwaV91cmwiLCJjb25zdGFudCIsInNvY2tldFVSTCIsInByb2RTb2NrZXRVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBREEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUFwQjs7QUFHQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUNSO0FBQ0ksUUFBR0MsTUFBTSxDQUFDQyxjQUFQLElBQXlCLElBQTVCLEVBQWlDO0FBQzdCLFVBQUlDLGFBQWEsR0FBR0MsZUFBZSxDQUFDQyxPQUFoQixDQUF3QkosTUFBTSxDQUFDQyxjQUEvQixDQUFwQjs7QUFDQSxVQUFHQyxhQUFhLElBQUksSUFBcEIsRUFBeUI7QUFDckIsWUFBSUcsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxhQUFYLENBQXhCLENBRHFCLENBR3JCO0FBQ0E7O0FBRUFSLFFBQUFBLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQkgsaUJBQWlCLENBQUNJLFNBQXJDO0FBQ0FmLFFBQUFBLE1BQU0sQ0FBQ2dCLE9BQVAsR0FBaUJMLGlCQUFpQixDQUFDSyxPQUFuQztBQUNBQyxRQUFBQSxRQUFRLENBQUNDLFNBQVQsR0FBcUJELFFBQVEsQ0FBQ0UsYUFBOUIsQ0FScUIsQ0FVckI7QUFDQTtBQUNIO0FBQ0o7QUFDSjtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlY3J5cHRDb250b2xsZXIgZnJvbSAnZWNyeXB0X05ldyc7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKFwiR2xvYmFsRGF0YVwiKTtcclxuaW1wb3J0ICogYXMgY29uc3RhbnQgZnJvbSBcIkNvbnN0YW50XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYod2luZG93LmVuZFBvaW50Q29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZyA9IGVjcnlwdENvbnRvbGxlci5kZWNyeXB0KHdpbmRvdy5lbmRQb2ludENvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmKG5ldHdvcmtDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV0d29ya0NvbmZpZ0pzb24gPSBKU09OLnBhcnNlKG5ldHdvcmtDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybCk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2VvSVBfdXJsID0gbmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmFwaV91cmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsO1xyXG4gICAgICAgICAgICAgICAgY29uc3RhbnQuc29ja2V0VVJMID0gY29uc3RhbnQucHJvZFNvY2tldFVSTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEdlb2lwX1VybChuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0QXBpX1VybChuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19