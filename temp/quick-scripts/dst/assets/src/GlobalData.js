
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
exports.currentBetSlot = exports.api_url = exports.geoIP_url = exports.winMultiplier = exports.firstPrompt = exports.isEncrypt = exports.errorMessage = exports.ticket_id = exports.game_code = exports.settings = exports.isfullScreen = exports.access_token = exports.host_id = exports.finishGeneratingBalance = exports.finishGetData = exports.perfectScore = exports.consoScore = exports.platform = exports.currentBet = exports.isDemo = exports.isProduction = exports.kickMessage = exports.isKicked = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSIsImlzUHJvZHVjdGlvbiIsImlzRGVtbyIsImN1cnJlbnRCZXQiLCJwbGF0Zm9ybSIsImNvbnNvU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJmaW5pc2hHZXREYXRhIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiLCJnZXRTb2NrZXQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwiaXNmdWxsU2NyZWVuIiwic2V0U29ja2V0IiwidmFsdWUiLCJjYyIsImxvZyIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbmN5IiwiZXhpdF9idG4iLCJnYW1lX29uIiwiZ2FtZV90eXBlIiwiZ3Vlc3RfbW9kZSIsImh5cGVyZHJpdmUiLCJpc19kZW1vIiwiaXNfamFja3BvdCIsImlzcm91bmRlZG51bWJlciIsImphY2twb3QiLCJsb2JieV91cmwiLCJzb2NrZXRfdXJsIiwic3RhdHVzIiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZ2FtZV9jb2RlIiwidGlja2V0X2lkIiwiZXJyb3JNZXNzYWdlIiwiaXNFbmNyeXB0IiwiZmlyc3RQcm9tcHQiLCJ3aW5NdWx0aXBsaWVyIiwiZ2V0TXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJnZXRCZXRBbW91bnQiLCJzZXRCZXRBbW91bnQiLCJnZXRCZXRTZWxlY3Rpb24iLCJzZXRCZXRTZWxlY3Rpb24iLCJnZXRTb3VuZCIsInNldFNvdW5kIiwic2V0RWZmZWN0Vm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic2V0Um90YXRlVm9sdW1lIiwiZ2V0Um90YXRlVm9sdW1lIiwiZ2VvSVBfdXJsIiwiYXBpX3VybCIsImN1cnJlbnRCZXRTbG90Il0sIm1hcHBpbmdzIjoi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VCxDQUF5Qi9CLEtBQXpCLEVBQStCO0FBQ2xDdEIsRUFBQUEsWUFBWSxHQUFHc0IsS0FBZjtBQUNBLFNBQVF0QixZQUFSO0FBQ0g7O0FBR00sU0FBU3NELFFBQVQsR0FBbUI7QUFDdEIsU0FBT3JELEtBQVA7QUFDSDs7QUFFTSxTQUFTc0QsUUFBVCxDQUFrQmpDLEtBQWxCLEVBQXdCO0FBQzNCckIsRUFBQUEsS0FBSyxHQUFHcUIsS0FBUjtBQUNBLFNBQVFyQixLQUFSO0FBQ0g7O0FBRU0sU0FBU3VELGVBQVQsQ0FBeUJsQyxLQUF6QixFQUErQjtBQUNsQ3BCLEVBQUFBLGFBQWEsR0FBR29CLEtBQWhCO0FBQ0EsU0FBUXBCLGFBQVI7QUFDSDs7QUFFTSxTQUFTdUQsZUFBVCxHQUEwQjtBQUM3QixTQUFPdkQsYUFBUDtBQUNIOztBQUdNLFNBQVN3RCxlQUFULENBQXlCcEMsS0FBekIsRUFBK0I7QUFDbENuQixFQUFBQSxhQUFhLEdBQUdtQixLQUFoQjtBQUNBLFNBQVFuQixhQUFSO0FBQ0g7O0FBRU0sU0FBU3dELGVBQVQsR0FBMEI7QUFDN0IsU0FBT3hELGFBQVA7QUFDSDs7QUFFTSxJQUFJeUQsU0FBSjs7QUFDQSxJQUFJQyxPQUFKOztBQUVBLElBQUlDLGNBQUoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiZXRTZWxlY3Rpb24gPTA7XHJcbnZhciBzb3VuZCA9IDE7XHJcbnZhciBlZmZlY3Rfdm9sdW1lID0gMTtcclxudmFyIHJvdGF0ZV92b2x1bWUgPSAxO1xyXG52YXIgYmV0QW1vdW50ID0gMDtcclxudmFyIG11bHRpcGxpZXIgPSAwO1xyXG52YXIgc29ja2V0ID0gbnVsbDtcclxuZXhwb3J0IHZhciBpc0tpY2tlZCA9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGtpY2tNZXNzYWdlID0gXCJcIjtcclxuZXhwb3J0IHZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZTtcclxuZXhwb3J0IHZhciBpc0RlbW89ZmFsc2U7XHJcbmV4cG9ydCB2YXIgY3VycmVudEJldD0wO1xyXG5leHBvcnQgdmFyIHBsYXRmb3JtID0wO1xyXG5leHBvcnQgdmFyICBjb25zb1Njb3JlID0gMDtcclxuZXhwb3J0IHZhciBwZXJmZWN0U2NvcmUgPTA7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2V0RGF0YT0gZmFsc2U7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2VuZXJhdGluZ0JhbGFuY2U9ZmFsc2U7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NrZXQoKXtcclxuICAgIHJldHVybiBzb2NrZXQ7XHJcbn1cclxuZXhwb3J0IHZhciBob3N0X2lkID0wO1xyXG5leHBvcnQgdmFyIGFjY2Vzc190b2tlbiA9MDtcclxuZXhwb3J0IHZhciBpc2Z1bGxTY3JlZW49MDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvY2tldCh2YWx1ZSl7XHJcbiAgICBjYy5sb2coXCJTZXR0aW5nIHNvY2tldFwiKTtcclxuICAgIHNvY2tldCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChzb2NrZXQpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgYmFsYW5jZSA6IDk5OTk5OTk5OTk5OTk5OTksXHJcbiAgICBjdXJyZW5jeSA6IFwiTVlSXCIsXHJcbiAgICBleGl0X2J0biA6IDAsXHJcbiAgICBnYW1lX29uIDogMCxcclxuICAgIGdhbWVfdHlwZSA6IFwiZHNnLTAwNlwiLFxyXG4gICAgZ3Vlc3RfbW9kZSA6IDAsXHJcbiAgICBoeXBlcmRyaXZlOiBcIlwiLFxyXG4gICAgaXNfZGVtbzogMCxcclxuICAgIGlzX2phY2twb3Q6IDAsXHJcbiAgICBpc3JvdW5kZWRudW1iZXI6IDAsXHJcbiAgICBqYWNrcG90OiAwLFxyXG4gICAgbG9iYnlfdXJsOiBcIlwiLFxyXG4gICAgc29ja2V0X3VybDogXCJodHRwczovL3NvY2tldC1hcG9sbG8udmVsYWNoaXAuY29tXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB1c2VyX2lkOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IHZhciBnYW1lX2NvZGUgPSAyMztcclxuZXhwb3J0IHZhciB0aWNrZXRfaWQgPSAtMTtcclxuXHJcbmV4cG9ydCB2YXIgZXJyb3JNZXNzYWdlID0gXCJcIjtcclxuZXhwb3J0IHZhciBpc0VuY3J5cHQgPSB0cnVlO1xyXG5leHBvcnQgdmFyIGZpcnN0UHJvbXB0ID0gZmFsc2U7XHJcblxyXG5leHBvcnQgdmFyIHdpbk11bHRpcGxpZXIgPSBbNDAsMzgsMzYsMzQsMzJdO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlwbGllcigpe1xyXG4gICAgcmV0dXJuIG11bHRpcGxpZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNdWx0aXBsaWVyKHZhbHVlKXtcclxuICAgIG11bHRpcGxpZXIgPSB2YWx1ZTtcclxuICAgIHJldHVybiAobXVsdGlwbGllcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJldEFtb3VudCgpe1xyXG4gICAgcmV0dXJuIGJldEFtb3VudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmV0QW1vdW50KHZhbHVlKXtcclxuICAgIGJldEFtb3VudCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChiZXRBbW91bnQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXRTZWxlY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXRTZWxlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCZXRTZWxlY3Rpb24odmFsdWUpe1xyXG4gICAgYmV0U2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGJldFNlbGVjdGlvbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291bmQoKXtcclxuICAgIHJldHVybiBzb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdW5kKHZhbHVlKXtcclxuICAgIHNvdW5kID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVmZmVjdFZvbHVtZSh2YWx1ZSl7XHJcbiAgICBlZmZlY3Rfdm9sdW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGVmZmVjdF92b2x1bWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0Vm9sdW1lKCl7XHJcbiAgICByZXR1cm4gZWZmZWN0X3ZvbHVtZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSb3RhdGVWb2x1bWUodmFsdWUpe1xyXG4gICAgcm90YXRlX3ZvbHVtZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChyb3RhdGVfdm9sdW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0ZVZvbHVtZSgpe1xyXG4gICAgcmV0dXJuIHJvdGF0ZV92b2x1bWU7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2VvSVBfdXJsO1xyXG5leHBvcnQgdmFyIGFwaV91cmw7XHJcblxyXG5leHBvcnQgdmFyIGN1cnJlbnRCZXRTbG90OyJdfQ==