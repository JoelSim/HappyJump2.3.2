
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyxpQ0FBZ0M7QUFDaEMsZ0NBQStCO0FBQy9CLGlFQUFnRTtBQUNoRSxpRkFBZ0Y7QUFDaEYsNENBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBbWlCQztRQWppQlUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZ0JBQVUsR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVcsaUJBQWlCLENBQUM7UUFFdkMsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVkLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUV0QyxxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFFdkMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRXZDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGlCQUFXLEdB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QUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBbWlCakI7SUFBRCxZQUFDO0NBbmlCRCxBQW1pQkMsQ0FuaUIwQixFQUFFLENBQUMsU0FBUyxHQW1pQnRDO0FBbmlCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEaWVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVyRGllRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVySnVtcFN1Y2Nlc3NFdmVudFwiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwdWJsaWMgYXV0b0p1bXA6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcml2YXRlIGZhaWxDaGFuY2U6IE51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllciA9IG51bGw7XHJcbiAgICBwdWJsaWMgcGxheWVyRGllID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHB1YmxpYyBsZWZ0T3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgcHVibGljIHJpZ2h0T3JpZ2luOiBjYy5WZWMyID0gY2MudjIoKTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJsb2NrTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgcHJvcExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGxvYWRpbmdMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBibG9ja0lucHV0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgaW5zdWZmaWNpZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBhcnJheVJhdGlvOiBudW1iZXIgPSAwLjU1NjA0NzE5NzY0MDExODtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHVibGljIGNhbkp1bXAgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBncmVlbmJsb2NrTGlzdDogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBvcmFuZ2VibG9ja0xpc3Q6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByaXZhdGUgcHVycGxlYmxvY2tMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncmFzc1Byb3BMaXN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZGVzZXJ0UHJvcExpc3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBwdXJwbGVQcm9wTGlzdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgYmFsYW5jZVRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgd2luQW1vdW50VGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHVibGljIHdpbkFtb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgcGVyZmVjdCA9MDtcclxuICAgIHB1YmxpYyBzaW5nbGVNYXggPTA7XHJcbiAgICBwcml2YXRlIGN1cnJCbG9jazogQmxvY2sgPSBudWxsO1xyXG4gICAgcHVibGljIHRvdGFsQmV0PTA7XHJcbiAgICBwcml2YXRlIG5leHRCbG9jazogQmxvY2sgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VmFsdWUgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcmVhZHlKdW1wQXVkaW8gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpb0lkID0gLTE7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRpbmdTY29yZSA9ZmFsc2U7XHJcbiAgICB0aW1lcmZvckxvYWRpbmc9MDtcclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg56ys5LiA5Liq5pa55Z2XXHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgwKTtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVlbmJsb2NrTGlzdFs1XSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0xheWVyLmFkZENoaWxkKGJsb2NrTm9kZSk7XHJcbiAgICAgICAgbGV0IGJsb2NrID0gYmxvY2tOb2RlLmdldENvbXBvbmVudChCbG9jayk7XHJcbiAgICAgICAgYmxvY2suY2xvc2VQZXJmZWN0U2NvcmUoKTtcclxuICAgICAgICBibG9ja05vZGUucG9zaXRpb24gPSB0aGlzLmJsb2NrTGF5ZXIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubGVmdE9yaWdpbik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gYmxvY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBibG9jaztcclxuICAgICAgICB0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmN1cnJCbG9jay5nZXRDZW50ZXJQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRCbG9jaygpO1xyXG5cclxuICAgICAgICAvL3RoaXMuYWRkUHJvcCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlVG91Y2goKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblJlYWR5SnVtcCwgdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25KdW1wLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZVRvdWNoKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvblJlYWR5SnVtcCgpIHtcclxuICAgICAgICBpZih0aGlzLmNoZWNrUXVhbGlmeSgpJiYhdGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJlYWR5SnVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTY29yZSh2YWx1ZSl7XHJcbiAgICAvLyAgICAvLyBnbG9iYWwuc2V0QmFsYW5jZShnbG9iYWwuZ2V0QmFsYW5jZSgpICsgdmFsdWUpO1xyXG4gICAgLy8gICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsLmdldEJhbGFuY2UoKSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICB0aGlzLndpbkFtb3VudFRleHQuc3RyaW5nID0oTWF0aC5yb3VuZCgodGhpcy53aW5BbW91bnQgKyB2YWx1ZSkqMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgICB0aGlzLndpbkFtb3VudCArPXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQmFsYW5jZSgpe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UqMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZFRvdGFsQmV0KHZhbHVlKXtcclxuICAgICAgICB0aGlzLnRvdGFsQmV0Kz12YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjaGVja1F1YWxpZnkoKXtcclxuICAgICAgICBpZihnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZT49Y2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgb25KdW1wKCkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBqdW1wRGlzdGFuY2UgPSB0aGlzLnBsYXllci5qdW1wRGlzdGFuY2U7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLnBsYXllci5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBuZXcgY2MuVmVjMih0aGlzLnBsYXllci5ub2RlLnggKyBqdW1wRGlzdGFuY2UgKiBkaXIsIHRoaXMucGxheWVyLm5vZGUueSArIGp1bXBEaXN0YW5jZSAqIHRoaXMuYXJyYXlSYXRpbyk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0UG9zID0gdGhpcy5uZXh0QmxvY2suZ2V0QW5jaG9yTG9jYXRpb24odGFyZ2V0V29ybGRQb3MsIGRpcixnbG9iYWwucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvdGFsQmV0KGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1hdFBvcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKGZvcm1hdFBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckJsb2NrID0gdGhpcy5uZXh0QmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5wbGF5U2NvcmVBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTY29yZSh0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZT50aGlzLnNpbmdsZU1heCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlTWF4ID0gdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwucGxhdGZvcm09PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3QrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcInNjb3JlXCIsdGhpcy5wbGF5ZXIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIitNYXRoLnJvdW5kKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSoxMCkvMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcInNjb3JlXCIsdGhpcy5wbGF5ZXIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2suc3RvcEFsbEFjdGlvbih0aGlzLnBsYXllci5wbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IFBsYXllckp1bXBTdWNjZXNzRXZlbnQodGhpcy5jdXJyQmxvY2suc2NvcmUpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrUXVhbGlmeSgpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbC5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJDaGFuZ2UgYmV0OiBcIiArIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSs9IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8odGFyZ2V0V29ybGRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMb3NlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gIGNjLnJvdGF0ZUJ5KDAuMiwtOTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZz0wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0lucHV0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQcm9wKHZhbHVlLHBvc2l0aW9uKXtcclxuXHJcbiAgICAgICAgdmFyIHByb3BOb2RlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYodmFsdWU+PTQgJiZ2YWx1ZTw9Nyl7XHJcbiAgICAgICAgICAgIHByb3BOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZXNlcnRQcm9wTGlzdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHZhbHVlPj04JiZ2YWx1ZTw9MTIpe1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHVycGxlUHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3Jhc3NQcm9wTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcExheWVyLmFkZENoaWxkKHByb3BOb2RlKTtcclxuICAgICAgICBwcm9wTm9kZS55ID0gcG9zaXRpb247XHJcbiAgICAgICAgLy8gbGV0IHNjYWxlID0gYmxvY2subWluU2NhbGUgKyBNYXRoLnJhbmRvbSgpICogKGJsb2NrLm1heFNjYWxlIC0gYmxvY2subWluU2NhbGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBSYW5kb21JbnQobWluLCBtYXgpe1xyXG4gICAgICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtbWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQmxvY2soKSB7XHJcbiAgICAgICAgbGV0IG4gO1xyXG4gICAgICAgIGxldCBibG9ja05vZGUgO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFZhbHVlPj00ICYmdGhpcy5jdXJyZW50VmFsdWU8PTcpe1xyXG5cclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMub3JhbmdlYmxvY2tMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3JhbmdlYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmN1cnJlbnRWYWx1ZT49OCYmdGhpcy5jdXJyZW50VmFsdWU8PTEyKXtcclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucHVycGxlYmxvY2tMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgYmxvY2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wdXJwbGVibG9ja0xpc3Rbbl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ncmVlbmJsb2NrTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JlZW5ibG9ja0xpc3Rbbl0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuYmxvY2tMYXllci5hZGRDaGlsZChibG9ja05vZGUpO1xyXG4gICAgICAgIGxldCBibG9jayA9IGJsb2NrTm9kZS5nZXRDb21wb25lbnQoQmxvY2spO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuICAgICAgICAvL2xldCBzY2FsZSA9IDE7XHJcbiAgICAgICAvLyBsZXQgZGlzdGFuY2UgPSBibG9jay5taW5EaXN0YW5jZSArIE1hdGgucmFuZG9tKCkgKiAoYmxvY2subWF4RGlzdGFuY2UgLSBibG9jay5taW5EaXN0YW5jZSk7XHJcbiAgICAgICAgYmxvY2tOb2RlLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgYmxvY2tOb2RlLnggPSB0aGlzLmN1cnJCbG9jay5ub2RlLnggKyA1MDA7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS55ID0gdGhpcy5jdXJyQmxvY2subm9kZS55ICsgNTAwICogdGhpcy5hcnJheVJhdGlvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS54ID0gdGhpcy5jdXJyQmxvY2subm9kZS54IC0gNTAwO1xyXG4gICAgICAgICAgICBibG9ja05vZGUueSA9IHRoaXMuY3VyckJsb2NrLm5vZGUueSArIDUwMCAqIHRoaXMuYXJyYXlSYXRpbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICB0aGlzLm5leHRCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIHJldHVybiBibG9jaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUJsb2NrKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tPdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uLnN1Yih0aGlzLmN1cnJCbG9jay5ub2RlLnBvc2l0aW9uKS5tYWcoKT4gdGhpcy5jdXJyQmxvY2subm9kZS53aWR0aCAvIDIgKiB0aGlzLmN1cnJCbG9jay5ub2RlLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTdGFnZShjYjpGdW5jdGlvbixjYlRhcmdldD86YW55KSB7XHJcbiAgICAgICAgbGV0IG1vdmVWZWN0b3I7XHJcbiAgICAgICAgbGV0IHBsYXllcldvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgcGxheWVyV29ybGRQb3Muc3ViKHRoaXMubGVmdE9yaWdpbik7XHJcbiAgICAgICAgICAgIG1vdmVWZWN0b3IgPSBwbGF5ZXJXb3JsZFBvcy5zdWIodGhpcy5sZWZ0T3JpZ2luKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVWZWN0b3IgPSBwbGF5ZXJXb3JsZFBvcy5zdWIodGhpcy5yaWdodE9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGNiLCBjYlRhcmdldCk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjcsdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihtb3ZlVmVjdG9yKSksZmluaXNoZWQpO1xyXG4gICAgICAgIHRoaXMuYmcucnVuQWN0aW9uKGNjLm1vdmVUbygwLjcsY2MudjIoMCx0aGlzLm5vZGUucG9zaXRpb24uc3ViKG1vdmVWZWN0b3IpLnkpKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbW9HZW5lcmF0ZVNjb3JlKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJQZXJmZWN0O1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyQ29uc287XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtO1xyXG4gICAgICAgIHZhciBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVTY29yZTtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgbXVsdGlwbGllclxyXG4gICAgICAgIHBsYXRmb3JtID0gICAoTWF0aC5yYW5kb20oKSAqICgxIC0gMCkgKyAwKTtcclxuICAgICAgICBpZihwbGF0Zm9ybT49MC40KXtcclxuICAgICAgICAgICAgcGxhdGZvcm09MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVsdGlwbGllclBlcmZlY3QgPSAoTWF0aC5yYW5kb20oKSAqICgxMCAtIDIpICsgMik7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gMC4yO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9IChjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyAqIE1hdGguZmxvb3IobXVsdGlwbGllclBlcmZlY3QpKTtcclxuICAgICAgICBjb25zb2xlU2NvcmUgPSBNYXRoLnJvdW5kKChjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyAgKiBtdWx0aXBsaWVyQ29uc28pICogMTApIC8gMTA7XHJcbiAgICAgICAgZ2xvYmFsLmNvbnNvU2NvcmUgPSBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsLnBlcmZlY3RTY29yZSA9IHBlcmZlY3RTY29yZTtcclxuICAgICAgICBnbG9iYWwucGxhdGZvcm0gPSBwbGF0Zm9ybTtcclxuICAgICAgICB0aGlzLmJhbGFuY2VUZXh0LnN0cmluZyA9IChNYXRoLnJvdW5kKGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKjEwMCkvMTAwKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZih0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5vbkF1dG9KdW1wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRpbWVyZm9yTG9hZGluZz49Mil7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHk9MjU1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5nZW5lcmF0aW5nQmFsYW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJmb3JMb2FkaW5nKz1kdDtcclxuICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiZXRBbW91bnQnOiBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJIYXBweSBKdW1wIGJldCB3aXRoIHRoZXNlIGluZGV4IDFzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVlc3RUeXBlXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWwuY3VycmVudEJldFNsb3QsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5wbGF5ZXJEaWU9dGhpcy5wbGF5ZXJEaWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMucGxheWVyRGllKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnY2hhbmdlQmV0JywgYnRvYShKU09OLnN0cmluZ2lmeShlbWl0X29iaikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRy5kaXNwYXRjaEV2ZW50KG5ldyBQbGF5ZXJEaWVFdmVudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5wbGF5ZXJEaWUgPSB0aGlzLnBsYXllckRpZTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJEaWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSAtPSBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IFBsYXllckRpZUV2ZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2VuZXJhdGluZ1Njb3JlKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmcrPWR0O1xyXG4gICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICBpZihnbG9iYWwuZmluaXNoR2V0RGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZmluaXNoR2V0RGF0YSA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlYmV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVtb0dlbmVyYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZWJldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nU2NvcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdENoYW5nZWJldCgpe1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YWdlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQmxvY2soKTtcclxuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChcIkNoYW5nZS1CZXRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ibG9ja0lucHV0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5KdW1wPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFsYW5jZSgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkF1dG9KdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkmJnRoaXMuYXV0b0p1bXApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmNhbkp1bXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlbkNoYXJnZVwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1cIix0aGlzLnBsYXllci5ub2RlKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdXRvSnVtcE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXV0b2p1bXBNYW5hZ2VyXCIpLnVwZGF0ZUp1bXBUaW1lcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUp1bXBBdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJlYWR5SnVtcEF1ZGlvLGZhbHNlLGdsb2JhbC5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkp1bXA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZWFkeUp1bXBBdWRpb0lkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdGFsQmV0KGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFpbCA9IHRoaXMuUmFuZG9tSW50KDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGp1bXBEaXN0YW5jZSA9IDQ2MCArIE1hdGgucmFuZG9tKCkgKiAoNTIwIC00NjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZhaWw8PXRoaXMuZmFpbENoYW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1bXBEaXN0YW5jZSA9IHRoaXMuUmFuZG9tSW50KDMwMCwzODApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21QZXJmZWN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybSA9PSAxICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5wbGF0Zm9ybT0xO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLnBsYXllci5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLm5vZGUueCArIGp1bXBEaXN0YW5jZSAqIGRpciwgdGhpcy5wbGF5ZXIubm9kZS55ICsganVtcERpc3RhbmNlICogdGhpcy5hcnJheVJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnBsYXllci5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0UG9zID0gdGhpcy5uZXh0QmxvY2suZ2V0QW5jaG9yTG9jYXRpb24odGFyZ2V0V29ybGRQb3MsIGRpcixnbG9iYWwucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXRQb3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKGZvcm1hdFBvcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2sucGxheVNjb3JlQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTY29yZSh0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlPnRoaXMuc2luZ2xlTWF4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZU1heCA9IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmZWN0Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcInNjb3JlXCIsdGhpcy5wbGF5ZXIubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIitNYXRoLnJvdW5kKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSoxMCkvMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnN0b3BBbGxBY3Rpb24odGhpcy5wbGF5ZXIucGxhdGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IFBsYXllckp1bXBTdWNjZXNzRXZlbnQodGhpcy5jdXJyQmxvY2suc2NvcmUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbC5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAna2V5JzogXCJDaGFuZ2UgYmV0OiBcIiArIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyX2lkJzogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5pc0VuY3J5cHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPXRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFdvcmxkUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheUxvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICBjYy5yb3RhdGVCeSgwLjIsLTkwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuaXNFbmNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGJ0b2EoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSs9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHk9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9vdmVyUGFuZWxcIikuZ2V0Q29tcG9uZW50KFwiT3ZlclBhbmVsXCIpLmlzUXVpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5KdW1wPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwxKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==