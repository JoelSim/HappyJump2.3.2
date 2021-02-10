
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/TutorialManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxUdXRvcmlhbE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYWluUGFyZW50IiwidHlwZSIsIk5vZGUiLCJuZXh0QnV0dG9uIiwiQnV0dG9uIiwicHJldmlvdXNCdXR0b24iLCJwYWdlSW5kaWNhdG9ycyIsInBhZ2VzIiwicGFnZU51bWJlciIsIm9uTG9hZCIsInJlc2V0UGFnZSIsInRvZ2dsZVBhZ2VzIiwiaW50ZXJhY3RhYmxlIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJwcmV2aW91c1BhZ2UiLCJpIiwiYWN0aXZlIiwidG9nZ2xlTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJQUREO0FBRVBDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBREg7QUFNUkMsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVEsSUFERDtBQUVQRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGRCxLQU5IO0FBVVJDLElBQUFBLGNBQWMsRUFBQztBQUNYLGlCQUFRLElBREc7QUFFWEosTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRkcsS0FWUDtBQWVSRSxJQUFBQSxjQUFjLEVBQUM7QUFDWCxpQkFBUSxFQURHO0FBRVhMLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLElBQUo7QUFGTSxLQWZQO0FBbUJSSyxJQUFBQSxLQUFLLEVBQUM7QUFDRixpQkFBUSxFQUROO0FBRUZOLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLElBQUo7QUFGSCxLQW5CRTtBQXdCUk0sSUFBQUEsVUFBVSxFQUFFO0FBeEJKLEdBSFA7QUE4Qkw7QUFDQUMsRUFBQUEsTUEvQkssb0JBK0JHO0FBQ0osU0FBS0MsU0FBTDtBQUNILEdBakNJO0FBbUNMQSxFQUFBQSxTQW5DSyx1QkFtQ007QUFDUCxTQUFLRixVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0csV0FBTDtBQUNBLFNBQUtOLGNBQUwsQ0FBb0JPLFlBQXBCLEdBQW1DLEtBQW5DO0FBQ0EsU0FBS1QsVUFBTCxDQUFnQlMsWUFBaEIsR0FBK0IsSUFBL0I7QUFDSCxHQXhDSTtBQTBDTEMsRUFBQUEsUUExQ0ssc0JBMENLO0FBQ04sUUFBSSxLQUFLTCxVQUFMLElBQW1CLEtBQUtELEtBQUwsQ0FBV08sTUFBbEMsRUFBMEM7QUFDdEMsV0FBS04sVUFBTDtBQUNBLFdBQUtILGNBQUwsQ0FBb0JPLFlBQXBCLEdBQW1DLElBQW5DLENBRnNDLENBSXRDOztBQUNBLFVBQUksS0FBS0osVUFBTCxJQUFtQixLQUFLRCxLQUFMLENBQVdPLE1BQWxDLEVBQTBDO0FBQ3RDLGFBQUtYLFVBQUwsQ0FBZ0JTLFlBQWhCLEdBQStCLEtBQS9CO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsYUFBS1QsVUFBTCxDQUFnQlMsWUFBaEIsR0FBK0IsSUFBL0I7QUFDSCxPQVZxQyxDQVd0QztBQUVBOzs7QUFDQSxXQUFLRCxXQUFMLEdBZHNDLENBZXRDO0FBQ0gsS0FoQkQsTUFpQkk7QUFDQTtBQUNIO0FBQ0osR0EvREk7QUFpRUxJLEVBQUFBLFlBakVLLDBCQWlFUztBQUNWLFFBQUksS0FBS1AsVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QixXQUFLQSxVQUFMO0FBQ0EsV0FBS0wsVUFBTCxDQUFnQlMsWUFBaEIsR0FBK0IsSUFBL0IsQ0FGc0IsQ0FJdEI7O0FBQ0EsVUFBRyxLQUFLSixVQUFMLElBQW1CLENBQXRCLEVBQXdCO0FBQ3BCLGFBQUtILGNBQUwsQ0FBb0JPLFlBQXBCLEdBQW1DLEtBQW5DO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsYUFBS1AsY0FBTCxDQUFvQk8sWUFBcEIsR0FBbUMsSUFBbkM7QUFDSCxPQVZxQixDQVd0QjtBQUVBOzs7QUFDQSxXQUFLRCxXQUFMLEdBZHNCLENBZXRCO0FBQ0gsS0FoQkQsTUFpQkk7QUFDQTtBQUNIO0FBQ0osR0F0Rkk7QUF3RkxBLEVBQUFBLFdBeEZLLHlCQXdGUTtBQUNULFNBQUksSUFBSUssQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEtBQUtULEtBQUwsQ0FBV08sTUFBOUIsRUFBc0NFLENBQUMsRUFBdkMsRUFBMEM7QUFDdEMsVUFBSUEsQ0FBQyxJQUFJLEtBQUtSLFVBQUwsR0FBa0IsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS0QsS0FBTCxDQUFXUyxDQUFYLEVBQWNDLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxhQUFLWCxjQUFMLENBQW9CVSxDQUFwQixFQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEM7QUFDSCxPQUhELE1BSUk7QUFDQSxhQUFLVixLQUFMLENBQVdTLENBQVgsRUFBY0MsTUFBZCxHQUF1QixLQUF2QjtBQUNBLGFBQUtYLGNBQUwsQ0FBb0JVLENBQXBCLEVBQXVCQyxNQUF2QixHQUFnQyxLQUFoQztBQUNIO0FBQ0o7QUFDSixHQW5HSTtBQXFHTEMsRUFBQUEsV0FyR0sseUJBcUdRO0FBQ1QsUUFBRyxLQUFLbEIsVUFBTCxDQUFnQmlCLE1BQW5CLEVBQTBCO0FBQ3RCLFdBQUtqQixVQUFMLENBQWdCaUIsTUFBaEIsR0FBeUIsS0FBekI7QUFDQSxXQUFLUCxTQUFMO0FBQ0gsS0FIRCxNQUlJO0FBQ0EsV0FBS1YsVUFBTCxDQUFnQmlCLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0g7QUFDSjtBQTdHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWFpblBhcmVudDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG5leHRCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlvdXNCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhZ2VJbmRpY2F0b3JzOntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbY2MuTm9kZV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdlczp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6W2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRQYWdlKCl7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFBhZ2UoKXtcclxuICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyIDw9IHRoaXMucGFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcisrO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyNyZWdpb24gVG9nZ2xlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VOdW1iZXIgPT0gdGhpcy5wYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgICAgICAgICAvLyNyZWdpb24gVG9nZ2xlIHBhZ2VzXHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFnZXMoKTtcclxuICAgICAgICAgICAgLy8jZW5kcmVnaW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHByZXZpb3VzUGFnZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VOdW1iZXIgPj0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXItLTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyNyZWdpb24gVG9nZ2xlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZU51bWJlciA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNCdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgICAgIC8vI3JlZ2lvbiBUb2dnbGUgcGFnZXNcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQYWdlcygpO1xyXG4gICAgICAgICAgICAvLyNlbmRyZWdpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlUGFnZXMoKXtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMucGFnZU51bWJlciAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZXNbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZGljYXRvcnNbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZGljYXRvcnNbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZUxheWVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5tYWluUGFyZW50LmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubWFpblBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5tYWluUGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==