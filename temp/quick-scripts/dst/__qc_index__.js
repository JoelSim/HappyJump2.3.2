
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Bet Selection Code/Betting');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/res/FollowCamera');
require('./assets/src/AudioManager');
require('./assets/src/AutojumpManager');
require('./assets/src/BackgroundControl');
require('./assets/src/BetSelection');
require('./assets/src/Collision');
require('./assets/src/G');
require('./assets/src/GlobalData');
require('./assets/src/InGameBetting');
require('./assets/src/Network/API');
require('./assets/src/Network/API_NEW ');
require('./assets/src/Network/Constant');
require('./assets/src/Network/Encrypt');
require('./assets/src/Network/Socket');
require('./assets/src/Network/ecrypt');
require('./assets/src/Network/ecrypt_New');
require('./assets/src/NewBetSelection');
require('./assets/src/PortraitPrompt');
require('./assets/src/PropItem');
require('./assets/src/ScoreMoving');
require('./assets/src/SettingManager');
require('./assets/src/StartScene');
require('./assets/src/TutorialManager');
require('./assets/src/backgroundImage');
require('./assets/src/components/game/GameScene');
require('./assets/src/components/game/OverPanel');
require('./assets/src/components/game/stage/Block');
require('./assets/src/components/game/stage/Player');
require('./assets/src/components/game/stage/Stage');
require('./assets/src/components/menu/MenuScene');
require('./assets/src/events/PlayerDieEvent');
require('./assets/src/events/PlayerJumpSuccessEvent');
require('./assets/src/utils/Audio');

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