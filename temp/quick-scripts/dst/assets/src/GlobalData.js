
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSIsImlzUHJvZHVjdGlvbiIsImlzRGVtbyIsImN1cnJlbnRCZXQiLCJwbGF0Zm9ybSIsImNvbnNvU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJmaW5pc2hHZXREYXRhIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiLCJnZXRTb2NrZXQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwiaXNmdWxsU2NyZWVuIiwic2V0U29ja2V0IiwidmFsdWUiLCJjYyIsImxvZyIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbmN5IiwiZXhpdF9idG4iLCJnYW1lX29uIiwiZ2FtZV90eXBlIiwiZ3Vlc3RfbW9kZSIsImh5cGVyZHJpdmUiLCJpc19kZW1vIiwiaXNfamFja3BvdCIsImlzcm91bmRlZG51bWJlciIsImphY2twb3QiLCJsb2JieV91cmwiLCJzb2NrZXRfdXJsIiwic3RhdHVzIiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZ2FtZV9jb2RlIiwidGlja2V0X2lkIiwiZXJyb3JNZXNzYWdlIiwiaXNFbmNyeXB0IiwiZmlyc3RQcm9tcHQiLCJ3aW5NdWx0aXBsaWVyIiwiZ2V0TXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJnZXRCZXRBbW91bnQiLCJzZXRCZXRBbW91bnQiLCJnZXRCZXRTZWxlY3Rpb24iLCJzZXRCZXRTZWxlY3Rpb24iLCJnZXRTb3VuZCIsInNldFNvdW5kIiwic2V0RWZmZWN0Vm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic2V0Um90YXRlVm9sdW1lIiwiZ2V0Um90YXRlVm9sdW1lIiwiZ2VvSVBfdXJsIiwiYXBpX3VybCIsImN1cnJlbnRCZXRTbG90Il0sIm1hcHBpbmdzIjoi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Q0FBeUIvQixLQUF6QixFQUErQjtBQUNsQ3RCLEVBQUFBLFlBQVksR0FBR3NCLEtBQWY7QUFDQSxTQUFRdEIsWUFBUjtBQUNIOztBQUdNLFNBQVNzRCxRQUFULEdBQW1CO0FBQ3RCLFNBQU9yRCxLQUFQO0FBQ0g7O0FBRU0sU0FBU3NELFFBQVQsQ0FBa0JqQyxLQUFsQixFQUF3QjtBQUMzQnJCLEVBQUFBLEtBQUssR0FBR3FCLEtBQVI7QUFDQSxTQUFRckIsS0FBUjtBQUNIOztBQUVNLFNBQVN1RCxlQUFULENBQXlCbEMsS0FBekIsRUFBK0I7QUFDbENwQixFQUFBQSxhQUFhLEdBQUdvQixLQUFoQjtBQUNBLFNBQVFwQixhQUFSO0FBQ0g7O0FBRU0sU0FBU3VELGVBQVQsR0FBMEI7QUFDN0IsU0FBT3ZELGFBQVA7QUFDSDs7QUFHTSxTQUFTd0QsZUFBVCxDQUF5QnBDLEtBQXpCLEVBQStCO0FBQ2xDbkIsRUFBQUEsYUFBYSxHQUFHbUIsS0FBaEI7QUFDQSxTQUFRbkIsYUFBUjtBQUNIOztBQUVNLFNBQVN3RCxlQUFULEdBQTBCO0FBQzdCLFNBQU94RCxhQUFQO0FBQ0g7O0FBRU0sSUFBSXlELFNBQUo7O0FBQ0EsSUFBSUMsT0FBSjs7QUFFQSxJQUFJQyxjQUFKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYmV0U2VsZWN0aW9uID0wO1xyXG52YXIgc291bmQgPSAxO1xyXG52YXIgZWZmZWN0X3ZvbHVtZSA9IDE7XHJcbnZhciByb3RhdGVfdm9sdW1lID0gMTtcclxudmFyIGJldEFtb3VudCA9IDA7XHJcbnZhciBtdWx0aXBsaWVyID0gMDtcclxudmFyIHNvY2tldCA9IG51bGw7XHJcbmV4cG9ydCB2YXIgaXNLaWNrZWQgPSBmYWxzZTtcclxuZXhwb3J0IHZhciBraWNrTWVzc2FnZSA9IFwiXCI7XHJcbmV4cG9ydCB2YXIgaXNQcm9kdWN0aW9uID0gZmFsc2U7XHJcbmV4cG9ydCB2YXIgaXNEZW1vPWZhbHNlO1xyXG5leHBvcnQgdmFyIGN1cnJlbnRCZXQ9MDtcclxuZXhwb3J0IHZhciBwbGF0Zm9ybSA9MDtcclxuZXhwb3J0IHZhciAgY29uc29TY29yZSA9IDA7XHJcbmV4cG9ydCB2YXIgcGVyZmVjdFNjb3JlID0wO1xyXG5leHBvcnQgdmFyIGZpbmlzaEdldERhdGE9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlPWZhbHNlO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ja2V0KCl7XHJcbiAgICByZXR1cm4gc29ja2V0O1xyXG59XHJcbmV4cG9ydCB2YXIgaG9zdF9pZCA9MDtcclxuZXhwb3J0IHZhciBhY2Nlc3NfdG9rZW4gPTA7XHJcbmV4cG9ydCB2YXIgaXNmdWxsU2NyZWVuPTA7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTb2NrZXQodmFsdWUpe1xyXG4gICAgY2MubG9nKFwiU2V0dGluZyBzb2NrZXRcIik7XHJcbiAgICBzb2NrZXQgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoc29ja2V0KTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGJhbGFuY2UgOiA5OTk5OTk5OTk5OTk5OTk5LFxyXG4gICAgY3VycmVuY3kgOiBcIk1ZUlwiLFxyXG4gICAgZXhpdF9idG4gOiAwLFxyXG4gICAgZ2FtZV9vbiA6IDAsXHJcbiAgICBnYW1lX3R5cGUgOiBcImRzZy0wMDZcIixcclxuICAgIGd1ZXN0X21vZGUgOiAwLFxyXG4gICAgaHlwZXJkcml2ZTogXCJcIixcclxuICAgIGlzX2RlbW86IDAsXHJcbiAgICBpc19qYWNrcG90OiAwLFxyXG4gICAgaXNyb3VuZGVkbnVtYmVyOiAwLFxyXG4gICAgamFja3BvdDogMCxcclxuICAgIGxvYmJ5X3VybDogXCJcIixcclxuICAgIHNvY2tldF91cmw6IFwiaHR0cHM6Ly9zb2NrZXQtYXBvbGxvLnZlbGFjaGlwLmNvbVwiLFxyXG4gICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgdXNlcl9pZDogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2FtZV9jb2RlID0gMjM7XHJcbmV4cG9ydCB2YXIgdGlja2V0X2lkID0gLTE7XHJcblxyXG5leHBvcnQgdmFyIGVycm9yTWVzc2FnZSA9IFwiXCI7XHJcbmV4cG9ydCB2YXIgaXNFbmNyeXB0ID0gdHJ1ZTtcclxuZXhwb3J0IHZhciBmaXJzdFByb21wdCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHZhciB3aW5NdWx0aXBsaWVyID0gWzQwLDM4LDM2LDM0LDMyXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE11bHRpcGxpZXIoKXtcclxuICAgIHJldHVybiBtdWx0aXBsaWVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TXVsdGlwbGllcih2YWx1ZSl7XHJcbiAgICBtdWx0aXBsaWVyID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKG11bHRpcGxpZXIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCZXRBbW91bnQoKXtcclxuICAgIHJldHVybiBiZXRBbW91bnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJldEFtb3VudCh2YWx1ZSl7XHJcbiAgICBiZXRBbW91bnQgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoYmV0QW1vdW50KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmV0U2VsZWN0aW9uKCl7XHJcbiAgICByZXR1cm4gYmV0U2VsZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmV0U2VsZWN0aW9uKHZhbHVlKXtcclxuICAgIGJldFNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChiZXRTZWxlY3Rpb24pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdW5kKCl7XHJcbiAgICByZXR1cm4gc291bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTb3VuZCh2YWx1ZSl7XHJcbiAgICBzb3VuZCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChzb3VuZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFZmZlY3RWb2x1bWUodmFsdWUpe1xyXG4gICAgZWZmZWN0X3ZvbHVtZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChlZmZlY3Rfdm9sdW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdFZvbHVtZSgpe1xyXG4gICAgcmV0dXJuIGVmZmVjdF92b2x1bWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Um90YXRlVm9sdW1lKHZhbHVlKXtcclxuICAgIHJvdGF0ZV92b2x1bWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiAocm90YXRlX3ZvbHVtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGVWb2x1bWUoKXtcclxuICAgIHJldHVybiByb3RhdGVfdm9sdW1lO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGdlb0lQX3VybDtcclxuZXhwb3J0IHZhciBhcGlfdXJsO1xyXG5cclxuZXhwb3J0IHZhciBjdXJyZW50QmV0U2xvdDsiXX0=