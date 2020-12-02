
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/InGameBetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '567f7h+HNVBhpLUppM2yspP', 'InGameBetting');
// src/InGameBetting.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    isGenerating: false,
    myButton: {
      "default": [],
      type: [cc.Node]
    },
    isRestarting: false,
    bettingOptionText: {
      "default": [],
      type: [cc.Node]
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    anim: {
      "default": null,
      type: cc.Animation
    },
    // currentBettingLabel: {
    //     default: null,
    //     type: cc.Label,
    // },
    loadingLayer: {
      "default": null,
      type: cc.Node
    },
    insufficient: {
      "default": null,
      type: cc.Node
    },
    balanceText: {
      "default": null,
      type: cc.Label
    },
    hiding: false,
    currentBetting: 0,
    lastBetting: 0,
    playerDie: false
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = globalData.currentBet;

    if (!globalData.getSocket()) {
      this.getComponent("Socket").connectSocket();
    }

    this.SetAmount(1);
  },
  hide: function hide() {
    if (!this.hiding) {
      this.anim.play("Hide");
      this.hiding = true;
    } else {
      this.anim.play("Show");
      this.hiding = false;
    }
  },
  SetAmount: function SetAmount(even, value) {
    this.maintBetOption = globalData.getBetSelection();

    if (this.maintBetOption == 0) {
      this.myValue = 0.5;
    }

    if (this.maintBetOption == 1) {
      this.myValue = 5;
    }

    if (this.maintBetOption == 2) {
      this.myValue = 10;
    }

    if (this.maintBetOption == 3) {
      this.myValue = 20;
    }

    for (var i = 0; i < this.bettingOptionText.length; i++) {
      if (i == 0) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue;
      } else if (i == 1) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue * 2;
      } else if (i == 2) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue * 3;
      } else {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue / (this.bettingOptionText.length - i) * 10;
      }
    }

    if (this.selectedBetOption < 3) {
      this.currentBetting = 1 * this.myValue * (this.selectedBetOption + 1);
    } else {
      this.currentBetting = 1 * this.myValue / (this.bettingOptionText.length - this.selectedBetOption) * 10;
    }

    globalData.setBetAmount(this.currentBetting);

    for (var _i = 0; _i < this.selectedBet.length; _i++) {
      if (_i == this.selectedBetOption) {
        this.selectedBet[_i].active = false; // this.myButton[i].scale = cc.v2(0.9, 0.9);
      } else {
        this.selectedBet[_i].active = true; // this.myButton[i].scale = cc.v2(0.7, 0.7);
      }
    }

    if (this.lastBetting != this.currentBetting) {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        globalData.currentBetSlot = this.selectedBetOption; // this.currentBettingLabel.string = this.currentBetting;
        //eligible for betting;

        this.loadingLayer.opacity = 255;
        this.loadingLayer.active = true;

        if (Number(value) == 0) {
          if (!globalData.isDemo) {
            var emit_result = {
              'host_id': globalData.host_id,
              'access_token': globalData.access_token,
              'ticket_id': globalData.ticket_id,
              'result': this.lastBetting,
              'key': "Change bet: " + this.lastBetting,
              'game_code': globalData.game_code,
              'description': "Get previous bet and change bet",
              'user_id': globalData.settings.user_id,
              'api_url': globalData.api_url,
              'changeBet': true
            };
            globalData.getSocket().emit('send-result', emit_result);
            this.generatingBalance = true;
            this.lastBetting = this.currentBetting;
          } else {
            globalData.settings.balance += this.lastBetting;
            this.generatingBalance = true;
            this.lastBetting = this.currentBetting;
          }
        } else {
          this.lastBetting = this.currentBetting;
          this.insufficient.active = false;

          if (!globalData.isDemo) {
            var emit_obj = {
              'host_id': globalData.host_id,
              'access_token': globalData.access_token,
              'game_code': 23,
              'betAmount': this.currentBetting,
              "key": "Happy Jump bet with these index 1st",
              "description": "bet",
              "user_id": globalData.settings.user_id,
              'api_url': globalData.api_url,
              "requestType": "bet",
              "currentBetSlot": globalData.currentBetSlot
            };
            globalData.getSocket().emit('changeBet', emit_obj);
            this.generateScore2();
          } else {
            globalData.settings.balance -= this.currentBetting;
            this.generateScore2();
          }
        }
      } else {
        this.insufficient.active = true;
      }
    } else {}
  },
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value); //this.lastBetting = this.currentBetting;

    this.canPlay = true; // this.node.active = false;

    cc.log("Selected bet option:" + this.selectedBetOption);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = false; // this.myButton[i].scale = cc.v2(0.9, 0.9);
      } else {
        this.selectedBet[i].active = true; // this.myButton[i].scale = cc.v2(0.7, 0.7);
      }
    }

    if (this.selectedBetOption < 3) {
      this.currentBetting = 1 * this.myValue * (this.selectedBetOption + 1);
    } else {
      this.currentBetting = 1 * this.myValue / (this.bettingOptionText.length - this.selectedBetOption) * 10;
    }

    globalData.setBetAmount(this.currentBetting);

    if (this.lastBetting != this.currentBetting) {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        //eligible for betting;
        globalData.currentBetSlot = this.selectedBetOption;
        globalData.currentBet = Number(value); // this.currentBettingLabel.string = this.currentBetting;

        this.loadingLayer.opacity = 255;
        this.loadingLayer.active = true;

        if (!globalData.isDemo) {
          var emit_result = {
            'host_id': globalData.host_id,
            'access_token': globalData.access_token,
            'ticket_id': globalData.ticket_id,
            'result': this.lastBetting,
            'key': "Change bet: " + this.lastBetting,
            'game_code': globalData.game_code,
            'description': "Get previous bet and change bet",
            'user_id': globalData.settings.user_id,
            'api_url': globalData.api_url,
            'changeBet': true
          };
          globalData.getSocket().emit('send-result', emit_result);
          this.lastBetting = this.currentBetting;
          this.generatingBalance = true;
        } else {
          globalData.settings.balance += this.lastBetting;
          this.lastBetting = this.currentBetting;
          this.generatingBalance = true;
        }
      } else {
        this.insufficient.active = true;
      }
    } else {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        this.insufficient.active = false;
      }
    }
  },
  start: function start() {},
  generateScore2: function generateScore2() {
    this.isGenerating = true;
  },
  demoGenerateScore: function demoGenerateScore() {
    this.loadingLayer.active = false;
    var multiplierPerfect;
    var multiplierConso;
    var platform;
    var perfectScore;
    var consoleScore; // calculate multiplier

    platform = parseInt(Math.random() * (1 - 0) + 0);
    multiplierPerfect = Math.random() * (1.5 - 1.1) + 1.1;
    multiplierConso = Math.random() * (1 - 0.7) + 0.7;
    perfectScore = Math.round(this.currentBetting * multiplierPerfect * 10) / 10;
    consoleScore = Math.round(this.currentBetting * multiplierConso * 10) / 10;
    globalData.consoScore = consoleScore;
    globalData.perfectScore = perfectScore;
    globalData.platform = platform;
    this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
    cc.systemEvent.emit("Change-Bet");
  },
  generateScore: function generateScore() {
    this.loadingLayer.active = false;
    this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
    cc.systemEvent.emit("Change-Bet");
  },
  onDestroy: function onDestroy() {
    if (!globalData.isDemo) {
      if (!this.playerDie) {
        var emit_result = {
          'host_id': globalData.host_id,
          'access_token': globalData.access_token,
          'ticket_id': globalData.ticket_id,
          'result': this.lastBetting,
          'key': "Go to home: " + this.lastBetting,
          'game_code': globalData.game_code,
          'description': "Cancel bet and go to home",
          'user_id': globalData.settings.user_id,
          'api_url': globalData.api_url,
          'changeBet': true
        };
        globalData.getSocket().emit('send-result', emit_result);
      }
    } else {
      if (!this.playerDie) {
        globalData.settings.balance += this.lastBetting;
      }
    }
  },
  update: function update(dt) {
    if (this.isGenerating) {
      if (!globalData.isDemo) {
        if (globalData.finishGetData) {
          //sendresult
          this.isGenerating = false;
          globalData.finishGetData = false;
          this.scheduleOnce(function () {
            this.generateScore();
          }, 0.2);
        }
      } else {
        this.isGenerating = false;
        this.scheduleOnce(function () {
          this.demoGenerateScore();
        }, 0.2);
      }
    }

    if (this.generatingBalance) {
      if (!globalData.isDemo) {
        if (globalData.finishGeneratingBalance) {
          this.insufficient.active = false;
          var emit_obj = {
            'host_id': globalData.host_id,
            'access_token': globalData.access_token,
            'game_code': 23,
            'betAmount': this.currentBetting,
            "key": "Happy Jump bet with these index 1st",
            "description": "bet",
            "user_id": globalData.settings.user_id,
            'api_url': globalData.api_url,
            "requestType": "social_addon",
            'ticket_id': globalData.ticket_id,
            "currentBetSlot": globalData.currentBetSlot
          };
          globalData.getSocket().emit('changeBet', emit_obj);
          this.generateScore2();
          this.generatingBalance = false;
          globalData.finishGeneratingBalance = false;
        }
      } else {
        this.insufficient.active = false;
        this.generateScore2();
        this.generatingBalance = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxJbkdhbWVCZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNHZW5lcmF0aW5nIiwibXlCdXR0b24iLCJ0eXBlIiwiTm9kZSIsImlzUmVzdGFydGluZyIsImJldHRpbmdPcHRpb25UZXh0Iiwic2VsZWN0ZWRCZXQiLCJhbmltIiwiQW5pbWF0aW9uIiwibG9hZGluZ0xheWVyIiwiaW5zdWZmaWNpZW50IiwiYmFsYW5jZVRleHQiLCJMYWJlbCIsImhpZGluZyIsImN1cnJlbnRCZXR0aW5nIiwibGFzdEJldHRpbmciLCJwbGF5ZXJEaWUiLCJvbkxvYWQiLCJzZWxlY3RlZEJldE9wdGlvbiIsImdsb2JhbERhdGEiLCJjdXJyZW50QmV0IiwiZ2V0U29ja2V0IiwiZ2V0Q29tcG9uZW50IiwiY29ubmVjdFNvY2tldCIsIlNldEFtb3VudCIsImhpZGUiLCJwbGF5IiwiZXZlbiIsInZhbHVlIiwibWFpbnRCZXRPcHRpb24iLCJnZXRCZXRTZWxlY3Rpb24iLCJteVZhbHVlIiwiaSIsImxlbmd0aCIsInN0cmluZyIsInNldEJldEFtb3VudCIsImFjdGl2ZSIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbnRCZXRTbG90Iiwib3BhY2l0eSIsIk51bWJlciIsImlzRGVtbyIsImVtaXRfcmVzdWx0IiwiaG9zdF9pZCIsImFjY2Vzc190b2tlbiIsInRpY2tldF9pZCIsImdhbWVfY29kZSIsInVzZXJfaWQiLCJhcGlfdXJsIiwiZW1pdCIsImdlbmVyYXRpbmdCYWxhbmNlIiwiZW1pdF9vYmoiLCJnZW5lcmF0ZVNjb3JlMiIsInNlbGVjdEJldE9wdGlvbiIsImV2ZW50IiwiY2FuUGxheSIsImxvZyIsInN0YXJ0IiwiZGVtb0dlbmVyYXRlU2NvcmUiLCJtdWx0aXBsaWVyUGVyZmVjdCIsIm11bHRpcGxpZXJDb25zbyIsInBsYXRmb3JtIiwicGVyZmVjdFNjb3JlIiwiY29uc29sZVNjb3JlIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiLCJjb25zb1Njb3JlIiwidG9TdHJpbmciLCJzeXN0ZW1FdmVudCIsImdlbmVyYXRlU2NvcmUiLCJvbkRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsImZpbmlzaEdldERhdGEiLCJzY2hlZHVsZU9uY2UiLCJmaW5pc2hHZW5lcmF0aW5nQmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRSxLQUROO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLEVBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFLENBQUNOLEVBQUUsQ0FBQ08sSUFBSjtBQUZBLEtBRkY7QUFNUkMsSUFBQUEsWUFBWSxFQUFFLEtBTk47QUFPUkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFDZixpQkFBUyxFQURNO0FBRWZILE1BQUFBLElBQUksRUFBRSxDQUFDTixFQUFFLENBQUNPLElBQUo7QUFGUyxLQVBYO0FBWVJHLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLEVBREE7QUFFVEosTUFBQUEsSUFBSSxFQUFFLENBQUNOLEVBQUUsQ0FBQ08sSUFBSjtBQUZHLEtBWkw7QUFnQlJJLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkwsTUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNZO0FBRlAsS0FoQkU7QUFxQlI7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWUCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ087QUFGQyxLQTFCTjtBQThCUk8sSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWUixNQUFBQSxJQUFJLEVBQUVO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O0FBRUg7QUFDSixPQXZCRCxNQXlCSztBQUNELGFBQUtwRSxZQUFMLENBQWtCMEIsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxhQUFLaUIsY0FBTDtBQUNBLGFBQUtGLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0g7QUFFSjtBQUVKO0FBcFlJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNHZW5lcmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBteUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNSZXN0YXJ0aW5nOiBmYWxzZSxcclxuICAgICAgICBiZXR0aW5nT3B0aW9uVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRCZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBjdXJyZW50QmV0dGluZ0xhYmVsOiB7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIGxvYWRpbmdMYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdWZmaWNpZW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxhbmNlVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGluZzogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudEJldHRpbmc6IDAsXHJcbiAgICAgICAgbGFzdEJldHRpbmc6IDAsXHJcbiAgICAgICAgcGxheWVyRGllOmZhbHNlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBnbG9iYWxEYXRhLmN1cnJlbnRCZXQ7XHJcbiAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmdldFNvY2tldCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFwiU29ja2V0XCIpLmNvbm5lY3RTb2NrZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRBbW91bnQoMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIkhpZGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiU2hvd1wiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFNldEFtb3VudChldmVuLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbnRCZXRPcHRpb24gPSBnbG9iYWxEYXRhLmdldEJldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpKSAqIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSAvICh0aGlzLmJldHRpbmdPcHRpb25UZXh0Lmxlbmd0aCAtIGkpKSAqIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikpICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJldEFtb3VudCh0aGlzLmN1cnJlbnRCZXR0aW5nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjksIDAuOSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teUJ1dHRvbltpXS5zY2FsZSA9IGNjLnYyKDAuNywgMC43KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RCZXR0aW5nICE9IHRoaXMuY3VycmVudEJldHRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArIHRoaXMubGFzdEJldHRpbmcgPj0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdD10aGlzLnNlbGVjdGVkQmV0T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QmV0dGluZ0xhYmVsLnN0cmluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAvL2VsaWdpYmxlIGZvciBiZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbHVlKSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWxEYXRhLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWxEYXRhLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JldEFtb3VudCc6IHRoaXMuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkhhcHB5IEp1bXAgYmV0IHdpdGggdGhlc2UgaW5kZXggMXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWVzdFR5cGVcIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlIC09IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZTIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIC8vdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmxvZyhcIlNlbGVjdGVkIGJldCBvcHRpb246XCIgKyB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC45LCAwLjkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikpICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJldEFtb3VudCh0aGlzLmN1cnJlbnRCZXR0aW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvL2VsaWdpYmxlIGZvciBiZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdD10aGlzLnNlbGVjdGVkQmV0T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0ID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEJldHRpbmdMYWJlbC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsRGF0YS5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICs9IHRoaXMubGFzdEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgZ2VuZXJhdGVTY29yZTIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0dlbmVyYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBkZW1vR2VuZXJhdGVTY29yZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbXVsdGlwbGllclBlcmZlY3Q7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJDb25zbztcclxuICAgICAgICB2YXIgcGxhdGZvcm07XHJcbiAgICAgICAgdmFyIHBlcmZlY3RTY29yZTtcclxuICAgICAgICB2YXIgY29uc29sZVNjb3JlO1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtdWx0aXBsaWVyXHJcbiAgICAgICAgcGxhdGZvcm0gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMS41IC0gMS4xKSArIDEuMSk7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gKE1hdGgucmFuZG9tKCkgKiAoMSAtIDAuNykgKyAwLjcpO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9IE1hdGgucm91bmQoKHRoaXMuY3VycmVudEJldHRpbmcgKiBtdWx0aXBsaWVyUGVyZmVjdCkgKiAxMCkgLyAxMDtcclxuICAgICAgICBjb25zb2xlU2NvcmUgPSBNYXRoLnJvdW5kKCh0aGlzLmN1cnJlbnRCZXR0aW5nICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbERhdGEuY29uc29TY29yZSA9IGNvbnNvbGVTY29yZTtcclxuICAgICAgICBnbG9iYWxEYXRhLnBlcmZlY3RTY29yZSA9IHBlcmZlY3RTY29yZTtcclxuICAgICAgICBnbG9iYWxEYXRhLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKiAxMDApIC8gMTAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoXCJDaGFuZ2UtQmV0XCIpO1xyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKiAxMDApIC8gMTAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoXCJDaGFuZ2UtQmV0XCIpO1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyRGllKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJHbyB0byBob21lOiBcIiArIHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiQ2FuY2VsIGJldCBhbmQgZ28gdG8gaG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJEaWUpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dlbmVyYXRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuZmluaXNoR2V0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2VuZHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5maW5pc2hHZXREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR2VuZXJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVtb0dlbmVyYXRlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRpbmdCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxEYXRhLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiZXRBbW91bnQnOiB0aGlzLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkhhcHB5IEp1bXAgYmV0IHdpdGggdGhlc2UgaW5kZXggMXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcInNvY2lhbF9hZGRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdjaGFuZ2VCZXQnLCBlbWl0X29iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19