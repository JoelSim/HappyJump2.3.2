"use strict";
cc._RF.push(module, 'c5319vaeGpFDb+BEQM6WHRu', 'TutorialManager');
// src/TutorialManager.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    mainParent: {
      "default": null,
      type: cc.Node
    },
    nextButton: {
      "default": null,
      type: cc.Button
    },
    previousButton: {
      "default": null,
      type: cc.Button
    },
    pageIndicators: {
      "default": [],
      type: [cc.Node]
    },
    pages: {
      "default": [],
      type: [cc.Node]
    },
    pageNumber: 1
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.resetPage();
  },
  resetPage: function resetPage() {
    this.pageNumber = 1;
    this.togglePages();
    this.previousButton.interactable = false;
    this.nextButton.interactable = true;
  },
  nextPage: function nextPage() {
    if (this.pageNumber <= this.pages.length) {
      this.pageNumber++;
      this.previousButton.interactable = true; //#region Toggle next button

      if (this.pageNumber == this.pages.length) {
        this.nextButton.interactable = false;
      } else {
        this.nextButton.interactable = true;
      } //#endregion
      //#region Toggle pages


      this.togglePages(); //#endregion
    } else {
      return;
    }
  },
  previousPage: function previousPage() {
    if (this.pageNumber >= 2) {
      this.pageNumber--;
      this.nextButton.interactable = true; //#region Toggle next button

      if (this.pageNumber == 1) {
        this.previousButton.interactable = false;
      } else {
        this.previousButton.interactable = true;
      } //#endregion
      //#region Toggle pages


      this.togglePages(); //#endregion
    } else {
      return;
    }
  },
  togglePages: function togglePages() {
    for (var i = 0; i < this.pages.length; i++) {
      if (i == this.pageNumber - 1) {
        this.pages[i].active = true;
        this.pageIndicators[i].active = true;
      } else {
        this.pages[i].active = false;
        this.pageIndicators[i].active = false;
      }
    }
  },
  toggleLayer: function toggleLayer() {
    if (this.mainParent.active) {
      this.mainParent.active = false;
      this.resetPage();
    } else {
      this.mainParent.active = true;
    }
  }
});

cc._RF.pop();