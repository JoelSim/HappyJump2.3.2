"use strict";
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