
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/GlobalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd012asB0i5IPoYt5D2ZBNAR', 'GlobalData');
// src/GlobalData.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSocket = getSocket;
exports.setSocket = setSocket;
exports.getMultiplier = getMultiplier;
exports.setMultiplier = setMultiplier;
exports.getBetAmount = getBetAmount;
exports.setBetAmount = setBetAmount;
exports.getBetSelection = getBetSelection;
exports.setBetSelection = setBetSelection;
exports.getSound = getSound;
exports.setSound = setSound;
exports.setEffectVolume = setEffectVolume;
exports.getEffectVolume = getEffectVolume;
exports.setRotateVolume = setRotateVolume;
exports.getRotateVolume = getRotateVolume;
exports.currentBetSlot = exports.api_url = exports.geoIP_url = exports.winMultiplier = exports.isEncrypt = exports.errorMessage = exports.ticket_id = exports.game_code = exports.settings = exports.isfullScreen = exports.access_token = exports.host_id = exports.finishGeneratingBalance = exports.finishGetData = exports.perfectScore = exports.consoScore = exports.platform = exports.currentBet = exports.isDemo = exports.isProduction = void 0;
var betSelection = 0;
var sound = 1;
var effect_volume = 1;
var rotate_volume = 1;
var betAmount = 0;
var multiplier = 0;
var socket = null;
var isProduction = false;
exports.isProduction = isProduction;
var isDemo = false;
exports.isDemo = isDemo;
var currentBet = 0;
exports.currentBet = currentBet;
var platform = 0;
exports.platform = platform;
var consoScore = 0;
exports.consoScore = consoScore;
var perfectScore = 0;
exports.perfectScore = perfectScore;
var finishGetData = false;
exports.finishGetData = finishGetData;
var finishGeneratingBalance = false;
exports.finishGeneratingBalance = finishGeneratingBalance;

function getSocket() {
  return socket;
}

var host_id = 0;
exports.host_id = host_id;
var access_token = 0;
exports.access_token = access_token;
var isfullScreen = 0;
exports.isfullScreen = isfullScreen;

function setSocket(value) {
  cc.log("Setting socket");
  socket = value;
  return socket;
}

var settings = {
  balance: 9999999999999999,
  currency: "MYR",
  exit_btn: 0,
  game_on: 0,
  game_type: "dsg-006",
  guest_mode: 0,
  hyperdrive: "",
  is_demo: 0,
  is_jackpot: 0,
  isroundednumber: 0,
  jackpot: 0,
  lobby_url: "",
  socket_url: "https://socket-apollo.velachip.com",
  status: "",
  user_id: "",
  username: ""
};
exports.settings = settings;
var game_code = 23;
exports.game_code = game_code;
var ticket_id = -1;
exports.ticket_id = ticket_id;
var errorMessage = "";
exports.errorMessage = errorMessage;
var isEncrypt = true;
exports.isEncrypt = isEncrypt;
var winMultiplier = [40, 38, 36, 34, 32];
exports.winMultiplier = winMultiplier;

function getMultiplier() {
  return multiplier;
}

function setMultiplier(value) {
  multiplier = value;
  return multiplier;
}

function getBetAmount() {
  return betAmount;
}

function setBetAmount(value) {
  betAmount = value;
  return betAmount;
}

function getBetSelection() {
  return betSelection;
}

function setBetSelection(value) {
  betSelection = value;
  return betSelection;
}

function getSound() {
  return sound;
}

function setSound(value) {
  sound = value;
  return sound;
}

function setEffectVolume(value) {
  effect_volume = value;
  return effect_volume;
}

function getEffectVolume() {
  return effect_volume;
}

function setRotateVolume(value) {
  rotate_volume = value;
  return rotate_volume;
}

function getRotateVolume() {
  return rotate_volume;
}

