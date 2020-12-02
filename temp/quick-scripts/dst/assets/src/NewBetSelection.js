
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/NewBetSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaddfyaaotPJbjSIVajZVD+', 'NewBetSelection');
// src/NewBetSelection.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    canvas: {
      "default": null,
      type: cc.Node
    },
    playButton: {
      "default": null,
      type: cc.Button
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = globalData.getBetSelection();
  },
  start: function start() {
    this.selectBet();
  },
  // update (dt) {},
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }

    globalData.setBetSelection(value);
  },
  selectBet: function selectBet() {
    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == this.selectedBetOption) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }
  },
  StartGame: function StartGame() {
    //send server
    this.loadingLayer.active = true; //start game

    cc.director.loadScene("game");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXdCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwiZ2xvYmFsRGF0YSIsImdldEJldFNlbGVjdGlvbiIsInN0YXJ0Iiwic2VsZWN0QmV0Iiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJzZXRCZXRTZWxlY3Rpb24iLCJTdGFydEdhbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFFTCxhQUFTRCxFQUFFLENBQUNFLFNBRlA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFRLElBREw7QUFFSEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkwsS0FGQztBQU1kQyxJQUFBQSxVQUFVLEVBQUM7QUFDRCxpQkFBUSxJQURQO0FBRURGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUTtBQUZQLEtBTkc7QUFZZEMsSUFBQUEsV0FBVyxFQUFDO0FBQ1gsaUJBQVEsRUFERztBQUVYSixNQUFBQSxJQUFJLEVBQUMsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0FBRk0sS0FaRTtBQWlCUkksSUFBQUEsWUFBWSxFQUFDO0FBQ1QsaUJBQVEsSUFEQztBQUVUTCxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQztBQWpCTCxHQUpQO0FBMkJMO0FBRUFLLEVBQUFBLE1BN0JLLG9CQTZCSztBQUNaLFNBQUtDLGlCQUFMLEdBQXlCQyxVQUFVLENBQUNDLGVBQVgsRUFBekI7QUFDQSxHQS9CTztBQWlDTEMsRUFBQUEsS0FqQ0ssbUJBaUNJO0FBQ1gsU0FBS0MsU0FBTDtBQUVHLEdBcENJO0FBc0NSO0FBRUFDLEVBQUFBLGVBeENRLDJCQXdDUUMsS0F4Q1IsRUF3Q2VDLEtBeENmLEVBd0NxQjtBQUM1QixTQUFLUCxpQkFBTCxHQUF5QlEsTUFBTSxDQUFDRCxLQUFELENBQS9COztBQUVBLFNBQUksSUFBSUUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEtBQUtaLFdBQUwsQ0FBaUJhLE1BQXBDLEVBQTRDRCxDQUFDLEVBQTdDLEVBQWdEO0FBQy9DLFVBQUdBLENBQUMsSUFBSUYsS0FBUixFQUFjO0FBQ2IsYUFBS1YsV0FBTCxDQUFpQlksQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLElBQTNCO0FBQ0EsT0FGRCxNQUVLO0FBQ0osYUFBS2QsV0FBTCxDQUFpQlksQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLEtBQTNCO0FBQ0E7QUFDRDs7QUFDRFYsSUFBQUEsVUFBVSxDQUFDVyxlQUFYLENBQTJCTCxLQUEzQjtBQUNBLEdBbkRPO0FBcURSSCxFQUFBQSxTQXJEUSx1QkFxREc7QUFDVixTQUFJLElBQUlLLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLWixXQUFMLENBQWlCYSxNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFnRDtBQUMvQyxVQUFHQSxDQUFDLElBQUksS0FBS1QsaUJBQWIsRUFBZ0M7QUFDL0IsYUFBS0gsV0FBTCxDQUFpQlksQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLElBQTNCO0FBQ0EsT0FGRCxNQUVLO0FBQ0osYUFBS2QsV0FBTCxDQUFpQlksQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLEtBQTNCO0FBQ0E7QUFDRDtBQUNELEdBN0RPO0FBOERMRSxFQUFBQSxTQTlESyx1QkE4RE07QUFDYjtBQUNNLFNBQUtmLFlBQUwsQ0FBa0JhLE1BQWxCLEdBQTJCLElBQTNCLENBRk8sQ0FHYjs7QUFDTXZCLElBQUFBLEVBQUUsQ0FBQzBCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNOO0FBbkVPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuXHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cdFx0cGxheUJ1dHRvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5CdXR0b25cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNlbGVjdGVkQmV0OntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRpbmdMYXllcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBnbG9iYWxEYXRhLmdldEJldFNlbGVjdGlvbigpO1xyXG5cdH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cdFx0dGhpcy5zZWxlY3RCZXQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuXHQvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcblx0c2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSl7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gTnVtYmVyKHZhbHVlKTtcclxuXHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQmV0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYoaSA9PSB2YWx1ZSl7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9dHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9ZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGdsb2JhbERhdGEuc2V0QmV0U2VsZWN0aW9uKHZhbHVlKTtcclxuXHR9LFxyXG5cclxuXHRzZWxlY3RCZXQoKXtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQmV0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYoaSA9PSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uICl7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9dHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9ZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG4gICAgU3RhcnRHYW1lKCl7XHJcblx0XHQvL3NlbmQgc2VydmVyXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vc3RhcnQgZ2FtZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==