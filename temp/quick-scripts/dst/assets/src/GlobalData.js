
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
exports.currentBetSlot = exports.api_url = exports.geoIP_url = exports.winMultiplier = exports.firstPrompt = exports.isEncrypt = exports.errorMessage = exports.ticket_id = exports.game_code = exports.settings = exports.isfullScreen = exports.access_token = exports.host_id = exports.finishGeneratingBalance = exports.finishGetData = exports.perfectScore = exports.consoScore = exports.platform = exports.currentBet = exports.isDemo = exports.isProduction = void 0;
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
var firstPrompt = false;
exports.firstPrompt = firstPrompt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNQcm9kdWN0aW9uIiwiaXNEZW1vIiwiY3VycmVudEJldCIsInBsYXRmb3JtIiwiY29uc29TY29yZSIsInBlcmZlY3RTY29yZSIsImZpbmlzaEdldERhdGEiLCJmaW5pc2hHZW5lcmF0aW5nQmFsYW5jZSIsImdldFNvY2tldCIsImhvc3RfaWQiLCJhY2Nlc3NfdG9rZW4iLCJpc2Z1bGxTY3JlZW4iLCJzZXRTb2NrZXQiLCJ2YWx1ZSIsImNjIiwibG9nIiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiY3VycmVuY3kiLCJleGl0X2J0biIsImdhbWVfb24iLCJnYW1lX3R5cGUiLCJndWVzdF9tb2RlIiwiaHlwZXJkcml2ZSIsImlzX2RlbW8iLCJpc19qYWNrcG90IiwiaXNyb3VuZGVkbnVtYmVyIiwiamFja3BvdCIsImxvYmJ5X3VybCIsInNvY2tldF91cmwiLCJzdGF0dXMiLCJ1c2VyX2lkIiwidXNlcm5hbWUiLCJnYW1lX2NvZGUiLCJ0aWNrZXRfaWQiLCJlcnJvck1lc3NhZ2UiLCJpc0VuY3J5cHQiLCJmaXJzdFByb21wdCIsIndpbk11bHRpcGxpZXIiLCJnZXRNdWx0aXBsaWVyIiwic2V0TXVsdGlwbGllciIsImdldEJldEFtb3VudCIsInNldEJldEFtb3VudCIsImdldEJldFNlbGVjdGlvbiIsInNldEJldFNlbGVjdGlvbiIsImdldFNvdW5kIiwic2V0U291bmQiLCJzZXRFZmZlY3RWb2x1bWUiLCJnZXRFZmZlY3RWb2x1bWUiLCJzZXRSb3RhdGVWb2x1bWUiLCJnZXRSb3RhdGVWb2x1bWUiLCJnZW9JUF91cmwiLCJhcGlfdXJsIiwiY3VycmVudEJldFNsb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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b0QsUUFBVCxHQUFtQjtBQUN0QixTQUFPbkQsS0FBUDtBQUNIOztBQUVNLFNBQVNvRCxRQUFULENBQWtCakMsS0FBbEIsRUFBd0I7QUFDM0JuQixFQUFBQSxLQUFLLEdBQUdtQixLQUFSO0FBQ0EsU0FBUW5CLEtBQVI7QUFDSDs7QUFFTSxTQUFTcUQsZUFBVCxDQUF5QmxDLEtBQXpCLEVBQStCO0FBQ2xDbEIsRUFBQUEsYUFBYSxHQUFHa0IsS0FBaEI7QUFDQSxTQUFRbEIsYUFBUjtBQUNIOztBQUVNLFNBQVNxRCxlQUFULEdBQTBCO0FBQzdCLFNBQU9yRCxhQUFQO0FBQ0g7O0FBR00sU0FBU3NELGVBQVQsQ0FBeUJwQyxLQUF6QixFQUErQjtBQUNsQ2pCLEVBQUFBLGFBQWEsR0FBR2lCLEtBQWhCO0FBQ0EsU0FBUWpCLGFBQVI7QUFDSDs7QUFFTSxTQUFTc0QsZUFBVCxHQUEwQjtBQUM3QixTQUFPdEQsYUFBUDtBQUNIOztBQUVNLElBQUl1RCxTQUFKOztBQUNBLElBQUlDLE9BQUo7O0FBRUEsSUFBSUMsY0FBSiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJldFNlbGVjdGlvbiA9MDtcclxudmFyIHNvdW5kID0gMTtcclxudmFyIGVmZmVjdF92b2x1bWUgPSAxO1xyXG52YXIgcm90YXRlX3ZvbHVtZSA9IDE7XHJcbnZhciBiZXRBbW91bnQgPSAwO1xyXG52YXIgbXVsdGlwbGllciA9IDA7XHJcbnZhciBzb2NrZXQgPSBudWxsO1xyXG5leHBvcnQgdmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGlzRGVtbz1mYWxzZTtcclxuZXhwb3J0IHZhciBjdXJyZW50QmV0PTA7XHJcbmV4cG9ydCB2YXIgcGxhdGZvcm0gPTA7XHJcbmV4cG9ydCB2YXIgIGNvbnNvU2NvcmUgPSAwO1xyXG5leHBvcnQgdmFyIHBlcmZlY3RTY29yZSA9MDtcclxuZXhwb3J0IHZhciBmaW5pc2hHZXREYXRhPSBmYWxzZTtcclxuZXhwb3J0IHZhciBmaW5pc2hHZW5lcmF0aW5nQmFsYW5jZT1mYWxzZTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvY2tldCgpe1xyXG4gICAgcmV0dXJuIHNvY2tldDtcclxufVxyXG5leHBvcnQgdmFyIGhvc3RfaWQgPTA7XHJcbmV4cG9ydCB2YXIgYWNjZXNzX3Rva2VuID0wO1xyXG5leHBvcnQgdmFyIGlzZnVsbFNjcmVlbj0wO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U29ja2V0KHZhbHVlKXtcclxuICAgIGNjLmxvZyhcIlNldHRpbmcgc29ja2V0XCIpO1xyXG4gICAgc29ja2V0ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvY2tldCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICBiYWxhbmNlIDogOTk5OTk5OTk5OTk5OTk5OSxcclxuICAgIGN1cnJlbmN5IDogXCJNWVJcIixcclxuICAgIGV4aXRfYnRuIDogMCxcclxuICAgIGdhbWVfb24gOiAwLFxyXG4gICAgZ2FtZV90eXBlIDogXCJkc2ctMDA2XCIsXHJcbiAgICBndWVzdF9tb2RlIDogMCxcclxuICAgIGh5cGVyZHJpdmU6IFwiXCIsXHJcbiAgICBpc19kZW1vOiAwLFxyXG4gICAgaXNfamFja3BvdDogMCxcclxuICAgIGlzcm91bmRlZG51bWJlcjogMCxcclxuICAgIGphY2twb3Q6IDAsXHJcbiAgICBsb2JieV91cmw6IFwiXCIsXHJcbiAgICBzb2NrZXRfdXJsOiBcImh0dHBzOi8vc29ja2V0LWFwb2xsby52ZWxhY2hpcC5jb21cIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIHVzZXJfaWQ6IFwiXCIsXHJcbiAgICB1c2VybmFtZTogXCJcIlxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdhbWVfY29kZSA9IDIzO1xyXG5leHBvcnQgdmFyIHRpY2tldF9pZCA9IC0xO1xyXG5cclxuZXhwb3J0IHZhciBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5leHBvcnQgdmFyIGlzRW5jcnlwdCA9IHRydWU7XHJcbmV4cG9ydCB2YXIgZmlyc3RQcm9tcHQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB2YXIgd2luTXVsdGlwbGllciA9IFs0MCwzOCwzNiwzNCwzMl07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aXBsaWVyKCl7XHJcbiAgICByZXR1cm4gbXVsdGlwbGllcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE11bHRpcGxpZXIodmFsdWUpe1xyXG4gICAgbXVsdGlwbGllciA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChtdWx0aXBsaWVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmV0QW1vdW50KCl7XHJcbiAgICByZXR1cm4gYmV0QW1vdW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCZXRBbW91bnQodmFsdWUpe1xyXG4gICAgYmV0QW1vdW50ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGJldEFtb3VudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJldFNlbGVjdGlvbigpe1xyXG4gICAgcmV0dXJuIGJldFNlbGVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJldFNlbGVjdGlvbih2YWx1ZSl7XHJcbiAgICBiZXRTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgIHJldHVybiAoYmV0U2VsZWN0aW9uKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VuZCgpe1xyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U291bmQodmFsdWUpe1xyXG4gICAgc291bmQgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoc291bmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWZmZWN0Vm9sdW1lKHZhbHVlKXtcclxuICAgIGVmZmVjdF92b2x1bWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoZWZmZWN0X3ZvbHVtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RWb2x1bWUoKXtcclxuICAgIHJldHVybiBlZmZlY3Rfdm9sdW1lO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvdGF0ZVZvbHVtZSh2YWx1ZSl7XHJcbiAgICByb3RhdGVfdm9sdW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHJvdGF0ZV92b2x1bWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRlVm9sdW1lKCl7XHJcbiAgICByZXR1cm4gcm90YXRlX3ZvbHVtZTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBnZW9JUF91cmw7XHJcbmV4cG9ydCB2YXIgYXBpX3VybDtcclxuXHJcbmV4cG9ydCB2YXIgY3VycmVudEJldFNsb3Q7Il19