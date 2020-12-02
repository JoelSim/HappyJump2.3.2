"use strict";
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