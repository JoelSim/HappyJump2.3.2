
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

var globalData = _interopRequireWildcard(require("GlobalData"));

var ecrypt = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
              emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
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
              emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
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
            emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
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
          emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
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
            emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxJbkdhbWVCZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNHZW5lcmF0aW5nIiwibXlCdXR0b24iLCJ0eXBlIiwiTm9kZSIsImlzUmVzdGFydGluZyIsImJldHRpbmdPcHRpb25UZXh0Iiwic2VsZWN0ZWRCZXQiLCJhbmltIiwiQW5pbWF0aW9uIiwibG9hZGluZ0xheWVyIiwiaW5zdWZmaWNpZW50IiwiYmFsYW5jZVRleHQiLCJMYWJlbCIsImhpZGluZyIsImN1cnJlbnRCZXR0aW5nIiwibGFzdEJldHRpbmciLCJwbGF5ZXJEaWUiLCJvbkxvYWQiLCJzZWxlY3RlZEJldE9wdGlvbiIsImdsb2JhbERhdGEiLCJjdXJyZW50QmV0IiwiU2V0QW1vdW50IiwiaGlkZSIsInBsYXkiLCJldmVuIiwidmFsdWUiLCJtYWludEJldE9wdGlvbiIsImdldEJldFNlbGVjdGlvbiIsIm15VmFsdWUiLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwic2V0QmV0QW1vdW50IiwiYWN0aXZlIiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiY3VycmVudEJldFNsb3QiLCJvcGFjaXR5IiwiTnVtYmVyIiwiaXNEZW1vIiwiZW1pdF9yZXN1bHQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwidGlja2V0X2lkIiwiZ2FtZV9jb2RlIiwidXNlcl9pZCIsImFwaV91cmwiLCJpc0VuY3J5cHQiLCJlY3J5cHQiLCJlbmNyeXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNvY2tldCIsImVtaXQiLCJnZW5lcmF0aW5nQmFsYW5jZSIsImVtaXRfb2JqIiwiZ2VuZXJhdGVTY29yZTIiLCJzZWxlY3RCZXRPcHRpb24iLCJldmVudCIsImNhblBsYXkiLCJsb2ciLCJzdGFydCIsImRlbW9HZW5lcmF0ZVNjb3JlIiwibXVsdGlwbGllclBlcmZlY3QiLCJtdWx0aXBsaWVyQ29uc28iLCJwbGF0Zm9ybSIsInBlcmZlY3RTY29yZSIsImNvbnNvbGVTY29yZSIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInJvdW5kIiwiY29uc29TY29yZSIsInRvU3RyaW5nIiwic3lzdGVtRXZlbnQiLCJnZW5lcmF0ZVNjb3JlIiwib25EZXN0cm95IiwidXBkYXRlIiwiZHQiLCJmaW5pc2hHZXREYXRhIiwic2NoZWR1bGVPbmNlIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7Ozs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFLEtBRE47QUFFUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkEsS0FGRjtBQU1SQyxJQUFBQSxZQUFZLEVBQUUsS0FOTjtBQU9SQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUNmLGlCQUFTLEVBRE07QUFFZkgsTUFBQUEsSUFBSSxFQUFFLENBQUNOLEVBQUUsQ0FBQ08sSUFBSjtBQUZTLEtBUFg7QUFZUkcsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsRUFEQTtBQUVUSixNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkcsS0FaTDtBQWdCUkksSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ1k7QUFGUCxLQWhCRTtBQXFCUjtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZQLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUZDLEtBMUJOO0FBOEJSTyxJQUFBQSxZQUFZLEVBQUU7QUFD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S0FBM0I7QUFDQSxjQUFJc0IsUUFBUSxHQUFHO0FBQ1gsdUJBQVdyQyxVQUFVLENBQUN1QixPQURYO0FBRVgsNEJBQWdCdkIsVUFBVSxDQUFDd0IsWUFGaEI7QUFHWCx5QkFBYSxFQUhGO0FBSVgseUJBQWEsS0FBSzdCLGNBSlA7QUFLWCxtQkFBTyxxQ0FMSTtBQU1YLDJCQUFlLEtBTko7QUFPWCx1QkFBV0ssVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQlcsT0FQcEI7QUFRWCx1QkFBVTNCLFVBQVUsQ0FBQzRCLE9BUlY7QUFTWCwyQkFBZSxjQVRKO0FBVVgseUJBQWE1QixVQUFVLENBQUN5QixTQVZiO0FBV1gsOEJBQWlCekIsVUFBVSxDQUFDa0I7QUFYakIsV0FBZjs7QUFhQSxjQUFHbEIsVUFBVSxDQUFDNkIsU0FBZCxFQUF3QjtBQUNwQlEsWUFBQUEsUUFBUSxHQUFHUCxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWVJLFFBQWYsQ0FBZixDQUFYO0FBQ0g7O0FBQ0RyQyxVQUFBQSxVQUFVLENBQUNrQyxTQUFYLEdBQXVCQyxJQUF2QixDQUE0QixXQUE1QixFQUF5Q0UsUUFBekM7QUFDQSxlQUFLQyxjQUFMO0FBQ0EsZUFBS0YsaUJBQUwsR0FBeUIsS0FBekI7QUFDQXBDLFVBQUFBLFVBQVUsQ0FBQytELHVCQUFYLEdBQXFDLEtBQXJDO0FBRUg7QUFDSixPQXpCRCxNQTJCSztBQUNELGFBQUt4RSxZQUFMLENBQWtCd0IsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxhQUFLdUIsY0FBTDtBQUNBLGFBQUtGLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0g7QUFFSjtBQUVKO0FBdFpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdCBmcm9tIFwiZWNyeXB0XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzR2VuZXJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgbXlCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzUmVzdGFydGluZzogZmFsc2UsXHJcbiAgICAgICAgYmV0dGluZ09wdGlvblRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdGVkQmV0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gY3VycmVudEJldHRpbmdMYWJlbDoge1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb2FkaW5nTGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3VmZmljaWVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsYW5jZVRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRCZXR0aW5nOiAwLFxyXG4gICAgICAgIGxhc3RCZXR0aW5nOiAwLFxyXG4gICAgICAgIHBsYXllckRpZTpmYWxzZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5jdXJyZW50QmV0O1xyXG4gICAgICAgIHRoaXMuU2V0QW1vdW50KDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJIaWRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlNob3dcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBTZXRBbW91bnQoZXZlbiwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW50QmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5nZXRCZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gNTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gaSkpICogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQmV0T3B0aW9uIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXR0aW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkgLyAodGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGggLSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSkgKiAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0QmV0QW1vdW50KHRoaXMuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teUJ1dHRvbltpXS5zY2FsZSA9IGNjLnYyKDAuOSwgMC45KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90PXRoaXMuc2VsZWN0ZWRCZXRPcHRpb247XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRCZXR0aW5nTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgIC8vZWxpZ2libGUgZm9yIGJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodmFsdWUpID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlQmV0Jzp0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9yZXN1bHQgPSBlY3J5cHQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShlbWl0X3Jlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JldEFtb3VudCc6IHRoaXMuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkhhcHB5IEp1bXAgYmV0IHdpdGggdGhlc2UgaW5kZXggMXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWVzdFR5cGVcIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfb2JqID0gZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlIC09IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZTIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIC8vdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmxvZyhcIlNlbGVjdGVkIGJldCBvcHRpb246XCIgKyB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC45LCAwLjkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikpICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJldEFtb3VudCh0aGlzLmN1cnJlbnRCZXR0aW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvL2VsaWdpYmxlIGZvciBiZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdD10aGlzLnNlbGVjdGVkQmV0T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0ID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEJldHRpbmdMYWJlbC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsRGF0YS5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfcmVzdWx0ID0gZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArIHRoaXMubGFzdEJldHRpbmcgPj0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdlbmVyYXRlU2NvcmUyKCkge1xyXG4gICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG4gICAgZGVtb0dlbmVyYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJQZXJmZWN0O1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyQ29uc287XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtO1xyXG4gICAgICAgIHZhciBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVTY29yZTtcclxuICAgICAgICBwbGF0Zm9ybSAgPSAgIChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIGlmKHBsYXRmb3JtPj0wLjMpe1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtdWx0aXBsaWVyXHJcbiAgICAgICAgLy8gcGxhdGZvcm0gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArMik7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gMC4yO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9KHRoaXMuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgodGhpcy5jdXJyZW50QmV0dGluZyAqIG11bHRpcGxpZXJDb25zbykgKiAxMCkgLyAxMDtcclxuICAgICAgICBnbG9iYWxEYXRhLmNvbnNvU2NvcmUgPSBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgIH0sXHJcbiAgICBnZW5lcmF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiR28gdG8gaG9tZTogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWxEYXRhLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkNhbmNlbCBiZXQgYW5kIGdvIHRvIGhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGFuZ2VCZXQnOnRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0X3Jlc3VsdCA9IGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICs9IHRoaXMubGFzdEJldHRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2VuZXJhdGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5maW5pc2hHZXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZW5kcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0dlbmVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmZpbmlzaEdldERhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZW1vR2VuZXJhdGVTY29yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9vYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiAyMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JldEFtb3VudCc6IHRoaXMuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVlc3RUeXBlXCI6IFwic29jaWFsX2FkZG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50QmV0U2xvdFwiOmdsb2JhbERhdGEuY3VycmVudEJldFNsb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9vYmogPSBlY3J5cHQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShlbWl0X29iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=