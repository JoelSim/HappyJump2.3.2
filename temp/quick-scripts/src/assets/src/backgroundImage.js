"use strict";
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