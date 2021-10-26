
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.Stage = void 0;
var Player_1 = require("./Player");
var Block_1 = require("./Block");
var G_1 = require("../../../G");
var PlayerDieEvent_1 = require("../../../events/PlayerDieEvent");
var PlayerJumpSuccessEvent_1 = require("../../../events/PlayerJumpSuccessEvent");
var global = require("../../../GlobalData");
var ecrypt = require("../../../Network/ecrypt");
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
                                global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
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
                            global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
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
                            global.getSocket().emit('changeBet', ecrypt.encrypt(JSON.stringify(emit_obj)));
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
                                        global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
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
                                    global.getSocket().emit('send-result', ecrypt.encrypt(JSON.stringify(emit_result)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyxpQ0FBZ0M7QUFDaEMsZ0NBQStCO0FBQy9CLGlFQUFnRTtBQUNoRSxpRkFBZ0Y7QUFDaEYsNENBQThDO0FBQzlDLGdEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUF2QztRQUFBLHFFQW1pQkM7UUFqaUJVLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLGlCQUFpQixDQUFDO1FBRXZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRXZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2QyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztR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O2dEQUNvQjtJQVN2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNPO0lBckRyQixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBbWlCakI7SUFBRCxZQUFDO0NBbmlCRCxBQW1pQkMsQ0FuaUIwQixFQUFFLENBQUMsU0FBUyxHQW1pQnRDO0FBbmlCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEaWVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVyRGllRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVySnVtcFN1Y2Nlc3NFdmVudFwiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCIuLi8uLi8uLi9OZXR3b3JrL2VjcnlwdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHB1YmxpYyBhdXRvSnVtcDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgZmFpbENoYW5jZTogTnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBwbGF5ZXJEaWUgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgcHVibGljIGxlZnRPcmlnaW46IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBwdWJsaWMgcmlnaHRPcmlnaW46IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYmxvY2tMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBwcm9wTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgbG9hZGluZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJsb2NrSW5wdXRMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBpbnN1ZmZpY2llbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGFycmF5UmF0aW86IG51bWJlciA9IDAuNTU2MDQ3MTk3NjQwMTE4O1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwdWJsaWMgY2FuSnVtcCA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwcml2YXRlIGdyZWVuYmxvY2tMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwcml2YXRlIG9yYW5nZWJsb2NrTGlzdDogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBwdXJwbGVibG9ja0xpc3Q6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGdyYXNzUHJvcExpc3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBkZXNlcnRQcm9wTGlzdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHB1cnBsZVByb3BMaXN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBiYWxhbmNlVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5BbW91bnRUZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgd2luQW1vdW50ID0gMDtcclxuICAgIHB1YmxpYyBwZXJmZWN0ID0wO1xyXG4gICAgcHVibGljIHNpbmdsZU1heCA9MDtcclxuICAgIHByaXZhdGUgY3VyckJsb2NrOiBCbG9jayA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG90YWxCZXQ9MDtcclxuICAgIHByaXZhdGUgbmV4dEJsb2NrOiBCbG9jayA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRWYWx1ZSA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIHByaXZhdGUgZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZ2VuZXJhdGluZ1Njb3JlID1mYWxzZTtcclxuICAgIHRpbWVyZm9yTG9hZGluZz0wO1xyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuYmxvY2tMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDnrKzkuIDkuKrmlrnlnZdcclxuICAgICAgICB0aGlzLmFkZFNjb3JlKDApO1xyXG4gICAgICAgIGxldCBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0WzVdKTtcclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIuYWRkQ2hpbGQoYmxvY2tOb2RlKTtcclxuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KEJsb2NrKTtcclxuICAgICAgICBibG9jay5jbG9zZVBlcmZlY3RTY29yZSgpO1xyXG4gICAgICAgIGJsb2NrTm9kZS5wb3NpdGlvbiA9IHRoaXMuYmxvY2tMYXllci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sZWZ0T3JpZ2luKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSBibG9jaztcclxuICAgICAgICB0aGlzLm5leHRCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuY3VyckJsb2NrLmdldENlbnRlclBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEJsb2NrKCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRQcm9wKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVUb3VjaCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uUmVhZHlKdW1wLCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkp1bXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlVG91Y2goKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uUmVhZHlKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkmJiF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNjb3JlKHZhbHVlKXtcclxuICAgIC8vICAgIC8vIGdsb2JhbC5zZXRCYWxhbmNlKGdsb2JhbC5nZXRCYWxhbmNlKCkgKyB2YWx1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuZ2V0QmFsYW5jZSgpKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50VGV4dC5zdHJpbmcgPShNYXRoLnJvdW5kKCh0aGlzLndpbkFtb3VudCArIHZhbHVlKSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50ICs9dmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCYWxhbmNlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkVG90YWxCZXQodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudG90YWxCZXQrPXZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoZWNrUXVhbGlmeSgpe1xyXG4gICAgICAgIGlmKGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlPj1jYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkp1bXAoKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0lucHV0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGp1bXBEaXN0YW5jZSA9IHRoaXMucGxheWVyLmp1bXBEaXN0YW5jZTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLm5vZGUueCArIGp1bXBEaXN0YW5jZSAqIGRpciwgdGhpcy5wbGF5ZXIubm9kZS55ICsganVtcERpc3RhbmNlICogdGhpcy5hcnJheVJhdGlvKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFdvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxCZXQoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0UG9zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnBsYXlTY29yZUFuaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlPnRoaXMuc2luZ2xlTWF4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXggPSB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5zdG9wQWxsQWN0aW9uKHRoaXMucGxheWVyLnBsYXRmb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VCZXRcIjpmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSs9IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8odGFyZ2V0V29ybGRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMb3NlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gIGNjLnJvdGF0ZUJ5KDAuMiwtOTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUHJvcCh2YWx1ZSxwb3NpdGlvbil7XHJcblxyXG4gICAgICAgIHZhciBwcm9wTm9kZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKHZhbHVlPj00ICYmdmFsdWU8PTcpe1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVzZXJ0UHJvcExpc3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih2YWx1ZT49OCYmdmFsdWU8PTEyKXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnB1cnBsZVByb3BMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXNzUHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BMYXllci5hZGRDaGlsZChwcm9wTm9kZSk7XHJcbiAgICAgICAgcHJvcE5vZGUueSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSW50KG1pbiwgbWF4KXtcclxuICAgICAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLW1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEJsb2NrKCkge1xyXG4gICAgICAgIGxldCBuIDtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlIDtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRWYWx1ZT49NCAmJnRoaXMuY3VycmVudFZhbHVlPD03KXtcclxuXHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9yYW5nZWJsb2NrTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9yYW5nZWJsb2NrTGlzdFtuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jdXJyZW50VmFsdWU+PTgmJnRoaXMuY3VycmVudFZhbHVlPD0xMil7XHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnB1cnBsZWJsb2NrTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHVycGxlYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JlZW5ibG9ja0xpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIuYWRkQ2hpbGQoYmxvY2tOb2RlKTtcclxuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KEJsb2NrKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBibG9jay5taW5TY2FsZSArIE1hdGgucmFuZG9tKCkgKiAoYmxvY2subWF4U2NhbGUgLSBibG9jay5taW5TY2FsZSk7XHJcbiAgICAgICAgLy9sZXQgc2NhbGUgPSAxO1xyXG4gICAgICAgLy8gbGV0IGRpc3RhbmNlID0gYmxvY2subWluRGlzdGFuY2UgKyBNYXRoLnJhbmRvbSgpICogKGJsb2NrLm1heERpc3RhbmNlIC0gYmxvY2subWluRGlzdGFuY2UpO1xyXG4gICAgICAgIGJsb2NrTm9kZS5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS54ID0gdGhpcy5jdXJyQmxvY2subm9kZS54ICsgNTAwO1xyXG4gICAgICAgICAgICBibG9ja05vZGUueSA9IHRoaXMuY3VyckJsb2NrLm5vZGUueSArIDUwMCAqIHRoaXMuYXJyYXlSYXRpbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibG9ja05vZGUueCA9IHRoaXMuY3VyckJsb2NrLm5vZGUueCAtIDUwMDtcclxuICAgICAgICAgICAgYmxvY2tOb2RlLnkgPSB0aGlzLmN1cnJCbG9jay5ub2RlLnkgKyA1MDAgKiB0aGlzLmFycmF5UmF0aW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gdGhpcy5uZXh0QmxvY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBibG9jaztcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCbG9jaygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrT3ZlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5jdXJyQmxvY2subm9kZS5wb3NpdGlvbikubWFnKCk+IHRoaXMuY3VyckJsb2NrLm5vZGUud2lkdGggLyAyICogdGhpcy5jdXJyQmxvY2subm9kZS5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU3RhZ2UoY2I6RnVuY3Rpb24sY2JUYXJnZXQ/OmFueSkge1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yO1xyXG4gICAgICAgIGxldCBwbGF5ZXJXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIHBsYXllcldvcmxkUG9zLnN1Yih0aGlzLmxlZnRPcmlnaW4pO1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMubGVmdE9yaWdpbik7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMucmlnaHRPcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhjYiwgY2JUYXJnZXQpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC43LHRoaXMubm9kZS5wb3NpdGlvbi5zdWIobW92ZVZlY3RvcikpLGZpbmlzaGVkKTtcclxuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC43LGNjLnYyKDAsdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihtb3ZlVmVjdG9yKS55KSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkZW1vR2VuZXJhdGVTY29yZSgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyUGVyZmVjdDtcclxuICAgICAgICB2YXIgbXVsdGlwbGllckNvbnNvO1xyXG4gICAgICAgIHZhciBwbGF0Zm9ybTtcclxuICAgICAgICB2YXIgcGVyZmVjdFNjb3JlO1xyXG4gICAgICAgIHZhciBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIG11bHRpcGxpZXJcclxuICAgICAgICBwbGF0Zm9ybSA9ICAgKE1hdGgucmFuZG9tKCkgKiAoMSAtIDApICsgMCk7XHJcbiAgICAgICAgaWYocGxhdGZvcm0+PTAuNCl7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtPTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArIDIpO1xyXG4gICAgICAgIG11bHRpcGxpZXJDb25zbyA9IDAuMjtcclxuICAgICAgICBwZXJmZWN0U2NvcmUgPSAoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gY29uc29sZVNjb3JlO1xyXG4gICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMDApLzEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMub25BdXRvSnVtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcmZvckxvYWRpbmc+PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmV0QW1vdW50JzogY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRCZXRTbG90XCI6Z2xvYmFsLmN1cnJlbnRCZXRTbG90LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikucGxheWVyRGllPXRoaXMucGxheWVyRGllO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBsYXllckRpZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfb2JqKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnY2hhbmdlQmV0JywgZW1pdF9vYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IFBsYXllckRpZUV2ZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLnBsYXllckRpZSA9IHRoaXMucGxheWVyRGllO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlIC09IGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVyRGllRXZlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5nZW5lcmF0aW5nU2NvcmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZXREYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZXREYXRhID1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2ViZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZW1vR2VuZXJhdGVTY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlYmV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbWl0Q2hhbmdlYmV0KCl7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3RhZ2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZGRCbG9jaygpO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsb2NrSW5wdXRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbkp1bXA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYWxhbmNlKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQXV0b0p1bXAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSYmdGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuQ2hhcmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMucGxheWVyLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1dG9KdW1wTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdXRvanVtcE1hbmFnZXJcIikudXBkYXRlSnVtcFRpbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5SnVtcEF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucmVhZHlKdW1wQXVkaW8sZmFsc2UsZ2xvYmFsLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlYWR5SnVtcEF1ZGlvSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG90YWxCZXQoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWlsID0gdGhpcy5SYW5kb21JbnQoMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQganVtcERpc3RhbmNlID0gNDYwICsgTWF0aC5yYW5kb20oKSAqICg1MjAgLTQ2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmFpbDw9dGhpcy5mYWlsQ2hhbmNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVtcERpc3RhbmNlID0gdGhpcy5SYW5kb21JbnQoMzAwLDM4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbVBlcmZlY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtID09IDEgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnBsYXRmb3JtPTE7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIubm9kZS54ICsganVtcERpc3RhbmNlICogZGlyLCB0aGlzLnBsYXllci5ub2RlLnkgKyBqdW1wRGlzdGFuY2UgKiB0aGlzLmFycmF5UmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdFBvcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJCbG9jayA9IHRoaXMubmV4dEJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5wbGF5U2NvcmVBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU+dGhpcy5zaW5nbGVNYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlTWF4ID0gdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3QrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2suc3RvcEFsbEFjdGlvbih0aGlzLnBsYXllci5wbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWwudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLmlzRW5jcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPXRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFdvcmxkUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheUxvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICBjYy5yb3RhdGVCeSgwLjIsLTkwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuaXNFbmNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=