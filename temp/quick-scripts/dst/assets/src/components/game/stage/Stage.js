
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
                            if (global.isEncrypt) {
                                global.getSocket().emit('send-result', btoa(JSON.stringify(emit_result)));
                            }
                            else {
                                global.getSocket().emit('send-result', emit_result);
                            }
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
                        if (global.isEncrypt) {
                            global.getSocket().emit('send-result', btoa(JSON.stringify(emit_result)));
                        }
                        else {
                            global.getSocket().emit('send-result', emit_result);
                        }
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
        if (platform >= 0.4) {
            platform = 1;
        }
        multiplierPerfect = (Math.random() * (10 - 2) + 2);
        multiplierConso = 0.2;
        perfectScore = (cc.find("Canvas/InGameBetting").getComponent("InGameBetting").currentBetting * Math.floor(multiplierPerfect));
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
                        if (global.isEncrypt) {
                            global.getSocket().emit('changeBet', btoa(JSON.stringify(emit_obj)));
                        }
                        else {
                            global.getSocket().emit('changeBet', emit_obj);
                        }
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
                        global.platform = 1;
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
                                    if (global.isEncrypt) {
                                        global.getSocket().emit('send-result', btoa(JSON.stringify(emit_result)));
                                    }
                                    else {
                                        global.getSocket().emit('send-result', emit_result);
                                    }
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
                                if (global.isEncrypt) {
                                    global.getSocket().emit('send-result', btoa(JSON.stringify(emit_result)));
                                }
                                else {
                                    global.getSocket().emit('send-result', emit_result);
                                }
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
        property(cc.Boolean)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLGlDQUFnQztBQUNoQyxnQ0FBK0I7QUFDL0IsaUVBQWdFO0FBQ2hFLGlGQUFnRjtBQUNoRiw0Q0FBOEM7QUFFeEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUR2QztRQUFBLHFFQW9pQkM7UUFqaUJVLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLGlCQUFpQixDQUFDO1FBRXZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRXZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2QyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixtQkFB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SyxDQW1pQmpCO0lBQUQsWUFBQztDQW5pQkQsQUFtaUJDLENBbmlCMEIsRUFBRSxDQUFDLFNBQVMsR0FtaUJ0QztBQW5pQlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcclxuaW1wb3J0IHsgUGxheWVyRGllRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vZXZlbnRzL1BsYXllckRpZUV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllckp1bXBTdWNjZXNzRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vZXZlbnRzL1BsYXllckp1bXBTdWNjZXNzRXZlbnRcIjtcclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuLi8uLi8uLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFN0YWdlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHVibGljIGF1dG9KdW1wOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgcHJpdmF0ZSBmYWlsQ2hhbmNlOiBOdW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHBsYXllckRpZSA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBwdWJsaWMgbGVmdE9yaWdpbjogY2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHB1YmxpYyByaWdodE9yaWdpbjogY2MuVmVjMiA9IGNjLnYyKCk7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBibG9ja0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIHByb3BMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBiZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBsb2FkaW5nTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYmxvY2tJbnB1dExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGluc3VmZmljaWVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgYXJyYXlSYXRpbzogbnVtYmVyID0gMC41NTYwNDcxOTc2NDAxMTg7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHB1YmxpYyBjYW5KdW1wID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByaXZhdGUgZ3JlZW5ibG9ja0xpc3Q6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByaXZhdGUgb3JhbmdlYmxvY2tMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwcml2YXRlIHB1cnBsZWJsb2NrTGlzdDogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZ3Jhc3NQcm9wTGlzdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGRlc2VydFByb3BMaXN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgcHVycGxlUHJvcExpc3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJhbGFuY2VUZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHdpbkFtb3VudFRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHB1YmxpYyB3aW5BbW91bnQgPSAwO1xyXG4gICAgcHVibGljIHBlcmZlY3QgPTA7XHJcbiAgICBwdWJsaWMgc2luZ2xlTWF4ID0wO1xyXG4gICAgcHJpdmF0ZSBjdXJyQmxvY2s6IEJsb2NrID0gbnVsbDtcclxuICAgIHB1YmxpYyB0b3RhbEJldD0wO1xyXG4gICAgcHJpdmF0ZSBuZXh0QmxvY2s6IEJsb2NrID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudFZhbHVlID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW9JZCA9IC0xO1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0aW5nU2NvcmUgPWZhbHNlO1xyXG4gICAgdGltZXJmb3JMb2FkaW5nPTA7XHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5ibG9ja0xheWVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOesrOS4gOS4quaWueWdl1xyXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoMCk7XHJcbiAgICAgICAgbGV0IGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JlZW5ibG9ja0xpc3RbNV0pO1xyXG4gICAgICAgIHRoaXMuYmxvY2tMYXllci5hZGRDaGlsZChibG9ja05vZGUpO1xyXG4gICAgICAgIGxldCBibG9jayA9IGJsb2NrTm9kZS5nZXRDb21wb25lbnQoQmxvY2spO1xyXG4gICAgICAgIGJsb2NrLmNsb3NlUGVyZmVjdFNjb3JlKCk7XHJcbiAgICAgICAgYmxvY2tOb2RlLnBvc2l0aW9uID0gdGhpcy5ibG9ja0xheWVyLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmxlZnRPcmlnaW4pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIHRoaXMubmV4dEJsb2NrID0gYmxvY2s7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5jdXJyQmxvY2suZ2V0Q2VudGVyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQmxvY2soKTtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZFByb3AoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZVRvdWNoKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25SZWFkeUp1bXAsIHRoaXMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uSnVtcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVUb3VjaCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25SZWFkeUp1bXAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSYmIXRoaXMuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZWFkeUp1bXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU2NvcmUodmFsdWUpe1xyXG4gICAgLy8gICAgLy8gZ2xvYmFsLnNldEJhbGFuY2UoZ2xvYmFsLmdldEJhbGFuY2UoKSArIHZhbHVlKTtcclxuICAgIC8vICAgICB0aGlzLmJhbGFuY2VUZXh0LnN0cmluZyA9IChNYXRoLnJvdW5kKGdsb2JhbC5nZXRCYWxhbmNlKCkqMTApLzEwKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgdGhpcy53aW5BbW91bnRUZXh0LnN0cmluZyA9KE1hdGgucm91bmQoKHRoaXMud2luQW1vdW50ICsgdmFsdWUpKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgdGhpcy53aW5BbW91bnQgKz12YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJhbGFuY2UoKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2VUZXh0LnN0cmluZyA9IChNYXRoLnJvdW5kKGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRUb3RhbEJldCh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy50b3RhbEJldCs9dmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hlY2tRdWFsaWZ5KCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2U+PWNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uSnVtcCgpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrSW5wdXRMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQganVtcERpc3RhbmNlID0gdGhpcy5wbGF5ZXIuanVtcERpc3RhbmNlO1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5wbGF5ZXIuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIubm9kZS54ICsganVtcERpc3RhbmNlICogZGlyLCB0aGlzLnBsYXllci5ub2RlLnkgKyBqdW1wRGlzdGFuY2UgKiB0aGlzLmFycmF5UmF0aW8pO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnBsYXllci5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdFBvcyA9IHRoaXMubmV4dEJsb2NrLmdldEFuY2hvckxvY2F0aW9uKHRhcmdldFdvcmxkUG9zLCBkaXIsZ2xvYmFsLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb3RhbEJldChjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXRQb3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmp1bXBUbyhmb3JtYXRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJCbG9jayA9IHRoaXMubmV4dEJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2sucGxheVNjb3JlQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU+dGhpcy5zaW5nbGVNYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZU1heCA9IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIrTWF0aC5yb3VuZCh0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUqMTApLzEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnN0b3BBbGxBY3Rpb24odGhpcy5wbGF5ZXIucGxhdGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgRy5kaXNwYXRjaEV2ZW50KG5ldyBQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50KHRoaXMuY3VyckJsb2NrLnNjb3JlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWwudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbC5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPSB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFdvcmxkUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5TG9zZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICBjYy5yb3RhdGVCeSgwLjIsLTkwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWwudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJDaGFuZ2UgYmV0OiBcIiArIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUHJvcCh2YWx1ZSxwb3NpdGlvbil7XHJcblxyXG4gICAgICAgIHZhciBwcm9wTm9kZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKHZhbHVlPj00ICYmdmFsdWU8PTcpe1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVzZXJ0UHJvcExpc3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih2YWx1ZT49OCYmdmFsdWU8PTEyKXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnB1cnBsZVByb3BMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXNzUHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BMYXllci5hZGRDaGlsZChwcm9wTm9kZSk7XHJcbiAgICAgICAgcHJvcE5vZGUueSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSW50KG1pbiwgbWF4KXtcclxuICAgICAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLW1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEJsb2NrKCkge1xyXG4gICAgICAgIGxldCBuIDtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlIDtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRWYWx1ZT49NCAmJnRoaXMuY3VycmVudFZhbHVlPD03KXtcclxuXHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9yYW5nZWJsb2NrTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9yYW5nZWJsb2NrTGlzdFtuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jdXJyZW50VmFsdWU+PTgmJnRoaXMuY3VycmVudFZhbHVlPD0xMil7XHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnB1cnBsZWJsb2NrTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHVycGxlYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JlZW5ibG9ja0xpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIuYWRkQ2hpbGQoYmxvY2tOb2RlKTtcclxuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KEJsb2NrKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBibG9jay5taW5TY2FsZSArIE1hdGgucmFuZG9tKCkgKiAoYmxvY2subWF4U2NhbGUgLSBibG9jay5taW5TY2FsZSk7XHJcbiAgICAgICAgLy9sZXQgc2NhbGUgPSAxO1xyXG4gICAgICAgLy8gbGV0IGRpc3RhbmNlID0gYmxvY2subWluRGlzdGFuY2UgKyBNYXRoLnJhbmRvbSgpICogKGJsb2NrLm1heERpc3RhbmNlIC0gYmxvY2subWluRGlzdGFuY2UpO1xyXG4gICAgICAgIGJsb2NrTm9kZS5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS54ID0gdGhpcy5jdXJyQmxvY2subm9kZS54ICsgNTAwO1xyXG4gICAgICAgICAgICBibG9ja05vZGUueSA9IHRoaXMuY3VyckJsb2NrLm5vZGUueSArIDUwMCAqIHRoaXMuYXJyYXlSYXRpbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibG9ja05vZGUueCA9IHRoaXMuY3VyckJsb2NrLm5vZGUueCAtIDUwMDtcclxuICAgICAgICAgICAgYmxvY2tOb2RlLnkgPSB0aGlzLmN1cnJCbG9jay5ub2RlLnkgKyA1MDAgKiB0aGlzLmFycmF5UmF0aW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gdGhpcy5uZXh0QmxvY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBibG9jaztcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCbG9jaygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrT3ZlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5jdXJyQmxvY2subm9kZS5wb3NpdGlvbikubWFnKCk+IHRoaXMuY3VyckJsb2NrLm5vZGUud2lkdGggLyAyICogdGhpcy5jdXJyQmxvY2subm9kZS5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU3RhZ2UoY2I6RnVuY3Rpb24sY2JUYXJnZXQ/OmFueSkge1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yO1xyXG4gICAgICAgIGxldCBwbGF5ZXJXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIHBsYXllcldvcmxkUG9zLnN1Yih0aGlzLmxlZnRPcmlnaW4pO1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMubGVmdE9yaWdpbik7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMucmlnaHRPcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhjYiwgY2JUYXJnZXQpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC43LHRoaXMubm9kZS5wb3NpdGlvbi5zdWIobW92ZVZlY3RvcikpLGZpbmlzaGVkKTtcclxuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC43LGNjLnYyKDAsdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihtb3ZlVmVjdG9yKS55KSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkZW1vR2VuZXJhdGVTY29yZSgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyUGVyZmVjdDtcclxuICAgICAgICB2YXIgbXVsdGlwbGllckNvbnNvO1xyXG4gICAgICAgIHZhciBwbGF0Zm9ybTtcclxuICAgICAgICB2YXIgcGVyZmVjdFNjb3JlO1xyXG4gICAgICAgIHZhciBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIG11bHRpcGxpZXJcclxuICAgICAgICBwbGF0Zm9ybSA9ICAgKE1hdGgucmFuZG9tKCkgKiAoMSAtIDApICsgMCk7XHJcbiAgICAgICAgaWYocGxhdGZvcm0+PTAuNCl7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtPTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArIDIpO1xyXG4gICAgICAgIG11bHRpcGxpZXJDb25zbyA9IDAuMjtcclxuICAgICAgICBwZXJmZWN0U2NvcmUgPSAoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gY29uc29sZVNjb3JlO1xyXG4gICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMDApLzEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMub25BdXRvSnVtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcmZvckxvYWRpbmc+PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmV0QW1vdW50JzogY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRCZXRTbG90XCI6Z2xvYmFsLmN1cnJlbnRCZXRTbG90LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikucGxheWVyRGllPXRoaXMucGxheWVyRGllO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBsYXllckRpZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdjaGFuZ2VCZXQnLCBlbWl0X29iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVyRGllRXZlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikucGxheWVyRGllID0gdGhpcy5wbGF5ZXJEaWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyRGllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UgLT0gY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgRy5kaXNwYXRjaEV2ZW50KG5ldyBQbGF5ZXJEaWVFdmVudCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmdlbmVyYXRpbmdTY29yZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nKz1kdDtcclxuICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmZpbmlzaEdldERhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdldERhdGEgPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZWJldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbW9HZW5lcmF0ZVNjb3JlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2ViZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVtaXRDaGFuZ2ViZXQoKXtcclxuICAgICAgICAgdGhpcy51cGRhdGVTdGFnZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJsb2NrKCk7XHJcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoXCJDaGFuZ2UtQmV0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuSnVtcD0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhbGFuY2UoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BdXRvSnVtcCgpIHtcclxuICAgICAgICBpZih0aGlzLmNoZWNrUXVhbGlmeSgpJiZ0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jYW5KdW1wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNoaWNrZW5DaGFyZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwicm90YXRlQW5jaG9yL3BhcnRpY2xlc3lzdGVtXCIsdGhpcy5wbGF5ZXIubm9kZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQXV0b0p1bXBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkF1dG9qdW1wTWFuYWdlclwiKS51cGRhdGVKdW1wVGltZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlKdW1wQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5yZWFkeUp1bXBBdWRpbyxmYWxzZSxnbG9iYWwuZ2V0RWZmZWN0Vm9sdW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5KdW1wPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMucmVhZHlKdW1wQXVkaW9JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb3RhbEJldChjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZhaWwgPSB0aGlzLlJhbmRvbUludCgwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqdW1wRGlzdGFuY2UgPSA0NjAgKyBNYXRoLnJhbmRvbSgpICogKDUyMCAtNDYwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihmYWlsPD10aGlzLmZhaWxDaGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdW1wRGlzdGFuY2UgPSB0aGlzLlJhbmRvbUludCgzMDAsMzgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUGVyZmVjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwucGxhdGZvcm0gPT0gMSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwucGxhdGZvcm09MTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5wbGF5ZXIuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMih0aGlzLnBsYXllci5ub2RlLnggKyBqdW1wRGlzdGFuY2UgKiBkaXIsIHRoaXMucGxheWVyLm5vZGUueSArIGp1bXBEaXN0YW5jZSAqIHRoaXMuYXJyYXlSYXRpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFdvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdFBvcyA9IHRoaXMubmV4dEJsb2NrLmdldEFuY2hvckxvY2F0aW9uKHRhcmdldFdvcmxkUG9zLCBkaXIsZ2xvYmFsLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0UG9zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmp1bXBUbyhmb3JtYXRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckJsb2NrID0gdGhpcy5uZXh0QmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnBsYXlTY29yZUFuaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZT50aGlzLnNpbmdsZU1heCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXggPSB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwucGxhdGZvcm09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIrTWF0aC5yb3VuZCh0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUqMTApLzEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcInNjb3JlXCIsdGhpcy5wbGF5ZXIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5zdG9wQWxsQWN0aW9uKHRoaXMucGxheWVyLnBsYXRmb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRy5kaXNwYXRjaEV2ZW50KG5ldyBQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50KHRoaXMuY3VyckJsb2NrLnNjb3JlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrUXVhbGlmeSgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbC5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VCZXRcIjpmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuaXNFbmNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz10aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nPTA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmp1bXBUbyh0YXJnZXRXb3JsZFBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMb3NlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAgY2Mucm90YXRlQnkoMC4yLC05MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJDaGFuZ2UgYmV0OiBcIiArIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VCZXRcIjpmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLmlzRW5jcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBidG9hKEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=