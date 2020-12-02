
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcQXVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU1JO1FBTFEsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2pCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sR0FBRztRQUNOLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELHVCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELHVCQUFPLEdBQVAsVUFBUSxHQUFXO1FBQ2YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQztJQUNELDRCQUFZLEdBQVosVUFBYSxDQUFTO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUNNLDRCQUFZLEdBQW5CLFVBQW9CLENBQVMsRUFBRSxLQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7WUFDRCwyREFBMkQ7U0FDOUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUMvQiw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFDTSx3QkFBUSxHQUFmO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ00seUJBQVMsR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTSxvQkFBSSxHQUFYO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBdEVZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1ZGlvIHtcclxuICAgIHByaXZhdGUgYmdtVm9sdW1lID0gMS4wO1xyXG4gICAgcHJpdmF0ZSBzZnhWb2x1bWUgPSAxLjA7XHJcbiAgICBwcml2YXRlIGJnbUF1ZGlvSUQgPSAtMTtcclxuICAgIHByaXZhdGUgcGxheWluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCB0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdtVm9sdW1lXCIpO1xyXG4gICAgICAgIGlmICh0ICE9PSBudWxsIHx8IHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IHBhcnNlRmxvYXQodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZnhWb2x1bWVcIik7XHJcbiAgICAgICAgaWYgKHQgIT09IG51bGwgfHwgdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4Vm9sdW1lID0gcGFyc2VGbG9hdCh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFVybCh1cmwpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kcy9cIiArIHVybCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKHVybCkge1xyXG4gICAgICAgIHRoaXMucGxheWluZyA9IHVybDtcclxuICAgICAgICB2YXIgYXVkaW9VcmwgPSB0aGlzLmdldFVybCh1cmwpO1xyXG4gICAgICAgIGlmICh0aGlzLmJnbUF1ZGlvSUQgPj0gMCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmdtQXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW9VcmwsIHRydWUsIHRoaXMuYmdtVm9sdW1lKTtcclxuICAgIH1cclxuICAgIHBsYXlTRlgodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgYXVkaW9VcmwgPSB0aGlzLmdldFVybCh1cmwpO1xyXG4gICAgICAgIGlmICh0aGlzLnNmeFZvbHVtZSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvVXJsLCBmYWxzZSwgdGhpcy5zZnhWb2x1bWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFNGWFZvbHVtZSh2OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zZnhWb2x1bWUgIT09IHYpIHtcclxuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Z4Vm9sdW1lXCIsdik7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4Vm9sdW1lID0gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0QkdNVm9sdW1lKHY6IG51bWJlciwgZm9yY2U6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lEID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuYmdtQXVkaW9JRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5iZ21BdWRpb0lELHRoaXMuYmdtVm9sdW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtVm9sdW1lICE9PSB2IHx8IGZvcmNlKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnbVZvbHVtZVwiLHYpO1xyXG4gICAgICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IHY7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUF1ZGlvSUQsIHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBwYXVzZUFsbCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc3VtZUFsbCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzYXZlKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNmeFZvbHVtZVwiLCB0aGlzLnNmeFZvbHVtZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdtVm9sdW1lXCIsIHRoaXMuYmdtVm9sdW1lKTtcclxuICAgIH1cclxufSJdfQ==