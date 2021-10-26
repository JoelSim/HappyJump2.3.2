
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

exports.__esModule = true;
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
exports.currentBetSlot = exports.api_url = exports.geoIP_url = exports.winMultiplier = exports.firstPrompt = exports.isEncrypt = exports.errorMessage = exports.ticket_id = exports.game_code = exports.settings = exports.isfullScreen = exports.commonErrorMessage = exports.h5_app = exports.is_promotion = exports.access_token = exports.host_id = exports.finishGeneratingBalance = exports.finishGetData = exports.perfectScore = exports.consoScore = exports.platform = exports.currentBet = exports.isDemo = exports.isProduction = exports.kickMessage = exports.isKicked = void 0;
var betSelection = 0;
var sound = 1;
var effect_volume = 1;
var rotate_volume = 1;
var betAmount = 0;
var multiplier = 0;
var socket = null;
var isKicked = false;
exports.isKicked = isKicked;
var kickMessage = "";
exports.kickMessage = kickMessage;
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
var is_promotion = null;
exports.is_promotion = is_promotion;
var h5_app = null;
exports.h5_app = h5_app;
var commonErrorMessage = null;
exports.commonErrorMessage = commonErrorMessage;
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
var ticket_id = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSIsImlzUHJvZHVjdGlvbiIsImlzRGVtbyIsImN1cnJlbnRCZXQiLCJwbGF0Zm9ybSIsImNvbnNvU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJmaW5pc2hHZXREYXRhIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiLCJnZXRTb2NrZXQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwiaXNfcHJvbW90aW9uIiwiaDVfYXBwIiwiY29tbW9uRXJyb3JNZXNzYWdlIiwiaXNmdWxsU2NyZWVuIiwic2V0U29ja2V0IiwidmFsdWUiLCJjYyIsImxvZyIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbmN5IiwiZXhpdF9idG4iLCJnYW1lX29uIiwiZ2FtZV90eXBlIiwiZ3Vlc3RfbW9kZSIsImh5cGVyZHJpdmUiLCJpc19kZW1vIiwiaXNfamFja3BvdCIsImlzcm91bmRlZG51bWJlciIsImphY2twb3QiLCJsb2JieV91cmwiLCJzb2NrZXRfdXJsIiwic3RhdHVzIiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZ2FtZV9jb2RlIiwidGlja2V0X2lkIiwiZXJyb3JNZXNzYWdlIiwiaXNFbmNyeXB0IiwiZmlyc3RQcm9tcHQiLCJ3aW5NdWx0aXBsaWVyIiwiZ2V0TXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJnZXRCZXRBbW91bnQiLCJzZXRCZXRBbW91bnQiLCJnZXRCZXRTZWxlY3Rpb24iLCJzZXRCZXRTZWxlY3Rpb24iLCJnZXRTb3VuZCIsInNldFNvdW5kIiwic2V0RWZmZWN0Vm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic2V0Um90YXRlVm9sdW1lIiwiZ2V0Um90YXRlVm9sdW1lIiwiZ2VvSVBf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LEVBQTRCO0FBQy9CckIsRUFBQUEsU0FBUyxHQUFHcUIsS0FBWjtBQUNBLFNBQVFyQixTQUFSO0FBQ0g7O0FBQ00sU0FBU21ELGVBQVQsR0FBMEI7QUFDN0IsU0FBT3ZELFlBQVA7QUFDSDs7QUFFTSxTQUFTd0QsZUFBVCxDQUF5Qi9CLEtBQXpCLEVBQStCO0FBQ2xDekIsRUFBQUEsWUFBWSxHQUFHeUIsS0FBZjtBQUNBLFNBQVF6QixZQUFSO0FBQ0g7O0FBR00sU0FBU3lELFFBQVQsR0FBbUI7QUFDdEIsU0FBT3hELEtBQVA7QUFDSDs7QUFFTSxTQUFTeUQsUUFBVCxDQUFrQmpDLEtBQWxCLEVBQXdCO0FBQzNCeEIsRUFBQUEsS0FBSyxHQUFHd0IsS0FBUjtBQUNBLFNBQVF4QixLQUFSO0FBQ0g7O0FBRU0sU0FBUzBELGVBQVQsQ0FBeUJsQyxLQUF6QixFQUErQjtBQUNsQ3ZCLEVBQUFBLGFBQWEsR0FBR3VCLEtBQWhCO0FBQ0EsU0FBUXZCLGFBQVI7QUFDSDs7QUFFTSxTQUFTMEQsZUFBVCxHQUEwQjtBQUM3QixTQUFPMUQsYUFBUDtBQUNIOztBQUdNLFNBQVMyRCxlQUFULENBQXlCcEMsS0FBekIsRUFBK0I7QUFDbEN0QixFQUFBQSxhQUFhLEdBQUdzQixLQUFoQjtBQUNBLFNBQVF0QixhQUFSO0FBQ0g7O0FBRU0sU0FBUzJELGVBQVQsR0FBMEI7QUFDN0IsU0FBTzNELGFBQVA7QUFDSDs7QUFFTSxJQUFJNEQsU0FBSjs7QUFDQSxJQUFJQyxPQUFKOztBQUVBLElBQUlDLGNBQUoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiZXRTZWxlY3Rpb24gPTA7XHJcbnZhciBzb3VuZCA9IDE7XHJcbnZhciBlZmZlY3Rfdm9sdW1lID0gMTtcclxudmFyIHJvdGF0ZV92b2x1bWUgPSAxO1xyXG52YXIgYmV0QW1vdW50ID0gMDtcclxudmFyIG11bHRpcGxpZXIgPSAwO1xyXG52YXIgc29ja2V0ID0gbnVsbDtcclxuZXhwb3J0IHZhciBpc0tpY2tlZCA9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGtpY2tNZXNzYWdlID0gXCJcIjtcclxuZXhwb3J0IHZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZTtcclxuZXhwb3J0IHZhciBpc0RlbW89ZmFsc2U7XHJcbmV4cG9ydCB2YXIgY3VycmVudEJldD0wO1xyXG5leHBvcnQgdmFyIHBsYXRmb3JtID0wO1xyXG5leHBvcnQgdmFyICBjb25zb1Njb3JlID0gMDtcclxuZXhwb3J0IHZhciBwZXJmZWN0U2NvcmUgPTA7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2V0RGF0YT0gZmFsc2U7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2VuZXJhdGluZ0JhbGFuY2U9ZmFsc2U7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NrZXQoKXtcclxuICAgIHJldHVybiBzb2NrZXQ7XHJcbn1cclxuZXhwb3J0IHZhciBob3N0X2lkID0wO1xyXG5leHBvcnQgdmFyIGFjY2Vzc190b2tlbiA9MDtcclxuZXhwb3J0IHZhciBpc19wcm9tb3Rpb24gPSBudWxsO1xyXG5leHBvcnQgdmFyIGg1X2FwcCA9IG51bGw7XHJcbmV4cG9ydCB2YXIgY29tbW9uRXJyb3JNZXNzYWdlID0gbnVsbDtcclxuZXhwb3J0IHZhciBpc2Z1bGxTY3JlZW49MDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvY2tldCh2YWx1ZSl7XHJcbiAgICBjYy5sb2coXCJTZXR0aW5nIHNvY2tldFwiKTtcclxuICAgIHNvY2tldCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChzb2NrZXQpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgYmFsYW5jZSA6IDk5OTk5OTk5OTk5OTk5OTksXHJcbiAgICBjdXJyZW5jeSA6IFwiTVlSXCIsXHJcbiAgICBleGl0X2J0biA6IDAsXHJcbiAgICBnYW1lX29uIDogMCxcclxuICAgIGdhbWVfdHlwZSA6IFwiZHNnLTAwNlwiLFxyXG4gICAgZ3Vlc3RfbW9kZSA6IDAsXHJcbiAgICBoeXBlcmRyaXZlOiBcIlwiLFxyXG4gICAgaXNfZGVtbzogMCxcclxuICAgIGlzX2phY2twb3Q6IDAsXHJcbiAgICBpc3JvdW5kZWRudW1iZXI6IDAsXHJcbiAgICBqYWNrcG90OiAwLFxyXG4gICAgbG9iYnlfdXJsOiBcIlwiLFxyXG4gICAgc29ja2V0X3VybDogXCJodHRwczovL3NvY2tldC1hcG9sbG8udmVsYWNoaXAuY29tXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB1c2VyX2lkOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IHZhciBnYW1lX2NvZGUgPSAyMztcclxuZXhwb3J0IHZhciB0aWNrZXRfaWQgPSBudWxsO1xyXG5cclxuZXhwb3J0IHZhciBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5leHBvcnQgdmFyIGlzRW5jcnlwdCA9IHRydWU7XHJcbmV4cG9ydCB2YXIgZmlyc3RQcm9tcHQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB2YXIgd2luTXVsdGlwbGllciA9IFs0MCwzOCwzNiwzNCwzMl07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aXBsaWVyKCl7XHJcbiAgICByZXR1cm4gbXVsdGlwbGllcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE11bHRpcGxpZXIodmFsdWUpe1xyXG4gICAgbXVsdGlwbGllciA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChtdWx0aXBsaWVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmV0QW1vdW50KCl7XHJcbiAgICByZXR1cm4gYmV0QW1vdW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCZXRBbW91bnQodmFsdWUpe1xyXG4gICAgYmV0QW1vdW50ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGJldEFtb3VudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJldFNlbGVjdGlvbigpe1xyXG4gICAgcmV0dXJuIGJldFNlbGVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJldFNlbGVjdGlvbih2YWx1ZSl7XHJcbiAgICBiZXRTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgIHJldHVybiAoYmV0U2VsZWN0aW9uKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VuZCgpe1xyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U291bmQodmFsdWUpe1xyXG4gICAgc291bmQgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoc291bmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWZmZWN0Vm9sdW1lKHZhbHVlKXtcclxuICAgIGVmZmVjdF92b2x1bWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoZWZmZWN0X3ZvbHVtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RWb2x1bWUoKXtcclxuICAgIHJldHVybiBlZmZlY3Rfdm9sdW1lO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvdGF0ZVZvbHVtZSh2YWx1ZSl7XHJcbiAgICByb3RhdGVfdm9sdW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHJvdGF0ZV92b2x1bWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRlVm9sdW1lKCl7XHJcbiAgICByZXR1cm4gcm90YXRlX3ZvbHVtZTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBnZW9JUF91cmw7XHJcbmV4cG9ydCB2YXIgYXBpX3VybDtcclxuXHJcbmV4cG9ydCB2YXIgY3VycmVudEJldFNsb3Q7Il19