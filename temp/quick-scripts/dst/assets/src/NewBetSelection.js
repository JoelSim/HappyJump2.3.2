
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

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXdCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwiZ2xvYmFsRGF0YSIsImdldEJldFNlbGVjdGlvbiIsInN0YXJ0Iiwic2VsZWN0QmV0Iiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJzZXRCZXRTZWxlY3Rpb24iLCJTdGFydEdhbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBRUwsYUFBU0QsRUFBRSxDQUFDRSxTQUZQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxNQUFNLEVBQUM7QUFDSCxpQkFBUSxJQURMO0FBRUhDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZMLEtBRkM7QUFNZEMsSUFBQUEsVUFBVSxFQUFDO0FBQ0QsaUJBQVEsSUFEUDtBQUVERixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGUCxLQU5HO0FBWWRDLElBQUFBLFdBQVcsRUFBQztBQUNYLGlCQUFRLEVBREc7QUFFWEosTUFBQUEsSUFBSSxFQUFDLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtBQUZNLEtBWkU7QUFpQlJJLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkM7QUFqQkwsR0FKUDtBQTJCTDtBQUVBSyxFQUFBQSxNQTdCSyxvQkE2Qks7QUFDWixTQUFLQyxpQkFBTCxHQUF5QkMsVUFBVSxDQUFDQyxlQUFYLEVBQXpCO0FBQ0EsR0EvQk87QUFpQ0xDLEVBQUFBLEtBakNLLG1CQWlDSTtBQUNYLFNBQUtDLFNBQUw7QUFFRyxHQXBDSTtBQXNDUjtBQUVBQyxFQUFBQSxlQXhDUSwyQkF3Q1FDLEtBeENSLEVBd0NlQyxLQXhDZixFQXdDcUI7QUFDNUIsU0FBS1AsaUJBQUwsR0FBeUJRLE1BQU0sQ0FBQ0QsS0FBRCxDQUEvQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLWixXQUFMLENBQWlCYSxNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFnRDtBQUMvQyxVQUFHQSxDQUFDLElBQUlGLEtBQVIsRUFBYztBQUNiLGFBQUtWLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixJQUEzQjtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtkLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0RWLElBQUFBLFVBQVUsQ0FBQ1csZUFBWCxDQUEyQkwsS0FBM0I7QUFDQSxHQW5ETztBQXFEUkgsRUFBQUEsU0FyRFEsdUJBcURHO0FBQ1YsU0FBSSxJQUFJSyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS1osV0FBTCxDQUFpQmEsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBZ0Q7QUFDL0MsVUFBR0EsQ0FBQyxJQUFJLEtBQUtULGlCQUFiLEVBQWdDO0FBQy9CLGFBQUtILFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixJQUEzQjtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtkLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7QUFDRCxHQTdETztBQThETEUsRUFBQUEsU0E5REssdUJBOERNO0FBQ2I7QUFDTSxTQUFLZixZQUFMLENBQWtCYSxNQUFsQixHQUEyQixJQUEzQixDQUZPLENBR2I7O0FBQ012QixJQUFBQSxFQUFFLENBQUMwQixRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDTjtBQW5FTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcblxyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgY2FudmFzOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHRcdHBsYXlCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RlZEJldDp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5nZXRCZXRTZWxlY3Rpb24oKTtcclxuXHR9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHRcdHRoaXMuc2VsZWN0QmV0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cdHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEJldE9wdGlvbiA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRnbG9iYWxEYXRhLnNldEJldFNlbGVjdGlvbih2YWx1ZSk7XHJcblx0fSxcclxuXHJcblx0c2VsZWN0QmV0KCl7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbiApe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuICAgIFN0YXJ0R2FtZSgpe1xyXG5cdFx0Ly9zZW5kIHNlcnZlclxyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHQvL3N0YXJ0IGdhbWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=