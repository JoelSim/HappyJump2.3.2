
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
      this.myValue = 1;
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

            if (globalData.isEncrypt) {
              emit_result = btoa(JSON.stringify(emit_result));
            }

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

            if (globalData.isEncrypt) {
              emit_obj = btoa(JSON.stringify(emit_obj));
            }

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

          if (globalData.isEncrypt) {
            emit_result = btoa(JSON.stringify(emit_result));
          }

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
    var consoleScore;
    platform = Math.random() * (1 - 0) + 0;

    if (platform >= 0.3) {
      platform = 1;
    } else {
      platform = 0;
    } // calculate multiplier
    // platform = parseInt(Math.random() * (1 - 0) + 0);


    multiplierPerfect = Math.random() * (10 - 2) + 2;
    multiplierConso = 0.2;
    perfectScore = this.currentBetting * Math.floor(multiplierPerfect);
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

        if (globalData.isEncrypt) {
          emit_result = btoa(JSON.stringify(emit_result));
        }

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

          if (globalData.isEncrypt) {
            emit_obj = btoa(JSON.stringify(emit_obj));
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxJbkdhbWVCZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNHZW5lcmF0aW5nIiwibXlCdXR0b24iLCJ0eXBlIiwiTm9kZSIsImlzUmVzdGFydGluZyIsImJldHRpbmdPcHRpb25UZXh0Iiwic2VsZWN0ZWRCZXQiLCJhbmltIiwiQW5pbWF0aW9uIiwibG9hZGluZ0xheWVyIiwiaW5zdWZmaWNpZW50IiwiYmFsYW5jZVRleHQiLCJMYWJlbCIsImhpZGluZyIsImN1cnJlbnRCZXR0aW5nIiwibGFzdEJldHRpbmciLCJwbGF5ZXJEaWUiLCJvbkxvYWQiLCJzZWxlY3RlZEJldE9wdGlvbiIsImdsb2JhbERhdGEiLCJjdXJyZW50QmV0IiwiU2V0QW1vdW50IiwiaGlkZSIsInBsYXkiLCJldmVuIiwidmFsdWUiLCJtYWludEJldE9wdGlvbiIsImdldEJldFNlbGVjdGlvbiIsIm15VmFsdWUiLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwic2V0QmV0QW1vdW50IiwiYWN0aXZlIiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiY3VycmVudEJldFNsb3QiLCJvcGFjaXR5IiwiTnVtYmVyIiwiaXNEZW1vIiwiZW1pdF9yZXN1bHQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwidGlja2V0X2lkIiwiZ2FtZV9jb2RlIiwidXNlcl9pZCIsImFwaV91cmwiLCJpc0VuY3J5cHQiLCJidG9hIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNvY2tldCIsImVtaXQiLCJnZW5lcmF0aW5nQmFsYW5jZSIsImVtaXRfb2JqIiwiZ2VuZXJhdGVTY29yZTIiLCJzZWxlY3RCZXRPcHRpb24iLCJldmVudCIsImNhblBsYXkiLCJsb2ciLCJzdGFydCIsImRlbW9HZW5lcmF0ZVNjb3JlIiwibXVsdGlwbGllclBlcmZlY3QiLCJtdWx0aXBsaWVyQ29uc28iLCJwbGF0Zm9ybSIsInBlcmZlY3RTY29yZSIsImNvbnNvbGVTY29yZSIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInJvdW5kIiwiY29uc29TY29yZSIsInRvU3RyaW5nIiwic3lzdGVtRXZlbnQiLCJnZW5lcmF0ZVNjb3JlIiwib25EZXN0cm95IiwidXBkYXRlIiwiZHQiLCJmaW5pc2hHZXREYXRhIiwic2NoZWR1bGVPbmNlIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUUsS0FETjtBQUVSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxFQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRSxDQUFDTixFQUFFLENBQUNPLElBQUo7QUFGQSxLQUZGO0FBTVJDLElBQUFBLFlBQVksRUFBRSxLQU5OO0FBT1JDLElBQUFBLGlCQUFpQixFQUFFO0FBQ2YsaUJBQVMsRUFETTtBQUVmSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRlMsS0FQWDtBQVlSRyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxFQURBO0FBRVRKLE1BQUFBLElBQUksRUFBRSxDQUFDTixFQUFFLENBQUNPLElBQUo7QUFGRyxLQVpMO0FBZ0JSSSxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZMLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDWTtBQUZQLEtBaEJFO0FBcUJSO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlAsTUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNPO0FBRkMsS0ExQk47QUE4QlJPLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlIsTUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNPO0FBRkMsS0E5Qk47QUFrQ1JRLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVFQsTUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNnQjtBQUZBLEtBbENMO0FBc0NSQyxJQUFBQSxNQUFNLEVBQUUsS0F0Q0E7QUF1Q1JDLElBQUFBLGNBQWMsRUFBRSxDQXZDUjtBQXdDUkMsSUFBQUEsV0FBVyxFQUFFLENBeENMO0FBeUNSQyxJQUFBQSxTQUFTLEVBQUM7QUF6Q0YsR0FIUDtBQWdETDtBQUVBQyxFQUFBQSxNQWxESyxvQkFrREk7QUFDTCxTQUFLQyxpQkFBTCxHQUF5QkMsVUFBVSxDQUFDQyxVQUFwQztBQUNBLFNBQUtDLFNBQUwsQ0FBZSxDQUFmO0FBQ0gsR0FyREk7QUF1RExDLEVBQUFBLElBdkRLLGtCQXVERTtBQUNILFFBQUksQ0FBQyxLQUFLVCxNQUFWLEVBQWtCO0FBQ2QsV0FBS04sSUFBTCxDQUFVZ0IsSUFBVixDQUFlLE1BQWY7QUFDQSxXQUFLVixNQUFMLEdBQWMsSUFBZDtBQUNILEtBSEQsTUFJSztBQUNELFdBQUtOLElBQUwsQ0FBVWdCLElBQVYsQ0FBZSxNQUFmO0FBQ0EsV0FBS1YsTUFBTCxHQUFjLEtBQWQ7QUFDSDtBQUNKLEdBaEVJO0FBa0VMUSxFQUFBQSxTQWxFSyxxQkFrRUtHLElBbEVMLEVBa0VXQyxLQWxFWCxFQWtFa0I7QUFDbkIsU0FBS0MsY0FBTCxHQUFzQlAsVUFBVSxDQUFDUSxlQUFYLEVBQXRCOztBQUNBLFFBQUksS0FBS0QsY0FBTCxJQUF1QixDQUEzQixFQUE4QjtBQUMxQixXQUFLRSxPQUFMLEdBQWUsQ0FBZjtBQUNIOztBQUNELFFBQUksS0FBS0YsY0FBTCxJQUF1QixDQUEzQixFQUE4QjtBQUMxQixXQUFLRSxPQUFMLEdBQWUsQ0FBZjtBQUVIOztBQUNELFFBQUksS0FBS0YsY0FBTCxJQUF1QixDQUEzQixFQUE4QjtBQUMxQixXQUFLRSxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQUNELFFBQUksS0FBS0YsY0FBTCxJQUF1QixDQUEzQixFQUE4QjtBQUMxQixXQUFLRSxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQUNELFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLeEIsaUJBQUwsQ0FBdUJ5QixNQUEzQyxFQUFtREQsQ0FBQyxFQUFwRCxFQUF3RDtBQUNwRCxVQUFJQSxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBS3hCLGlCQUFMLENBQXVCd0IsQ0FBdkIsRUFBMEJFLFlBQTFCLENBQXVDbkMsRUFBRSxDQUFDZ0IsS0FBMUMsRUFBaURvQixNQUFqRCxHQUE0RCxJQUFJLEtBQUtKLE9BQXJFO0FBQ0gsT0FGRCxNQUdLLElBQUlDLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDYixhQUFLeEIsaUJBQUwsQ0FBdUJ3QixDQUF2QixFQUEwQkUsWUFBMUIsQ0FBdUNuQyxFQUFFLENBQUNnQixLQUExQyxFQUFpRG9CLE1BQWpELEdBQTRELElBQUksS0FBS0osT0FBWCxHQUF1QixDQUFqRjtBQUNILE9BRkksTUFHQSxJQUFJQyxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ2IsYUFBS3hCLGlCQUFMLENBQXVCd0IsQ0FBdkIsRUFBMEJFLFlBQTFCLENBQXVDbkMsRUFBRSxDQUFDZ0IsS0FBMUMsRUFBaURvQixNQUFqRCxHQUE0RCxJQUFJLEtBQUtKLE9BQVgsR0FBdUIsQ0FBakY7QUFDSCxPQUZJLE1BR0E7QUFDRCxhQUFLdkIsaUJBQUwsQ0FBdUJ3QixDQUF2QixFQUEwQkUsWUFBMUIsQ0FBdUNuQyxFQUFFLENBQUNnQixLQUExQyxFQUFpRG9CLE1BQWpELEdBQTRELElBQUksS0FBS0osT0FBVixJQUFzQixLQUFLdkIsaUJBQUwsQ0FBdUJ5QixNQUF2QixHQUFnQ0QsQ0FBdEQsQ0FBRCxHQUE2RCxFQUF2SDtBQUNIO0FBQ0o7O0FBRUQsUUFBSSxLQUFLWCxpQkFBTCxHQUF5QixDQUE3QixFQUFnQztBQUM1QixXQUFLSixjQUFMLEdBQXdCLElBQUksS0FBS2MsT0FBWCxJQUF3QixLQUFLVixpQkFBTCxHQUF5QixDQUFqRCxDQUF0QjtBQUNILEtBRkQsTUFHSztBQUNELFdBQUtKLGNBQUwsR0FBd0IsSUFBSSxLQUFLYyxPQUFWLElBQXNCLEtBQUt2QixpQkFBTCxDQUF1QnlCLE1BQXZCLEdBQWdDLEtBQUtaLGlCQUEzRCxDQUFELEdBQWtGLEVBQXhHO0FBQ0g7O0FBRURDLElBQUFBLFVBQVUsQ0FBQ2MsWUFBWCxDQUF3QixLQUFLbkIsY0FBN0I7O0FBQ0EsU0FBSyxJQUFJZSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEtBQUt2QixXQUFMLENBQWlCd0IsTUFBckMsRUFBNkNELEVBQUMsRUFBOUMsRUFBa0Q7QUFDOUMsVUFBSUEsRUFBQyxJQUFJLEtBQUtYLGlCQUFkLEVBQWlDO0FBQzdCLGFBQUtaLFdBQUwsQ0FBaUJ1QixFQUFqQixFQUFvQkssTUFBcEIsR0FBNkIsS0FBN0IsQ0FENkIsQ0FFN0I7QUFFSCxPQUpELE1BSU87QUFDSCxhQUFLNUIsV0FBTCxDQUFpQnVCLEVBQWpCLEVBQW9CSyxNQUFwQixHQUE2QixJQUE3QixDQURHLENBRUg7QUFFSDtBQUNKOztBQUVELFFBQUksS0FBS25CLFdBQUwsSUFBb0IsS0FBS0QsY0FBN0IsRUFBNkM7QUFDekMsVUFBSUssVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQkMsT0FBcEIsR0FBOEIsS0FBS3JCLFdBQW5DLElBQWtELEtBQUtELGNBQTNELEVBQTJFO0FBQ3ZFSyxRQUFBQSxVQUFVLENBQUNrQixjQUFYLEdBQTBCLEtBQUtuQixpQkFBL0IsQ0FEdUUsQ0FFdkU7QUFDQTs7QUFDQSxhQUFLVCxZQUFMLENBQWtCNkIsT0FBbEIsR0FBNEIsR0FBNUI7QUFDQSxhQUFLN0IsWUFBTCxDQUFrQnlCLE1BQWxCLEdBQTJCLElBQTNCOztBQUNBLFlBQUlLLE1BQU0sQ0FBQ2QsS0FBRCxDQUFOLElBQWlCLENBQXJCLEVBQXdCO0FBRXBCLGNBQUksQ0FBQ04sVUFBVSxDQUFDcUIsTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQUlDLFdBQVcsR0FBRztBQUNkLHlCQUFXdEIsVUFBVSxDQUFDdUIsT0FEUjtBQUVkLDhCQUFnQnZCLFVBQVUsQ0FBQ3dCLFlBRmI7QUFHZCwyQkFBYXhCLFVBQVUsQ0FBQ3lCLFNBSFY7QUFJZCx3QkFBVSxLQUFLN0IsV0FKRDtBQUtkLHFCQUFPLGlCQUFpQixLQUFLQSxXQUxmO0FBTWQsMkJBQWFJLFVBQVUsQ0FBQzBCLFNBTlY7QUFPZCw2QkFBZSxpQ0FQRDtBQVFkLHlCQUFXMUIsVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQlcsT0FSakI7QUFTZCx5QkFBVTNCLFVBQVUsQ0FBQzRCLE9BVFA7QUFVZCwyQkFBWTtBQVZFLGFBQWxCOztBQWFBLGdCQUFHNUIsVUFBVSxDQUFDNkIsU0FBZCxFQUF3QjtBQUNwQlAsY0FBQUEsV0FBVyxHQUFHUSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixXQUFmLENBQUQsQ0FBbEI7QUFDSDs7QUFDRHRCLFlBQUFBLFVBQVUsQ0FBQ2lDLFNBQVgsR0FBdUJDLElBQXZCLENBQTRCLGFBQTVCLEVBQTJDWixXQUEzQztBQUNBLGlCQUFLYSxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGlCQUFLdkMsV0FBTCxHQUFtQixLQUFLRCxjQUF4QjtBQUNILFdBcEJELE1BcUJLO0FBQ0RLLFlBQUFBLFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JDLE9BQXBCLElBQStCLEtBQUtyQixXQUFwQztBQUNBLGlCQUFLdUMsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxpQkFBS3ZDLFdBQUwsR0FBbUIsS0FBS0QsY0FBeEI7QUFDSDtBQUVKLFNBN0JELE1BK0JLO0FBQ0QsZUFBS0MsV0FBTCxHQUFtQixLQUFLRCxjQUF4QjtBQUNBLGVBQUtKLFlBQUwsQ0FBa0J3QixNQUFsQixHQUEyQixLQUEzQjs7QUFDQSxjQUFJLENBQUNmLFVBQVUsQ0FBQ3FCLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJZSxRQUFRLEdBQUc7QUFDWCx5QkFBV3BDLFVBQVUsQ0FBQ3VCLE9BRFg7QUFFWCw4QkFBZ0J2QixVQUFVLENBQUN3QixZQUZoQjtBQUdYLDJCQUFhLEVBSEY7QUFJWCwyQkFBYSxLQUFLN0IsY0FKUDtBQUtYLHFCQUFPLHFDQUxJO0FBTVgsNkJBQWUsS0FOSjtBQU9YLHlCQUFXSyxVQUFVLENBQUNnQixRQUFYLENBQW9CVyxPQVBwQjtBQVFYLHlCQUFVM0IsVUFBVSxDQUFDNEIsT0FSVjtBQVNYLDZCQUFlLEtBVEo7QUFVWCxnQ0FBaUI1QixVQUFVLENBQUNrQjtBQVZqQixhQUFmOztBQVlBLGdCQUFHbEIsVUFBVSxDQUFDNkIsU0FBZCxFQUF3QjtBQUNwQk8sY0FBQUEsUUFBUSxHQUFHTixJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSSxRQUFmLENBQUQsQ0FBZjtBQUNIOztBQUNEcEMsWUFBQUEsVUFBVSxDQUFDaUMsU0FBWCxHQUF1QkMsSUFBdkIsQ0FBNEIsV0FBNUIsRUFBeUNFLFFBQXpDO0FBQ0EsaUJBQUtDLGNBQUw7QUFDSCxXQWxCRCxNQW1CSztBQUNEckMsWUFBQUEsVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQkMsT0FBcEIsSUFBK0IsS0FBS3RCLGNBQXBDO0FBQ0EsaUJBQUswQyxjQUFMO0FBQ0g7QUFFSjtBQUNKLE9BakVELE1Ba0VLO0FBQ0QsYUFBSzlDLFlBQUwsQ0FBa0J3QixNQUFsQixHQUEyQixJQUEzQjtBQUVIO0FBQ0osS0F2RUQsTUF5RUssQ0FFSjtBQUVKLEdBak1JO0FBb01MdUIsRUFBQUEsZUFwTUssMkJBb01XQyxLQXBNWCxFQW9Na0JqQyxLQXBNbEIsRUFvTXlCO0FBQzFCLFNBQUtQLGlCQUFMLEdBQXlCcUIsTUFBTSxDQUFDZCxLQUFELENBQS9CLENBRDBCLENBRTFCOztBQUVBLFNBQUtrQyxPQUFMLEdBQWUsSUFBZixDQUowQixDQUsxQjs7QUFDQS9ELElBQUFBLEVBQUUsQ0FBQ2dFLEdBQUgsQ0FBTyx5QkFBeUIsS0FBSzFDLGlCQUFyQzs7QUFDQSxTQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3ZCLFdBQUwsQ0FBaUJ3QixNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUM5QyxVQUFJQSxDQUFDLElBQUlKLEtBQVQsRUFBZ0I7QUFDWixhQUFLbkIsV0FBTCxDQUFpQnVCLENBQWpCLEVBQW9CSyxNQUFwQixHQUE2QixLQUE3QixDQURZLENBRVo7QUFFSCxPQUpELE1BSU87QUFDSCxhQUFLNUIsV0FBTCxDQUFpQnVCLENBQWpCLEVBQW9CSyxNQUFwQixHQUE2QixJQUE3QixDQURHLENBRUg7QUFFSDtBQUNKOztBQUVELFFBQUksS0FBS2hCLGlCQUFMLEdBQXlCLENBQTdCLEVBQWdDO0FBQzVCLFdBQUtKLGNBQUwsR0FBd0IsSUFBSSxLQUFLYyxPQUFYLElBQXdCLEtBQUtWLGlCQUFMLEdBQXlCLENBQWpELENBQXRCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsV0FBS0osY0FBTCxHQUF3QixJQUFJLEtBQUtjLE9BQVYsSUFBc0IsS0FBS3ZCLGlCQUFMLENBQXVCeUIsTUFBdkIsR0FBZ0MsS0FBS1osaUJBQTNELENBQUQsR0FBa0YsRUFBeEc7QUFDSDs7QUFFREMsSUFBQUEsVUFBVSxDQUFDYyxZQUFYLENBQXdCLEtBQUtuQixjQUE3Qjs7QUFFQSxRQUFJLEtBQUtDLFdBQUwsSUFBb0IsS0FBS0QsY0FBN0IsRUFBNkM7QUFDekMsVUFBSUssVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQkMsT0FBcEIsR0FBOEIsS0FBS3JCLFdBQW5DLElBQWtELEtBQUtELGNBQTNELEVBQTJFO0FBQ3ZFO0FBQ0FLLFFBQUFBLFVBQVUsQ0FBQ2tCLGNBQVgsR0FBMEIsS0FBS25CLGlCQUEvQjtBQUNBQyxRQUFBQSxVQUFVLENBQUNDLFVBQVgsR0FBd0JtQixNQUFNLENBQUNkLEtBQUQsQ0FBOUIsQ0FIdUUsQ0FJdkU7O0FBQ0EsYUFBS2hCLFlBQUwsQ0FBa0I2QixPQUFsQixHQUE0QixHQUE1QjtBQUNBLGFBQUs3QixZQUFMLENBQWtCeUIsTUFBbEIsR0FBMkIsSUFBM0I7O0FBRUEsWUFBSSxDQUFDZixVQUFVLENBQUNxQixNQUFoQixFQUF3QjtBQUNwQixjQUFJQyxXQUFXLEdBQUc7QUFDZCx1QkFBV3RCLFVBQVUsQ0FBQ3VCLE9BRFI7QUFFZCw0QkFBZ0J2QixVQUFVLENBQUN3QixZQUZiO0FBR2QseUJBQWF4QixVQUFVLENBQUN5QixTQUhWO0FBSWQsc0JBQVUsS0FBSzdCLFdBSkQ7QUFLZCxtQkFBTyxpQkFBaUIsS0FBS0EsV0FMZjtBQU1kLHlCQUFhSSxVQUFVLENBQUMwQixTQU5WO0FBT2QsMkJBQWUsaUNBUEQ7QUFRZCx1QkFBVzFCLFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JXLE9BUmpCO0FBU2QsdUJBQVUzQixVQUFVLENBQUM0QixPQVRQO0FBVWQseUJBQVk7QUFWRSxXQUFsQjs7QUFhQSxjQUFHNUIsVUFBVSxDQUFDNkIsU0FBZCxFQUF3QjtBQUNwQlAsWUFBQUEsV0FBVyxHQUFHUSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixXQUFmLENBQUQsQ0FBbEI7QUFDSDs7QUFDRHRCLFVBQUFBLFVBQVUsQ0FBQ2lDLFNBQVgsR0FBdUJDLElBQXZCLENBQTRCLGFBQTVCLEVBQTJDWixXQUEzQztBQUNBLGVBQUsxQixXQUFMLEdBQW1CLEtBQUtELGNBQXhCO0FBQ0EsZUFBS3dDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0gsU0FwQkQsTUFxQks7QUFDRG5DLFVBQUFBLFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JDLE9BQXBCLElBQStCLEtBQUtyQixXQUFwQztBQUNBLGVBQUtBLFdBQUwsR0FBbUIsS0FBS0QsY0FBeEI7QUFDQSxlQUFLd0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDSDtBQUNKLE9BbENELE1BbUNLO0FBQ0QsYUFBSzVDLFlBQUwsQ0FBa0J3QixNQUFsQixHQUEyQixJQUEzQjtBQUNIO0FBQ0osS0F2Q0QsTUF3Q0s7QUFDRCxVQUFJZixVQUFVLENBQUNnQixRQUFYLENBQW9CQyxPQUFwQixHQUE4QixLQUFLckIsV0FBbkMsSUFBa0QsS0FBS0QsY0FBM0QsRUFBMkU7QUFDdkUsYUFBS0osWUFBTCxDQUFrQndCLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0g7QUFDSjtBQUlKLEdBaFJJO0FBaVJMMkIsRUFBQUEsS0FqUkssbUJBaVJHLENBRVAsQ0FuUkk7QUFzUkxMLEVBQUFBLGNBdFJLLDRCQXNSWTtBQUNiLFNBQUt4RCxZQUFMLEdBQW9CLElBQXBCO0FBRUgsR0F6Ukk7QUEwUkw4RCxFQUFBQSxpQkExUkssK0JBMFJlO0FBQ2hCLFNBQUtyRCxZQUFMLENBQWtCeUIsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxRQUFJNkIsaUJBQUo7QUFDQSxRQUFJQyxlQUFKO0FBQ0EsUUFBSUMsUUFBSjtBQUNBLFFBQUlDLFlBQUo7QUFDQSxRQUFJQyxZQUFKO0FBQ0FGLElBQUFBLFFBQVEsR0FBT0csSUFBSSxDQUFDQyxNQUFMLE1BQWlCLElBQUksQ0FBckIsSUFBMEIsQ0FBekM7O0FBQ0EsUUFBR0osUUFBUSxJQUFFLEdBQWIsRUFBaUI7QUFDYkEsTUFBQUEsUUFBUSxHQUFHLENBQVg7QUFDSCxLQUZELE1BR0k7QUFDQUEsTUFBQUEsUUFBUSxHQUFHLENBQVg7QUFDSCxLQWJlLENBZWhCO0FBQ0E7OztBQUNBRixJQUFBQSxpQkFBaUIsR0FBSUssSUFBSSxDQUFDQyxNQUFMLE1BQWlCLEtBQUssQ0FBdEIsSUFBMEIsQ0FBL0M7QUFDQUwsSUFBQUEsZUFBZSxHQUFHLEdBQWxCO0FBQ0FFLElBQUFBLFlBQVksR0FBRyxLQUFLcEQsY0FBTCxHQUFzQnNELElBQUksQ0FBQ0UsS0FBTCxDQUFXUCxpQkFBWCxDQUFyQztBQUNBSSxJQUFBQSxZQUFZLEdBQUdDLElBQUksQ0FBQ0csS0FBTCxDQUFZLEtBQUt6RCxjQUFMLEdBQXNCa0QsZUFBdkIsR0FBMEMsRUFBckQsSUFBMkQsRUFBMUU7QUFDQTdDLElBQUFBLFVBQVUsQ0FBQ3FELFVBQVgsR0FBd0JMLFlBQXhCO0FBQ0FoRCxJQUFBQSxVQUFVLENBQUMrQyxZQUFYLEdBQTBCQSxZQUExQjtBQUNBL0MsSUFBQUEsVUFBVSxDQUFDOEMsUUFBWCxHQUFzQkEsUUFBdEI7QUFDQSxTQUFLdEQsV0FBTCxDQUFpQnFCLE1BQWpCLEdBQTBCLENBQUNvQyxJQUFJLENBQUNHLEtBQUwsQ0FBV3BELFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JDLE9BQXBCLEdBQThCLEdBQXpDLElBQWdELEdBQWpELEVBQXNEcUMsUUFBdEQsRUFBMUI7QUFDQTdFLElBQUFBLEVBQUUsQ0FBQzhFLFdBQUgsQ0FBZXJCLElBQWYsQ0FBb0IsWUFBcEI7QUFDSCxHQXBUSTtBQXFUTHNCLEVBQUFBLGFBclRLLDJCQXFUVztBQUNaLFNBQUtsRSxZQUFMLENBQWtCeUIsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxTQUFLdkIsV0FBTCxDQUFpQnFCLE1BQWpCLEdBQTBCLENBQUNvQyxJQUFJLENBQUNHLEtBQUwsQ0FBV3BELFVBQVUsQ0FBQ2dCLFFBQVgsQ0FBb0JDLE9BQXBCLEdBQThCLEdBQXpDLElBQWdELEdBQWpELEVBQXNEcUMsUUFBdEQsRUFBMUI7QUFDQTdFLElBQUFBLEVBQUUsQ0FBQzhFLFdBQUgsQ0FBZXJCLElBQWYsQ0FBb0IsWUFBcEI7QUFFSCxHQTFUSTtBQTJUTHVCLEVBQUFBLFNBM1RLLHVCQTJUTztBQUNSLFFBQUksQ0FBQ3pELFVBQVUsQ0FBQ3FCLE1BQWhCLEVBQXdCO0FBQ3BCLFVBQUksQ0FBQyxLQUFLeEIsU0FBVixFQUFxQjtBQUNqQixZQUFJeUIsV0FBVyxHQUFHO0FBQ2QscUJBQVd0QixVQUFVLENBQUN1QixPQURSO0FBRWQsMEJBQWdCdkIsVUFBVSxDQUFDd0IsWUFGYjtBQUdkLHVCQUFheEIsVUFBVSxDQUFDeUIsU0FIVjtBQUlkLG9CQUFVLEtBQUs3QixXQUpEO0FBS2QsaUJBQU8saUJBQWlCLEtBQUtBLFdBTGY7QUFNZCx1QkFBYUksVUFBVSxDQUFDMEIsU0FOVjtBQU9kLHlCQUFlLDJCQVBEO0FBUWQscUJBQVcxQixVQUFVLENBQUNnQixRQUFYLENBQW9CVyxPQVJqQjtBQVNkLHFCQUFVM0IsVUFBVSxDQUFDNEIsT0FUUDtBQVVkLHVCQUFZO0FBVkUsU0FBbEI7O0FBYUEsWUFBRzVCLFVBQVUsQ0FBQzZCLFNBQWQsRUFBd0I7QUFDcEJQLFVBQUFBLFdBQVcsR0FBR1EsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsV0FBZixDQUFELENBQWxCO0FBQ0g7O0FBQ0R0QixRQUFBQSxVQUFVLENBQUNpQyxTQUFYLEdBQXVCQyxJQUF2QixDQUE0QixhQUE1QixFQUEyQ1osV0FBM0M7QUFDSDtBQUVKLEtBckJELE1Bc0JLO0FBQ0QsVUFBSSxDQUFDLEtBQUt6QixTQUFWLEVBQXFCO0FBQ2pCRyxRQUFBQSxVQUFVLENBQUNnQixRQUFYLENBQW9CQyxPQUFwQixJQUErQixLQUFLckIsV0FBcEM7QUFDSDtBQUNKO0FBQ0osR0F2Vkk7QUF5Vkw4RCxFQUFBQSxNQXpWSyxrQkF5VkVDLEVBelZGLEVBeVZNO0FBQ1AsUUFBSSxLQUFLOUUsWUFBVCxFQUF1QjtBQUNuQixVQUFJLENBQUNtQixVQUFVLENBQUNxQixNQUFoQixFQUF3QjtBQUNwQixZQUFJckIsVUFBVSxDQUFDNEQsYUFBZixFQUE4QjtBQUMxQjtBQUNBLGVBQUsvRSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0FtQixVQUFBQSxVQUFVLENBQUM0RCxhQUFYLEdBQTJCLEtBQTNCO0FBQ0EsZUFBS0MsWUFBTCxDQUFrQixZQUFZO0FBQzFCLGlCQUFLTCxhQUFMO0FBRUgsV0FIRCxFQUdHLEdBSEg7QUFLSDtBQUNKLE9BWEQsTUFZSztBQUNELGFBQUszRSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBS2dGLFlBQUwsQ0FBa0IsWUFBWTtBQUMxQixlQUFLbEIsaUJBQUw7QUFFSCxTQUhELEVBR0csR0FISDtBQUlIO0FBR0o7O0FBRUQsUUFBSSxLQUFLUixpQkFBVCxFQUE0QjtBQUN4QixVQUFJLENBQUNuQyxVQUFVLENBQUNxQixNQUFoQixFQUF3QjtBQUNwQixZQUFJckIsVUFBVSxDQUFDOEQsdUJBQWYsRUFBd0M7QUFDcEMsZUFBS3ZFLFlBQUwsQ0FBa0J3QixNQUFsQixHQUEyQixLQUEzQjtBQUNBLGNBQUlxQixRQUFRLEdBQUc7QUFDWCx1QkFBV3BDLFVBQVUsQ0FBQ3VCLE9BRFg7QUFFWCw0QkFBZ0J2QixVQUFVLENBQUN3QixZQUZoQjtBQUdYLHlCQUFhLEVBSEY7QUFJWCx5QkFBYSxLQUFLN0IsY0FKUDtBQUtYLG1CQUFPLHFDQUxJO0FBTVgsMkJBQWUsS0FOSjtBQU9YLHVCQUFXSyxVQUFVLENBQUNnQixRQUFYLENBQW9CVyxPQVBwQjtBQVFYLHVCQUFVM0IsVUFBVSxDQUFDNEIsT0FSVjtBQVNYLDJCQUFlLGNBVEo7QUFVWCx5QkFBYTVCLFVBQVUsQ0FBQ3lCLFNBVmI7QUFXWCw4QkFBaUJ6QixVQUFVLENBQUNrQjtBQVhqQixXQUFmOztBQWFBLGNBQUdsQixVQUFVLENBQUM2QixTQUFkLEVBQXdCO0FBQ3BCTyxZQUFBQSxRQUFRLEdBQUdOLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVJLFFBQWYsQ0FBRCxDQUFmO0FBQ0g7O0FBQ0RwQyxVQUFBQSxVQUFVLENBQUNpQyxTQUFYLEdBQXVCQyxJQUF2QixDQUE0QixXQUE1QixFQUF5Q0UsUUFBekM7QUFDQSxlQUFLQyxjQUFMO0FBQ0EsZUFBS0YsaUJBQUwsR0FBeUIsS0FBekI7QUFDQW5DLFVBQUFBLFVBQVUsQ0FBQzhELHVCQUFYLEdBQXFDLEtBQXJDO0FBRUg7QUFDSixPQXpCRCxNQTJCSztBQUNELGFBQUt2RSxZQUFMLENBQWtCd0IsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxhQUFLc0IsY0FBTDtBQUNBLGFBQUtGLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0g7QUFFSjtBQUVKO0FBdFpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNHZW5lcmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBteUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNSZXN0YXJ0aW5nOiBmYWxzZSxcclxuICAgICAgICBiZXR0aW5nT3B0aW9uVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRCZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBjdXJyZW50QmV0dGluZ0xhYmVsOiB7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIGxvYWRpbmdMYXllcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdWZmaWNpZW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxhbmNlVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGluZzogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudEJldHRpbmc6IDAsXHJcbiAgICAgICAgbGFzdEJldHRpbmc6IDAsXHJcbiAgICAgICAgcGxheWVyRGllOmZhbHNlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBnbG9iYWxEYXRhLmN1cnJlbnRCZXQ7XHJcbiAgICAgICAgdGhpcy5TZXRBbW91bnQoMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIkhpZGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiU2hvd1wiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFNldEFtb3VudChldmVuLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbnRCZXRPcHRpb24gPSBnbG9iYWxEYXRhLmdldEJldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbnRCZXRPcHRpb24gPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm15VmFsdWUgPSA1O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbnRCZXRPcHRpb24gPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLm15VmFsdWUgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbnRCZXRPcHRpb24gPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLm15VmFsdWUgPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJldHRpbmdPcHRpb25UZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpKSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkgLyAodGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGggLSBpKSkgKiAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpKSAqICh0aGlzLnNlbGVjdGVkQmV0T3B0aW9uICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXR0aW5nID0gKCgxICogdGhpcy5teVZhbHVlKSAvICh0aGlzLmJldHRpbmdPcHRpb25UZXh0Lmxlbmd0aCAtIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24pKSAqIDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRCZXRBbW91bnQodGhpcy5jdXJyZW50QmV0dGluZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQmV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC45LCAwLjkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0QmV0dGluZyAhPSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKyB0aGlzLmxhc3RCZXR0aW5nID49IHRoaXMuY3VycmVudEJldHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuY3VycmVudEJldFNsb3Q9dGhpcy5zZWxlY3RlZEJldE9wdGlvbjtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEJldHRpbmdMYWJlbC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgLy9lbGlnaWJsZSBmb3IgYmV0dGluZztcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih2YWx1ZSkgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJDaGFuZ2UgYmV0OiBcIiArIHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsRGF0YS5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2VCZXQnOnRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0X3Jlc3VsdCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKz0gdGhpcy5sYXN0QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9vYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiAyMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZXRBbW91bnQnOiB0aGlzLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJIYXBweSBKdW1wIGJldCB3aXRoIHRoZXNlIGluZGV4IDFzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVlc3RUeXBlXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRCZXRTbG90XCI6Z2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0X29iaiA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlIC09IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZTIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIC8vdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmxvZyhcIlNlbGVjdGVkIGJldCBvcHRpb246XCIgKyB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC45LCAwLjkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikpICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJldEFtb3VudCh0aGlzLmN1cnJlbnRCZXR0aW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvL2VsaWdpYmxlIGZvciBiZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdD10aGlzLnNlbGVjdGVkQmV0T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0ID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEJldHRpbmdMYWJlbC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsRGF0YS5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfcmVzdWx0ID0gYnRvYShKU09OLnN0cmluZ2lmeShlbWl0X3Jlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICs9IHRoaXMubGFzdEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgZ2VuZXJhdGVTY29yZTIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0dlbmVyYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBkZW1vR2VuZXJhdGVTY29yZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbXVsdGlwbGllclBlcmZlY3Q7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJDb25zbztcclxuICAgICAgICB2YXIgcGxhdGZvcm07XHJcbiAgICAgICAgdmFyIHBlcmZlY3RTY29yZTtcclxuICAgICAgICB2YXIgY29uc29sZVNjb3JlO1xyXG4gICAgICAgIHBsYXRmb3JtICA9ICAgKE1hdGgucmFuZG9tKCkgKiAoMSAtIDApICsgMCk7XHJcbiAgICAgICAgaWYocGxhdGZvcm0+PTAuMyl7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcGxhdGZvcm0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIG11bHRpcGxpZXJcclxuICAgICAgICAvLyBwbGF0Zm9ybSA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMSAtIDApICsgMCk7XHJcbiAgICAgICAgbXVsdGlwbGllclBlcmZlY3QgPSAoTWF0aC5yYW5kb20oKSAqICgxMCAtIDIpICsyKTtcclxuICAgICAgICBtdWx0aXBsaWVyQ29uc28gPSAwLjI7XHJcbiAgICAgICAgcGVyZmVjdFNjb3JlID0odGhpcy5jdXJyZW50QmV0dGluZyAqIE1hdGguZmxvb3IobXVsdGlwbGllclBlcmZlY3QpKTtcclxuICAgICAgICBjb25zb2xlU2NvcmUgPSBNYXRoLnJvdW5kKCh0aGlzLmN1cnJlbnRCZXR0aW5nICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbERhdGEuY29uc29TY29yZSA9IGNvbnNvbGVTY29yZTtcclxuICAgICAgICBnbG9iYWxEYXRhLnBlcmZlY3RTY29yZSA9IHBlcmZlY3RTY29yZTtcclxuICAgICAgICBnbG9iYWxEYXRhLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKiAxMDApIC8gMTAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoXCJDaGFuZ2UtQmV0XCIpO1xyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKiAxMDApIC8gMTAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoXCJDaGFuZ2UtQmV0XCIpO1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyRGllKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJHbyB0byBob21lOiBcIiArIHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiQ2FuY2VsIGJldCBhbmQgZ28gdG8gaG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXRfcmVzdWx0ID0gYnRvYShKU09OLnN0cmluZ2lmeShlbWl0X3Jlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJEaWUpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dlbmVyYXRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuZmluaXNoR2V0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2VuZHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5maW5pc2hHZXREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR2VuZXJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVtb0dlbmVyYXRlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRpbmdCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxEYXRhLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiZXRBbW91bnQnOiB0aGlzLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkhhcHB5IEp1bXAgYmV0IHdpdGggdGhlc2UgaW5kZXggMXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcInNvY2lhbF9hZGRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfb2JqID0gYnRvYShKU09OLnN0cmluZ2lmeShlbWl0X29iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=