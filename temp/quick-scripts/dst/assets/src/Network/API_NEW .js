
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

        global.geoIP_url = networkConfigJson.geoip_url;
        global.api_url = networkConfigJson.api_url; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUElfTkVXIC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIndpbmRvdyIsImVuZFBvaW50Q29uZmlnIiwibmV0d29ya0NvbmZpZyIsImVjcnlwdENvbnRvbGxlciIsImRlY3J5cHQiLCJuZXR3b3JrQ29uZmlnSnNvbiIsIkpTT04iLCJwYXJzZSIsImdlb0lQX3VybCIsImdlb2lwX3VybCIsImFwaV91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUNSO0FBQ0ksUUFBR0MsTUFBTSxDQUFDQyxjQUFQLElBQXlCLElBQTVCLEVBQWlDO0FBQzdCLFVBQUlDLGFBQWEsR0FBR0MsZUFBZSxDQUFDQyxPQUFoQixDQUF3QkosTUFBTSxDQUFDQyxjQUEvQixDQUFwQjs7QUFDQSxVQUFHQyxhQUFhLElBQUksSUFBcEIsRUFBeUI7QUFDckIsWUFBSUcsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxhQUFYLENBQXhCLENBRHFCLENBR3JCO0FBQ0E7O0FBRUFSLFFBQUFBLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQkgsaUJBQWlCLENBQUNJLFNBQXJDO0FBRUFmLFFBQUFBLE1BQU0sQ0FBQ2dCLE9BQVAsR0FBaUJMLGlCQUFpQixDQUFDSyxPQUFuQyxDQVJxQixDQVNyQjtBQUNBO0FBQ0g7QUFDSjtBQUNKO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVjcnlwdENvbnRvbGxlciBmcm9tICdlY3J5cHRfTmV3JztcclxudmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJHbG9iYWxEYXRhXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHdpbmRvdy5lbmRQb2ludENvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWcgPSBlY3J5cHRDb250b2xsZXIuZGVjcnlwdCh3aW5kb3cuZW5kUG9pbnRDb25maWcpO1xyXG4gICAgICAgICAgICBpZihuZXR3b3JrQ29uZmlnICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ldHdvcmtDb25maWdKc29uID0gSlNPTi5wYXJzZShuZXR3b3JrQ29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdlb0lQX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmdlb2lwX3VybDtcclxuXHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuYXBpX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmFwaV91cmw7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEdlb2lwX1VybChuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmwpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhnbG9iYWwuU2V0QXBpX1VybChuZXR3b3JrQ29uZmlnSnNvbi5hcGlfdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19