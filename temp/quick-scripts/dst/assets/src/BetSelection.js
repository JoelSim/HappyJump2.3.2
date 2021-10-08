
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwic3RhcnQiLCJzeXMiLCJpc01vYmlsZSIsInZpZXciLCJyZXNpemVXaXRoQnJvd3NlclNpemUiLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlJlc29sdXRpb25Qb2xpY3kiLCJTSE9XX0FMTCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImZpdEhlaWdodCIsImZpdFdpZHRoIiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJnbG9iYWxEYXRhIiwic2V0QmV0U2VsZWN0aW9uIiwiU3RhcnRHYW1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUVMLGFBQVNELEVBQUUsQ0FBQ0UsU0FGUDtBQUlMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVIQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGTCxLQUZDO0FBTWRDLElBQUFBLFVBQVUsRUFBQztBQUNELGlCQUFRLElBRFA7QUFFREYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRlAsS0FORztBQVlkQyxJQUFBQSxXQUFXLEVBQUM7QUFDWCxpQkFBUSxFQURHO0FBRVhKLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLElBQUo7QUFGTSxLQVpFO0FBaUJSSSxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUSxJQURDO0FBRVRMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZDO0FBakJMLEdBSlA7QUEyQkw7QUFFQUssRUFBQUEsTUE3Qkssb0JBNkJLO0FBQ1osU0FBS0MsaUJBQUwsR0FBeUIsQ0FBekI7QUFDQSxHQS9CTztBQWlDTEMsRUFBQUEsS0FqQ0ssbUJBaUNJO0FBQ0wsUUFBR2IsRUFBRSxDQUFDYyxHQUFILENBQU9DLFFBQVYsRUFBbUI7QUFDeEJmLE1BQUFBLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUMscUJBQVIsQ0FBOEIsSUFBOUI7QUFDQWpCLE1BQUFBLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUUsdUJBQVIsQ0FBZ0MsSUFBaEMsRUFBc0MsSUFBdEMsRUFBNENsQixFQUFFLENBQUNtQixnQkFBSCxDQUFvQkMsUUFBaEU7QUFDQSxLQUhLLE1BR0Q7QUFDSixXQUFLaEIsTUFBTCxDQUFZaUIsWUFBWixDQUF5QnJCLEVBQUUsQ0FBQ3NCLE1BQTVCLEVBQW9DQyxTQUFwQyxHQUFnRCxJQUFoRDtBQUNBLFdBQUtuQixNQUFMLENBQVlpQixZQUFaLENBQXlCckIsRUFBRSxDQUFDc0IsTUFBNUIsRUFBb0NFLFFBQXBDLEdBQStDLElBQS9DO0FBQ0E7QUFFRSxHQTFDSTtBQTRDUjtBQUVBQyxFQUFBQSxlQTlDUSwyQkE4Q1FDLEtBOUNSLEVBOENlQyxLQTlDZixFQThDcUI7QUFDNUIsU0FBS2YsaUJBQUwsR0FBeUJnQixNQUFNLENBQUNELEtBQUQsQ0FBL0I7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS3BCLFdBQUwsQ0FBaUJxQixNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFnRDtBQUMvQyxVQUFHQSxDQUFDLElBQUlGLEtBQVIsRUFBYztBQUNiLGFBQUtsQixXQUFMLENBQWlCb0IsQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLElBQTNCO0FBQ0EsT0FGRCxNQUVLO0FBQ0osYUFBS3RCLFdBQUwsQ0FBaUJvQixDQUFqQixFQUFvQkUsTUFBcEIsR0FBMkIsS0FBM0I7QUFDQTtBQUNEOztBQUNEQyxJQUFBQSxVQUFVLENBQUNDLGVBQVgsQ0FBMkJOLEtBQTNCO0FBQ0EsR0F6RE87QUEyRExPLEVBQUFBLFNBM0RLLHVCQTJETTtBQUNiO0FBQ00sU0FBS3hCLFlBQUwsQ0FBa0JxQixNQUFsQixHQUEyQixJQUEzQixDQUZPLENBR2I7O0FBQ00vQixJQUFBQSxFQUFFLENBQUNtQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDTjtBQWhFTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcblxyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgY2FudmFzOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHRcdHBsYXlCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RlZEJldDp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gMDtcclxuXHR9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xyXG5cdFx0XHRjYy52aWV3LnJlc2l6ZVdpdGhCcm93c2VyU2l6ZSh0cnVlKTtcclxuXHRcdFx0Y2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgxMDgwLCAxOTIwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG4gICAgfSxcclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cdHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEJldE9wdGlvbiA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRnbG9iYWxEYXRhLnNldEJldFNlbGVjdGlvbih2YWx1ZSk7XHJcblx0fSxcclxuXHJcbiAgICBTdGFydEdhbWUoKXtcclxuXHRcdC8vc2VuZCBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly9zdGFydCBnYW1lXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuXHR9LFxyXG59KTtcclxuIl19