var geoIP_url;
exports.geoIP_url = geoIP_url;
var api_url;
exports.api_url = api_url;
var currentBetSlot;
exports.currentBetSlot = currentBetSlot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNQcm9kdWN0aW9uIiwiaXNEZW1vIiwiY3VycmVudEJldCIsInBsYXRmb3JtIiwiY29uc29TY29yZSIsInBlcmZlY3RTY29yZSIsImZpbmlzaEdldERhdGEiLCJmaW5pc2hHZW5lcmF0aW5nQmFsYW5jZSIsImdldFNvY2tldCIsImhvc3RfaWQiLCJhY2Nlc3NfdG9rZW4iLCJpc2Z1bGxTY3JlZW4iLCJzZXRTb2NrZXQiLCJ2YWx1ZSIsImNjIiwibG9nIiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiY3VycmVuY3kiLCJleGl0X2J0biIsImdhbWVfb24iLCJnYW1lX3R5cGUiLCJndWVzdF9tb2RlIiwiaHlwZXJkcml2ZSIsImlzX2RlbW8iLCJpc19qYWNrcG90IiwiaXNyb3VuZGVkbnVtYmVyIiwiamFja3BvdCIsImxvYmJ5X3VybCIsInNvY2tldF91cmwiLCJzdGF0dXMiLCJ1c2VyX2lkIiwidXNlcm5hbWUiLCJnYW1lX2NvZGUiLCJ0aWNrZXRfaWQiLCJlcnJvck1lc3NhZ2UiLCJpc0VuY3J5cHQiLCJ3aW5NdWx0aXBsaWVyIiwiZ2V0TXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJnZXRCZXRBbW91bnQiLCJzZXRCZXRBbW91bnQiLCJnZXRCZXRTZWxlY3Rpb24iLCJzZXRCZXRTZWxlY3Rpb24iLCJnZXRTb3VuZCIsInNldFNvdW5kIiwic2V0RWZmZWN0Vm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic2V0Um90YXRlVm9sdW1lIiwiZ2V0Um90YXRlVm9sdW1lIiwiZ2VvSVBfdXJsIiwiYXBpX3VybCIsImN1cnJlbnRCZXRTbG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFB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LFNBQVNtRCxRQUFULENBQWtCaEMsS0FBbEIsRUFBd0I7QUFDM0JuQixFQUFBQSxLQUFLLEdBQUdtQixLQUFSO0FBQ0EsU0FBUW5CLEtBQVI7QUFDSDs7QUFFTSxTQUFTb0QsZUFBVCxDQUF5QmpDLEtBQXpCLEVBQStCO0FBQ2xDbEIsRUFBQUEsYUFBYSxHQUFHa0IsS0FBaEI7QUFDQSxTQUFRbEIsYUFBUjtBQUNIOztBQUVNLFNBQVNvRCxlQUFULEdBQTBCO0FBQzdCLFNBQU9wRCxhQUFQO0FBQ0g7O0FBR00sU0FBU3FELGVBQVQsQ0FBeUJuQyxLQUF6QixFQUErQjtBQUNsQ2pCLEVBQUFBLGFBQWEsR0FBR2lCLEtBQWhCO0FBQ0EsU0FBUWpCLGFBQVI7QUFDSDs7QUFFTSxTQUFTcUQsZUFBVCxHQUEwQjtBQUM3QixTQUFPckQsYUFBUDtBQUNIOztBQUVNLElBQUlzRCxTQUFKOztBQUNBLElBQUlDLE9BQUo7O0FBRUEsSUFBSUMsY0FBSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJldFNlbGVjdGlvbiA9MDtcclxudmFyIHNvdW5kID0gMTtcclxudmFyIGVmZmVjdF92b2x1bWUgPSAxO1xyXG52YXIgcm90YXRlX3ZvbHVtZSA9IDE7XHJcbnZhciBiZXRBbW91bnQgPSAwO1xyXG52YXIgbXVsdGlwbGllciA9IDA7XHJcbnZhciBzb2NrZXQgPSBudWxsO1xyXG5leHBvcnQgdmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGlzRGVtbz1mYWxzZTtcclxuZXhwb3J0IHZhciBjdXJyZW50QmV0PTA7XHJcbmV4cG9ydCB2YXIgcGxhdGZvcm0gPTA7XHJcbmV4cG9ydCB2YXIgIGNvbnNvU2NvcmUgPSAwO1xyXG5leHBvcnQgdmFyIHBlcmZlY3RTY29yZSA9MDtcclxuZXhwb3J0IHZhciBmaW5pc2hHZXREYXRhPSBmYWxzZTtcclxuZXhwb3J0IHZhciBmaW5pc2hHZW5lcmF0aW5nQmFsYW5jZT1mYWxzZTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvY2tldCgpe1xyXG4gICAgcmV0dXJuIHNvY2tldDtcclxufVxyXG5leHBvcnQgdmFyIGhvc3RfaWQgPTA7XHJcbmV4cG9ydCB2YXIgYWNjZXNzX3Rva2VuID0wO1xyXG5leHBvcnQgdmFyIGlzZnVsbFNjcmVlbj0wO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U29ja2V0KHZhbHVlKXtcclxuICAgIGNjLmxvZyhcIlNldHRpbmcgc29ja2V0XCIpO1xyXG4gICAgc29ja2V0ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvY2tldCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICBiYWxhbmNlIDogOTk5OTk5OTk5OTk5OTk5OSxcclxuICAgIGN1cnJlbmN5IDogXCJNWVJcIixcclxuICAgIGV4aXRfYnRuIDogMCxcclxuICAgIGdhbWVfb24gOiAwLFxyXG4gICAgZ2FtZV90eXBlIDogXCJkc2ctMDA2XCIsXHJcbiAgICBndWVzdF9tb2RlIDogMCxcclxuICAgIGh5cGVyZHJpdmU6IFwiXCIsXHJcbiAgICBpc19kZW1vOiAwLFxyXG4gICAgaXNfamFja3BvdDogMCxcclxuICAgIGlzcm91bmRlZG51bWJlcjogMCxcclxuICAgIGphY2twb3Q6IDAsXHJcbiAgICBsb2JieV91cmw6IFwiXCIsXHJcbiAgICBzb2NrZXRfdXJsOiBcImh0dHBzOi8vc29ja2V0LWFwb2xsby52ZWxhY2hpcC5jb21cIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIHVzZXJfaWQ6IFwiXCIsXHJcbiAgICB1c2VybmFtZTogXCJcIlxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdhbWVfY29kZSA9IDIzO1xyXG5leHBvcnQgdmFyIHRpY2tldF9pZCA9IC0xO1xyXG5cclxuZXhwb3J0IHZhciBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5leHBvcnQgdmFyIGlzRW5jcnlwdCA9IHRydWU7XHJcblxyXG5leHBvcnQgdmFyIHdpbk11bHRpcGxpZXIgPSBbNDAsMzgsMzYsMzQsMzJdO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlwbGllcigpe1xyXG4gICAgcmV0dXJuIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNdWx0aXBsaWVyKHZhbHVlKXtcclxuICAgIG11bHRpcGxpZXIgPSB2YWx1ZTtcclxuICAgIHJldHVybiAobXVsdGlwbGllcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJldEFtb3VudCgpe1xyXG4gICAgcmV0dXJuIGJldEFtb3VudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmV0QW1vdW50KHZhbHVlKXtcclxuICAgIGJldEFtb3VudCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChiZXRBbW91bnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXRTZWxlY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXRTZWxlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCZXRTZWxlY3Rpb24odmFsdWUpe1xyXG4gICAgYmV0U2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGJldFNlbGVjdGlvbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291bmQoKXtcclxuICAgIHJldHVybiBzb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdW5kKHZhbHVlKXtcclxuICAgIHNvdW5kID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVmZmVjdFZvbHVtZSh2YWx1ZSl7XHJcbiAgICBlZmZlY3Rfdm9sdW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGVmZmVjdF92b2x1bWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0Vm9sdW1lKCl7XHJcbiAgICByZXR1cm4gZWZmZWN0X3ZvbHVtZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSb3RhdGVWb2x1bWUodmFsdWUpe1xyXG4gICAgcm90YXRlX3ZvbHVtZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChyb3RhdGVfdm9sdW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0ZVZvbHVtZSgpe1xyXG4gICAgcmV0dXJuIHJvdGF0ZV92b2x1bWU7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2VvSVBfdXJsO1xyXG5leHBvcnQgdmFyIGFwaV91cmw7XHJcblxyXG5leHBvcnQgdmFyIGN1cnJlbnRCZXRTbG90OyJdfQ==