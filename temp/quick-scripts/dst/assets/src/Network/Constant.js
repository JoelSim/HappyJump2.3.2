
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

exports.__esModule = true;
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
exports.prodSocketURL = exports.socketURL = void 0;
// var socketURL = "192.168.100.6:8099";
// var socketURL = "slot-grabber.casinoville.net"
var socketURL = "https://st-socket-dsocial.slot28.com";
exports.socketURL = socketURL;
var prodSocketURL = "https://socket-dsocial.slot28.com"; // export var gameSocketURL = "socket-dsocial.velachip.com/game";
// export var gameSocketURL = "https://st-socket-dsocial.slot28.com/game";
// var socketURL = "localhost:9000";
// export var gameSocketURL = "localhost:7777/game";
// var socketURL = "192.168.100.45:8098";
// var apiURL = "http://bo.fun1881.com/api/user/";

exports.prodSocketURL = prodSocketURL;
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
  exports.socketURL = socketURL = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxDb25zdGFudC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRVUkwiLCJwcm9kU29ja2V0VVJMIiwiYXBpVVJMIiwibG9naW5VUkwiLCJwcml6ZUxpc3RVUkwiLCJyZWRlZW1Qcml6ZVVSTCIsImdhbWVIaXN0cm95VVJMIiwicmVkZWVtSGlzdHJveVVSTCIsInNpZ25VcFVSTCIsImxvYmJ5QVBJIiwiZm9yZ2V0UGFzc1VSTCIsImdhbWVDb2RlIiwiZ2FtZV92ZXJzaW9uIiwiZ2V0Rm9yZ2V0UGFzc1VSTCIsImdldFNpZ25VcFVSTCIsImdldExvYmJ5QVBJIiwiZ2V0UmVkZWVtSGlzdG9yeVVSTCIsImdldEdhbWVIaXN0b3J5VVJMIiwiZ2V0UmVkZWVtVVJMIiwiZ2V0UHJpemVMaXN0VVJMIiwiZ2V0TG9naW5VUkwiLCJzZXRHYW1lQ29kZSIsInZhbHVlIiwic2V0U29ja2V0VVJMIiwic2V0QXBpVVJMIiwiZ2V0R2FtZVZlcnNpb24iLCJnZXRTb2NrZXRVUkwiLCJnZXRBcGlVUkwiLCJnZXRHYW1lQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFJQSxTQUFTLEdBQUcsc0NBQWhCOztBQUNBLElBQUlDLGFBQWEsR0FBRyxtQ0FBcEIsRUFDUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBRyw2Q0FBYjtBQUNBLElBQUlDLFFBQVEsR0FBRyw2Q0FBZjtBQUNBLElBQUlDLFlBQVksR0FBRyxpREFBbkI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsOENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLG9EQUFyQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLHdEQUF2QjtBQUNBLElBQUlDLFNBQVMsR0FBRyxnREFBaEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsZ0RBQWY7QUFDQSxJQUFJQyxhQUFhLEdBQUcsdURBQXBCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFFQSxJQUFJQyxZQUFZLEdBQUcsT0FBbkI7O0FBRU8sU0FBU0MsZ0JBQVQsR0FBMkI7QUFDOUIsU0FBT0gsYUFBUDtBQUNIOztBQUVNLFNBQVNJLFlBQVQsR0FBdUI7QUFDMUIsU0FBT04sU0FBUDtBQUNIOztBQUVNLFNBQVNPLFdBQVQsR0FBc0I7QUFDekIsU0FBT04sUUFBUDtBQUNIOztBQUVNLFNBQVNPLG1CQUFULEdBQThCO0FBQ2pDLFNBQU9ULGdCQUFQO0FBQ0g7O0FBRU0sU0FBU1UsaUJBQVQsR0FBNEI7QUFDL0IsU0FBT1gsY0FBUDtBQUNIOztBQUVNLFNBQVNZLFlBQVQsR0FBdUI7QUFDMUIsU0FBT2IsY0FBUDtBQUNIOztBQUVNLFNBQVNjLGVBQVQsR0FBMEI7QUFDN0IsU0FBT2YsWUFBUDtBQUNIOztBQUVNLFNBQVNnQixXQUFULEdBQXNCO0FBQ3pCLFNBQU9qQixRQUFQO0FBQ0g7O0FBRU0sU0FBU2tCLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQzlCWCxFQUFBQSxRQUFRLEdBQUdXLEtBQVg7QUFDQSxTQUFRWCxRQUFSO0FBQ0g7O0FBRU0sU0FBU1ksWUFBVCxDQUFzQkQsS0FBdEIsRUFBNEI7QUFDL0Isc0JBQUF0QixTQUFTLEdBQUdzQixLQUFaO0FBQ0EsU0FBUXRCLFNBQVI7QUFDSDs7QUFFTSxTQUFTd0IsU0FBVCxDQUFtQkYsS0FBbkIsRUFBeUI7QUFDNUJwQixFQUFBQSxNQUFNLEdBQUdvQixLQUFUO0FBQ0EsU0FBUXBCLE1BQVI7QUFDSDs7QUFFTSxTQUFTdUIsY0FBVCxHQUF5QjtBQUM1QixTQUFPYixZQUFQO0FBQ0g7O0FBRU0sU0FBU2MsWUFBVCxHQUF1QjtBQUMxQixTQUFPMUIsU0FBUDtBQUNIOztBQUVNLFNBQVMyQixTQUFULEdBQW9CO0FBQ3ZCLFNBQU96QixNQUFQO0FBQ0g7O0FBRU0sU0FBUzBCLFdBQVQsR0FBc0I7QUFDekIsU0FBT2pCLFFBQVA7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIHNvY2tldFVSTCA9IFwiMTkyLjE2OC4xMDAuNjo4MDk5XCI7XHJcbi8vIHZhciBzb2NrZXRVUkwgPSBcInNsb3QtZ3JhYmJlci5jYXNpbm92aWxsZS5uZXRcIlxyXG5leHBvcnQgdmFyIHNvY2tldFVSTCA9IFwiaHR0cHM6Ly9zdC1zb2NrZXQtZHNvY2lhbC5zbG90MjguY29tXCI7XHJcbmV4cG9ydCB2YXIgcHJvZFNvY2tldFVSTCA9IFwiaHR0cHM6Ly9zb2NrZXQtZHNvY2lhbC5zbG90MjguY29tXCI7XHJcbi8vIGV4cG9ydCB2YXIgZ2FtZVNvY2tldFVSTCA9IFwic29ja2V0LWRzb2NpYWwudmVsYWNoaXAuY29tL2dhbWVcIjtcclxuLy8gZXhwb3J0IHZhciBnYW1lU29ja2V0VVJMID0gXCJodHRwczovL3N0LXNvY2tldC1kc29jaWFsLnNsb3QyOC5jb20vZ2FtZVwiO1xyXG5cclxuLy8gdmFyIHNvY2tldFVSTCA9IFwibG9jYWxob3N0OjkwMDBcIjtcclxuLy8gZXhwb3J0IHZhciBnYW1lU29ja2V0VVJMID0gXCJsb2NhbGhvc3Q6Nzc3Ny9nYW1lXCI7XHJcbi8vIHZhciBzb2NrZXRVUkwgPSBcIjE5Mi4xNjguMTAwLjQ1OjgwOThcIjtcclxuLy8gdmFyIGFwaVVSTCA9IFwiaHR0cDovL2JvLmZ1bjE4ODEuY29tL2FwaS91c2VyL1wiO1xyXG52YXIgYXBpVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS9taW5pLWdhbWUvXCI7XHJcbnZhciBsb2dpblVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9sb2dpblwiO1xyXG52YXIgcHJpemVMaXN0VVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS9iZXJjaGlua28vbGlzdFwiO1xyXG52YXIgcmVkZWVtUHJpemVVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL3VzZXIvcmVkZWVtXCI7XHJcbnZhciBnYW1lSGlzdHJveVVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvYmVyY2hpbmtvL2hpc3RvcnlcIjtcclxudmFyIHJlZGVlbUhpc3Ryb3lVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL2JlcmNoaW5rby90cmFuc2FjdGlvblwiO1xyXG52YXIgc2lnblVwVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS91c2VyL3JlZ2lzdGVyXCI7XHJcbnZhciBsb2JieUFQSSA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9nZXQtaW5mb1wiO1xyXG52YXIgZm9yZ2V0UGFzc1VSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9mb3Jnb3QtcGFzc3dvcmRcIjtcclxudmFyIGdhbWVDb2RlID0gXCI3NlwiO1xyXG5cclxudmFyIGdhbWVfdmVyc2lvbiA9IFwiMS4xLjBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JnZXRQYXNzVVJMKCl7XHJcbiAgICByZXR1cm4gZm9yZ2V0UGFzc1VSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZ25VcFVSTCgpe1xyXG4gICAgcmV0dXJuIHNpZ25VcFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvYmJ5QVBJKCl7XHJcbiAgICByZXR1cm4gbG9iYnlBUEk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRlZW1IaXN0b3J5VVJMKCl7XHJcbiAgICByZXR1cm4gcmVkZWVtSGlzdHJveVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVIaXN0b3J5VVJMKCl7XHJcbiAgICByZXR1cm4gZ2FtZUhpc3Ryb3lVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRlZW1VUkwoKXtcclxuICAgIHJldHVybiByZWRlZW1Qcml6ZVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXplTGlzdFVSTCgpe1xyXG4gICAgcmV0dXJuIHByaXplTGlzdFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVVJMKCl7XHJcbiAgICByZXR1cm4gbG9naW5VUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lQ29kZSh2YWx1ZSl7XHJcbiAgICBnYW1lQ29kZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChnYW1lQ29kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTb2NrZXRVUkwodmFsdWUpe1xyXG4gICAgc29ja2V0VVJMID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvY2tldFVSTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcGlVUkwodmFsdWUpe1xyXG4gICAgYXBpVVJMID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGFwaVVSTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lVmVyc2lvbigpe1xyXG4gICAgcmV0dXJuIGdhbWVfdmVyc2lvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvY2tldFVSTCgpe1xyXG4gICAgcmV0dXJuIHNvY2tldFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVVSTCgpe1xyXG4gICAgcmV0dXJuIGFwaVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVDb2RlKCl7XHJcbiAgICByZXR1cm4gZ2FtZUNvZGU7XHJcbn0iXX0=