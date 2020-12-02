
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7a49167d1ATa7jkClFO/oq', 'Constant');
// src/Network/Constant.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForgetPassURL = getForgetPassURL;
exports.getSignUpURL = getSignUpURL;
exports.getLobbyAPI = getLobbyAPI;
exports.getRedeemHistoryURL = getRedeemHistoryURL;
exports.getGameHistoryURL = getGameHistoryURL;
exports.getRedeemURL = getRedeemURL;
exports.getPrizeListURL = getPrizeListURL;
exports.getLoginURL = getLoginURL;
exports.setGameCode = setGameCode;
exports.setSocketURL = setSocketURL;
exports.setApiURL = setApiURL;
exports.getGameVersion = getGameVersion;
exports.getSocketURL = getSocketURL;
exports.getApiURL = getApiURL;
exports.getGameCode = getGameCode;
// var socketURL = "192.168.100.6:8099";
// var socketURL = "slot-grabber.casinoville.net"
var socketURL = "https://st-socket-dsocial.slot28.com"; // export var gameSocketURL = "socket-dsocial.velachip.com/game";
// export var gameSocketURL = "https://st-socket-dsocial.slot28.com/game";
// var socketURL = "localhost:9000";
// export var gameSocketURL = "localhost:7777/game";
// var socketURL = "192.168.100.45:8098";
// var apiURL = "http://bo.fun1881.com/api/user/";

var apiURL = "http://bo-stage.velachip.com/api/mini-game/";
var loginURL = "http://bo-stage.velachip.com/api/user/login";
var prizeListURL = "http://bo-stage.velachip.com/api/berchinko/list";
var redeemPrizeURL = "http://bo-stage.velachip.com/api/user/redeem";
var gameHistroyURL = "http://bo-stage.velachip.com/api/berchinko/history";
var redeemHistroyURL = "http://bo-stage.velachip.com/api/berchinko/transaction";
var signUpURL = "http://bo-stage.velachip.com/api/user/register";
var lobbyAPI = "http://bo-stage.velachip.com/api/user/get-info";
var forgetPassURL = "http://bo-stage.velachip.com/api/user/forgot-password";
var gameCode = "76";
var game_version = "1.1.0";

function getForgetPassURL() {
  return forgetPassURL;
}

function getSignUpURL() {
  return signUpURL;
}

function getLobbyAPI() {
  return lobbyAPI;
}

function getRedeemHistoryURL() {
  return redeemHistroyURL;
}

function getGameHistoryURL() {
  return gameHistroyURL;
}

function getRedeemURL() {
  return redeemPrizeURL;
}

function getPrizeListURL() {
  return prizeListURL;
}

function getLoginURL() {
  return loginURL;
}

function setGameCode(value) {
  gameCode = value;
  return gameCode;
}

function setSocketURL(value) {
  socketURL = value;
  return socketURL;
}

function setApiURL(value) {
  apiURL = value;
  return apiURL;
}

function getGameVersion() {
  return game_version;
}

function getSocketURL() {
  return socketURL;
}

function getApiURL() {
  return apiURL;
}

