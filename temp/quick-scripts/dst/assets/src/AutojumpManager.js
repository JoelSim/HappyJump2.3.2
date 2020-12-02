
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/AutojumpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '366b7avfPRDxLX31qGk9Pzy', 'AutojumpManager');
// src/AutojumpManager.js

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
    plusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusButton: {
      "default": null,
      type: cc.Sprite
    },
    minusButton: {
      "default": null,
      type: cc.Sprite
    },
    autoJumpSprite: {
      "default": [],
      type: [cc.Node]
    },
    autoJumpPanel: {
      "default": null,
      type: cc.Node
    },
    autoJumpNumber: 10,
    autoJumpLabel: {
      "default": null,
      type: cc.Label
    },
    lastSelectedJumpNumber: 10,
    jumpCount: {
      "default": null,
      type: cc.Label
    },
    jumpAmountLibrary: {
      "default": [],
      type: [cc.Integer]
    },
    currentValue: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.jumpAmountLibrary = [10, 50, 100, 500];
  },
  getSuccess: function getSuccess() {},
  openPanel: function openPanel() {
    if (this.autoJumpSprite[1].active) {
      this.stopJump();
    } else {
      this.autoJumpNumber = this.lastSelectedJumpNumber;
      this.autoJumpPanel.active = true;
    }
  },
  stopJump: function stopJump() {
    cc.find("Canvas/stage").getComponent("Stage").autoJump = false;
    this.autoJumpSprite[1].active = false;
    this.autoJumpSprite[0].active = true;
  },
  closePanel: function closePanel() {
    this.autoJumpPanel.active = false;
  },
  addValue: function addValue() {
    this.currentValue++;

    if (this.currentValue >= 3) {
      this.currentValue = 3;
      this.plusButton.spriteFrame = this.plusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  minusValue: function minusValue() {
    this.currentValue--;

    if (this.currentValue <= 0) {
      this.currentValue = 0;
      this.minusButton.spriteFrame = this.minusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  confirmJump: function confirmJump() {
    this.lastSelectedJumpNumber = this.autoJumpNumber;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";
    cc.find("Canvas/stage").getComponent("Stage").autoJump = true;
    this.autoJumpSprite[1].active = true;
    this.autoJumpSprite[0].active = false;
    this.closePanel();
  },
  updateJumpTimes: function updateJumpTimes() {
    this.autoJumpNumber -= 1;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";

    if (this.autoJumpNumber <= 0) {
      this.stopJump();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdXRvanVtcE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbHVzQWN0aXZlU3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwicGx1c05vdEFjdGl2ZVNwcml0ZSIsIm1pbnVzQWN0aXZlU3ByaXRlIiwibWludXNOb3RBY3RpdmVTcHJpdGUiLCJwbHVzQnV0dG9uIiwiU3ByaXRlIiwibWludXNCdXR0b24iLCJhdXRvSnVtcFNwcml0ZSIsIk5vZGUiLCJhdXRvSnVtcFBhbmVsIiwiYXV0b0p1bXBOdW1iZXIiLCJhdXRvSnVtcExhYmVsIiwiTGFiZWwiLCJsYXN0U2VsZWN0ZWRKdW1wTnVtYmVyIiwianVtcENvdW50IiwianVtcEFtb3VudExpYnJhcnkiLCJJbnRlZ2VyIiwiY3VycmVudFZhbHVlIiwic3RhcnQiLCJnZXRTdWNjZXNzIiwib3BlblBhbmVsIiwiYWN0aXZlIiwic3RvcEp1bXAiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiYXV0b0p1bXAiLCJjbG9zZVBhbmVsIiwiYWRkVmFsdWUiLCJzcHJpdGVGcmFtZSIsInN0cmluZyIsIm1pbnVzVmFsdWUiLCJjb25maXJtSnVtcCIsInVwZGF0ZUp1bXBUaW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLGdCQUFnQixFQUFDO0FBQ2IsaUJBQVEsSUFESztBQUViQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGSyxLQWpCVDtB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QyxJQUFoQztBQUNBLFNBQUtkLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUJjLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0EsU0FBS0ssVUFBTDtBQUdILEdBMUpJO0FBNEpMTSxFQUFBQSxlQTVKSyw2QkE0Slk7QUFDYixTQUFLdEIsY0FBTCxJQUFzQixDQUF0QjtBQUNBLFNBQUtJLFNBQUwsQ0FBZWUsTUFBZixHQUF3QixNQUFJLEtBQUtuQixjQUFULEdBQXdCLEdBQWhEOztBQUNBLFFBQUcsS0FBS0EsY0FBTCxJQUFxQixDQUF4QixFQUEwQjtBQUN2QixXQUFLWSxRQUFMO0FBRUY7QUFDSixHQW5LSSxDQW9LTDs7QUFwS0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBwbHVzQWN0aXZlU3ByaXRlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGx1c05vdEFjdGl2ZVNwcml0ZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtaW51c0FjdGl2ZVNwcml0ZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1pbnVzTm90QWN0aXZlU3ByaXRlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBwbHVzQnV0dG9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWludXNCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvSnVtcFNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGF1dG9KdW1wUGFuZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGF1dG9KdW1wTnVtYmVyOjEwLFxyXG5cclxuICAgICAgICBhdXRvSnVtcExhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFzdFNlbGVjdGVkSnVtcE51bWJlciA6MTAsXHJcbiAgICAgICAganVtcENvdW50OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGp1bXBBbW91bnRMaWJyYXJ5OntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3VycmVudFZhbHVlOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmp1bXBBbW91bnRMaWJyYXJ5ID0gWzEwLDUwLDEwMCw1MDBdO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdldFN1Y2Nlc3MoKXtcclxuICAgICAgIFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb3BlblBhbmVsKCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0p1bXBOdW1iZXIgPSB0aGlzLmxhc3RTZWxlY3RlZEp1bXBOdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0p1bXBQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEp1bXAoKXtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3N0YWdlXCIpLmdldENvbXBvbmVudChcIlN0YWdlXCIpLmF1dG9KdW1wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF1dG9KdW1wU3ByaXRlWzBdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuICAgIGNsb3NlUGFuZWwoKXtcclxuICAgICAgICB0aGlzLmF1dG9KdW1wUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFZhbHVlKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUrKztcclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VmFsdWU+PTMpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZT0zO1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLnBsdXNOb3RBY3RpdmVTcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMucGx1c0FjdGl2ZVNwcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMubWludXNBY3RpdmVTcHJpdGU7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciA9IHRoaXMuanVtcEFtb3VudExpYnJhcnlbdGhpcy5jdXJyZW50VmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBMYWJlbC5zdHJpbmc9IHRoaXMuYXV0b0p1bXBOdW1iZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIG1pbnVzVmFsdWUoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZS0tO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFZhbHVlPD0wKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWU9MDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMubWludXNOb3RBY3RpdmVTcHJpdGU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLnBsdXNBY3RpdmVTcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLm1pbnVzQWN0aXZlU3ByaXRlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciA9IHRoaXMuanVtcEFtb3VudExpYnJhcnlbdGhpcy5jdXJyZW50VmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBMYWJlbC5zdHJpbmc9IHRoaXMuYXV0b0p1bXBOdW1iZXI7XHJcbiAgICB9LFxyXG4gICAgY29uZmlybUp1bXAoKXtcclxuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEp1bXBOdW1iZXIgPSB0aGlzLmF1dG9KdW1wTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuanVtcENvdW50LnN0cmluZyA9IFwiKFwiK3RoaXMuYXV0b0p1bXBOdW1iZXIrXCIpXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKS5hdXRvSnVtcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBTcHJpdGVbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSnVtcFRpbWVzKCl7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciAtPTE7XHJcbiAgICAgICAgdGhpcy5qdW1wQ291bnQuc3RyaW5nID0gXCIoXCIrdGhpcy5hdXRvSnVtcE51bWJlcitcIilcIjtcclxuICAgICAgICBpZih0aGlzLmF1dG9KdW1wTnVtYmVyPD0wKXtcclxuICAgICAgICAgICB0aGlzLnN0b3BKdW1wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==