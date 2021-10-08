
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/Audio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24e7cfQDDVFqabBZJ1IKhQg', 'Audio');
// src/utils/Audio.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audio = void 0;
var Audio = /** @class */ (function () {
    function Audio() {
        this.bgmVolume = 1.0;
        this.sfxVolume = 1.0;
        this.bgmAudioID = -1;
        this.playing = "";
        var t = cc.sys.localStorage.getItem("bgmVolume");
        if (t !== null || t !== undefined) {
            this.bgmVolume = parseFloat(t);
        }
        t = cc.sys.localStorage.getItem("sfxVolume");
        if (t !== null || t !== undefined) {
            this.sfxVolume = parseFloat(t);
        }
        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll();
        });
    }
    Audio.prototype.getUrl = function (url) {
        return cc.url.raw("resources/sounds/" + url);
    };
    Audio.prototype.playBGM = function (url) {
        this.playing = url;
        var audioUrl = this.getUrl(url);
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
    };
    Audio.prototype.playSFX = function (url) {
        var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) {
            var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
        }
    };
    Audio.prototype.setSFXVolume = function (v) {
        if (this.sfxVolume !== v) {
            // cc.sys.localStorage.setItem("sfxVolume",v);
            this.sfxVolume = v;
        }
    };
    Audio.prototype.setBGMVolume = function (v, force) {
        if (this.bgmAudioID >= 0) {
            if (v > 0) {
                cc.audioEngine.resume(this.bgmAudioID);
            }
            else {
                cc.audioEngine.pause(this.bgmAudioID);
            }
            //cc.audioEngine.setVolume(this.bgmAudioID,this.bgmVolume);
        }
        if (this.bgmVolume !== v || force) {
            // cc.sys.localStorage.setItem("bgmVolume",v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
    };
    Audio.prototype.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    Audio.prototype.resumeAll = function () {
        cc.audioEngine.resumeAll();
    };
    Audio.prototype.save = function () {
        cc.sys.localStorage.setItem("sfxVolume", this.sfxVolume);
        cc.sys.localStorage.setItem("bgmVolume", this.bgmVolume);
    };
    return Audio;
}());
exports.Audio = Audio;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcQXVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFNSTtRQUxRLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdqQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0JBQU0sR0FBTixVQUFPLEdBQUc7UUFDTixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCx1QkFBTyxHQUFQLFVBQVEsR0FBRztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCx1QkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFDRCw0QkFBWSxHQUFaLFVBQWEsQ0FBUztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLDhDQUE4QztZQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFDTSw0QkFBWSxHQUFuQixVQUFvQixDQUFTLEVBQUUsS0FBYztRQUN6QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsMkRBQTJEO1NBQzlEO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDL0IsOENBQThDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBQ00sd0JBQVEsR0FBZjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNNLHlCQUFTLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00sb0JBQUksR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdWRpbyB7XHJcbiAgICBwcml2YXRlIGJnbVZvbHVtZSA9IDEuMDtcclxuICAgIHByaXZhdGUgc2Z4Vm9sdW1lID0gMS4wO1xyXG4gICAgcHJpdmF0ZSBiZ21BdWRpb0lEID0gLTE7XHJcbiAgICBwcml2YXRlIHBsYXlpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnbVZvbHVtZVwiKTtcclxuICAgICAgICBpZiAodCAhPT0gbnVsbCB8fCB0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSBwYXJzZUZsb2F0KHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Z4Vm9sdW1lXCIpO1xyXG4gICAgICAgIGlmICh0ICE9PSBudWxsIHx8IHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHBhcnNlRmxvYXQodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwodXJsKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZHMvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG4gICAgcGxheUJHTSh1cmwpIHtcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSB1cmw7XHJcbiAgICAgICAgdmFyIGF1ZGlvVXJsID0gdGhpcy5nZXRVcmwodXJsKTtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJnbUF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvVXJsLCB0cnVlLCB0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICB9XHJcbiAgICBwbGF5U0ZYKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGF1ZGlvVXJsID0gdGhpcy5nZXRVcmwodXJsKTtcclxuICAgICAgICBpZiAodGhpcy5zZnhWb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgZmFsc2UsIHRoaXMuc2Z4Vm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTRlhWb2x1bWUodjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Z4Vm9sdW1lICE9PSB2KSB7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNmeFZvbHVtZVwiLHYpO1xyXG4gICAgICAgICAgICB0aGlzLnNmeFZvbHVtZSA9IHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEJHTVZvbHVtZSh2OiBudW1iZXIsIGZvcmNlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JRCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmJnbUF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYmdtQXVkaW9JRCx0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJnbVZvbHVtZSAhPT0gdiB8fCBmb3JjZSkge1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ21Wb2x1bWVcIix2KTtcclxuICAgICAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB2O1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5iZ21BdWRpb0lELCB2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGF1c2VBbGwoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXN1bWVBbGwoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2F2ZSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZnhWb2x1bWVcIiwgdGhpcy5zZnhWb2x1bWUpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLCB0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICB9XHJcbn0iXX0=