function getGameCode() {
  return gameCode;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxDb25zdGFudC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRVUkwiLCJhcGlVUkwiLCJsb2dpblVSTCIsInByaXplTGlzdFVSTCIsInJlZGVlbVByaXplVVJMIiwiZ2FtZUhpc3Ryb3lVUkwiLCJyZWRlZW1IaXN0cm95VVJMIiwic2lnblVwVVJMIiwibG9iYnlBUEkiLCJmb3JnZXRQYXNzVVJMIiwiZ2FtZUNvZGUiLCJnYW1lX3ZlcnNpb24iLCJnZXRGb3JnZXRQYXNzVVJMIiwiZ2V0U2lnblVwVVJMIiwiZ2V0TG9iYnlBUEkiLCJnZXRSZWRlZW1IaXN0b3J5VVJMIiwiZ2V0R2FtZUhpc3RvcnlVUkwiLCJnZXRSZWRlZW1VUkwiLCJnZXRQcml6ZUxpc3RVUkwiLCJnZXRMb2dpblVSTCIsInNldEdhbWVDb2RlIiwidmFsdWUiLCJzZXRTb2NrZXRVUkwiLCJzZXRBcGlVUkwiLCJnZXRHYW1lVmVyc2lvbiIsImdldFNvY2tldFVSTCIsImdldEFwaVVSTCIsImdldEdhbWVDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUcsc0NBQWhCLEVBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlDLE1BQU0sR0FBRyw2Q0FBYjtBQUNBLElBQUlDLFFBQVEsR0FBRyw2Q0FBZjtBQUNBLElBQUlDLFlBQVksR0FBRyxpREFBbkI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsOENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLG9EQUFyQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLHdEQUF2QjtBQUNBLElBQUlDLFNBQVMsR0FBRyxnREFBaEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsZ0RBQWY7QUFDQSxJQUFJQyxhQUFhLEdBQUcsdURBQXBCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFFQSxJQUFJQyxZQUFZLEdBQUcsT0FBbkI7O0FBRU8sU0FBU0MsZ0JBQVQsR0FBMkI7QUFDOUIsU0FBT0gsYUFBUDtBQUNIOztBQUVNLFNBQVNJLFlBQVQsR0FBdUI7QUFDMUIsU0FBT04sU0FBUDtBQUNIOztBQUVNLFNBQVNPLFdBQVQsR0FBc0I7QUFDekIsU0FBT04sUUFBUDtBQUNIOztBQUVNLFNBQVNPLG1CQUFULEdBQThCO0FBQ2pDLFNBQU9ULGdCQUFQO0FBQ0g7O0FBRU0sU0FBU1UsaUJBQVQsR0FBNEI7QUFDL0IsU0FBT1gsY0FBUDtBQUNIOztBQUVNLFNBQVNZLFlBQVQsR0FBdUI7QUFDMUIsU0FBT2IsY0FBUDtBQUNIOztBQUVNLFNBQVNjLGVBQVQsR0FBMEI7QUFDN0IsU0FBT2YsWUFBUDtBQUNIOztBQUVNLFNBQVNnQixXQUFULEdBQXNCO0FBQ3pCLFNBQU9qQixRQUFQO0FBQ0g7O0FBRU0sU0FBU2tCLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQzlCWCxFQUFBQSxRQUFRLEdBQUdXLEtBQVg7QUFDQSxTQUFRWCxRQUFSO0FBQ0g7O0FBRU0sU0FBU1ksWUFBVCxDQUFzQkQsS0FBdEIsRUFBNEI7QUFDL0JyQixFQUFBQSxTQUFTLEdBQUdxQixLQUFaO0FBQ0EsU0FBUXJCLFNBQVI7QUFDSDs7QUFFTSxTQUFTdUIsU0FBVCxDQUFtQkYsS0FBbkIsRUFBeUI7QUFDNUJwQixFQUFBQSxNQUFNLEdBQUdvQixLQUFUO0FBQ0EsU0FBUXBCLE1BQVI7QUFDSDs7QUFFTSxTQUFTdUIsY0FBVCxHQUF5QjtBQUM1QixTQUFPYixZQUFQO0FBQ0g7O0FBRU0sU0FBU2MsWUFBVCxHQUF1QjtBQUMxQixTQUFPekIsU0FBUDtBQUNIOztBQUVNLFNBQVMwQixTQUFULEdBQW9CO0FBQ3ZCLFNBQU96QixNQUFQO0FBQ0g7O0FBRU0sU0FBUzBCLFdBQVQsR0FBc0I7QUFDekIsU0FBT2pCLFFBQVA7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIHNvY2tldFVSTCA9IFwiMTkyLjE2OC4xMDAuNjo4MDk5XCI7XHJcbi8vIHZhciBzb2NrZXRVUkwgPSBcInNsb3QtZ3JhYmJlci5jYXNpbm92aWxsZS5uZXRcIlxyXG52YXIgc29ja2V0VVJMID0gXCJodHRwczovL3N0LXNvY2tldC1kc29jaWFsLnNsb3QyOC5jb21cIjtcclxuLy8gZXhwb3J0IHZhciBnYW1lU29ja2V0VVJMID0gXCJzb2NrZXQtZHNvY2lhbC52ZWxhY2hpcC5jb20vZ2FtZVwiO1xyXG4vLyBleHBvcnQgdmFyIGdhbWVTb2NrZXRVUkwgPSBcImh0dHBzOi8vc3Qtc29ja2V0LWRzb2NpYWwuc2xvdDI4LmNvbS9nYW1lXCI7XHJcblxyXG4vLyB2YXIgc29ja2V0VVJMID0gXCJsb2NhbGhvc3Q6OTAwMFwiO1xyXG4vLyBleHBvcnQgdmFyIGdhbWVTb2NrZXRVUkwgPSBcImxvY2FsaG9zdDo3Nzc3L2dhbWVcIjtcclxuLy8gdmFyIHNvY2tldFVSTCA9IFwiMTkyLjE2OC4xMDAuNDU6ODA5OFwiO1xyXG4vLyB2YXIgYXBpVVJMID0gXCJodHRwOi8vYm8uZnVuMTg4MS5jb20vYXBpL3VzZXIvXCI7XHJcbnZhciBhcGlVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL21pbmktZ2FtZS9cIjtcclxudmFyIGxvZ2luVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS91c2VyL2xvZ2luXCI7XHJcbnZhciBwcml6ZUxpc3RVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL2JlcmNoaW5rby9saXN0XCI7XHJcbnZhciByZWRlZW1Qcml6ZVVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9yZWRlZW1cIjtcclxudmFyIGdhbWVIaXN0cm95VVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS9iZXJjaGlua28vaGlzdG9yeVwiO1xyXG52YXIgcmVkZWVtSGlzdHJveVVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvYmVyY2hpbmtvL3RyYW5zYWN0aW9uXCI7XHJcbnZhciBzaWduVXBVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL3VzZXIvcmVnaXN0ZXJcIjtcclxudmFyIGxvYmJ5QVBJID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS91c2VyL2dldC1pbmZvXCI7XHJcbnZhciBmb3JnZXRQYXNzVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS91c2VyL2ZvcmdvdC1wYXNzd29yZFwiO1xyXG52YXIgZ2FtZUNvZGUgPSBcIjc2XCI7XHJcblxyXG52YXIgZ2FtZV92ZXJzaW9uID0gXCIxLjEuMFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcmdldFBhc3NVUkwoKXtcclxuICAgIHJldHVybiBmb3JnZXRQYXNzVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lnblVwVVJMKCl7XHJcbiAgICByZXR1cm4gc2lnblVwVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9iYnlBUEkoKXtcclxuICAgIHJldHVybiBsb2JieUFQSTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZGVlbUhpc3RvcnlVUkwoKXtcclxuICAgIHJldHVybiByZWRlZW1IaXN0cm95VVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUhpc3RvcnlVUkwoKXtcclxuICAgIHJldHVybiBnYW1lSGlzdHJveVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZGVlbVVSTCgpe1xyXG4gICAgcmV0dXJuIHJlZGVlbVByaXplVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpemVMaXN0VVJMKCl7XHJcbiAgICByZXR1cm4gcHJpemVMaXN0VVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9naW5VUkwoKXtcclxuICAgIHJldHVybiBsb2dpblVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEdhbWVDb2RlKHZhbHVlKXtcclxuICAgIGdhbWVDb2RlID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGdhbWVDb2RlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvY2tldFVSTCh2YWx1ZSl7XHJcbiAgICBzb2NrZXRVUkwgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoc29ja2V0VVJMKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFwaVVSTCh2YWx1ZSl7XHJcbiAgICBhcGlVUkwgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoYXBpVVJMKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVWZXJzaW9uKCl7XHJcbiAgICByZXR1cm4gZ2FtZV92ZXJzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ja2V0VVJMKCl7XHJcbiAgICByZXR1cm4gc29ja2V0VVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpVVJMKCl7XHJcbiAgICByZXR1cm4gYXBpVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUNvZGUoKXtcclxuICAgIHJldHVybiBnYW1lQ29kZTtcclxufSJdfQ==