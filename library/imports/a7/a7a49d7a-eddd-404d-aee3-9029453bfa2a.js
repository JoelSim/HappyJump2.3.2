"use strict";
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