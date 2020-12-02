
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/backgroundImage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc9f6dCJblCEabOrrIMKHIE', 'backgroundImage');
// src/backgroundImage.js

"use strict";

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
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    stage: {
      "default": null,
      type: cc.Node
    },
    myParent: {
      "default": null,
      type: cc.Node
    },
    mySpriteNode: {
      "default": null,
      type: cc.Sprite
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.name == "Change") {
      this.node.y = this.myParent.currentUpper + 1800;
      this.myParent.currentUpper = this.node.y;

      if (this.myParent.currentUpperSprite + 1 == this.myParent.bgSprite.length) {
        this.myParent.currentUpperSprite = -1;
      }

      this.mySpriteNode.spriteFrame = this.myParent.bgSprite[this.myParent.currentUpperSprite + 1];
      this.myParent.currentUpperSprite += 1;
      this.stage.addProp(this.myParent.currentUpperSprite, this.node.y);
    }
  },
  start: function start() {
    this.stage = this.stage.getComponent("Stage");
    this.myParent = this.myParent.getComponent("BackgroundControl");
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxiYWNrZ3JvdW5kSW1hZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFnZSIsInR5cGUiLCJOb2RlIiwibXlQYXJlbnQiLCJteVNwcml0ZU5vZGUiLCJTcHJpdGUiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibm9kZSIsIm5hbWUiLCJ5IiwiY3VycmVudFVwcGVyIiwiY3VycmVudFVwcGVyU3ByaXRlIiwiYmdTcHJpdGUiLCJsZW5ndGgiLCJzcHJpdGVGcmFtZSIsImFkZFByb3AiLCJzdGFydCIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLEtBQUssRUFBQztBQUNGLGlCQUFRLElBRE47QUFFRkMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRk4sS0FqQkU7QUFxQlJDLElBQUFBLFFBQVEsRUFBQztBQUNMLGlCQUFRLElBREg7QUFFTEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkgsS0FyQkQ7QUEwQlJFLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEgsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNTO0FBRkM7QUExQkwsR0FIUDtBQW1DTDtBQUVBO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsSUFBWCxJQUFrQixRQUFyQixFQUE4QjtBQUMxQixXQUFLRCxJQUFMLENBQVVFLENBQVYsR0FBYyxLQUFLUixRQUFMLENBQWNTLFlBQWQsR0FBNkIsSUFBM0M7QUFDQSxXQUFLVCxRQUFMLENBQWNTLFlBQWQsR0FBNkIsS0FBS0gsSUFBTCxDQUFVRSxDQUF2Qzs7QUFDQSxVQUFHLEtBQUtSLFFBQUwsQ0FBY1Usa0JBQWQsR0FBaUMsQ0FBakMsSUFBc0MsS0FBS1YsUUFBTCxDQUFjVyxRQUFkLENBQXVCQyxNQUFoRSxFQUF1RTtBQUNuRSxhQUFLWixRQUFMLENBQWNVLGtCQUFkLEdBQW1DLENBQUMsQ0FBcEM7QUFDSDs7QUFDRCxXQUFLVCxZQUFMLENBQWtCWSxXQUFsQixHQUFnQyxLQUFLYixRQUFMLENBQWNXLFFBQWQsQ0FBdUIsS0FBS1gsUUFBTCxDQUFjVSxrQkFBZCxHQUFrQyxDQUF6RCxDQUFoQztBQUNBLFdBQUtWLFFBQUwsQ0FBY1Usa0JBQWQsSUFBbUMsQ0FBbkM7QUFDQSxXQUFLYixLQUFMLENBQVdpQixPQUFYLENBQW1CLEtBQUtkLFFBQUwsQ0FBY1Usa0JBQWpDLEVBQW9ELEtBQUtKLElBQUwsQ0FBVUUsQ0FBOUQ7QUFDSDtBQUVKLEdBbERJO0FBbURMTyxFQUFBQSxLQW5ESyxtQkFtREk7QUFDTCxTQUFLbEIsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV21CLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBLFNBQUtoQixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2dCLFlBQWQsQ0FBMkIsbUJBQTNCLENBQWhCO0FBQ0gsR0F0REksQ0F3REw7O0FBeERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgc3RhZ2U6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15UGFyZW50OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbXlTcHJpdGVOb2RlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PVwiQ2hhbmdlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubXlQYXJlbnQuY3VycmVudFVwcGVyICsgMTgwMDtcclxuICAgICAgICAgICAgdGhpcy5teVBhcmVudC5jdXJyZW50VXBwZXIgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICAgICAgaWYodGhpcy5teVBhcmVudC5jdXJyZW50VXBwZXJTcHJpdGUrMSA9PSB0aGlzLm15UGFyZW50LmJnU3ByaXRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubXlTcHJpdGVOb2RlLnNwcml0ZUZyYW1lID0gdGhpcy5teVBhcmVudC5iZ1Nwcml0ZVt0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSArMV07XHJcbiAgICAgICAgICAgIHRoaXMubXlQYXJlbnQuY3VycmVudFVwcGVyU3ByaXRlICs9MSA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UuYWRkUHJvcCh0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSx0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSB0aGlzLnN0YWdlLmdldENvbXBvbmVudChcIlN0YWdlXCIpO1xyXG4gICAgICAgIHRoaXMubXlQYXJlbnQgPSB0aGlzLm15UGFyZW50LmdldENvbXBvbmVudChcIkJhY2tncm91bmRDb250cm9sXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==