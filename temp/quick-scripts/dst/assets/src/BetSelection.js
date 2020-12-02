
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/BetSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c4d8M2FYNB8pqHAGurgrUI', 'BetSelection');
// src/BetSelection.js

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
    this.selectedBetOption = 0;
  },
  start: function start() {
    if (cc.sys.isMobile) {
      cc.view.resizeWithBrowserSize(true);
      cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
    } else {
      this.canvas.getComponent(cc.Canvas).fitHeight = true;
      this.canvas.getComponent(cc.Canvas).fitWidth = true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwic3RhcnQiLCJzeXMiLCJpc01vYmlsZSIsInZpZXciLCJyZXNpemVXaXRoQnJvd3NlclNpemUiLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlJlc29sdXRpb25Qb2xpY3kiLCJTSE9XX0FMTCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImZpdEhlaWdodCIsImZpdFdpZHRoIiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJnbG9iYWxEYXRhIiwic2V0QmV0U2VsZWN0aW9uIiwiU3RhcnRHYW1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBRUwsYUFBU0QsRUFBRSxDQUFDRSxTQUZQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxNQUFNLEVBQUM7QUFDSCxpQkFBUSxJQURMO0FBRUhDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZMLEtBRkM7QUFNZEMsSUFBQUEsVUFBVSxFQUFDO0FBQ0QsaUJBQVEsSUFEUDtBQUVERixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGUCxLQU5HO0FBWWRDLElBQUFBLFdBQVcsRUFBQztBQUNYLGlCQUFRLEVBREc7QUFFWEosTUFBQUEsSUFBSSxFQUFDLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtBQUZNLEtBWkU7QUFpQlJJLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkM7QUFqQkwsR0FKUDtBQTJCTDtBQUVBSyxFQUFBQSxNQTdCSyxvQkE2Qks7QUFDWixTQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQUNBLEdBL0JPO0FBaUNMQyxFQUFBQSxLQWpDSyxtQkFpQ0k7QUFDTCxRQUFHYixFQUFFLENBQUNjLEdBQUgsQ0FBT0MsUUFBVixFQUFtQjtBQUN4QmYsTUFBQUEsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRQyxxQkFBUixDQUE4QixJQUE5QjtBQUNBakIsTUFBQUEsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRRSx1QkFBUixDQUFnQyxJQUFoQyxFQUFzQyxJQUF0QyxFQUE0Q2xCLEVBQUUsQ0FBQ21CLGdCQUFILENBQW9CQyxRQUFoRTtBQUNBLEtBSEssTUFHRDtBQUNKLFdBQUtoQixNQUFMLENBQVlpQixZQUFaLENBQXlCckIsRUFBRSxDQUFDc0IsTUFBNUIsRUFBb0NDLFNBQXBDLEdBQWdELElBQWhEO0FBQ0EsV0FBS25CLE1BQUwsQ0FBWWlCLFlBQVosQ0FBeUJyQixFQUFFLENBQUNzQixNQUE1QixFQUFvQ0UsUUFBcEMsR0FBK0MsSUFBL0M7QUFDQTtBQUVFLEdBMUNJO0FBNENSO0FBRUFDLEVBQUFBLGVBOUNRLDJCQThDUUMsS0E5Q1IsRUE4Q2VDLEtBOUNmLEVBOENxQjtBQUM1QixTQUFLZixpQkFBTCxHQUF5QmdCLE1BQU0sQ0FBQ0QsS0FBRCxDQUEvQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLcEIsV0FBTCxDQUFpQnFCLE1BQXBDLEVBQTRDRCxDQUFDLEVBQTdDLEVBQWdEO0FBQy9DLFVBQUdBLENBQUMsSUFBSUYsS0FBUixFQUFjO0FBQ2IsYUFBS2xCLFdBQUwsQ0FBaUJvQixDQUFqQixFQUFvQkUsTUFBcEIsR0FBMkIsSUFBM0I7QUFDQSxPQUZELE1BRUs7QUFDSixhQUFLdEIsV0FBTCxDQUFpQm9CLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0RDLElBQUFBLFVBQVUsQ0FBQ0MsZUFBWCxDQUEyQk4sS0FBM0I7QUFDQSxHQXpETztBQTJETE8sRUFBQUEsU0EzREssdUJBMkRNO0FBQ2I7QUFDTSxTQUFLeEIsWUFBTCxDQUFrQnFCLE1BQWxCLEdBQTJCLElBQTNCLENBRk8sQ0FHYjs7QUFDTS9CLElBQUFBLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNOO0FBaEVPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmNjLkNsYXNzKHtcclxuXHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBjYW52YXM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cdFx0cGxheUJ1dHRvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5CdXR0b25cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNlbGVjdGVkQmV0OntcclxuXHRcdFx0ZGVmYXVsdDpbXSxcclxuXHRcdFx0dHlwZTpbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxvYWRpbmdMYXllcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSAwO1xyXG5cdH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSl7XHJcblx0XHRcdGNjLnZpZXcucmVzaXplV2l0aEJyb3dzZXJTaXplKHRydWUpO1xyXG5cdFx0XHRjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDEwODAsIDE5MjAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuY2FudmFzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IHRydWU7XHJcblx0XHRcdHRoaXMuY2FudmFzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHQvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcblx0c2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSl7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gTnVtYmVyKHZhbHVlKTtcclxuXHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQmV0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYoaSA9PSB2YWx1ZSl7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9dHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEJldFtpXS5hY3RpdmU9ZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGdsb2JhbERhdGEuc2V0QmV0U2VsZWN0aW9uKHZhbHVlKTtcclxuXHR9LFxyXG5cclxuICAgIFN0YXJ0R2FtZSgpe1xyXG5cdFx0Ly9zZW5kIHNlcnZlclxyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHQvL3N0YXJ0IGdhbWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=