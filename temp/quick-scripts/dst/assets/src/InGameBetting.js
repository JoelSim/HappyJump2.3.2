
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxJbkdhbWVCZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNHZW5lcmF0aW5nIiwibXlCdXR0b24iLCJ0eXBlIiwiTm9kZSIsImlzUmVzdGFydGluZyIsImJldHRpbmdPcHRpb25UZXh0Iiwic2VsZWN0ZWRCZXQiLCJhbmltIiwiQW5pbWF0aW9uIiwibG9hZGluZ0xheWVyIiwiaW5zdWZmaWNpZW50IiwiYmFsYW5jZVRleHQiLCJMYWJlbCIsImhpZGluZyIsImN1cnJlbnRCZXR0aW5nIiwibGFzdEJldHRpbmciLCJwbGF5ZXJEaWUiLCJvbkxvYWQiLCJzZWxlY3RlZEJldE9wdGlvbiIsImdsb2JhbERhdGEiLCJjdXJyZW50QmV0IiwiZ2V0U29ja2V0IiwiZ2V0Q29tcG9uZW50IiwiY29ubmVjdFNvY2tldCIsIlNldEFtb3VudCIsImhpZGUiLCJwbGF5IiwiZXZlbiIsInZhbHVlIiwibWFpbnRCZXRPcHRpb24iLCJnZXRCZXRTZWxlY3Rpb24iLCJteVZhbHVlIiwiaSIsImxlbmd0aCIsInN0cmluZyIsInNldEJldEFtb3VudCIsImFjdGl2ZSIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbnRCZXRTbG90Iiwib3BhY2l0eSIsIk51bWJlciIsImlzRGVtbyIsImVtaXRfcmVzdWx0IiwiaG9zdF9pZCIsImFjY2Vzc190b2tlbiIsInRpY2tldF9pZCIsImdhbWVfY29kZSIsInVzZXJfaWQiLCJhcGlfdXJsIiwiaXNFbmNyeXB0IiwiYnRvYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWl0IiwiZ2VuZXJhdGluZ0JhbGFuY2UiLCJlbWl0X29iaiIsImdlbmVyYXRlU2NvcmUyIiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJjYW5QbGF5IiwibG9nIiwic3RhcnQiLCJkZW1vR2VuZXJhdGVTY29yZSIsIm11bHRpcGxpZXJQZXJmZWN0IiwibXVsdGlwbGllckNvbnNvIiwicGxhdGZvcm0iLCJwZXJmZWN0U2NvcmUiLCJjb25zb2xlU2NvcmUiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJyb3VuZCIsImNvbnNvU2NvcmUiLCJ0b1N0cmluZyIsInN5c3RlbUV2ZW50IiwiZ2VuZXJhdGVTY29yZSIsIm9uRGVzdHJveSIsInVwZGF0ZSIsImR0IiwiZmluaXNoR2V0RGF0YSIsInNjaGVkdWxlT25jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFLEtBRE47QUFFUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkEsS0FGRjtBQU1SQyxJQUFBQSxZQUFZLEVBQUUsS0FOTjtBQU9SQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUNmLGlCQUFTLEVBRE07QUFFZkgsTUFBQUEsSUFBSSxFQUFFLENBQUNOLEVBQUUsQ0FBQ08sSUFBSjtBQUZTLEtBUFg7QUFZUkcsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsRUFEQTtBQUVUSixNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkcsS0FaTDtBQWdCUkksSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ1k7QUFGUCxLQWhCRTtBQXFCUjtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZQLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUZDLEtBMUJOO0FBOEJSTyxJQUFBQSxZQUFZLEVBQUU7QUFD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QVUsQ0FBQytELHVCQUFmLEVBQXdDO0FBQ3BDLGVBQUt4RSxZQUFMLENBQWtCMEIsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxjQUFJb0IsUUFBUSxHQUFHO0FBQ1gsdUJBQVdyQyxVQUFVLENBQUN5QixPQURYO0FBRVgsNEJBQWdCekIsVUFBVSxDQUFDMEIsWUFGaEI7QUFHWCx5QkFBYSxFQUhGO0FBSVgseUJBQWEsS0FBSy9CLGNBSlA7QUFLWCxtQkFBTyxxQ0FMSTtBQU1YLDJCQUFlLEtBTko7QUFPWCx1QkFBV0ssVUFBVSxDQUFDa0IsUUFBWCxDQUFvQlcsT0FQcEI7QUFRWCx1QkFBVTdCLFVBQVUsQ0FBQzhCLE9BUlY7QUFTWCwyQkFBZSxjQVRKO0FBVVgseUJBQWE5QixVQUFVLENBQUMyQixTQVZiO0FBV1gsOEJBQWlCM0IsVUFBVSxDQUFDb0I7QUFYakIsV0FBZjs7QUFhQSxjQUFHcEIsVUFBVSxDQUFDK0IsU0FBZCxFQUF3QjtBQUNwQk0sWUFBQUEsUUFBUSxHQUFHTCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRyxRQUFmLENBQUQsQ0FBZjtBQUNIOztBQUNEckMsVUFBQUEsVUFBVSxDQUFDRSxTQUFYLEdBQXVCaUMsSUFBdkIsQ0FBNEIsV0FBNUIsRUFBeUNFLFFBQXpDO0FBQ0EsZUFBS0MsY0FBTDtBQUNBLGVBQUtGLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0FwQyxVQUFBQSxVQUFVLENBQUMrRCx1QkFBWCxHQUFxQyxLQUFyQztBQUVIO0FBQ0osT0F6QkQsTUEyQks7QUFDRCxhQUFLeEUsWUFBTCxDQUFrQjBCLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0EsYUFBS3FCLGNBQUw7QUFDQSxhQUFLRixpQkFBTCxHQUF5QixLQUF6QjtBQUNIO0FBRUo7QUFFSjtBQXpaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzR2VuZXJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgbXlCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzUmVzdGFydGluZzogZmFsc2UsXHJcbiAgICAgICAgYmV0dGluZ09wdGlvblRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdGVkQmV0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gY3VycmVudEJldHRpbmdMYWJlbDoge1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb2FkaW5nTGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3VmZmljaWVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsYW5jZVRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRCZXR0aW5nOiAwLFxyXG4gICAgICAgIGxhc3RCZXR0aW5nOiAwLFxyXG4gICAgICAgIHBsYXllckRpZTpmYWxzZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5jdXJyZW50QmV0O1xyXG4gICAgICAgIGlmICghZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuU2V0QW1vdW50KDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJIaWRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlNob3dcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBTZXRBbW91bnQoZXZlbiwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW50QmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5nZXRCZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gNTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gaSkpICogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQmV0T3B0aW9uIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXR0aW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkgLyAodGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGggLSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSkgKiAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0QmV0QW1vdW50KHRoaXMuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teUJ1dHRvbltpXS5zY2FsZSA9IGNjLnYyKDAuOSwgMC45KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90PXRoaXMuc2VsZWN0ZWRCZXRPcHRpb247XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRCZXR0aW5nTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgIC8vZWxpZ2libGUgZm9yIGJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodmFsdWUpID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlQmV0Jzp0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9yZXN1bHQgPSBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICs9IHRoaXMubGFzdEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmV0QW1vdW50JzogdGhpcy5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOiBnbG9iYWxEYXRhLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50QmV0U2xvdFwiOmdsb2JhbERhdGEuY3VycmVudEJldFNsb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9vYmogPSBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfb2JqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdjaGFuZ2VCZXQnLCBlbWl0X29iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZTIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSAtPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAvL3RoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG5cclxuICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5sb2coXCJTZWxlY3RlZCBiZXQgb3B0aW9uOlwiICsgdGhpcy5zZWxlY3RlZEJldE9wdGlvbik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQmV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teUJ1dHRvbltpXS5zY2FsZSA9IGNjLnYyKDAuOSwgMC45KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpKSAqICh0aGlzLnNlbGVjdGVkQmV0T3B0aW9uICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXR0aW5nID0gKCgxICogdGhpcy5teVZhbHVlKSAvICh0aGlzLmJldHRpbmdPcHRpb25UZXh0Lmxlbmd0aCAtIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24pKSAqIDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRCZXRBbW91bnQodGhpcy5jdXJyZW50QmV0dGluZyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RCZXR0aW5nICE9IHRoaXMuY3VycmVudEJldHRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArIHRoaXMubGFzdEJldHRpbmcgPj0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICAgICAgLy9lbGlnaWJsZSBmb3IgYmV0dGluZztcclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuY3VycmVudEJldFNsb3Q9dGhpcy5zZWxlY3RlZEJldE9wdGlvbjtcclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuY3VycmVudEJldCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRCZXR0aW5nTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWxEYXRhLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2VCZXQnOnRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0X3Jlc3VsdCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArIHRoaXMubGFzdEJldHRpbmcgPj0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdlbmVyYXRlU2NvcmUyKCkge1xyXG4gICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG4gICAgZGVtb0dlbmVyYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJQZXJmZWN0O1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyQ29uc287XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtO1xyXG4gICAgICAgIHZhciBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVTY29yZTtcclxuICAgICAgICBwbGF0Zm9ybSAgPSAgIChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIGlmKHBsYXRmb3JtPj0wLjMpe1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtdWx0aXBsaWVyXHJcbiAgICAgICAgLy8gcGxhdGZvcm0gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArMik7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gMC4yO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9KHRoaXMuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgodGhpcy5jdXJyZW50QmV0dGluZyAqIG11bHRpcGxpZXJDb25zbykgKiAxMCkgLyAxMDtcclxuICAgICAgICBnbG9iYWxEYXRhLmNvbnNvU2NvcmUgPSBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgIH0sXHJcbiAgICBnZW5lcmF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiR28gdG8gaG9tZTogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWxEYXRhLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkNhbmNlbCBiZXQgYW5kIGdvIHRvIGhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGFuZ2VCZXQnOnRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0X3Jlc3VsdCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyRGllKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLnNldHRpbmdzLmJhbGFuY2UgKz0gdGhpcy5sYXN0QmV0dGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmF0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxEYXRhLmZpbmlzaEdldERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3NlbmRyZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR2VuZXJhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZmluaXNoR2V0RGF0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dlbmVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbW9HZW5lcmF0ZVNjb3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0aW5nQmFsYW5jZSkge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmV0QW1vdW50JzogdGhpcy5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJIYXBweSBKdW1wIGJldCB3aXRoIHRoZXNlIGluZGV4IDFzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOiBnbG9iYWxEYXRhLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWVzdFR5cGVcIjogXCJzb2NpYWxfYWRkb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRCZXRTbG90XCI6Z2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0X29iaiA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdjaGFuZ2VCZXQnLCBlbWl0X29iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19