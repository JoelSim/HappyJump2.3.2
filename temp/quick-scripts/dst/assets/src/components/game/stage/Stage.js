
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/stage/Stage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40b804EvnJPrIJHFGe/MMZY', 'Stage');
// src/components/game/stage/Stage.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Block_1 = require("./Block");
var G_1 = require("../../../G");
var PlayerDieEvent_1 = require("../../../events/PlayerDieEvent");
var PlayerJumpSuccessEvent_1 = require("../../../events/PlayerJumpSuccessEvent");
var global = require("../../../GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoJump = true;
        _this.failChance = 0;
        _this.player = null;
        _this.playerDie = false;
        _this.leftOrigin = cc.v2();
        _this.rightOrigin = cc.v2();
        _this.blockLayer = null;
        _this.propLayer = null;
        _this.bg = null;
        _this.loadingLayer = null;
        _this.blockInputLayer = null;
        _this.insufficient = null;
        _this.arrayRatio = 0.556047197640118;
        _this.canJump = true;
        _this.greenblockList = [];
        _this.orangeblockList = [];
        _this.purpleblockList = [];
        _this.grassPropList = null;
        _this.desertPropList = null;
        _this.purplePropList = null;
        _this.balanceText = null;
        _this.winAmountText = null;
        _this.winAmount = 0;
        _this.perfect = 0;
        _this.singleMax = 0;
        _this.currBlock = null;
        _this.totalBet = 0;
        _this.nextBlock = null;
        _this.currentValue = 0;
        _this.readyJumpAudio = null;
        _this.readyJumpAudioId = -1;
        _this.generatingBalance = false;
        _this.generatingScore = false;
        _this.timerforLoading = 0;
        return _this;
    }
    Stage.prototype.reset = function () {
        this.blockLayer.removeAllChildren();
        // 添加第一个方块
        this.addScore(0);
        var blockNode = cc.instantiate(this.greenblockList[5]);
        this.blockLayer.addChild(blockNode);
        var block = blockNode.getComponent(Block_1.Block);
        block.closePerfectScore();
        blockNode.position = this.blockLayer.parent.convertToNodeSpaceAR(this.leftOrigin);
        this.currBlock = block;
        this.nextBlock = block;
        this.player.node.position = this.node.parent.convertToNodeSpaceAR(this.currBlock.getCenterPosition());
        this.addBlock();
        //this.addProp();
    };
    Stage.prototype.enableTouch = function () {
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, this.onReadyJump, this);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this.onJump, this);
    };
    Stage.prototype.disableTouch = function () {
        cc.find("Canvas").targetOff(this);
        cc.systemEvent.targetOff(this);
    };
    Stage.prototype.onReadyJump = function () {
        if (this.checkQualify() && !this.autoJump) {
            this.player.readyJump();
        }
        else {
        }
    };
    Stage.prototype.addScore = function (value) {
        //    // global.setBalance(global.getBalance() + value);
        //     this.balanceText.string = (Math.round(global.getBalance()*10)/10).toString();
        this.winAmountText.string = (Math.round((this.winAmount + value) * 10) / 10).toString();
        this.winAmount += value;
    };
    Stage.prototype.updateBalance = function () {
        this.balanceText.string = (Math.round(global.settings.balance * 10) / 10).toString();
    };
    Stage.prototype.addTotalBet = function (value) {
        this.totalBet += value;
    };
    Stage.prototype.checkQualify = function () {
        if (global.settings.balance >= cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage.prototype.onJump = function () {
        var _this = this;
        if (!this.autoJump) {
            this.blockInputLayer.active = true;
            var jumpDistance = this.player.jumpDistance;
            var dir = this.player.direction;
            var targetPos = new cc.Vec2(this.player.node.x + jumpDistance * dir, this.player.node.y + jumpDistance * this.arrayRatio);
            var targetWorldPos = this.player.node.parent.convertToWorldSpaceAR(targetPos);
            var formatPos = this.nextBlock.getAnchorLocation(targetWorldPos, dir, global.platform);
            this.addTotalBet(cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting);
            if (formatPos !== null) {
                this.player.jumpTo(formatPos, function () {
                    _this.currBlock = _this.nextBlock;
                    //this.currBlock.playScoreAnim();
                    _this.addScore(_this.currBlock.trueScore);
                    if (_this.currBlock.trueScore > _this.singleMax) {
                        _this.singleMax = _this.currBlock.trueScore;
                    }
                    if (global.platform == 1) {
                        _this.perfect++;
                    }
                    cc.find("score", _this.player.node).getComponent(cc.Label).string = "+" + Math.round(_this.currBlock.trueScore * 10) / 10;
                    cc.find("score", _this.player.node).getComponent(cc.Animation).play();
                    //this.currBlock.stopAllAction(this.player.platformState);
                    G_1.G.dispatchEvent(new PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent(_this.currBlock.score));
                    if (_this.checkQualify()) {
                        if (!global.isDemo) {
                            var emit_result = {
                                'host_id': global.host_id,
                                'access_token': global.access_token,
                                'ticket_id': global.ticket_id,
                                'result': _this.currBlock.trueScore,
                                'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                'game_code': global.game_code,
                                'description': "Get previous bet and change bet",
                                'user_id': global.settings.user_id,
                                'api_url': global.api_url,
                                "changeBet": false,
                            };
                            global.getSocket().emit('send-result', emit_result);
                            _this.generatingBalance = true;
                        }
                        else {
                            global.settings.balance += _this.currBlock.trueScore;
                            _this.generatingBalance = true;
                        }
                        _this.loadingLayer.opacity = 0;
                        _this.loadingLayer.active = true;
                        _this.timerforLoading = 0;
                    }
                    else {
                        _this.insufficient.active = true;
                    }
                });
            }
            else {
                this.player.jumpTo(targetWorldPos, function () {
                    _this.playerDie = true;
                    cc.find("Canvas/AudioManager").getComponent("AudioManager").playLoseSound();
                    var action = cc.rotateBy(0.2, -90);
                    if (!global.isDemo) {
                        var emit_result = {
                            'host_id': global.host_id,
                            'access_token': global.access_token,
                            'ticket_id': global.ticket_id,
                            'result': 0,
                            'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                            'game_code': global.game_code,
                            'description': "Get previous bet and change bet",
                            'user_id': global.settings.user_id,
                            'api_url': global.api_url,
                            "changeBet": false,
                        };
                        global.getSocket().emit('send-result', emit_result);
                        _this.generatingBalance = true;
                    }
                    else {
                        global.settings.balance += 0;
                        _this.generatingBalance = true;
                    }
                    _this.loadingLayer.opacity = 0;
                    _this.loadingLayer.active = true;
                    _this.timerforLoading = 0;
                    _this.player.node.runAction(action);
                    _this.blockInputLayer.active = false;
                });
            }
        }
    };
    Stage.prototype.addProp = function (value, position) {
        var propNode;
        this.currentValue = value;
        if (value >= 4 && value <= 7) {
            propNode = cc.instantiate(this.desertPropList);
        }
        else if (value >= 8 && value <= 12) {
            propNode = cc.instantiate(this.purplePropList);
        }
        else {
            propNode = cc.instantiate(this.grassPropList);
        }
        this.propLayer.addChild(propNode);
        propNode.y = position;
        // let scale = block.minScale + Math.random() * (block.maxScale - block.minScale);
    };
    Stage.prototype.RandomInt = function (min, max) {
        return min + Math.random() * (max - min);
    };
    Stage.prototype.addBlock = function () {
        var n;
        var blockNode;
        if (this.currentValue >= 4 && this.currentValue <= 7) {
            n = Math.floor(Math.random() * this.orangeblockList.length);
            blockNode = cc.instantiate(this.orangeblockList[n]);
        }
        else if (this.currentValue >= 8 && this.currentValue <= 12) {
            n = Math.floor(Math.random() * this.purpleblockList.length);
            blockNode = cc.instantiate(this.purpleblockList[n]);
        }
        else {
            n = Math.floor(Math.random() * this.greenblockList.length);
            blockNode = cc.instantiate(this.greenblockList[n]);
        }
        this.blockLayer.addChild(blockNode);
        var block = blockNode.getComponent(Block_1.Block);
        var scale = block.minScale + Math.random() * (block.maxScale - block.minScale);
        //let scale = 1;
        // let distance = block.minDistance + Math.random() * (block.maxDistance - block.minDistance);
        blockNode.scale = scale;
        if (this.player.direction > 0) {
            blockNode.x = this.currBlock.node.x + 500;
            blockNode.y = this.currBlock.node.y + 500 * this.arrayRatio;
        }
        else {
            blockNode.x = this.currBlock.node.x - 500;
            blockNode.y = this.currBlock.node.y + 500 * this.arrayRatio;
        }
        this.currBlock = this.nextBlock;
        this.nextBlock = block;
        return block;
    };
    Stage.prototype.removeBlock = function () {
    };
    Stage.prototype.checkOver = function () {
        return this.player.node.position.sub(this.currBlock.node.position).mag() > this.currBlock.node.width / 2 * this.currBlock.node.scale;
    };
    Stage.prototype.updateStage = function (cb, cbTarget) {
        var moveVector;
        var playerWorldPos = this.player.node.parent.convertToWorldSpaceAR(this.player.node.position);
        if (this.player.direction > 0) {
            playerWorldPos.sub(this.leftOrigin);
            moveVector = playerWorldPos.sub(this.leftOrigin);
        }
        else {
            moveVector = playerWorldPos.sub(this.rightOrigin);
        }
        var finished = cc.callFunc(cb, cbTarget);
        var action = cc.sequence(cc.moveTo(0.7, this.node.position.sub(moveVector)), finished);
        this.bg.runAction(cc.moveTo(0.7, cc.v2(0, this.node.position.sub(moveVector).y)));
        this.node.runAction(action);
    };
    Stage.prototype.demoGenerateScore = function () {
        this.loadingLayer.active = false;
        var multiplierPerfect;
        var multiplierConso;
        var platform;
        var perfectScore;
        var consoleScore;
        // calculate multiplier
        platform = (Math.random() * (1 - 0) + 0);
        if (platform >= 0.8) {
            platform = 1;
        }
        multiplierPerfect = (Math.random() * (10 - 2) + 2);
        multiplierConso = (Math.random() * (1 - 0.2) + 0.2);
        perfectScore = Math.round((cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting * multiplierPerfect) * 10) / 10;
        consoleScore = Math.round((cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting * multiplierConso) * 10) / 10;
        global.consoScore = consoleScore;
        global.perfectScore = perfectScore;
        global.platform = platform;
        this.balanceText.string = (Math.round(global.settings.balance * 100) / 100).toString();
    };
    Stage.prototype.update = function (dt) {
        if (this.autoJump) {
            this.onAutoJump();
        }
        if (this.timerforLoading >= 2) {
            this.loadingLayer.opacity = 255;
        }
        if (this.generatingBalance) {
            this.timerforLoading += dt;
            if (!global.isDemo) {
                if (global.finishGeneratingBalance) {
                    this.generatingBalance = false;
                    global.finishGeneratingBalance = false;
                    var emit_obj = {
                        'host_id': global.host_id,
                        'access_token': global.access_token,
                        'game_code': 23,
                        'betAmount': cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                        "key": "Happy Jump bet with these index 1st",
                        "description": "bet",
                        "user_id": global.settings.user_id,
                        'api_url': global.api_url,
                        "requestType": "bet",
                        "currentBetSlot": global.currentBetSlot,
                    };
                    cc.find("Canvas/InGameBetting").getComponent("InGameBetting").playerDie = this.playerDie;
                    if (!this.playerDie) {
                        global.getSocket().emit('changeBet', emit_obj);
                        this.generatingScore = true;
                    }
                    else {
                        this.loadingLayer.active = false;
                        G_1.G.dispatchEvent(new PlayerDieEvent_1.PlayerDieEvent());
                    }
                }
            }
            else {
                this.generatingBalance = false;
                cc.find("Canvas/InGameBetting").getComponent("InGameBetting").playerDie = this.playerDie;
                if (!this.playerDie) {
                    global.settings.balance -= cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting;
                    this.generatingScore = true;
                }
                else {
                    this.loadingLayer.active = false;
                    G_1.G.dispatchEvent(new PlayerDieEvent_1.PlayerDieEvent());
                }
            }
        }
        if (this.generatingScore) {
            this.timerforLoading += dt;
            if (!global.isDemo) {
                if (global.finishGetData) {
                    this.generatingScore = false;
                    global.finishGetData = false;
                    this.scheduleOnce(function () {
                        this.emitChangebet();
                    }, 1);
                }
            }
            else {
                this.demoGenerateScore();
                this.emitChangebet();
                this.generatingScore = false;
            }
        }
    };
    Stage.prototype.emitChangebet = function () {
        var _this = this;
        this.updateStage(function () {
            _this.addBlock();
            cc.systemEvent.emit("Change-Bet");
        });
        this.loadingLayer.active = false;
        this.blockInputLayer.active = false;
        this.canJump = true;
        this.updateBalance();
    };
    Stage.prototype.onAutoJump = function () {
        if (this.checkQualify() && this.autoJump) {
            if (this.canJump) {
                this.player.node.getComponent(cc.Animation).play("ChickenCharge");
                cc.find("rotateAnchor/particlesystem", this.player.node).active = true;
                cc.find("Canvas/AutoJumpManager").getComponent("AutojumpManager").updateJumpTimes();
                this.readyJumpAudioId = cc.audioEngine.play(this.readyJumpAudio, false, global.getEffectVolume());
                this.canJump = false;
                this.scheduleOnce(function () {
                    var _this = this;
                    cc.audioEngine.stop(this.readyJumpAudioId);
                    this.addTotalBet(cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting);
                    var fail = this.RandomInt(0, 100);
                    var jumpDistance = 460 + Math.random() * (520 - 460);
                    if (fail <= this.failChance) {
                        jumpDistance = this.RandomInt(300, 380);
                    }
                    var randomPerfect = 0;
                    if (global.platform == 1) {
                        randomPerfect = this.RandomInt(0, 100);
                        if (randomPerfect <= 50) {
                            global.platform = 0;
                        }
                    }
                    var dir = this.player.direction;
                    var targetPos = new cc.Vec2(this.player.node.x + jumpDistance * dir, this.player.node.y + jumpDistance * this.arrayRatio);
                    var targetWorldPos = this.player.node.parent.convertToWorldSpaceAR(targetPos);
                    var formatPos = this.nextBlock.getAnchorLocation(targetWorldPos, dir, global.platform);
                    if (formatPos !== null) {
                        this.player.jumpTo(formatPos, function () {
                            _this.currBlock = _this.nextBlock;
                            //this.currBlock.playScoreAnim();
                            _this.addScore(_this.currBlock.trueScore);
                            if (_this.currBlock.trueScore > _this.singleMax) {
                                _this.singleMax = _this.currBlock.trueScore;
                            }
                            if (global.platform == 1) {
                                _this.perfect++;
                            }
                            cc.find("score", _this.player.node).getComponent(cc.Label).string = "+" + Math.round(_this.currBlock.trueScore * 10) / 10;
                            cc.find("score", _this.player.node).getComponent(cc.Animation).play();
                            //this.currBlock.stopAllAction(this.player.platformState);
                            G_1.G.dispatchEvent(new PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent(_this.currBlock.score));
                            if (_this.checkQualify()) {
                                if (!global.isDemo) {
                                    var emit_result = {
                                        'host_id': global.host_id,
                                        'access_token': global.access_token,
                                        'ticket_id': global.ticket_id,
                                        'result': _this.currBlock.trueScore,
                                        'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                        'game_code': global.game_code,
                                        'description': "Get previous bet and change bet",
                                        'user_id': global.settings.user_id,
                                        "changeBet": false,
                                    };
                                    global.getSocket().emit('send-result', emit_result);
                                }
                                else {
                                    global.settings.balance += _this.currBlock.trueScore;
                                }
                                _this.loadingLayer.opacity = 0;
                                _this.loadingLayer.active = true;
                                _this.timerforLoading = 0;
                                _this.generatingBalance = true;
                            }
                            else {
                                _this.insufficient.active = true;
                            }
                        });
                    }
                    else {
                        this.player.jumpTo(targetWorldPos, function () {
                            _this.playerDie = true;
                            cc.find("Canvas/AudioManager").getComponent("AudioManager").playLoseSound();
                            var action = cc.rotateBy(0.2, -90);
                            _this.player.node.runAction(action);
                            if (!global.isDemo) {
                                var emit_result = {
                                    'host_id': global.host_id,
                                    'access_token': global.access_token,
                                    'ticket_id': global.ticket_id,
                                    'result': 0,
                                    'key': "Change bet: " + cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting,
                                    'game_code': global.game_code,
                                    'description': "Get previous bet and change bet",
                                    'user_id': global.settings.user_id,
                                    'api_url': global.api_url,
                                    "changeBet": false,
                                };
                                global.getSocket().emit('send-result', emit_result);
                            }
                            else {
                                global.settings.balance += 0;
                            }
                            _this.loadingLayer.opacity = 0;
                            _this.loadingLayer.active = true;
                            _this.generatingBalance = true;
                            _this.timerforLoading = 0;
                            cc.find("Canvas/overPanel").getComponent("OverPanel").isQuit = false;
                            _this.canJump = false;
                        });
                    }
                }, 1);
            }
        }
    };
    __decorate([
        property(Boolean)
    ], Stage.prototype, "autoJump", void 0);
    __decorate([
        property(Number)
    ], Stage.prototype, "failChance", void 0);
    __decorate([
        property(Player_1.Player)
    ], Stage.prototype, "player", void 0);
    __decorate([
        property(cc.Vec2)
    ], Stage.prototype, "leftOrigin", void 0);
    __decorate([
        property(cc.Vec2)
    ], Stage.prototype, "rightOrigin", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "blockLayer", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "propLayer", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "loadingLayer", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "blockInputLayer", void 0);
    __decorate([
        property(cc.Node)
    ], Stage.prototype, "insufficient", void 0);
    __decorate([
        property(cc.Float)
    ], Stage.prototype, "arrayRatio", void 0);
    __decorate([
        property
    ], Stage.prototype, "canJump", void 0);
    __decorate([
        property([cc.Prefab])
    ], Stage.prototype, "greenblockList", void 0);
    __decorate([
        property([cc.Prefab])
    ], Stage.prototype, "orangeblockList", void 0);
    __decorate([
        property([cc.Prefab])
    ], Stage.prototype, "purpleblockList", void 0);
    __decorate([
        property(cc.Prefab)
    ], Stage.prototype, "grassPropList", void 0);
    __decorate([
        property(cc.Prefab)
    ], Stage.prototype, "desertPropList", void 0);
    __decorate([
        property(cc.Prefab)
    ], Stage.prototype, "purplePropList", void 0);
    __decorate([
        property(cc.Label)
    ], Stage.prototype, "balanceText", void 0);
    __decorate([
        property(cc.Label)
    ], Stage.prototype, "winAmountText", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Stage.prototype, "readyJumpAudio", void 0);
    Stage = __decorate([
        ccclass
    ], Stage);
    return Stage;
}(cc.Component));
exports.Stage = Stage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLGlDQUFnQztBQUNoQyxnQ0FBK0I7QUFDL0IsaUVBQWdFO0FBQ2hFLGlGQUFnRjtBQUNoRiw0Q0FBOEM7QUFFeEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUR2QztRQUFBLHFFQThnQkM7UUEzZ0JVLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLGlCQUFpQixDQUFDO1FBRXZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRXZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2QyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixtQkFB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QUMsTUFBTSxDQUFDO2dEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNxQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNxQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNrQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNvQjtJQVN2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNPO0lBckRyQixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBNmdCakI7SUFBRCxZQUFDO0NBN2dCRCxBQTZnQkMsQ0E3Z0IwQixFQUFFLENBQUMsU0FBUyxHQTZnQnRDO0FBN2dCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEaWVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVyRGllRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVySnVtcFN1Y2Nlc3NFdmVudFwiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwdWJsaWMgYXV0b0p1bXA6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcml2YXRlIGZhaWxDaGFuY2U6IE51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XHJcbiAgICBwdWJsaWMgcGxheWVyRGllID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHB1YmxpYyBsZWZ0T3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgcHVibGljIHJpZ2h0T3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJsb2NrTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgcHJvcExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGxvYWRpbmdMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBibG9ja0lucHV0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgaW5zdWZmaWNpZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBhcnJheVJhdGlvOiBudW1iZXIgPSAwLjU1NjA0NzE5NzY0MDExODtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIGNhbkp1bXAgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBncmVlbmJsb2NrTGlzdDogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBvcmFuZ2VibG9ja0xpc3Q6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByaXZhdGUgcHVycGxlYmxvY2tMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncmFzc1Byb3BMaXN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZGVzZXJ0UHJvcExpc3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBwdXJwbGVQcm9wTGlzdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgYmFsYW5jZVRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgd2luQW1vdW50VGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHVibGljIHdpbkFtb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgcGVyZmVjdCA9MDtcclxuICAgIHB1YmxpYyBzaW5nbGVNYXggPTA7XHJcbiAgICBwcml2YXRlIGN1cnJCbG9jazogQmxvY2sgPSBudWxsO1xyXG4gICAgcHVibGljIHRvdGFsQmV0PTA7XHJcbiAgICBwcml2YXRlIG5leHRCbG9jazogQmxvY2sgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VmFsdWUgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW8gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpb0lkID0gLTE7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRpbmdTY29yZSA9ZmFsc2U7XHJcbiAgICB0aW1lcmZvckxvYWRpbmc9MDtcclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg56ys5LiA5Liq5pa55Z2XXHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgwKTtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVlbmJsb2NrTGlzdFs1XSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0xheWVyLmFkZENoaWxkKGJsb2NrTm9kZSk7XHJcbiAgICAgICAgbGV0IGJsb2NrID0gYmxvY2tOb2RlLmdldENvbXBvbmVudChCbG9jayk7XHJcbiAgICAgICAgYmxvY2suY2xvc2VQZXJmZWN0U2NvcmUoKTtcclxuICAgICAgICBibG9ja05vZGUucG9zaXRpb24gPSB0aGlzLmJsb2NrTGF5ZXIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubGVmdE9yaWdpbik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gYmxvY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBibG9jaztcclxuICAgICAgICB0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmN1cnJCbG9jay5nZXRDZW50ZXJQb3NpdGlvbigpKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZEJsb2NrKCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRQcm9wKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVUb3VjaCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uUmVhZHlKdW1wLCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkp1bXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlVG91Y2goKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uUmVhZHlKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkmJiF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNjb3JlKHZhbHVlKXtcclxuICAgIC8vICAgIC8vIGdsb2JhbC5zZXRCYWxhbmNlKGdsb2JhbC5nZXRCYWxhbmNlKCkgKyB2YWx1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuZ2V0QmFsYW5jZSgpKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50VGV4dC5zdHJpbmcgPShNYXRoLnJvdW5kKCh0aGlzLndpbkFtb3VudCArIHZhbHVlKSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50ICs9dmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCYWxhbmNlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkVG90YWxCZXQodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudG90YWxCZXQrPXZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoZWNrUXVhbGlmeSgpe1xyXG4gICAgICAgIGlmKGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlPj1jYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkp1bXAoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0lucHV0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGp1bXBEaXN0YW5jZSA9IHRoaXMucGxheWVyLmp1bXBEaXN0YW5jZTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLm5vZGUueCArIGp1bXBEaXN0YW5jZSAqIGRpciwgdGhpcy5wbGF5ZXIubm9kZS55ICsganVtcERpc3RhbmNlICogdGhpcy5hcnJheVJhdGlvKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFdvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxCZXQoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0UG9zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnBsYXlTY29yZUFuaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlPnRoaXMuc2luZ2xlTWF4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXggPSB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5zdG9wQWxsQWN0aW9uKHRoaXMucGxheWVyLnBsYXRmb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VCZXRcIjpmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz0gdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZz0wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8odGFyZ2V0V29ybGRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMb3NlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gIGNjLnJvdGF0ZUJ5KDAuMiwtOTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSs9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrSW5wdXRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUHJvcCh2YWx1ZSxwb3NpdGlvbil7XHJcblxyXG4gICAgICAgIHZhciBwcm9wTm9kZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKHZhbHVlPj00ICYmdmFsdWU8PTcpe1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVzZXJ0UHJvcExpc3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih2YWx1ZT49OCYmdmFsdWU8PTEyKXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnB1cnBsZVByb3BMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXNzUHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BMYXllci5hZGRDaGlsZChwcm9wTm9kZSk7XHJcbiAgICAgICAgcHJvcE5vZGUueSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFJhbmRvbUludChtaW4sIG1heCl7XHJcbiAgICAgICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC1taW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRCbG9jaygpIHtcclxuICAgICAgICBsZXQgbiA7XHJcbiAgICAgICAgbGV0IGJsb2NrTm9kZSA7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VmFsdWU+PTQgJiZ0aGlzLmN1cnJlbnRWYWx1ZTw9Nyl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9yYW5nZWJsb2NrTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9yYW5nZWJsb2NrTGlzdFtuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jdXJyZW50VmFsdWU+PTgmJnRoaXMuY3VycmVudFZhbHVlPD0xMil7XHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnB1cnBsZWJsb2NrTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHVycGxlYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JlZW5ibG9ja0xpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYmxvY2tMYXllci5hZGRDaGlsZChibG9ja05vZGUpO1xyXG4gICAgICAgIGxldCBibG9jayA9IGJsb2NrTm9kZS5nZXRDb21wb25lbnQoQmxvY2spO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuICAgICAgICAvL2xldCBzY2FsZSA9IDE7XHJcbiAgICAgICAvLyBsZXQgZGlzdGFuY2UgPSBibG9jay5taW5EaXN0YW5jZSArIE1hdGgucmFuZG9tKCkgKiAoYmxvY2subWF4RGlzdGFuY2UgLSBibG9jay5taW5EaXN0YW5jZSk7XHJcbiAgICAgICAgYmxvY2tOb2RlLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgYmxvY2tOb2RlLnggPSB0aGlzLmN1cnJCbG9jay5ub2RlLnggKyA1MDA7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS55ID0gdGhpcy5jdXJyQmxvY2subm9kZS55ICsgNTAwICogdGhpcy5hcnJheVJhdGlvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS54ID0gdGhpcy5jdXJyQmxvY2subm9kZS54IC0gNTAwO1xyXG4gICAgICAgICAgICBibG9ja05vZGUueSA9IHRoaXMuY3VyckJsb2NrLm5vZGUueSArIDUwMCAqIHRoaXMuYXJyYXlSYXRpbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICB0aGlzLm5leHRCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIHJldHVybiBibG9jaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUJsb2NrKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tPdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLnN1Yih0aGlzLmN1cnJCbG9jay5ub2RlLnBvc2l0aW9uKS5tYWcoKT4gdGhpcy5jdXJyQmxvY2subm9kZS53aWR0aCAvIDIgKiB0aGlzLmN1cnJCbG9jay5ub2RlLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTdGFnZShjYjpGdW5jdGlvbixjYlRhcmdldD86YW55KSB7XHJcbiAgICAgICAgbGV0IG1vdmVWZWN0b3I7XHJcbiAgICAgICAgbGV0IHBsYXllcldvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgcGxheWVyV29ybGRQb3Muc3ViKHRoaXMubGVmdE9yaWdpbik7XHJcbiAgICAgICAgICAgIG1vdmVWZWN0b3IgPSBwbGF5ZXJXb3JsZFBvcy5zdWIodGhpcy5sZWZ0T3JpZ2luKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVWZWN0b3IgPSBwbGF5ZXJXb3JsZFBvcy5zdWIodGhpcy5yaWdodE9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGNiLCBjYlRhcmdldCk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjcsdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihtb3ZlVmVjdG9yKSksZmluaXNoZWQpO1xyXG4gICAgICAgIHRoaXMuYmcucnVuQWN0aW9uKGNjLm1vdmVUbygwLjcsY2MudjIoMCx0aGlzLm5vZGUucG9zaXRpb24uc3ViKG1vdmVWZWN0b3IpLnkpKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbW9HZW5lcmF0ZVNjb3JlKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJQZXJmZWN0O1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyQ29uc287XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtO1xyXG4gICAgICAgIHZhciBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVTY29yZTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgbXVsdGlwbGllclxyXG4gICAgICAgIHBsYXRmb3JtID0gICAoTWF0aC5yYW5kb20oKSAqICgxIC0gMCkgKyAwKTtcclxuICAgICAgICBpZihwbGF0Zm9ybT49MC44KXtcclxuICAgICAgICAgICAgcGxhdGZvcm09MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVsdGlwbGllclBlcmZlY3QgPSAoTWF0aC5yYW5kb20oKSAqICgxMCAtIDIpICsgMik7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gKE1hdGgucmFuZG9tKCkgKiAoMSAtIDAuMikgKyAwLjIpO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9IE1hdGgucm91bmQoKGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nICogbXVsdGlwbGllclBlcmZlY3QpICogMTApIC8gMTA7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gY29uc29sZVNjb3JlO1xyXG4gICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMDApLzEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMub25BdXRvSnVtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcmZvckxvYWRpbmc+PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5nZW5lcmF0aW5nQmFsYW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nKz1kdDtcclxuICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiZXRBbW91bnQnOiBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJIYXBweSBKdW1wIGJldCB3aXRoIHRoZXNlIGluZGV4IDFzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVlc3RUeXBlXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWwuY3VycmVudEJldFNsb3QsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5wbGF5ZXJEaWU9dGhpcy5wbGF5ZXJEaWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMucGxheWVyRGllKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVyRGllRXZlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikucGxheWVyRGllID0gdGhpcy5wbGF5ZXJEaWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyRGllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgLT0gY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgRy5kaXNwYXRjaEV2ZW50KG5ldyBQbGF5ZXJEaWVFdmVudCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5nZW5lcmF0aW5nU2NvcmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZXREYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZXREYXRhID1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2ViZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbW9HZW5lcmF0ZVNjb3JlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2ViZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gZmFsc2U7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbWl0Q2hhbmdlYmV0KCl7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3RhZ2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZGRCbG9jaygpO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuSnVtcD0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhbGFuY2UoKTtcclxuICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBvbkF1dG9KdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkmJnRoaXMuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmNhbkp1bXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlbkNoYXJnZVwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1cIix0aGlzLnBsYXllci5ub2RlKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdXRvSnVtcE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXV0b2p1bXBNYW5hZ2VyXCIpLnVwZGF0ZUp1bXBUaW1lcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUp1bXBBdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJlYWR5SnVtcEF1ZGlvLGZhbHNlLGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZWFkeUp1bXBBdWRpb0lkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdGFsQmV0KGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFpbCA9IHRoaXMuUmFuZG9tSW50KDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGp1bXBEaXN0YW5jZSA9IDQ2MCArIE1hdGgucmFuZG9tKCkgKiAoNTIwIC00NjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZhaWw8PXRoaXMuZmFpbENoYW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1bXBEaXN0YW5jZSA9IHRoaXMuUmFuZG9tSW50KDMwMCwzODApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21QZXJmZWN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybSA9PSAxICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbVBlcmZlY3QgPSB0aGlzLlJhbmRvbUludCgwLDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbVBlcmZlY3Q8PTUwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5wbGF0Zm9ybT0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIubm9kZS54ICsganVtcERpc3RhbmNlICogZGlyLCB0aGlzLnBsYXllci5ub2RlLnkgKyBqdW1wRGlzdGFuY2UgKiB0aGlzLmFycmF5UmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdFBvcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJCbG9jayA9IHRoaXMubmV4dEJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5wbGF5U2NvcmVBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU+dGhpcy5zaW5nbGVNYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlTWF4ID0gdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3QrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2suc3RvcEFsbEFjdGlvbih0aGlzLnBsYXllci5wbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWwudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz10aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nPTA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFdvcmxkUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheUxvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICBjYy5yb3RhdGVCeSgwLjIsLTkwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==