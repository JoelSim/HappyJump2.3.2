
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
require('./assets/migration/use_reversed_rotateBy');
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
require('./assets/src/Network/Constant');
require('./assets/src/Network/Encrypt');
require('./assets/src/Network/Socket');
require('./assets/src/Network/ecrypt');
require('./assets/src/Network/ecrypt_New');
require('./assets/src/Network/mobile-detect');
require('./assets/src/NewBetSelection');
require('./assets/src/PortraitPrompt');
require('./assets/src/PropItem');
require('./assets/src/ScoreMoving');
require('./assets/src/SettingManager');
require('./assets/src/StartScene');
require('./assets/src/TutorialManager');
require('./assets/src/UpdateTicketIdSystem');
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bet Selection Code/Betting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1a0aOH759PU67ZKwNCbYqG', 'Betting');
// Bet Selection Code/Betting.js

// // Learn cc.Class:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// // Learn Attribute:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// import * as global from "GlobalVar";
// cc.Class({
//     extends: cc.Component,
//     properties: {
// 		bet_options:{
// 			default:[],
// 			type:[cc.Node]
// 		},
//     },
// 	setOptionsAmount(index, amount){
// 		this.label = this.bet_options[index].getChildByName("Label").getComponent(cc.Label);
// 		this.label.string = amount;
// 	},
// 	selectBetOption(event, value){
//         this.playEffect(this.button_click, global.getEffectVolume());
// 		this.selectedBetOption = Number(value);
// 		cc.log("Selected bet option:" + this.selectedBetOption);
// 		for(let i = 0; i < this.bet_options.length; i++){
// 			if(i == value){
// 				this.bet_options[i].getChildByName("SelectedSprite").active = true;
// 			}else{
// 				this.bet_options[i].getChildByName("SelectedSprite").active = false;
// 			}
// 		}
//     },
// 	playEffect(audio, volume){
// 		this.effect_id2 = cc.audioEngine.play(audio, false);
// 		if(global.getSound() == 0 ){
// 			cc.audioEngine.setVolume(this.effect_id2, 0.0);
// 		}else if(volume != null){
// 			cc.audioEngine.setVolume(this.effect_id2, volume);
// 		}
// 		return this.effect_id2;
// 	},
//     // LIFE-CYCLE CALLBACKS:
//     // onLoad () {},
//     start () {
// 		this.selectedBetOption = -1;
//     },
//     // update (dt) {},
// });
"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmV0IFNlbGVjdGlvbiBDb2RlXFxCZXR0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAvLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIC8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIC8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAvLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAvLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAvLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyBpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIkdsb2JhbFZhclwiO1xyXG5cclxuLy8gY2MuQ2xhc3Moe1xyXG4vLyAgICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuLy8gICAgIHByb3BlcnRpZXM6IHtcclxuLy8gXHRcdGJldF9vcHRpb25zOntcclxuLy8gXHRcdFx0ZGVmYXVsdDpbXSxcclxuLy8gXHRcdFx0dHlwZTpbY2MuTm9kZV1cclxuLy8gXHRcdH0sXHJcbi8vICAgICB9LFxyXG5cclxuLy8gXHRzZXRPcHRpb25zQW1vdW50KGluZGV4LCBhbW91bnQpe1xyXG4vLyBcdFx0dGhpcy5sYWJlbCA9IHRoaXMuYmV0X29wdGlvbnNbaW5kZXhdLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuLy8gXHRcdHRoaXMubGFiZWwuc3RyaW5nID0gYW1vdW50O1xyXG4vLyBcdH0sXHJcblxyXG4vLyBcdHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpe1xyXG4vLyAgICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmJ1dHRvbl9jbGljaywgZ2xvYmFsLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuXHJcbi8vIFx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gTnVtYmVyKHZhbHVlKTtcclxuLy8gXHRcdGNjLmxvZyhcIlNlbGVjdGVkIGJldCBvcHRpb246XCIgKyB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKTtcclxuXHJcbi8vIFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5iZXRfb3B0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbi8vIFx0XHRcdGlmKGkgPT0gdmFsdWUpe1xyXG4vLyBcdFx0XHRcdHRoaXMuYmV0X29wdGlvbnNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJTZWxlY3RlZFNwcml0ZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4vLyBcdFx0XHR9ZWxzZXtcclxuLy8gXHRcdFx0XHR0aGlzLmJldF9vcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKFwiU2VsZWN0ZWRTcHJpdGVcIikuYWN0aXZlID0gZmFsc2U7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdH1cclxuLy8gICAgIH0sXHJcbiAgICBcdFxyXG4vLyBcdHBsYXlFZmZlY3QoYXVkaW8sIHZvbHVtZSl7XHJcbi8vIFx0XHR0aGlzLmVmZmVjdF9pZDIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSk7XHJcbi8vIFx0XHRpZihnbG9iYWwuZ2V0U291bmQoKSA9PSAwICl7XHJcbi8vIFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmVmZmVjdF9pZDIsIDAuMCk7XHJcbi8vIFx0XHR9ZWxzZSBpZih2b2x1bWUgIT0gbnVsbCl7XHJcbi8vIFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmVmZmVjdF9pZDIsIHZvbHVtZSk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gdGhpcy5lZmZlY3RfaWQyO1xyXG4vLyBcdH0sXHJcblxyXG4vLyAgICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4vLyAgICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuLy8gICAgIHN0YXJ0ICgpIHtcclxuLy8gXHRcdHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSAtMTtcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAgLy8gdXBkYXRlIChkdCkge30sXHJcbi8vIH0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75f3TXT2JKx5cWPaco94wK', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwcm9qZWN0cyBwcmlvciB0byB2Mi4xLjAuXHJcbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXHJcbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXHJcbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuaWYgKGNjLlRvZ2dsZSkge1xyXG4gICAgLy8gV2hldGhlciB0aGUgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIGFyZSBmaXJlZCB3aGVuICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIGlzIGNhbGxlZCBpbiB0aGUgY29kZVxyXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/FollowCamera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c1fbO+IAFPY5uudgQzvM4E', 'FollowCamera');
// res/FollowCamera.js

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
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    camera: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    this.node.y = this.camera.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzXFxGb2xsb3dDYW1lcmEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW1lcmEiLCJ0eXBlIiwiTm9kZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJub2RlIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFRLElBREw7QUFFSEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkw7QUFqQkMsR0FIUDtBQTJCTDtBQUVBO0FBRUFDLEVBQUFBLEtBL0JLLG1CQStCSSxDQUVSLENBakNJO0FBbUNMQyxFQUFBQSxNQW5DSyxrQkFtQ0dDLEVBbkNILEVBbUNPO0FBRVIsU0FBS0MsSUFBTCxDQUFVQyxDQUFWLEdBQWMsS0FBS1AsTUFBTCxDQUFZTyxDQUExQjtBQUVIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgY2FtZXJhOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmNhbWVyYS55O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7a49167d1ATa7jkClFO/oq', 'Constant');
// src/Network/Constant.js

"use strict";

exports.__esModule = true;
exports.getForgetPassURL = getForgetPassURL;
exports.getSignUpURL = getSignUpURL;
exports.getLobbyAPI = getLobbyAPI;
exports.getRedeemHistoryURL = getRedeemHistoryURL;
exports.getGameHistoryURL = getGameHistoryURL;
exports.getRedeemURL = getRedeemURL;
exports.getPrizeListURL = getPrizeListURL;
exports.getLoginURL = getLoginURL;
exports.setGameCode = setGameCode;
exports.setSocketURL = setSocketURL;
exports.setApiURL = setApiURL;
exports.getGameVersion = getGameVersion;
exports.getSocketURL = getSocketURL;
exports.getApiURL = getApiURL;
exports.getGameCode = getGameCode;
exports.prodSocketURL = exports.socketURL = void 0;
// var socketURL = "192.168.100.6:8099";
// var socketURL = "slot-grabber.casinoville.net"
var socketURL = "https://st-socket-dsocial.slot28.com";
exports.socketURL = socketURL;
var prodSocketURL = "https://socket-dsocial.slot28.com"; // export var gameSocketURL = "socket-dsocial.velachip.com/game";
// export var gameSocketURL = "https://st-socket-dsocial.slot28.com/game";
// var socketURL = "localhost:9000";
// export var gameSocketURL = "localhost:7777/game";
// var socketURL = "192.168.100.45:8098";
// var apiURL = "http://bo.fun1881.com/api/user/";

exports.prodSocketURL = prodSocketURL;
var apiURL = "http://bo-stage.velachip.com/api/mini-game/";
var loginURL = "http://bo-stage.velachip.com/api/user/login";
var prizeListURL = "http://bo-stage.velachip.com/api/berchinko/list";
var redeemPrizeURL = "http://bo-stage.velachip.com/api/user/redeem";
var gameHistroyURL = "http://bo-stage.velachip.com/api/berchinko/history";
var redeemHistroyURL = "http://bo-stage.velachip.com/api/berchinko/transaction";
var signUpURL = "http://bo-stage.velachip.com/api/user/register";
var lobbyAPI = "http://bo-stage.velachip.com/api/user/get-info";
var forgetPassURL = "http://bo-stage.velachip.com/api/user/forgot-password";
var gameCode = "76";
var game_version = "1.1.0";

function getForgetPassURL() {
  return forgetPassURL;
}

function getSignUpURL() {
  return signUpURL;
}

function getLobbyAPI() {
  return lobbyAPI;
}

function getRedeemHistoryURL() {
  return redeemHistroyURL;
}

function getGameHistoryURL() {
  return gameHistroyURL;
}

function getRedeemURL() {
  return redeemPrizeURL;
}

function getPrizeListURL() {
  return prizeListURL;
}

function getLoginURL() {
  return loginURL;
}

function setGameCode(value) {
  gameCode = value;
  return gameCode;
}

function setSocketURL(value) {
  exports.socketURL = socketURL = value;
  return socketURL;
}

function setApiURL(value) {
  apiURL = value;
  return apiURL;
}

function getGameVersion() {
  return game_version;
}

function getSocketURL() {
  return socketURL;
}

function getApiURL() {
  return apiURL;
}

function getGameCode() {
  return gameCode;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxDb25zdGFudC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRVUkwiLCJwcm9kU29ja2V0VVJMIiwiYXBpVVJMIiwibG9naW5VUkwiLCJwcml6ZUxpc3RVUkwiLCJyZWRlZW1Qcml6ZVVSTCIsImdhbWVIaXN0cm95VVJMIiwicmVkZWVtSGlzdHJveVVSTCIsInNpZ25VcFVSTCIsImxvYmJ5QVBJIiwiZm9yZ2V0UGFzc1VSTCIsImdhbWVDb2RlIiwiZ2FtZV92ZXJzaW9uIiwiZ2V0Rm9yZ2V0UGFzc1VSTCIsImdldFNpZ25VcFVSTCIsImdldExvYmJ5QVBJIiwiZ2V0UmVkZWVtSGlzdG9yeVVSTCIsImdldEdhbWVIaXN0b3J5VVJMIiwiZ2V0UmVkZWVtVVJMIiwiZ2V0UHJpemVMaXN0VVJMIiwiZ2V0TG9naW5VUkwiLCJzZXRHYW1lQ29kZSIsInZhbHVlIiwic2V0U29ja2V0VVJMIiwic2V0QXBpVVJMIiwiZ2V0R2FtZVZlcnNpb24iLCJnZXRTb2NrZXRVUkwiLCJnZXRBcGlVUkwiLCJnZXRHYW1lQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFJQSxTQUFTLEdBQUcsc0NBQWhCOztBQUNBLElBQUlDLGFBQWEsR0FBRyxtQ0FBcEIsRUFDUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBRyw2Q0FBYjtBQUNBLElBQUlDLFFBQVEsR0FBRyw2Q0FBZjtBQUNBLElBQUlDLFlBQVksR0FBRyxpREFBbkI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsOENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLG9EQUFyQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLHdEQUF2QjtBQUNBLElBQUlDLFNBQVMsR0FBRyxnREFBaEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsZ0RBQWY7QUFDQSxJQUFJQyxhQUFhLEdBQUcsdURBQXBCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFFQSxJQUFJQyxZQUFZLEdBQUcsT0FBbkI7O0FBRU8sU0FBU0MsZ0JBQVQsR0FBMkI7QUFDOUIsU0FBT0gsYUFBUDtBQUNIOztBQUVNLFNBQVNJLFlBQVQsR0FBdUI7QUFDMUIsU0FBT04sU0FBUDtBQUNIOztBQUVNLFNBQVNPLFdBQVQsR0FBc0I7QUFDekIsU0FBT04sUUFBUDtBQUNIOztBQUVNLFNBQVNPLG1CQUFULEdBQThCO0FBQ2pDLFNBQU9ULGdCQUFQO0FBQ0g7O0FBRU0sU0FBU1UsaUJBQVQsR0FBNEI7QUFDL0IsU0FBT1gsY0FBUDtBQUNIOztBQUVNLFNBQVNZLFlBQVQsR0FBdUI7QUFDMUIsU0FBT2IsY0FBUDtBQUNIOztBQUVNLFNBQVNjLGVBQVQsR0FBMEI7QUFDN0IsU0FBT2YsWUFBUDtBQUNIOztBQUVNLFNBQVNnQixXQUFULEdBQXNCO0FBQ3pCLFNBQU9qQixRQUFQO0FBQ0g7O0FBRU0sU0FBU2tCLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQzlCWCxFQUFBQSxRQUFRLEdBQUdXLEtBQVg7QUFDQSxTQUFRWCxRQUFSO0FBQ0g7O0FBRU0sU0FBU1ksWUFBVCxDQUFzQkQsS0FBdEIsRUFBNEI7QUFDL0Isc0JBQUF0QixTQUFTLEdBQUdzQixLQUFaO0FBQ0EsU0FBUXRCLFNBQVI7QUFDSDs7QUFFTSxTQUFTd0IsU0FBVCxDQUFtQkYsS0FBbkIsRUFBeUI7QUFDNUJwQixFQUFBQSxNQUFNLEdBQUdvQixLQUFUO0FBQ0EsU0FBUXBCLE1BQVI7QUFDSDs7QUFFTSxTQUFTdUIsY0FBVCxHQUF5QjtBQUM1QixTQUFPYixZQUFQO0FBQ0g7O0FBRU0sU0FBU2MsWUFBVCxHQUF1QjtBQUMxQixTQUFPMUIsU0FBUDtBQUNIOztBQUVNLFNBQVMyQixTQUFULEdBQW9CO0FBQ3ZCLFNBQU96QixNQUFQO0FBQ0g7O0FBRU0sU0FBUzBCLFdBQVQsR0FBc0I7QUFDekIsU0FBT2pCLFFBQVA7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIHNvY2tldFVSTCA9IFwiMTkyLjE2OC4xMDAuNjo4MDk5XCI7XHJcbi8vIHZhciBzb2NrZXRVUkwgPSBcInNsb3QtZ3JhYmJlci5jYXNpbm92aWxsZS5uZXRcIlxyXG5leHBvcnQgdmFyIHNvY2tldFVSTCA9IFwiaHR0cHM6Ly9zdC1zb2NrZXQtZHNvY2lhbC5zbG90MjguY29tXCI7XHJcbmV4cG9ydCB2YXIgcHJvZFNvY2tldFVSTCA9IFwiaHR0cHM6Ly9zb2NrZXQtZHNvY2lhbC5zbG90MjguY29tXCI7XHJcbi8vIGV4cG9ydCB2YXIgZ2FtZVNvY2tldFVSTCA9IFwic29ja2V0LWRzb2NpYWwudmVsYWNoaXAuY29tL2dhbWVcIjtcclxuLy8gZXhwb3J0IHZhciBnYW1lU29ja2V0VVJMID0gXCJodHRwczovL3N0LXNvY2tldC1kc29jaWFsLnNsb3QyOC5jb20vZ2FtZVwiO1xyXG5cclxuLy8gdmFyIHNvY2tldFVSTCA9IFwibG9jYWxob3N0OjkwMDBcIjtcclxuLy8gZXhwb3J0IHZhciBnYW1lU29ja2V0VVJMID0gXCJsb2NhbGhvc3Q6Nzc3Ny9nYW1lXCI7XHJcbi8vIHZhciBzb2NrZXRVUkwgPSBcIjE5Mi4xNjguMTAwLjQ1OjgwOThcIjtcclxuLy8gdmFyIGFwaVVSTCA9IFwiaHR0cDovL2JvLmZ1bjE4ODEuY29tL2FwaS91c2VyL1wiO1xyXG52YXIgYXBpVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS9taW5pLWdhbWUvXCI7XHJcbnZhciBsb2dpblVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9sb2dpblwiO1xyXG52YXIgcHJpemVMaXN0VVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS9iZXJjaGlua28vbGlzdFwiO1xyXG52YXIgcmVkZWVtUHJpemVVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL3VzZXIvcmVkZWVtXCI7XHJcbnZhciBnYW1lSGlzdHJveVVSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvYmVyY2hpbmtvL2hpc3RvcnlcIjtcclxudmFyIHJlZGVlbUhpc3Ryb3lVUkwgPSBcImh0dHA6Ly9iby1zdGFnZS52ZWxhY2hpcC5jb20vYXBpL2JlcmNoaW5rby90cmFuc2FjdGlvblwiO1xyXG52YXIgc2lnblVwVVJMID0gXCJodHRwOi8vYm8tc3RhZ2UudmVsYWNoaXAuY29tL2FwaS91c2VyL3JlZ2lzdGVyXCI7XHJcbnZhciBsb2JieUFQSSA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9nZXQtaW5mb1wiO1xyXG52YXIgZm9yZ2V0UGFzc1VSTCA9IFwiaHR0cDovL2JvLXN0YWdlLnZlbGFjaGlwLmNvbS9hcGkvdXNlci9mb3Jnb3QtcGFzc3dvcmRcIjtcclxudmFyIGdhbWVDb2RlID0gXCI3NlwiO1xyXG5cclxudmFyIGdhbWVfdmVyc2lvbiA9IFwiMS4xLjBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JnZXRQYXNzVVJMKCl7XHJcbiAgICByZXR1cm4gZm9yZ2V0UGFzc1VSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZ25VcFVSTCgpe1xyXG4gICAgcmV0dXJuIHNpZ25VcFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvYmJ5QVBJKCl7XHJcbiAgICByZXR1cm4gbG9iYnlBUEk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRlZW1IaXN0b3J5VVJMKCl7XHJcbiAgICByZXR1cm4gcmVkZWVtSGlzdHJveVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVIaXN0b3J5VVJMKCl7XHJcbiAgICByZXR1cm4gZ2FtZUhpc3Ryb3lVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRlZW1VUkwoKXtcclxuICAgIHJldHVybiByZWRlZW1Qcml6ZVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXplTGlzdFVSTCgpe1xyXG4gICAgcmV0dXJuIHByaXplTGlzdFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVVJMKCl7XHJcbiAgICByZXR1cm4gbG9naW5VUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lQ29kZSh2YWx1ZSl7XHJcbiAgICBnYW1lQ29kZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChnYW1lQ29kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTb2NrZXRVUkwodmFsdWUpe1xyXG4gICAgc29ja2V0VVJMID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHNvY2tldFVSTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcGlVUkwodmFsdWUpe1xyXG4gICAgYXBpVVJMID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGFwaVVSTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lVmVyc2lvbigpe1xyXG4gICAgcmV0dXJuIGdhbWVfdmVyc2lvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvY2tldFVSTCgpe1xyXG4gICAgcmV0dXJuIHNvY2tldFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVVSTCgpe1xyXG4gICAgcmV0dXJuIGFwaVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVDb2RlKCl7XHJcbiAgICByZXR1cm4gZ2FtZUNvZGU7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/PlayerJumpSuccessEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c94d8XNGTlNI5QI/kwQbDIQ', 'PlayerJumpSuccessEvent');
// src/events/PlayerJumpSuccessEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerJumpSuccessEvent = void 0;
var PlayerJumpSuccessEvent = /** @class */ (function (_super) {
    __extends(PlayerJumpSuccessEvent, _super);
    function PlayerJumpSuccessEvent(score) {
        var _this = _super.call(this, PlayerJumpSuccessEvent.NAME, true) || this;
        _this.score = score;
        return _this;
    }
    PlayerJumpSuccessEvent.NAME = "PlayerJumpSuccess";
    return PlayerJumpSuccessEvent;
}(cc.Event.EventCustom));
exports.PlayerJumpSuccessEvent = PlayerJumpSuccessEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFBsYXllckp1bXBTdWNjZXNzRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTRDLDBDQUFvQjtJQUc1RCxnQ0FBbUIsS0FBWTtRQUEvQixZQUNJLGtCQUFNLHNCQUFzQixDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FFMUM7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7SUFDdkIsQ0FBQztJQUxzQiwyQkFBSSxHQUFVLG1CQUFtQixDQUFDO0lBTTdELDZCQUFDO0NBUEQsQUFPQyxDQVAyQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FPL0Q7QUFQWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFNRTpzdHJpbmcgPSBcIlBsYXllckp1bXBTdWNjZXNzXCI7XHJcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlclxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3JlOm51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0cnVlKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/stage/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bd49uTlnBLrLGadJkec3pf', 'Player');
// src/components/game/stage/Player.ts

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
exports.Player = void 0;
var global = require("../../../GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpDistance = 0;
        _this.platformConsoRate = 0;
        _this.power = 0;
        _this.initSpeed = 0;
        _this.speed = 0;
        _this.isReadyJump = false;
        _this.direction = 1;
        _this.readyJumpAudio = null;
        _this.readyJumpAudioId = -1;
        _this.jumpAudio = null;
        _this.jumpAudioId = -1;
        _this.isCharging = false;
        _this.isJumping = false;
        _this.randomTimer = 2;
        _this.timer = 0;
        _this.jumpCount = 0;
        _this.stage = null;
        return _this;
    }
    Player.prototype.onLoad = function () {
        cc.find("title", this.node).active = false;
        this.stage = cc.find("Canvas/stage").getComponent("Stage");
    };
    Player.prototype.readyJump = function () {
        this.readyJumpAudioId = cc.audioEngine.play(this.readyJumpAudio, false, global.getEffectVolume());
        cc.find("title", this.node).active = true;
        this.node.getComponent(cc.Animation).play("ChickenCharge");
        cc.find("rotateAnchor/particlesystem", this.node).active = true;
        this.speed = this.initSpeed;
        this.isReadyJump = true;
        this.isCharging = true;
    };
    Player.prototype.jumpTo = function (worldPos, cb, cbTarget) {
        var _this = this;
        this.jumpCount += 1;
        this.isCharging = false;
        this.isJumping = true;
        cc.find("rotateAnchor/particlesystem", this.node).active = false;
        this.scheduleOnce(function () {
            _this.isJumping = false;
        }, 1);
        this.node.getComponent(cc.Animation).play("ChickenIdle");
        cc.audioEngine.stop(this.readyJumpAudioId);
        if (global.getEffectVolume() != 0) {
            this.jumpAudioId = cc.audioEngine.play(this.jumpAudio, false, 1);
        }
        cc.find("rotateAnchor/sprite", this.node).stopAllActions();
        cc.find("title", this.node).active = false;
        var targetPos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.node.color = cc.Color.WHITE;
        this.isReadyJump = false;
        var resetAction = cc.scaleTo(1, 1, 1);
        var jumpAction = cc.jumpTo(0.5, targetPos, 500, 1);
        var rotateAction = cc.rotateBy(0.5, this.direction * (-360));
        var finished = cc.callFunc(function () {
            if (_this.jumpCount >= 3) {
                if (_this.direction == 1) {
                    _this.direction = -1;
                }
                else {
                    _this.direction = 1;
                }
                _this.jumpCount = 0;
            }
            //this.direction = Math.random()>0.5?1:-1;
            _this.speed = 0;
            _this.jumpDistance = 0;
            cb();
        }, cbTarget);
        cc.find("rotateAnchor/sprite", this.node).runAction(resetAction);
        cc.find("rotateAnchor", this.node).runAction(rotateAction);
        this.node.runAction(cc.sequence(jumpAction, finished));
    };
    Player.prototype.RandomInt = function (min, max) {
        return parseInt((Math.random() * ((max + 1 - min) + min)).toString());
    };
    Player.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.randomTimer) {
            if (!this.isCharging && !this.isJumping && !this.stage.autoJump) {
                this.node.getComponent(cc.Animation).play("ChickenSingin");
            }
            this.randomTimer = this.RandomInt(2, 8);
            this.timer = 0;
        }
        if (this.isReadyJump) {
            this.speed += dt * this.power;
            this.jumpDistance += this.speed * dt;
        }
    };
    __decorate([
        property(cc.Float)
    ], Player.prototype, "jumpDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "platformConsoRate", void 0);
    __decorate([
        property(cc.Integer)
    ], Player.prototype, "power", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "initSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "readyJumpAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "jumpAudio", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0Q0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE2R0M7UUExR1Usa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUUsS0FBSyxDQUFDO1FBQ2xCLGVBQVMsR0FBRSxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQUUsSUFBSSxDQUFDOztJQWlGeEIsQ0FBQztJQWhGRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENB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Y2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFsIGZyb20gXCIuLi8uLi8uLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGp1bXBEaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHB1YmxpYyBwbGF0Zm9ybUNvbnNvUmF0ZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIHBvd2VyOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGluaXRTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGlzUmVhZHlKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIGp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGp1bXBBdWRpb0lkID0gLTE7XHJcbiAgICBwcml2YXRlIGlzQ2hhcmdpbmcgPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0p1bXBpbmcgPWZhbHNlO1xyXG4gICAgcHJpdmF0ZSByYW5kb21UaW1lciA9IDI7XHJcbiAgICBwcml2YXRlIHRpbWVyID0gMDtcclxuICAgIHByaXZhdGUganVtcENvdW50ID0gMDtcclxuICAgIHByaXZhdGUgc3RhZ2UgPW51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZHlKdW1wKCkge1xyXG4gICAgICAgIHRoaXMucmVhZHlKdW1wQXVkaW9JZCA9ICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucmVhZHlKdW1wQXVkaW8sZmFsc2UsZ2xvYmFsLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgICAgICBjYy5maW5kKFwidGl0bGVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuQ2hhcmdlXCIpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJyb3RhdGVBbmNob3IvcGFydGljbGVzeXN0ZW1cIix0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuaW5pdFNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBUbyh3b3JsZFBvczpjYy5WZWMyLGNiOkZ1bmN0aW9uLGNiVGFyZ2V0PzphbnkpIHtcclxuICAgICAgICB0aGlzLmp1bXBDb3VudCs9MTtcclxuICAgICAgICB0aGlzLmlzQ2hhcmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nPWZhbHNlO1xyXG4gICAgICAgIH0sMSlcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNoaWNrZW5JZGxlXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5yZWFkeUp1bXBBdWRpb0lkKTtcclxuICAgICAgICBpZihnbG9iYWwuZ2V0RWZmZWN0Vm9sdW1lKCkhPTApe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBBdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmp1bXBBdWRpbyxmYWxzZSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MuZmluZChcInRpdGxlXCIsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcylcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmlzUmVhZHlKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlc2V0QWN0aW9uID0gY2Muc2NhbGVUbygxLDEsMSk7XHJcbiAgICAgICAgbGV0IGp1bXBBY3Rpb24gPSBjYy5qdW1wVG8oMC41LHRhcmdldFBvcyw1MDAsMSk7XHJcbiAgICAgICAgIGxldCByb3RhdGVBY3Rpb24gPSBjYy5yb3RhdGVCeSgwLjUsdGhpcy5kaXJlY3Rpb24qKC0zNjApKTtcclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuanVtcENvdW50Pj0zKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0tMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvdW50PTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCk+MC41PzE6LTE7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSxjYlRhcmdldCk7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9zcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihyZXNldEFjdGlvbik7XHJcbiAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvclwiLHRoaXMubm9kZSkucnVuQWN0aW9uKHJvdGF0ZUFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShqdW1wQWN0aW9uLGZpbmlzaGVkKSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBSYW5kb21JbnQobWluLCBtYXgpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSAtIG1pbikgKyBtaW4pKS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PXRoaXMucmFuZG9tVGltZXIpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0NoYXJnaW5nJiYhdGhpcy5pc0p1bXBpbmcmJiF0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2hpY2tlblNpbmdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbVRpbWVyID0gdGhpcy5SYW5kb21JbnQoMiw4KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNSZWFkeUp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSBkdCAqIHRoaXMucG93ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/AutojumpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '366b7avfPRDxLX31qGk9Pzy', 'AutojumpManager');
// src/AutojumpManager.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    plusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    minusNotActiveSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    plusButton: {
      "default": null,
      type: cc.Sprite
    },
    minusButton: {
      "default": null,
      type: cc.Sprite
    },
    autoJumpSprite: {
      "default": [],
      type: [cc.Node]
    },
    autoJumpPanel: {
      "default": null,
      type: cc.Node
    },
    autoJumpNumber: 10,
    autoJumpLabel: {
      "default": null,
      type: cc.Label
    },
    lastSelectedJumpNumber: 10,
    jumpCount: {
      "default": null,
      type: cc.Label
    },
    jumpAmountLibrary: {
      "default": [],
      type: [cc.Integer]
    },
    currentValue: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.jumpAmountLibrary = [10, 50, 100, 500];
  },
  getSuccess: function getSuccess() {},
  openPanel: function openPanel() {
    if (this.autoJumpSprite[1].active) {
      this.stopJump();
    } else {
      this.autoJumpNumber = this.lastSelectedJumpNumber;
      this.autoJumpPanel.active = true;
    }
  },
  stopJump: function stopJump() {
    cc.find("Canvas/stage").getComponent("Stage").autoJump = false;
    this.autoJumpSprite[1].active = false;
    this.autoJumpSprite[0].active = true;
  },
  closePanel: function closePanel() {
    this.autoJumpPanel.active = false;
  },
  addValue: function addValue() {
    this.currentValue++;

    if (this.currentValue >= 3) {
      this.currentValue = 3;
      this.plusButton.spriteFrame = this.plusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  minusValue: function minusValue() {
    this.currentValue--;

    if (this.currentValue <= 0) {
      this.currentValue = 0;
      this.minusButton.spriteFrame = this.minusNotActiveSprite;
    } else {
      this.plusButton.spriteFrame = this.plusActiveSprite;
      this.minusButton.spriteFrame = this.minusActiveSprite;
    }

    this.autoJumpNumber = this.jumpAmountLibrary[this.currentValue];
    this.autoJumpLabel.string = this.autoJumpNumber;
  },
  confirmJump: function confirmJump() {
    this.lastSelectedJumpNumber = this.autoJumpNumber;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";
    cc.find("Canvas/stage").getComponent("Stage").autoJump = true;
    this.autoJumpSprite[1].active = true;
    this.autoJumpSprite[0].active = false;
    this.closePanel();
  },
  updateJumpTimes: function updateJumpTimes() {
    this.autoJumpNumber -= 1;
    this.jumpCount.string = "(" + this.autoJumpNumber + ")";

    if (this.autoJumpNumber <= 0) {
      this.stopJump();
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdXRvanVtcE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbHVzQWN0aXZlU3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwicGx1c05vdEFjdGl2ZVNwcml0ZSIsIm1pbnVzQWN0aXZlU3ByaXRlIiwibWludXNOb3RBY3RpdmVTcHJpdGUiLCJwbHVzQnV0dG9uIiwiU3ByaXRlIiwibWludXNCdXR0b24iLCJhdXRvSnVtcFNwcml0ZSIsIk5vZGUiLCJhdXRvSnVtcFBhbmVsIiwiYXV0b0p1bXBOdW1iZXIiLCJhdXRvSnVtcExhYmVsIiwiTGFiZWwiLCJsYXN0U2VsZWN0ZWRKdW1wTnVtYmVyIiwianVtcENvdW50IiwianVtcEFtb3VudExpYnJhcnkiLCJJbnRlZ2VyIiwiY3VycmVudFZhbHVlIiwic3RhcnQiLCJnZXRTdWNjZXNzIiwib3BlblBhbmVsIiwiYWN0aXZlIiwic3RvcEp1bXAiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiYXV0b0p1bXAiLCJjbG9zZVBhbmVsIiwiYWRkVmFsdWUiLCJzcHJpdGVGcmFtZSIsInN0cmluZyIsIm1pbnVzVmFsdWUiLCJjb25maXJtSnVtcCIsInVwZGF0ZUp1bXBUaW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLGdCQUFnQixFQUFDO0FBQ2IsaUJBQVEsSUFESztBQUViQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGSyxLQWpCVDtB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QyxJQUFoQztBQUNBLFNBQUtkLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUJjLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0EsU0FBS0ssVUFBTDtBQUdILEdBMUpJO0FBNEpMTSxFQUFBQSxlQTVKSyw2QkE0Slk7QUFDYixTQUFLdEIsY0FBTCxJQUFzQixDQUF0QjtBQUNBLFNBQUtJLFNBQUwsQ0FBZWUsTUFBZixHQUF3QixNQUFJLEtBQUtuQixjQUFULEdBQXdCLEdBQWhEOztBQUNBLFFBQUcsS0FBS0EsY0FBTCxJQUFxQixDQUF4QixFQUEwQjtBQUN2QixXQUFLWSxRQUFMO0FBRUY7QUFDSixHQW5LSSxDQW9LTDs7QUFwS0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBwbHVzQWN0aXZlU3ByaXRlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGx1c05vdEFjdGl2ZVNwcml0ZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtaW51c0FjdGl2ZVNwcml0ZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1pbnVzTm90QWN0aXZlU3ByaXRlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBwbHVzQnV0dG9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWludXNCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvSnVtcFNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGF1dG9KdW1wUGFuZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGF1dG9KdW1wTnVtYmVyOjEwLFxyXG5cclxuICAgICAgICBhdXRvSnVtcExhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFzdFNlbGVjdGVkSnVtcE51bWJlciA6MTAsXHJcbiAgICAgICAganVtcENvdW50OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGp1bXBBbW91bnRMaWJyYXJ5OntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3VycmVudFZhbHVlOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmp1bXBBbW91bnRMaWJyYXJ5ID0gWzEwLDUwLDEwMCw1MDBdO1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdldFN1Y2Nlc3MoKXtcclxuICAgICAgIFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb3BlblBhbmVsKCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0p1bXBOdW1iZXIgPSB0aGlzLmxhc3RTZWxlY3RlZEp1bXBOdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0p1bXBQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEp1bXAoKXtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3N0YWdlXCIpLmdldENvbXBvbmVudChcIlN0YWdlXCIpLmF1dG9KdW1wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmF1dG9KdW1wU3ByaXRlWzBdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuICAgIGNsb3NlUGFuZWwoKXtcclxuICAgICAgICB0aGlzLmF1dG9KdW1wUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFZhbHVlKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUrKztcclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VmFsdWU+PTMpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZT0zO1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLnBsdXNOb3RBY3RpdmVTcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMucGx1c0FjdGl2ZVNwcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMubWludXNBY3RpdmVTcHJpdGU7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciA9IHRoaXMuanVtcEFtb3VudExpYnJhcnlbdGhpcy5jdXJyZW50VmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBMYWJlbC5zdHJpbmc9IHRoaXMuYXV0b0p1bXBOdW1iZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIG1pbnVzVmFsdWUoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZS0tO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFZhbHVlPD0wKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWU9MDtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5zcHJpdGVGcmFtZSA9IHRoaXMubWludXNOb3RBY3RpdmVTcHJpdGU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLnBsdXNBY3RpdmVTcHJpdGU7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uc3ByaXRlRnJhbWUgPSB0aGlzLm1pbnVzQWN0aXZlU3ByaXRlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciA9IHRoaXMuanVtcEFtb3VudExpYnJhcnlbdGhpcy5jdXJyZW50VmFsdWVdO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBMYWJlbC5zdHJpbmc9IHRoaXMuYXV0b0p1bXBOdW1iZXI7XHJcbiAgICB9LFxyXG4gICAgY29uZmlybUp1bXAoKXtcclxuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEp1bXBOdW1iZXIgPSB0aGlzLmF1dG9KdW1wTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuanVtcENvdW50LnN0cmluZyA9IFwiKFwiK3RoaXMuYXV0b0p1bXBOdW1iZXIrXCIpXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKS5hdXRvSnVtcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcFNwcml0ZVsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0b0p1bXBTcHJpdGVbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSnVtcFRpbWVzKCl7XHJcbiAgICAgICAgdGhpcy5hdXRvSnVtcE51bWJlciAtPTE7XHJcbiAgICAgICAgdGhpcy5qdW1wQ291bnQuc3RyaW5nID0gXCIoXCIrdGhpcy5hdXRvSnVtcE51bWJlcitcIilcIjtcclxuICAgICAgICBpZih0aGlzLmF1dG9KdW1wTnVtYmVyPD0wKXtcclxuICAgICAgICAgICB0aGlzLnN0b3BKdW1wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f25g6QKRNHK5kJFC5Uj01', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlQnkuanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVCeSIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIgdmVyc2lvbnMuXHJcbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXHJcbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXHJcbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjMuMC92Mi4zLjEvdjIuMy4yIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmNjLlJvdGF0ZUJ5Ll9yZXZlcnNlID0gdHJ1ZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '670f2hksQ5Lw7vOXZiYo8c+', 'GameScene');
// src/components/game/GameScene.ts

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
exports.GameScene = void 0;
var OverPanel_1 = require("./OverPanel");
var G_1 = require("../../G");
var Stage_1 = require("./stage/Stage");
var PlayerDieEvent_1 = require("../../events/PlayerDieEvent");
var PlayerJumpSuccessEvent_1 = require("../../events/PlayerJumpSuccessEvent");
var global = require("../../GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = null;
        _this.scoreLabel = null;
        _this.score = 0;
        _this.overPanel = null;
        _this.bgm = null;
        _this.loadingLayer = null;
        _this.mainGame = null;
        _this.message = null;
        _this.prompt = null;
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        if (cc.sys.isMobile) {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = false;
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true;
        }
    };
    GameScene.prototype.start = function () {
        this.addListeners();
        this.startGame();
        this.mainGame = cc.find("Canvas/stage").getComponent("Stage");
    };
    GameScene.prototype.startGame = function () {
        this.stage.reset();
        this.stage.enableTouch();
    };
    GameScene.prototype.onPlayerJumpSuccess = function (event) {
        var score = event.score;
        this.addSocre(score);
        // this.stage.updateStage(()=>{
        //     this.stage.addBlock();
        // });
    };
    GameScene.prototype.addSocre = function (s) {
        this.score += s;
        this.scoreLabel.string = this.score;
    };
    GameScene.prototype.onOver = function () {
        var _this = this;
        this.stage.disableTouch();
        setTimeout(function () {
            _this.overPanel.show(_this.score, _this.onRestart, _this.onHome, _this.mainGame.winAmount, _this.mainGame.totalBet, _this.mainGame.singleMax, _this.mainGame.perfect, _this);
        }, 500);
        cc.log("游戏结束");
    };
    GameScene.prototype.onHome = function () {
        this.overPanel.hide();
        this.loadingLayer.active = true;
        cc.director.loadScene("StartScene");
    };
    GameScene.prototype.onRestart = function () {
        cc.find("Canvas/InGameBetting").getComponent("InGameBetting").isRestarting = true,
            // global.getSocket().disconnect();
            this.overPanel.hide();
        cc.director.loadScene("game");
    };
    GameScene.prototype.addListeners = function () {
        G_1.G.on(PlayerDieEvent_1.PlayerDieEvent.NAME, this.onOver, this);
        G_1.G.on(PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this);
    };
    GameScene.prototype.removeListeners = function () {
        G_1.G.off(PlayerDieEvent_1.PlayerDieEvent.NAME, this.onOver, this);
        G_1.G.off(PlayerJumpSuccessEvent_1.PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this);
    };
    GameScene.prototype.update = function (dt) {
        if (global.isKicked) {
            this.message.string = global.kickMessage;
            this.prompt.active = true;
        }
    };
    GameScene.prototype.blankScreen = function () {
        if (global.settings.lobby_url != null && global.settings.lobby_url != "") {
            window.open(global.settings.lobby_url, "_self");
        }
        else {
            window.open("about:blank", "_self");
        }
    };
    __decorate([
        property(Stage_1.Stage)
    ], GameScene.prototype, "stage", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(OverPanel_1.OverPanel)
    ], GameScene.prototype, "overPanel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameScene.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "loadingLayer", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "message", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "prompt", void 0);
    GameScene = __decorate([
        ccclass
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxHYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4Qyw2QkFBNEI7QUFDNUIsdUNBQXNDO0FBQ3RDLDhEQUE2RDtBQUM3RCw4RUFBNkU7QUFFN0UseUNBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBZ0dDO1FBN0ZXLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFFLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUE4RWxCLENBQUM7SUE1RUcsMEJBQU0sR0FBTjtRQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENB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SUFBSSxDQUFDO1NBQ25DO0lBQ0MsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFDSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBNUZEO1FBREMsUUFBUSxDQUFDLGFBQUssQ0FBQzs0Q0FDVztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLHFCQUFTLENBQUM7Z0RBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUlyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNKO0lBRWY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSjtJQWxCTCxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0dyQjtJQUFELGdCQUFDO0NBaEdELEFBZ0dDLENBaEc4QixFQUFFLENBQUMsU0FBUyxHQWdHMUM7QUFoR1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVyUGFuZWwgfSBmcm9tIFwiLi9PdmVyUGFuZWxcIjtcclxuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2UvU3RhZ2VcIjtcclxuaW1wb3J0IHsgUGxheWVyRGllRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckRpZUV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllckp1bXBTdWNjZXNzRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1BsYXllckp1bXBTdWNjZXNzRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vc3RhZ2UvUGxheWVyXCI7XHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiLi4vLi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoU3RhZ2UpXHJcbiAgICBwcml2YXRlIHN0YWdlOlN0YWdlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2NvcmVMYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuICAgIEBwcm9wZXJ0eShPdmVyUGFuZWwpXHJcbiAgICBwcml2YXRlIG92ZXJQYW5lbDpPdmVyUGFuZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHB1YmxpYyBiZ206Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2FkaW5nTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSAgbWFpbkdhbWUgPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbWVzc2FnZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb21wdCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbkdhbWUgPSAgY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnN0YWdlLmVuYWJsZVRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJKdW1wU3VjY2VzcyhldmVudDpQbGF5ZXJKdW1wU3VjY2Vzc0V2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNjb3JlID0gZXZlbnQuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5hZGRTb2NyZShzY29yZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFnZS51cGRhdGVTdGFnZSgoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlLmFkZEJsb2NrKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU29jcmUocykge1xyXG4gICAgICAgIHRoaXMuc2NvcmUrPXM7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UuZGlzYWJsZVRvdWNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLnNjb3JlLHRoaXMub25SZXN0YXJ0LHRoaXMub25Ib21lLHRoaXMubWFpbkdhbWUud2luQW1vdW50LHRoaXMubWFpbkdhbWUudG90YWxCZXQsdGhpcy5tYWluR2FtZS5zaW5nbGVNYXgsdGhpcy5tYWluR2FtZS5wZXJmZWN0LHRoaXMpO1xyXG4gICAgICAgIH0sNTAwKTtcclxuICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ9cIilcclxuICAgIH1cclxuXHJcbiAgICBvbkhvbWUoKXtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRTY2VuZVwiKTtcclxuICAgIH1cclxuICAgIG9uUmVzdGFydCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5pc1Jlc3RhcnRpbmcgPSB0cnVlLFxyXG4gICAgICAgIC8vIGdsb2JhbC5nZXRTb2NrZXQoKS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIEcub24oUGxheWVyRGllRXZlbnQuTkFNRSx0aGlzLm9uT3Zlcix0aGlzKTtcclxuICAgICAgICBHLm9uKFBsYXllckp1bXBTdWNjZXNzRXZlbnQuTkFNRSx0aGlzLm9uUGxheWVySnVtcFN1Y2Nlc3MsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIEcub2ZmKFBsYXllckRpZUV2ZW50Lk5BTUUsdGhpcy5vbk92ZXIsdGhpcyk7XHJcbiAgICAgICAgRy5vZmYoUGxheWVySnVtcFN1Y2Nlc3NFdmVudC5OQU1FLHRoaXMub25QbGF5ZXJKdW1wU3VjY2Vzcyx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsLmlzS2lja2VkKXtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnN0cmluZyA9IGdsb2JhbC5raWNrTWVzc2FnZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBibGFua1NjcmVlbigpe1xyXG4gICAgICAgIGlmIChnbG9iYWwuc2V0dGluZ3MubG9iYnlfdXJsICE9IG51bGwgJiYgZ2xvYmFsLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbC5zZXR0aW5ncy5sb2JieV91cmwsIFwiX3NlbGZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJhYm91dDpibGFua1wiLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/BetSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c4d8M2FYNB8pqHAGurgrUI', 'BetSelection');
// src/BetSelection.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    canvas: {
      "default": null,
      type: cc.Node
    },
    playButton: {
      "default": null,
      type: cc.Button
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = 0;
  },
  start: function start() {
    if (cc.sys.isMobile) {
      cc.view.resizeWithBrowserSize(true);
      cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
    } else {
      this.canvas.getComponent(cc.Canvas).fitHeight = true;
      this.canvas.getComponent(cc.Canvas).fitWidth = true;
    }
  },
  // update (dt) {},
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }

    globalData.setBetSelection(value);
  },
  StartGame: function StartGame() {
    //send server
    this.loadingLayer.active = true; //start game

    cc.director.loadScene("game");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwic3RhcnQiLCJzeXMiLCJpc01vYmlsZSIsInZpZXciLCJyZXNpemVXaXRoQnJvd3NlclNpemUiLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlJlc29sdXRpb25Qb2xpY3kiLCJTSE9XX0FMTCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImZpdEhlaWdodCIsImZpdFdpZHRoIiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJnbG9iYWxEYXRhIiwic2V0QmV0U2VsZWN0aW9uIiwiU3RhcnRHYW1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUVMLGFBQVNELEVBQUUsQ0FBQ0UsU0FGUDtBQUlMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVIQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGTCxLQUZDO0FBTWRDLElBQUFBLFVBQVUsRUFBQztBQUNELGlCQUFRLElBRFA7QUFFREYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRlAsS0FORztBQVlkQyxJQUFBQSxXQUFXLEVBQUM7QUFDWCxpQkFBUSxFQURHO0FBRVhKLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLElBQUo7QUFGTSxLQVpFO0FBaUJSSSxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUSxJQURDO0FBRVRMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZDO0FBakJMLEdBSlA7QUEyQkw7QUFFQUssRUFBQUEsTUE3Qkssb0JBNkJLO0FBQ1osU0FBS0MsaUJBQUwsR0FBeUIsQ0FBekI7QUFDQSxHQS9CTztBQWlDTEMsRUFBQUEsS0FqQ0ssbUJBaUNJO0FBQ0wsUUFBR2IsRUFBRSxDQUFDYyxHQUFILENBQU9DLFFBQVYsRUFBbUI7QUFDeEJmLE1BQUFBLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUMscUJBQVIsQ0FBOEIsSUFBOUI7QUFDQWpCLE1BQUFBLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUUUsdUJBQVIsQ0FBZ0MsSUFBaEMsRUFBc0MsSUFBdEMsRUFBNENsQixFQUFFLENBQUNtQixnQkFBSCxDQUFvQkMsUUFBaEU7QUFDQSxLQUhLLE1BR0Q7QUFDSixXQUFLaEIsTUFBTCxDQUFZaUIsWUFBWixDQUF5QnJCLEVBQUUsQ0FBQ3NCLE1BQTVCLEVBQW9DQyxTQUFwQyxHQUFnRCxJQUFoRDtBQUNBLFdBQUtuQixNQUFMLENBQVlpQixZQUFaLENBQXlCckIsRUFBRSxDQUFDc0IsTUFBNUIsRUFBb0NFLFFBQXBDLEdBQStDLElBQS9DO0FBQ0E7QUFFRSxHQTFDSTtBQTRDUjtBQUVBQyxFQUFBQSxlQTlDUSwyQkE4Q1FDLEtBOUNSLEVBOENlQyxLQTlDZixFQThDcUI7QUFDNUIsU0FBS2YsaUJBQUwsR0FBeUJnQixNQUFNLENBQUNELEtBQUQsQ0FBL0I7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS3BCLFdBQUwsQ0FBaUJxQixNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFnRDtBQUMvQyxVQUFHQSxDQUFDLElBQUlGLEtBQVIsRUFBYztBQUNiLGFBQUtsQixXQUFMLENBQWlCb0IsQ0FBakIsRUFBb0JFLE1BQXBCLEdBQTJCLElBQTNCO0FBQ0EsT0FGRCxNQUVLO0FBQ0osYUFBS3RCLFdBQUwsQ0FBaUJvQixDQUFqQixFQUFvQkUsTUFBcEIsR0FBMkIsS0FBM0I7QUFDQTtBQUNEOztBQUNEQyxJQUFBQSxVQUFVLENBQUNDLGVBQVgsQ0FBMkJOLEtBQTNCO0FBQ0EsR0F6RE87QUEyRExPLEVBQUFBLFNBM0RLLHVCQTJETTtBQUNiO0FBQ00sU0FBS3hCLFlBQUwsQ0FBa0JxQixNQUFsQixHQUEyQixJQUEzQixDQUZPLENBR2I7O0FBQ00vQixJQUFBQSxFQUFFLENBQUNtQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDTjtBQWhFTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcblxyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgY2FudmFzOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHRcdHBsYXlCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RlZEJldDp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gMDtcclxuXHR9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xyXG5cdFx0XHRjYy52aWV3LnJlc2l6ZVdpdGhCcm93c2VyU2l6ZSh0cnVlKTtcclxuXHRcdFx0Y2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgxMDgwLCAxOTIwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG4gICAgfSxcclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cdHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEJldE9wdGlvbiA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRnbG9iYWxEYXRhLnNldEJldFNlbGVjdGlvbih2YWx1ZSk7XHJcblx0fSxcclxuXHJcbiAgICBTdGFydEdhbWUoKXtcclxuXHRcdC8vc2VuZCBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly9zdGFydCBnYW1lXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuXHR9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/menu/MenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd53944AFM9HprOUPOgbFtLe', 'MenuScene');
// src/components/menu/MenuScene.ts

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
exports.MenuScene = void 0;
var G_1 = require("../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.selectPage = null;
        return _this;
    }
    MenuScene.prototype.onLoad = function () {
        if (cc.sys.isMobile) {
            cc.find("Canvas").getComponent(cc.Canvas).fitHeight = false;
            cc.find("Canvas").getComponent(cc.Canvas).fitWidth = true;
        }
    };
    MenuScene.prototype.start = function () {
        this.addListeners();
    };
    MenuScene.prototype.onBtnStart = function () {
        cc.find("Canvas/mask").active = true;
        var n = this.selectPage.getCurrentPageIndex();
        G_1.G.startGame(n);
    };
    MenuScene.prototype.addListeners = function () {
        this.startButton.on(cc.Node.EventType.TOUCH_END, this.onBtnStart, this);
    };
    __decorate([
        property(cc.Node)
    ], MenuScene.prototype, "startButton", void 0);
    __decorate([
        property(cc.PageView)
    ], MenuScene.prototype, "selectPage", void 0);
    MenuScene = __decorate([
        ccclass
    ], MenuScene);
    return MenuScene;
}(cc.Component));
exports.MenuScene = MenuScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxtZW51XFxNZW51U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUV0QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTRCQztRQXpCVyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFlLElBQUksQ0FBQzs7SUF1QjFDLENBQUM7SUFyQkcsMEJBQU0sR0FBTjtRQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUMsS0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDZ0I7SUFMN0IsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTRCckI7SUFBRCxnQkFBQztDQTVCRCxBQTRCQyxDQTVCOEIsRUFBRSxDQUFDLFNBQVMsR0E0QjFDO0FBNUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzdGFydEJ1dHRvbjpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcclxuICAgIHByaXZhdGUgc2VsZWN0UGFnZTpjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWFza1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBuID0gdGhpcy5zZWxlY3RQYWdlLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgICAgICBHLnN0YXJ0R2FtZShuKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0blN0YXJ0LHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/BackgroundControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fdfduHP0xOW4lGT0eKFCg8', 'BackgroundControl');
// src/BackgroundControl.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    bgSprite: {
      "default": [],
      type: [cc.SpriteFrame]
    },
    bgNode: {
      "default": [],
      type: [cc.Node]
    },
    currentUpper: 1800,
    currentUpperSprite: 1
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxCYWNrZ3JvdW5kQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnU3ByaXRlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiYmdOb2RlIiwiTm9kZSIsImN1cnJlbnRVcHBlciIsImN1cnJlbnRVcHBlclNwcml0ZSIsIm9uTG9hZCIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxRQUFRLEVBQUM7QUFDTCxpQkFBUSxFQURIO0FBRUxDLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLFdBQUo7QUFGQSxLQWpCRDtBQXFCUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsRUFETDtBQUVIRixNQUFBQSxJQUFJLEVBQUMsQ0FBQ0wsRUFBRSxDQUFDUSxJQUFKO0FBRkYsS0FyQkM7QUEwQlJDLElBQUFBLFlBQVksRUFBRSxJQTFCTjtBQTJCUkMsSUFBQUEsa0JBQWtCLEVBQUM7QUEzQlgsR0FIUDtBQWlDTDtBQUVBQyxFQUFBQSxNQW5DSyxvQkFtQ0s7QUFDTixRQUFJQyxPQUFPLEdBQUdaLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQjtBQUVILEdBdkNJO0FBeUNMQyxFQUFBQSxLQXpDSyxtQkF5Q0ksQ0FFUixDQTNDSSxDQTZDTDs7QUE3Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBiZ1Nwcml0ZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6W2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJnTm9kZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6W2NjLk5vZGVdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGN1cnJlbnRVcHBlciA6MTgwMCxcclxuICAgICAgICBjdXJyZW50VXBwZXJTcHJpdGU6MSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4eb76347PJBwZKH/rdxU5j/', 'G');
// src/G.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = exports.Global = void 0;
var GameScene_1 = require("./components/game/GameScene");
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super.call(this) || this;
    }
    Global.prototype.startGame = function (selectedPlayer) {
        cc.director.loadScene("game", function (err, scene) {
            if (!err) {
                var gameScene = scene.getChildByName("Canvas").getComponent(GameScene_1.GameScene);
                cc.audioEngine.play(gameScene.bgm, true, 1);
            }
        });
    };
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.Global = Global;
exports.G = Global.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFFeEQ7SUFBNEIsMEJBQWM7SUFHdEM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixjQUFxQjtRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsVUFBQyxHQUFHLEVBQUMsS0FBSztZQUNuQyxJQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNMLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQztnQkFDakYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFic0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUFlMUQsYUFBQztDQWhCRCxBQWdCQyxDQWhCMkIsRUFBRSxDQUFDLFdBQVcsR0FnQnpDO0FBaEJZLHdCQUFNO0FBa0JOLFFBQUEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWUvR2FtZVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuRXZlbnRUYXJnZXQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJbnN0YW5jZTpHbG9iYWwgPSBuZXcgR2xvYmFsKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEdhbWUoc2VsZWN0ZWRQbGF5ZXI6bnVtYmVyKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiLChlcnIsc2NlbmUpPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnYW1lU2NlbmU6R2FtZVNjZW5lID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGdhbWVTY2VuZS5iZ20sdHJ1ZSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEcgPSBHbG9iYWwuSW5zdGFuY2U7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Collision.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '942f3SJkGxLdL+seZhu8d5U', 'Collision');
// src/Collision.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  start: function start() {},
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxDb2xsaXNpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUVOLFFBQUlDLE9BQU8sR0FBR0wsRUFBRSxDQUFDTSxRQUFILENBQVlDLG1CQUFaLEVBQWQ7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxPQUFSLEdBQWtCLElBQWxCO0FBRUgsR0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFvQkxDLEVBQUFBLE1BcEJLLGtCQW9CR0MsRUFwQkgsRUFvQk8sQ0FLWDtBQXpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/GlobalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd012asB0i5IPoYt5D2ZBNAR', 'GlobalData');
// src/GlobalData.js

"use strict";

exports.__esModule = true;
exports.getSocket = getSocket;
exports.setSocket = setSocket;
exports.getMultiplier = getMultiplier;
exports.setMultiplier = setMultiplier;
exports.getBetAmount = getBetAmount;
exports.setBetAmount = setBetAmount;
exports.getBetSelection = getBetSelection;
exports.setBetSelection = setBetSelection;
exports.getSound = getSound;
exports.setSound = setSound;
exports.setEffectVolume = setEffectVolume;
exports.getEffectVolume = getEffectVolume;
exports.setRotateVolume = setRotateVolume;
exports.getRotateVolume = getRotateVolume;
exports.currentBetSlot = exports.api_url = exports.geoIP_url = exports.winMultiplier = exports.firstPrompt = exports.isEncrypt = exports.errorMessage = exports.ticket_id = exports.game_code = exports.settings = exports.isfullScreen = exports.commonErrorMessage = exports.h5_app = exports.is_promotion = exports.access_token = exports.host_id = exports.finishGeneratingBalance = exports.finishGetData = exports.perfectScore = exports.consoScore = exports.platform = exports.currentBet = exports.isDemo = exports.isProduction = exports.kickMessage = exports.isKicked = void 0;
var betSelection = 0;
var sound = 1;
var effect_volume = 1;
var rotate_volume = 1;
var betAmount = 0;
var multiplier = 0;
var socket = null;
var isKicked = false;
exports.isKicked = isKicked;
var kickMessage = "";
exports.kickMessage = kickMessage;
var isProduction = false;
exports.isProduction = isProduction;
var isDemo = false;
exports.isDemo = isDemo;
var currentBet = 0;
exports.currentBet = currentBet;
var platform = 0;
exports.platform = platform;
var consoScore = 0;
exports.consoScore = consoScore;
var perfectScore = 0;
exports.perfectScore = perfectScore;
var finishGetData = false;
exports.finishGetData = finishGetData;
var finishGeneratingBalance = false;
exports.finishGeneratingBalance = finishGeneratingBalance;

function getSocket() {
  return socket;
}

var host_id = 0;
exports.host_id = host_id;
var access_token = 0;
exports.access_token = access_token;
var is_promotion = null;
exports.is_promotion = is_promotion;
var h5_app = null;
exports.h5_app = h5_app;
var commonErrorMessage = null;
exports.commonErrorMessage = commonErrorMessage;
var isfullScreen = 0;
exports.isfullScreen = isfullScreen;

function setSocket(value) {
  cc.log("Setting socket");
  socket = value;
  return socket;
}

var settings = {
  balance: 9999999999999999,
  currency: "MYR",
  exit_btn: 0,
  game_on: 0,
  game_type: "dsg-006",
  guest_mode: 0,
  hyperdrive: "",
  is_demo: 0,
  is_jackpot: 0,
  isroundednumber: 0,
  jackpot: 0,
  lobby_url: "",
  socket_url: "https://socket-apollo.velachip.com",
  status: "",
  user_id: "",
  username: ""
};
exports.settings = settings;
var game_code = 23;
exports.game_code = game_code;
var ticket_id = null;
exports.ticket_id = ticket_id;
var errorMessage = "";
exports.errorMessage = errorMessage;
var isEncrypt = true;
exports.isEncrypt = isEncrypt;
var firstPrompt = false;
exports.firstPrompt = firstPrompt;
var winMultiplier = [40, 38, 36, 34, 32];
exports.winMultiplier = winMultiplier;

function getMultiplier() {
  return multiplier;
}

function setMultiplier(value) {
  multiplier = value;
  return multiplier;
}

function getBetAmount() {
  return betAmount;
}

function setBetAmount(value) {
  betAmount = value;
  return betAmount;
}

function getBetSelection() {
  return betSelection;
}

function setBetSelection(value) {
  betSelection = value;
  return betSelection;
}

function getSound() {
  return sound;
}

function setSound(value) {
  sound = value;
  return sound;
}

function setEffectVolume(value) {
  effect_volume = value;
  return effect_volume;
}

function getEffectVolume() {
  return effect_volume;
}

function setRotateVolume(value) {
  rotate_volume = value;
  return rotate_volume;
}

function getRotateVolume() {
  return rotate_volume;
}

var geoIP_url;
exports.geoIP_url = geoIP_url;
var api_url;
exports.api_url = api_url;
var currentBetSlot;
exports.currentBetSlot = currentBetSlot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHbG9iYWxEYXRhLmpzIl0sIm5hbWVzIjpbImJldFNlbGVjdGlvbiIsInNvdW5kIiwiZWZmZWN0X3ZvbHVtZSIsInJvdGF0ZV92b2x1bWUiLCJiZXRBbW91bnQiLCJtdWx0aXBsaWVyIiwic29ja2V0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSIsImlzUHJvZHVjdGlvbiIsImlzRGVtbyIsImN1cnJlbnRCZXQiLCJwbGF0Zm9ybSIsImNvbnNvU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJmaW5pc2hHZXREYXRhIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiLCJnZXRTb2NrZXQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwiaXNfcHJvbW90aW9uIiwiaDVfYXBwIiwiY29tbW9uRXJyb3JNZXNzYWdlIiwiaXNmdWxsU2NyZWVuIiwic2V0U29ja2V0IiwidmFsdWUiLCJjYyIsImxvZyIsInNldHRpbmdzIiwiYmFsYW5jZSIsImN1cnJlbmN5IiwiZXhpdF9idG4iLCJnYW1lX29uIiwiZ2FtZV90eXBlIiwiZ3Vlc3RfbW9kZSIsImh5cGVyZHJpdmUiLCJpc19kZW1vIiwiaXNfamFja3BvdCIsImlzcm91bmRlZG51bWJlciIsImphY2twb3QiLCJsb2JieV91cmwiLCJzb2NrZXRfdXJsIiwic3RhdHVzIiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZ2FtZV9jb2RlIiwidGlja2V0X2lkIiwiZXJyb3JNZXNzYWdlIiwiaXNFbmNyeXB0IiwiZmlyc3RQcm9tcHQiLCJ3aW5NdWx0aXBsaWVyIiwiZ2V0TXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJnZXRCZXRBbW91bnQiLCJzZXRCZXRBbW91bnQiLCJnZXRCZXRTZWxlY3Rpb24iLCJzZXRCZXRTZWxlY3Rpb24iLCJnZXRTb3VuZCIsInNldFNvdW5kIiwic2V0RWZmZWN0Vm9sdW1lIiwiZ2V0RWZmZWN0Vm9sdW1lIiwic2V0Um90YXRlVm9sdW1lIiwiZ2V0Um90YXRlVm9sdW1lIiwiZ2VvSVBf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LEVBQTRCO0FBQy9CckIsRUFBQUEsU0FBUyxHQUFHcUIsS0FBWjtBQUNBLFNBQVFyQixTQUFSO0FBQ0g7O0FBQ00sU0FBU21ELGVBQVQsR0FBMEI7QUFDN0IsU0FBT3ZELFlBQVA7QUFDSDs7QUFFTSxTQUFTd0QsZUFBVCxDQUF5Qi9CLEtBQXpCLEVBQStCO0FBQ2xDekIsRUFBQUEsWUFBWSxHQUFHeUIsS0FBZjtBQUNBLFNBQVF6QixZQUFSO0FBQ0g7O0FBR00sU0FBU3lELFFBQVQsR0FBbUI7QUFDdEIsU0FBT3hELEtBQVA7QUFDSDs7QUFFTSxTQUFTeUQsUUFBVCxDQUFrQmpDLEtBQWxCLEVBQXdCO0FBQzNCeEIsRUFBQUEsS0FBSyxHQUFHd0IsS0FBUjtBQUNBLFNBQVF4QixLQUFSO0FBQ0g7O0FBRU0sU0FBUzBELGVBQVQsQ0FBeUJsQyxLQUF6QixFQUErQjtBQUNsQ3ZCLEVBQUFBLGFBQWEsR0FBR3VCLEtBQWhCO0FBQ0EsU0FBUXZCLGFBQVI7QUFDSDs7QUFFTSxTQUFTMEQsZUFBVCxHQUEwQjtBQUM3QixTQUFPMUQsYUFBUDtBQUNIOztBQUdNLFNBQVMyRCxlQUFULENBQXlCcEMsS0FBekIsRUFBK0I7QUFDbEN0QixFQUFBQSxhQUFhLEdBQUdzQixLQUFoQjtBQUNBLFNBQVF0QixhQUFSO0FBQ0g7O0FBRU0sU0FBUzJELGVBQVQsR0FBMEI7QUFDN0IsU0FBTzNELGFBQVA7QUFDSDs7QUFFTSxJQUFJNEQsU0FBSjs7QUFDQSxJQUFJQyxPQUFKOztBQUVBLElBQUlDLGNBQUoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiZXRTZWxlY3Rpb24gPTA7XHJcbnZhciBzb3VuZCA9IDE7XHJcbnZhciBlZmZlY3Rfdm9sdW1lID0gMTtcclxudmFyIHJvdGF0ZV92b2x1bWUgPSAxO1xyXG52YXIgYmV0QW1vdW50ID0gMDtcclxudmFyIG11bHRpcGxpZXIgPSAwO1xyXG52YXIgc29ja2V0ID0gbnVsbDtcclxuZXhwb3J0IHZhciBpc0tpY2tlZCA9IGZhbHNlO1xyXG5leHBvcnQgdmFyIGtpY2tNZXNzYWdlID0gXCJcIjtcclxuZXhwb3J0IHZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZTtcclxuZXhwb3J0IHZhciBpc0RlbW89ZmFsc2U7XHJcbmV4cG9ydCB2YXIgY3VycmVudEJldD0wO1xyXG5leHBvcnQgdmFyIHBsYXRmb3JtID0wO1xyXG5leHBvcnQgdmFyICBjb25zb1Njb3JlID0gMDtcclxuZXhwb3J0IHZhciBwZXJmZWN0U2NvcmUgPTA7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2V0RGF0YT0gZmFsc2U7XHJcbmV4cG9ydCB2YXIgZmluaXNoR2VuZXJhdGluZ0JhbGFuY2U9ZmFsc2U7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb2NrZXQoKXtcclxuICAgIHJldHVybiBzb2NrZXQ7XHJcbn1cclxuZXhwb3J0IHZhciBob3N0X2lkID0wO1xyXG5leHBvcnQgdmFyIGFjY2Vzc190b2tlbiA9MDtcclxuZXhwb3J0IHZhciBpc19wcm9tb3Rpb24gPSBudWxsO1xyXG5leHBvcnQgdmFyIGg1X2FwcCA9IG51bGw7XHJcbmV4cG9ydCB2YXIgY29tbW9uRXJyb3JNZXNzYWdlID0gbnVsbDtcclxuZXhwb3J0IHZhciBpc2Z1bGxTY3JlZW49MDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNvY2tldCh2YWx1ZSl7XHJcbiAgICBjYy5sb2coXCJTZXR0aW5nIHNvY2tldFwiKTtcclxuICAgIHNvY2tldCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChzb2NrZXQpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgYmFsYW5jZSA6IDk5OTk5OTk5OTk5OTk5OTksXHJcbiAgICBjdXJyZW5jeSA6IFwiTVlSXCIsXHJcbiAgICBleGl0X2J0biA6IDAsXHJcbiAgICBnYW1lX29uIDogMCxcclxuICAgIGdhbWVfdHlwZSA6IFwiZHNnLTAwNlwiLFxyXG4gICAgZ3Vlc3RfbW9kZSA6IDAsXHJcbiAgICBoeXBlcmRyaXZlOiBcIlwiLFxyXG4gICAgaXNfZGVtbzogMCxcclxuICAgIGlzX2phY2twb3Q6IDAsXHJcbiAgICBpc3JvdW5kZWRudW1iZXI6IDAsXHJcbiAgICBqYWNrcG90OiAwLFxyXG4gICAgbG9iYnlfdXJsOiBcIlwiLFxyXG4gICAgc29ja2V0X3VybDogXCJodHRwczovL3NvY2tldC1hcG9sbG8udmVsYWNoaXAuY29tXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB1c2VyX2lkOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IHZhciBnYW1lX2NvZGUgPSAyMztcclxuZXhwb3J0IHZhciB0aWNrZXRfaWQgPSBudWxsO1xyXG5cclxuZXhwb3J0IHZhciBlcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5leHBvcnQgdmFyIGlzRW5jcnlwdCA9IHRydWU7XHJcbmV4cG9ydCB2YXIgZmlyc3RQcm9tcHQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB2YXIgd2luTXVsdGlwbGllciA9IFs0MCwzOCwzNiwzNCwzMl07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aXBsaWVyKCl7XHJcbiAgICByZXR1cm4gbXVsdGlwbGllcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE11bHRpcGxpZXIodmFsdWUpe1xyXG4gICAgbXVsdGlwbGllciA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIChtdWx0aXBsaWVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmV0QW1vdW50KCl7XHJcbiAgICByZXR1cm4gYmV0QW1vdW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCZXRBbW91bnQodmFsdWUpe1xyXG4gICAgYmV0QW1vdW50ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKGJldEFtb3VudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJldFNlbGVjdGlvbigpe1xyXG4gICAgcmV0dXJuIGJldFNlbGVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJldFNlbGVjdGlvbih2YWx1ZSl7XHJcbiAgICBiZXRTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgIHJldHVybiAoYmV0U2VsZWN0aW9uKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VuZCgpe1xyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U291bmQodmFsdWUpe1xyXG4gICAgc291bmQgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoc291bmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWZmZWN0Vm9sdW1lKHZhbHVlKXtcclxuICAgIGVmZmVjdF92b2x1bWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiAoZWZmZWN0X3ZvbHVtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RWb2x1bWUoKXtcclxuICAgIHJldHVybiBlZmZlY3Rfdm9sdW1lO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvdGF0ZVZvbHVtZSh2YWx1ZSl7XHJcbiAgICByb3RhdGVfdm9sdW1lID0gdmFsdWU7XHJcbiAgICByZXR1cm4gKHJvdGF0ZV92b2x1bWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRlVm9sdW1lKCl7XHJcbiAgICByZXR1cm4gcm90YXRlX3ZvbHVtZTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBnZW9JUF91cmw7XHJcbmV4cG9ydCB2YXIgYXBpX3VybDtcclxuXHJcbmV4cG9ydCB2YXIgY3VycmVudEJldFNsb3Q7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/PropItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a2c2vKljtFapXtmpoOvyCe', 'PropItem');
// src/PropItem.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxQcm9wSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJLENBRVIsQ0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/PortraitPrompt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56ac3TIcqdONYJLye4gUcc1', 'PortraitPrompt');
// src/PortraitPrompt.js

"use strict";

var global = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    portraitNode: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (!global.firstPrompt) {
      this.portraitNode.active = true;
      global.firstPrompt = true;
    }
  },
  onclick: function onclick() {
    this.portraitNode.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxQb3J0cmFpdFByb21wdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvcnRyYWl0Tm9kZSIsInR5cGUiLCJOb2RlIiwib25Mb2FkIiwiZ2xvYmFsIiwiZmlyc3RQcm9tcHQiLCJhY3RpdmUiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBQztBQUNsQixpQkFBUyxJQURTO0FBRWpCQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUTtBQURMLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxNQVpLLG9CQVlHO0FBQ0osUUFBRyxDQUFDQyxNQUFNLENBQUNDLFdBQVgsRUFBdUI7QUFDbkIsV0FBS0wsWUFBTCxDQUFrQk0sTUFBbEIsR0FBMkIsSUFBM0I7QUFDQUYsTUFBQUEsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQXJCO0FBQ0g7QUFDSixHQWpCSTtBQW1CTEUsRUFBQUEsT0FuQksscUJBbUJJO0FBQ0wsU0FBS1AsWUFBTCxDQUFrQk0sTUFBbEIsR0FBMkIsS0FBM0I7QUFDSCxHQXJCSSxDQXNCTDs7QUF0QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwb3J0cmFpdE5vZGU6e1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG4gXHRcdFx0dHlwZTogY2MuTm9kZSxcclxuXHRcdH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGlmKCFnbG9iYWwuZmlyc3RQcm9tcHQpe1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRyYWl0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBnbG9iYWwuZmlyc3RQcm9tcHQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25jbGljaygpe1xyXG4gICAgICAgIHRoaXMucG9ydHJhaXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/NewBetSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaddfyaaotPJbjSIVajZVD+', 'NewBetSelection');
// src/NewBetSelection.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    canvas: {
      "default": null,
      type: cc.Node
    },
    playButton: {
      "default": null,
      type: cc.Button
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = globalData.getBetSelection();
  },
  start: function start() {
    this.selectBet();
  },
  // update (dt) {},
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }

    globalData.setBetSelection(value);
  },
  selectBet: function selectBet() {
    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == this.selectedBetOption) {
        this.selectedBet[i].active = true;
      } else {
        this.selectedBet[i].active = false;
      }
    }
  },
  StartGame: function StartGame() {
    //send server
    this.loadingLayer.active = true; //start game

    cc.director.loadScene("game");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXdCZXRTZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYW52YXMiLCJ0eXBlIiwiTm9kZSIsInBsYXlCdXR0b24iLCJCdXR0b24iLCJzZWxlY3RlZEJldCIsImxvYWRpbmdMYXllciIsIm9uTG9hZCIsInNlbGVjdGVkQmV0T3B0aW9uIiwiZ2xvYmFsRGF0YSIsImdldEJldFNlbGVjdGlvbiIsInN0YXJ0Iiwic2VsZWN0QmV0Iiwic2VsZWN0QmV0T3B0aW9uIiwiZXZlbnQiLCJ2YWx1ZSIsIk51bWJlciIsImkiLCJsZW5ndGgiLCJhY3RpdmUiLCJzZXRCZXRTZWxlY3Rpb24iLCJTdGFydEdhbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBRUwsYUFBU0QsRUFBRSxDQUFDRSxTQUZQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxNQUFNLEVBQUM7QUFDSCxpQkFBUSxJQURMO0FBRUhDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZMLEtBRkM7QUFNZEMsSUFBQUEsVUFBVSxFQUFDO0FBQ0QsaUJBQVEsSUFEUDtBQUVERixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGUCxLQU5HO0FBWWRDLElBQUFBLFdBQVcsRUFBQztBQUNYLGlCQUFRLEVBREc7QUFFWEosTUFBQUEsSUFBSSxFQUFDLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtBQUZNLEtBWkU7QUFpQlJJLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkM7QUFqQkwsR0FKUDtBQTJCTDtBQUVBSyxFQUFBQSxNQTdCSyxvQkE2Qks7QUFDWixTQUFLQyxpQkFBTCxHQUF5QkMsVUFBVSxDQUFDQyxlQUFYLEVBQXpCO0FBQ0EsR0EvQk87QUFpQ0xDLEVBQUFBLEtBakNLLG1CQWlDSTtBQUNYLFNBQUtDLFNBQUw7QUFFRyxHQXBDSTtBQXNDUjtBQUVBQyxFQUFBQSxlQXhDUSwyQkF3Q1FDLEtBeENSLEVBd0NlQyxLQXhDZixFQXdDcUI7QUFDNUIsU0FBS1AsaUJBQUwsR0FBeUJRLE1BQU0sQ0FBQ0QsS0FBRCxDQUEvQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLWixXQUFMLENBQWlCYSxNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFnRDtBQUMvQyxVQUFHQSxDQUFDLElBQUlGLEtBQVIsRUFBYztBQUNiLGFBQUtWLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixJQUEzQjtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtkLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0RWLElBQUFBLFVBQVUsQ0FBQ1csZUFBWCxDQUEyQkwsS0FBM0I7QUFDQSxHQW5ETztBQXFEUkgsRUFBQUEsU0FyRFEsdUJBcURHO0FBQ1YsU0FBSSxJQUFJSyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS1osV0FBTCxDQUFpQmEsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBZ0Q7QUFDL0MsVUFBR0EsQ0FBQyxJQUFJLEtBQUtULGlCQUFiLEVBQWdDO0FBQy9CLGFBQUtILFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixJQUEzQjtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtkLFdBQUwsQ0FBaUJZLENBQWpCLEVBQW9CRSxNQUFwQixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7QUFDRCxHQTdETztBQThETEUsRUFBQUEsU0E5REssdUJBOERNO0FBQ2I7QUFDTSxTQUFLZixZQUFMLENBQWtCYSxNQUFsQixHQUEyQixJQUEzQixDQUZPLENBR2I7O0FBQ012QixJQUFBQSxFQUFFLENBQUMwQixRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDTjtBQW5FTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcblxyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgY2FudmFzOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHRcdHBsYXlCdXR0b246e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQnV0dG9uXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RlZEJldDp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBsb2FkaW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5nZXRCZXRTZWxlY3Rpb24oKTtcclxuXHR9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHRcdHRoaXMuc2VsZWN0QmV0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cdHNlbGVjdEJldE9wdGlvbihldmVudCwgdmFsdWUpe1xyXG5cdFx0dGhpcy5zZWxlY3RlZEJldE9wdGlvbiA9IE51bWJlcih2YWx1ZSk7XHJcblx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRnbG9iYWxEYXRhLnNldEJldFNlbGVjdGlvbih2YWx1ZSk7XHJcblx0fSxcclxuXHJcblx0c2VsZWN0QmV0KCl7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKGkgPT0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbiApe1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPXRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlPWZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuICAgIFN0YXJ0R2FtZSgpe1xyXG5cdFx0Ly9zZW5kIHNlcnZlclxyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblx0XHQvL3N0YXJ0IGdhbWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/InGameBetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '567f7h+HNVBhpLUppM2yspP', 'InGameBetting');
// src/InGameBetting.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

var ecrypt = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    isGenerating: false,
    myButton: {
      "default": [],
      type: [cc.Node]
    },
    isRestarting: false,
    bettingOptionText: {
      "default": [],
      type: [cc.Node]
    },
    selectedBet: {
      "default": [],
      type: [cc.Node]
    },
    anim: {
      "default": null,
      type: cc.Animation
    },
    // currentBettingLabel: {
    //     default: null,
    //     type: cc.Label,
    // },
    loadingLayer: {
      "default": null,
      type: cc.Node
    },
    insufficient: {
      "default": null,
      type: cc.Node
    },
    balanceText: {
      "default": null,
      type: cc.Label
    },
    hiding: false,
    currentBetting: 0,
    lastBetting: 0,
    playerDie: false
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.selectedBetOption = globalData.currentBet;
    this.SetAmount(1);
  },
  hide: function hide() {
    if (!this.hiding) {
      this.anim.play("Hide");
      this.hiding = true;
    } else {
      this.anim.play("Show");
      this.hiding = false;
    }
  },
  SetAmount: function SetAmount(even, value) {
    this.maintBetOption = globalData.getBetSelection();

    if (this.maintBetOption == 0) {
      this.myValue = 1;
    }

    if (this.maintBetOption == 1) {
      this.myValue = 5;
    }

    if (this.maintBetOption == 2) {
      this.myValue = 10;
    }

    if (this.maintBetOption == 3) {
      this.myValue = 20;
    }

    for (var i = 0; i < this.bettingOptionText.length; i++) {
      if (i == 0) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue;
      } else if (i == 1) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue * 2;
      } else if (i == 2) {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue * 3;
      } else {
        this.bettingOptionText[i].getComponent(cc.Label).string = 1 * this.myValue / (this.bettingOptionText.length - i) * 10;
      }
    }

    if (this.selectedBetOption < 3) {
      this.currentBetting = 1 * this.myValue * (this.selectedBetOption + 1);
    } else {
      this.currentBetting = 1 * this.myValue / (this.bettingOptionText.length - this.selectedBetOption) * 10;
    }

    globalData.setBetAmount(this.currentBetting);

    for (var _i = 0; _i < this.selectedBet.length; _i++) {
      if (_i == this.selectedBetOption) {
        this.selectedBet[_i].active = false; // this.myButton[i].scale = cc.v2(0.9, 0.9);
      } else {
        this.selectedBet[_i].active = true; // this.myButton[i].scale = cc.v2(0.7, 0.7);
      }
    }

    if (this.lastBetting != this.currentBetting) {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        globalData.currentBetSlot = this.selectedBetOption; // this.currentBettingLabel.string = this.currentBetting;
        //eligible for betting;

        this.loadingLayer.opacity = 255;
        this.loadingLayer.active = true;

        if (Number(value) == 0) {
          if (!globalData.isDemo) {
            var emit_result = {
              'host_id': globalData.host_id,
              'access_token': globalData.access_token,
              'ticket_id': globalData.ticket_id,
              'result': this.lastBetting,
              'key': "Change bet: " + this.lastBetting,
              'game_code': globalData.game_code,
              'description': "Get previous bet and change bet",
              'user_id': globalData.settings.user_id,
              'api_url': globalData.api_url,
              'changeBet': true
            };

            if (globalData.isEncrypt) {
              emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
            }

            globalData.getSocket().emit('send-result', emit_result);
            this.generatingBalance = true;
            this.lastBetting = this.currentBetting;
          } else {
            globalData.settings.balance += this.lastBetting;
            this.generatingBalance = true;
            this.lastBetting = this.currentBetting;
          }
        } else {
          this.lastBetting = this.currentBetting;
          this.insufficient.active = false;

          if (!globalData.isDemo) {
            var emit_obj = {
              'host_id': globalData.host_id,
              'access_token': globalData.access_token,
              'game_code': 23,
              'betAmount': this.currentBetting,
              "key": "Happy Jump bet with these index 1st",
              "description": "bet",
              "user_id": globalData.settings.user_id,
              'api_url': globalData.api_url,
              "requestType": "bet",
              "currentBetSlot": globalData.currentBetSlot
            };

            if (globalData.isEncrypt) {
              emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
            }

            globalData.getSocket().emit('changeBet', emit_obj);
            this.generateScore2();
          } else {
            globalData.settings.balance -= this.currentBetting;
            this.generateScore2();
          }
        }
      } else {
        this.insufficient.active = true;
      }
    } else {}
  },
  selectBetOption: function selectBetOption(event, value) {
    this.selectedBetOption = Number(value); //this.lastBetting = this.currentBetting;

    this.canPlay = true; // this.node.active = false;

    cc.log("Selected bet option:" + this.selectedBetOption);

    for (var i = 0; i < this.selectedBet.length; i++) {
      if (i == value) {
        this.selectedBet[i].active = false; // this.myButton[i].scale = cc.v2(0.9, 0.9);
      } else {
        this.selectedBet[i].active = true; // this.myButton[i].scale = cc.v2(0.7, 0.7);
      }
    }

    if (this.selectedBetOption < 3) {
      this.currentBetting = 1 * this.myValue * (this.selectedBetOption + 1);
    } else {
      this.currentBetting = 1 * this.myValue / (this.bettingOptionText.length - this.selectedBetOption) * 10;
    }

    globalData.setBetAmount(this.currentBetting);

    if (this.lastBetting != this.currentBetting) {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        //eligible for betting;
        globalData.currentBetSlot = this.selectedBetOption;
        globalData.currentBet = Number(value); // this.currentBettingLabel.string = this.currentBetting;

        this.loadingLayer.opacity = 255;
        this.loadingLayer.active = true;

        if (!globalData.isDemo) {
          var emit_result = {
            'host_id': globalData.host_id,
            'access_token': globalData.access_token,
            'ticket_id': globalData.ticket_id,
            'result': this.lastBetting,
            'key': "Change bet: " + this.lastBetting,
            'game_code': globalData.game_code,
            'description': "Get previous bet and change bet",
            'user_id': globalData.settings.user_id,
            'api_url': globalData.api_url,
            'changeBet': true
          };

          if (globalData.isEncrypt) {
            emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
          }

          globalData.getSocket().emit('send-result', emit_result);
          this.lastBetting = this.currentBetting;
          this.generatingBalance = true;
        } else {
          globalData.settings.balance += this.lastBetting;
          this.lastBetting = this.currentBetting;
          this.generatingBalance = true;
        }
      } else {
        this.insufficient.active = true;
      }
    } else {
      if (globalData.settings.balance + this.lastBetting >= this.currentBetting) {
        this.insufficient.active = false;
      }
    }
  },
  start: function start() {},
  generateScore2: function generateScore2() {
    this.isGenerating = true;
  },
  demoGenerateScore: function demoGenerateScore() {
    this.loadingLayer.active = false;
    var multiplierPerfect;
    var multiplierConso;
    var platform;
    var perfectScore;
    var consoleScore;
    platform = Math.random() * (1 - 0) + 0;

    if (platform >= 0.3) {
      platform = 1;
    } else {
      platform = 0;
    } // calculate multiplier
    // platform = parseInt(Math.random() * (1 - 0) + 0);


    multiplierPerfect = Math.random() * (10 - 2) + 2;
    multiplierConso = 0.2;
    perfectScore = this.currentBetting * Math.floor(multiplierPerfect);
    consoleScore = Math.round(this.currentBetting * multiplierConso * 10) / 10;
    globalData.consoScore = consoleScore;
    globalData.perfectScore = perfectScore;
    globalData.platform = platform;
    this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
    cc.systemEvent.emit("Change-Bet");
  },
  generateScore: function generateScore() {
    this.loadingLayer.active = false;
    this.balanceText.string = (Math.round(globalData.settings.balance * 100) / 100).toString();
    cc.systemEvent.emit("Change-Bet");
  },
  onDestroy: function onDestroy() {
    if (!globalData.isDemo) {
      if (!this.playerDie) {
        var emit_result = {
          'host_id': globalData.host_id,
          'access_token': globalData.access_token,
          'ticket_id': globalData.ticket_id,
          'result': this.lastBetting,
          'key': "Go to home: " + this.lastBetting,
          'game_code': globalData.game_code,
          'description': "Cancel bet and go to home",
          'user_id': globalData.settings.user_id,
          'api_url': globalData.api_url,
          'changeBet': true
        };

        if (globalData.isEncrypt) {
          emit_result = ecrypt.encrypt(JSON.stringify(emit_result));
        }

        globalData.getSocket().emit('send-result', emit_result);
      }
    } else {
      if (!this.playerDie) {
        globalData.settings.balance += this.lastBetting;
      }
    }
  },
  update: function update(dt) {
    if (this.isGenerating) {
      if (!globalData.isDemo) {
        if (globalData.finishGetData) {
          //sendresult
          this.isGenerating = false;
          globalData.finishGetData = false;
          this.scheduleOnce(function () {
            this.generateScore();
          }, 0.2);
        }
      } else {
        this.isGenerating = false;
        this.scheduleOnce(function () {
          this.demoGenerateScore();
        }, 0.2);
      }
    }

    if (this.generatingBalance) {
      if (!globalData.isDemo) {
        if (globalData.finishGeneratingBalance) {
          this.insufficient.active = false;
          var emit_obj = {
            'host_id': globalData.host_id,
            'access_token': globalData.access_token,
            'game_code': 23,
            'betAmount': this.currentBetting,
            "key": "Happy Jump bet with these index 1st",
            "description": "bet",
            "user_id": globalData.settings.user_id,
            'api_url': globalData.api_url,
            "requestType": "social_addon",
            'ticket_id': globalData.ticket_id,
            "currentBetSlot": globalData.currentBetSlot
          };

          if (globalData.isEncrypt) {
            emit_obj = ecrypt.encrypt(JSON.stringify(emit_obj));
          }

          globalData.getSocket().emit('changeBet', emit_obj);
          this.generateScore2();
          this.generatingBalance = false;
          globalData.finishGeneratingBalance = false;
        }
      } else {
        this.insufficient.active = false;
        this.generateScore2();
        this.generatingBalance = false;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxJbkdhbWVCZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNHZW5lcmF0aW5nIiwibXlCdXR0b24iLCJ0eXBlIiwiTm9kZSIsImlzUmVzdGFydGluZyIsImJldHRpbmdPcHRpb25UZXh0Iiwic2VsZWN0ZWRCZXQiLCJhbmltIiwiQW5pbWF0aW9uIiwibG9hZGluZ0xheWVyIiwiaW5zdWZmaWNpZW50IiwiYmFsYW5jZVRleHQiLCJMYWJlbCIsImhpZGluZyIsImN1cnJlbnRCZXR0aW5nIiwibGFzdEJldHRpbmciLCJwbGF5ZXJEaWUiLCJvbkxvYWQiLCJzZWxlY3RlZEJldE9wdGlvbiIsImdsb2JhbERhdGEiLCJjdXJyZW50QmV0IiwiU2V0QW1vdW50IiwiaGlkZSIsInBsYXkiLCJldmVuIiwidmFsdWUiLCJtYWludEJldE9wdGlvbiIsImdldEJldFNlbGVjdGlvbiIsIm15VmFsdWUiLCJpIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwic2V0QmV0QW1vdW50IiwiYWN0aXZlIiwic2V0dGluZ3MiLCJiYWxhbmNlIiwiY3VycmVudEJldFNsb3QiLCJvcGFjaXR5IiwiTnVtYmVyIiwiaXNEZW1vIiwiZW1pdF9yZXN1bHQiLCJob3N0X2lkIiwiYWNjZXNzX3Rva2VuIiwidGlja2V0X2lkIiwiZ2FtZV9jb2RlIiwidXNlcl9pZCIsImFwaV91cmwiLCJpc0VuY3J5cHQiLCJlY3J5cHQiLCJlbmNyeXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNvY2tldCIsImVtaXQiLCJnZW5lcmF0aW5nQmFsYW5jZSIsImVtaXRfb2JqIiwiZ2VuZXJhdGVTY29yZTIiLCJzZWxlY3RCZXRPcHRpb24iLCJldmVudCIsImNhblBsYXkiLCJsb2ciLCJzdGFydCIsImRlbW9HZW5lcmF0ZVNjb3JlIiwibXVsdGlwbGllclBlcmZlY3QiLCJtdWx0aXBsaWVyQ29uc28iLCJwbGF0Zm9ybSIsInBlcmZlY3RTY29yZSIsImNvbnNvbGVTY29yZSIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInJvdW5kIiwiY29uc29TY29yZSIsInRvU3RyaW5nIiwic3lzdGVtRXZlbnQiLCJnZW5lcmF0ZVNjb3JlIiwib25EZXN0cm95IiwidXBkYXRlIiwiZHQiLCJmaW5pc2hHZXREYXRhIiwic2NoZWR1bGVPbmNlIiwiZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7Ozs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFLEtBRE47QUFFUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsRUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkEsS0FGRjtBQU1SQyxJQUFBQSxZQUFZLEVBQUUsS0FOTjtBQU9SQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUNmLGlCQUFTLEVBRE07QUFFZkgsTUFBQUEsSUFBSSxFQUFFLENBQUNOLEVBQUUsQ0FBQ08sSUFBSjtBQUZTLEtBUFg7QUFZUkcsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsRUFEQTtBQUVUSixNQUFBQSxJQUFJLEVBQUUsQ0FBQ04sRUFBRSxDQUFDTyxJQUFKO0FBRkcsS0FaTDtBQWdCUkksSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ1k7QUFGUCxLQWhCRTtBQXFCUjtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZQLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUZDLEtBMUJOO0FBOEJSTyxJQUFBQSxZQUFZLEVBQUU7QUFD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S0FBM0I7QUFDQSxjQUFJc0IsUUFBUSxHQUFHO0FBQ1gsdUJBQVdyQyxVQUFVLENBQUN1QixPQURYO0FBRVgsNEJBQWdCdkIsVUFBVSxDQUFDd0IsWUFGaEI7QUFHWCx5QkFBYSxFQUhGO0FBSVgseUJBQWEsS0FBSzdCLGNBSlA7QUFLWCxtQkFBTyxxQ0FMSTtBQU1YLDJCQUFlLEtBTko7QUFPWCx1QkFBV0ssVUFBVSxDQUFDZ0IsUUFBWCxDQUFvQlcsT0FQcEI7QUFRWCx1QkFBVTNCLFVBQVUsQ0FBQzRCLE9BUlY7QUFTWCwyQkFBZSxjQVRKO0FBVVgseUJBQWE1QixVQUFVLENBQUN5QixTQVZiO0FBV1gsOEJBQWlCekIsVUFBVSxDQUFDa0I7QUFYakIsV0FBZjs7QUFhQSxjQUFHbEIsVUFBVSxDQUFDNkIsU0FBZCxFQUF3QjtBQUNwQlEsWUFBQUEsUUFBUSxHQUFHUCxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWVJLFFBQWYsQ0FBZixDQUFYO0FBQ0g7O0FBQ0RyQyxVQUFBQSxVQUFVLENBQUNrQyxTQUFYLEdBQXVCQyxJQUF2QixDQUE0QixXQUE1QixFQUF5Q0UsUUFBekM7QUFDQSxlQUFLQyxjQUFMO0FBQ0EsZUFBS0YsaUJBQUwsR0FBeUIsS0FBekI7QUFDQXBDLFVBQUFBLFVBQVUsQ0FBQytELHVCQUFYLEdBQXFDLEtBQXJDO0FBRUg7QUFDSixPQXpCRCxNQTJCSztBQUNELGFBQUt4RSxZQUFMLENBQWtCd0IsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxhQUFLdUIsY0FBTDtBQUNBLGFBQUtGLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0g7QUFFSjtBQUVKO0FBdFpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgKiBhcyBnbG9iYWxEYXRhIGZyb20gXCJHbG9iYWxEYXRhXCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdCBmcm9tIFwiZWNyeXB0XCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzR2VuZXJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgbXlCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzUmVzdGFydGluZzogZmFsc2UsXHJcbiAgICAgICAgYmV0dGluZ09wdGlvblRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdGVkQmV0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gY3VycmVudEJldHRpbmdMYWJlbDoge1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb2FkaW5nTGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3VmZmljaWVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsYW5jZVRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRCZXR0aW5nOiAwLFxyXG4gICAgICAgIGxhc3RCZXR0aW5nOiAwLFxyXG4gICAgICAgIHBsYXllckRpZTpmYWxzZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5jdXJyZW50QmV0O1xyXG4gICAgICAgIHRoaXMuU2V0QW1vdW50KDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJIaWRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIlNob3dcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBTZXRBbW91bnQoZXZlbiwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW50QmV0T3B0aW9uID0gZ2xvYmFsRGF0YS5nZXRCZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5tYWludEJldE9wdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlWYWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gNTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1haW50QmV0T3B0aW9uID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5teVZhbHVlID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmdPcHRpb25UZXh0W2ldLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nT3B0aW9uVGV4dFtpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmV0dGluZ09wdGlvblRleHRbaV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gaSkpICogMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQmV0T3B0aW9uIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXR0aW5nID0gKCgxICogdGhpcy5teVZhbHVlKSkgKiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkgLyAodGhpcy5iZXR0aW5nT3B0aW9uVGV4dC5sZW5ndGggLSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSkgKiAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0QmV0QW1vdW50KHRoaXMuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teUJ1dHRvbltpXS5zY2FsZSA9IGNjLnYyKDAuOSwgMC45KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQmV0W2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90PXRoaXMuc2VsZWN0ZWRCZXRPcHRpb247XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRCZXR0aW5nTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgIC8vZWxpZ2libGUgZm9yIGJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodmFsdWUpID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6IGdsb2JhbERhdGEuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHQnOiB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbERhdGEuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWxEYXRhLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlQmV0Jzp0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9yZXN1bHQgPSBlY3J5cHQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShlbWl0X3Jlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGdsb2JhbERhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JldEFtb3VudCc6IHRoaXMuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIkhhcHB5IEp1bXAgYmV0IHdpdGggdGhlc2UgaW5kZXggMXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWVzdFR5cGVcIjogXCJiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudEJldFNsb3RcIjpnbG9iYWxEYXRhLmN1cnJlbnRCZXRTbG90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfb2JqID0gZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9vYmopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVNjb3JlMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlIC09IHRoaXMuY3VycmVudEJldHRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZTIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2VsZWN0QmV0T3B0aW9uKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIC8vdGhpcy5sYXN0QmV0dGluZyA9IHRoaXMuY3VycmVudEJldHRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmxvZyhcIlNlbGVjdGVkIGJldCBvcHRpb246XCIgKyB0aGlzLnNlbGVjdGVkQmV0T3B0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm15QnV0dG9uW2ldLnNjYWxlID0gY2MudjIoMC45LCAwLjkpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCZXRbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubXlCdXR0b25baV0uc2NhbGUgPSBjYy52MigwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJldE9wdGlvbiA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0dGluZyA9ICgoMSAqIHRoaXMubXlWYWx1ZSkpICogKHRoaXMuc2VsZWN0ZWRCZXRPcHRpb24gKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldHRpbmcgPSAoKDEgKiB0aGlzLm15VmFsdWUpIC8gKHRoaXMuYmV0dGluZ09wdGlvblRleHQubGVuZ3RoIC0gdGhpcy5zZWxlY3RlZEJldE9wdGlvbikpICogMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJldEFtb3VudCh0aGlzLmN1cnJlbnRCZXR0aW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEJldHRpbmcgIT0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICsgdGhpcy5sYXN0QmV0dGluZyA+PSB0aGlzLmN1cnJlbnRCZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvL2VsaWdpYmxlIGZvciBiZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0U2xvdD10aGlzLnNlbGVjdGVkQmV0T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5jdXJyZW50QmV0ID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudEJldHRpbmdMYWJlbC5zdHJpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOiBnbG9iYWxEYXRhLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbERhdGEudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5sYXN0QmV0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiQ2hhbmdlIGJldDogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsRGF0YS5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbERhdGEuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZUJldCc6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWxEYXRhLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRfcmVzdWx0ID0gZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCZXR0aW5nID0gdGhpcy5jdXJyZW50QmV0dGluZztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArPSB0aGlzLmxhc3RCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEJldHRpbmcgPSB0aGlzLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYmFsYW5jZSArIHRoaXMubGFzdEJldHRpbmcgPj0gdGhpcy5jdXJyZW50QmV0dGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIGdlbmVyYXRlU2NvcmUyKCkge1xyXG4gICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG4gICAgZGVtb0dlbmVyYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG11bHRpcGxpZXJQZXJmZWN0O1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyQ29uc287XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtO1xyXG4gICAgICAgIHZhciBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgdmFyIGNvbnNvbGVTY29yZTtcclxuICAgICAgICBwbGF0Zm9ybSAgPSAgIChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIGlmKHBsYXRmb3JtPj0wLjMpe1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtdWx0aXBsaWVyXHJcbiAgICAgICAgLy8gcGxhdGZvcm0gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEgLSAwKSArIDApO1xyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArMik7XHJcbiAgICAgICAgbXVsdGlwbGllckNvbnNvID0gMC4yO1xyXG4gICAgICAgIHBlcmZlY3RTY29yZSA9KHRoaXMuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgodGhpcy5jdXJyZW50QmV0dGluZyAqIG11bHRpcGxpZXJDb25zbykgKiAxMCkgLyAxMDtcclxuICAgICAgICBnbG9iYWxEYXRhLmNvbnNvU2NvcmUgPSBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgIH0sXHJcbiAgICBnZW5lcmF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZVRleHQuc3RyaW5nID0gKE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICogMTAwKSAvIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICghZ2xvYmFsRGF0YS5pc0RlbW8pIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWxEYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsRGF0YS50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMubGFzdEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleSc6IFwiR28gdG8gaG9tZTogXCIgKyB0aGlzLmxhc3RCZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWxEYXRhLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkNhbmNlbCBiZXQgYW5kIGdvIHRvIGhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAndXNlcl9pZCc6IGdsb2JhbERhdGEuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGFuZ2VCZXQnOnRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0X3Jlc3VsdCA9IGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICs9IHRoaXMubGFzdEJldHRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2VuZXJhdGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbERhdGEuaXNEZW1vKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsRGF0YS5maW5pc2hHZXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZW5kcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0dlbmVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmZpbmlzaEdldERhdGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVTY29yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHZW5lcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZW1vR2VuZXJhdGVTY29yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxEYXRhLmlzRGVtbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbERhdGEuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9vYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzogZ2xvYmFsRGF0YS5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiAyMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JldEFtb3VudCc6IHRoaXMuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsRGF0YS5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsRGF0YS5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVlc3RUeXBlXCI6IFwic29jaWFsX2FkZG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWxEYXRhLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50QmV0U2xvdFwiOmdsb2JhbERhdGEuY3VycmVudEJldFNsb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbERhdGEuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdF9vYmogPSBlY3J5cHQuZW5jcnlwdChKU09OLnN0cmluZ2lmeShlbWl0X29iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxEYXRhLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVtaXRfb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGEuZmluaXNoR2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2NvcmUyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/ScoreMoving.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cb7bdk8ZhMmbkhTEUhuGzl', 'ScoreMoving');
// src/ScoreMoving.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    direction: 0,
    speed: 60,
    left: {
      "default": null,
      type: cc.Node
    },
    right: {
      "default": null,
      type: cc.Node
    },
    up: {
      "default": null,
      type: cc.Node
    },
    down: {
      "default": null,
      type: cc.Node
    },
    changeTIme: 0.5,
    perfectColor: {
      "default": null,
      type: cc.Color
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    },
    perfecteffect: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onDestroy: function onDestroy() {
    //
    cc.systemEvent.off("Change-Bet");
  },
  onLoad: function onLoad() {
    //this.generateScore();
    var self = this;
    cc.systemEvent.on("Change-Bet", function () {
      self.generateScore();
    });
  },
  start: function start() {
    this.direction = parseInt(Math.random() * (3 + 1 - 0) + 0);
    this.hvtGenerate = true;
    this.randomTimer = 0;
    this.notMoving = true;
    this.alreadyStop = false;
  },
  generateScore: function generateScore() {
    if (!this.alreadyStop) {
      cc.log("HIHIHIHI");
      this.perfectScore = globalData.perfectScore;
      this.consoScore = globalData.consoScore;
      cc.log(this.perfectScore);
      this.scoreLabel.string = Math.round(this.perfectScore * 10) / 10;
      cc.log(this.scoreLabel.string + "AKKA");
    }
  },
  getScore: function getScore(platformState) {
    if (platformState == 1) {
      return this.perfectScore;
    } else {
      return this.consoScore;
    }
  },
  generateLast: function generateLast() {
    this.lastDirection = this.direction;
    this.hvtGenerate = false;
  },
  update: function update(dt) {
    if (!this.alreadyStop) {
      this.randomTimer += dt;

      if (this.randomTimer >= this.changeTIme) {
        if (this.hvtGenerate) {
          this.generateLast();
        }

        if (this.direction == this.lastDirection) {
          this.direction = parseInt(Math.random() * (3 + 1 - 0) + 0);
        }

        if (this.direction != this.lastDirection) {
          this.hvtGenerate = true;
          this.randomTimer = 0;
          this.notMoving = true;
        }
      }

      if (this.notMoving) {
        if (this.direction == 0) {
          this.move(this.left.position);
        } else if (this.direction == 1) {
          this.move(this.right.position);
        } else if (this.direction == 2) {
          this.move(this.up.position);
        } else {
          this.move(this.down.position);
        }
      }
    }
  },
  move: function move(value) {
    var action = cc.moveTo(this.changeTIme, value);
    this.currentAction = action; //this.node.x -= dt*this.speed;

    this.node.runAction(this.currentAction);
    this.notMoving = false;
  },
  stopAll: function stopAll(value, platformState) {
    this.node.stopAction(this.currentAction);
    this.alreadyStop = true;

    if (platformState == 1) {
      value.y += 15;
      var action = cc.moveTo(0.5, value);
      this.node.runAction(action);
      this.scheduleOnce(function () {
        this.node.color = this.perfectColor;
        this.perfecteffect.active = true;
        this.scheduleOnce(function () {
          cc.find("Canvas/AudioManager").getComponent("AudioManager").playLandPerfect();
        }, 0.1);
      }, 0.5);
    } else {
      var action = cc.moveTo(0.5, value);
      this.node.runAction(action);
      this.scheduleOnce(function () {
        cc.find("Canvas/AudioManager").getComponent("AudioManager").playLandConso();
      }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTY29yZU1vdmluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpcmVjdGlvbiIsInNwZWVkIiwibGVmdCIsInR5cGUiLCJOb2RlIiwicmlnaHQiLCJ1cCIsImRvd24iLCJjaGFuZ2VUSW1lIiwicGVyZmVjdENvbG9yIiwiQ29sb3IiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJwZXJmZWN0ZWZmZWN0Iiwib25EZXN0cm95Iiwic3lzdGVtRXZlbnQiLCJvZmYiLCJvbkxvYWQiLCJzZWxmIiwib24iLCJnZW5lcmF0ZVNjb3JlIiwic3RhcnQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJodnRHZW5lcmF0ZSIsInJhbmRvbVRpbWVyIiwibm90TW92aW5nIiwiYWxyZWFkeVN0b3AiLCJsb2ciLCJwZXJmZWN0U2NvcmUiLCJnbG9iYWxEYXRhIiwiY29uc29TY29yZSIsInN0cmluZyIsInJvdW5kIiwiZ2V0U2NvcmUiLCJwbGF0Zm9ybVN0YXRlIiwiZ2VuZXJhdGVMYXN0IiwibGFzdERpcmVjdGlvbiIsInVwZGF0ZSIsImR0IiwibW92ZSIsInBvc2l0aW9uIiwidmFsdWUiLCJhY3Rpb24iLCJtb3ZlVG8iLCJjdXJyZW50QWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsInN0b3BBbGwiLCJzdG9wQWN0aW9uIiwieSIsInNjaGVkdWxlT25jZSIsImNvbG9yIiwiYWN0aXZlIiwiZmluZCIsImdldENvbXBvbmVudCIsInBsYXlMYW5kUGVyZmVjdCIsInBsYXlMYW5kQ29uc28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsU0FB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QUFjRixLQUFkLENBQWI7QUFDQSxXQUFLSSxJQUFMLENBQVVDLFNBQVYsQ0FBb0JKLE1BQXBCO0FBQ0EsV0FBS1EsWUFBTCxDQUFrQixZQUFVO0FBQ3hCeEQsUUFBQUEsRUFBRSxDQUFDMkQsSUFBSCxDQUFRLHFCQUFSLEVBQStCQyxZQUEvQixDQUE0QyxjQUE1QyxFQUE0REUsYUFBNUQ7QUFFSCxPQUhELEVBR0UsR0FIRjtBQUlIO0FBRUo7QUEzS0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCAqIGFzIGdsb2JhbERhdGEgZnJvbSBcIkdsb2JhbERhdGFcIjtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uOiAwLFxyXG4gICAgICAgIHNwZWVkOiA2MCxcclxuICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZVRJbWUgOjAuNSxcclxuXHJcbiAgICAgICAgcGVyZmVjdENvbG9yOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkNvbG9yLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlTGFiZWw6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGVyZmVjdGVmZmVjdDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoXCJDaGFuZ2UtQmV0XCIpO1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5nZW5lcmF0ZVNjb3JlKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPXRoaXM7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oXCJDaGFuZ2UtQmV0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLmdlbmVyYXRlU2NvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMyArIDEgLSAwKSArIDApO1xyXG4gICAgICAgIHRoaXMuaHZ0R2VuZXJhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFscmVhZHlTdG9wID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZ2VuZXJhdGVTY29yZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmFscmVhZHlTdG9wKXtcclxuICAgICAgICAgICAgY2MubG9nKFwiSElISUhJSElcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZmVjdFNjb3JlID0gZ2xvYmFsRGF0YS5wZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29TY29yZSA9IGdsb2JhbERhdGEuY29uc29TY29yZTtcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMucGVyZmVjdFNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5wZXJmZWN0U2NvcmUgKiAxMCkgLyAxMDtcclxuICAgICAgICAgICAgY2MubG9nKCB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nK1wiQUtLQVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTY29yZShwbGF0Zm9ybVN0YXRlKXtcclxuICAgICAgICBpZihwbGF0Zm9ybVN0YXRlPT0xKXtcclxuICAgICAgICAgICAgcmV0dXJuICB0aGlzLnBlcmZlY3RTY29yZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnNvU2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlTGFzdCgpIHtcclxuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmh2dEdlbmVyYXRlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYWxyZWFkeVN0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21UaW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbVRpbWVyID49IHRoaXMuY2hhbmdlVEltZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaHZ0R2VuZXJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IHRoaXMubGFzdERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqICgzICsgMSAtIDApICsgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9IHRoaXMubGFzdERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHZ0R2VuZXJhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90TW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubm90TW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLmxlZnQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnJpZ2h0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMudXAucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMuZG93bi5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbyh0aGlzLmNoYW5nZVRJbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgLy90aGlzLm5vZGUueCAtPSBkdCp0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5jdXJyZW50QWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vdE1vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEFsbCh2YWx1ZSxwbGF0Zm9ybVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb24odGhpcy5jdXJyZW50QWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFscmVhZHlTdG9wID0gdHJ1ZTtcclxuICAgICAgICBpZihwbGF0Zm9ybVN0YXRlID09MSl7XHJcbiAgICAgICAgICAgIHZhbHVlLnkgKz0xNTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjUsdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLnBlcmZlY3RDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdGVmZmVjdC5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvQXVkaW9NYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5TGFuZFBlcmZlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LDAuMSlcclxuXHJcbiAgICAgICAgICAgIH0sMC41KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oMC41LHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMYW5kQ29uc28oKTtcclxuXHJcbiAgICAgICAgICAgIH0sMC41KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/SettingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4205UA9ohBwpoCELzXYWU1', 'SettingManager');
// src/SettingManager.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    settingLayer: {
      "default": null,
      type: cc.Node
    },
    tips: {
      "default": null,
      type: cc.Node
    },
    tipsLabel: {
      "default": null,
      type: cc.Label
    }
  },
  fullScreen: function fullScreen() {
    if (cc.screen.fullScreen()) {
      cc.screen.exitFullScreen();
    } else {
      cc.screen.requestFullScreen();
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);

    if (isIOS14Device) {
      cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
        if (this.vertexOffset + vertexCount > 65535) {
          this.uploadData();

          this._batcher._flush();
        }
      };

      cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
        this.uploadData();
        this.switchBuffer();
      };
    }
  },
  start: function start() {
    this.game = cc.find("Canvas").getComponent("GameScene");
    this.stage = cc.find("Canvas/stage").getComponent("Stage");
  },
  openSetting: function openSetting() {
    this.settingLayer.active = true;
  },
  closeSetting: function closeSetting() {
    this.settingLayer.active = false;
  },
  restartGame: function restartGame() {
    if (this.stage.autoJump) {
      this.openTips();
      this.tipsLabel.string = "Cannot Restart Game While Auto Jumping";
    } else {
      this.settingLayer.active = false;
      this.game.onOver();
    }
  },
  quitGame: function quitGame() {
    if (this.stage.autoJump) {
      this.openTips();
      this.tipsLabel.string = "Cannot Quit Game While Auto Jumping";
    } else {
      cc.find("Canvas/overPanel").getComponent("OverPanel").isQuit = true;
      this.settingLayer.active = false;
      this.game.onOver();
    }
  },
  openTips: function openTips() {
    this.tips.active = true;
  },
  closeTips: function closeTips() {
    this.tips.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTZXR0aW5nTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNldHRpbmdMYXllciIsInR5cGUiLCJOb2RlIiwidGlwcyIsInRpcHNMYWJlbCIsIkxhYmVsIiwiZnVsbFNjcmVlbiIsInNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJvbkxvYWQiLCJpc0lPUzE0RGV2aWNlIiwic3lzIiwib3MiLCJPU19JT1MiLCJpc0Jyb3dzZXIiLCJpc01vYmlsZSIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNZXNoQnVmZmVyIiwicHJvdG90eXBlIiwiY2hlY2tBbmRTd2l0Y2hCdWZmZXIiLCJ2ZXJ0ZXhDb3VudCIsInZlcnRleE9mZnNldCIsInVwbG9hZERhdGEiLCJfYmF0Y2hlciIsIl9mbHVzaCIsImZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0Iiwic3dpdGNoQnVmZmVyIiwic3RhcnQiLCJnYW1lIiwiZmluZCIsImdldENvbXBvbmVudCIsInN0YWdlIiwib3BlblNldHRpbmciLCJhY3RpdmUiLCJjbG9zZVNldHRpbmciLCJyZXN0YXJ0R2FtZSIsImF1dG9KdW1wIiwib3BlblRpcHMiLCJzdHJpbmciLCJvbk92ZXIiLCJxdWl0R2FtZSIsImlzUXVpdCIsImNsb3NlVGlwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkMsS0FETDtBQUtSQyxJQUFBQSxJQUFJ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VVcsTUFBVjtBQUNIO0FBRUgsR0FuRkc7QUFvRkpGLEVBQUFBLFFBcEZJLHNCQW9GTTtBQUNQLFNBQUt0QyxJQUFMLENBQVVrQyxNQUFWLEdBQWlCLElBQWpCO0FBQ0YsR0F0Rkc7QUF3RkpTLEVBQUFBLFNBeEZJLHVCQXdGTztBQUNSLFNBQUszQyxJQUFMLENBQVVrQyxNQUFWLEdBQWlCLEtBQWpCO0FBQ0YsR0ExRkcsQ0EyRkw7O0FBM0ZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzZXR0aW5nTGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpcHM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGUgOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGlwc0xhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlIDpjYy5MYWJlbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG4gICAgICAgIGlmKGNjLnNjcmVlbi5mdWxsU2NyZWVuKCkpe1xyXG4gICAgICAgICAgICBjYy5zY3JlZW4uZXhpdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLnJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zdCBpc0lPUzE0RGV2aWNlID0gY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TICYmIGNjLnN5cy5pc0Jyb3dzZXIgJiYgY2Muc3lzLmlzTW9iaWxlICYmIC9pUGhvbmUgT1MgMTQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIGlmIChpc0lPUzE0RGV2aWNlKSB7XHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmNoZWNrQW5kU3dpdGNoQnVmZmVyID0gZnVuY3Rpb24gKHZlcnRleENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0ZXhPZmZzZXQgKyB2ZXJ0ZXhDb3VudCA+IDY1NTM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmF0Y2hlci5fZmx1c2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTsgICAgIFxyXG4gICAgICAgICAgICBjYy5NZXNoQnVmZmVyLnByb3RvdHlwZS5mb3J3YXJkSW5kaWNlU3RhcnRUb09mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hCdWZmZXIoKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVTY2VuZVwiKTtcclxuICAgICAgICB0aGlzLnN0YWdlID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZVwiKS5nZXRDb21wb25lbnQoXCJTdGFnZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb3BlblNldHRpbmcoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAgcmVzdGFydEdhbWUoKXtcclxuICAgICAgICBpZih0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVGlwcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmcgPSBcIkNhbm5vdCBSZXN0YXJ0IEdhbWUgV2hpbGUgQXV0byBKdW1waW5nXCI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbk92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICB9LFxyXG5cclxuICAgICBxdWl0R2FtZSgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YWdlLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVGlwcygpO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmcgPSBcIkNhbm5vdCBRdWl0IEdhbWUgV2hpbGUgQXV0byBKdW1waW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbk92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuICAgICBvcGVuVGlwcygpe1xyXG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmU9dHJ1ZTtcclxuICAgICB9LFxyXG5cclxuICAgICBjbG9zZVRpcHMoKXtcclxuICAgICAgICB0aGlzLnRpcHMuYWN0aXZlPWZhbHNlO1xyXG4gICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/backgroundImage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc9f6dCJblCEabOrrIMKHIE', 'backgroundImage');
// src/backgroundImage.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    stage: {
      "default": null,
      type: cc.Node
    },
    myParent: {
      "default": null,
      type: cc.Node
    },
    mySpriteNode: {
      "default": null,
      type: cc.Sprite
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.name == "Change") {
      this.node.y = this.myParent.currentUpper + 1800;
      this.myParent.currentUpper = this.node.y;

      if (this.myParent.currentUpperSprite + 1 == this.myParent.bgSprite.length) {
        this.myParent.currentUpperSprite = -1;
      }

      this.mySpriteNode.spriteFrame = this.myParent.bgSprite[this.myParent.currentUpperSprite + 1];
      this.myParent.currentUpperSprite += 1;
      this.stage.addProp(this.myParent.currentUpperSprite, this.node.y);
    }
  },
  start: function start() {
    this.stage = this.stage.getComponent("Stage");
    this.myParent = this.myParent.getComponent("BackgroundControl");
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxiYWNrZ3JvdW5kSW1hZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFnZSIsInR5cGUiLCJOb2RlIiwibXlQYXJlbnQiLCJteVNwcml0ZU5vZGUiLCJTcHJpdGUiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibm9kZSIsIm5hbWUiLCJ5IiwiY3VycmVudFVwcGVyIiwiY3VycmVudFVwcGVyU3ByaXRlIiwiYmdTcHJpdGUiLCJsZW5ndGgiLCJzcHJpdGVGcmFtZSIsImFkZFByb3AiLCJzdGFydCIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLEtBQUssRUFBQztBQUNGLGlCQUFRLElBRE47QUFFRkMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRk4sS0FqQkU7QUFxQlJDLElBQUFBLFFBQVEsRUFBQztBQUNMLGlCQUFRLElBREg7QUFFTEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkgsS0FyQkQ7QUEwQlJFLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEgsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNTO0FBRkM7QUExQkwsR0FIUDtBQW1DTDtBQUVBO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsSUFBWCxJQUFrQixRQUFyQixFQUE4QjtBQUMxQixXQUFLRCxJQUFMLENBQVVFLENBQVYsR0FBYyxLQUFLUixRQUFMLENBQWNTLFlBQWQsR0FBNkIsSUFBM0M7QUFDQSxXQUFLVCxRQUFMLENBQWNTLFlBQWQsR0FBNkIsS0FBS0gsSUFBTCxDQUFVRSxDQUF2Qzs7QUFDQSxVQUFHLEtBQUtSLFFBQUwsQ0FBY1Usa0JBQWQsR0FBaUMsQ0FBakMsSUFBc0MsS0FBS1YsUUFBTCxDQUFjVyxRQUFkLENBQXVCQyxNQUFoRSxFQUF1RTtBQUNuRSxhQUFLWixRQUFMLENBQWNVLGtCQUFkLEdBQW1DLENBQUMsQ0FBcEM7QUFDSDs7QUFDRCxXQUFLVCxZQUFMLENBQWtCWSxXQUFsQixHQUFnQyxLQUFLYixRQUFMLENBQWNXLFFBQWQsQ0FBdUIsS0FBS1gsUUFBTCxDQUFjVSxrQkFBZCxHQUFrQyxDQUF6RCxDQUFoQztBQUNBLFdBQUtWLFFBQUwsQ0FBY1Usa0JBQWQsSUFBbUMsQ0FBbkM7QUFDQSxXQUFLYixLQUFMLENBQVdpQixPQUFYLENBQW1CLEtBQUtkLFFBQUwsQ0FBY1Usa0JBQWpDLEVBQW9ELEtBQUtKLElBQUwsQ0FBVUUsQ0FBOUQ7QUFDSDtBQUVKLEdBbERJO0FBbURMTyxFQUFBQSxLQW5ESyxtQkFtREk7QUFDTCxTQUFLbEIsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV21CLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBLFNBQUtoQixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2dCLFlBQWQsQ0FBMkIsbUJBQTNCLENBQWhCO0FBQ0gsR0F0REksQ0F3REw7O0FBeERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgc3RhZ2U6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15UGFyZW50OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbXlTcHJpdGVOb2RlOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PVwiQ2hhbmdlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubXlQYXJlbnQuY3VycmVudFVwcGVyICsgMTgwMDtcclxuICAgICAgICAgICAgdGhpcy5teVBhcmVudC5jdXJyZW50VXBwZXIgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICAgICAgaWYodGhpcy5teVBhcmVudC5jdXJyZW50VXBwZXJTcHJpdGUrMSA9PSB0aGlzLm15UGFyZW50LmJnU3ByaXRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubXlTcHJpdGVOb2RlLnNwcml0ZUZyYW1lID0gdGhpcy5teVBhcmVudC5iZ1Nwcml0ZVt0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSArMV07XHJcbiAgICAgICAgICAgIHRoaXMubXlQYXJlbnQuY3VycmVudFVwcGVyU3ByaXRlICs9MSA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UuYWRkUHJvcCh0aGlzLm15UGFyZW50LmN1cnJlbnRVcHBlclNwcml0ZSx0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSB0aGlzLnN0YWdlLmdldENvbXBvbmVudChcIlN0YWdlXCIpO1xyXG4gICAgICAgIHRoaXMubXlQYXJlbnQgPSB0aGlzLm15UGFyZW50LmdldENvbXBvbmVudChcIkJhY2tncm91bmRDb250cm9sXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/StartScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a98da22QxGVrT4WQx6TGck', 'StartScene');
// src/StartScene.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    musicToggle: {
      "default": null,
      type: cc.Toggle
    },
    settingLayer: {
      "default": null,
      type: cc.Node
    },
    balance: {
      "default": null,
      type: cc.Label
    },
    loadingLayer: {
      "default": null,
      type: cc.Node
    },
    sureToExit: {
      "default": null,
      type: cc.Node
    },
    message: {
      "default": null,
      type: cc.Label
    },
    prompt: {
      "default": null,
      type: cc.Node
    },
    errorButtons: {
      "default": [],
      type: [cc.Node]
    }
  },
  // LIFE-CYCLE CALLBACKS:
  openSureToExit: function openSureToExit() {
    this.sureToExit.active = true;
  },
  closeSureToExit: function closeSureToExit() {
    this.sureToExit.active = false;
  },
  onLoad: function onLoad() {
    this.api = this.node.getComponent("API");
    this.api.getSettings();
    this.loadingLayer.active = true;
    var isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);

    if (isIOS14Device) {
      cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
        if (this.vertexOffset + vertexCount > 65535) {
          this.uploadData();

          this._batcher._flush();
        }
      };

      cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
        this.uploadData();
        this.switchBuffer();
      };
    }
  },
  fullScreen: function fullScreen() {
    if (cc.screen.fullScreen()) {
      cc.screen.exitFullScreen();
    } else {
      cc.screen.requestFullScreen();
    } // document.webkitExitFullscreen();

  },
  updateCreditLabel: function updateCreditLabel() {
    this.loadingLayer.active = false;
    this.balance.string = Math.round(globalData.settings.balance * 100) / 100;
  },
  start: function start() {},
  blankScreen: function blankScreen() {
    if (globalData.settings.lobby_url != null && globalData.settings.lobby_url != "") {
      window.open(globalData.settings.lobby_url, "_self");
    } else {
      window.open("about:blank", "_self");
    }
  },
  openSetting: function openSetting() {
    this.settingLayer.active = true;
  },
  closeSetting: function closeSetting() {
    this.settingLayer.active = false;
  },
  toggleMute: function toggleMute() {
    if (this.musicToggle.isChecked) {
      cc.audioEngine.setMusicVolume(1);
      globalData.setEffectVolume(1);
    } else {
      cc.audioEngine.setMusicVolume(0);
      globalData.setEffectVolume(0);
    }
  },
  update: function update(dt) {
    if (globalData.isKicked) {
      this.errorButtons[0].active = false;
      this.errorButtons[1].active = true;
      this.message.string = globalData.kickMessage;
      this.prompt.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTdGFydFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibXVzaWNUb2dnbGUiLCJ0eXBlIiwiVG9nZ2xlIiwic2V0dGluZ0xheWVyIiwiTm9kZSIsImJhbGFuY2UiLCJMYWJlbCIsImxvYWRpbmdMYXllciIsInN1cmVUb0V4aXQiLCJtZXNzYWdlIiwicHJvbXB0IiwiZXJyb3JCdXR0b25zIiwib3BlblN1cmVUb0V4aXQiLCJhY3RpdmUiLCJjbG9zZVN1cmVUb0V4aXQiLCJvbkxvYWQiLCJhcGkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0U2V0dGluZ3MiLCJpc0lPUzE0RGV2aWNlIiwic3lzIiwib3MiLCJPU19JT1MiLCJpc0Jyb3dzZXIiLCJpc01vYmlsZSIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNZXNoQnVmZmVyIiwicHJvdG90eXBlIiwiY2hlY2tBbmRTd2l0Y2hCdWZmZXIiLCJ2ZXJ0ZXhDb3VudCIsInZlcnRleE9mZnNldCIsInVwbG9hZERhdGEiLCJfYmF0Y2hlciIsIl9mbHVzaCIsImZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0Iiwic3dpdGNoQnVmZmVyIiwiZnVsbFNjcmVlbiIsInNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVDcmVkaXRMYWJlbCIsInN0cmluZyIsIk1hdGgiLCJyb3VuZCIsImdsb2JhbERhdGEiLCJzZXR0aW5ncyIsInN0YXJ0IiwiYmxhbmtTY3JlZW4iLCJsb2JieV91cmwiLCJvcGVuIiwib3BlblNldHRpbmciLCJjbG9zZVNldHRpbmciLCJ0b2dnbGVNdXRlIiwiaXNDaGVja2VkIiwiYXVkaW9FbmdpbmUiLCJzZXRNdXNpY1ZvbHVtZSIsInNldEVmZmVjdFZvbHVtZSIsInVwZGF0ZSIsImR0IiwiaXNLaWNrZWQiLCJraWNrTWVzc2FnZSJdLCJtYXBwaW5n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QUNSLFFBQUcsS0FBS3hELFdBQUwsQ0FBaUJ5RCxTQUFwQixFQUE4QjtBQUMxQjdELE1BQUFBLEVBQUUsQ0FBQzhELFdBQUgsQ0FBZUMsY0FBZixDQUE4QixDQUE5QjtBQUNBWCxNQUFBQSxVQUFVLENBQUNZLGVBQVgsQ0FBMkIsQ0FBM0I7QUFFSCxLQUpELE1BS0k7QUFDQWhFLE1BQUFBLEVBQUUsQ0FBQzhELFdBQUgsQ0FBZUMsY0FBZixDQUE4QixDQUE5QjtBQUNBWCxNQUFBQSxVQUFVLENBQUNZLGVBQVgsQ0FBMkIsQ0FBM0I7QUFHSDtBQUNKLEdBaklJO0FBbUlMQyxFQUFBQSxNQW5JSyxrQkFtSUdDLEVBbklILEVBbUlPO0FBQ1IsUUFBR2QsVUFBVSxDQUFDZSxRQUFkLEVBQXVCO0FBQzVCLFdBQUtwRCxZQUFMLENBQWtCLENBQWxCLEVBQXFCRSxNQUFyQixHQUE4QixLQUE5QjtBQUNBLFdBQUtGLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJFLE1BQXJCLEdBQThCLElBQTlCO0FBQ1MsV0FBS0osT0FBTCxDQUFhb0MsTUFBYixHQUFzQkcsVUFBVSxDQUFDZ0IsV0FBakM7QUFDQSxXQUFLdEQsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLElBQXJCO0FBQ1Q7QUFDRTtBQTFJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBtdXNpY1RvZ2dsZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ub2dnbGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0dGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdCA6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJhbGFuY2U6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9hZGluZ0xheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdXJlVG9FeGl0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLkxhYmVsXHJcblx0XHR9LFxyXG4gICAgICAgIHByb21wdDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHRcdGVycm9yQnV0dG9uczp7XHJcblx0XHRcdGRlZmF1bHQ6W10sXHJcblx0XHRcdHR5cGU6W2NjLk5vZGVdLFxyXG5cdFx0fSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvcGVuU3VyZVRvRXhpdCgpe1xyXG4gICAgICAgIHRoaXMuc3VyZVRvRXhpdC5hY3RpdmU9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZVN1cmVUb0V4aXQoKXtcclxuICAgICAgICB0aGlzLnN1cmVUb0V4aXQuYWN0aXZlPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiQVBJXCIpO1xyXG4gICAgICAgIHRoaXMuYXBpLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlID10cnVlO1xyXG4gICAgICAgIGNvbnN0IGlzSU9TMTREZXZpY2UgPSBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgJiYgY2Muc3lzLmlzQnJvd3NlciAmJiBjYy5zeXMuaXNNb2JpbGUgJiYgL2lQaG9uZSBPUyAxNC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgaWYgKGlzSU9TMTREZXZpY2UpIHtcclxuICAgICAgICAgICAgY2MuTWVzaEJ1ZmZlci5wcm90b3R5cGUuY2hlY2tBbmRTd2l0Y2hCdWZmZXIgPSBmdW5jdGlvbiAodmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRleE9mZnNldCArIHZlcnRleENvdW50ID4gNjU1MzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXRjaGVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9OyAgICAgXHJcbiAgICAgICAgICAgIGNjLk1lc2hCdWZmZXIucHJvdG90eXBlLmZvcndhcmRJbmRpY2VTdGFydFRvT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZnVsbFNjcmVlbigpe1xyXG5cclxuICAgICAgICBpZihjYy5zY3JlZW4uZnVsbFNjcmVlbigpKXtcclxuICAgICAgICAgICAgY2Muc2NyZWVuLmV4aXRGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLnNjcmVlbi5yZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ3JlZGl0TGFiZWwoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlLnN0cmluZyA9IE1hdGgucm91bmQoZ2xvYmFsRGF0YS5zZXR0aW5ncy5iYWxhbmNlICoxMDApLzEwMDtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG4gICAgYmxhbmtTY3JlZW4oKXtcclxuICAgICAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5sb2JieV91cmwgIT0gbnVsbCAmJiBnbG9iYWxEYXRhLnNldHRpbmdzLmxvYmJ5X3VybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdsb2JhbERhdGEuc2V0dGluZ3MubG9iYnlfdXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiYWJvdXQ6YmxhbmtcIiwgXCJfc2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VTZXR0aW5nKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTGF5ZXIuYWN0aXZlICA9ZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5pc0tpY2tlZCl7XHJcblx0XHRcdHRoaXMuZXJyb3JCdXR0b25zWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVycm9yQnV0dG9uc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc3RyaW5nID0gZ2xvYmFsRGF0YS5raWNrTWVzc2FnZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4131c/FWx9Dd7nWFL8TgiJp', 'AudioManager');
// src/AudioManager.js

"use strict";

var globalData = _interopRequireWildcard(require("GlobalData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    loseAudio: {
      "default": null,
      type: cc.AudioClip
    },
    perfectAudio: {
      "default": null,
      type: cc.AudioClip
    },
    consoAudio: {
      "default": null,
      type: cc.AudioClip
    },
    uiButtonSound: {
      "default": null,
      type: cc.AudioClip
    },
    winAudio: {
      "default": null,
      type: cc.AudioClip
    },
    musicToggle: {
      "default": null,
      type: cc.Toggle
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
  },
  start: function start() {
    if (globalData.getEffectVolume() == 0) {
      this.musicToggle.isChecked = false;
    }
  },
  setVolume: function setVolume(value) {
    cc.audioEngine.setEffectsVolume(globalData.getEffectVolume());
  },
  playWin: function playWin() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.winAudio, false, 1);
    }
  },
  playLoseSound: function playLoseSound() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.loseAudio, false, 1);
    }
  },
  playLandPerfect: function playLandPerfect() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.perfectAudio, false, 1);
    }
  },
  playLandConso: function playLandConso() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.consoAudio, false, 1);
    }
  },
  playUIbuttonSound: function playUIbuttonSound() {
    if (globalData.getEffectVolume() != 0) {
      cc.audioEngine.play(this.uiButtonSound, false, 1);
    }
  },
  toggleMute: function toggleMute() {
    if (this.musicToggle.isChecked) {
      cc.audioEngine.setMusicVolume(1);
      globalData.setEffectVolume(1);
    } else {
      cc.audioEngine.setMusicVolume(0);
      globalData.setEffectVolume(0);
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxBdWRpb01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb3NlQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwicGVyZmVjdEF1ZGlvIiwiY29uc29BdWRpbyIsInVpQnV0dG9uU291bmQiLCJ3aW5BdWRpbyIsIm11c2ljVG9nZ2xlIiwiVG9nZ2xlIiwib25Mb2FkIiwiYXVkaW9FbmdpbmUiLCJzZXRFZmZlY3RzVm9sdW1lIiwiZ2xvYmFsRGF0YSIsImdldEVmZmVjdFZvbHVtZSIsInN0YXJ0IiwiaXNDaGVja2VkIiwic2V0Vm9sdW1lIiwidmFsdWUiLCJwbGF5V2luIiwicGxheSIsInBsYXlMb3NlU291bmQiLCJwbGF5TGFuZFBlcmZlY3QiLCJwbGF5TGFuZENvbnNvIiwicGxheVVJYnV0dG9uU291bmQiLCJ0b2dnbGVNdXRlIiwic2V0TXVzaWNWb2x1bWUiLCJzZXRFZmZlY3RWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVEsSUFERjtBQUVOQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGRixLQWpCRjtBQXNCUkMsSUFBQUEsWUFBWSxFQUFDO0FBQ1QsaUJBQVEsSUFEQztBQUVURixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQyxLQXRCTDtBQTBCUkUsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVEsSUFE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cEhJLENBcUhMOztBQXJISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0ICogYXMgZ2xvYmFsRGF0YSBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBsb3NlQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBlcmZlY3RBdWRpbzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zb0F1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1aUJ1dHRvblNvdW5kOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbkF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCwgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbXVzaWNUb2dnbGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlRvZ2dsZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpPT0wKXtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQ9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0Vm9sdW1lKHZhbHVlKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKGdsb2JhbERhdGEuZ2V0RWZmZWN0Vm9sdW1lKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5V2luKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53aW5BdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlMb3NlU291bmQoKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmxvc2VBdWRpbyxmYWxzZSwxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGxheUxhbmRQZXJmZWN0KCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5wZXJmZWN0QXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlMYW5kQ29uc28oKXtcclxuICAgICAgICBpZihnbG9iYWxEYXRhLmdldEVmZmVjdFZvbHVtZSgpIT0wKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNvbnNvQXVkaW8sZmFsc2UsMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlVSWJ1dHRvblNvdW5kKCl7XHJcbiAgICAgICAgaWYoZ2xvYmFsRGF0YS5nZXRFZmZlY3RWb2x1bWUoKSE9MCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy51aUJ1dHRvblNvdW5kLGZhbHNlLDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVNdXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY1RvZ2dsZS5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5zZXRFZmZlY3RWb2x1bWUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBnbG9iYWxEYXRhLnNldEVmZmVjdFZvbHVtZSgwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/UpdateTicketIdSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe477PxJR5JGIKv8JEaaTwx', 'UpdateTicketIdSystem');
// src/UpdateTicketIdSystem.ts

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
var global = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UpdateTicketIdSystem = /** @class */ (function (_super) {
    __extends(UpdateTicketIdSystem, _super);
    function UpdateTicketIdSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actualTicketId = null;
        _this.actualDemoMode = null;
        _this.label = null;
        return _this;
    }
    UpdateTicketIdSystem.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    UpdateTicketIdSystem.prototype.update = function () {
        if (global.ticket_id == this.actualTicketId && global.isDemo == this.actualDemoMode)
            return;
        this.actualTicketId = global.ticket_id;
        this.actualDemoMode = global.isDemo;
        if (global.isDemo) {
            this.label.string = "DEMO MODE";
        }
        else {
            if (this.actualTicketId == null) {
                this.label.string = "";
            }
            else {
                this.label.string = global.ticket_id;
            }
        }
    };
    UpdateTicketIdSystem = __decorate([
        ccclass
    ], UpdateTicketIdSystem);
    return UpdateTicketIdSystem;
}(cc.Component));
exports.default = UpdateTicketIdSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxVcGRhdGVUaWNrZXRJZFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUM7QUFFakMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUF1QkM7UUF0Qkcsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFvQmpCLENBQUM7SUFsQkcscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDSSxJQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUMzRixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUcsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztTQUNuQzthQUNHO1lBQ0EsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksRUFBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQzFCO2lCQUFJO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDeEM7U0FDSjtJQUNMLENBQUM7SUF0QmdCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBdUJ4QztJQUFELDJCQUFDO0NBdkJELEFBdUJDLENBdkJpRCxFQUFFLENBQUMsU0FBUyxHQXVCN0Q7a0JBdkJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVUaWNrZXRJZFN5c3RlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBhY3R1YWxUaWNrZXRJZCA9IG51bGw7XHJcbiAgICBhY3R1YWxEZW1vTW9kZSA9IG51bGw7XHJcbiAgICBsYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKGdsb2JhbC50aWNrZXRfaWQgPT0gdGhpcy5hY3R1YWxUaWNrZXRJZCAmJiBnbG9iYWwuaXNEZW1vID09IHRoaXMuYWN0dWFsRGVtb01vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFjdHVhbFRpY2tldElkID0gZ2xvYmFsLnRpY2tldF9pZDtcclxuICAgICAgICB0aGlzLmFjdHVhbERlbW9Nb2RlID0gZ2xvYmFsLmlzRGVtbztcclxuICAgICAgICBpZihnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkRFTU8gTU9ERVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLmFjdHVhbFRpY2tldElkID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gZ2xvYmFsLnRpY2tldF9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/Socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79234/ObK1KAJ+O8GLBqwKq', 'Socket');
// src/Network/Socket.js

"use strict";

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MobileDetect = require('mobile-detect');

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  //mg2020
  onLoad: function onLoad() {
    this.mobileDetect = new MobileDetect(window.navigator.userAgent);
  },
  //#region Encryption
  decode: function decode(data) {
    // convert from base64 and return object in string
    return ecrypt.decrypt(data);
  },
  encode: function encode(data) {
    // convert string object to base64 string and return the string
    return ecrypt.encrypt(data);
  },
  socketReceiveAction: function socketReceiveAction(data) {
    if (global.isEncrypt) {
      return JSON.parse(this.decode(data));
    } else {
      return data;
    }
  },
  isParsable: function isParsable(input) {
    try {
      JSON.parse(input);
    } catch (e) {
      return false;
    }

    return true;
  },
  parseDataFormat: function parseDataFormat(data) {
    if (this.isParsable(data) == true) {
      return JSON.parse(data);
    } else {
      return data;
    }
  },
  //#endregion
  connectSocket: function connectSocket(data) {
    cc.log("--------- Connecting Socket ----------------");
    var self = this;
    this.firstConnect = true;
    var device_type = "Desktop";

    if (cc.sys.isMobile) {
      device_type = "Mobile";
    }

    if (cc.sys.isNative) {
      window.io = SocketIO; // window.io = SocketIO || io;

      cc.log("------------ JSB -------------"); // not using bet in ketupat

      if (data == "bet") {
        var tempSocket = io.connect(constant.getSocketURL());
        global.setSocket(tempSocket);
        cc.log(constant.getSocketURL());
      } else {
        var tempSocket = io.connect(constant.getSocketURL());
        global.setSocket(tempSocket);
        cc.log(constant.getSocketURL());
      }
    } else {
      cc.log("------------ default -------------"); // window.io = require('socket.io-client');
      // not using bet in ketupat

      if (data == "bet") {
        cc.log("constant.getSocketURL() = " + constant.getSocketURL());
        var tempSocket = io(constant.getSocketURL());
        global.setSocket(tempSocket);
      } else {
        cc.log("constant.getSocketURL() = " + constant.getSocketURL());
        var tempSocket = io(constant.getSocketURL());
        global.setSocket(tempSocket);
      }
    }

    self.listenEvent();
  },
  listenEvent: function listenEvent() {
    var self = this;
    global.getSocket().on('connect', function () {
      cc.log("Socket Connected");
      if (global.isDemo) return;
      var body = {
        "username": global.settings.username,
        "access_token": global.access_token,
        "game_code": global.game_code,
        "api_url": global.api_url,
        "host_id": global.host_id,
        "user_id": global.settings.user_id,
        "device_type": self.getDeviceType(),
        "browser_type": self.getBrowserType(),
        "os_version": self.getOSversion(),
        "os_type": self.getOSType(),
        "h5_app": global.h5_app,
        "phone_model": self.getPhoneModel(),
        "user_agent": self.getUserAgent()
      };

      if (global.isEncrypt) {
        global.getSocket().emit('subscribe', self.encode(JSON.stringify(body)));
      } else {
        global.getSocket().emit('subscribe', body);
      }
    });
    global.getSocket().on('balance', function (data) {
      data = self.socketReceiveAction(data);
      global.settings.balance = data.after_balance;
      global.finishGeneratingBalance = true;
    });
    global.getSocket().on('reconnecting', function () {
      console.log("reconnecting");
    });
    global.getSocket().on('reconnect', function () {
      console.log("success reconnect");
    });
    global.getSocket().on('getResult', function (data) {
      data = self.socketReceiveAction(data);
      global.ticket_id = data.ticket_id;
      global.settings.balance = data.balance;
      global.consoScore = data.consoleScore;
      global.perfectScore = data.perfectScore;
      global.platform = data.platform;
      global.finishGetData = true;
    });
    global.getSocket().on("cheat", function (data) {
      data = self.socketReceiveAction(data);
      global.errorMessage = data.error;
      global.playerBalance = data.after_balance;
    }), global.getSocket().on('kick-user-maintenance', function (data) {});
    global.getSocket().on('kickUser', function (data) {
      data = self.socketReceiveAction(data);
      global.isKicked = true;
      global.kickMessage = "You have exceeded daily profit limit.";
    });
  },
  removeEventListener: function removeEventListener() {
    global.getSocket().removeEventListener("balance");
    global.getSocket().removeEventListener("reconnecting");
    global.getSocket().removeEventListener("reconnect");
    global.getSocket().removeEventListener("onSubscribeDone");
    global.getSocket().removeEventListener("onResult");
    global.getSocket().removeEventListener("kick-user-maintenance");
    global.getSocket().removeEventListener("kick-user");
  },
  //#region Get Device Info Functions
  getDeviceType: function getDeviceType() {
    if (cc.sys.isMobile) {
      return 1;
    } else if (this.mobileDetect.tablet() != null) {
      return 2;
    } else {
      return 0;
    }
  },
  getBrowserType: function getBrowserType() {
    return cc.sys.browserType + " : " + cc.sys.browserVersion;
  },
  getOSversion: function getOSversion() {
    return cc.sys.osVersion;
  },
  getOSType: function getOSType() {
    switch (cc.sys.os) {
      case "OS X":
        return 3;

      case "Android":
        return 0;

      case "Windows":
        return 2;

      case "Linux":
        return 4;

      case "iOS":
        return 1;

      default:
        return 99;
    }
  },
  getPhoneModel: function getPhoneModel() {
    if (this.mobileDetect.phone() == null) {
      return "Desktop";
    } else {
      return this.mobileDetect.phone();
    }
  },
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxTb2NrZXQuanMiXSwibmFtZXMiOlsiTW9iaWxlRGV0ZWN0IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibW9iaWxlRGV0ZWN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGVjb2RlIiwiZGF0YSIsImVjcnlwdCIsImRlY3J5cHQiLCJlbmNvZGUiLCJlbmNyeXB0Iiwic29ja2V0UmVjZWl2ZUFjdGlvbiIsImdsb2JhbCIsImlzRW5jcnlwdCIsIkpTT04iLCJwYXJzZSIsImlzUGFyc2FibGUiLCJpbnB1dCIsImUiLCJwYXJzZURhdGFGb3JtYXQiLCJjb25uZWN0U29ja2V0IiwibG9nIiwic2VsZiIsImZpcnN0Q29ubmVjdCIsImRldmljZV90eXBlIiwic3lzIiwiaXNNb2JpbGUiLCJpc05hdGl2ZSIsImlvIiwiU29ja2V0SU8iLCJ0ZW1wU29ja2V0IiwiY29ubmVjdCIsImNvbnN0YW50IiwiZ2V0U29ja2V0VVJMIiwic2V0U29ja2V0IiwibGlzdGVuRXZlbnQiLCJnZXRTb2NrZXQiLCJvbiIsImlzRGVtbyIsImJvZHkiLCJzZXR0aW5ncyIsInVzZXJuYW1lIiwiYWNjZXNzX3Rva2VuIiwiZ2FtZV9jb2RlIiwiYXBpX3VybCIsImhvc3RfaWQiLCJ1c2VyX2lkIiwiZ2V0RGV2aWNlVHlwZSIsImdldEJyb3dzZXJUeXBlIiwiZ2V0T1N2ZXJzaW9uIiwiZ2V0T1NUeXBlIiwiaDVfYXBwIiwiZ2V0UGhvbmVNb2RlbCIsImdldFVzZXJBZ2VudCIsImVtaXQiLCJzdHJpbmdpZnkiLCJiYWxhbmNlIiwiYWZ0ZXJfYmFsYW5jZSIsImZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlIiwiY29uc29sZSIsInRpY2tldF9pZCIsImNvbnNvU2NvcmUiLCJjb25zb2xlU2NvcmUiLCJwZXJmZWN0U2NvcmUiLCJwbGF0Zm9ybSIsImZpbmlzaEdldERhdGEiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInBsYXllckJhbGFuY2UiLCJpc0tpY2tlZCIsImtpY2tNZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhYmxldCIsImJyb3dzZXJUeXBlIiwiYnJvd3NlclZlcnNpb24iLCJvc1ZlcnNpb24iLCJvcyIsInBob25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFDQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQTtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsWUFBTCxHQUFvQixJQUFJUCxZQUFKLENBQWlCUSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQWxDLENBQXBCO0FBQ0gsR0FwQkk7QUFzQkw7QUFDQUMsRUFBQUEsTUF2Qkssa0JBdUJFQyxJQXZCRixFQXVCTztBQUNSO0FBQ0EsV0FBT0MsTUFBTSxDQUFDQyxPQUFQLENBQWVGLElBQWYsQ0FBUDtBQUNILEdBMUJJO0FBNEJMRyxFQUFBQSxNQTVCSyxrQkE0QkVILElBNUJGLEVBNEJPO0FBQ1I7QUFDQSxXQUFPQyxNQUFNLENBQUNHLE9BQVAsQ0FBZUosSUFBZixDQUFQO0FBQ0gsR0EvQkk7QUFpQ0xLLEVBQUFBLG1CQWpDSywrQkFpQ2VMLElBakNmLEVBaUNvQjtBQUNyQixRQUFHTSxNQUFNLENBQUNDLFNBQVYsRUFBb0I7QUFDaEIsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS1YsTUFBTCxDQUFZQyxJQUFaLENBQVgsQ0FBUDtBQUNILEtBRkQsTUFHSTtBQUNBLGFBQU9BLElBQVA7QUFDSDtBQUNKLEdBeENJO0FBMENMVSxF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S0FBSzVFLFlBQUwsQ0FBa0I0RSxLQUFsQixFQUFQO0FBQ0g7QUFFSixHQW5PSTtBQW9PTHhCLEVBQUFBLFlBcE9LLDBCQW9PVTtBQUNYLFdBQU9uRCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQXhCO0FBQ0gsR0F0T0ksQ0F1T0w7O0FBdk9LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJlY3J5cHRcIjtcclxudmFyIE1vYmlsZURldGVjdCA9IHJlcXVpcmUoJ21vYmlsZS1kZXRlY3QnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICAvL21nMjAyMFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVEZXRlY3QgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8jcmVnaW9uIEVuY3J5cHRpb25cclxuICAgIGRlY29kZShkYXRhKXtcclxuICAgICAgICAvLyBjb252ZXJ0IGZyb20gYmFzZTY0IGFuZCByZXR1cm4gb2JqZWN0IGluIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBlY3J5cHQuZGVjcnlwdChkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5jb2RlKGRhdGEpe1xyXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIG9iamVjdCB0byBiYXNlNjQgc3RyaW5nIGFuZCByZXR1cm4gdGhlIHN0cmluZ1xyXG4gICAgICAgIHJldHVybiBlY3J5cHQuZW5jcnlwdChkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKXtcclxuICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5kZWNvZGUoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGFyc2FibGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGlucHV0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlRGF0YUZvcm1hdDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYXJzYWJsZShkYXRhKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBjb25uZWN0U29ja2V0OiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0gQ29ubmVjdGluZyBTb2NrZXQgLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maXJzdENvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkZXZpY2VfdHlwZSA9IFwiRGVza3RvcFwiO1xyXG4gICAgICAgIGlmKGNjLnN5cy5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgIGRldmljZV90eXBlID0gXCJNb2JpbGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgd2luZG93LmlvID0gU29ja2V0SU87XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5pbyA9IFNvY2tldElPIHx8IGlvO1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gSlNCIC0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBiZXQgaW4ga2V0dXBhdFxyXG4gICAgICAgICAgICBpZihkYXRhID09IFwiYmV0XCIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTb2NrZXQgPSBpby5jb25uZWN0KGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvLmNvbm5lY3QoY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0gZGVmYXVsdCAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIGJldCBpbiBrZXR1cGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEgPT0gXCJiZXRcIil7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJjb25zdGFudC5nZXRTb2NrZXRVUkwoKSA9IFwiK2NvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU29ja2V0ID0gaW8oY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNldFNvY2tldCh0ZW1wU29ja2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY29uc3RhbnQuZ2V0U29ja2V0VVJMKCkgPSBcIitjb25zdGFudC5nZXRTb2NrZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFNvY2tldCA9IGlvKGNvbnN0YW50LmdldFNvY2tldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5zZXRTb2NrZXQodGVtcFNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYubGlzdGVuRXZlbnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGlzdGVuRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiU29ja2V0IENvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGdsb2JhbC5pc0RlbW8pIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IGdsb2JhbC5zZXR0aW5ncy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWNjZXNzX3Rva2VuXCI6IGdsb2JhbC5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBcImdhbWVfY29kZVwiOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgXCJhcGlfdXJsXCI6IGdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgXCJob3N0X2lkXCI6IGdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IGdsb2JhbC5zZXR0aW5ncy51c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZpY2VfdHlwZVwiOiBzZWxmLmdldERldmljZVR5cGUoKSxcclxuICAgICAgICAgICAgICAgIFwiYnJvd3Nlcl90eXBlXCI6IHNlbGYuZ2V0QnJvd3NlclR5cGUoKSxcclxuICAgICAgICAgICAgICAgIFwib3NfdmVyc2lvblwiOiBzZWxmLmdldE9TdmVyc2lvbigpLFxyXG4gICAgICAgICAgICAgICAgXCJvc190eXBlXCI6IHNlbGYuZ2V0T1NUeXBlKCksXHJcbiAgICAgICAgICAgICAgICBcImg1X2FwcFwiOiBnbG9iYWwuaDVfYXBwLFxyXG4gICAgICAgICAgICAgICAgXCJwaG9uZV9tb2RlbFwiOiBzZWxmLmdldFBob25lTW9kZWwoKSxcclxuICAgICAgICAgICAgICAgIFwidXNlcl9hZ2VudFwiOiBzZWxmLmdldFVzZXJBZ2VudCgpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmlzRW5jcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3N1YnNjcmliZScsIHNlbGYuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGJvZHkpKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc3Vic2NyaWJlJywgYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdiYWxhbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSA9IGRhdGEuYWZ0ZXJfYmFsYW5jZTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3RpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLm9uKCdyZWNvbm5lY3QnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVjb25uZWN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkub24oJ2dldFJlc3VsdCcsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBkYXRhID0gc2VsZi5zb2NrZXRSZWNlaXZlQWN0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICBnbG9iYWwudGlja2V0X2lkID0gZGF0YS50aWNrZXRfaWQ7XHJcbiAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlID0gZGF0YS5iYWxhbmNlO1xyXG4gICAgICAgICAgICBnbG9iYWwuY29uc29TY29yZSA9IGRhdGEuY29uc29sZVNjb3JlO1xyXG4gICAgICAgICAgICBnbG9iYWwucGVyZmVjdFNjb3JlID1kYXRhLnBlcmZlY3RTY29yZTtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gZGF0YS5wbGF0Zm9ybTtcclxuICAgICAgICAgICAgZ2xvYmFsLmZpbmlzaEdldERhdGEgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbihcImNoZWF0XCIsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGRhdGEgPSBzZWxmLnNvY2tldFJlY2VpdmVBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBnbG9iYWwuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcjtcclxuICAgICAgICAgICAgZ2xvYmFsLnBsYXllckJhbGFuY2UgPSBkYXRhLmFmdGVyX2JhbGFuY2U7XHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2ljay11c2VyLW1haW50ZW5hbmNlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5vbigna2lja1VzZXInLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgZGF0YSA9IHNlbGYuc29ja2V0UmVjZWl2ZUFjdGlvbihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbC5pc0tpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGdsb2JhbC5raWNrTWVzc2FnZSA9IFwiWW91IGhhdmUgZXhjZWVkZWQgZGFpbHkgcHJvZml0IGxpbWl0LlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmFsYW5jZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlY29ubmVjdFwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uU3Vic2NyaWJlRG9uZVwiKTtcclxuICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9uUmVzdWx0XCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyLW1haW50ZW5hbmNlXCIpO1xyXG4gICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2ljay11c2VyXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyNyZWdpb24gR2V0IERldmljZSBJbmZvIEZ1bmN0aW9uc1xyXG4gICAgZ2V0RGV2aWNlVHlwZSgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2JpbGVEZXRlY3QudGFibGV0KCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0QnJvd3NlclR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5icm93c2VyVHlwZSArIFwiIDogXCIgKyBjYy5zeXMuYnJvd3NlclZlcnNpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0T1N2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3NWZXJzaW9uO1xyXG4gICAgfSxcclxuICAgIGdldE9TVHlwZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKGNjLnN5cy5vcykge1xyXG4gICAgICAgICAgICBjYXNlIFwiT1MgWFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBbmRyb2lkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgY2FzZSBcIldpbmRvd3NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiTGludXhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiaU9TXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGdldFBob25lTW9kZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlRGV0ZWN0LnBob25lKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEZXNrdG9wXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9iaWxlRGV0ZWN0LnBob25lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBnZXRVc2VyQWdlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgfSxcclxuICAgIC8vI2VuZHJlZ2lvblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/Encrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbaefhUdWpHbpm42ktGYFqT', 'Encrypt');
// src/Network/Encrypt.js

// var ecrypt = (function () {
//     var hash = (function () {
//         var hex_chr = "0123456789abcdef";
//         function rhex(num) {
//             var str = "";
//             for(var j = 0; j <= 3; j++)
//                 str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F);
//             return str;
//         }
//         function str2blks_MD5(str) {
//             var nblk = ((str.length + 8) >> 6) + 1;
//             var blks = new Array(nblk * 16);
//             for(var i = 0; i < nblk * 16; i++) blks[i] = 0;
//             for(var i = 0; i < str.length; i++)
//                 blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
//             blks[i >> 2] |= 0x80 << ((i % 4) * 8);
//             blks[nblk * 16 - 2] = str.length * 8;
//             return blks;
//         }
//         function add(x, y) {
//             var lsw = (x & 0xFFFF) + (y & 0xFFFF);
//             var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
//             return (msw << 16) | (lsw & 0xFFFF);
//         }
//         function rol(num, cnt) {
//             return (num << cnt) | (num >>> (32 - cnt));
//         }
//         function cmn(q, a, b, x, s, t) {
//             return add(rol(add(add(a, q), add(x, t)), s), b);
//         }
//         function ff(a, b, c, d, x, s, t) {
//             return cmn((b & c) | ((~b) & d), a, b, x, s, t);
//         }
//         function gg(a, b, c, d, x, s, t) {
//             return cmn((b & d) | (c & (~d)), a, b, x, s, t);
//         }
//         function hh(a, b, c, d, x, s, t) {
//             return cmn(b ^ c ^ d, a, b, x, s, t);
//         }
//         function ii(a, b, c, d, x, s, t) {
//             return cmn(c ^ (b | (~d)), a, b, x, s, t);
//         }
//         function calcMD5(str) {
//             var x = str2blks_MD5(str);
//             var a =  1732584193;
//             var b = -271733879;
//             var c = -1732584194;
//             var d =  271733878;
//             for(var i = 0; i < x.length; i += 16) {
//                 var olda = a;
//                 var oldb = b;
//                 var oldc = c;
//                 var oldd = d;
//                 a = ff(a, b, c, d, x[i+ 0], 7 , -680876936);
//                 d = ff(d, a, b, c, x[i+ 1], 12, -389564586);
//                 c = ff(c, d, a, b, x[i+ 2], 17,  606105819);
//                 b = ff(b, c, d, a, x[i+ 3], 22, -1044525330);
//                 a = ff(a, b, c, d, x[i+ 4], 7 , -176418897);
//                 d = ff(d, a, b, c, x[i+ 5], 12,  1200080426);
//                 c = ff(c, d, a, b, x[i+ 6], 17, -1473231341);
//                 b = ff(b, c, d, a, x[i+ 7], 22, -45705983);
//                 a = ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
//                 d = ff(d, a, b, c, x[i+ 9], 12, -1958414417);
//                 c = ff(c, d, a, b, x[i+10], 17, -42063);
//                 b = ff(b, c, d, a, x[i+11], 22, -1990404162);
//                 a = ff(a, b, c, d, x[i+12], 7 ,  1804603682);
//                 d = ff(d, a, b, c, x[i+13], 12, -40341101);
//                 c = ff(c, d, a, b, x[i+14], 17, -1502002290);
//                 b = ff(b, c, d, a, x[i+15], 22,  1236535329);
//                 a = gg(a, b, c, d, x[i+ 1], 5 , -165796510);
//                 d = gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
//                 c = gg(c, d, a, b, x[i+11], 14,  643717713);
//                 b = gg(b, c, d, a, x[i+ 0], 20, -373897302);
//                 a = gg(a, b, c, d, x[i+ 5], 5 , -701558691);
//                 d = gg(d, a, b, c, x[i+10], 9 ,  38016083);
//                 c = gg(c, d, a, b, x[i+15], 14, -660478335);
//                 b = gg(b, c, d, a, x[i+ 4], 20, -405537848);
//                 a = gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
//                 d = gg(d, a, b, c, x[i+14], 9 , -1019803690);
//                 c = gg(c, d, a, b, x[i+ 3], 14, -187363961);
//                 b = gg(b, c, d, a, x[i+ 8], 20,  1163531501);
//                 a = gg(a, b, c, d, x[i+13], 5 , -1444681467);
//                 d = gg(d, a, b, c, x[i+ 2], 9 , -51403784);
//                 c = gg(c, d, a, b, x[i+ 7], 14,  1735328473);
//                 b = gg(b, c, d, a, x[i+12], 20, -1926607734);
//                 a = hh(a, b, c, d, x[i+ 5], 4 , -378558);
//                 d = hh(d, a, b, c, x[i+ 8], 11, -2022574463);
//                 c = hh(c, d, a, b, x[i+11], 16,  1839030562);
//                 b = hh(b, c, d, a, x[i+14], 23, -35309556);
//                 a = hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
//                 d = hh(d, a, b, c, x[i+ 4], 11,  1272893353);
//                 c = hh(c, d, a, b, x[i+ 7], 16, -155497632);
//                 b = hh(b, c, d, a, x[i+10], 23, -1094730640);
//                 a = hh(a, b, c, d, x[i+13], 4 ,  681279174);
//                 d = hh(d, a, b, c, x[i+ 0], 11, -358537222);
//                 c = hh(c, d, a, b, x[i+ 3], 16, -722521979);
//                 b = hh(b, c, d, a, x[i+ 6], 23,  76029189);
//                 a = hh(a, b, c, d, x[i+ 9], 4 , -640364487);
//                 d = hh(d, a, b, c, x[i+12], 11, -421815835);
//                 c = hh(c, d, a, b, x[i+15], 16,  530742520);
//                 b = hh(b, c, d, a, x[i+ 2], 23, -995338651);
//                 a = ii(a, b, c, d, x[i+ 0], 6 , -198630844);
//                 d = ii(d, a, b, c, x[i+ 7], 10,  1126891415);
//                 c = ii(c, d, a, b, x[i+14], 15, -1416354905);
//                 b = ii(b, c, d, a, x[i+ 5], 21, -57434055);
//                 a = ii(a, b, c, d, x[i+12], 6 ,  1700485571);
//                 d = ii(d, a, b, c, x[i+ 3], 10, -1894986606);
//                 c = ii(c, d, a, b, x[i+10], 15, -1051523);
//                 b = ii(b, c, d, a, x[i+ 1], 21, -2054922799);
//                 a = ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
//                 d = ii(d, a, b, c, x[i+15], 10, -30611744);
//                 c = ii(c, d, a, b, x[i+ 6], 15, -1560198380);
//                 b = ii(b, c, d, a, x[i+13], 21,  1309151649);
//                 a = ii(a, b, c, d, x[i+ 4], 6 , -145523070);
//                 d = ii(d, a, b, c, x[i+11], 10, -1120210379);
//                 c = ii(c, d, a, b, x[i+ 2], 15,  718787259);
//                 b = ii(b, c, d, a, x[i+ 9], 21, -343485551);
//                 a = add(a, olda);
//                 b = add(b, oldb);
//                 c = add(c, oldc);
//                 d = add(d, oldd);
//             }
//             return rhex(a) + rhex(b) + rhex(c) + rhex(d);
//         }
//         return calcMD5;
//     } ());
//     var Base64 = (function() {
//         "use strict";
//         var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//         var _utf8_encode = function (string) {
//             var utftext = "", c, n;
//             string = string.replace(/\r\n/g,"\n");
//             for (n = 0; n < string.length; n++) {
//                 c = string.charCodeAt(n);
//                 if (c < 128) {
//                     utftext += String.fromCharCode(c);
//                 } else if((c > 127) && (c < 2048)) {
//                     utftext += String.fromCharCode((c >> 6) | 192);
//                     utftext += String.fromCharCode((c & 63) | 128);
//                 } else {
//                     utftext += String.fromCharCode((c >> 12) | 224);
//                     utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//                     utftext += String.fromCharCode((c & 63) | 128);
//                 }
//             }
//             return utftext;
//         };
//         var _utf8_decode = function (utftext) {
//             var string = "", i = 0, c = 0, c1 = 0, c2 = 0;
//             while ( i < utftext.length ) {
//                 c = utftext.charCodeAt(i);
//                 if (c < 128) {
//                     string += String.fromCharCode(c);
//                     i++;
//                 } else if((c > 191) && (c < 224)) {
//                     c1 = utftext.charCodeAt(i+1);
//                     string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
//                     i += 2;
//                 } else {
//                     c1 = utftext.charCodeAt(i+1);
//                     c2 = utftext.charCodeAt(i+2);
//                     string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
//                     i += 3;
//                 }
//             }
//             return string;
//         };
//         var _hexEncode = function(input) {
//             var output = '', i;
//             for(i = 0; i < input.length; i++) {
//                 output += input.charCodeAt(i).toString(16);
//             }
//             return output;
//         };
//         var _hexDecode = function(input) {
//             var output = '', i;
//             if(input.length % 2 > 0) {
//                 input = '0' + input;
//             }
//             for(i = 0; i < input.length; i = i + 2) {
//                 output += String.fromCharCode(parseInt(input.charAt(i) + input.charAt(i + 1), 16));
//             }
//             return output;
//         };
//         var encode = function (input) {
//             var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
//             input = _utf8_encode(input);
//             while (i < input.length) {
//                 chr1 = input.charCodeAt(i++);
//                 chr2 = input.charCodeAt(i++);
//                 chr3 = input.charCodeAt(i++);
//                 enc1 = chr1 >> 2;
//                 enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//                 enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//                 enc4 = chr3 & 63;
//                 if (isNaN(chr2)) {
//                     enc3 = enc4 = 64;
//                 } else if (isNaN(chr3)) {
//                     enc4 = 64;
//                 }
//                 output += _keyStr.charAt(enc1);
//                 output += _keyStr.charAt(enc2);
//                 output += _keyStr.charAt(enc3);
//                 output += _keyStr.charAt(enc4);
//             }
//             return output;
//         };
//         var decode = function (input) {
//             var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
//             input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//             while (i < input.length) {
//                 enc1 = _keyStr.indexOf(input.charAt(i++));
//                 enc2 = _keyStr.indexOf(input.charAt(i++));
//                 enc3 = _keyStr.indexOf(input.charAt(i++));
//                 enc4 = _keyStr.indexOf(input.charAt(i++));
//                 chr1 = (enc1 << 2) | (enc2 >> 4);
//                 chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
//                 chr3 = ((enc3 & 3) << 6) | enc4;
//                 output += String.fromCharCode(chr1);
//                 if (enc3 !== 64) {
//                     output += String.fromCharCode(chr2);
//                 }
//                 if (enc4 !== 64) {
//                     output += String.fromCharCode(chr3);
//                 }
//             }
//             return _utf8_decode(output);
//         };
//         var decodeToHex = function(input) {
//             return _hexEncode(decode(input));
//         };
//         var encodeFromHex = function(input) {
//             return encode(_hexDecode(input));
//         };
//         return {
//             'encode': encode,
//             'decode': decode,
//             'decodeToHex': decodeToHex,
//             'encodeFromHex': encodeFromHex
//         };
//     }());
//     var validPacket = function (packet) {
//         if (packet.length <= 32)
//             return false;
//         // var checksum = packet.substring(0, 32).toLowerCase();
//         // var payload = packet.substring(32);
//         // // check for data integrity
//         // if (hash(payload) != checksum)
//         //     return false;
//         // payload is in base64 format
//         // return payload;
//         return 0;
//     }
//     var base64_encode, base64_decode;
//     if (typeof btoa == 'function') {
//         base64_encode = btoa;
//     } else {
//         base64_encode = Base64.encode;
//     }
//     if (typeof atob == 'function') {
//         base64_decode = atob;
//     } else {
//         base64_decode = Base64.decode;
//     }
//     var encrypt = function (data) {
//         var length = data.length;
//         var encrypted_str = "";
//         if (length > 65535)
//             return false;
//         data = data.split("");
//         data.forEach(function (ch) {
//             var c = ch.charCodeAt(0) ^ length;
//             encrypted_str += String.fromCharCode(c);
//         });
//         var str = String.fromCharCode(length) + encrypted_str;
//         str = encodeURIComponent(str);
//         encrypted_str = base64_encode(str);
//         return hash(encrypted_str) + encrypted_str;
//     }
//     var decrypt = function (packet) {
//         var payload = validPacket(packet);
//         if (!payload)
//             return false;
//         // base64 decode
//         payload = base64_decode(payload);
//         payload = decodeURIComponent(payload);
//         // first character is the length of the actual data string
//         var length = payload.charCodeAt(0);
//         var encrypted_data = payload.substring(1);
//         if (encrypted_data.length != length)
//             return false;
//         var data = "";
//         encrypted_data = encrypted_data.split("");
//         encrypted_data.forEach(function (ch) {
//             var c = ch.charCodeAt(0) ^ length;
//             data += String.fromCharCode(c);
//         });
//         return data;
//     }
//     return {
//         encrypt: encrypt,
//         decrypt: decrypt,
//         b64encode: Base64.encode,
//         b64decode: Base64.decode
//     }
// } ());
// if (typeof module != 'undefined' && module.exports) {
//     module.exports = ecrypt;
// }
"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxFbmNyeXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIGVjcnlwdCA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB2YXIgaGFzaCA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgdmFyIGhleF9jaHIgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcclxuLy8gICAgICAgICBmdW5jdGlvbiByaGV4KG51bSkge1xyXG4vLyAgICAgICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuLy8gICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8PSAzOyBqKyspXHJcbi8vICAgICAgICAgICAgICAgICBzdHIgKz0gaGV4X2Noci5jaGFyQXQoKG51bSA+PiAoaiAqIDggKyA0KSkgJiAweDBGKSArIGhleF9jaHIuY2hhckF0KChudW0gPj4gKGogKiA4KSkgJiAweDBGKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIHN0cjJibGtzX01ENShzdHIpIHtcclxuLy8gICAgICAgICAgICAgdmFyIG5ibGsgPSAoKHN0ci5sZW5ndGggKyA4KSA+PiA2KSArIDE7XHJcbi8vICAgICAgICAgICAgIHZhciBibGtzID0gbmV3IEFycmF5KG5ibGsgKiAxNik7XHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYmxrICogMTY7IGkrKykgYmxrc1tpXSA9IDA7XHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbi8vICAgICAgICAgICAgICAgICBibGtzW2kgPj4gMl0gfD0gc3RyLmNoYXJDb2RlQXQoaSkgPDwgKChpICUgNCkgKiA4KTtcclxuLy8gICAgICAgICAgICAgYmxrc1tpID4+IDJdIHw9IDB4ODAgPDwgKChpICUgNCkgKiA4KTtcclxuLy8gICAgICAgICAgICAgYmxrc1tuYmxrICogMTYgLSAyXSA9IHN0ci5sZW5ndGggKiA4O1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYmxrcztcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGFkZCh4LCB5KSB7XHJcbi8vICAgICAgICAgICAgIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XHJcbi8vICAgICAgICAgICAgIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBmdW5jdGlvbiByb2wobnVtLCBjbnQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZnVuY3Rpb24gY21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGFkZChyb2woYWRkKGFkZChhLCBxKSwgYWRkKHgsIHQpKSwgcyksIGIpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgZnVuY3Rpb24gZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGNtbigoYiAmIGQpIHwgKGMgJiAofmQpKSwgYSwgYiwgeCwgcywgdCk7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBmdW5jdGlvbiBoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGNtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBmdW5jdGlvbiBjYWxjTUQ1KHN0cikge1xyXG4vLyAgICAgICAgICAgICB2YXIgeCA9IHN0cjJibGtzX01ENShzdHIpO1xyXG4vLyAgICAgICAgICAgICB2YXIgYSA9ICAxNzMyNTg0MTkzO1xyXG4vLyAgICAgICAgICAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XHJcbi8vICAgICAgICAgICAgIHZhciBjID0gLTE3MzI1ODQxOTQ7XHJcbi8vICAgICAgICAgICAgIHZhciBkID0gIDI3MTczMzg3ODtcclxuXHJcbi8vICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIG9sZGEgPSBhO1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIG9sZGIgPSBiO1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIG9sZGMgPSBjO1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIG9sZGQgPSBkO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGEgPSBmZihhLCBiLCBjLCBkLCB4W2krIDBdLCA3ICwgLTY4MDg3NjkzNik7XHJcbi8vICAgICAgICAgICAgICAgICBkID0gZmYoZCwgYSwgYiwgYywgeFtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGZmKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBmZihiLCBjLCBkLCBhLCB4W2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGZmKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDcgLCAtMTc2NDE4ODk3KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBmZihkLCBhLCBiLCBjLCB4W2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGZmKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbi8vICAgICAgICAgICAgICAgICBiID0gZmYoYiwgYywgZCwgYSwgeFtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gZmYoYSwgYiwgYywgZCwgeFtpKyA4XSwgNyAsICAxNzcwMDM1NDE2KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBmZihkLCBhLCBiLCBjLCB4W2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGZmKGMsIGQsIGEsIGIsIHhbaSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gZmYoYSwgYiwgYywgZCwgeFtpKzEyXSwgNyAsICAxODA0NjAzNjgyKTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBmZihkLCBhLCBiLCBjLCB4W2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuLy8gICAgICAgICAgICAgICAgIGMgPSBmZihjLCBkLCBhLCBiLCB4W2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGdnKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDUgLCAtMTY1Nzk2NTEwKTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krIDZdLCA5ICwgLTEwNjk1MDE2MzIpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGdnKGMsIGQsIGEsIGIsIHhbaSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gZ2coYSwgYiwgYywgZCwgeFtpKyA1XSwgNSAsIC03MDE1NTg2OTEpO1xyXG4vLyAgICAgICAgICAgICAgICAgZCA9IGdnKGQsIGEsIGIsIGMsIHhbaSsxMF0sIDkgLCAgMzgwMTYwODMpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGdnKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gZ2coYSwgYiwgYywgZCwgeFtpKyA5XSwgNSAsICA1Njg0NDY0MzgpO1xyXG4vLyAgICAgICAgICAgICAgICAgZCA9IGdnKGQsIGEsIGIsIGMsIHhbaSsxNF0sIDkgLCAtMTAxOTgwMzY5MCk7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gZ2coYywgZCwgYSwgYiwgeFtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGdnKGIsIGMsIGQsIGEsIHhbaSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gZ2coYSwgYiwgYywgZCwgeFtpKzEzXSwgNSAsIC0xNDQ0NjgxNDY3KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krIDJdLCA5ICwgLTUxNDAzNzg0KTtcclxuLy8gICAgICAgICAgICAgICAgIGMgPSBnZyhjLCBkLCBhLCBiLCB4W2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGdnKGIsIGMsIGQsIGEsIHhbaSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGhoKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDQgLCAtMzc4NTU4KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGhoKGMsIGQsIGEsIGIsIHhbaSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbi8vICAgICAgICAgICAgICAgICBiID0gaGgoYiwgYywgZCwgYSwgeFtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XHJcbi8vICAgICAgICAgICAgICAgICBhID0gaGgoYSwgYiwgYywgZCwgeFtpKyAxXSwgNCAsIC0xNTMwOTkyMDYwKTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGhoKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBoaChiLCBjLCBkLCBhLCB4W2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGhoKGEsIGIsIGMsIGQsIHhbaSsxM10sIDQgLCAgNjgxMjc5MTc0KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gaGgoYywgZCwgYSwgYiwgeFtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGhoKGIsIGMsIGQsIGEsIHhbaSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGhoKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDQgLCAtNjQwMzY0NDg3KTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gaGgoYywgZCwgYSwgYiwgeFtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4vLyAgICAgICAgICAgICAgICAgYiA9IGhoKGIsIGMsIGQsIGEsIHhbaSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBhID0gaWkoYSwgYiwgYywgZCwgeFtpKyAwXSwgNiAsIC0xOTg2MzA4NDQpO1xyXG4vLyAgICAgICAgICAgICAgICAgZCA9IGlpKGQsIGEsIGIsIGMsIHhbaSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gaWkoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuLy8gICAgICAgICAgICAgICAgIGEgPSBpaShhLCBiLCBjLCBkLCB4W2krMTJdLCA2ICwgIDE3MDA0ODU1NzEpO1xyXG4vLyAgICAgICAgICAgICAgICAgZCA9IGlpKGQsIGEsIGIsIGMsIHhbaSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gaWkoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGlpKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDYgLCAgMTg3MzMxMzM1OSk7XHJcbi8vICAgICAgICAgICAgICAgICBkID0gaWkoZCwgYSwgYiwgYywgeFtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gaWkoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGlpKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDYgLCAtMTQ1NTIzMDcwKTtcclxuLy8gICAgICAgICAgICAgICAgIGQgPSBpaShkLCBhLCBiLCBjLCB4W2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4vLyAgICAgICAgICAgICAgICAgYyA9IGlpKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYSA9IGFkZChhLCBvbGRhKTtcclxuLy8gICAgICAgICAgICAgICAgIGIgPSBhZGQoYiwgb2xkYik7XHJcbi8vICAgICAgICAgICAgICAgICBjID0gYWRkKGMsIG9sZGMpO1xyXG4vLyAgICAgICAgICAgICAgICAgZCA9IGFkZChkLCBvbGRkKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICByZXR1cm4gcmhleChhKSArIHJoZXgoYikgKyByaGV4KGMpICsgcmhleChkKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHJldHVybiBjYWxjTUQ1O1xyXG4vLyAgICAgfSAoKSk7XHJcblxyXG4vLyAgICAgdmFyIEJhc2U2NCA9IChmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vICAgICAgICAgdmFyIF9rZXlTdHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XHJcblxyXG4vLyAgICAgICAgIHZhciBfdXRmOF9lbmNvZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcblxyXG4vLyAgICAgICAgICAgICB2YXIgdXRmdGV4dCA9IFwiXCIsIGMsIG47XHJcblxyXG4vLyAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7XHJcblxyXG4vLyAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgcmV0dXJuIHV0ZnRleHQ7XHJcbi8vICAgICAgICAgfTtcclxuXHJcbi8vICAgICAgICAgdmFyIF91dGY4X2RlY29kZSA9IGZ1bmN0aW9uICh1dGZ0ZXh0KSB7XHJcbi8vICAgICAgICAgICAgIHZhciBzdHJpbmcgPSBcIlwiLCBpID0gMCwgYyA9IDAsIGMxID0gMCwgYzIgPSAwO1xyXG5cclxuLy8gICAgICAgICAgICAgd2hpbGUgKCBpIDwgdXRmdGV4dC5sZW5ndGggKSB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpKys7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYzEgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzEgJiA2MykpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGkgKz0gMjtcclxuXHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBjMSA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzEgJiA2MykgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGkgKz0gMztcclxuXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4vLyAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIHZhciBfaGV4RW5jb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcclxuLy8gICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnLCBpO1xyXG5cclxuLy8gICAgICAgICAgICAgZm9yKGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIG91dHB1dCArPSBpbnB1dC5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICB2YXIgX2hleERlY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcbi8vICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJywgaTtcclxuXHJcbi8vICAgICAgICAgICAgIGlmKGlucHV0Lmxlbmd0aCAlIDIgPiAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpbnB1dCA9ICcwJyArIGlucHV0O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgPSBpICsgMikge1xyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaW5wdXQuY2hhckF0KGkpICsgaW5wdXQuY2hhckF0KGkgKyAxKSwgMTYpKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbi8vICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBcIlwiLCBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0LCBpID0gMDtcclxuXHJcbi8vICAgICAgICAgICAgIGlucHV0ID0gX3V0ZjhfZW5jb2RlKGlucHV0KTtcclxuXHJcbi8vICAgICAgICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuLy8gICAgICAgICAgICAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbi8vICAgICAgICAgICAgICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGVuYzEgPSBjaHIxID4+IDI7XHJcbi8vICAgICAgICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcclxuLy8gICAgICAgICAgICAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcclxuLy8gICAgICAgICAgICAgICAgIGVuYzQgPSBjaHIzICYgNjM7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IF9rZXlTdHIuY2hhckF0KGVuYzEpO1xyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IF9rZXlTdHIuY2hhckF0KGVuYzIpO1xyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IF9rZXlTdHIuY2hhckF0KGVuYzMpO1xyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IF9rZXlTdHIuY2hhckF0KGVuYzQpO1xyXG5cclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICB2YXIgZGVjb2RlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbi8vICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBcIlwiLCBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0LCBpID0gMDtcclxuXHJcbi8vICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xyXG5cclxuLy8gICAgICAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBlbmMxID0gX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuLy8gICAgICAgICAgICAgICAgIGVuYzIgPSBfa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4vLyAgICAgICAgICAgICAgICAgZW5jMyA9IF9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbi8vICAgICAgICAgICAgICAgICBlbmM0ID0gX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcclxuLy8gICAgICAgICAgICAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcclxuLy8gICAgICAgICAgICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGVuYzMgIT09IDY0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZW5jNCAhPT0gNjQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIHJldHVybiBfdXRmOF9kZWNvZGUob3V0cHV0KTtcclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICB2YXIgZGVjb2RlVG9IZXggPSBmdW5jdGlvbihpbnB1dCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gX2hleEVuY29kZShkZWNvZGUoaW5wdXQpKTtcclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICB2YXIgZW5jb2RlRnJvbUhleCA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBlbmNvZGUoX2hleERlY29kZShpbnB1dCkpO1xyXG4vLyAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgICdlbmNvZGUnOiBlbmNvZGUsXHJcbi8vICAgICAgICAgICAgICdkZWNvZGUnOiBkZWNvZGUsXHJcbi8vICAgICAgICAgICAgICdkZWNvZGVUb0hleCc6IGRlY29kZVRvSGV4LFxyXG4vLyAgICAgICAgICAgICAnZW5jb2RlRnJvbUhleCc6IGVuY29kZUZyb21IZXhcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSgpKTtcclxuXHJcbi8vICAgICB2YXIgdmFsaWRQYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XHJcbi8vICAgICAgICAgaWYgKHBhY2tldC5sZW5ndGggPD0gMzIpXHJcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbi8vICAgICAgICAgLy8gdmFyIGNoZWNrc3VtID0gcGFja2V0LnN1YnN0cmluZygwLCAzMikudG9Mb3dlckNhc2UoKTtcclxuLy8gICAgICAgICAvLyB2YXIgcGF5bG9hZCA9IHBhY2tldC5zdWJzdHJpbmcoMzIpO1xyXG5cclxuLy8gICAgICAgICAvLyAvLyBjaGVjayBmb3IgZGF0YSBpbnRlZ3JpdHlcclxuLy8gICAgICAgICAvLyBpZiAoaGFzaChwYXlsb2FkKSAhPSBjaGVja3N1bSlcclxuLy8gICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuLy8gICAgICAgICAvLyBwYXlsb2FkIGlzIGluIGJhc2U2NCBmb3JtYXRcclxuLy8gICAgICAgICAvLyByZXR1cm4gcGF5bG9hZDtcclxuLy8gICAgICAgICByZXR1cm4gMDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB2YXIgYmFzZTY0X2VuY29kZSwgYmFzZTY0X2RlY29kZTtcclxuXHJcbi8vICAgICBpZiAodHlwZW9mIGJ0b2EgPT0gJ2Z1bmN0aW9uJykge1xyXG4vLyAgICAgICAgIGJhc2U2NF9lbmNvZGUgPSBidG9hO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBiYXNlNjRfZW5jb2RlID0gQmFzZTY0LmVuY29kZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpZiAodHlwZW9mIGF0b2IgPT0gJ2Z1bmN0aW9uJykge1xyXG4vLyAgICAgICAgIGJhc2U2NF9kZWNvZGUgPSBhdG9iO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBiYXNlNjRfZGVjb2RlID0gQmFzZTY0LmRlY29kZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB2YXIgZW5jcnlwdCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICAgICAgdmFyIGxlbmd0aCA9IGRhdGEubGVuZ3RoO1xyXG4vLyAgICAgICAgIHZhciBlbmNyeXB0ZWRfc3RyID0gXCJcIjtcclxuLy8gICAgICAgICBpZiAobGVuZ3RoID4gNjU1MzUpXHJcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcIlwiKTtcclxuLy8gICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGNoKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBjID0gY2guY2hhckNvZGVBdCgwKSBeIGxlbmd0aDtcclxuLy8gICAgICAgICAgICAgZW5jcnlwdGVkX3N0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHZhciBzdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxlbmd0aCkgKyBlbmNyeXB0ZWRfc3RyO1xyXG4vLyAgICAgICAgIHN0ciA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIpO1xyXG4vLyAgICAgICAgIGVuY3J5cHRlZF9zdHIgPSBiYXNlNjRfZW5jb2RlKHN0cik7XHJcbi8vICAgICAgICAgcmV0dXJuIGhhc2goZW5jcnlwdGVkX3N0cikgKyBlbmNyeXB0ZWRfc3RyO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHZhciBkZWNyeXB0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xyXG4vLyAgICAgICAgIHZhciBwYXlsb2FkID0gdmFsaWRQYWNrZXQocGFja2V0KTtcclxuLy8gICAgICAgICBpZiAoIXBheWxvYWQpXHJcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgICAgICAvLyBiYXNlNjQgZGVjb2RlXHJcbi8vICAgICAgICAgcGF5bG9hZCA9IGJhc2U2NF9kZWNvZGUocGF5bG9hZCk7XHJcbi8vICAgICAgICAgcGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChwYXlsb2FkKTtcclxuLy8gICAgICAgICAvLyBmaXJzdCBjaGFyYWN0ZXIgaXMgdGhlIGxlbmd0aCBvZiB0aGUgYWN0dWFsIGRhdGEgc3RyaW5nXHJcbi8vICAgICAgICAgdmFyIGxlbmd0aCA9IHBheWxvYWQuY2hhckNvZGVBdCgwKTtcclxuLy8gICAgICAgICB2YXIgZW5jcnlwdGVkX2RhdGEgPSBwYXlsb2FkLnN1YnN0cmluZygxKTtcclxuLy8gICAgICAgICBpZiAoZW5jcnlwdGVkX2RhdGEubGVuZ3RoICE9IGxlbmd0aClcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgICAgIHZhciBkYXRhID0gXCJcIjtcclxuLy8gICAgICAgICBlbmNyeXB0ZWRfZGF0YSA9IGVuY3J5cHRlZF9kYXRhLnNwbGl0KFwiXCIpO1xyXG4vLyAgICAgICAgIGVuY3J5cHRlZF9kYXRhLmZvckVhY2goZnVuY3Rpb24gKGNoKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBjID0gY2guY2hhckNvZGVBdCgwKSBeIGxlbmd0aDtcclxuLy8gICAgICAgICAgICAgZGF0YSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHJldHVybiBkYXRhO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgZW5jcnlwdDogZW5jcnlwdCxcclxuLy8gICAgICAgICBkZWNyeXB0OiBkZWNyeXB0LFxyXG4vLyAgICAgICAgIGI2NGVuY29kZTogQmFzZTY0LmVuY29kZSxcclxuLy8gICAgICAgICBiNjRkZWNvZGU6IEJhc2U2NC5kZWNvZGVcclxuLy8gICAgIH1cclxuLy8gfSAoKSk7XHJcblxyXG4vLyBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4vLyAgICAgbW9kdWxlLmV4cG9ydHMgPSBlY3J5cHQ7XHJcbi8vIH0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/ecrypt_New.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
"use strict";
cc._RF.push(module, 'ebb2ccPVCNOS4TAkoLEjOaF', 'ecrypt_New');
// src/Network/ecrypt_New.js

"use strict";

var ecrypt = function () {
  var hash = function () {
    var hex_chr = "0123456789abcdef";

    function rhex(num) {
      var str = "";

      for (var j = 0; j <= 3; j++) {
        str += hex_chr.charAt(num >> j * 8 + 4 & 0x0F) + hex_chr.charAt(num >> j * 8 & 0x0F);
      }

      return str;
    }

    function str2blks_MD5(str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);

      for (var i = 0; i < nblk * 16; i++) {
        blks[i] = 0;
      }

      for (var i = 0; i < str.length; i++) {
        blks[i >> 2] |= str.charCodeAt(i) << i % 4 * 8;
      }

      blks[i >> 2] |= 0x80 << i % 4 * 8;
      blks[nblk * 16 - 2] = str.length * 8;
      return blks;
    }

    function add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    }

    function rol(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }

    function cmn(q, a, b, x, s, t) {
      return add(rol(add(add(a, q), add(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    function calcMD5(str) {
      var x = str2blks_MD5(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = add(a, olda);
        b = add(b, oldb);
        c = add(c, oldc);
        d = add(d, oldd);
      }

      return rhex(a) + rhex(b) + rhex(c) + rhex(d);
    }

    return calcMD5;
  }();

  var validPacket = function validPacket(packet) {
    if (packet.length <= 32) return false;
    var checksum = packet.substring(0, 32).toLowerCase();
    var payload = packet.substring(32); // check for data integrity

    if (hash(payload) != checksum) return false; // payload is in base64 format

    return payload;
  };

  var base64_encode, base64_decode;

  if (typeof btoa == 'function') {
    base64_encode = btoa;
  } else {
    base64_encode = function base64_encode(data) {
      var buffer = Buffer.from(data, 'utf8');
      return buffer.toString('base64');
    };
  }

  if (typeof atob == 'function') {
    base64_decode = atob;
  } else {
    base64_decode = function base64_decode(data) {
      var buffer = Buffer.from(data, 'base64');
      return buffer.toString();
    };
  }

  var encrypt = function encrypt(data) {
    var length = data.length;
    var encrypted_str = "";
    if (length > 65535) return false;
    data = data.split("");
    data.forEach(function (ch) {
      var c = ch.charCodeAt(0) ^ length;
      encrypted_str += String.fromCharCode(c);
    });
    var str = String.fromCharCode(length) + encrypted_str;
    str = encodeURIComponent(str);
    encrypted_str = base64_encode(str);
    return hash(encrypted_str) + encrypted_str;
  };

  var decrypt = function decrypt(packet) {
    var payload = validPacket(packet);
    if (!payload) return false; // base64 decode

    payload = base64_decode(payload);
    payload = decodeURIComponent(payload); // first character is the length of the actual data string

    var length = payload.charCodeAt(0);
    var encrypted_data = payload.substring(1);
    if (encrypted_data.length != length) return false;
    var data = "";
    encrypted_data = encrypted_data.split("");
    encrypted_data.forEach(function (ch) {
      var c = ch.charCodeAt(0) ^ length;
      data += String.fromCharCode(c);
    });
    return data;
  };

  return {
    encrypt: encrypt,
    decrypt: decrypt
  };
}();

if (typeof module != 'undefined' && module.exports) {
  module.exports = ecrypt;
}

cc._RF.pop();

}).call(this,require("buffer").Buffer)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXHNyY1xcTmV0d29ya1xcZWNyeXB0X05ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLE1BQU0sR0FBSSxZQUFZO0FBQ3pCLE1BQUksSUFBSSxHQUFJLFlBQVk7QUFDdkIsUUFBSSxPQUFPLEdBQUcsa0JBQWQ7O0FBQ0EsYUFBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNsQixVQUFJLEdBQUcsR0FBRyxFQUFWOztBQUNBLFdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBWixFQUFlLENBQUMsSUFBSSxDQUFwQixFQUF1QixDQUFDLEVBQXhCO0FBQ0MsUUFBQSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQVIsQ0FBZ0IsR0FBRyxJQUFLLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBakIsR0FBdUIsSUFBdEMsSUFBOEMsT0FBTyxDQUFDLE1BQVIsQ0FBZ0IsR0FBRyxJQUFLLENBQUMsR0FBRyxDQUFiLEdBQW1CLElBQWxDLENBQXJEO0FBREQ7O0FBRUEsYUFBTyxHQUFQO0FBQ0E7O0FBRUQsYUFBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCO0FBQzFCLFVBQUksSUFBSSxHQUFHLENBQUUsR0FBRyxDQUFDLE1BQUosR0FBYSxDQUFkLElBQW9CLENBQXJCLElBQTBCLENBQXJDO0FBQ0EsVUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFKLENBQVUsSUFBSSxHQUFHLEVBQWpCLENBQVg7O0FBQ0EsV0FBSSxJQUFJLENBQUMsR0FBRyxDQUFaLEVBQWUsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUExQixFQUE4QixDQUFDLEVBQS9CO0FBQW1DLFFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQVY7QUFBbkM7O0FBQ0EsV0FBSSxJQUFJLENBQUMsR0FBRyxDQUFaLEVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUF2QixFQUErQixDQUFDLEVBQWhDO0FBQ0MsUUFBQSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQU4s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LEdBQUcsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsQ0FBbkIsQ0FBYjtBQUNBLFFBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFSLENBQWtCLENBQWxCLENBQXJCO0FBQ0EsUUFBSSxjQUFjLENBQUMsTUFBZixJQUF5QixNQUE3QixFQUNDLE9BQU8sS0FBUDtBQUNELFFBQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxJQUFBLGNBQWMsR0FBRyxjQUFjLENBQUMsS0FBZixDQUFxQixFQUFyQixDQUFqQjtBQUNBLElBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsVUFBVSxFQUFWLEVBQWM7QUFDcEMsVUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQUgsQ0FBYyxDQUFkLElBQW1CLE1BQTNCO0FBQ0EsTUFBQSxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVAsQ0FBb0IsQ0FBcEIsQ0FBUjtBQUNBLEtBSEQ7QUFJQSxXQUFPLElBQVA7QUFDQSxHQW5CRDs7QUFxQkEsU0FBTztBQUNOLElBQUEsT0FBTyxFQUFFLE9BREg7QUFFTixJQUFBLE9BQU8sRUFBRTtBQUZILEdBQVA7QUFJQSxDQTNOYSxFQUFkOztBQTZOQSxJQUFJLE9BQU8sTUFBUCxJQUFpQixXQUFqQixJQUFnQyxNQUFNLENBQUMsT0FBM0MsRUFBb0Q7QUFDbkQsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFqQjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/PlayerDieEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0598aP9w/pK4qHQkgTWsX9/', 'PlayerDieEvent');
// src/events/PlayerDieEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDieEvent = void 0;
var PlayerDieEvent = /** @class */ (function (_super) {
    __extends(PlayerDieEvent, _super);
    function PlayerDieEvent() {
        return _super.call(this, PlayerDieEvent.NAME, true) || this;
    }
    PlayerDieEvent.NAME = "PlayerDie";
    return PlayerDieEvent;
}(cc.Event.EventCustom));
exports.PlayerDieEvent = PlayerDieEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFBsYXllckRpZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFvQyxrQ0FBb0I7SUFHcEQ7ZUFDSSxrQkFBTSxjQUFjLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBSnNCLG1CQUFJLEdBQUcsV0FBVyxDQUFDO0lBTTlDLHFCQUFDO0NBUEQsQUFPQyxDQVBtQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FPdkQ7QUFQWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQbGF5ZXJEaWVFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkFNRSA9IFwiUGxheWVyRGllXCI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFBsYXllckRpZUV2ZW50Lk5BTUUsdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/ecrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
"use strict";
cc._RF.push(module, 'adad0mVM8NGpq8fhr3dD8mr', 'ecrypt');
// src/Network/ecrypt.js

"use strict";

var ecrypt = function () {
  var hash = function () {
    var hex_chr = "0123456789abcdef";

    function rhex(num) {
      var str = "";

      for (var j = 0; j <= 3; j++) {
        str += hex_chr.charAt(num >> j * 8 + 4 & 0x0F) + hex_chr.charAt(num >> j * 8 & 0x0F);
      }

      return str;
    }

    function str2blks_MD5(str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);

      for (var i = 0; i < nblk * 16; i++) {
        blks[i] = 0;
      }

      for (var i = 0; i < str.length; i++) {
        blks[i >> 2] |= str.charCodeAt(i) << i % 4 * 8;
      }

      blks[i >> 2] |= 0x80 << i % 4 * 8;
      blks[nblk * 16 - 2] = str.length * 8;
      return blks;
    }

    function add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    }

    function subtract(x, y) {
      var lsw = (x & 0xFFFF) - (y & 0xFFFF);
      var msw = (x >> 16) - (y >> 16) - (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    }

    function rol(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }

    function cmn(q, a, b, x, s, t) {
      return add(rol(add(add(a, q), add(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    function calcMD5(str) {
      var x = str2blks_MD5(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = add(a, olda);
        b = add(b, oldb);
        c = add(c, oldc);
        d = add(d, oldd);
      }

      return rhex(a) + rhex(b) + rhex(c) + rhex(d);
    }

    return calcMD5;
  }();

  var validPacket = function validPacket(packet) {
    if (packet.length <= 32) return false;
    var checksum = packet.substring(0, 32).toLowerCase();
    var payload = packet.substring(32); // check for data integrity

    if (hash(payload) != checksum) return false; // payload is in base64 format

    return payload;
  };

  var base64_encode, base64_decode;

  if (typeof btoa == 'function') {
    base64_encode = btoa;
  } else {
    base64_encode = function base64_encode(data) {
      var buffer = Buffer.from(data, 'utf8');
      return buffer.toString('base64');
    };
  }

  if (typeof atob == 'function') {
    base64_decode = atob;
  } else {
    base64_decode = function base64_decode(data) {
      var buffer = Buffer.from(data, 'base64');
      return buffer.toString();
    };
  }

  var encrypt = function encrypt(data) {
    var length = data.length; // console.log(data);

    var encrypted_str = "";
    if (length > 65535) return false; // console.log("Before swap",data, data.length);

    for (var i = 0; i < Math.floor(data.length / 2); i++) {
      data = swapStr(data, i, data.length - 1 - i);
    } // console.log("After Swap",data);


    data = data.split('');
    data.forEach(function (ch) {
      var c = ch.charCodeAt(0) ^ length;
      encrypted_str += String.fromCharCode(c);
    }); // console.log("encrypted_str",encrypted_str);

    var str = String.fromCharCode(length) + encrypted_str;
    str = encodeURIComponent(str);
    encrypted_str = base64_encode(str); // console.log(encrypted_str);

    return hash(encrypted_str) + encrypted_str;
  };

  var swapStr = function swapStr(str, first, last) {
    var arr = str.split('');
    swap(arr, first, last); // Your swap function

    return arr.join('');
  };

  var swap = function swap(str, first, last) {
    var tmp = str[first];
    str[first] = str[last];
    str[last] = tmp;
  };

  var decrypt = function decrypt(packet) {
    var payload = validPacket(packet);
    if (!payload) return false; // base64 decode

    payload = base64_decode(payload);
    payload = decodeURIComponent(payload); // first character is the length of the actual data string

    var length = payload.charCodeAt(0);
    var encrypted_data = payload.substring(1);
    if (encrypted_data.length != length) return false; // encrypted_data = swapStr(encrypted_data, 0 , encrypted_data.length-1);

    var data = "";
    encrypted_data = encrypted_data.split('');
    encrypted_data.forEach(function (ch) {
      var c = ch.charCodeAt(0) ^ length;
      data += String.fromCharCode(c);
    });

    for (var i = 0; i < Math.floor(data.length / 2); i++) {
      data = swapStr(data, i, data.length - 1 - i);
    }

    return data;
  };

  return {
    encrypt: encrypt,
    decrypt: decrypt
  };
}();

if (typeof module != 'undefined' && module.exports) {
  module.exports = ecrypt;
}

cc._RF.pop();

}).call(this,require("buffer").Buffer)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXHNyY1xcTmV0d29ya1xcZWNyeXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksTUFBTSxHQUFJLFlBQVk7QUFDekIsTUFBSSxJQUFJLEdBQUksWUFBWTtBQUN2QixRQUFJLE9BQU8sR0FBRyxrQkFBZDs7QUFDQSxhQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2xCLFVBQUksR0FBRyxHQUFHLEVBQVY7O0FBQ0EsV0FBSSxJQUFJLENBQUMsR0FBRyxDQUFaLEVBQWUsQ0FBQyxJQUFJLENBQXBCLEVBQXVCLENBQUMsRUFBeEI7QUFDQyxRQUFBLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBUixDQUFnQixHQUFHLElBQUssQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFqQixHQUF1QixJQUF0QyxJQUE4QyxPQUFPLENBQUMsTUFBUixDQUFnQixHQUFHLElBQUssQ0FBQyxHQUFHLENBQWIsR0FBbUIsSUFBbEMsQ0FBckQ7QUFERDs7QUFFQSxhQUFPLEdBQVA7QUFDQTs7QUFFRCxhQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkI7QUFDMUIsVUFBSSxJQUFJLEdBQUcsQ0FBRSxHQUFHLENBQUMsTUFBSixHQUFhLENBQWQsSUFBb0IsQ0FBckIsSUFBMEIsQ0FBckM7QUFDQSxVQUFJLElBQUksR0FBRyxJQUFJLEtBQUosQ0FBVSxJQUFJLEdBQUcsRUFBakIsQ0FBWDs7QUFDQSxXQUFJLElBQUksQ0FBQyxHQUFHLENBQVosRUFBZSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQTFCLEVBQThCLENBQUMsRUFBL0I7QUFBbUMsUUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBVjtBQUFuQzs7QUFDQSxXQUFJLElBQUksQ0FBQyxHQUFHLENBQVosRUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQXZCLEVBQStCLENBQUMsRUFBaEM7QUFDQyxRQUFBLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBTixDQUFK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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/stage/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '007507xQ0hEcbmFDxV+eRZJ', 'Block');
// src/components/game/stage/Block.ts

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
exports.Block = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxScale = 0;
        _this.minScale = 0;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.anchorOffset = 0;
        _this.score = 1;
        _this.rightAnchorList = [];
        _this.leftAnchorList = [];
        _this.centerAnchor = null;
        _this.p1 = null;
        _this.p2 = null;
        _this.localPlayerPos = null;
        _this.trueScore = 0;
        return _this;
        // public shrink() {
        //     // cc.find("sprite",this.node).runAction(cc.scaleTo(2,1,0.5));
        //     this.node.runAction(cc.scaleTo(2,1,0.5));
        // }
        // public stopShrink() {
        //     // cc.find("sprite",this.node).stopAllActions();
        //     this.node.stopAllActions();
        // }
        // public enlarge() {
        //     cc.find("sprite",this.node).runAction(cc.scaleTo(1,1,1));
        //     this.node.runAction(cc.scaleTo(1,1,1));
        // }
    }
    Block.prototype.getCenterPosition = function () {
        return this.centerAnchor.parent.convertToWorldSpaceAR(this.centerAnchor.position);
    };
    Block.prototype.getAnchorLocation = function (worldPos, direction, platformState) {
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        var anchorList = direction > 0 ? this.rightAnchorList : this.leftAnchorList;
        var nearAnchor = anchorList[0];
        var farAnchor = anchorList[0];
        for (var i = 1; i < anchorList.length; i++) {
            if (anchorList[i].position.sub(localPos).mag() < nearAnchor.position.sub(localPos).mag()) {
                nearAnchor = anchorList[i];
            }
            else {
                farAnchor = anchorList[i];
            }
        }
        if (nearAnchor.position.sub(localPos).mag() <= this.anchorOffset) {
            if (platformState == 1) {
                this.localPlayerPos = nearAnchor.position;
            }
            else {
                this.localPlayerPos = farAnchor.position;
            }
            this.stopAllAction(platformState);
            this.trueScore = this.getScore(platformState);
            return nearAnchor.parent.convertToWorldSpaceAR(nearAnchor.position);
        }
        else {
            return null;
        }
    };
    Block.prototype.getLeftTan = function () {
        return this.p1.y / (-this.p1.x);
    };
    Block.prototype.getRightTan = function () {
        cc.log(this.p2.y / this.p2.x);
        return this.p2.y / this.p2.x;
    };
    Block.prototype.playScoreAnim = function () {
        cc.find("score", this.node).parent = cc.find("Canvas/stage/ScoreLayer");
        cc.find("score", this.node).getComponent(cc.Label).string = "+" + Math.round(this.trueScore * 10) / 10;
        cc.find("score", this.node).getComponent(cc.Animation).play();
    };
    Block.prototype.getScore = function (platformState) {
        return cc.find("perfectScore", this.node).getComponent("ScoreMoving").getScore(platformState);
    };
    Block.prototype.stopAllAction = function (platformState) {
        cc.find("perfectScore", this.node).getComponent("ScoreMoving").stopAll(this.localPlayerPos, platformState);
    };
    Block.prototype.closePerfectScore = function () {
        cc.find("perfectScore", this.node).active = false;
    };
    __decorate([
        property(cc.Float)
    ], Block.prototype, "maxScale", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "minScale", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "minDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "maxDistance", void 0);
    __decorate([
        property(cc.Float)
    ], Block.prototype, "anchorOffset", void 0);
    __decorate([
        property(cc.Integer)
    ], Block.prototype, "score", void 0);
    __decorate([
        property([cc.Node])
    ], Block.prototype, "rightAnchorList", void 0);
    __decorate([
        property([cc.Node])
    ], Block.prototype, "leftAnchorList", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "centerAnchor", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "p1", void 0);
    __decorate([
        property(cc.Node)
    ], Block.prototype, "p2", void 0);
    __decorate([
        property(cc.Vec2)
    ], Block.prototype, "localPlayerPos", void 0);
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.Block = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBMEdDO1FBdkdVLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixFQUFFLENBQUM7UUFFcEMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsUUFBRSxHQUFXLElBQUksQ0FBQztRQUVsQixRQUFFLEdBQVcsSUFBSSxDQUFDO1FBRWxCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQy9CLGVBQVMsR0FBVyxDQUFDLENBQUM7O1FBK0Q3QixvQkFBb0I7UUFDcEIscUVBQXFFO1FBQ3JFLGdEQUFnRDtRQUNoRCxJQUFJO1FBRUosd0JBQXdCO1FBQ3hCLHVEQUF1RDtRQUN2RCxrQ0FBa0M7UUFDbEMsSUFBSTtRQUVKLHFCQUFxQjtRQUNyQixnRUFBZ0U7UUFDaEUsOENBQThDO1FBQzlDLElBQUk7SUFFUixDQUFDO0lBNUVVLGlDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0saUNBQWlCLEdBQXhCLFVBQXlCLFFBQWdCLEVBQUMsU0FB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QUM7cUNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNvQjtJQTNCN0IsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTBHakI7SUFBRCxZQUFDO0NBMUdELEFBMEdDLENBMUcwQixFQUFFLENBQUMsU0FBUyxHQTBHdEM7QUExR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWF4U2NhbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWluU2NhbGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWluRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBwdWJsaWMgYW5jaG9yT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHByaXZhdGUgcmlnaHRBbmNob3JMaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHByaXZhdGUgbGVmdEFuY2hvckxpc3Q6IEFycmF5PGNjLk5vZGU+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgY2VudGVyQW5jaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcDE6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcDI6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHByaXZhdGUgbG9jYWxQbGF5ZXJQb3M6Y2MuVmVjMiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdHJ1ZVNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXRDZW50ZXJQb3NpdGlvbigpOmNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlckFuY2hvci5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY2VudGVyQW5jaG9yLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QW5jaG9yTG9jYXRpb24od29ybGRQb3M6Y2MuVmVjMixkaXJlY3Rpb246bnVtYmVyICxwbGF0Zm9ybVN0YXRlKTpjYy5WZWMyIHtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIGxldCBhbmNob3JMaXN0ID0gZGlyZWN0aW9uPjA/dGhpcy5yaWdodEFuY2hvckxpc3Q6dGhpcy5sZWZ0QW5jaG9yTGlzdFxyXG4gICAgICAgIGxldCBuZWFyQW5jaG9yID0gYW5jaG9yTGlzdFswXTtcclxuICAgICAgICBsZXQgZmFyQW5jaG9yID0gYW5jaG9yTGlzdFswXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAxO2kgPCBhbmNob3JMaXN0Lmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCBhbmNob3JMaXN0W2ldLnBvc2l0aW9uLnN1Yihsb2NhbFBvcykubWFnKCk8IG5lYXJBbmNob3IucG9zaXRpb24uc3ViKGxvY2FsUG9zKS5tYWcoKVxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgbmVhckFuY2hvciA9IGFuY2hvckxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGZhckFuY2hvciA9IGFuY2hvckxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmVhckFuY2hvci5wb3NpdGlvbi5zdWIobG9jYWxQb3MpLm1hZygpIDw9dGhpcy5hbmNob3JPZmZzZXQpIHtcclxuICAgICAgICAgICAgaWYocGxhdGZvcm1TdGF0ZT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsUGxheWVyUG9zID0gbmVhckFuY2hvci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFBsYXllclBvcyA9IGZhckFuY2hvci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb24ocGxhdGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1ZVNjb3JlID0gdGhpcy5nZXRTY29yZShwbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lYXJBbmNob3IucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuZWFyQW5jaG9yLnBvc2l0aW9uKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExlZnRUYW4oKTpudW1iZXIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5wMS55LygtdGhpcy5wMS54KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmlnaHRUYW4oKTpudW1iZXIge1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLnAyLnkvdGhpcy5wMi54KTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnAyLnkvdGhpcy5wMi54O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5U2NvcmVBbmltKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMubm9kZSkucGFyZW50ID0gY2MuZmluZChcIkNhbnZhcy9zdGFnZS9TY29yZUxheWVyXCIpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIitNYXRoLnJvdW5kKHRoaXMudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NvcmUocGxhdGZvcm1TdGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuIGNjLmZpbmQoXCJwZXJmZWN0U2NvcmVcIix0aGlzLm5vZGUpLmdldENvbXBvbmVudChcIlNjb3JlTW92aW5nXCIpLmdldFNjb3JlKHBsYXRmb3JtU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0b3BBbGxBY3Rpb24ocGxhdGZvcm1TdGF0ZSl7XHJcbiAgICAgICAgY2MuZmluZChcInBlcmZlY3RTY29yZVwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KFwiU2NvcmVNb3ZpbmdcIikuc3RvcEFsbCh0aGlzLmxvY2FsUGxheWVyUG9zLHBsYXRmb3JtU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVBlcmZlY3RTY29yZSgpe1xyXG4gICAgICAgIGNjLmZpbmQoXCJwZXJmZWN0U2NvcmVcIix0aGlzLm5vZGUpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcHVibGljIHNocmluaygpIHtcclxuICAgIC8vICAgICAvLyBjYy5maW5kKFwic3ByaXRlXCIsdGhpcy5ub2RlKS5ydW5BY3Rpb24oY2Muc2NhbGVUbygyLDEsMC41KSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDIsMSwwLjUpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RvcFNocmluaygpIHtcclxuICAgIC8vICAgICAvLyBjYy5maW5kKFwic3ByaXRlXCIsdGhpcy5ub2RlKS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBlbmxhcmdlKCkge1xyXG4gICAgLy8gICAgIGNjLmZpbmQoXCJzcHJpdGVcIix0aGlzLm5vZGUpLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDEsMSwxKSk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDEsMSwxKSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/API.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74d1a+wziRMxaNOftsXDqxA', 'API');
// src/Network/API.js

"use strict";

var global = _interopRequireWildcard(require("GlobalData"));

var constant = _interopRequireWildcard(require("Constant"));

var ecrypt = _interopRequireWildcard(require("Encrypt"));

var ecryptContoller = _interopRequireWildcard(require("ecrypt"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    betScene: {
      "default": null,
      type: cc.Node
    },
    errorLayer: {
      "default": null,
      type: cc.Node
    },
    errorLabel: {
      "default": null,
      type: cc.Label
    },
    backHome: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  start: function start() {// this.connectAPI();
  },
  startGuestMode: function startGuestMode() {
    this.errorLayer.active = false;
    global.isDemo = true;
    this.betScene.getComponent("StartScene").updateCreditLabel();
  },
  getSettings: function getSettings() {
    if (window.endPointConfig != null) {
      var networkConfig = ecryptContoller.decrypt(window.endPointConfig);

      if (networkConfig != null) {
        var networkConfigJson = JSON.parse(networkConfig); //cc.log(networkConfigJson.geoip_url);
        //cc.log(networkConfigJson.api_url);

        global.geoIP_url = networkConfigJson.geoip_url;
        global.api_url = networkConfigJson.api_url; // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
        // cc.log(global.SetApi_Url(networkConfigJson.api_url));
      }
    }

    global.host_id = this.getParameterByName('host_id');
    global.access_token = this.getParameterByName('access_token');
    global.is_promotion = this.getParameterByName('is_promotion');
    global.h5_app = this.getParameterByName('access_token');
    var xhr = new XMLHttpRequest();
    var self = this;

    if (global.host_id == null && global.access_token == null) {
      if (!global.isDemo) {
        self.errorLayer.active = true;
        self.errorLabel.string = " You Are Playing For Fun.";

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
            var response = xhr.responseText;
            var parsed = JSON.parse(response);
            global.settings = parsed.data;
            constant.setSocketURL(global.settings.socket_url);

            if (!global.getSocket()) {
              self.getComponent("Socket").connectSocket();
            }

            self.getErrorMessage();
          }
        };
      } else {
        self.scheduleOnce(function () {
          self.betScene.getComponent("StartScene").updateCreditLabel();
        }, 0.2);
      }

      var body = {
        "device_type": "Desktop",
        "game_code": 23,
        "country_code": "MY"
      };
      var json = JSON.stringify(body);
      var apiURL = global.api_url;

      if (global.api_url == undefined) {
        apiURL = "https://bo-stage.slot28.com";

        if (global.isProduction) {
          apiURL = "https://bo.slot28.com";
        }
      }

      var url = apiURL + "/api/user/get-settings-demo"; // let url = "https://bo-stage-apl.velachip.com/api/user/get-settings?host_id=0e83088027d4c42c8e9934388480c996&access_token=demo01&game_code=21";

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept-Language", "en-US");
      xhr.send(json);
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
          var response = xhr.responseText;
          var parsed = JSON.parse(response);
          global.settings = parsed.data;
          constant.setSocketURL(global.settings.socket_url);

          if (!global.getSocket()) {
            self.getComponent("Socket").connectSocket();
          }

          self.getErrorMessage(); //global.balance = global.settings.balance;

          if (global.settings == undefined) {
            self.errorLayer.active = true;
            self.errorLabel.string = parsed.error.message;
            global.settings = global.DemoSettings;
            self.backHome.active = true;
          } else {
            global.isPlayerBalanceUpdated = true;
            self.betScene.getComponent("StartScene").updateCreditLabel();
          } // console.log(global.getSettings());

        } else {}
      };

      var body = {
        "host_id": this.getParameterByName('host_id'),
        "access_token": this.getParameterByName('access_token'),
        "device_type": "Desktop",
        "game_code": 23,
        "country_code": "MY"
      };
      var json = JSON.stringify(body);
      var apiURL = global.api_url;

      if (global.api_url == undefined) {
        apiURL = "https://bo-stage.slot28.com";

        if (global.isProduction) {
          apiURL = "https://bo.slot28.com";
        }

        global.api_url = apiURL;
      }

      var _url = apiURL + "/api/user/get-settings?host_id=" + global.host_id + "&access_token=" + global.access_token + "&game_code=" + global.game_code;

      "&is_promotion=" + global.is_promotion + "&h5_app=" + global.h5_app;
      xhr.open("POST", _url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept-Language", "en-US");
      xhr.send(json);
    }
  },
  getParameterByName: function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  getH5App: function getH5App() {
    var h5_app = this.getParameterByName('h5_app', undefined);

    if (h5_app == null || h5_app == "") {
      return 99;
    }

    return h5_app;
  },
  getErrorMessage: function getErrorMessage() {
    var url = global.settings.dynamic_assets_url + '/errorMessage.json';
    cc.loader.load(url, function (err, info) {
      if (!err) {
        global.commonErrorMessage = info;
        cc.log("getErrorMessage:", global.commonErrorMessage);
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxBUEkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZXRTY2VuZSIsInR5cGUiLCJOb2RlIiwiZXJyb3JMYXllciIsImVycm9yTGFiZWwiLCJMYWJlbCIsImJhY2tIb21lIiwib25Mb2FkIiwic3RhcnQiLCJzdGFydEd1ZXN0TW9kZSIsImFjdGl2ZSIsImdsb2JhbCIsImlzRGVtbyIsImdldENvbXBvbmVudCIsInVwZGF0ZUNyZWRpdExhYmVsIiwiZ2V0U2V0dGluZ3MiLCJ3aW5kb3ciLCJlbmRQb2ludENvbmZpZyIsIm5ldHdvcmtDb25maWciLCJlY3J5cHRDb250b2xsZXIiLCJkZWNyeXB0IiwibmV0d29ya0NvbmZpZ0pzb24iLCJKU09OIiwicGFyc2UiLCJnZW9JUF91cmwiLCJnZW9pcF91cmwiLCJhcGlfdXJsIiwiaG9zdF9pZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImFjY2Vzc190b2tlbiIsImlzX3Byb21vdGlvbiIsImg1X2FwcCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VsZiIsInN0cmluZyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInBhcnNlZCIsInNldHRpbmdzIiwiZGF0YSIsImNvbnN0YW50Iiwic2V0U29ja2V0VVJMIiwic29ja2V0X3VybCIsImdldFNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJnZXRFcnJvck1lc3NhZ2UiLCJzY2hlZHVsZU9uY2UiLCJib2R5IiwianNvbiIsInN0cmluZ2lmeSIsImFwaVVSTCIsInVuZGVmaW5lZCIsImlzUHJvZHVjdGlvbiIsInVybCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImVycm9yIiwibWVzc2FnZSIsIkRlbW9TZXR0aW5ncyIsImlzUGxheWVyQmFsYW5jZVVwZGF0ZWQiLCJnYW1lX2NvZGUiLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRINUFwcCIsImR5bmFtaWNfYXNzZXRzX3VybCIsImxvYWRlciIsImxvYWQiLCJlcnIiLCJpbmZvIiwiY29tbW9uRXJyb3JNZXNzYWdlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ047QUFFQUMsSUFBQUEsUUFBUSxFQUFDO0FBQ1IsaUJBQVEsSUFEQTtBQUVSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQSxLQVpLO0FBaUJkQyxJQUFBQSxVQUFVLEVBQUM7QUFDVixpQkFBUSxJQURFO0FBRVZGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZFLEtBakJHO0FBc0JkRSxJQUFBQSxVQUFVLEVBQUM7QUFDVixpQkFBUSxJQURFO0FBRVZILE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUztBQUZFLEtBdEJHO0FBMkJkQyxJQUFBQSxRQUFRLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZBO0FBM0JLLEdBSFA7QUFvQ0w7QUFDQUssRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ25CLENBdENJO0FBd0NMQyxFQUFBQSxLQXhDSyxtQkF3Q0UsQ0FDSDtBQUNILEdBMUNJO0FBMkNSQyxFQUFBQSxjQTNDUSw0QkEyQ1M7QUFDaEIsU0FBS04sVUFBTCxDQUFnQk8sTUFBaEIsR0FBdUIsS0FBdkI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLElBQWhCO0FBQ0EsU0FBS1osUUFBTCxDQUFjYSxZQUFkLENBQTJCLFlBQTNCLEVBQXlDQyxpQkFBekM7QUFDQSxHQS9DTztBQWdETEMsRUFBQUEsV0FoREsseUJBZ0RRO0FBQ2YsUUFBR0MsTUFBTSxDQUFDQyxjQUFQLElBQXlCLElBQTVCLEVBQWlDO0FBQ3ZCLFVBQUlDLGFBQWEsR0FBR0MsZUFBZSxDQUFDQyxPQUFoQixDQUF3QkosTUFBTSxDQUFDQyxjQUEvQixDQUFwQjs7QUFDQSxVQUFHQyxhQUFhLElBQUksSUFBcEIsRUFBeUI7QUFDckIsWUFBSUcsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxhQUFYLENBQXhCLENBRHFCLENBR3JCO0FBQ0E7O0FBRUFQLFFBQUFBLE1BQU0sQ0FBQ2EsU0FBUCxHQUFtQkgsaUJBQWlCLENBQUNJLFNBQXJDO0FBQ0FkLFFBQUFBLE1BQU0sQ0FBQ2UsT0FBUCxHQUFpQkwsaUJBQWlCLENBQUNLLE9BQW5DLENBUHFCLENBU3JCO0FBQ0E7QUFDSDtBQUNKOztBQUVQZixJQUFBQSxNQUFNLENBQUNnQixPQUFQLEdBQWlCLEtBQUtDLGtCQUFMLENBQXdCLFNBQXhCLENBQWpCO0FBQ0FqQixJQUFBQSxNQUFNLENBQUNrQixZQUFQLEdBQXNCLEtBQUtELGtCQUFMLENBQXdCLGNBQXhCLENBQXRCO0FBQ0FqQixJQUFBQSxNQUFNLENBQUNtQixZQUFQLEdBQXNCLEtBQUtGLGtCQUFMLENBQXdCLGNBQXhCLENBQXRCO0FBQ0FqQixJQUFBQSxNQUFNLENBQUNvQixNQUFQLEdBQWdCLEtBQUtILGtCQUFMLENBQXdCLGNBQXhCLENBQWhCO0FBQ0EsUUFBSUksR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFFBQUd2QixNQUFNLENBQUNnQixPQUFQLElBQWdCLElBQWhCLElBQXdCaEIsTUFBTSxDQUFDa0IsWUFBUCxJQUFxQixJQUFoRCxFQUFxRDtBQUNwRCxVQUFHLENBQUNsQixNQUFNLENBQUNDLE1BQVgsRUFBa0I7QUFDakJzQixRQUFBQSxJQUFJLENBQUMvQixVQUFMLENBQWdCTyxNQUFoQixHQUF5QixJQUF6QjtBQUNBd0IsUUFBQUEsSUFBSSxDQUFDOUIsVUFBTCxDQUFnQitCLE1BQWhCLEdBQXVCLDJCQUF2Qjs7QUFDQUgsUUFBQUEsR0FBRyxDQUFDSSxrQkFBSixHQUF5QixZQUFVO0FBQ2xDLGNBQUdKLEdBQUcsQ0FBQ0ssVUFBSixJQUFrQixDQUFsQixJQUF1QkwsR0FBRyxDQUFDTSxNQUFKLElBQWMsR0FBZCxJQUFxQk4sR0FBRyxDQUFDTSxNQUFKLEdBQWEsR0FBNUQsRUFBa0U7QUFDakUsZ0JBQUlDLFFBQVEsR0FBR1AsR0FBRyxDQUFDUSxZQUFuQjtBQUNBLGdCQUFJQyxNQUFNLEdBQUduQixJQUFJLENBQUNDLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBYjtBQUVBNUIsWUFBQUEsTUFBTSxDQUFDK0IsUUFBUCxHQUFrQkQsTUFBTSxDQUFDRSxJQUF6QjtBQUNBQyxZQUFBQSxRQUFRLENBQUNDLFlBQVQsQ0FBc0JsQyxNQUFNLENBQUMrQixRQUFQLENBQWdCSSxVQUF0Qzs7QUFDQSxnQkFBRyxDQUFDbkMsTUFBTSxDQUFDb0MsU0FBUCxFQUFKLEVBQXVCO0FBQ3RCYixjQUFBQSxJQUFJLENBQUNyQixZQUFMLENBQWtCLFFBQWxCLEVBQTRCbUMsYUFBNUI7QUFDQTs7QUFDRGQsWUFBQUEsSUFBSSxDQUFDZSxlQUFMO0FBQ0E7QUFFRCxTQWJEO0FBY0EsT0FqQkQsTUFrQkk7QUFDSGYsUUFBQUEsSUFBSSxDQUFDZ0IsWUFBTCxDQUFrQixZQUFVO0FBQzNCaEIsVUFBQUEsSUFBSSxDQUFDbEMsUUFBTCxDQUFjYSxZQUFkLENBQTJCLFlBQTNCLEVBQXlDQyxpQkFBekM7QUFFQSxTQUhELEVBR0UsR0FIRjtBQUlBOztBQUdELFVBQUlxQyxJQUFJLEdBQUc7QUFDVix1QkFBZSxTQURMO0FBRVYscUJBQWEsRUFGSDtBQUdWLHdCQUFnQjtBQUhOLE9BQVg7QUFPQSxVQUFJQyxJQUFJLEdBQUc5QixJQUFJLENBQUMrQixTQUFMLENBQWVGLElBQWYsQ0FBWDtBQUNBLFVBQUlHLE1BQU0sR0FBRTNDLE1BQU0sQ0FBQ2UsT0FBbkI7O0FBQ0EsVUFBSWYsTUFBTSxDQUFDZSxPQUFQLElBQWtCNkIsU0FBdEIsRUFBaUM7QUFDaENELFFBQUFBLE1BQU0sR0FBRyw2QkFBVDs7QUFDQSxZQUFJM0MsTUFBTSxDQUFDNkMsWUFBWCxFQUF5QjtBQUN4QkYsVUFBQUEsTUFBTSxHQUFHLHVCQUFUO0FBQ0E7QUFDRDs7QUFDRCxVQUFJRyxHQUFHLEdBQUdILE1BQU0sR0FBQyw2QkFBakIsQ0ExQ29ELENBNENwRDs7QUFDQXRCLE1BQUFBLEdBQUcsQ0FBQzBCLElBQUosQ0FBUyxNQUFULEVBQWlCRCxHQUFqQixFQUFzQixJQUF0QjtBQUNBekIsTUFBQUEsR0FBRyxDQUFDMkIsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0EzQixNQUFBQSxHQUFHLENBQUMyQixnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQTNCLE1BQUFBLEdBQUcsQ0FBQzRCLElBQUosQ0FBU1IsSUFBVDtBQUNBLEtBakRELE1BbURJO0FBQ0hwQixNQUFBQSxHQUFHLENBQUNJLGtCQUFKLEdBQXlCLFlBQVU7QUFDbEMsWUFBR0osR0FBRyxDQUFDSyxVQUFKLElBQWtCLENBQWxCLElBQXVCTCxHQUFHLENBQUNNLE1BQUosSUFBYyxHQUFkLElBQXFCTixHQUFHLENBQUNNLE1BQUosR0FBYSxHQUE1RCxFQUFrRTtBQUNqRSxjQUFJQyxRQUFRLEdBQUdQLEdBQUcsQ0FBQ1EsWUFBbkI7QUFDQSxjQUFJQyxNQUFNLEdBQUduQixJQUFJLENBQUNDLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBYjtBQUVBNUIsVUFBQUEsTUFBTSxDQUFDK0IsUUFBUCxHQUFrQkQsTUFBTSxDQUFDRSxJQUF6QjtBQUNBQyxVQUFBQSxRQUFRLENBQUNDLFlBQVQsQ0FBc0JsQyxNQUFNLENBQUMrQixRQUFQLENBQWdCSSxVQUF0Qzs7QUFDQSxjQUFHLENBQUNuQyxNQUFNLENBQUNvQyxTQUFQLEVBQUosRUFBdUI7QUFDdEJiLFlBQUFBLElBQUksQ0FBQ3JCLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJtQyxhQUE1QjtBQUNBOztBQUNEZCxVQUFBQSxJQUFJLENBQUNlLGVBQUwsR0FUaUUsQ0FXakU7O0FBRUEsY0FBR3RDLE1BQU0sQ0FBQytCLFFBQVAsSUFBaUJhLFNBQXBCLEVBQThCO0FBQzdCckIsWUFBQUEsSUFBSSxDQUFDL0IsVUFBTCxDQUFnQk8sTUFBaEIsR0FBeUIsSUFBekI7QUFDQXdCLFlBQUFBLElBQUksQ0FBQzlCLFVBQUwsQ0FBZ0IrQixNQUFoQixHQUF5Qk0sTUFBTSxDQUFDb0IsS0FBUCxDQUFhQyxPQUF0QztBQUNBbkQsWUFBQUEsTUFBTSxDQUFDK0IsUUFBUCxHQUFnQi9CLE1BQU0sQ0FBQ29ELFlBQXZCO0FBQ0E3QixZQUFBQSxJQUFJLENBQUM1QixRQUFMLENBQWNJLE1BQWQsR0FBcUIsSUFBckI7QUFDQSxXQUxELE1BTUk7QUFDSEMsWUFBQUEsTUFBTSxDQUFDcUQsc0JBQVAsR0FBZ0MsSUFBaEM7QUFDQTlCLFlBQUFBLElBQUksQ0FBQ2xDLFFBQUwsQ0FBY2EsWUFBZCxDQUEyQixZQUEzQixFQUF5Q0MsaUJBQXpDO0FBRUEsV0F2QmdFLENBd0JqRTs7QUFDQSxTQXpCRCxNQTBCSSxDQUNIO0FBQ0QsT0E3QkQ7O0FBK0JBLFVBQUlxQyxJQUFJLEdBQUc7QUFDVixtQkFBVyxLQUFLdkIsa0JBQUwsQ0FBd0IsU0FBeEIsQ0FERDtBQUVWLHdCQUFnQixLQUFLQSxrQkFBTCxDQUF3QixjQUF4QixDQUZOO0FBR1YsdUJBQWUsU0FITDtBQUlWLHFCQUFhLEVBSkg7QUFLVix3QkFBZ0I7QUFMTixPQUFYO0FBUUEsVUFBSXdCLElBQUksR0FBRzlCLElBQUksQ0FBQytCLFNBQUwsQ0FBZUYsSUFBZixDQUFYO0FBQ0EsVUFBSUcsTUFBTSxHQUFHM0MsTUFBTSxDQUFDZSxPQUFwQjs7QUFDQSxVQUFJZixNQUFNLENBQUNlLE9BQVAsSUFBa0I2QixTQUF0QixFQUFpQztBQUNoQ0QsUUFBQUEsTUFBTSxHQUFHLDZCQUFUOztBQUNBLFlBQUkzQyxNQUFNLENBQUM2QyxZQUFYLEVBQXlCO0FBQ3hCRixVQUFBQSxNQUFNLEdBQUcsdUJBQVQ7QUFDQTs7QUFDRDNDLFFBQUFBLE1BQU0sQ0FBQ2UsT0FBUCxHQUFlNEIsTUFBZjtBQUNBOztBQUVELFVBQUlHLElBQUcsR0FBR0gsTUFBTSxHQUFHLGlDQUFULEdBQTJDM0MsTUFBTSxDQUFDZ0IsT0FBbEQsR0FDVixnQkFEVSxHQUNPaEIsTUFBTSxDQUFDa0IsWUFEZCxHQUVWLGFBRlUsR0FFTWxCLE1BQU0sQ0FBQ3NELFNBRnZCOztBQUdBLHlCQUFtQnRELE1BQU0sQ0FBQ21CLFlBQTFCLEdBQ1MsVUFEVCxHQUNzQm5CLE1BQU0sQ0FBQ29CLE1BRDdCO0FBRUFDLE1BQUFBLEdBQUcsQ0FBQzBCLElBQUosQ0FBUyxNQUFULEVBQWlCRCxJQUFqQixFQUFzQixJQUF0QjtBQUNBekIsTUFBQUEsR0FBRyxDQUFDMkIsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0EzQixNQUFBQSxHQUFHLENBQUMyQixnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsT0FBeEM7QUFDQTNCLE1BQUFBLEdBQUcsQ0FBQzRCLElBQUosQ0FBU1IsSUFBVDtBQUNBO0FBRUQsR0F4TE87QUF5TFJ4QixFQUFBQSxrQkF6TFEsOEJBeUxXc0MsSUF6TFgsRUF5TGlCVCxHQXpMakIsRUF5THNCO0FBQzdCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVQSxHQUFHLEdBQUd6QyxNQUFNLENBQUNtRCxRQUFQLENBQWdCQyxJQUF0QjtBQUNWRixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFhLFNBQWIsRUFBd0IsTUFBeEIsQ0FBUDtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsU0FBU0wsSUFBVCxHQUFnQixtQkFBM0IsQ0FBWjtBQUFBLFFBQ0NNLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdoQixHQUFYLENBRFg7QUFFQSxRQUFJLENBQUNlLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFDZCxRQUFJLENBQUNBLE9BQU8sQ0FBQyxDQUFELENBQVosRUFBaUIsT0FBTyxFQUFQO0FBRWhCLFdBQU9FLGtCQUFrQixDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBRCxDQUF6QjtBQUNELEdBbE1PO0FBbU1STSxFQUFBQSxRQW5NUSxzQkFvTUw7QUFDSSxRQUFJNUMsTUFBTSxHQUFHLEtBQUtILGtCQUFMLENBQXdCLFFBQXhCLEVBQWtDMkIsU0FBbEMsQ0FBYjs7QUFDQSxRQUFHeEIsTUFBTSxJQUFJLElBQVYsSUFBa0JBLE1BQU0sSUFBSSxFQUEvQixFQUNBO0FBQ0ksYUFBTyxFQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsTUFBUDtBQUNILEdBM01JO0FBNE1Sa0IsRUFBQUEsZUE1TVEsNkJBNE1TO0FBQ1YsUUFBSVEsR0FBRyxHQUFHOUMsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQmtDLGtCQUFoQixHQUFxQyxvQkFBL0M7QUFDQWhGLElBQUFBLEVBQUUsQ0FBQ2lGLE1BQUgsQ0FBVUMsSUFBVixDQUFlckIsR0FBZixFQUFvQixVQUFTc0IsR0FBVCxFQUFjQyxJQUFkLEVBQW1CO0FBQ25DLFVBQUcsQ0FBQ0QsR0FBSixFQUFRO0FBQ0pwRSxRQUFBQSxNQUFNLENBQUNzRSxrQkFBUCxHQUE0QkQsSUFBNUI7QUFDQXBGLFFBQUFBLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBTyxrQkFBUCxFQUEyQnZFLE1BQU0sQ0FBQ3NFLGtCQUFsQztBQUNIO0FBQ0osS0FMRDtBQU1IO0FBcE5JLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdsb2JhbCBmcm9tIFwiR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tIFwiQ29uc3RhbnRcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCJFbmNyeXB0XCI7XHJcbmltcG9ydCAqIGFzIGVjcnlwdENvbnRvbGxlciBmcm9tICdlY3J5cHQnO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG5cdFx0Ly8gLi4uXHJcblx0XHRcclxuXHRcdGJldFNjZW5lOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yTGF5ZXI6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTm9kZSxcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGVycm9yTGFiZWw6e1xyXG5cdFx0XHRkZWZhdWx0Om51bGwsXHJcblx0XHRcdHR5cGU6Y2MuTGFiZWwsXHJcblx0XHR9LFxyXG5cclxuXHRcdGJhY2tIb21lOntcclxuXHRcdFx0ZGVmYXVsdDpudWxsLFxyXG5cdFx0XHR0eXBlOmNjLk5vZGUsXHRcclxuXHRcdH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0QVBJKCk7XHJcbiAgICB9LFxyXG5cdHN0YXJ0R3Vlc3RNb2RlKCkge1xyXG5cdFx0dGhpcy5lcnJvckxheWVyLmFjdGl2ZT1mYWxzZTtcclxuXHRcdGdsb2JhbC5pc0RlbW8gPSB0cnVlO1xyXG5cdFx0dGhpcy5iZXRTY2VuZS5nZXRDb21wb25lbnQoXCJTdGFydFNjZW5lXCIpLnVwZGF0ZUNyZWRpdExhYmVsKCk7XHJcblx0fSxcclxuICAgIGdldFNldHRpbmdzKCl7XHJcblx0XHRpZih3aW5kb3cuZW5kUG9pbnRDb25maWcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnID0gZWNyeXB0Q29udG9sbGVyLmRlY3J5cHQod2luZG93LmVuZFBvaW50Q29uZmlnKTtcclxuICAgICAgICAgICAgaWYobmV0d29ya0NvbmZpZyAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrQ29uZmlnSnNvbiA9IEpTT04ucGFyc2UobmV0d29ya0NvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2cobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKTtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKG5ldHdvcmtDb25maWdKc29uLmFwaV91cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdsb2JhbC5nZW9JUF91cmwgPSBuZXR3b3JrQ29uZmlnSnNvbi5nZW9pcF91cmw7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwuYXBpX3VybCA9IG5ldHdvcmtDb25maWdKc29uLmFwaV91cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGdsb2JhbC5TZXRHZW9pcF9VcmwobmV0d29ya0NvbmZpZ0pzb24uZ2VvaXBfdXJsKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZ2xvYmFsLlNldEFwaV9VcmwobmV0d29ya0NvbmZpZ0pzb24uYXBpX3VybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdGdsb2JhbC5ob3N0X2lkID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2hvc3RfaWQnKTtcclxuXHRcdGdsb2JhbC5hY2Nlc3NfdG9rZW4gPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyk7XHJcblx0XHRnbG9iYWwuaXNfcHJvbW90aW9uID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2lzX3Byb21vdGlvbicpO1xyXG5cdFx0Z2xvYmFsLmg1X2FwcCA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZihnbG9iYWwuaG9zdF9pZD09bnVsbCAmJiBnbG9iYWwuYWNjZXNzX3Rva2VuPT1udWxsKXtcclxuXHRcdFx0aWYoIWdsb2JhbC5pc0RlbW8pe1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHNlbGYuZXJyb3JMYWJlbC5zdHJpbmc9XCIgWW91IEFyZSBQbGF5aW5nIEZvciBGdW4uXCI7XHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRnbG9iYWwuc2V0dGluZ3MgPSBwYXJzZWQuZGF0YTtcclxuXHRcdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdFx0aWYoIWdsb2JhbC5nZXRTb2NrZXQoKSl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5nZXRDb21wb25lbnQoXCJTb2NrZXRcIikuY29ubmVjdFNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0RXJyb3JNZXNzYWdlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sMC4yKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0XHRcImRldmljZV90eXBlXCI6IFwiRGVza3RvcFwiLFxyXG5cdFx0XHRcdFwiZ2FtZV9jb2RlXCI6IDIzLFxyXG5cdFx0XHRcdFwiY291bnRyeV9jb2RlXCI6IFwiTVlcIlxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMPSBnbG9iYWwuYXBpX3VybDtcclxuXHRcdFx0aWYgKGdsb2JhbC5hcGlfdXJsID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby1zdGFnZS5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5pc1Byb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRcdGFwaVVSTCA9IFwiaHR0cHM6Ly9iby5zbG90MjguY29tXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwrXCIvYXBpL3VzZXIvZ2V0LXNldHRpbmdzLWRlbW9cIjtcclxuXHRcdFxyXG5cdFx0XHQvLyBsZXQgdXJsID0gXCJodHRwczovL2JvLXN0YWdlLWFwbC52ZWxhY2hpcC5jb20vYXBpL3VzZXIvZ2V0LXNldHRpbmdzP2hvc3RfaWQ9MGU4MzA4ODAyN2Q0YzQyYzhlOTkzNDM4ODQ4MGM5OTYmYWNjZXNzX3Rva2VuPWRlbW8wMSZnYW1lX2NvZGU9MjFcIjtcclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJlbi1VU1wiKTtcclxuXHRcdFx0eGhyLnNlbmQoanNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJih4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcclxuXHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncyA9IHBhcnNlZC5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3RhbnQuc2V0U29ja2V0VVJMKGdsb2JhbC5zZXR0aW5ncy5zb2NrZXRfdXJsKTtcclxuXHRcdFx0XHRcdGlmKCFnbG9iYWwuZ2V0U29ja2V0KCkpe1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldENvbXBvbmVudChcIlNvY2tldFwiKS5jb25uZWN0U29ja2V0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZWxmLmdldEVycm9yTWVzc2FnZSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2dsb2JhbC5iYWxhbmNlID0gZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2U7XHJcblx0XHJcblx0XHRcdFx0XHRpZihnbG9iYWwuc2V0dGluZ3M9PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JMYXllci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmVycm9yTGFiZWwuc3RyaW5nID0gcGFyc2VkLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5zZXR0aW5ncz1nbG9iYWwuRGVtb1NldHRpbmdzO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJhY2tIb21lLmFjdGl2ZT10cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmlzUGxheWVyQmFsYW5jZVVwZGF0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJldFNjZW5lLmdldENvbXBvbmVudChcIlN0YXJ0U2NlbmVcIikudXBkYXRlQ3JlZGl0TGFiZWwoKTtcclxuXHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdsb2JhbC5nZXRTZXR0aW5ncygpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHJcblx0XHRcdHZhciBib2R5ID0ge1xyXG5cdFx0XHRcdFwiaG9zdF9pZFwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnaG9zdF9pZCcpLCBcclxuXHRcdFx0XHRcImFjY2Vzc190b2tlblwiOiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnYWNjZXNzX3Rva2VuJyksXHJcblx0XHRcdFx0XCJkZXZpY2VfdHlwZVwiOiBcIkRlc2t0b3BcIixcclxuXHRcdFx0XHRcImdhbWVfY29kZVwiOiAyMyxcclxuXHRcdFx0XHRcImNvdW50cnlfY29kZVwiOiBcIk1ZXCJcclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR2YXIgYXBpVVJMID0gZ2xvYmFsLmFwaV91cmw7XHJcblx0XHRcdGlmIChnbG9iYWwuYXBpX3VybCA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8tc3RhZ2Uuc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuaXNQcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0XHRhcGlVUkwgPSBcImh0dHBzOi8vYm8uc2xvdDI4LmNvbVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnbG9iYWwuYXBpX3VybD1hcGlVUkw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB1cmwgPSBhcGlVUkwgKyBcIi9hcGkvdXNlci9nZXQtc2V0dGluZ3M/aG9zdF9pZD1cIitnbG9iYWwuaG9zdF9pZCtcclxuXHRcdFx0XCImYWNjZXNzX3Rva2VuPVwiK2dsb2JhbC5hY2Nlc3NfdG9rZW4rXHJcblx0XHRcdFwiJmdhbWVfY29kZT1cIiArIGdsb2JhbC5nYW1lX2NvZGVcclxuXHRcdFx0XCImaXNfcHJvbW90aW9uPVwiICsgZ2xvYmFsLmlzX3Byb21vdGlvbiArIFxyXG4gICAgICAgICAgICBcIiZoNV9hcHA9XCIgKyBnbG9iYWwuaDVfYXBwO1xyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1MYW5ndWFnZVwiLCBcImVuLVVTXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChqc29uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG5cdFx0aWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcblx0XHRcdHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblx0XHRpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcblx0fSxcclxuXHRnZXRINUFwcCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGg1X2FwcCA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdoNV9hcHAnLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmKGg1X2FwcCA9PSBudWxsIHx8IGg1X2FwcCA9PSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaDVfYXBwO1xyXG4gICAgfSxcclxuXHRnZXRFcnJvck1lc3NhZ2UoKXtcclxuICAgICAgICBsZXQgdXJsID0gZ2xvYmFsLnNldHRpbmdzLmR5bmFtaWNfYXNzZXRzX3VybCArICcvZXJyb3JNZXNzYWdlLmpzb24nOyBcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh1cmwsIGZ1bmN0aW9uKGVyciwgaW5mbyl7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLmNvbW1vbkVycm9yTWVzc2FnZSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJnZXRFcnJvck1lc3NhZ2U6XCIsIGdsb2JhbC5jb21tb25FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/components/game/OverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b702fWA3yZGha6sOqGGOWpd', 'OverPanel');
// src/components/game/OverPanel.ts

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
exports.OverPanel = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverPanel = /** @class */ (function (_super) {
    __extends(OverPanel, _super);
    function OverPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.winAmountString = null;
        _this.singleMaxWin = null;
        _this.totalBetString = null;
        _this.restartButton = null;
        _this.homeButton = null;
        _this.perfectString = null;
        _this.loadingLayer = null;
        _this.isQuit = false;
        return _this;
    }
    OverPanel.prototype.show = function (score, cb, home, winAmount, totalBet, singleMaxWin, perfectScore, target) {
        this.scheduleOnce(function () {
            cc.find("Canvas/AudioManager").getComponent("AudioManager").playWin();
            this.node.active = true;
            this.messageLabel.string = score + "";
            this.restartButton.once(cc.Node.EventType.TOUCH_END, cb, target);
            this.homeButton.once(cc.Node.EventType.TOUCH_END, home, target);
            if (this.isQuit) {
                this.restartButton.active = false;
                this.homeButton.position = cc.v2(0, -445);
            }
            this.winAmountString.string = (Math.round(winAmount * 10) / 10).toString();
            this.totalBetString.string = totalBet;
            this.singleMaxWin.string = (Math.round(singleMaxWin * 10) / 10).toString();
            this.perfectString.string = perfectScore.toString();
        }, 0.5);
    };
    OverPanel.prototype.hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "winAmountString", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "singleMaxWin", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "totalBetString", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "restartButton", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "homeButton", void 0);
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "perfectString", void 0);
    __decorate([
        property(cc.Node)
    ], OverPanel.prototype, "loadingLayer", void 0);
    OverPanel = __decorate([
        ccclass
    ], OverPanel);
    return OverPanel;
}(cc.Component));
exports.OverPanel = OverPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxPdmVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBMkNDO1FBeENXLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzlCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBeUIxQixDQUFDO0lBeEJVLHdCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsTUFBVztRQUN0RixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFFLEtBQUssQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUdYLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDc0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDcUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDb0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDbUI7SUFqQjVCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0EyQ3JCO0lBQUQsZ0JBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQzhCLEVBQUUsQ0FBQyxTQUFTLEdBMkMxQztBQTNDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgT3ZlclBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5BbW91bnRTdHJpbmc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgc2luZ2xlTWF4V2luOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRvdGFsQmV0U3RyaW5nOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcmVzdGFydEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaG9tZUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBlcmZlY3RTdHJpbmc6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBsb2FkaW5nTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGlzUXVpdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNob3coc2NvcmU6IG51bWJlcixjYixob21lLHdpbkFtb3VudCx0b3RhbEJldCxzaW5nbGVNYXhXaW4scGVyZmVjdFNjb3JlLHRhcmdldD86YW55KSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlXaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IHNjb3JlICsgXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELGNiLHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZUJ1dHRvbi5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxob21lLHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNRdWl0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lQnV0dG9uLnBvc2l0aW9uID0gY2MudjIoMCwtNDQ1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLndpbkFtb3VudFN0cmluZy5zdHJpbmcgPSAoTWF0aC5yb3VuZCh3aW5BbW91bnQqMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQmV0U3RyaW5nLnN0cmluZz10b3RhbEJldDtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXhXaW4uc3RyaW5nID0oTWF0aC5yb3VuZChzaW5nbGVNYXhXaW4qMTApLzEwKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZlY3RTdHJpbmcuc3RyaW5nID0gcGVyZmVjdFNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSwwLjUpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxjb21wb25lbnRzXFxnYW1lXFxzdGFnZVxcU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyxpQ0FBZ0M7QUFDaEMsZ0NBQStCO0FBQy9CLGlFQUFnRTtBQUNoRSxpRkFBZ0Y7QUFDaEYsNENBQThDO0FBQzlDLGdEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUF2QztRQUFBLHFFQW1pQkM7UUFqaUJVLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlCLGlCQUFXLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFXLGlCQUFpQixDQUFDO1FBRXZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRXZDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2QyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUNoQyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFBTyxHQUFFLENBQUMsQ0FBQztRQUNYLGVBQVMsR0FBRSxDQUFDLENBQUM7UUFDWixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBQyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLHVCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixxQkFBZSxHQUFFLEtBQUssQ0FBQztRQUMvQixxQkFBZSxHQUFDLENBQUMsQ0FBQzs7SUEwZXRCLENBQUM7SUF6ZVUscUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVwQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUV0RyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsaUJBQWlCO0lBRXJCLENBQUM7SUFFTSwyQkFBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSw0QkFBWSxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTywyQkFBVyxHQUFuQjtRQUNJLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO2FBQ0c7U0FFSDtJQUNMLENBQUM7SUFFTyx3QkFBUSxHQUFoQixVQUFpQixLQUFLO1FBQ3RCLHdEQUF3RDtRQUN4RCxvRkFBb0Y7UUFFL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxJQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU8sNkJBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckYsQ0FBQztJQUNNLDJCQUFXLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFFBQVEsSUFBRSxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNNLDRCQUFZLEdBQW5CO1FBQ0ksSUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsRUFBQztZQUNyRyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0c7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDTyxzQkFBTSxHQUFkO1FBQUEsaUJBd0dDO1FBdEdHLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxSCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0YsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztvQkFDaEMsaUNBQWlDO29CQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hDLElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUMsS0FBSSxDQUFDLFNBQVMsRUFBQzt3QkFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztxQkFDN0M7b0JBQ0QsSUFBRyxNQUFNLENBQUMsUUFBUSxJQUFFLENBQUMsRUFBQzt3QkFDbEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNsQjtvQkFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQztvQkFDakgsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwRSwwREFBMEQ7b0JBQzFELEtBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSwrQ0FBc0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLElBQUcsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFDO3dCQUVuQixJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQzs0QkFDZCxJQUFJLFdBQVcsR0FBRztnQ0FDZCxTQUFTLEVBQUMsTUFBTSxDQUFDLE9BQU87Z0NBQ3hCLGNBQWMsRUFBRSxNQUFNLENBQUMsWUFBWTtnQ0FDbkMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dDQUM3QixRQUFRLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO2dDQUNsQyxLQUFLLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYztnQ0FDcEcsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2dDQUM3QixhQUFhLEVBQUUsaUNBQWlDO2dDQUNoRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2dDQUNsQyxTQUFTLEVBQUMsTUFBTSxDQUFDLE9BQU87Z0NBQ3hCLFdBQVcsRUFBQyxLQUFLOzZCQUVwQixDQUFDOzRCQUNGLElBQUcsTUFBTSxDQUFDLFNBQVMsRUFBQztnQ0FDaEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDdkY7aUNBQ0c7Z0NBQ0EsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7NkJBQ3ZEOzRCQUNELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7eUJBQ2pDOzZCQUNHOzRCQUNBLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOzRCQUNuRCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3lCQUNqQzt3QkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLGVBQWUsR0FBQyxDQUFDLENBQUM7cUJBQzFCO3lCQUNHO3dCQUNBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDbkM7Z0JBRUwsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7b0JBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUM1RSxJQUFJLE1BQU0sR0FBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVuQyxJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQzt3QkFDZCxJQUFJLFdBQVcsR0FBRzs0QkFDZCxTQUFTLEVBQUMsTUFBTSxDQUFDLE9BQU87NEJBQ3hCLGNBQWMsRUFBRSxNQUFNLENBQUMsWUFBWTs0QkFDbkMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTOzRCQUM3QixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYzs0QkFDcEcsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTOzRCQUM3QixhQUFhLEVBQUUsaUNBQWlDOzRCQUNoRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzRCQUNsQyxTQUFTLEVBQUMsTUFBTSxDQUFDLE9BQU87NEJBQ3hCLFdBQVcsRUFBQyxLQUFLO3lCQUVwQixDQUFDO3dCQUNGLElBQUcsTUFBTSxDQUFDLFNBQVMsRUFBQzs0QkFDaEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdkY7NkJBQ0c7NEJBQ0EsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQ3ZEO3dCQUNELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7cUJBQ2pDO3lCQUNHO3dCQUNBLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFFLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztxQkFDakM7b0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxlQUFlLEdBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFHeEMsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxLQUFLLEVBQUMsUUFBUTtRQUV6QixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUcsS0FBSyxJQUFFLENBQUMsSUFBRyxLQUFLLElBQUUsQ0FBQyxFQUFDO1lBQ25CLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUVsRDthQUNJLElBQUcsS0FBSyxJQUFFLENBQUMsSUFBRSxLQUFLLElBQUUsRUFBRSxFQUFDO1lBQ3hCLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRDthQUNHO1lBQ0EsUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDdEIsa0ZBQWtGO0lBRXRGLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEdBQUc7UUFDZCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHdCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsQ0FBRTtRQUNQLElBQUksU0FBUyxDQUFFO1FBQ2YsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFFLENBQUMsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFFLENBQUMsRUFBQztZQUUzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7YUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxZQUFZLElBQUUsRUFBRSxFQUFDO1lBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzNELFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDthQUNHO1lBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUQsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBR0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9FLGdCQUFnQjtRQUNqQiw4RkFBOEY7UUFDN0YsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQy9EO2FBQU07WUFDSCxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUVNLDJCQUFXLEdBQWxCO0lBRUEsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3hJLENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFtQixFQUFXLEVBQUMsUUFBYTtRQUN4QyxJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUMxQixjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxVQUFVLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEQ7YUFBSztZQUNGLFVBQVUsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksaUJBQWlCLENBQUM7UUFDdEIsSUFBSSxlQUFlLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLFlBQVksQ0FBQztRQUNqQixJQUFJLFlBQVksQ0FBQztRQUNqQix1QkFBdUI7UUFDdkIsUUFBUSxHQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUcsUUFBUSxJQUFFLEdBQUcsRUFBQztZQUNiLFFBQVEsR0FBQyxDQUFDLENBQUM7U0FDZDtRQUNELGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDOUgsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsR0FBSSxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkksTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDakMsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDbkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUcsSUFBSSxDQUFDLGVBQWUsSUFBRSxDQUFDLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDO1NBQ2pDO1FBRUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsSUFBRSxFQUFFLENBQUM7WUFDekIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQ2QsSUFBRyxNQUFNLENBQUMsdUJBQXVCLEVBQUM7b0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7b0JBQ3ZDLElBQUksUUFBUSxHQUFHO3dCQUNYLFNBQVMsRUFBQyxNQUFNLENBQUMsT0FBTzt3QkFDeEIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxZQUFZO3dCQUNuQyxXQUFXLEVBQUUsRUFBRTt3QkFDZixXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjO3dCQUN6RixLQUFLLEVBQUUscUNBQXFDO3dCQUM1QyxhQUFhLEVBQUUsS0FBSzt3QkFDcEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzt3QkFDbEMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxPQUFPO3dCQUN4QixhQUFhLEVBQUUsS0FBSzt3QkFDcEIsZ0JBQWdCLEVBQUMsTUFBTSxDQUFDLGNBQWM7cUJBRXpDLENBQUE7b0JBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDdkYsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7d0JBQ2YsSUFBRyxNQUFNLENBQUMsU0FBUyxFQUFDOzRCQUNoQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNsRjs2QkFDRzs0QkFDQSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzt5QkFDbEQ7d0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7cUJBQy9CO3lCQUNHO3dCQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQzt3QkFDL0IsS0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDO3FCQUN6QztpQkFDSjthQUNKO2lCQUNJO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFDeEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7aUJBQy9CO3FCQUNJO29CQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDakMsS0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QzthQUVKO1NBRUo7UUFFRCxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsSUFBRSxFQUFFLENBQUM7WUFDekIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQ2QsSUFBRyxNQUFNLENBQUMsYUFBYSxFQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDN0IsTUFBTSxDQUFDLGFBQWEsR0FBRSxLQUFLLENBQUM7b0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN6QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7aUJBRVI7YUFDSjtpQkFDRztnQkFDQSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUNoQztTQUVKO0lBQ0wsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFBQSxpQkFXQztRQVZJLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUUsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUd6QixDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2xDLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDbEUsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3RFLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRyxJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFBQSxpQkEyR2pCO29CQTFHRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMvRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDcEQsSUFBRyxJQUFJLElBQUUsSUFBSSxDQUFDLFVBQVUsRUFBQzt3QkFDckIsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMxQztvQkFDRixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLElBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDO3FCQUN0QjtvQkFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMxSCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzlFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RGLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTt3QkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFOzRCQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ2hDLGlDQUFpQzs0QkFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN4QyxJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUM7Z0NBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7NkJBQzdDOzRCQUNELElBQUcsTUFBTSxDQUFDLFFBQVEsSUFBRSxDQUFDLEVBQUM7Z0NBQ2xCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFDbEI7NEJBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUMsR0FBQyxFQUFFLENBQUM7NEJBQ2pILEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDcEUsMERBQTBEOzRCQUMxRCxLQUFDLENBQUMsYUFBYSxDQUFDLElBQUksK0NBQXNCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNsRSxJQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQztnQ0FDbkIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7b0NBQ2QsSUFBSSxXQUFXLEdBQUc7d0NBQ2QsU0FBUyxFQUFDLE1BQU0sQ0FBQyxPQUFPO3dDQUN4QixjQUFjLEVBQUUsTUFBTSxDQUFDLFlBQVk7d0NBQ25DLFdBQVcsRUFBRSxNQUFNLENBQUMsU0FBUzt3Q0FDN0IsUUFBUSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUzt3Q0FDbEMsS0FBSyxFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWM7d0NBQ3BHLFdBQVcsRUFBRSxNQUFNLENBQUMsU0FBUzt3Q0FDN0IsYUFBYSxFQUFFLGlDQUFpQzt3Q0FDaEQsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzt3Q0FDbEMsV0FBVyxFQUFDLEtBQUs7cUNBRXBCLENBQUM7b0NBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO3dDQUNsQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FDQUN2Rjt5Q0FDSTt3Q0FDRCxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztxQ0FDdkQ7aUNBQ0o7cUNBQ0c7b0NBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7aUNBQ3JEO2dDQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQ0FDOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2dDQUM5QixLQUFJLENBQUMsZUFBZSxHQUFDLENBQUMsQ0FBQztnQ0FFdkIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs2QkFDakM7aUNBQ0c7Z0NBQ0EsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzZCQUNuQzt3QkFHTCxDQUFDLENBQUMsQ0FBQztxQkFDTjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7NEJBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDOzRCQUM1RSxJQUFJLE1BQU0sR0FBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ25DLElBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO2dDQUNkLElBQUksV0FBVyxHQUFHO29DQUNkLFNBQVMsRUFBQyxNQUFNLENBQUMsT0FBTztvQ0FDeEIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxZQUFZO29DQUNuQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQVM7b0NBQzdCLFFBQVEsRUFBRSxDQUFDO29DQUNYLEtBQUssRUFBRSxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjO29DQUNwRyxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQVM7b0NBQzdCLGFBQWEsRUFBRSxpQ0FBaUM7b0NBQ2hELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU87b0NBQ2xDLFNBQVMsRUFBQyxNQUFNLENBQUMsT0FBTztvQ0FDeEIsV0FBVyxFQUFDLEtBQUs7aUNBRXBCLENBQUM7Z0NBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO29DQUNsQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUN2RjtxQ0FDSTtvQ0FDRCxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztpQ0FDdkQ7NkJBQ0o7aUNBQ0c7Z0NBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUUsQ0FBQyxDQUFDOzZCQUM5Qjs0QkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUM7NEJBQzVCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQzs0QkFDOUIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs0QkFDOUIsS0FBSSxDQUFDLGVBQWUsR0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDckUsS0FBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7d0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO3FCQUNOO2dCQUVMLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUVSO1NBQ0o7SUFFTCxDQUFDO0lBaGlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNXO0lBR2hDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs2Q0FDYztJQUUvQjtRQURDLFFBQVEsQ0FBQyxlQUFNLENBQUM7eUNBQ2E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ3FCO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQzJCO0lBRTlDO1FBREMsUUFBUTswQ0FDYTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpREFDd0I7SUFFOUM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7a0RBQ3lCO0lBRS9DO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tEQUN5QjtJQUUvQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNxQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNxQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNrQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNvQjtJQVN2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNPO0lBckRyQixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBbWlCakI7SUFBRCxZQUFDO0NBbmlCRCxBQW1pQkMsQ0FuaUIwQixFQUFFLENBQUMsU0FBUyxHQW1pQnRDO0FBbmlCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEaWVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVyRGllRXZlbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9ldmVudHMvUGxheWVySnVtcFN1Y2Nlc3NFdmVudFwiO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWwgZnJvbSBcIi4uLy4uLy4uL0dsb2JhbERhdGFcIjtcclxuaW1wb3J0ICogYXMgZWNyeXB0IGZyb20gXCIuLi8uLi8uLi9OZXR3b3JrL2VjcnlwdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHB1YmxpYyBhdXRvSnVtcDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByaXZhdGUgZmFpbENoYW5jZTogTnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBwbGF5ZXJEaWUgPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgcHVibGljIGxlZnRPcmlnaW46IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXHJcbiAgICBwdWJsaWMgcmlnaHRPcmlnaW46IGNjLlZlYzIgPSBjYy52MigpO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYmxvY2tMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBwcm9wTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgbG9hZGluZ0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJsb2NrSW5wdXRMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBpbnN1ZmZpY2llbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGFycmF5UmF0aW86IG51bWJlciA9IDAuNTU2MDQ3MTk3NjQwMTE4O1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwdWJsaWMgY2FuSnVtcCA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwcml2YXRlIGdyZWVuYmxvY2tMaXN0OiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwcml2YXRlIG9yYW5nZWJsb2NrTGlzdDogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcHJpdmF0ZSBwdXJwbGVibG9ja0xpc3Q6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGdyYXNzUHJvcExpc3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBkZXNlcnRQcm9wTGlzdDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHB1cnBsZVByb3BMaXN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBiYWxhbmNlVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5BbW91bnRUZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgd2luQW1vdW50ID0gMDtcclxuICAgIHB1YmxpYyBwZXJmZWN0ID0wO1xyXG4gICAgcHVibGljIHNpbmdsZU1heCA9MDtcclxuICAgIHByaXZhdGUgY3VyckJsb2NrOiBCbG9jayA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG90YWxCZXQ9MDtcclxuICAgIHByaXZhdGUgbmV4dEJsb2NrOiBCbG9jayA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRWYWx1ZSA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSByZWFkeUp1bXBBdWRpbyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWR5SnVtcEF1ZGlvSWQgPSAtMTtcclxuICAgIHByaXZhdGUgZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZ2VuZXJhdGluZ1Njb3JlID1mYWxzZTtcclxuICAgIHRpbWVyZm9yTG9hZGluZz0wO1xyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuYmxvY2tMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDnrKzkuIDkuKrmlrnlnZdcclxuICAgICAgICB0aGlzLmFkZFNjb3JlKDApO1xyXG4gICAgICAgIGxldCBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0WzVdKTtcclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIuYWRkQ2hpbGQoYmxvY2tOb2RlKTtcclxuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KEJsb2NrKTtcclxuICAgICAgICBibG9jay5jbG9zZVBlcmZlY3RTY29yZSgpO1xyXG4gICAgICAgIGJsb2NrTm9kZS5wb3NpdGlvbiA9IHRoaXMuYmxvY2tMYXllci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5sZWZ0T3JpZ2luKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSBibG9jaztcclxuICAgICAgICB0aGlzLm5leHRCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuY3VyckJsb2NrLmdldENlbnRlclBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEJsb2NrKCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hZGRQcm9wKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVUb3VjaCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uUmVhZHlKdW1wLCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkp1bXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlVG91Y2goKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uUmVhZHlKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkmJiF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVhZHlKdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNjb3JlKHZhbHVlKXtcclxuICAgIC8vICAgIC8vIGdsb2JhbC5zZXRCYWxhbmNlKGdsb2JhbC5nZXRCYWxhbmNlKCkgKyB2YWx1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuZ2V0QmFsYW5jZSgpKjEwKS8xMCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50VGV4dC5zdHJpbmcgPShNYXRoLnJvdW5kKCh0aGlzLndpbkFtb3VudCArIHZhbHVlKSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIHRoaXMud2luQW1vdW50ICs9dmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCYWxhbmNlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMCkvMTApLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkVG90YWxCZXQodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudG90YWxCZXQrPXZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoZWNrUXVhbGlmeSgpe1xyXG4gICAgICAgIGlmKGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlPj1jYy5maW5kKFwiQ2FudmFzL0luR2FtZUJldHRpbmdcIikuZ2V0Q29tcG9uZW50KFwiSW5HYW1lQmV0dGluZ1wiKS5jdXJyZW50QmV0dGluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkp1bXAoKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmF1dG9KdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0lucHV0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGp1bXBEaXN0YW5jZSA9IHRoaXMucGxheWVyLmp1bXBEaXN0YW5jZTtcclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLm5vZGUueCArIGp1bXBEaXN0YW5jZSAqIGRpciwgdGhpcy5wbGF5ZXIubm9kZS55ICsganVtcERpc3RhbmNlICogdGhpcy5hcnJheVJhdGlvKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFdvcmxkUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxCZXQoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0UG9zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyQmxvY2sgPSB0aGlzLm5leHRCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VyckJsb2NrLnBsYXlTY29yZUFuaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlPnRoaXMuc2luZ2xlTWF4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVNYXggPSB0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5wbGF0Zm9ybT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZmVjdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5zdG9wQWxsQWN0aW9uKHRoaXMucGxheWVyLnBsYXRmb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tRdWFsaWZ5KCkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IGdsb2JhbC5nYW1lX2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogXCJHZXQgcHJldmlvdXMgYmV0IGFuZCBjaGFuZ2UgYmV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBpX3VybCc6Z2xvYmFsLmFwaV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VCZXRcIjpmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLmlzRW5jcnlwdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVtaXRfcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSs9IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN1ZmZpY2llbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8odGFyZ2V0V29ybGRQb3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9BdWRpb01hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLnBsYXlMb3NlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gIGNjLnJvdGF0ZUJ5KDAuMiwtOTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3N0X2lkJzpnbG9iYWwuaG9zdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpY2tldF9pZCc6IGdsb2JhbC50aWNrZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwuaXNFbmNyeXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlKz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdCYWxhbmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tJbnB1dExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUHJvcCh2YWx1ZSxwb3NpdGlvbil7XHJcblxyXG4gICAgICAgIHZhciBwcm9wTm9kZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKHZhbHVlPj00ICYmdmFsdWU8PTcpe1xyXG4gICAgICAgICAgICBwcm9wTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVzZXJ0UHJvcExpc3QpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih2YWx1ZT49OCYmdmFsdWU8PTEyKXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnB1cnBsZVByb3BMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcHJvcE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXNzUHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BMYXllci5hZGRDaGlsZChwcm9wTm9kZSk7XHJcbiAgICAgICAgcHJvcE5vZGUueSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGxldCBzY2FsZSA9IGJsb2NrLm1pblNjYWxlICsgTWF0aC5yYW5kb20oKSAqIChibG9jay5tYXhTY2FsZSAtIGJsb2NrLm1pblNjYWxlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSW50KG1pbiwgbWF4KXtcclxuICAgICAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLW1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEJsb2NrKCkge1xyXG4gICAgICAgIGxldCBuIDtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlIDtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRWYWx1ZT49NCAmJnRoaXMuY3VycmVudFZhbHVlPD03KXtcclxuXHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9yYW5nZWJsb2NrTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9yYW5nZWJsb2NrTGlzdFtuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jdXJyZW50VmFsdWU+PTgmJnRoaXMuY3VycmVudFZhbHVlPD0xMil7XHJcbiAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnB1cnBsZWJsb2NrTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGJsb2NrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHVycGxlYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JlZW5ibG9ja0xpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICBibG9ja05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyZWVuYmxvY2tMaXN0W25dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmJsb2NrTGF5ZXIuYWRkQ2hpbGQoYmxvY2tOb2RlKTtcclxuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KEJsb2NrKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBibG9jay5taW5TY2FsZSArIE1hdGgucmFuZG9tKCkgKiAoYmxvY2subWF4U2NhbGUgLSBibG9jay5taW5TY2FsZSk7XHJcbiAgICAgICAgLy9sZXQgc2NhbGUgPSAxO1xyXG4gICAgICAgLy8gbGV0IGRpc3RhbmNlID0gYmxvY2subWluRGlzdGFuY2UgKyBNYXRoLnJhbmRvbSgpICogKGJsb2NrLm1heERpc3RhbmNlIC0gYmxvY2subWluRGlzdGFuY2UpO1xyXG4gICAgICAgIGJsb2NrTm9kZS5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGJsb2NrTm9kZS54ID0gdGhpcy5jdXJyQmxvY2subm9kZS54ICsgNTAwO1xyXG4gICAgICAgICAgICBibG9ja05vZGUueSA9IHRoaXMuY3VyckJsb2NrLm5vZGUueSArIDUwMCAqIHRoaXMuYXJyYXlSYXRpbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibG9ja05vZGUueCA9IHRoaXMuY3VyckJsb2NrLm5vZGUueCAtIDUwMDtcclxuICAgICAgICAgICAgYmxvY2tOb2RlLnkgPSB0aGlzLmN1cnJCbG9jay5ub2RlLnkgKyA1MDAgKiB0aGlzLmFycmF5UmF0aW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VyckJsb2NrID0gdGhpcy5uZXh0QmxvY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0QmxvY2sgPSBibG9jaztcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCbG9jaygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrT3ZlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5jdXJyQmxvY2subm9kZS5wb3NpdGlvbikubWFnKCk+IHRoaXMuY3VyckJsb2NrLm5vZGUud2lkdGggLyAyICogdGhpcy5jdXJyQmxvY2subm9kZS5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU3RhZ2UoY2I6RnVuY3Rpb24sY2JUYXJnZXQ/OmFueSkge1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yO1xyXG4gICAgICAgIGxldCBwbGF5ZXJXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnBsYXllci5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5kaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIHBsYXllcldvcmxkUG9zLnN1Yih0aGlzLmxlZnRPcmlnaW4pO1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMubGVmdE9yaWdpbik7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBtb3ZlVmVjdG9yID0gcGxheWVyV29ybGRQb3Muc3ViKHRoaXMucmlnaHRPcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhjYiwgY2JUYXJnZXQpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC43LHRoaXMubm9kZS5wb3NpdGlvbi5zdWIobW92ZVZlY3RvcikpLGZpbmlzaGVkKTtcclxuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC43LGNjLnYyKDAsdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihtb3ZlVmVjdG9yKS55KSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkZW1vR2VuZXJhdGVTY29yZSgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtdWx0aXBsaWVyUGVyZmVjdDtcclxuICAgICAgICB2YXIgbXVsdGlwbGllckNvbnNvO1xyXG4gICAgICAgIHZhciBwbGF0Zm9ybTtcclxuICAgICAgICB2YXIgcGVyZmVjdFNjb3JlO1xyXG4gICAgICAgIHZhciBjb25zb2xlU2NvcmU7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIG11bHRpcGxpZXJcclxuICAgICAgICBwbGF0Zm9ybSA9ICAgKE1hdGgucmFuZG9tKCkgKiAoMSAtIDApICsgMCk7XHJcbiAgICAgICAgaWYocGxhdGZvcm0+PTAuNCl7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtPTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11bHRpcGxpZXJQZXJmZWN0ID0gKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyKSArIDIpO1xyXG4gICAgICAgIG11bHRpcGxpZXJDb25zbyA9IDAuMjtcclxuICAgICAgICBwZXJmZWN0U2NvcmUgPSAoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgKiBNYXRoLmZsb29yKG11bHRpcGxpZXJQZXJmZWN0KSk7XHJcbiAgICAgICAgY29uc29sZVNjb3JlID0gTWF0aC5yb3VuZCgoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcgICogbXVsdGlwbGllckNvbnNvKSAqIDEwKSAvIDEwO1xyXG4gICAgICAgIGdsb2JhbC5jb25zb1Njb3JlID0gY29uc29sZVNjb3JlO1xyXG4gICAgICAgIGdsb2JhbC5wZXJmZWN0U2NvcmUgPSBwZXJmZWN0U2NvcmU7XHJcbiAgICAgICAgZ2xvYmFsLnBsYXRmb3JtID0gcGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlVGV4dC5zdHJpbmcgPSAoTWF0aC5yb3VuZChnbG9iYWwuc2V0dGluZ3MuYmFsYW5jZSoxMDApLzEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMub25BdXRvSnVtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lcmZvckxvYWRpbmc+PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZW5lcmF0aW5nQmFsYW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWl0X29iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvc3RfaWQnOmdsb2JhbC5ob3N0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbWVfY29kZSc6IDIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmV0QW1vdW50JzogY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiSGFwcHkgSnVtcCBiZXQgd2l0aCB0aGVzZSBpbmRleCAxc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfaWRcIjogZ2xvYmFsLnNldHRpbmdzLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcGlfdXJsJzpnbG9iYWwuYXBpX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZVwiOiBcImJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRCZXRTbG90XCI6Z2xvYmFsLmN1cnJlbnRCZXRTbG90LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikucGxheWVyRGllPXRoaXMucGxheWVyRGllO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBsYXllckRpZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5pc0VuY3J5cHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ2NoYW5nZUJldCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfb2JqKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnY2hhbmdlQmV0JywgZW1pdF9vYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IFBsYXllckRpZUV2ZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLnBsYXllckRpZSA9IHRoaXMucGxheWVyRGllO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllckRpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZXR0aW5ncy5iYWxhbmNlIC09IGNjLmZpbmQoXCJDYW52YXMvSW5HYW1lQmV0dGluZ1wiKS5nZXRDb21wb25lbnQoXCJJbkdhbWVCZXR0aW5nXCIpLmN1cnJlbnRCZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ1Njb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVyRGllRXZlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5nZW5lcmF0aW5nU2NvcmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyZm9yTG9hZGluZys9ZHQ7XHJcbiAgICAgICAgICAgIGlmKCFnbG9iYWwuaXNEZW1vKXtcclxuICAgICAgICAgICAgICAgIGlmKGdsb2JhbC5maW5pc2hHZXREYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5maW5pc2hHZXREYXRhID1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2ViZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZW1vR2VuZXJhdGVTY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlYmV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRpbmdTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbWl0Q2hhbmdlYmV0KCl7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3RhZ2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZGRCbG9jaygpO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwiQ2hhbmdlLUJldFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsb2NrSW5wdXRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbkp1bXA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYWxhbmNlKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQXV0b0p1bXAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSYmdGhpcy5hdXRvSnVtcCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDaGlja2VuQ2hhcmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcInJvdGF0ZUFuY2hvci9wYXJ0aWNsZXN5c3RlbVwiLHRoaXMucGxheWVyLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1dG9KdW1wTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdXRvanVtcE1hbmFnZXJcIikudXBkYXRlSnVtcFRpbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5SnVtcEF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucmVhZHlKdW1wQXVkaW8sZmFsc2UsZ2xvYmFsLmdldEVmZmVjdFZvbHVtZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLnJlYWR5SnVtcEF1ZGlvSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG90YWxCZXQoY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWlsID0gdGhpcy5SYW5kb21JbnQoMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQganVtcERpc3RhbmNlID0gNDYwICsgTWF0aC5yYW5kb20oKSAqICg1MjAgLTQ2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmFpbDw9dGhpcy5mYWlsQ2hhbmNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVtcERpc3RhbmNlID0gdGhpcy5SYW5kb21JbnQoMzAwLDM4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbVBlcmZlY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtID09IDEgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnBsYXRmb3JtPTE7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIubm9kZS54ICsganVtcERpc3RhbmNlICogZGlyLCB0aGlzLnBsYXllci5ub2RlLnkgKyBqdW1wRGlzdGFuY2UgKiB0aGlzLmFycmF5UmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRXb3JsZFBvcyA9IHRoaXMucGxheWVyLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXRQb3MgPSB0aGlzLm5leHRCbG9jay5nZXRBbmNob3JMb2NhdGlvbih0YXJnZXRXb3JsZFBvcywgZGlyLGdsb2JhbC5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdFBvcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wVG8oZm9ybWF0UG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJCbG9jayA9IHRoaXMubmV4dEJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJCbG9jay5wbGF5U2NvcmVBbmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJCbG9jay50cnVlU2NvcmU+dGhpcy5zaW5nbGVNYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlTWF4ID0gdGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsLnBsYXRmb3JtPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZlY3QrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwic2NvcmVcIix0aGlzLnBsYXllci5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK01hdGgucm91bmQodGhpcy5jdXJyQmxvY2sudHJ1ZVNjb3JlKjEwKS8xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJzY29yZVwiLHRoaXMucGxheWVyLm5vZGUpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyQmxvY2suc3RvcEFsbEFjdGlvbih0aGlzLnBsYXllci5wbGF0Zm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgUGxheWVySnVtcFN1Y2Nlc3NFdmVudCh0aGlzLmN1cnJCbG9jay5zY29yZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1F1YWxpZnkoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWdsb2JhbC5pc0RlbW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1pdF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogZ2xvYmFsLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aWNrZXRfaWQnOiBnbG9iYWwudGlja2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IHRoaXMuY3VyckJsb2NrLnRydWVTY29yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2FtZV9jb2RlJzogZ2xvYmFsLmdhbWVfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IFwiR2V0IHByZXZpb3VzIGJldCBhbmQgY2hhbmdlIGJldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlQmV0XCI6ZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLmlzRW5jcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZWNyeXB0LmVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW1pdF9yZXN1bHQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2V0U29ja2V0KCkuZW1pdCgnc2VuZC1yZXN1bHQnLCBlbWl0X3Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPXRoaXMuY3VyckJsb2NrLnRydWVTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGF5ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0aW5nQmFsYW5jZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdWZmaWNpZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcFRvKHRhcmdldFdvcmxkUG9zLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0F1ZGlvTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJBdWRpb01hbmFnZXJcIikucGxheUxvc2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICBjYy5yb3RhdGVCeSgwLjIsLTkwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZ2xvYmFsLmlzRGVtbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtaXRfcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9zdF9pZCc6Z2xvYmFsLmhvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBnbG9iYWwuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGlja2V0X2lkJzogZ2xvYmFsLnRpY2tldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXknOiBcIkNoYW5nZSBiZXQ6IFwiICsgY2MuZmluZChcIkNhbnZhcy9JbkdhbWVCZXR0aW5nXCIpLmdldENvbXBvbmVudChcIkluR2FtZUJldHRpbmdcIikuY3VycmVudEJldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1lX2NvZGUnOiBnbG9iYWwuZ2FtZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBcIkdldCBwcmV2aW91cyBiZXQgYW5kIGNoYW5nZSBiZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJfaWQnOiBnbG9iYWwuc2V0dGluZ3MudXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwaV91cmwnOmdsb2JhbC5hcGlfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZUJldFwiOmZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuaXNFbmNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5nZXRTb2NrZXQoKS5lbWl0KCdzZW5kLXJlc3VsdCcsIGVjcnlwdC5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KGVtaXRfcmVzdWx0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmdldFNvY2tldCgpLmVtaXQoJ3NlbmQtcmVzdWx0JywgZW1pdF9yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnNldHRpbmdzLmJhbGFuY2UrPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5vcGFjaXR5PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdMYXllci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGluZ0JhbGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcmZvckxvYWRpbmc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3ZlclBhbmVsXCIpLmdldENvbXBvbmVudChcIk92ZXJQYW5lbFwiKS5pc1F1aXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuSnVtcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sMSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/Network/mobile-detect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ac0b2cH3xCApZMXFJEhNe9', 'mobile-detect');
// src/Network/mobile-detect.js

"use strict";

// THIS FILE IS GENERATED - DO NOT EDIT!

/*!mobile-detect v1.4.5 2021-03-13*/

/*global module:false, define:false*/

/*jshint latedef:false*/

/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
  define(function () {
    'use strict';

    var impl = {};
    impl.mobileDetectRules = {
      "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        "Pixel": "; \\bPixel\\b",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "Xiaomi": "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "OnePlus": "ONEPLUS",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
      },
      "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android [0-9.]+; [a-z-]+; \\bG1\\b",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
      },
      "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "iPadOS": "CPU OS 13",
        "SailfishOS": "Sailfish",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
      },
      "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "\\bEdgiOS\\b|Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
      },
      "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
        "Coast": ["Coast\/[VER]"],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": ["UCWEB[VER]", "UC.*Browser\/[VER]"],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": ["Version\/[VER]", "Safari\/[VER]"],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "SailfishBrowser": "SailfishBrowser\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "Sailfish": "Sailfish [VER]",
        "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
        "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
      },
      "utils": {
        "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
      }
    }; // following patterns come from http://detectmobilebrowsers.com/

    impl.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };
    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;
    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';
    isArray = 'isArray' in Array ? Array.isArray : function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };

    function equalIC(a, b) {
      return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
      var valueLC,
          i,
          len = array.length;

      if (!len || !value) {
        return false;
      }

      valueLC = value.toLowerCase();

      for (i = 0; i < len; ++i) {
        if (valueLC === array[i].toLowerCase()) {
          return true;
        }
      }

      return false;
    }

    function convertPropsToRegExp(object) {
      for (var key in object) {
        if (hasOwnProp.call(object, key)) {
          object[key] = new RegExp(object[key], 'i');
        }
      }
    }

    function prepareUserAgent(userAgent) {
      return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
      var key,
          values,
          value,
          i,
          len,
          verPos,
          mobileDetectRules = impl.mobileDetectRules;

      for (key in mobileDetectRules.props) {
        if (hasOwnProp.call(mobileDetectRules.props, key)) {
          values = mobileDetectRules.props[key];

          if (!isArray(values)) {
            values = [values];
          }

          len = values.length;

          for (i = 0; i < len; ++i) {
            value = values[i];
            verPos = value.indexOf('[VER]');

            if (verPos >= 0) {
              value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
            }

            values[i] = new RegExp(value, 'i');
          }

          mobileDetectRules.props[key] = values;
        }
      }

      convertPropsToRegExp(mobileDetectRules.oss);
      convertPropsToRegExp(mobileDetectRules.phones);
      convertPropsToRegExp(mobileDetectRules.tablets);
      convertPropsToRegExp(mobileDetectRules.uas);
      convertPropsToRegExp(mobileDetectRules.utils); // copy some patterns to oss0 which are tested first (see issue#15)

      mobileDetectRules.oss0 = {
        WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
        WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
      };
    })();
    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */


    impl.findMatch = function (rules, userAgent) {
      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            return key;
          }
        }
      }

      return null;
    };
    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */


    impl.findMatches = function (rules, userAgent) {
      var result = [];

      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            result.push(key);
          }
        }
      }

      return result;
    };
    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */


    impl.getVersionStr = function (propertyName, userAgent) {
      var props = impl.mobileDetectRules.props,
          patterns,
          i,
          len,
          match;

      if (hasOwnProp.call(props, propertyName)) {
        patterns = props[propertyName];
        len = patterns.length;

        for (i = 0; i < len; ++i) {
          match = patterns[i].exec(userAgent);

          if (match !== null) {
            return match[1];
          }
        }
      }

      return null;
    };
    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */


    impl.getVersion = function (propertyName, userAgent) {
      var version = impl.getVersionStr(propertyName, userAgent);
      return version ? impl.prepareVersionNo(version) : NaN;
    };
    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */


    impl.prepareVersionNo = function (version) {
      var numbers;
      numbers = version.split(/[a-z._ \/\-]/i);

      if (numbers.length === 1) {
        version = numbers[0];
      }

      if (numbers.length > 1) {
        version = numbers[0] + '.';
        numbers.shift();
        version += numbers.join('');
      }

      return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
      return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
    };

    impl.isTabletFallback = function (userAgent) {
      return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
      if (cache.mobile !== undefined) {
        return;
      }

      var phone, tablet, phoneSized; // first check for stronger tablet rules, then phone (see issue#5)

      tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);

      if (tablet) {
        cache.mobile = cache.tablet = tablet;
        cache.phone = null;
        return; // unambiguously identified as tablet
      }

      phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);

      if (phone) {
        cache.mobile = cache.phone = phone;
        cache.tablet = null;
        return; // unambiguously identified as phone
      } // our rules haven't found a match -> try more general fallback rules


      if (impl.isMobileFallback(userAgent)) {
        phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);

        if (phoneSized === undefined) {
          cache.mobile = impl.FALLBACK_MOBILE;
          cache.tablet = cache.phone = null;
        } else if (phoneSized) {
          cache.mobile = cache.phone = impl.FALLBACK_PHONE;
          cache.tablet = null;
        } else {
          cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
          cache.phone = null;
        }
      } else if (impl.isTabletFallback(userAgent)) {
        cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
        cache.phone = null;
      } else {
        // not mobile at all!
        cache.mobile = cache.tablet = cache.phone = null;
      }
    }; // t is a reference to a MobileDetect instance


    impl.mobileGrade = function (t) {
      // impl note:
      // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
      // When changes are made in Mobile_Detect.php, copy this method and replace:
      //     $this-> / t.
      //     self::MOBILE_GRADE_(.) / '$1'
      //     , self::VERSION_TYPE_FLOAT / (nothing)
      //     isIOS() / os('iOS')
      //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
      var $isMobile = t.mobile() !== null;

      if ( // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
      t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 || // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
      // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
      // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
      // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
      t.version('Android') > 2.1 && t.is('Webkit') || // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
      t.version('Windows Phone OS') >= 7.0 || // Blackberry 7 - Tested on BlackBerry Torch 9810
      // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
      t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 || // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
      t.match('Playbook.*Tablet') || // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
      t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') || // Palm WebOS 3.0  - Tested on HP TouchPad
      t.match('hp.*TouchPad') || // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
      t.is('Firefox') && t.version('Firefox') >= 12 || // Chrome for Android - Tested on Android 4.0, 4.1 device
      t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 || // Skyfire 4.1 - Tested on Android 2.3 device
      t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 || // Opera Mobile 11.5-12: Tested on Android 2.3
      t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') || // Meego 1.2 - Tested on Nokia 950 and N9
      t.is('MeeGoOS') || // Tizen (pre-release) - Tested on early hardware
      t.is('Tizen') || // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
      // @todo: more tests here!
      t.is('Dolfin') && t.version('Bada') >= 2.0 || // UC Browser - Tested on Android 2.3 device
      (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 || // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
      t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 || // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
      t.is('AndroidOS') && t.is('NookTablet') || // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
      t.version('Chrome') >= 11 && !$isMobile || // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
      t.version('Safari') >= 5.0 && !$isMobile || // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
      t.version('Firefox') >= 4.0 && !$isMobile || // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
      t.version('MSIE') >= 7.0 && !$isMobile || // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
      // @reference: http://my.opera.com/community/openweb/idopera/
      t.version('Opera') >= 10 && !$isMobile) {
        return 'A';
      }

      if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 || // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
      t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 || //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
      t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) || // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
      t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') || // @todo: report this (tested on Nokia N71)
      t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
        return 'B';
      }

      if ( // Blackberry 4.x - Tested on the Curve 8330
      t.version('BlackBerry') < 5.0 || // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
      t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
        return 'C';
      } //All older smartphone platforms and featurephones - Any device that doesn't support media queries
      //will receive the basic, C grade experience.


      return 'C';
    };

    impl.detectOS = function (ua) {
      return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    };
    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */


    function MobileDetect(userAgent, maxPhoneWidth) {
      this.ua = prepareUserAgent(userAgent);
      this._cache = {}; //600dp is typical 7" tablet minimum width

      this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
      constructor: MobileDetect,

      /**
       * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
       * <br>
       * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
       * <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
       * @function MobileDetect#mobile
       */
      mobile: function mobile() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },

      /**
       * Returns the detected phone type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPhone, BlackBerry, Pixel, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
       * Xiaomi, NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile,
       * SimValley, Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the phone family or producer, e.g. "iPhone"
       * @function MobileDetect#phone
       */
      phone: function phone() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },

      /**
       * Returns the detected tablet type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
       * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
       * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
       * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
       * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
       * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
       * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
       * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
       * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
       * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
       * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
       * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
       * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
       * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
       * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
       * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
       * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
       * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
       * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
       * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
       * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
       * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
       * GenericTablet</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
       * @function MobileDetect#tablet
       */
      tablet: function tablet() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },

      /**
       * Returns the (first) detected user-agent string or <tt>null</tt>.
       * <br>
       * The returned user-agent is one of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {String} the key for the detected user-agent or <tt>null</tt>
       * @function MobileDetect#userAgent
       */
      userAgent: function userAgent() {
        if (this._cache.userAgent === undefined) {
          this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
        }

        return this._cache.userAgent;
      },

      /**
       * Returns all detected user-agent strings.
       * <br>
       * The array is empty or contains one or more of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
       * @function MobileDetect#userAgents
       */
      userAgents: function userAgents() {
        if (this._cache.userAgents === undefined) {
          this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
        }

        return this._cache.userAgents;
      },

      /**
       * Returns the detected operating system string or <tt>null</tt>.
       * <br>
       * The operating system is one of following keys:<br>
       * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
       * iOS, iPadOS, SailfishOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
       *
       * @returns {String} the key for the detected operating system.
       * @function MobileDetect#os
       */
      os: function os() {
        if (this._cache.os === undefined) {
          this._cache.os = impl.detectOS(this.ua);
        }

        return this._cache.os;
      },

      /**
       * Get the version (as Number) of the given property in the User-Agent.
       * <br>
       * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon,
       * SailfishBrowser, Gecko, Trident, Presto, Goanna, iOS, Android, Sailfish,
       * BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows CE, Windows
       * NT, Symbian, webOS</tt><br>
       *
       * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
       *          Be careful when comparing this value with '==' operator!
       * @function MobileDetect#version
       */
      version: function version(key) {
        return impl.getVersion(key, this.ua);
      },

      /**
       * Get the version (as String) of the given property in the User-Agent.
       * <br>
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon,
       * SailfishBrowser, Gecko, Trident, Presto, Goanna, iOS, Android, Sailfish,
       * BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows CE, Windows
       * NT, Symbian, webOS</tt><br>
       *
       * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
       *
       * @function MobileDetect#versionStr
       */
      versionStr: function versionStr(key) {
        return impl.getVersionStr(key, this.ua);
      },

      /**
       * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
       *
       * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
       *        tablet family.<br>
       *        For a complete list of possible values, see {@link MobileDetect#userAgent},
       *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
       *        Additionally you have following keys:<br>
       * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
       *
       * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
       *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
       * @function MobileDetect#is
       */
      is: function is(key) {
        return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
      },

      /**
       * Do a quick test against navigator::userAgent.
       *
       * @param {String|RegExp} pattern the pattern, either as String or RegExp
       *                        (a string will be converted to a case-insensitive RegExp).
       * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
       * @function MobileDetect#match
       */
      match: function match(pattern) {
        if (!(pattern instanceof RegExp)) {
          pattern = new RegExp(pattern, 'i');
        }

        return pattern.test(this.ua);
      },

      /**
       * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
       * <br>
       * Obviously this method makes sense in browser environments only (not for Node.js)!
       * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
       *        The argument is optional and if not present or falsy, the value of the constructor is taken.
       * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
       *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
       *          Will always return <code>undefined</code> server-side.
       */
      isPhoneSized: function isPhoneSized(maxPhoneWidth) {
        return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
      },

      /**
       * Returns the mobile grade ('A', 'B', 'C').
       *
       * @returns {String} one of the mobile grades ('A', 'B', 'C').
       * @function MobileDetect#mobileGrade
       */
      mobileGrade: function mobileGrade() {
        if (this._cache.grade === undefined) {
          this._cache.grade = impl.mobileGrade(this);
        }

        return this._cache.grade;
      }
    }; // environment-dependent

    if (typeof window !== 'undefined' && window.screen) {
      MobileDetect.isPhoneSized = function (maxPhoneWidth) {
        return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
      };
    } else {
      MobileDetect.isPhoneSized = function () {};
    } // should not be replaced by a completely new object - just overwrite existing methods


    MobileDetect._impl = impl;
    MobileDetect.version = '1.4.5 2021-03-13';
    return MobileDetect;
  }); // end of call of define()
})(function (undefined) {
  if (typeof module !== 'undefined' && module.exports) {
    return function (factory) {
      module.exports = factory();
    };
  } else if (typeof define === 'function' && define.amd) {
    return define;
  } else if (typeof window !== 'undefined') {
    return function (factory) {
      window.MobileDetect = factory();
    };
  } else {
    // please file a bug if you get this error!
    throw new Error('unknown environment');
  }
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXR3b3JrXFxtb2JpbGUtZGV0ZWN0LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsInVuZGVmaW5lZCIsImltcGwiLCJtb2JpbGVEZXRlY3RSdWxlcyIsImRldGVjdE1vYmlsZUJyb3dzZXJzIiwiZnVsbFBhdHRlcm4iLCJzaG9ydFBhdHRlcm4iLCJ0YWJsZXRQYXR0ZXJuIiwiaGFzT3duUHJvcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiaXNBcnJheSIsIkZBTExCQUNLX1BIT05FIiwiRkFMTEJBQ0tfVEFCTEVUIiwiRkFMTEJBQ0tfTU9CSUxFIiwiQXJyYXkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiY2FsbCIsImVxdWFsSUMiLCJhIiwiYiIsInRvTG93ZXJDYXNlIiwiY29udGFpbnNJQyIsImFycmF5IiwidmFsdWVMQyIsImkiLCJsZW4iLCJsZW5ndGgiLCJjb252ZXJ0UHJvcHNUb1JlZ0V4cCIsIm9iamVjdCIsImtleSIsIlJlZ0V4cCIsInByZXBhcmVVc2VyQWdlbnQiLCJ1c2VyQWdlbnQiLCJzdWJzdHIiLCJpbml0IiwidmFsdWVzIiwidmVyUG9zIiwicHJvcHMiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwib3NzIiwicGhvbmVzIiwidGFibGV0cyIsInVhcyIsInV0aWxzIiwib3NzMCIsIldpbmRvd3NQaG9uZU9TIiwiV2luZG93c01vYmlsZU9TIiwiZmluZE1hdGNoIiwicnVsZXMiLCJ0ZXN0IiwiZmluZE1hdGNoZXMiLCJyZXN1bHQiLCJwdXNoIiwiZ2V0VmVyc2lvblN0ciIsInByb3BlcnR5TmFtZSIsInBhdHRlcm5zIiwibWF0Y2giLCJleGVjIiwiZ2V0VmVyc2lvbiIsInZlcnNpb24iLCJwcmVwYXJlVmVyc2lvbk5vIiwiTmFOIiwibnVtYmVycyIsInNwbGl0Iiwic2hpZnQiLCJqb2luIiwiTnVtYmVyIiwiaXNNb2JpbGVGYWxsYmFjayIsImlzVGFibGV0RmFsbGJhY2siLCJwcmVwYXJlRGV0ZWN0aW9uQ2FjaGUiLCJjYWNoZSIsIm1heFBob25lV2lkdGgiLCJtb2JpbGUiLCJwaG9uZSIsInRhYmxldCIsInBob25lU2l6ZWQiLCJNb2JpbGVEZXRlY3QiLCJpc1Bob25lU2l6ZWQiLCJtb2JpbGVHcmFkZSIsInQiLCIkaXNNb2JpbGUiLCJvcyIsImlzIiwiZGV0ZWN0T1MiLCJ1YSIsImdldERldmljZVNtYWxsZXJTaWRlIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJfY2FjaGUiLCJjb25zdHJ1Y3RvciIsInVzZXJBZ2VudHMiLCJ2ZXJzaW9uU3RyIiwicGF0dGVybiIsImdyYWRlIiwiX2ltcGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjdG9yeSIsImFtZCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCQyxTQUFsQixFQUE2QjtBQUM5QkQsRUFBQUEsTUFBTSxDQUFDLFlBQVk7QUFDZjs7QUFFQSxRQUFJRSxJQUFJLEdBQUcsRUFBWDtBQUVBQSxJQUFBQSxJQUFJLENBQUNDLGlCQUFMLEdBQXlCO0FBQ3pCLGdCQUFVO0FBQ04sa0JBQVUseUJBREo7QUFFTixzQkFBYywwRkFGUjtBQUdOLGlCQUFTLGVBSEg7QUFJTixlQUFPLDRSQUpEO0FBS04saUJBQVMseUZBTEg7QUFNTixnQkFBUSw0R0FORjtBQU9OLG9CQUFZLCtxQkFQTjtBQVFOLG1CQUFXLGsxS0FSTDtBQVNOLGNBQU0sMmhCQVRBO0FBVU4sZ0JBQVEsOElBVkY7QUFXTixnQkFBUSw4QkFYRjtBQVlOLGtCQUFVLHFLQVpKO0FBYU4sc0JBQWMsa0JBYlI7QUFjTixvQkFBWSwrR0FkTjtBQWVOLGdCQUFRLGlCQWZGO0FBZ0JOLGlCQUFTLDJHQWhCSDtBQWlCTixtQkFBVyx3YUFqQkw7QUFrQk4sZUFBTyxtSEFsQkQ7QUFtQk4sZ0JBQVEsNE9BbkJGO0FBb0JOLG1CQUFXLHFDQXBCTDtBQXFCTixxQkFB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YixNQUFBQSxNQUFNLENBQUNWLFlBQVAsR0FBc0J1QixPQUFPLEVBQTdCO0FBQWtDLEtBQTlEO0FBQ0gsR0FGTSxNQUVBO0FBQ0g7QUFDQSxVQUFNLElBQUlFLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0g7QUFDSixDQVhFLEVBbCtCSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVEhJUyBGSUxFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBFRElUIVxuLyohbW9iaWxlLWRldGVjdCB2MS40LjUgMjAyMS0wMy0xMyovXG4vKmdsb2JhbCBtb2R1bGU6ZmFsc2UsIGRlZmluZTpmYWxzZSovXG4vKmpzaGludCBsYXRlZGVmOmZhbHNlKi9cbi8qIUBsaWNlbnNlIENvcHlyaWdodCAyMDEzLCBIZWlucmljaCBHb2VibCwgTGljZW5zZTogTUlULCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzKi9cbihmdW5jdGlvbiAoZGVmaW5lLCB1bmRlZmluZWQpIHtcbmRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGltcGwgPSB7fTtcblxuICAgIGltcGwubW9iaWxlRGV0ZWN0UnVsZXMgPSB7XG4gICAgXCJwaG9uZXNcIjoge1xuICAgICAgICBcImlQaG9uZVwiOiBcIlxcXFxiaVBob25lXFxcXGJ8XFxcXGJpUG9kXFxcXGJcIixcbiAgICAgICAgXCJCbGFja0JlcnJ5XCI6IFwiQmxhY2tCZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW1bMC05XSt8XFxcXGIoQkJBMTAwfEJCQjEwMHxCQkQxMDB8QkJFMTAwfEJCRjEwMHxTVEgxMDApXFxcXGItWzAtOV0rXCIsXG4gICAgICAgIFwiUGl4ZWxcIjogXCI7IFxcXFxiUGl4ZWxcXFxcYlwiLFxuICAgICAgICBcIkhUQ1wiOiBcIkhUQ3xIVEMuKihTZW5zYXRpb258RXZvfFZpc2lvbnxFeHBsb3Jlcnw2ODAwfDgxMDB8ODkwMHxBNzI3MnxTNTEwZXxDMTEwZXxMZWdlbmR8RGVzaXJlfFQ4MjgyKXxBUFg1MTVDS1R8UXRlazkwOTB8QVBBOTI5MktUfEhEX21pbml8U2Vuc2F0aW9uLipaNzEwZXxQRzg2MTAwfFo3MTVlfERlc2lyZS4qKEE4MTgxfEhEKXxBRFI2MjAwfEFEUjY0MDBMfEFEUjY0MjV8MDAxSFR8SW5zcGlyZSA0R3xBbmRyb2lkLipcXFxcYkVWT1xcXFxifFQtTW9iaWxlIEcxfFo1MjBtfEFuZHJvaWQgWzAtOS5dKzsgUGl4ZWxcIixcbiAgICAgICAgXCJOZXh1c1wiOiBcIk5leHVzIE9uZXxOZXh1cyBTfEdhbGF4eS4qTmV4dXN8QW5kcm9pZC4qTmV4dXMuKk1vYmlsZXxOZXh1cyA0fE5leHVzIDV8TmV4dXMgNVh8TmV4dXMgNlwiLFxuICAgICAgICBcIkRlbGxcIjogXCJEZWxsWztdPyAoU3RyZWFrfEFlcm98VmVudWV8VmVudWUgUHJvfEZsYXNofFNtb2tlfE1pbmkgM2lYKXxYQ0QyOHxYQ0QzNXxcXFxcYjAwMURMXFxcXGJ8XFxcXGIxMDFETFxcXFxifFxcXFxiR1MwMVxcXFxiXCIsXG4gICAgICAgIFwiTW90b3JvbGFcIjogXCJNb3Rvcm9sYXxEUk9JRFh8RFJPSUQgQklPTklDfFxcXFxiRHJvaWRcXFxcYi4qQnVpbGR8QW5kcm9pZC4qWG9vbXxIUkkzOXxNT1QtfEExMjYwfEExNjgwfEE1NTV8QTg1M3xBODU1fEE5NTN8QTk1NXxBOTU2fE1vdG9yb2xhLipFTEVDVFJJRll8TW90b3JvbGEuKmkxfGk4Njd8aTk0MHxNQjIwMHxNQjMwMHxNQjUwMXxNQjUwMnxNQjUwOHxNQjUxMXxNQjUyMHxNQjUyNXxNQjUyNnxNQjYxMXxNQjYxMnxNQjYzMnxNQjgxMHxNQjg1NXxNQjg2MHxNQjg2MXxNQjg2NXxNQjg3MHxNRTUwMXxNRTUwMnxNRTUxMXxNRTUyNXxNRTYwMHxNRTYzMnxNRTcyMnxNRTgxMXxNRTg2MHxNRTg2M3xNRTg2NXxNVDYyMHxNVDcxMHxNVDcxNnxNVDcyMHxNVDgxMHxNVDg3MHxNVDkxN3xNb3Rvcm9sYS4qVElUQU5JVU18V1g0MzV8V1g0NDV8WFQzMDB8WFQzMDF8WFQzMTF8WFQzMTZ8WFQzMTd8WFQzMTl8WFQzMjB8WFQzOTB8WFQ1MDJ8WFQ1MzB8WFQ1MzF8WFQ1MzJ8WFQ1MzV8WFQ2MDN8WFQ2MTB8WFQ2MTF8WFQ2MTV8WFQ2ODF8WFQ3MDF8WFQ3MDJ8WFQ3MTF8WFQ3MjB8WFQ4MDB8WFQ4MDZ8WFQ4NjB8WFQ4NjJ8WFQ4NzV8WFQ4ODJ8WFQ4ODN8WFQ4OTR8WFQ5MDF8WFQ5MDd8WFQ5MDl8WFQ5MTB8WFQ5MTJ8WFQ5Mjh8WFQ5MjZ8WFQ5MTV8WFQ5MTl8WFQ5MjV8WFQxMDIxfFxcXFxiTW90byBFXFxcXGJ8WFQxMDY4fFhUMTA5MnxYVDEwNTJcIixcbiAgICAgICAgXCJTYW1zdW5nXCI6IFwiXFxcXGJTYW1zdW5nXFxcXGJ8U00tRzk1MEZ8U00tRzk1NUZ8U00tRzkyNTB8R1QtMTkzMDB8U0dILUkzMzd8QkdULVM1MjMwfEdULUIyMTAwfEdULUIyNzAwfEdULUIyNzEwfEdULUIzMjEwfEdULUIzMzEwfEdULUIzNDEwfEdULUIzNzMwfEdULUIzNzQwfEdULUI1NTEwfEdULUI1NTEyfEdULUI1NzIyfEdULUI2NTIwfEdULUI3MzAwfEdULUI3MzIwfEdULUI3MzMwfEdULUI3MzUwfEdULUI3NTEwfEdULUI3NzIyfEdULUI3ODAwfEdULUMzMDEwfEdULUMzMDExfEdULUMzMDYwfEdULUMzMjAwfEdULUMzMjEyfEdULUMzMjEySXxHVC1DMzI2MnxHVC1DMzIyMnxHVC1DMzMwMHxHVC1DMzMwMEt8R1QtQzMzMDN8R1QtQzMzMDNLfEdULUMzMzEwfEdULUMzMzIyfEdULUMzMzMwfEdULUMzMzUwfEdULUMzNTAwfEdULUMzNTEwfEdULUMzNTMwfEdULUMzNjMwfEdULUMzNzgwfEdULUM1MDEwfEdULUM1MjEyfEdULUM2NjIwfEdULUM2NjI1fEdULUM2NzEyfEdULUUxMDUwfEdULUUxMDcwfEdULUUxMDc1fEdULUUxMDgwfEdULUUxMDgxfEdULUUxMDg1fEdULUUxMDg3fEdULUUxMTAwfEdULUUxMTA3fEdULUUxMTEwfEdULUUxMTIwfEdULUUxMTI1fEdULUUxMTMwfEdULUUxMTYwfEdULUUxMTcwfEdULUUxMTc1fEdULUUxMTgwfEdULUUxMTgyfEdULUUxMjAwfEdULUUxMjEwfEdULUUxMjI1fEdULUUxMjMwfEdULUUxMzkwfEdULUUyMTAwfEdULUUyMTIwfEdULUUyMTIxfEdULUUyMTUyfEdULUUyMjIwfEdULUUyMjIyfEdULUUyMjMwfEdULUUyMjMyfEdULUUyMjUwfEdULUUyMzcwfEdULUUyNTUwfEdULUUyNjUyfEdULUUzMjEwfEdULUUzMjEzfEdULUk1NTAwfEdULUk1NTAzfEdULUk1NzAwfEdULUk1ODAwfEdULUk1ODAxfEdULUk2NDEwfEdULUk2NDIwfEdULUk3MTEwfEdULUk3NDEwfEdULUk3NTAwfEdULUk4MDAwfEdULUk4MTUwfEdULUk4MTYwfEdULUk4MTkwfEdULUk4MzIwfEdULUk4MzMwfEdULUk4MzUwfEdULUk4NTMwfEdULUk4NzAwfEdULUk4NzAzfEdULUk4OTEwfEdULUk5MDAwfEdULUk5MDAxfEdULUk5MDAzfEdULUk5MDEwfEdULUk5MDIwfEdULUk5MDIzfEdULUk5MDcwfEdULUk5MDgyfEdULUk5MTAwfEdULUk5MTAzfEdULUk5MjIwfEdULUk5MjUwfEdULUk5MzAwfEdULUk5MzA1fEdULUk5NTAwfEdULUk5NTA1fEdULU0zNTEwfEdULU01NjUwfEdULU03NTAwfEdULU03NjAwfEdULU03NjAzfEdULU04ODAwfEdULU04OTEwfEdULU43MDAwfEdULVMzMTEwfEdULVMzMzEwfEdULVMzMzUwfEdULVMzMzUzfEdULVMzMzcwfEdULVMzNjUwfEdULVMzNjUzfEdULVMzNzcwfEdULVMzODUwfEdULVM1MjEwfEdULVM1MjIwfEdULVM1MjI5fEdULVM1MjMwfEdULVM1MjMzfEdULVM1MjUwfEdULVM1MjUzfEdULVM1MjYwfEdULVM1MjYzfEdULVM1MjcwfEdULVM1MzAwfEdULVM1MzMwfEdULVM1MzUwfEdULVM1MzYwfEdULVM1MzYzfEdULVM1MzY5fEdULVM1MzgwfEdULVM1MzgwRHxHVC1TNTU2MHxHVC1TNTU3MHxHVC1TNTYwMHxHVC1TNTYwM3xHVC1TNTYxMHxHVC1TNTYyMHxHVC1TNTY2MHxHVC1TNTY3MHxHVC1TNTY5MHxHVC1TNTc1MHxHVC1TNTc4MHxHVC1TNTgzMHxHVC1TNTgzOXxHVC1TNjEwMnxHVC1TNjUwMHxHVC1TNzA3MHxHVC1TNzIwMHxHVC1TNzIyMHxHVC1TNzIzMHxHVC1TNzIzM3xHVC1TNzI1MHxHVC1TNzUwMHxHVC1TNzUzMHxHVC1TNzU1MHxHVC1TNzU2MnxHVC1TNzcxMHxHVC1TODAwMHxHVC1TODAwM3xHVC1TODUwMHxHVC1TODUzMHxHVC1TODYwMHxTQ0gtQTMxMHxTQ0gtQTUzMHxTQ0gtQTU3MHxTQ0gtQTYxMHxTQ0gtQTYzMHxTQ0gtQTY1MHxTQ0gtQTc5MHxTQ0gtQTc5NXxTQ0gtQTg1MHxTQ0gtQTg3MHxTQ0gtQTg5MHxTQ0gtQTkzMHxTQ0gtQTk1MHxTQ0gtQTk3MHxTQ0gtQTk5MHxTQ0gtSTEwMHxTQ0gtSTExMHxTQ0gtSTQwMHxTQ0gtSTQwNXxTQ0gtSTUwMHxTQ0gtSTUxMHxTQ0gtSTUxNXxTQ0gtSTYwMHxTQ0gtSTczMHxTQ0gtSTc2MHxTQ0gtSTc3MHxTQ0gtSTgzMHxTQ0gtSTkxMHxTQ0gtSTkyMHxTQ0gtSTk1OXxTQ0gtTEMxMXxTQ0gtTjE1MHxTQ0gtTjMwMHxTQ0gtUjEwMHxTQ0gtUjMwMHxTQ0gtUjM1MXxTQ0gtUjQwMHxTQ0gtUjQxMHxTQ0gtVDMwMHxTQ0gtVTMxMHxTQ0gtVTMyMHxTQ0gtVTM1MHxTQ0gtVTM2MHxTQ0gtVTM2NXxTQ0gtVTM3MHxTQ0gtVTM4MHxTQ0gtVTQxMHxTQ0gtVTQzMHxTQ0gtVTQ1MHxTQ0gtVTQ2MHxTQ0gtVTQ3MHxTQ0gtVTQ5MHxTQ0gtVTU0MHxTQ0gtVTU1MHxTQ0gtVTYyMHxTQ0gtVTY0MHxTQ0gtVTY1MHxTQ0gtVTY2MHxTQ0gtVTcwMHxTQ0gtVTc0MHxTQ0gtVTc1MHxTQ0gtVTgxMHxTQ0gtVTgyMHxTQ0gtVTkwMHxTQ0gtVTk0MHxTQ0gtVTk2MHxTQ1MtMjZVQ3xTR0gtQTEwN3xTR0gtQTExN3xTR0gtQTEyN3xTR0gtQTEzN3xTR0gtQTE1N3xTR0gtQTE2N3xTR0gtQTE3N3xTR0gtQTE4N3xTR0gtQTE5N3xTR0gtQTIyN3xTR0gtQTIzN3xTR0gtQTI1N3xTR0gtQTQzN3xTR0gtQTUxN3xTR0gtQTU5N3xTR0gtQTYzN3xTR0gtQTY1N3xTR0gtQTY2N3xTR0gtQTY4N3xTR0gtQTY5N3xTR0gtQTcwN3xTR0gtQTcxN3xTR0gtQTcyN3xTR0gtQTczN3xTR0gtQTc0N3xTR0gtQTc2N3xTR0gtQTc3N3xTR0gtQTc5N3xTR0gtQTgxN3xTR0gtQTgyN3xTR0gtQTgzN3xTR0gtQTg0N3xTR0gtQTg2N3xTR0gtQTg3N3xTR0gtQTg4N3xTR0gtQTg5N3xTR0gtQTkyN3xTR0gtQjEwMHxTR0gtQjEzMHxTR0gtQjIwMHxTR0gtQjIyMHxTR0gtQzEwMHxTR0gtQzExMHxTR0gtQzEyMHxTR0gtQzEzMHxTR0gtQzE0MHxTR0gtQzE2MHxTR0gtQzE3MHxTR0gtQzE4MHxTR0gtQzIwMHxTR0gtQzIwN3xTR0gtQzIxMHxTR0gtQzIyNXxTR0gtQzIzMHxTR0gtQzQxN3xTR0gtQzQ1MHxTR0gtRDMwN3xTR0gtRDM0N3xTR0gtRDM1N3xTR0gtRDQwN3xTR0gtRDQxNXxTR0gtRDc4MHxTR0gtRDgwN3xTR0gtRDk4MHxTR0gtRTEwNXxTR0gtRTIwMHxTR0gtRTMxNXxTR0gtRTMxNnxTR0gtRTMxN3xTR0gtRTMzNXxTR0gtRTU5MHxTR0gtRTYzNXxTR0gtRTcxNXxTR0gtRTg5MHxTR0gtRjMwMHxTR0gtRjQ4MHxTR0gtSTIwMHxTR0gtSTMwMHxTR0gtSTMyMHxTR0gtSTU1MHxTR0gtSTU3N3xTR0gtSTYwMHxTR0gtSTYwN3xTR0gtSTYxN3xTR0gtSTYyN3xTR0gtSTYzN3xTR0gtSTY3N3xTR0gtSTcwMHxTR0gtSTcxN3xTR0gtSTcyN3xTR0gtaTc0N018U0dILUk3Nzd8U0dILUk3ODB8U0dILUk4Mjd8U0dILUk4NDd8U0dILUk4NTd8U0dILUk4OTZ8U0dILUk4OTd8U0dILUk5MDB8U0dILUk5MDd8U0dILUk5MTd8U0dILUk5Mjd8U0dILUk5Mzd8U0dILUk5OTd8U0dILUoxNTB8U0dILUoyMDB8U0dILUwxNzB8U0dILUw3MDB8U0dILU0xMTB8U0dILU0xNTB8U0dILU0yMDB8U0dILU4xMDV8U0dILU41MDB8U0dILU42MDB8U0dILU42MjB8U0dILU42MjV8U0dILU43MDB8U0dILU43MTB8U0dILVAxMDd8U0dILVAyMDd8U0dILVAzMDB8U0dILVAzMTB8U0dILVA1MjB8U0dILVA3MzV8U0dILVA3Nzd8U0dILVExMDV8U0dILVIyMTB8U0dILVIyMjB8U0dILVIyMjV8U0dILVMxMDV8U0dILVMzMDd8U0dILVQxMDl8U0dILVQxMTl8U0dILVQxMzl8U0dILVQyMDl8U0dILVQyMTl8U0dILVQyMjl8U0dILVQyMzl8U0dILVQyNDl8U0dILVQyNTl8U0dILVQzMDl8U0dILVQzMTl8U0dILVQzMjl8U0dILVQzMzl8U0dILVQzNDl8U0dILVQzNTl8U0dILVQzNjl8U0dILVQzNzl8U0dILVQ0MDl8U0dILVQ0Mjl8U0dILVQ0Mzl8U0dILVQ0NTl8U0dILVQ0Njl8U0dILVQ0Nzl8U0dILVQ0OTl8U0dILVQ1MDl8U0dILVQ1MTl8U0dILVQ1Mzl8U0dILVQ1NTl8U0dILVQ1ODl8U0dILVQ2MDl8U0dILVQ2MTl8U0dILVQ2Mjl8U0dILVQ2Mzl8U0dILVQ2NTl8U0dILVQ2Njl8U0dILVQ2Nzl8U0dILVQ3MDl8U0dILVQ3MTl8U0dILVQ3Mjl8U0dILVQ3Mzl8U0dILVQ3NDZ8U0dILVQ3NDl8U0dILVQ3NTl8U0dILVQ3Njl8U0dILVQ4MDl8U0dILVQ4MTl8U0dILVQ4Mzl8U0dILVQ5MTl8U0dILVQ5Mjl8U0dILVQ5Mzl8U0dILVQ5NTl8U0dILVQ5ODl8U0dILVUxMDB8U0dILVUyMDB8U0dILVU4MDB8U0dILVYyMDV8U0dILVYyMDZ8U0dILVgxMDB8U0dILVgxMDV8U0dILVgxMjB8U0dILVgxNDB8U0dILVg0MjZ8U0dILVg0Mjd8U0dILVg0NzV8U0dILVg0OTV8U0dILVg0OTd8U0dILVg1MDd8U0dILVg2MDB8U0dILVg2MTB8U0dILVg2MjB8U0dILVg2MzB8U0dILVg3MDB8U0dILVg4MjB8U0dILVg4OTB8U0dILVoxMzB8U0dILVoxNTB8U0dILVoxNzB8U0dILVpYMTB8U0dILVpYMjB8U0hXLU0xMTB8U1BILUExMjB8U1BILUE0MDB8U1BILUE0MjB8U1BILUE0NjB8U1BILUE1MDB8U1BILUE1NjB8U1BILUE2MDB8U1BILUE2MjB8U1BILUE2NjB8U1BILUE3MDB8U1BILUE3NDB8U1BILUE3NjB8U1BILUE3OTB8U1BILUE4MDB8U1BILUE4MjB8U1BILUE4NDB8U1BILUE4ODB8U1BILUE5MDB8U1BILUE5NDB8U1BILUE5NjB8U1BILUQ2MDB8U1BILUQ3MDB8U1BILUQ3MTB8U1BILUQ3MjB8U1BILUkzMDB8U1BILUkzMjV8U1BILUkzMzB8U1BILUkzNTB8U1BILUk1MDB8U1BILUk2MDB8U1BILUk3MDB8U1BILUw3MDB8U1BILU0xMDB8U1BILU0yMjB8U1BILU0yNDB8U1BILU0zMDB8U1BILU0zMDV8U1BILU0zMjB8U1BILU0zMzB8U1BILU0zNTB8U1BILU0zNjB8U1BILU0zNzB8U1BILU0zODB8U1BILU01MTB8U1BILU01NDB8U1BILU01NTB8U1BILU01NjB8U1BILU01NzB8U1BILU01ODB8U1BILU02MTB8U1BILU02MjB8U1BILU02MzB8U1BILU04MDB8U1BILU04MTB8U1BILU04NTB8U1BILU05MDB8U1BILU05MTB8U1BILU05MjB8U1BILU05MzB8U1BILU4xMDB8U1BILU4yMDB8U1BILU4yNDB8U1BILU4zMDB8U1BILU40MDB8U1BILVo0MDB8U1dDLUUxMDB8U0NILWk5MDl8R1QtTjcxMDB8R1QtTjcxMDV8U0NILUk1MzV8U00tTjkwMEF8U0dILUkzMTd8U0dILVQ5OTlMfEdULVM1MzYwQnxHVC1JODI2MnxHVC1TNjgwMnxHVC1TNjMxMnxHVC1TNjMxMHxHVC1TNTMxMnxHVC1TNTMxMHxHVC1JOTEwNXxHVC1JODUxMHxHVC1TNjc5ME58U00tRzcxMDV8U00tTjkwMDV8R1QtUzUzMDF8R1QtSTkyOTV8R1QtSTkxOTV8U00tQzEwMXxHVC1TNzM5MnxHVC1TNzU2MHxHVC1CNzYxMHxHVC1JNTUxMHxHVC1TNzU4MnxHVC1TNzUzMEV8R1QtSTg3NTB8U00tRzkwMDZWfFNNLUc5MDA4VnxTTS1HOTAwOUR8U00tRzkwMEF8U00tRzkwMER8U00tRzkwMEZ8U00tRzkwMEh8U00tRzkwMEl8U00tRzkwMEp8U00tRzkwMEt8U00tRzkwMEx8U00tRzkwME18U00tRzkwMFB8U00tRzkwMFI0fFNNLUc5MDBTfFNNLUc5MDBUfFNNLUc5MDBWfFNNLUc5MDBXOHxTSFYtRTE2MEt8U0NILVA3MDl8U0NILVA3Mjl8U00tVDI1NTh8R1QtSTkyMDV8U00tRzkzNTB8U00tSjEyMEZ8U00tRzkyMEZ8U00tRzkyMFZ8U00tRzkzMEZ8U00tTjkxMEN8U00tQTMxMEZ8R1QtSTkxOTB8U00tSjUwMEZOfFNNLUc5MDNGfFNNLUozMzBGfFNNLUc2MTBGfFNNLUc5ODFCfFNNLUc4OTJBfFNNLUE1MzBGXCIsXG4gICAgICAgIFwiTEdcIjogXCJcXFxcYkxHXFxcXGI7fExHWy0gXT8oQzgwMHxDOTAwfEU0MDB8RTYxMHxFOTAwfEUtOTAwfEYxNjB8RjE4MEt8RjE4MEx8RjE4MFN8NzMwfDg1NXxMMTYwfExTNzQwfExTODQwfExTOTcwfExVNjIwMHxNUzY5MHxNUzY5NXxNUzc3MHxNUzg0MHxNUzg3MHxNUzkxMHxQNTAwfFA3MDB8UDcwNXxWTTY5NnxBUzY4MHxBUzY5NXxBWDg0MHxDNzI5fEU5NzB8R1M1MDV8MjcyfEMzOTV8RTczOUJLfEU5NjB8TDU1Q3xMNzVDfExTNjk2fExTODYwfFA3NjlCS3xQMzUwfFA1MDB8UDUwOXxQODcwfFVOMjcyfFVTNzMwfFZTODQwfFZTOTUwfExOMjcyfExONTEwfExTNjcwfExTODU1fExXNjkwfE1OMjcwfE1ONTEwfFA1MDl8UDc2OXxQOTMwfFVOMjAwfFVOMjcwfFVONTEwfFVONjEwfFVTNjcwfFVTNzQwfFVTNzYwfFVYMjY1fFVYODQwfFZOMjcxfFZONTMwfFZTNjYwfFZTNzAwfFZTNzQwfFZTNzUwfFZTOTEwfFZTOTIwfFZTOTMwfFZYOTIwMHxWWDExMDAwfEFYODQwQXxMVzc3MHxQNTA2fFA5MjV8UDk5OXxFNjEyfEQ5NTV8RDgwMnxNUzMyM3xNMjU3KXxMTS1HNzEwXCIsXG4gICAgICAgIFwiU29ueVwiOiBcIlNvbnlTVHxTb255TFR8U29ueUVyaWNzc29ufFNvbnlFcmljc3NvbkxUMTVpdnxMVDE4aXxFMTBpfExUMjhofExUMjZ3fFNvbnlFcmljc3Nvbk1UMjdpfEM1MzAzfEM2OTAyfEM2OTAzfEM2OTA2fEM2OTQzfEQyNTMzfFNPVjM0fDYwMVNPfEY4MzMyXCIsXG4gICAgICAgIFwiQXN1c1wiOiBcIkFzdXMuKkdhbGF4eXxQYWRGb25lLipNb2JpbGVcIixcbiAgICAgICAgXCJYaWFvbWlcIjogXCJeKD8hLipcXFxcYngxMVxcXFxiKS4qeGlhb21pLiokfFBPQ09QSE9ORSBGMXxNSSA4fFJlZG1pIE5vdGUgOVN8UmVkbWkgTm90ZSA1QSBQcmltZXxOMkc0N0h8TTIwMDFKMkd8TTIwMDFKMkl8TTE4MDVFMTBBfE0yMDA0SjExR3xNMTkwMkYxR3xNMjAwMko5R3xNMjAwNEoxOUd8TTIwMDNKNkExR1wiLFxuICAgICAgICBcIk5va2lhTHVtaWFcIjogXCJMdW1pYSBbMC05XXszLDR9XCIsXG4gICAgICAgIFwiTWljcm9tYXhcIjogXCJNaWNyb21heC4qXFxcXGIoQTIxMHxBOTJ8QTg4fEE3MnxBMTExfEExMTBRfEExMTV8QTExNnxBMTEwfEE5MFN8QTI2fEE1MXxBMzV8QTU0fEEyNXxBMjd8QTg5fEE2OHxBNjV8QTU3fEE5MClcXFxcYlwiLFxuICAgICAgICBcIlBhbG1cIjogXCJQYWxtU291cmNlfFBhbG1cIixcbiAgICAgICAgXCJWZXJ0dVwiOiBcIlZlcnR1fFZlcnR1LipMdGR8VmVydHUuKkFzY2VudHxWZXJ0dS4qQXl4dGF8VmVydHUuKkNvbnN0ZWxsYXRpb24oRnxRdWVzdCk/fFZlcnR1LipNb25pa2F8VmVydHUuKlNpZ25hdHVyZVwiLFxuICAgICAgICBcIlBhbnRlY2hcIjogXCJQQU5URUNIfElNLUE4NTBTfElNLUE4NDBTfElNLUE4MzBMfElNLUE4MzBLfElNLUE4MzBTfElNLUE4MjBMfElNLUE4MTBLfElNLUE4MTBTfElNLUE4MDBTfElNLVQxMDBLfElNLUE3MjVMfElNLUE3ODBMfElNLUE3NzVDfElNLUE3NzBLfElNLUE3NjBTfElNLUE3NTBLfElNLUE3NDBTfElNLUE3MzBTfElNLUE3MjBMfElNLUE3MTBLfElNLUE2OTBMfElNLUE2OTBTfElNLUE2NTBTfElNLUE2MzBLfElNLUE2MDBTfFZFR0EgUFRMMjF8UFQwMDN8UDgwMTB8QURSOTEwTHxQNjAzMHxQNjAyMHxQOTA3MHxQNDEwMHxQOTA2MHxQNTAwMHxDRE04OTkyfFRYVDgwNDV8QURSODk5NXxJUzExUFR8UDIwMzB8UDYwMTB8UDgwMDB8UFQwMDJ8SVMwNnxDRE04OTk5fFA5MDUwfFBUMDAxfFRYVDgwNDB8UDIwMjB8UDkwMjB8UDIwMDB8UDcwNDB8UDcwMDB8Qzc5MFwiLFxuICAgICAgICBcIkZseVwiOiBcIklRMjMwfElRNDQ0fElRNDUwfElRNDQwfElRNDQyfElRNDQxfElRMjQ1fElRMjU2fElRMjM2fElRMjU1fElRMjM1fElRMjQ1fElRMjc1fElRMjQwfElRMjg1fElRMjgwfElRMjcwfElRMjYwfElRMjUwXCIsXG4gICAgICAgIFwiV2lrb1wiOiBcIktJVEUgNEd8SElHSFdBWXxHRVRBV0FZfFNUQUlSV0FZfERBUktTSURFfERBUktGVUxMfERBUktOSUdIVHxEQVJLTU9PTnxTTElERXxXQVggNEd8UkFJTkJPV3xCTE9PTXxTVU5TRVR8R09BKD8hbm5hKXxMRU5OWXxCQVJSWXxJR0dZfE9aWll8Q0lOSyBGSVZFfENJTksgUEVBWHxDSU5LIFBFQVggMnxDSU5LIFNMSU18Q0lOSyBTTElNIDJ8Q0lOSyArfENJTksgS0lOR3xDSU5LIFBFQVh8Q0lOSyBTTElNfFNVQkxJTVwiLFxuICAgICAgICBcImlNb2JpbGVcIjogXCJpLW1vYmlsZSAoSVF8aS1TVFlMRXxpZGVhfFpBQXxIaXR6KVwiLFxuICAgICAgICBcIlNpbVZhbGxleVwiOiBcIlxcXFxiKFNQLTgwfFhULTkzMHxTWC0zNDB8WFQtOTMwfFNYLTMxMHxTUC0zNjB8U1A2MHxTUFQtODAwfFNQLTEyMHxTUFQtODAwfFNQLTE0MHxTUFgtNXxTUFgtOHxTUC0xMDB8U1BYLTh8U1BYLTEyKVxcXFxiXCIsXG4gICAgICAgIFwiV29sZmdhbmdcIjogXCJBVC1CMjREfEFULUFTNTBIRHxBVC1BUzQwV3xBVC1BUzU1SER8QVQtQVM0NXEyfEFULUIyNkR8QVQtQVM1MFFcIixcbiAgICAgICAgXCJBbGNhdGVsXCI6IFwiQWxjYXRlbFwiLFxuICAgICAgICBcIk5pbnRlbmRvXCI6IFwiTmludGVuZG8gKDNEU3xTd2l0Y2gpXCIsXG4gICAgICAgIFwiQW1vaVwiOiBcIkFtb2lcIixcbiAgICAgICAgXCJJTlFcIjogXCJJTlFcIixcbiAgICAgICAgXCJPbmVQbHVzXCI6IFwiT05FUExVU1wiLFxuICAgICAgICBcIkdlbmVyaWNQaG9uZVwiOiBcIlRhcGF0YWxrfFBEQTt8U0FHRU18XFxcXGJtbXBcXFxcYnxwb2NrZXR8XFxcXGJwc3BcXFxcYnxzeW1iaWFufFNtYXJ0cGhvbmV8c21hcnRmb258dHJlb3x1cC5icm93c2VyfHVwLmxpbmt8dm9kYWZvbmV8XFxcXGJ3YXBcXFxcYnxub2tpYXxTZXJpZXM0MHxTZXJpZXM2MHxTNjB8U29ueUVyaWNzc29ufE45MDB8TUFVSS4qV0FQLipCcm93c2VyXCJcbiAgICB9LFxuICAgIFwidGFibGV0c1wiOiB7XG4gICAgICAgIFwiaVBhZFwiOiBcImlQYWR8aVBhZC4qTW9iaWxlXCIsXG4gICAgICAgIFwiTmV4dXNUYWJsZXRcIjogXCJBbmRyb2lkLipOZXh1c1tcXFxcc10rKDd8OXwxMClcIixcbiAgICAgICAgXCJHb29nbGVUYWJsZXRcIjogXCJBbmRyb2lkLipQaXhlbCBDXCIsXG4gICAgICAgIFwiU2Ftc3VuZ1RhYmxldFwiOiBcIlNBTVNVTkcuKlRhYmxldHxHYWxheHkuKlRhYnxTQy0wMUN8R1QtUDEwMDB8R1QtUDEwMDN8R1QtUDEwMTB8R1QtUDMxMDV8R1QtUDYyMTB8R1QtUDY4MDB8R1QtUDY4MTB8R1QtUDcxMDB8R1QtUDczMDB8R1QtUDczMTB8R1QtUDc1MDB8R1QtUDc1MTB8U0NILUk4MDB8U0NILUk4MTV8U0NILUk5MDV8U0dILUk5NTd8U0dILUk5ODd8U0dILVQ4NDl8U0dILVQ4NTl8U0dILVQ4Njl8U1BILVAxMDB8R1QtUDMxMDB8R1QtUDMxMDh8R1QtUDMxMTB8R1QtUDUxMDB8R1QtUDUxMTB8R1QtUDYyMDB8R1QtUDczMjB8R1QtUDc1MTF8R1QtTjgwMDB8R1QtUDg1MTB8U0dILUk0OTd8U1BILVA1MDB8U0dILVQ3Nzl8U0NILUk3MDV8U0NILUk5MTV8R1QtTjgwMTN8R1QtUDMxMTN8R1QtUDUxMTN8R1QtUDgxMTB8R1QtTjgwMTB8R1QtTjgwMDV8R1QtTjgwMjB8R1QtUDEwMTN8R1QtUDYyMDF8R1QtUDc1MDF8R1QtTjUxMDB8R1QtTjUxMDV8R1QtTjUxMTB8U0hWLUUxNDBLfFNIVi1FMTQwTHxTSFYtRTE0MFN8U0hWLUUxNTBTfFNIVi1FMjMwS3xTSFYtRTIzMEx8U0hWLUUyMzBTfFNIVy1NMTgwS3xTSFctTTE4MEx8U0hXLU0xODBTfFNIVy1NMTgwV3xTSFctTTMwMFd8U0hXLU0zMDVXfFNIVy1NMzgwS3xTSFctTTM4MFN8U0hXLU0zODBXfFNIVy1NNDMwV3xTSFctTTQ4MEt8U0hXLU00ODBTfFNIVy1NNDgwV3xTSFctTTQ4NVd8U0hXLU00ODZXfFNIVy1NNTAwV3xHVC1JOTIyOHxTQ0gtUDczOXxTQ0gtSTkyNXxHVC1JOTIwMHxHVC1QNTIwMHxHVC1QNTIxMHxHVC1QNTIxMFh8U00tVDMxMXxTTS1UMzEwfFNNLVQzMTBYfFNNLVQyMTB8U00tVDIxMFJ8U00tVDIxMXxTTS1QNjAwfFNNLVA2MDF8U00tUDYwNXxTTS1QOTAwfFNNLVA5MDF8U00tVDIxN3xTTS1UMjE3QXxTTS1UMjE3U3xTTS1QNjAwMHxTTS1UMzEwMHxTR0gtSTQ2N3xYRTUwMHxTTS1UMTEwfEdULVA1MjIwfEdULUk5MjAwWHxHVC1ONTExMFh8R1QtTjUxMjB8U00tUDkwNXxTTS1UMTExfFNNLVQyMTA1fFNNLVQzMTV8U00tVDMyMHxTTS1UMzIwWHxTTS1UMzIxfFNNLVQ1MjB8U00tVDUyNXxTTS1UNTMwTlV8U00tVDIzME5VfFNNLVQzMzBOVXxTTS1UOTAwfFhFNTAwVDFDfFNNLVA2MDVWfFNNLVA5MDVWfFNNLVQzMzdWfFNNLVQ1MzdWfFNNLVQ3MDdWfFNNLVQ4MDdWfFNNLVA2MDBYfFNNLVA5MDBYfFNNLVQyMTBYfFNNLVQyMzB8U00tVDIzMFh8U00tVDMyNXxHVC1QNzUwM3xTTS1UNTMxfFNNLVQzMzB8U00tVDUzMHxTTS1UNzA1fFNNLVQ3MDVDfFNNLVQ1MzV8U00tVDMzMXxTTS1UODAwfFNNLVQ3MDB8U00tVDUzN3xTTS1UODA3fFNNLVA5MDdBfFNNLVQzMzdBfFNNLVQ1MzdBfFNNLVQ3MDdBfFNNLVQ4MDdBfFNNLVQyMzd8U00tVDgwN1B8U00tUDYwN1R8U00tVDIxN1R8U00tVDMzN1R8U00tVDgwN1R8U00tVDExNk5RfFNNLVQxMTZCVXxTTS1QNTUwfFNNLVQzNTB8U00tVDU1MHxTTS1UOTAwMHxTTS1QOTAwMHxTTS1UNzA1WXxTTS1UODA1fEdULVAzMTEzfFNNLVQ3MTB8U00tVDgxMHxTTS1UODE1fFNNLVQzNjB8U00tVDUzM3xTTS1UMTEzfFNNLVQzMzV8U00tVDcxNXxTTS1UNTYwfFNNLVQ2NzB8U00tVDY3N3xTTS1UMzc3fFNNLVQ1Njd8U00tVDM1N1R8U00tVDU1NXxTTS1UNTYxfFNNLVQ3MTN8U00tVDcxOXxTTS1UODEzfFNNLVQ4MTl8U00tVDU4MHxTTS1UMzU1WT98U00tVDI4MHxTTS1UODE3QXxTTS1UODIwfFNNLVc3MDB8U00tUDU4MHxTTS1UNTg3fFNNLVAzNTB8U00tUDU1NU18U00tUDM1NU18U00tVDExM05VfFNNLVQ4MTVZfFNNLVQ1ODV8U00tVDI4NXxTTS1UODI1fFNNLVc3MDh8U00tVDgzNXxTTS1UODMwfFNNLVQ4MzdWfFNNLVQ3MjB8U00tVDUxMHxTTS1UMzg3VnxTTS1QNjEwfFNNLVQyOTB8U00tVDUxNXxTTS1UNTkwfFNNLVQ1OTV8U00tVDcyNXxTTS1UODE3UHxTTS1QNTg1TjB8U00tVDM5NXxTTS1UMjk1fFNNLVQ4NjV8U00tUDYxME58U00tUDYxNXxTTS1UOTcwfFNNLVQzODB8U00tVDU5NTB8U00tVDkwNXxTTS1UMjMxfFNNLVQ1MDB8U00tVDg2MFwiLFxuICAgICAgICBcIktpbmRsZVwiOiBcIktpbmRsZXxTaWxrLipBY2NlbGVyYXRlZHxBbmRyb2lkLipcXFxcYihLRk9UfEtGVFR8S0ZKV0l8S0ZKV0F8S0ZPVEV8S0ZTT1dJfEtGVEhXSXxLRlRIV0F8S0ZBUFdJfEtGQVBXQXxXRkpXQUV8S0ZTQVdBfEtGU0FXSXxLRkFTV0l8S0ZBUldJfEtGRk9XSXxLRkdJV0l8S0ZNRVdJKVxcXFxifEFuZHJvaWQuKlNpbGtcXC9bMC05Ll0rIGxpa2UgQ2hyb21lXFwvWzAtOS5dKyAoPyFNb2JpbGUpXCIsXG4gICAgICAgIFwiU3VyZmFjZVRhYmxldFwiOiBcIldpbmRvd3MgTlQgWzAtOS5dKzsgQVJNOy4qKFRhYmxldHxBUk1CSlMpXCIsXG4gICAgICAgIFwiSFBUYWJsZXRcIjogXCJIUCBTbGF0ZSAoN3w4fDEwKXxIUCBFbGl0ZVBhZCA5MDB8aHAtdGFibGV0fEVsaXRlQm9vay4qVG91Y2h8SFAgOHxTbGF0ZSAyMXxIUCBTbGF0ZUJvb2sgMTBcIixcbiAgICAgICAgXCJBc3VzVGFibGV0XCI6IFwiXi4qUGFkRm9uZSgoPyFNb2JpbGUpLikqJHxUcmFuc2Zvcm1lcnxURjEwMXxURjEwMUd8VEYzMDBUfFRGMzAwVEd8VEYzMDBUTHxURjcwMFR8VEY3MDBLTHxURjcwMVR8VEY4MTBDfE1FMTcxfE1FMzAxVHxNRTMwMkN8TUUzNzFNR3xNRTM3MFR8TUUzNzJNR3xNRTE3MlZ8TUUxNzNYfE1FNDAwQ3xTbGlkZXIgU0wxMDF8XFxcXGJLMDBGXFxcXGJ8XFxcXGJLMDBDXFxcXGJ8XFxcXGJLMDBFXFxcXGJ8XFxcXGJLMDBMXFxcXGJ8VFgyMDFMQXxNRTE3NkN8TUUxMDJBfFxcXFxiTTgwVEFcXFxcYnxNRTM3MkNMfE1FNTYwQ0d8TUUzNzJDR3xNRTMwMktMfCBLMDEwIHwgSzAxMSB8IEswMTcgfCBLMDFFIHxNRTU3MkN8TUUxMDNLfE1FMTcwQ3xNRTE3MUN8XFxcXGJNRTcwQ1xcXFxifE1FNTgxQ3xNRTU4MUNMfE1FODUxMEN8TUUxODFDfFAwMVl8UE8xTUF8UDAxWnxcXFxcYlAwMjdcXFxcYnxcXFxcYlAwMjRcXFxcYnxcXFxcYlAwMENcXFxcYlwiLFxuICAgICAgICBcIkJsYWNrQmVycnlUYWJsZXRcIjogXCJQbGF5Qm9va3xSSU0gVGFibGV0XCIsXG4gICAgICAgIFwiSFRDdGFibGV0XCI6IFwiSFRDX0ZseWVyX1A1MTJ8SFRDIEZseWVyfEhUQyBKZXRzdHJlYW18SFRDLVA3MTVhfEhUQyBFVk8gVmlldyA0R3xQRzQxMjAwfFBHMDk0MTBcIixcbiAgICAgICAgXCJNb3Rvcm9sYVRhYmxldFwiOiBcInhvb218c2hvbGVzdHxNWjYxNXxNWjYwNXxNWjUwNXxNWjYwMXxNWjYwMnxNWjYwM3xNWjYwNHxNWjYwNnxNWjYwN3xNWjYwOHxNWjYwOXxNWjYxNXxNWjYxNnxNWjYxN1wiLFxuICAgICAgICBcIk5vb2tUYWJsZXRcIjogXCJBbmRyb2lkLipOb29rfE5vb2tDb2xvcnxub29rIGJyb3dzZXJ8Qk5SVjIwMHxCTlJWMjAwQXxCTlRWMjUwfEJOVFYyNTBBfEJOVFY0MDB8Qk5UVjYwMHxMb2dpY1BEIFpvb20yXCIsXG4gICAgICAgIFwiQWNlclRhYmxldFwiOiBcIkFuZHJvaWQuKjsgXFxcXGIoQTEwMHxBMTAxfEExMTB8QTIwMHxBMjEwfEEyMTF8QTUwMHxBNTAxfEE1MTB8QTUxMXxBNzAwfEE3MDF8VzUwMHxXNTAwUHxXNTAxfFc1MDFQfFc1MTB8VzUxMXxXNzAwfEcxMDB8RzEwMFd8QjEtQTcxfEIxLTcxMHxCMS03MTF8QTEtODEwfEExLTgxMXxBMS04MzApXFxcXGJ8VzMtODEwfFxcXFxiQTMtQTEwXFxcXGJ8XFxcXGJBMy1BMTFcXFxcYnxcXFxcYkEzLUEyMFxcXFxifFxcXFxiQTMtQTMwfEEzLUE0MFwiLFxuICAgICAgICBcIlRvc2hpYmFUYWJsZXRcIjogXCJBbmRyb2lkLiooQVQxMDB8QVQxMDV8QVQyMDB8QVQyMDV8QVQyNzB8QVQyNzV8QVQzMDB8QVQzMDV8QVQxUzV8QVQ1MDB8QVQ1NzB8QVQ3MDB8QVQ4MzApfFRPU0hJQkEuKkZPTElPXCIsXG4gICAgICAgIFwiTEdUYWJsZXRcIjogXCJcXFxcYkwtMDZDfExHLVY5MDl8TEctVjkwMHxMRy1WNzAwfExHLVY1MTB8TEctVjUwMHxMRy1WNDEwfExHLVY0MDB8TEctVks4MTBcXFxcYlwiLFxuICAgICAgICBcIkZ1aml0c3VUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYihGLTAxRHxGLTAyRnxGLTA1RXxGLTEwRHxNNTMyfFE1NzIpXFxcXGJcIixcbiAgICAgICAgXCJQcmVzdGlnaW9UYWJsZXRcIjogXCJQTVAzMTcwQnxQTVAzMjcwQnxQTVAzNDcwQnxQTVA3MTcwQnxQTVAzMzcwQnxQTVAzNTcwQ3xQTVA1ODcwQ3xQTVAzNjcwQnxQTVA1NTcwQ3xQTVA1NzcwRHxQTVAzOTcwQnxQTVAzODcwQ3xQTVA1NTgwQ3xQTVA1ODgwRHxQTVA1NzgwRHxQTVA1NTg4Q3xQTVA3MjgwQ3xQTVA3MjgwQzNHfFBNUDcyODB8UE1QNzg4MER8UE1QNTU5N0R8UE1QNTU5N3xQTVA3MTAwRHxQRVIzNDY0fFBFUjMyNzR8UEVSMzU3NHxQRVIzODg0fFBFUjUyNzR8UEVSNTQ3NHxQTVA1MDk3Q1BST3xQTVA1MDk3fFBNUDczODBEfFBNUDUyOTdDfFBNUDUyOTdDX1FVQUR8UE1QODEyRXxQTVA4MTJFM0d8UE1QODEyRnxQTVA4MTBFfFBNUDg4MFREfFBNVDMwMTd8UE1UMzAzN3xQTVQzMDQ3fFBNVDMwNTd8UE1UNzAwOHxQTVQ1ODg3fFBNVDUwMDF8UE1UNTAwMlwiLFxuICAgICAgICBcIkxlbm92b1RhYmxldFwiOiBcIkxlbm92byBUQUJ8SWRlYShUYWJ8UGFkKSggQTF8QTEwfCBLMXwpfFRoaW5rUGFkKFsgXSspP1RhYmxldHxZVDMtODUwTXxZVDMtWDkwTHxZVDMtWDkwRnxZVDMtWDkwWHxMZW5vdm8uKihTMjEwOXxTMjExMHxTNTAwMHxTNjAwMHxLMzAxMXxBMzAwMHxBMzUwMHxBMTAwMHxBMjEwN3xBMjEwOXxBMTEwN3xBNTUwMHxBNzYwMHxCNjAwMHxCODAwMHxCODA4MCkoLXwpKEZMfEZ8SFZ8SHwpfFRCLVgxMDNGfFRCLVgzMDRYfFRCLVgzMDRGfFRCLVgzMDRMfFRCLVg1MDVGfFRCLVg1MDVMfFRCLVg1MDVYfFRCLVg2MDVGfFRCLVg2MDVMfFRCLTg3MDNGfFRCLTg3MDNYfFRCLTg3MDNOfFRCLTg3MDROfFRCLTg3MDRGfFRCLTg3MDRYfFRCLTg3MDRWfFRCLTczMDRGfFRCLTczMDRJfFRCLTczMDRYfFRhYjJBNy0xMEZ8VGFiMkE3LTIwRnxUQjItWDMwTHxZVDMtWDUwTHxZVDMtWDUwRnxZVDMtWDUwTXxZVC1YNzA1RnxZVC1YNzAzRnxZVC1YNzAzTHxZVC1YNzA1THxZVC1YNzA1WHxUQjItWDMwRnxUQjItWDMwTHxUQjItWDMwTXxBMjEwN0EtRnxBMjEwN0EtSHxUQjMtNzMwRnxUQjMtNzMwTXxUQjMtNzMwWHxUQi03NTA0RnxUQi03NTA0WHxUQi1YNzA0RnxUQi1YMTA0RnxUQjMtWDcwRnxUQi1YNzA1RnxUQi04NTA0RnxUQjMtWDcwTHxUQjMtNzEwRnxUQi1YNzA0TFwiLFxuICAgICAgICBcIkRlbGxUYWJsZXRcIjogXCJWZW51ZSAxMXxWZW51ZSA4fFZlbnVlIDd8RGVsbCBTdHJlYWsgMTB8RGVsbCBTdHJlYWsgN1wiLFxuICAgICAgICBcIllhcnZpa1RhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKFRBQjIxMHxUQUIyMTF8VEFCMjI0fFRBQjI1MHxUQUIyNjB8VEFCMjY0fFRBQjMxMHxUQUIzNjB8VEFCMzY0fFRBQjQxMHxUQUI0MTF8VEFCNDIwfFRBQjQyNHxUQUI0NTB8VEFCNDYwfFRBQjQ2MXxUQUI0NjR8VEFCNDY1fFRBQjQ2N3xUQUI0Njh8VEFCMDctMTAwfFRBQjA3LTEwMXxUQUIwNy0xNTB8VEFCMDctMTUxfFRBQjA3LTE1MnxUQUIwNy0yMDB8VEFCMDctMjAxLTNHfFRBQjA3LTIxMHxUQUIwNy0yMTF8VEFCMDctMjEyfFRBQjA3LTIxNHxUQUIwNy0yMjB8VEFCMDctNDAwfFRBQjA3LTQ4NXxUQUIwOC0xNTB8VEFCMDgtMjAwfFRBQjA4LTIwMS0zR3xUQUIwOC0yMDEtMzB8VEFCMDktMTAwfFRBQjA5LTIxMXxUQUIwOS00MTB8VEFCMTAtMTUwfFRBQjEwLTIwMXxUQUIxMC0yMTF8VEFCMTAtNDAwfFRBQjEwLTQxMHxUQUIxMy0yMDF8VEFCMjc0RVVLfFRBQjI3NUVVS3xUQUIzNzRFVUt8VEFCNDYyRVVLfFRBQjQ3NEVVS3xUQUI5LTIwMClcXFxcYlwiLFxuICAgICAgICBcIk1lZGlvblRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiT1lPXFxcXGJ8TElGRS4qKFA5MjEyfFA5NTE0fFA5NTE2fFM5NTEyKXxMSUZFVEFCXCIsXG4gICAgICAgIFwiQXJub3ZhVGFibGV0XCI6IFwiOTdHNHxBTjEwRzJ8QU43YkczfEFON2ZHM3xBTjhHM3xBTjhjRzN8QU43RzN8QU45RzN8QU43ZEczfEFON2RHM1NUfEFON2RHM0NoaWxkUGFkfEFOMTBiRzN8QU4xMGJHM0RUfEFOOUcyXCIsXG4gICAgICAgIFwiSW50ZW5zb1RhYmxldFwiOiBcIklOTTgwMDJLUHxJTk0xMDEwRlB8SU5NODA1TkR8SW50ZW5zbyBUYWJ8VEFCMTAwNFwiLFxuICAgICAgICBcIklSVVRhYmxldFwiOiBcIk03MDJwcm9cIixcbiAgICAgICAgXCJNZWdhZm9uVGFibGV0XCI6IFwiTWVnYUZvbiBWOXxcXFxcYlpURSBWOVxcXFxifEFuZHJvaWQuKlxcXFxiTVQ3QVxcXFxiXCIsXG4gICAgICAgIFwiRWJvZGFUYWJsZXRcIjogXCJFLUJvZGEgKFN1cHJlbWV8SW1wcmVzc3BlZWR8SXp6eWNvbW18RXNzZW50aWFsKVwiLFxuICAgICAgICBcIkFsbFZpZXdUYWJsZXRcIjogXCJBbGx2aWV3LiooVml2YXxBbGxkcm98Q2l0eXxTcGVlZHxBbGwgVFZ8RnJlbnp5fFF1YXNhcnxTaGluZXxUWDF8QVgxfEFYMilcIixcbiAgICAgICAgXCJBcmNob3NUYWJsZXRcIjogXCJcXFxcYigxMDFHOXw4MEc5fEExMDFJVClcXFxcYnxRaWxpdmUgOTdSfEFyY2hvczV8XFxcXGJBUkNIT1MgKDcwfDc5fDgwfDkwfDk3fDEwMXxGQU1JTFlQQUR8KShifGN8KShHMTB8IENvYmFsdHwgVElUQU5JVU0oSER8KXwgWGVub258IE5lb258WFNLfCAyfCBYUyAyfCBQTEFUSU5VTXwgQ0FSQk9OfEdBTUVQQUQpXFxcXGJcIixcbiAgICAgICAgXCJBaW5vbFRhYmxldFwiOiBcIk5PVk83fE5PVk84fE5PVk8xMHxOb3ZvN0F1cm9yYXxOb3ZvN0Jhc2ljfE5PVk83UEFMQURJTnxub3ZvOS1TcGFya1wiLFxuICAgICAgICBcIk5va2lhTHVtaWFUYWJsZXRcIjogXCJMdW1pYSAyNTIwXCIsXG4gICAgICAgIFwiU29ueVRhYmxldFwiOiBcIlNvbnkuKlRhYmxldHxYcGVyaWEgVGFibGV0fFNvbnkgVGFibGV0IFN8U08tMDNFfFNHUFQxMnxTR1BUMTN8U0dQVDExNHxTR1BUMTIxfFNHUFQxMjJ8U0dQVDEyM3xTR1BUMTExfFNHUFQxMTJ8U0dQVDExM3xTR1BUMTMxfFNHUFQxMzJ8U0dQVDEzM3xTR1BUMjExfFNHUFQyMTJ8U0dQVDIxM3xTR1AzMTF8U0dQMzEyfFNHUDMyMXxFQlJEMTEwMXxFQlJEMTEwMnxFQlJEMTIwMXxTR1AzNTF8U0dQMzQxfFNHUDUxMXxTR1A1MTJ8U0dQNTIxfFNHUDU0MXxTR1A1NTF8U0dQNjIxfFNHUDY0MXxTR1A2MTJ8U09UMzF8U0dQNzcxfFNHUDYxMXxTR1A2MTJ8U0dQNzEyXCIsXG4gICAgICAgIFwiUGhpbGlwc1RhYmxldFwiOiBcIlxcXFxiKFBJMjAxMHxQSTMwMDB8UEkzMTAwfFBJMzEwNXxQSTMxMTB8UEkzMjA1fFBJMzIxMHxQSTM5MDB8UEk0MDEwfFBJNzAwMHxQSTcxMDApXFxcXGJcIixcbiAgICAgICAgXCJDdWJlVGFibGV0XCI6IFwiQW5kcm9pZC4qKEs4R1R8VTlHVHxVMTBHVHxVMTZHVHxVMTdHVHxVMThHVHxVMTlHVHxVMjBHVHxVMjNHVHxVMzBHVCl8Q1VCRSBVOEdUXCIsXG4gICAgICAgIFwiQ29ieVRhYmxldFwiOiBcIk1JRDEwNDJ8TUlEMTA0NXxNSUQxMTI1fE1JRDExMjZ8TUlENzAxMnxNSUQ3MDE0fE1JRDcwMTV8TUlENzAzNHxNSUQ3MDM1fE1JRDcwMzZ8TUlENzA0MnxNSUQ3MDQ4fE1JRDcxMjd8TUlEODA0MnxNSUQ4MDQ4fE1JRDgxMjd8TUlEOTA0MnxNSUQ5NzQwfE1JRDk3NDJ8TUlENzAyMnxNSUQ3MDEwXCIsXG4gICAgICAgIFwiTUlEVGFibGV0XCI6IFwiTTk3MDF8TTkwMDB8TTkxMDB8TTgwNnxNMTA1MnxNODA2fFQ3MDN8TUlENzAxfE1JRDcxM3xNSUQ3MTB8TUlENzI3fE1JRDc2MHxNSUQ4MzB8TUlENzI4fE1JRDkzM3xNSUQxMjV8TUlEODEwfE1JRDczMnxNSUQxMjB8TUlEOTMwfE1JRDgwMHxNSUQ3MzF8TUlEOTAwfE1JRDEwMHxNSUQ4MjB8TUlENzM1fE1JRDk4MHxNSUQxMzB8TUlEODMzfE1JRDczN3xNSUQ5NjB8TUlEMTM1fE1JRDg2MHxNSUQ3MzZ8TUlEMTQwfE1JRDkzMHxNSUQ4MzV8TUlENzMzfE1JRDRYMTBcIixcbiAgICAgICAgXCJNU0lUYWJsZXRcIjogXCJNU0kgXFxcXGIoUHJpbW8gNzNLfFByaW1vIDczTHxQcmltbyA4MUx8UHJpbW8gNzd8UHJpbW8gOTN8UHJpbW8gNzV8UHJpbW8gNzZ8UHJpbW8gNzN8UHJpbW8gODF8UHJpbW8gOTF8UHJpbW8gOTB8RW5qb3kgNzF8RW5qb3kgN3xFbmpveSAxMClcXFxcYlwiLFxuICAgICAgICBcIlNNaVRUYWJsZXRcIjogXCJBbmRyb2lkLiooXFxcXGJNSURcXFxcYnxNSUQtNTYwfE1UVi1UMTIwMHxNVFYtUE5ENTMxfE1UVi1QMTEwMXxNVFYtUE5ENTMwKVwiLFxuICAgICAgICBcIlJvY2tDaGlwVGFibGV0XCI6IFwiQW5kcm9pZC4qKFJLMjgxOHxSSzI4MDhBfFJLMjkxOHxSSzMwNjYpfFJLMjczOHxSSzI4MDhBXCIsXG4gICAgICAgIFwiRmx5VGFibGV0XCI6IFwiSVEzMTB8Rmx5IFZpc2lvblwiLFxuICAgICAgICBcImJxVGFibGV0XCI6IFwiQW5kcm9pZC4qKGJxKT8uKlxcXFxiKEVsY2Fub3xDdXJpZXxFZGlzb258TWF4d2VsbHxLZXBsZXJ8UGFzY2FsfFRlc2xhfEh5cGF0aWF8UGxhdG9ufE5ld3RvbnxMaXZpbmdzdG9uZXxDZXJ2YW50ZXN8QXZhbnR8QXF1YXJpcyAoW0V8TV0xMHxNOCkpXFxcXGJ8TWF4d2VsbC4qTGl0ZXxNYXh3ZWxsLipQbHVzXCIsXG4gICAgICAgIFwiSHVhd2VpVGFibGV0XCI6IFwiTWVkaWFQYWR8TWVkaWFQYWQgNyBZb3V0aHxJREVPUyBTN3xTNy0yMDFjfFM3LTIwMnV8UzctMTAxfFM3LTEwM3xTNy0xMDR8UzctMTA1fFM3LTEwNnxTNy0yMDF8UzctU2xpbXxNMi1BMDFMfEJBSC1MMDl8QkFILVcwOXxBR1MtTDA5fENNUi1BTDE5XCIsXG4gICAgICAgIFwiTmVjVGFibGV0XCI6IFwiXFxcXGJOLTA2RHxcXFxcYk4tMDhEXCIsXG4gICAgICAgIFwiUGFudGVjaFRhYmxldFwiOiBcIlBhbnRlY2guKlA0MTAwXCIsXG4gICAgICAgIFwiQnJvbmNob1RhYmxldFwiOiBcIkJyb25jaG8uKihONzAxfE43MDh8TjgwMnxhNzEwKVwiLFxuICAgICAgICBcIlZlcnN1c1RhYmxldFwiOiBcIlRPVUNIUEFELipbNzg5MTBdfFxcXFxiVE9VQ0hUQUJcXFxcYlwiLFxuICAgICAgICBcIlp5bmNUYWJsZXRcIjogXCJ6MTAwMHxaOTkgMkd8ejkzMHx6OTkwfHo5MDl8WjkxOXx6OTAwXCIsXG4gICAgICAgIFwiUG9zaXRpdm9UYWJsZXRcIjogXCJUQjA3U1RBfFRCMTBTVEF8VEIwN0ZUQXxUQjEwRlRBXCIsXG4gICAgICAgIFwiTmFiaVRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiTmFiaVwiLFxuICAgICAgICBcIktvYm9UYWJsZXRcIjogXCJLb2JvIFRvdWNofFxcXFxiSzA4MFxcXFxifFxcXFxiVm94XFxcXGIgQnVpbGR8XFxcXGJBcmNcXFxcYiBCdWlsZFwiLFxuICAgICAgICBcIkRhbmV3VGFibGV0XCI6IFwiRFNsaWRlLipcXFxcYig3MDB8NzAxUnw3MDJ8NzAzUnw3MDR8ODAyfDk3MHw5NzF8OTcyfDk3M3w5NzR8MTAxMHwxMDEyKVxcXFxiXCIsXG4gICAgICAgIFwiVGV4ZXRUYWJsZXRcIjogXCJOYXZpUGFkfFRCLTc3MkF8VE0tNzA0NXxUTS03MDU1fFRNLTk3NTB8VE0tNzAxNnxUTS03MDI0fFRNLTcwMjZ8VE0tNzA0MXxUTS03MDQzfFRNLTcwNDd8VE0tODA0MXxUTS05NzQxfFRNLTk3NDd8VE0tOTc0OHxUTS05NzUxfFRNLTcwMjJ8VE0tNzAyMXxUTS03MDIwfFRNLTcwMTF8VE0tNzAxMHxUTS03MDIzfFRNLTcwMjV8VE0tNzAzN1d8VE0tNzAzOFd8VE0tNzAyN1d8VE0tOTcyMHxUTS05NzI1fFRNLTk3MzdXfFRNLTEwMjB8VE0tOTczOFd8VE0tOTc0MHxUTS05NzQzV3xUQi04MDdBfFRCLTc3MUF8VEItNzI3QXxUQi03MjVBfFRCLTcxOUF8VEItODIzQXxUQi04MDVBfFRCLTcyM0F8VEItNzE1QXxUQi03MDdBfFRCLTcwNUF8VEItNzA5QXxUQi03MTFBfFRCLTg5MEhEfFRCLTg4MEhEfFRCLTc5MEhEfFRCLTc4MEhEfFRCLTc3MEhEfFRCLTcyMUhEfFRCLTcxMEhEfFRCLTQzNEhEfFRCLTg2MEhEfFRCLTg0MEhEfFRCLTc2MEhEfFRCLTc1MEhEfFRCLTc0MEhEfFRCLTczMEhEfFRCLTcyMkhEfFRCLTcyMEhEfFRCLTcwMEhEfFRCLTUwMEhEfFRCLTQ3MEhEfFRCLTQzMUhEfFRCLTQzMEhEfFRCLTUwNnxUQi01MDR8VEItNDQ2fFRCLTQzNnxUQi00MTZ8VEItMTQ2U0V8VEItMTI2U0VcIixcbiAgICAgICAgXCJQbGF5c3RhdGlvblRhYmxldFwiOiBcIlBsYXlzdGF0aW9uLiooUG9ydGFibGV8Vml0YSlcIixcbiAgICAgICAgXCJUcmVrc3RvclRhYmxldFwiOiBcIlNUMTA0MTYtMXxWVDEwNDE2LTF8U1Q3MDQwOC0xfFNUNzAyeHgtMXxTVDcwMnh4LTJ8U1Q4MDIwOHxTVDk3MjE2fFNUNzAxMDQtMnxWVDEwNDE2LTJ8U1QxMDIxNi0yQXxTdXJmVGFiXCIsXG4gICAgICAgIFwiUHlsZUF1ZGlvVGFibGV0XCI6IFwiXFxcXGIoUFRCTDEwQ0VVfFBUQkwxMEN8UFRCTDcyQkN8UFRCTDcyQkNFVXxQVEJMN0NFVXxQVEJMN0N8UFRCTDkyQkN8UFRCTDkyQkNFVXxQVEJMOUNFVXxQVEJMOUNVS3xQVEJMOUMpXFxcXGJcIixcbiAgICAgICAgXCJBZHZhblRhYmxldFwiOiBcIkFuZHJvaWQuKiBcXFxcYihFM0F8VDNYfFQ1Q3xUNUJ8VDNFfFQzQ3xUM0J8VDFKfFQxRnxUMkF8VDFIfFQxaXxFMUN8VDEtRXxUNS1BfFQ0fEUxLUJ8VDJDaXxUMS1CfFQxLUR8TzEtQXxFMS1BfFQxLUF8VDNBfFQ0aSlcXFxcYiBcIixcbiAgICAgICAgXCJEYW55VGVjaFRhYmxldFwiOiBcIkdlbml1cyBUYWIgRzN8R2VuaXVzIFRhYiBTMnxHZW5pdXMgVGFiIFEzfEdlbml1cyBUYWIgRzR8R2VuaXVzIFRhYiBRNHxHZW5pdXMgVGFiIEctSUl8R2VuaXVzIFRBQiBHSUl8R2VuaXVzIFRBQiBHSUlJfEdlbml1cyBUYWIgUzFcIixcbiAgICAgICAgXCJHYWxhcGFkVGFibGV0XCI6IFwiQW5kcm9pZCBbMC05Ll0rOyBbYS16LV0rOyBcXFxcYkcxXFxcXGJcIixcbiAgICAgICAgXCJNaWNyb21heFRhYmxldFwiOiBcIkZ1bmJvb2t8TWljcm9tYXguKlxcXFxiKFAyNTB8UDU2MHxQMzYwfFAzNjJ8UDYwMHxQMzAwfFAzNTB8UDUwMHxQMjc1KVxcXFxiXCIsXG4gICAgICAgIFwiS2FyYm9ublRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKEEzOXxBMzd8QTM0fFNUOHxTVDEwfFNUN3xTbWFydCBUYWIzfFNtYXJ0IFRhYjIpXFxcXGJcIixcbiAgICAgICAgXCJBbGxGaW5lVGFibGV0XCI6IFwiRmluZTcgR2VuaXVzfEZpbmU3IFNoaW5lfEZpbmU3IEFpcnxGaW5lOCBTdHlsZXxGaW5lOSBNb3JlfEZpbmUxMCBKb3l8RmluZTExIFdpZGVcIixcbiAgICAgICAgXCJQUk9TQ0FOVGFibGV0XCI6IFwiXFxcXGIoUEVNNjN8UExUMTAyM0d8UExUMTA0MXxQTFQxMDQ0fFBMVDEwNDRHfFBMVDEwOTF8UExUNDMxMXxQTFQ0MzExUEx8UExUNDMxNXxQTFQ3MDMwfFBMVDcwMzN8UExUNzAzM0R8UExUNzAzNXxQTFQ3MDM1RHxQTFQ3MDQ0S3xQTFQ3MDQ1S3xQTFQ3MDQ1S0J8UExUNzA3MUtHfFBMVDcwNzJ8UExUNzIyM0d8UExUNzIyNUd8UExUNzc3N0d8UExUNzgxMEt8UExUNzg0OUd8UExUNzg1MUd8UExUNzg1Mkd8UExUODAxNXxQTFQ4MDMxfFBMVDgwMzR8UExUODAzNnxQTFQ4MDgwS3xQTFQ4MDgyfFBMVDgwODh8UExUODIyM0d8UExUODIzNEd8UExUODIzNUd8UExUODgxNkt8UExUOTAxMXxQTFQ5MDQ1S3xQTFQ5MjMzR3xQTFQ5NzM1fFBMVDk3NjBHfFBMVDk3NzBHKVxcXFxiXCIsXG4gICAgICAgIFwiWU9ORVNUYWJsZXRcIjogXCJCUTEwNzh8QkMxMDAzfEJDMTA3N3xSSzk3MDJ8QkM5NzMwfEJDOTAwMXxJVDkwMDF8QkM3MDA4fEJDNzAxMHxCQzcwOHxCQzcyOHxCQzcwMTJ8QkM3MDMwfEJDNzAyN3xCQzcwMjZcIixcbiAgICAgICAgXCJDaGFuZ0ppYVRhYmxldFwiOiBcIlRQQzcxMDJ8VFBDNzEwM3xUUEM3MTA1fFRQQzcxMDZ8VFBDNzEwN3xUUEM3MjAxfFRQQzcyMDN8VFBDNzIwNXxUUEM3MjEwfFRQQzc3MDh8VFBDNzcwOXxUUEM3NzEyfFRQQzcxMTB8VFBDODEwMXxUUEM4MTAzfFRQQzgxMDV8VFBDODEwNnxUUEM4MjAzfFRQQzgyMDV8VFBDODUwM3xUUEM5MTA2fFRQQzk3MDF8VFBDOTcxMDF8VFBDOTcxMDN8VFBDOTcxMDV8VFBDOTcxMDZ8VFBDOTcxMTF8VFBDOTcxMTN8VFBDOTcyMDN8VFBDOTc2MDN8VFBDOTc4MDl8VFBDOTcyMDV8VFBDMTAxMDF8VFBDMTAxMDN8VFBDMTAxMDZ8VFBDMTAxMTF8VFBDMTAyMDN8VFBDMTAyMDV8VFBDMTA1MDNcIixcbiAgICAgICAgXCJHVVRhYmxldFwiOiBcIlRYLUExMzAxfFRYLU05MDAyfFE3MDJ8a2YwMjZcIixcbiAgICAgICAgXCJQb2ludE9mVmlld1RhYmxldFwiOiBcIlRBQi1QNTA2fFRBQi1uYXZpLTctM0ctTXxUQUItUDUxN3xUQUItUC01Mjd8VEFCLVA3MDF8VEFCLVA3MDN8VEFCLVA3MjF8VEFCLVA3MzFOfFRBQi1QNzQxfFRBQi1QODI1fFRBQi1QOTA1fFRBQi1QOTI1fFRBQi1QUjk0NXxUQUItUEwxMDE1fFRBQi1QMTAyNXxUQUItUEkxMDQ1fFRBQi1QMTMyNXxUQUItUFJPVEFCWzAtOV0rfFRBQi1QUk9UQUIyNXxUQUItUFJPVEFCMjZ8VEFCLVBST1RBQjI3fFRBQi1QUk9UQUIyNlhMfFRBQi1QUk9UQUIyLUlQUzl8VEFCLVBST1RBQjMwLUlQUzl8VEFCLVBST1RBQjI1WFhMfFRBQi1QUk9UQUIyNi1JUFMxMHxUQUItUFJPVEFCMzAtSVBTMTBcIixcbiAgICAgICAgXCJPdmVybWF4VGFibGV0XCI6IFwiT1YtKFN0ZWVsQ29yZXxOZXdCYXNlfEJhc2Vjb3JlfEJhc2VvbmV8RXhlbGxlbnxRdWF0dG9yfEVkdVRhYnxTb2x1dGlvbnxBQ1RJT058QmFzaWNUYWJ8VGVkZHlUYWJ8TWFnaWNUYWJ8U3RyZWFtfFRCLTA4fFRCLTA5KXxRdWFsY29yZSAxMDI3XCIsXG4gICAgICAgIFwiSENMVGFibGV0XCI6IFwiSENMLipUYWJsZXR8Q29ubmVjdC0zRy0yLjB8Q29ubmVjdC0yRy0yLjB8TUUgVGFibGV0IFUxfE1FIFRhYmxldCBVMnxNRSBUYWJsZXQgRzF8TUUgVGFibGV0IFgxfE1FIFRhYmxldCBZMnxNRSBUYWJsZXQgU3luY1wiLFxuICAgICAgICBcIkRQU1RhYmxldFwiOiBcIkRQUyBEcmVhbSA5fERQUyBEdWFsIDdcIixcbiAgICAgICAgXCJWaXN0dXJlVGFibGV0XCI6IFwiVjk3IEhEfGk3NSAzR3xWaXN0dXJlIFY0KCBIRCk/fFZpc3R1cmUgVjUoIEhEKT98VmlzdHVyZSBWMTBcIixcbiAgICAgICAgXCJDcmVzdGFUYWJsZXRcIjogXCJDVFAoLSk/ODEwfENUUCgtKT84MTh8Q1RQKC0pPzgyOHxDVFAoLSk/ODM4fENUUCgtKT84ODh8Q1RQKC0pPzk3OHxDVFAoLSk/OTgwfENUUCgtKT85ODd8Q1RQKC0pPzk4OHxDVFAoLSk/OTg5XCIsXG4gICAgICAgIFwiTWVkaWF0ZWtUYWJsZXRcIjogXCJcXFxcYk1UODEyNXxNVDgzODl8TVQ4MTM1fE1UODM3N1xcXFxiXCIsXG4gICAgICAgIFwiQ29uY29yZGVUYWJsZXRcIjogXCJDb25jb3JkZShbIF0rKT9UYWJ8Q29uQ29yZGUgUmVhZE1hblwiLFxuICAgICAgICBcIkdvQ2xldmVyVGFibGV0XCI6IFwiR09DTEVWRVIgVEFCfEE3R09DTEVWRVJ8TTEwNDJ8TTc4NDF8TTc0MnxSMTA0MkJLfFIxMDQxfFRBQiBBOTc1fFRBQiBBNzg0MnxUQUIgQTc0MXxUQUIgQTc0MUx8VEFCIE03MjNHfFRBQiBNNzIxfFRBQiBBMTAyMXxUQUIgSTkyMXxUQUIgUjcyMXxUQUIgSTcyMHxUQUIgVDc2fFRBQiBSNzB8VEFCIFI3Ni4yfFRBQiBSMTA2fFRBQiBSODMuMnxUQUIgTTgxM0d8VEFCIEk3MjF8R0NUQTcyMnxUQUIgSTcwfFRBQiBJNzF8VEFCIFM3M3xUQUIgUjczfFRBQiBSNzR8VEFCIFI5M3xUQUIgUjc1fFRBQiBSNzYuMXxUQUIgQTczfFRBQiBBOTN8VEFCIEE5My4yfFRBQiBUNzJ8VEFCIFI4M3xUQUIgUjk3NHxUQUIgUjk3M3xUQUIgQTEwMXxUQUIgQTEwM3xUQUIgQTEwNHxUQUIgQTEwNC4yfFIxMDVCS3xNNzEzR3xBOTcyQkt8VEFCIEE5NzF8VEFCIFI5NzQuMnxUQUIgUjEwNHxUQUIgUjgzLjN8VEFCIEExMDQyXCIsXG4gICAgICAgIFwiTW9kZWNvbVRhYmxldFwiOiBcIkZyZWVUQUIgOTAwMHxGcmVlVEFCIDcuNHxGcmVlVEFCIDcwMDR8RnJlZVRBQiA3ODAwfEZyZWVUQUIgMjA5NnxGcmVlVEFCIDcuNXxGcmVlVEFCIDEwMTR8RnJlZVRBQiAxMDAxIHxGcmVlVEFCIDgwMDF8RnJlZVRBQiA5NzA2fEZyZWVUQUIgOTcwMnxGcmVlVEFCIDcwMDN8RnJlZVRBQiA3MDAyfEZyZWVUQUIgMTAwMnxGcmVlVEFCIDc4MDF8RnJlZVRBQiAxMzMxfEZyZWVUQUIgMTAwNHxGcmVlVEFCIDgwMDJ8RnJlZVRBQiA4MDE0fEZyZWVUQUIgOTcwNHxGcmVlVEFCIDEwMDNcIixcbiAgICAgICAgXCJWb25pbm9UYWJsZXRcIjogXCJcXFxcYihBcmd1c1sgX10/U3xEaWFtb25kWyBfXT83OUhEfEVtZXJhbGRbIF9dPzc4RXxMdW5hWyBfXT83MEN8T255eFsgX10/U3xPbnl4WyBfXT9afE9yaW5bIF9dP0hEfE9yaW5bIF9dP1N8T3Rpc1sgX10/U3xTcGVlZFN0YXJbIF9dP1N8TWFnbmV0WyBfXT9NOXxQcmltdXNbIF9dPzk0WyBfXT8zR3xQcmltdXNbIF9dPzk0SER8UHJpbXVzWyBfXT9RU3xBbmRyb2lkLipcXFxcYlE4XFxcXGJ8U2lyaXVzWyBfXT9FVk9bIF9dP1FTfFNpcml1c1sgX10/UVN8U3Bpcml0WyBfXT9TKVxcXFxiXCIsXG4gICAgICAgIFwiRUNTVGFibGV0XCI6IFwiVjA3T1QyfFRNMTA1QXxTMTBPVDF8VFIxMENTMVwiLFxuICAgICAgICBcIlN0b3JleFRhYmxldFwiOiBcImVaZWVbXyddPyhUYWJ8R28pWzAtOV0rfFRhYkxDN3xMb29uZXkgVHVuZXMgVGFiXCIsXG4gICAgICAgIFwiVm9kYWZvbmVUYWJsZXRcIjogXCJTbWFydFRhYihbIF0rKT9bMC05XSt8U21hcnRUYWJJSTEwfFNtYXJ0VGFiSUk3fFZGLTE0OTd8VkZEIDE0MDBcIixcbiAgICAgICAgXCJFc3NlbnRpZWxCVGFibGV0XCI6IFwiU21hcnRbICddP1RBQlsgXSs/WzAtOV0rfEZhbWlseVsgJ10/VEFCMlwiLFxuICAgICAgICBcIlJvc3NNb29yVGFibGV0XCI6IFwiUk0tNzkwfFJNLTk5N3xSTUQtODc4R3xSTUQtOTc0UnxSTVQtNzA1QXxSTVQtNzAxfFJNRS02MDF8Uk1ULTUwMXxSTVQtNzExXCIsXG4gICAgICAgIFwiaU1vYmlsZVRhYmxldFwiOiBcImktbW9iaWxlIGktbm90ZVwiLFxuICAgICAgICBcIlRvbGlub1RhYmxldFwiOiBcInRvbGlubyB0YWIgWzAtOS5dK3x0b2xpbm8gc2hpbmVcIixcbiAgICAgICAgXCJBdWRpb1NvbmljVGFibGV0XCI6IFwiXFxcXGJDLTIyUXxUNy1RQ3xULTE3QnxULTE3UFxcXFxiXCIsXG4gICAgICAgIFwiQU1QRVRhYmxldFwiOiBcIkFuZHJvaWQuKiBBNzggXCIsXG4gICAgICAgIFwiU2trVGFibGV0XCI6IFwiQW5kcm9pZC4qIChTS1lQQUR8UEhPRU5JWHxDWUNMT1BTKVwiLFxuICAgICAgICBcIlRlY25vVGFibGV0XCI6IFwiVEVDTk8gUDl8VEVDTk8gRFA4RFwiLFxuICAgICAgICBcIkpYRFRhYmxldFwiOiBcIkFuZHJvaWQuKiBcXFxcYihGMzAwMHxBMzMwMHxKWEQ1MDAwfEpYRDMwMDB8SlhEMjAwMHxKWEQzMDBCfEpYRDMwMHxTNTgwMHxTNzgwMHxTNjAyYnxTNTExMGJ8UzczMDB8UzUzMDB8UzYwMnxTNjAzfFM1MTAwfFM1MTEwfFM2MDF8UzcxMDBhfFAzMDAwRnxQMzAwMHN8UDEwMXxQMjAwc3xQMTAwMG18UDIwMG18UDkxMDB8UDEwMDBzfFM2NjAwYnxTOTA4fFAxMDAwfFAzMDB8UzE4fFM2NjAwfFM5MTAwKVxcXFxiXCIsXG4gICAgICAgIFwiaUpveVRhYmxldFwiOiBcIlRhYmxldCAoU3Bpcml0IDd8RXNzZW50aWF8R2FsYXRlYXxGdXNpb258T25peCA3fExhbmRhfFRpdGFufFNjb29ieXxEZW94fFN0ZWxsYXxUaGVtaXN8QXJnb258VW5pcXVlIDd8U3lnbnVzfEhleGVufEZpbml0eSA3fENyZWFtfENyZWFtIFgyfEphZGV8TmVvbiA3fE5lcm9uIDd8S2FuZHl8U2NhcGV8U2FwaHlyIDd8UmViZWx8QmlveHxSZWJlbHxSZWJlbCA4R0J8TXlzdHxEcmFjbyA3fE15c3R8VGFiNy0wMDR8TXlzdHxUYWRlbyBKb25lc3xUYWJsZXQgQm9pbmd8QXJyb3d8RHJhY28gRHVhbCBDYW18QXVyaXh8TWludHxBbWl0eXxSZXZvbHV0aW9ufEZpbml0eSA5fE5lb24gOXxUOXd8QW1pdHkgNEdCIER1YWwgQ2FtfFN0b25lIDRHQnxTdG9uZSA4R0J8QW5kcm9tZWRhfFNpbGtlbnxYMnxBbmRyb21lZGEgSUl8SGFsbGV5fEZsYW1lfFNhcGh5ciA5LDd8VG91Y2ggOHxQbGFuZXR8VHJpdG9ufFVuaXF1ZSAxMHxIZXhlbiAxMHxNZW1waGlzIDRHQnxNZW1waGlzIDhHQnxPbml4IDEwKVwiLFxuICAgICAgICBcIkZYMlRhYmxldFwiOiBcIkZYMiBQQUQ3fEZYMiBQQUQxMFwiLFxuICAgICAgICBcIlhvcm9UYWJsZXRcIjogXCJLaWRzUEFEIDcwMXxQQURbIF0/NzEyfFBBRFsgXT83MTR8UEFEWyBdPzcxNnxQQURbIF0/NzE3fFBBRFsgXT83MTh8UEFEWyBdPzcyMHxQQURbIF0/NzIxfFBBRFsgXT83MjJ8UEFEWyBdPzc5MHxQQURbIF0/NzkyfFBBRFsgXT85MDB8UEFEWyBdPzk3MTVEfFBBRFsgXT85NzE2RFJ8UEFEWyBdPzk3MThEUnxQQURbIF0/OTcxOVFSfFBBRFsgXT85NzIwUVJ8VGVsZVBBRDEwMzB8VGVsZXBhZDEwMzJ8VGVsZVBBRDczMHxUZWxlUEFENzMxfFRlbGVQQUQ3MzJ8VGVsZVBBRDczNVF8VGVsZVBBRDgzMHxUZWxlUEFEOTczMHxUZWxlUEFENzk1fE1lZ2FQQUQgMTMzMXxNZWdhUEFEIDE4NTF8TWVnYVBBRCAyMTUxXCIsXG4gICAgICAgIFwiVmlld3NvbmljVGFibGV0XCI6IFwiVmlld1BhZCAxMHBpfFZpZXdQYWQgMTBlfFZpZXdQYWQgMTBzfFZpZXdQYWQgRTcyfFZpZXdQYWQ3fFZpZXdQYWQgRTEwMHxWaWV3UGFkIDdlfFZpZXdTb25pYyBWQjczM3xWQjEwMGFcIixcbiAgICAgICAgXCJWZXJpem9uVGFibGV0XCI6IFwiUVRBUVozfFFUQUlSN3xRVEFRVFozfFFUQVNVTjF8UVRBU1VOMnxRVEFYSUExXCIsXG4gICAgICAgIFwiT2R5c1RhYmxldFwiOiBcIkxPT1h8WEVOTzEwfE9EWVNbIC1dKFNwYWNlfEVWT3xYcHJlc3N8Tk9PTil8XFxcXGJYRUxJT1xcXFxifFhlbGlvMTBQcm98WEVMSU83UEhPTkVUQUJ8WEVMSU8xMEVYVFJFTUV8WEVMSU9QVDJ8TkVPX1FVQUQxMFwiLFxuICAgICAgICBcIkNhcHRpdmFUYWJsZXRcIjogXCJDQVBUSVZBIFBBRFwiLFxuICAgICAgICBcIkljb25iaXRUYWJsZXRcIjogXCJOZXRUQUJ8TlQtMzcwMnxOVC0zNzAyU3xOVC0zNzAyU3xOVC0zNjAzUHxOVC0zNjAzUHxOVC0wNzA0U3xOVC0wNzA0U3xOVC0zODA1Q3xOVC0zODA1Q3xOVC0wODA2Q3xOVC0wODA2Q3xOVC0wOTA5VHxOVC0wOTA5VHxOVC0wOTA3U3xOVC0wOTA3U3xOVC0wOTAyU3xOVC0wOTAyU1wiLFxuICAgICAgICBcIlRlY2xhc3RUYWJsZXRcIjogXCJUOTggNEd8XFxcXGJQODBcXFxcYnxcXFxcYlg5MEhEXFxcXGJ8WDk4IEFpcnxYOTggQWlyIDNHfFxcXFxiWDg5XFxcXGJ8UDgwIDNHfFxcXFxiWDgwaFxcXFxifFA5OCBBaXJ8XFxcXGJYODlIRFxcXFxifFA5OCAzR3xcXFxcYlA5MEhEXFxcXGJ8UDg5IDNHfFg5OCAzR3xcXFxcYlA3MGhcXFxcYnxQNzlIRCAzR3xHMThkIDNHfFxcXFxiUDc5SERcXFxcYnxcXFxcYlA4OXNcXFxcYnxcXFxcYkE4OFxcXFxifFxcXFxiUDEwSERcXFxcYnxcXFxcYlAxOUhEXFxcXGJ8RzE4IDNHfFxcXFxiUDc4SERcXFxcYnxcXFxcYkE3OFxcXFxifFxcXFxiUDc1XFxcXGJ8RzE3cyAzR3xHMTdoIDNHfFxcXFxiUDg1dFxcXFxifFxcXFxiUDkwXFxcXGJ8XFxcXGJQMTFcXFxcYnxcXFxcYlA5OHRcXFxcYnxcXFxcYlA5OEhEXFxcXGJ8XFxcXGJHMThkXFxcXGJ8XFxcXGJQODVzXFxcXGJ8XFxcXGJQMTFIRFxcXFxifFxcXFxiUDg4c1xcXFxifFxcXFxiQTgwSERcXFxcYnxcXFxcYkE4MHNlXFxcXGJ8XFxcXGJBMTBoXFxcXGJ8XFxcXGJQODlcXFxcYnxcXFxcYlA3OHNcXFxcYnxcXFxcYkcxOFxcXFxifFxcXFxiUDg1XFxcXGJ8XFxcXGJBNzBoXFxcXGJ8XFxcXGJBNzBcXFxcYnxcXFxcYkcxN1xcXFxifFxcXFxiUDE4XFxcXGJ8XFxcXGJBODBzXFxcXGJ8XFxcXGJBMTFzXFxcXGJ8XFxcXGJQODhIRFxcXFxifFxcXFxiQTgwaFxcXFxifFxcXFxiUDc2c1xcXFxifFxcXFxiUDc2aFxcXFxifFxcXFxiUDk4XFxcXGJ8XFxcXGJBMTBIRFxcXFxifFxcXFxiUDc4XFxcXGJ8XFxcXGJQODhcXFxcYnxcXFxcYkExMVxcXFxifFxcXFxiQTEwdFxcXFxifFxcXFxiUDc2YVxcXFxifFxcXFxiUDc2dFxcXFxifFxcXFxiUDc2ZVxcXFxifFxcXFxiUDg1SERcXFxcYnxcXFxcYlA4NWFcXFxcYnxcXFxcYlA4NlxcXFxifFxcXFxiUDc1SERcXFxcYnxcXFxcYlA3NnZcXFxcYnxcXFxcYkExMlxcXFxifFxcXFxiUDc1YVxcXFxifFxcXFxiQTE1XFxcXGJ8XFxcXGJQNzZUaVxcXFxifFxcXFxiUDgxSERcXFxcYnxcXFxcYkExMFxcXFxifFxcXFxiVDc2MFZFXFxcXGJ8XFxcXGJUNzIwSERcXFxcYnxcXFxcYlA3NlxcXFxifFxcXFxiUDczXFxcXGJ8XFxcXGJQNzFcXFxcYnxcXFxcYlA3MlxcXFxifFxcXFxiVDcyMFNFXFxcXGJ8XFxcXGJDNTIwVGlcXFxcYnxcXFxcYlQ3NjBcXFxcYnxcXFxcYlQ3MjBWRVxcXFxifFQ3MjAtM0dFfFQ3MjAtV2lGaVwiLFxuICAgICAgICBcIk9uZGFUYWJsZXRcIjogXCJcXFxcYihWOTc1aXxWaTMwfFZYNTMwfFY3MDF8Vmk2MHxWNzAxc3xWaTUwfFY4MDFzfFY3MTl8Vng2MTB3fFZYNjEwV3xWODE5aXxWaTEwfFZYNTgwV3xWaTEwfFY3MTFzfFY4MTN8VjgxMXxWODIwd3xWODIwfFZpMjB8VjcxMXxWSTMwV3xWNzEyfFY4OTF3fFY5NzJ8VjgxOXd8VjgyMHd8Vmk2MHxWODIwd3xWNzExfFY4MTNzfFY4MDF8VjgxOXxWOTc1c3xWODAxfFY4MTl8VjgxOXxWODE4fFY4MTF8VjcxMnxWOTc1bXxWMTAxd3xWOTYxd3xWODEyfFY4MTh8Vjk3MXxWOTcxc3xWOTE5fFY5ODl8VjExNnd8VjEwMnd8Vjk3M3xWaTQwKVxcXFxiW1xcXFxzXSt8VjEwIFxcXFxiNEdcXFxcYlwiLFxuICAgICAgICBcIkpheXRlY2hUYWJsZXRcIjogXCJUUEMtUEE3NjJcIixcbiAgICAgICAgXCJCbGF1cHVua3RUYWJsZXRcIjogXCJFbmRlYXZvdXIgODAwTkd8RW5kZWF2b3VyIDEwMTBcIixcbiAgICAgICAgXCJEaWdtYVRhYmxldFwiOiBcIlxcXFxiKGlEeDEwfGlEeDl8aUR4OHxpRHg3fGlEeEQ3fGlEeEQ4fGlEc1E4fGlEc1E3fGlEc1E4fGlEc0QxMHxpRG5EN3wzVFM4MDRIfGlEc1ExMXxpRGo3fGlEczEwKVxcXFxiXCIsXG4gICAgICAgIFwiRXZvbGlvVGFibGV0XCI6IFwiQVJJQV9NaW5pX3dpZml8QXJpYVsgX11NaW5pfEV2b2xpbyBYMTB8RXZvbGlvIFg3fEV2b2xpbyBYOHxcXFxcYkV2b3RhYlxcXFxifFxcXFxiTmV1cmFcXFxcYlwiLFxuICAgICAgICBcIkxhdmFUYWJsZXRcIjogXCJRUEFEIEU3MDR8XFxcXGJJdm9yeVNcXFxcYnxFLVRBQiBJVk9SWXxcXFxcYkUtVEFCXFxcXGJcIixcbiAgICAgICAgXCJBb2NUYWJsZXRcIjogXCJNVzA4MTF8TVcwODEyfE1XMDkyMnxNVEs4MzgyfE1XMTAzMXxNVzA4MzF8TVcwODIxfE1XMDkzMXxNVzA3MTJcIixcbiAgICAgICAgXCJNcG1hblRhYmxldFwiOiBcIk1QMTEgT0NUQXxNUDEwIE9DVEF8TVBRQzExMTR8TVBRQzEwMDR8TVBRQzk5NHxNUFFDOTc0fE1QUUM5NzN8TVBRQzgwNHxNUFFDNzg0fE1QUUM3ODB8XFxcXGJNUEc3XFxcXGJ8TVBEQ0c3NXxNUERDRzcxfE1QREMxMDA2fE1QMTAxREN8TVBEQzkwMDB8TVBEQzkwNXxNUERDNzA2SER8TVBEQzcwNnxNUERDNzA1fE1QREMxMTB8TVBEQzEwMHxNUERDOTl8TVBEQzk3fE1QREM4OHxNUERDOHxNUERDNzd8TVA3MDl8TUlENzAxfE1JRDcxMXxNSUQxNzB8TVBEQzcwM3xNUFFDMTAxMFwiLFxuICAgICAgICBcIkNlbGtvblRhYmxldFwiOiBcIkNUNjk1fENUODg4fENUW1xcXFxzXT85MTB8Q1Q3IFRhYnxDVDkgVGFifENUMyBUYWJ8Q1QyIFRhYnxDVDEgVGFifEM4MjB8QzcyMHxcXFxcYkNULTFcXFxcYlwiLFxuICAgICAgICBcIldvbGRlclRhYmxldFwiOiBcIm1pVGFiIFxcXFxiKERJQU1PTkR8U1BBQ0V8QlJPT0tMWU58TkVPfEZMWXxNQU5IQVRUQU58RlVOS3xFVk9MVVRJT058U0tZfEdPQ0FSfElST058R0VOSVVTfFBPUHxNSU5UfEVQU0lMT058QlJPQURXQVl8SlVNUHxIT1B8TEVHRU5EfE5FVyBBR0V8TElORXxBRFZBTkNFfEZFRUx8Rk9MTE9XfExJS0V8TElOS3xMSVZFfFRISU5LfEZSRUVET018Q0hJQ0FHT3xDTEVWRUxBTkR8QkFMVElNT1JFLUdIfElPV0F8Qk9TVE9OfFNFQVRUTEV8UEhPRU5JWHxEQUxMQVN8SU4gMTAxfE1hc3RlckNoZWYpXFxcXGJcIixcbiAgICAgICAgXCJNZWRpYWNvbVRhYmxldFwiOiBcIk0tTVBJMTBDM0d8TS1TUDEwRUd8TS1TUDEwRUdQfE0tU1AxMEhYQUh8TS1TUDdIWEFIfE0tU1AxMEhYQkh8TS1TUDhIWEFIfE0tU1A4TVhBXCIsXG4gICAgICAgIFwiTWlUYWJsZXRcIjogXCJcXFxcYk1JIFBBRFxcXFxifFxcXFxiSE0gTk9URSAxV1xcXFxiXCIsXG4gICAgICAgIFwiTmliaXJ1VGFibGV0XCI6IFwiTmliaXJ1IE0xfE5pYmlydSBKdXBpdGVyIE9uZVwiLFxuICAgICAgICBcIk5leG9UYWJsZXRcIjogXCJORVhPIE5PVkF8TkVYTyAxMHxORVhPIEFWSU98TkVYTyBGUkVFfE5FWE8gR098TkVYTyBFVk98TkVYTyAzR3xORVhPIFNNQVJUfE5FWE8gS0lERE98TkVYTyBNT0JJXCIsXG4gICAgICAgIFwiTGVhZGVyVGFibGV0XCI6IFwiVEJMVDEwUXxUQkxUMTBJfFRCTC0xMFdES0J8VEJMLTEwV0RLQk8yMDEzfFRCTC1XMjMwVjJ8VEJMLVc0NTB8VEJMLVc1MDB8U1Y1NzJ8VEJMVDdJfFRCQS1BQzctOEd8VEJMVDc5fFRCTC04VzE2fFRCTC0xMFczMnxUQkwtMTBXS0J8VEJMLVcxMDBcIixcbiAgICAgICAgXCJVYmlzbGF0ZVRhYmxldFwiOiBcIlViaVNsYXRlW1xcXFxzXT83Q1wiLFxuICAgICAgICBcIlBvY2tldEJvb2tUYWJsZXRcIjogXCJQb2NrZXRib29rXCIsXG4gICAgICAgIFwiS29jYXNvVGFibGV0XCI6IFwiXFxcXGIoVEItMTIwNylcXFxcYlwiLFxuICAgICAgICBcIkhpc2Vuc2VUYWJsZXRcIjogXCJcXFxcYihGNTI4MXxFMjM3MSlcXFxcYlwiLFxuICAgICAgICBcIkh1ZGxcIjogXCJIdWRsIEhUN1MzfEh1ZGwgMlwiLFxuICAgICAgICBcIlRlbHN0cmFUYWJsZXRcIjogXCJULUh1YjJcIixcbiAgICAgICAgXCJHZW5lcmljVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGI5N0RcXFxcYnxUYWJsZXQoPyEuKlBDKXxCTlRWMjUwQXxNSUQtV0NETUF8TG9naWNQRCBab29tMnxcXFxcYkE3RUJcXFxcYnxDYXROb3ZhOHxBMV8wN3xDVDcwNHxDVDEwMDJ8XFxcXGJNNzIxXFxcXGJ8cmszMHNka3xcXFxcYkVWT1RBQlxcXFxifE03NThBfEVUOTA0fEFMVU1JVU0xMHxTbWFydGZyZW4gVGFifEVuZGVhdm91ciAxMDEwfFRhYmxldC1QQy00fFRhZ2kgVGFifFxcXFxiTTZwcm9cXFxcYnxDVDEwMjBXfGFyYyAxMEhEfFxcXFxiVFA3NTBcXFxcYnxcXFxcYlFUQVFaM1xcXFxifFdWVDEwMXxUTTEwODh8S1QxMDdcIlxuICAgIH0sXG4gICAgXCJvc3NcIjoge1xuICAgICAgICBcIkFuZHJvaWRPU1wiOiBcIkFuZHJvaWRcIixcbiAgICAgICAgXCJCbGFja0JlcnJ5T1NcIjogXCJibGFja2JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbSB0YWJsZXQgb3NcIixcbiAgICAgICAgXCJQYWxtT1NcIjogXCJQYWxtT1N8YXZhbnRnb3xibGF6ZXJ8ZWxhaW5lfGhpcHRvcHxwYWxtfHBsdWNrZXJ8eGlpbm9cIixcbiAgICAgICAgXCJTeW1iaWFuT1NcIjogXCJTeW1iaWFufFN5bWJPU3xTZXJpZXM2MHxTZXJpZXM0MHxTWUItWzAtOV0rfFxcXFxiUzYwXFxcXGJcIixcbiAgICAgICAgXCJXaW5kb3dzTW9iaWxlT1NcIjogXCJXaW5kb3dzIENFLiooUFBDfFNtYXJ0cGhvbmV8TW9iaWxlfFswLTldezN9eFswLTldezN9KXxXaW5kb3dzIE1vYmlsZXxXaW5kb3dzIFBob25lIFswLTkuXSt8V0NFO1wiLFxuICAgICAgICBcIldpbmRvd3NQaG9uZU9TXCI6IFwiV2luZG93cyBQaG9uZSAxMC4wfFdpbmRvd3MgUGhvbmUgOC4xfFdpbmRvd3MgUGhvbmUgOC4wfFdpbmRvd3MgUGhvbmUgT1N8WEJMV1A3fFp1bmVXUDd8V2luZG93cyBOVCA2LlsyM107IEFSTTtcIixcbiAgICAgICAgXCJpT1NcIjogXCJcXFxcYmlQaG9uZS4qTW9iaWxlfFxcXFxiaVBvZHxcXFxcYmlQYWR8QXBwbGVDb3JlTWVkaWFcIixcbiAgICAgICAgXCJpUGFkT1NcIjogXCJDUFUgT1MgMTNcIixcbiAgICAgICAgXCJTYWlsZmlzaE9TXCI6IFwiU2FpbGZpc2hcIixcbiAgICAgICAgXCJNZWVHb09TXCI6IFwiTWVlR29cIixcbiAgICAgICAgXCJNYWVtb09TXCI6IFwiTWFlbW9cIixcbiAgICAgICAgXCJKYXZhT1NcIjogXCJKMk1FXFwvfFxcXFxiTUlEUFxcXFxifFxcXFxiQ0xEQ1xcXFxiXCIsXG4gICAgICAgIFwid2ViT1NcIjogXCJ3ZWJPU3xocHdPU1wiLFxuICAgICAgICBcImJhZGFPU1wiOiBcIlxcXFxiQmFkYVxcXFxiXCIsXG4gICAgICAgIFwiQlJFV09TXCI6IFwiQlJFV1wiXG4gICAgfSxcbiAgICBcInVhc1wiOiB7XG4gICAgICAgIFwiQ2hyb21lXCI6IFwiXFxcXGJDck1vXFxcXGJ8Q3JpT1N8QW5kcm9pZC4qQ2hyb21lXFwvWy4wLTldKiAoTW9iaWxlKT9cIixcbiAgICAgICAgXCJEb2xmaW5cIjogXCJcXFxcYkRvbGZpblxcXFxiXCIsXG4gICAgICAgIFwiT3BlcmFcIjogXCJPcGVyYS4qTWluaXxPcGVyYS4qTW9iaXxBbmRyb2lkLipPcGVyYXxNb2JpbGUuKk9QUlxcL1swLTkuXSskfENvYXN0XFwvWzAtOS5dK1wiLFxuICAgICAgICBcIlNreWZpcmVcIjogXCJTa3lmaXJlXCIsXG4gICAgICAgIFwiRWRnZVwiOiBcIlxcXFxiRWRnaU9TXFxcXGJ8TW9iaWxlIFNhZmFyaVxcL1suMC05XSogRWRnZVwiLFxuICAgICAgICBcIklFXCI6IFwiSUVNb2JpbGV8TVNJRU1vYmlsZVwiLFxuICAgICAgICBcIkZpcmVmb3hcIjogXCJmZW5uZWN8ZmlyZWZveC4qbWFlbW98KE1vYmlsZXxUYWJsZXQpLipGaXJlZm94fEZpcmVmb3guKk1vYmlsZXxGeGlPU1wiLFxuICAgICAgICBcIkJvbHRcIjogXCJib2x0XCIsXG4gICAgICAgIFwiVGVhU2hhcmtcIjogXCJ0ZWFzaGFya1wiLFxuICAgICAgICBcIkJsYXplclwiOiBcIkJsYXplclwiLFxuICAgICAgICBcIlNhZmFyaVwiOiBcIlZlcnNpb24oKD8hXFxcXGJFZGdpT1NcXFxcYikuKSpNb2JpbGUuKlNhZmFyaXxTYWZhcmkuKk1vYmlsZXxNb2JpbGVTYWZhcmlcIixcbiAgICAgICAgXCJXZUNoYXRcIjogXCJcXFxcYk1pY3JvTWVzc2VuZ2VyXFxcXGJcIixcbiAgICAgICAgXCJVQ0Jyb3dzZXJcIjogXCJVQy4qQnJvd3NlcnxVQ1dFQlwiLFxuICAgICAgICBcImJhaWR1Ym94YXBwXCI6IFwiYmFpZHVib3hhcHBcIixcbiAgICAgICAgXCJiYWlkdWJyb3dzZXJcIjogXCJiYWlkdWJyb3dzZXJcIixcbiAgICAgICAgXCJEaWlnb0Jyb3dzZXJcIjogXCJEaWlnb0Jyb3dzZXJcIixcbiAgICAgICAgXCJNZXJjdXJ5XCI6IFwiXFxcXGJNZXJjdXJ5XFxcXGJcIixcbiAgICAgICAgXCJPYmlnb0Jyb3dzZXJcIjogXCJPYmlnb1wiLFxuICAgICAgICBcIk5ldEZyb250XCI6IFwiTkYtQnJvd3NlclwiLFxuICAgICAgICBcIkdlbmVyaWNCcm93c2VyXCI6IFwiTm9raWFCcm93c2VyfE92aUJyb3dzZXJ8T25lQnJvd3NlcnxUd29ua3lCZWFtQnJvd3NlcnxTRU1DLipCcm93c2VyfEZseUZsb3d8TWluaW1vfE5ldEZyb250fE5vdmFycmEtVmlzaW9ufE1RUUJyb3dzZXJ8TWljcm9NZXNzZW5nZXJcIixcbiAgICAgICAgXCJQYWxlTW9vblwiOiBcIkFuZHJvaWQuKlBhbGVNb29ufE1vYmlsZS4qUGFsZU1vb25cIlxuICAgIH0sXG4gICAgXCJwcm9wc1wiOiB7XG4gICAgICAgIFwiTW9iaWxlXCI6IFwiTW9iaWxlXFwvW1ZFUl1cIixcbiAgICAgICAgXCJCdWlsZFwiOiBcIkJ1aWxkXFwvW1ZFUl1cIixcbiAgICAgICAgXCJWZXJzaW9uXCI6IFwiVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgIFwiVmVuZG9ySURcIjogXCJWZW5kb3JJRFxcL1tWRVJdXCIsXG4gICAgICAgIFwiaVBhZFwiOiBcImlQYWQuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICBcImlQaG9uZVwiOiBcImlQaG9uZS4qQ1BVW2EteiBdK1tWRVJdXCIsXG4gICAgICAgIFwiaVBvZFwiOiBcImlQb2QuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICBcIktpbmRsZVwiOiBcIktpbmRsZVxcL1tWRVJdXCIsXG4gICAgICAgIFwiQ2hyb21lXCI6IFtcbiAgICAgICAgICAgIFwiQ2hyb21lXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiQ3JpT1NcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJDck1vXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkNvYXN0XCI6IFtcbiAgICAgICAgICAgIFwiQ29hc3RcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiRG9sZmluXCI6IFwiRG9sZmluXFwvW1ZFUl1cIixcbiAgICAgICAgXCJGaXJlZm94XCI6IFtcbiAgICAgICAgICAgIFwiRmlyZWZveFxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIkZ4aU9TXFwvW1ZFUl1cIlxuICAgICAgICBdLFxuICAgICAgICBcIkZlbm5lY1wiOiBcIkZlbm5lY1xcL1tWRVJdXCIsXG4gICAgICAgIFwiRWRnZVwiOiBcIkVkZ2VcXC9bVkVSXVwiLFxuICAgICAgICBcIklFXCI6IFtcbiAgICAgICAgICAgIFwiSUVNb2JpbGVcXC9bVkVSXTtcIixcbiAgICAgICAgICAgIFwiSUVNb2JpbGUgW1ZFUl1cIixcbiAgICAgICAgICAgIFwiTVNJRSBbVkVSXTtcIixcbiAgICAgICAgICAgIFwiVHJpZGVudFxcL1swLTkuXSs7LipydjpbVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiTmV0RnJvbnRcIjogXCJOZXRGcm9udFxcL1tWRVJdXCIsXG4gICAgICAgIFwiTm9raWFCcm93c2VyXCI6IFwiTm9raWFCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJPcGVyYVwiOiBbXG4gICAgICAgICAgICBcIiBPUFJcXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJPcGVyYSBNaW5pXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiVmVyc2lvblxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJPcGVyYSBNaW5pXCI6IFwiT3BlcmEgTWluaVxcL1tWRVJdXCIsXG4gICAgICAgIFwiT3BlcmEgTW9iaVwiOiBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICBcIlVDQnJvd3NlclwiOiBbXG4gICAgICAgICAgICBcIlVDV0VCW1ZFUl1cIixcbiAgICAgICAgICAgIFwiVUMuKkJyb3dzZXJcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiTVFRQnJvd3NlclwiOiBcIk1RUUJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICBcIk1pY3JvTWVzc2VuZ2VyXCI6IFwiTWljcm9NZXNzZW5nZXJcXC9bVkVSXVwiLFxuICAgICAgICBcImJhaWR1Ym94YXBwXCI6IFwiYmFpZHVib3hhcHBcXC9bVkVSXVwiLFxuICAgICAgICBcImJhaWR1YnJvd3NlclwiOiBcImJhaWR1YnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiU2Ftc3VuZ0Jyb3dzZXJcIjogXCJTYW1zdW5nQnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgIFwiSXJvblwiOiBcIklyb25cXC9bVkVSXVwiLFxuICAgICAgICBcIlNhZmFyaVwiOiBbXG4gICAgICAgICAgICBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgXCJTYWZhcmlcXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiU2t5ZmlyZVwiOiBcIlNreWZpcmVcXC9bVkVSXVwiLFxuICAgICAgICBcIlRpemVuXCI6IFwiVGl6ZW5cXC9bVkVSXVwiLFxuICAgICAgICBcIldlYmtpdFwiOiBcIndlYmtpdFsgXFwvXVtWRVJdXCIsXG4gICAgICAgIFwiUGFsZU1vb25cIjogXCJQYWxlTW9vblxcL1tWRVJdXCIsXG4gICAgICAgIFwiU2FpbGZpc2hCcm93c2VyXCI6IFwiU2FpbGZpc2hCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgXCJHZWNrb1wiOiBcIkdlY2tvXFwvW1ZFUl1cIixcbiAgICAgICAgXCJUcmlkZW50XCI6IFwiVHJpZGVudFxcL1tWRVJdXCIsXG4gICAgICAgIFwiUHJlc3RvXCI6IFwiUHJlc3RvXFwvW1ZFUl1cIixcbiAgICAgICAgXCJHb2FubmFcIjogXCJHb2FubmFcXC9bVkVSXVwiLFxuICAgICAgICBcImlPU1wiOiBcIiBcXFxcYmk/T1NcXFxcYiBbVkVSXVsgO117MX1cIixcbiAgICAgICAgXCJBbmRyb2lkXCI6IFwiQW5kcm9pZCBbVkVSXVwiLFxuICAgICAgICBcIlNhaWxmaXNoXCI6IFwiU2FpbGZpc2ggW1ZFUl1cIixcbiAgICAgICAgXCJCbGFja0JlcnJ5XCI6IFtcbiAgICAgICAgICAgIFwiQmxhY2tCZXJyeVtcXFxcd10rXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiQmxhY2tCZXJyeS4qVmVyc2lvblxcL1tWRVJdXCIsXG4gICAgICAgICAgICBcIlZlcnNpb25cXC9bVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiQlJFV1wiOiBcIkJSRVcgW1ZFUl1cIixcbiAgICAgICAgXCJKYXZhXCI6IFwiSmF2YVxcL1tWRVJdXCIsXG4gICAgICAgIFwiV2luZG93cyBQaG9uZSBPU1wiOiBbXG4gICAgICAgICAgICBcIldpbmRvd3MgUGhvbmUgT1MgW1ZFUl1cIixcbiAgICAgICAgICAgIFwiV2luZG93cyBQaG9uZSBbVkVSXVwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiV2luZG93cyBQaG9uZVwiOiBcIldpbmRvd3MgUGhvbmUgW1ZFUl1cIixcbiAgICAgICAgXCJXaW5kb3dzIENFXCI6IFwiV2luZG93cyBDRVxcL1tWRVJdXCIsXG4gICAgICAgIFwiV2luZG93cyBOVFwiOiBcIldpbmRvd3MgTlQgW1ZFUl1cIixcbiAgICAgICAgXCJTeW1iaWFuXCI6IFtcbiAgICAgICAgICAgIFwiU3ltYmlhbk9TXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiU3ltYmlhblxcL1tWRVJdXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ3ZWJPU1wiOiBbXG4gICAgICAgICAgICBcIndlYk9TXFwvW1ZFUl1cIixcbiAgICAgICAgICAgIFwiaHB3T1NcXC9bVkVSXTtcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcInV0aWxzXCI6IHtcbiAgICAgICAgXCJCb3RcIjogXCJHb29nbGVib3R8ZmFjZWJvb2tleHRlcm5hbGhpdHxHb29nbGUtQU1QSFRNTHxzfmFtcC12YWxpZGF0b3J8QWRzQm90LUdvb2dsZXxHb29nbGUgS2V5d29yZCBTdWdnZXN0aW9ufEZhY2Vib3R8WWFuZGV4Qm90fFlhbmRleE1vYmlsZUJvdHxiaW5nYm90fGlhX2FyY2hpdmVyfEFocmVmc0JvdHxFem9vbXN8R1NMRmJvdHxXQlNlYXJjaEJvdHxUd2l0dGVyYm90fFR3ZWV0bWVtZUJvdHxUd2lrbGV8UGFwZXJMaUJvdHxXb3Rib3h8VW53aW5kRmV0Y2hvcnxFeGFib3R8TUoxMmJvdHxZYW5kZXhJbWFnZXN8VHVybml0aW5Cb3R8UGluZ2RvbXxjb250ZW50a2luZ2FwcHxBc3BpZWdlbEJvdFwiLFxuICAgICAgICBcIk1vYmlsZUJvdFwiOiBcIkdvb2dsZWJvdC1Nb2JpbGV8QWRzQm90LUdvb2dsZS1Nb2JpbGV8WWFob29TZWVrZXJcXC9NMUExLVIyRDJcIixcbiAgICAgICAgXCJEZXNrdG9wTW9kZVwiOiBcIldQRGVza3RvcFwiLFxuICAgICAgICBcIlRWXCI6IFwiU29ueURUVnxIYmJUVlwiLFxuICAgICAgICBcIldlYktpdFwiOiBcIih3ZWJraXQpWyBcXC9dKFtcXFxcdy5dKylcIixcbiAgICAgICAgXCJDb25zb2xlXCI6IFwiXFxcXGIoTmludGVuZG98TmludGVuZG8gV2lpVXxOaW50ZW5kbyAzRFN8TmludGVuZG8gU3dpdGNofFBMQVlTVEFUSU9OfFhib3gpXFxcXGJcIixcbiAgICAgICAgXCJXYXRjaFwiOiBcIlNNLVY3MDBcIlxuICAgIH1cbn07XG5cbiAgICAvLyBmb2xsb3dpbmcgcGF0dGVybnMgY29tZSBmcm9tIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXG4gICAgaW1wbC5kZXRlY3RNb2JpbGVCcm93c2VycyA9IHtcbiAgICAgICAgZnVsbFBhdHRlcm46IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxcbiAgICAgICAgc2hvcnRQYXR0ZXJuOiAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxcbiAgICAgICAgdGFibGV0UGF0dGVybjogL2FuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcbiAgICB9O1xuXG4gICAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBpc0FycmF5O1xuXG4gICAgaW1wbC5GQUxMQkFDS19QSE9ORSA9ICdVbmtub3duUGhvbmUnO1xuICAgIGltcGwuRkFMTEJBQ0tfVEFCTEVUID0gJ1Vua25vd25UYWJsZXQnO1xuICAgIGltcGwuRkFMTEJBQ0tfTU9CSUxFID0gJ1Vua25vd25Nb2JpbGUnO1xuXG4gICAgaXNBcnJheSA9ICgnaXNBcnJheScgaW4gQXJyYXkpID9cbiAgICAgICAgQXJyYXkuaXNBcnJheSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJzsgfTtcblxuICAgIGZ1bmN0aW9uIGVxdWFsSUMoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAhPSBudWxsICYmIGIgIT0gbnVsbCAmJiBhLnRvTG93ZXJDYXNlKCkgPT09IGIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWluc0lDKGFycmF5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVMQywgaSwgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICBpZiAoIWxlbiB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZUxDID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVMQyA9PT0gYXJyYXlbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0UHJvcHNUb1JlZ0V4cChvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlVXNlckFnZW50KHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gKHVzZXJBZ2VudCB8fCAnJykuc3Vic3RyKDAsIDUwMCk7IC8vIG1pdGlnYXRlIHZ1bG5lcmFibGUgdG8gUmVEb1NcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIGtleSwgdmFsdWVzLCB2YWx1ZSwgaSwgbGVuLCB2ZXJQb3MsIG1vYmlsZURldGVjdFJ1bGVzID0gaW1wbC5tb2JpbGVEZXRlY3RSdWxlcztcbiAgICAgICAgZm9yIChrZXkgaW4gbW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwobW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gdmFsdWUuaW5kZXhPZignW1ZFUl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlclBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCB2ZXJQb3MpICsgJyhbXFxcXHcuX1xcXFwrXSspJyArIHZhbHVlLnN1YnN0cmluZyh2ZXJQb3MgKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wc1trZXldID0gdmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLm9zcyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnBob25lcyk7XG4gICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLnRhYmxldHMpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy51YXMpO1xuICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy51dGlscyk7XG5cbiAgICAgICAgLy8gY29weSBzb21lIHBhdHRlcm5zIHRvIG9zczAgd2hpY2ggYXJlIHRlc3RlZCBmaXJzdCAoc2VlIGlzc3VlIzE1KVxuICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5vc3MwID0ge1xuICAgICAgICAgICAgV2luZG93c1Bob25lT1M6IG1vYmlsZURldGVjdFJ1bGVzLm9zcy5XaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICAgIFdpbmRvd3NNb2JpbGVPUzogbW9iaWxlRGV0ZWN0UnVsZXMub3NzLldpbmRvd3NNb2JpbGVPU1xuICAgICAgICB9O1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHVzZXJBZ2VudCBzdHJpbmcgYWdhaW5zdCBhIHNldCBvZiBydWxlcyBhbmQgZmluZCB0aGUgZmlyc3QgbWF0Y2hlZCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIChrZXkgaXMgU3RyaW5nLCB2YWx1ZSBpcyBSZWdFeHApXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHRoZSBtYXRjaGVkIGtleSBpZiBmb3VuZCwgb3RoZXJ3aXNlIDx0dD5udWxsPC90dD5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZmluZE1hdGNoID0gZnVuY3Rpb24ocnVsZXMsIHVzZXJBZ2VudCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRlc3QgdXNlckFnZW50IHN0cmluZyBhZ2FpbnN0IGEgc2V0IG9mIHJ1bGVzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgbWF0Y2hlZCBrZXlzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyAoa2V5IGlzIFN0cmluZywgdmFsdWUgaXMgUmVnRXhwKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnQgdGhlIG5hdmlnYXRvci51c2VyQWdlbnQgKG9yIEhUVFAtSGVhZGVyICdVc2VyLUFnZW50JykuXG4gICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMsIG1heSBiZSBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoLCBidXQgbm90IDx0dD5udWxsPC90dD5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZmluZE1hdGNoZXMgPSBmdW5jdGlvbihydWxlcywgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKHJ1bGVzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVzW2tleV0udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybiB7U3RyaW5nfSB2ZXJzaW9uIG9yIDx0dD5udWxsPC90dD4gaWYgdmVyc2lvbiBub3QgZm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGltcGwuZ2V0VmVyc2lvblN0ciA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnByb3BzLCBwYXR0ZXJucywgaSwgbGVuLCBtYXRjaDtcbiAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChwcm9wcywgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcGF0dGVybnMgPSBwcm9wc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgbGVuID0gcGF0dGVybnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuc1tpXS5leGVjKHVzZXJBZ2VudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgKiBXaWxsIHJldHVybiBhIGZsb2F0IG51bWJlci4gKGVnLiAyXzAgd2lsbCByZXR1cm4gMi4wLCA0LjMuMSB3aWxsIHJldHVybiA0LjMxKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHZlcnNpb24gb3IgPHR0Pk5hTjwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLmdldFZlcnNpb24gPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBpbXBsLmdldFZlcnNpb25TdHIocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA/IGltcGwucHJlcGFyZVZlcnNpb25Obyh2ZXJzaW9uKSA6IE5hTjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXRpbmcgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbXBsLnByZXBhcmVWZXJzaW9uTm8gPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICBudW1iZXJzID0gdmVyc2lvbi5zcGxpdCgvW2Etei5fIFxcL1xcLV0vaSk7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICBudW1iZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2ZXJzaW9uICs9IG51bWJlcnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcih2ZXJzaW9uKTtcbiAgICB9O1xuXG4gICAgaW1wbC5pc01vYmlsZUZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gaW1wbC5kZXRlY3RNb2JpbGVCcm93c2Vycy5mdWxsUGF0dGVybi50ZXN0KHVzZXJBZ2VudCkgfHxcbiAgICAgICAgICAgIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMuc2hvcnRQYXR0ZXJuLnRlc3QodXNlckFnZW50LnN1YnN0cigwLDQpKTtcbiAgICB9O1xuXG4gICAgaW1wbC5pc1RhYmxldEZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICByZXR1cm4gaW1wbC5kZXRlY3RNb2JpbGVCcm93c2Vycy50YWJsZXRQYXR0ZXJuLnRlc3QodXNlckFnZW50KTtcbiAgICB9O1xuXG4gICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUsIHVzZXJBZ2VudCwgbWF4UGhvbmVXaWR0aCkge1xuICAgICAgICBpZiAoY2FjaGUubW9iaWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGhvbmUsIHRhYmxldCwgcGhvbmVTaXplZDtcblxuICAgICAgICAvLyBmaXJzdCBjaGVjayBmb3Igc3Ryb25nZXIgdGFibGV0IHJ1bGVzLCB0aGVuIHBob25lIChzZWUgaXNzdWUjNSlcbiAgICAgICAgdGFibGV0ID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy50YWJsZXRzLCB1c2VyQWdlbnQpO1xuICAgICAgICBpZiAodGFibGV0KSB7XG4gICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSB0YWJsZXQ7XG4gICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47IC8vIHVuYW1iaWd1b3VzbHkgaWRlbnRpZmllZCBhcyB0YWJsZXRcbiAgICAgICAgfVxuXG4gICAgICAgIHBob25lID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5waG9uZXMsIHVzZXJBZ2VudCk7XG4gICAgICAgIGlmIChwaG9uZSkge1xuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUucGhvbmUgPSBwaG9uZTtcbiAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47IC8vIHVuYW1iaWd1b3VzbHkgaWRlbnRpZmllZCBhcyBwaG9uZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3VyIHJ1bGVzIGhhdmVuJ3QgZm91bmQgYSBtYXRjaCAtPiB0cnkgbW9yZSBnZW5lcmFsIGZhbGxiYWNrIHJ1bGVzXG4gICAgICAgIGlmIChpbXBsLmlzTW9iaWxlRmFsbGJhY2sodXNlckFnZW50KSkge1xuICAgICAgICAgICAgcGhvbmVTaXplZCA9IE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQobWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICBpZiAocGhvbmVTaXplZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gaW1wbC5GQUxMQkFDS19NT0JJTEU7XG4gICAgICAgICAgICAgICAgY2FjaGUudGFibGV0ID0gY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwaG9uZVNpemVkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUucGhvbmUgPSBpbXBsLkZBTExCQUNLX1BIT05FO1xuICAgICAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGltcGwuRkFMTEJBQ0tfVEFCTEVUO1xuICAgICAgICAgICAgICAgIGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbXBsLmlzVGFibGV0RmFsbGJhY2sodXNlckFnZW50KSkge1xuICAgICAgICAgICAgY2FjaGUubW9iaWxlID0gY2FjaGUudGFibGV0ID0gaW1wbC5GQUxMQkFDS19UQUJMRVQ7XG4gICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgbW9iaWxlIGF0IGFsbCFcbiAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB0IGlzIGEgcmVmZXJlbmNlIHRvIGEgTW9iaWxlRGV0ZWN0IGluc3RhbmNlXG4gICAgaW1wbC5tb2JpbGVHcmFkZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIC8vIGltcGwgbm90ZTpcbiAgICAgICAgLy8gVG8ga2VlcCBpbiBzeW5jIHcvIE1vYmlsZV9EZXRlY3QucGhwIGVhc2lseSwgdGhlIGZvbGxvd2luZyBjb2RlIGlzIHRpZ2h0bHkgYWxpZ25lZCB0byB0aGUgUEhQIHZlcnNpb24uXG4gICAgICAgIC8vIFdoZW4gY2hhbmdlcyBhcmUgbWFkZSBpbiBNb2JpbGVfRGV0ZWN0LnBocCwgY29weSB0aGlzIG1ldGhvZCBhbmQgcmVwbGFjZTpcbiAgICAgICAgLy8gICAgICR0aGlzLT4gLyB0LlxuICAgICAgICAvLyAgICAgc2VsZjo6TU9CSUxFX0dSQURFXyguKSAvICckMSdcbiAgICAgICAgLy8gICAgICwgc2VsZjo6VkVSU0lPTl9UWVBFX0ZMT0FUIC8gKG5vdGhpbmcpXG4gICAgICAgIC8vICAgICBpc0lPUygpIC8gb3MoJ2lPUycpXG4gICAgICAgIC8vICAgICBbcmVnXSAvIChub3RoaW5nKSAgIDwtLSBqc2RlbGl2ciBjb21wbGFpbmluZyBhYm91dCB1bmVzY2FwZWQgdW5pY29kZSBjaGFyYWN0ZXIgVSswMEFFXG4gICAgICAgIHZhciAkaXNNb2JpbGUgPSB0Lm1vYmlsZSgpICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIEFwcGxlIGlPUyAzLjItNS4xIC0gVGVzdGVkIG9uIHRoZSBvcmlnaW5hbCBpUGFkICg0LjMgLyA1LjApLCBpUGFkIDIgKDQuMyksIGlQYWQgMyAoNS4xKSwgb3JpZ2luYWwgaVBob25lICgzLjEpLCBpUGhvbmUgMyAoMy4yKSwgM0dTICg0LjMpLCA0ICg0LjMgLyA1LjApLCBhbmQgNFMgKDUuMSlcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBhZCcpPj00LjMgfHxcbiAgICAgICAgICAgIHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBob25lJyk+PTMuMSB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUG9kJyk+PTMuMSB8fFxuXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDIuMS0yLjMgLSBUZXN0ZWQgb24gdGhlIEhUQyBJbmNyZWRpYmxlICgyLjIpLCBvcmlnaW5hbCBEcm9pZCAoMi4yKSwgSFRDIEFyaWEgKDIuMSksIEdvb2dsZSBOZXh1cyBTICgyLjMpLiBGdW5jdGlvbmFsIG9uIDEuNSAmIDEuNiBidXQgcGVyZm9ybWFuY2UgbWF5IGJlIHNsdWdnaXNoLCB0ZXN0ZWQgb24gR29vZ2xlIEcxICgxLjUpXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDMuMSAoSG9uZXljb21iKSAgLSBUZXN0ZWQgb24gdGhlIFNhbXN1bmcgR2FsYXh5IFRhYiAxMC4xIGFuZCBNb3Rvcm9sYSBYT09NXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDQuMCAoSUNTKSAgLSBUZXN0ZWQgb24gYSBHYWxheHkgTmV4dXMuIE5vdGU6IHRyYW5zaXRpb24gcGVyZm9ybWFuY2UgY2FuIGJlIHBvb3Igb24gdXBncmFkZWQgZGV2aWNlc1xuICAgICAgICAgICAgLy8gQW5kcm9pZCA0LjEgKEplbGx5IEJlYW4pICAtIFRlc3RlZCBvbiBhIEdhbGF4eSBOZXh1cyBhbmQgR2FsYXh5IDdcbiAgICAgICAgICAgICggdC52ZXJzaW9uKCdBbmRyb2lkJyk+Mi4xICYmIHQuaXMoJ1dlYmtpdCcpICkgfHxcblxuICAgICAgICAgICAgLy8gV2luZG93cyBQaG9uZSA3LTcuNSAtIFRlc3RlZCBvbiB0aGUgSFRDIFN1cnJvdW5kICg3LjApIEhUQyBUcm9waHkgKDcuNSksIExHLUU5MDAgKDcuNSksIE5va2lhIEx1bWlhIDgwMFxuICAgICAgICAgICAgdC52ZXJzaW9uKCdXaW5kb3dzIFBob25lIE9TJyk+PTcuMCB8fFxuXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDcgLSBUZXN0ZWQgb24gQmxhY2tCZXJyeSBUb3JjaCA5ODEwXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDYuMCAtIFRlc3RlZCBvbiB0aGUgVG9yY2ggOTgwMCBhbmQgU3R5bGUgOTY3MFxuICAgICAgICAgICAgdC5pcygnQmxhY2tCZXJyeScpICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpPj02LjAgfHxcbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgUGxheWJvb2sgKDEuMC0yLjApIC0gVGVzdGVkIG9uIFBsYXlCb29rXG4gICAgICAgICAgICB0Lm1hdGNoKCdQbGF5Ym9vay4qVGFibGV0JykgfHxcblxuICAgICAgICAgICAgLy8gUGFsbSBXZWJPUyAoMS40LTIuMCkgLSBUZXN0ZWQgb24gdGhlIFBhbG0gUGl4aSAoMS40KSwgUHJlICgxLjQpLCBQcmUgMiAoMi4wKVxuICAgICAgICAgICAgKCB0LnZlcnNpb24oJ3dlYk9TJyk+PTEuNCAmJiB0Lm1hdGNoKCdQYWxtfFByZXxQaXhpJykgKSB8fFxuICAgICAgICAgICAgLy8gUGFsbSBXZWJPUyAzLjAgIC0gVGVzdGVkIG9uIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICB0Lm1hdGNoKCdocC4qVG91Y2hQYWQnKSB8fFxuXG4gICAgICAgICAgICAvLyBGaXJlZm94IE1vYmlsZSAoMTIgQmV0YSkgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICAoIHQuaXMoJ0ZpcmVmb3gnKSAmJiB0LnZlcnNpb24oJ0ZpcmVmb3gnKT49MTIgKSB8fFxuXG4gICAgICAgICAgICAvLyBDaHJvbWUgZm9yIEFuZHJvaWQgLSBUZXN0ZWQgb24gQW5kcm9pZCA0LjAsIDQuMSBkZXZpY2VcbiAgICAgICAgICAgICggdC5pcygnQ2hyb21lJykgJiYgdC5pcygnQW5kcm9pZE9TJykgJiYgdC52ZXJzaW9uKCdBbmRyb2lkJyk+PTQuMCApIHx8XG5cbiAgICAgICAgICAgIC8vIFNreWZpcmUgNC4xIC0gVGVzdGVkIG9uIEFuZHJvaWQgMi4zIGRldmljZVxuICAgICAgICAgICAgKCB0LmlzKCdTa3lmaXJlJykgJiYgdC52ZXJzaW9uKCdTa3lmaXJlJyk+PTQuMSAmJiB0LmlzKCdBbmRyb2lkT1MnKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKT49Mi4zICkgfHxcblxuICAgICAgICAgICAgLy8gT3BlcmEgTW9iaWxlIDExLjUtMTI6IFRlc3RlZCBvbiBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgKCB0LmlzKCdPcGVyYScpICYmIHQudmVyc2lvbignT3BlcmEgTW9iaScpPjExICYmIHQuaXMoJ0FuZHJvaWRPUycpICkgfHxcblxuICAgICAgICAgICAgLy8gTWVlZ28gMS4yIC0gVGVzdGVkIG9uIE5va2lhIDk1MCBhbmQgTjlcbiAgICAgICAgICAgIHQuaXMoJ01lZUdvT1MnKSB8fFxuXG4gICAgICAgICAgICAvLyBUaXplbiAocHJlLXJlbGVhc2UpIC0gVGVzdGVkIG9uIGVhcmx5IGhhcmR3YXJlXG4gICAgICAgICAgICB0LmlzKCdUaXplbicpIHx8XG5cbiAgICAgICAgICAgIC8vIFNhbXN1bmcgQmFkYSAyLjAgLSBUZXN0ZWQgb24gYSBTYW1zdW5nIFdhdmUgMywgRG9scGhpbiBicm93c2VyXG4gICAgICAgICAgICAvLyBAdG9kbzogbW9yZSB0ZXN0cyBoZXJlIVxuICAgICAgICAgICAgdC5pcygnRG9sZmluJykgJiYgdC52ZXJzaW9uKCdCYWRhJyk+PTIuMCB8fFxuXG4gICAgICAgICAgICAvLyBVQyBCcm93c2VyIC0gVGVzdGVkIG9uIEFuZHJvaWQgMi4zIGRldmljZVxuICAgICAgICAgICAgKCAodC5pcygnVUMgQnJvd3NlcicpIHx8IHQuaXMoJ0RvbGZpbicpKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKT49Mi4zICkgfHxcblxuICAgICAgICAgICAgLy8gS2luZGxlIDMgYW5kIEZpcmUgIC0gVGVzdGVkIG9uIHRoZSBidWlsdC1pbiBXZWJLaXQgYnJvd3NlciBmb3IgZWFjaFxuICAgICAgICAgICAgKCB0Lm1hdGNoKCdLaW5kbGUgRmlyZScpIHx8XG4gICAgICAgICAgICAgICAgdC5pcygnS2luZGxlJykgJiYgdC52ZXJzaW9uKCdLaW5kbGUnKT49My4wICkgfHxcblxuICAgICAgICAgICAgLy8gTm9vayBDb2xvciAxLjQuMSAtIFRlc3RlZCBvbiBvcmlnaW5hbCBOb29rIENvbG9yLCBub3QgTm9vayBUYWJsZXRcbiAgICAgICAgICAgIHQuaXMoJ0FuZHJvaWRPUycpICYmIHQuaXMoJ05vb2tUYWJsZXQnKSB8fFxuXG4gICAgICAgICAgICAvLyBDaHJvbWUgRGVza3RvcCAxMS0yMSAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdDaHJvbWUnKT49MTEgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBTYWZhcmkgRGVza3RvcCA0LTUgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignU2FmYXJpJyk+PTUuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggRGVza3RvcCA0LTEzIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ0ZpcmVmb3gnKT49NC4wICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNy05IC0gVGVzdGVkIG9uIFdpbmRvd3MgWFAsIFZpc3RhIGFuZCA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ01TSUUnKT49Ny4wICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gT3BlcmEgRGVza3RvcCAxMC0xMiAtIFRlc3RlZCBvbiBPUyBYIDEwLjcgYW5kIFdpbmRvd3MgN1xuICAgICAgICAgICAgLy8gQHJlZmVyZW5jZTogaHR0cDovL215Lm9wZXJhLmNvbS9jb21tdW5pdHkvb3BlbndlYi9pZG9wZXJhL1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYScpPj0xMCAmJiAhJGlzTW9iaWxlXG5cbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGFkJyk8NC4zIHx8XG4gICAgICAgICAgICB0Lm9zKCdpT1MnKSAmJiB0LnZlcnNpb24oJ2lQaG9uZScpPDMuMSB8fFxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUG9kJyk8My4xIHx8XG5cbiAgICAgICAgICAgIC8vIEJsYWNrYmVycnkgNS4wOiBUZXN0ZWQgb24gdGhlIFN0b3JtIDIgOTU1MCwgQm9sZCA5NzcwXG4gICAgICAgICAgICB0LmlzKCdCbGFja2JlcnJ5JykgJiYgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk+PTUgJiYgdC52ZXJzaW9uKCdCbGFja0JlcnJ5Jyk8NiB8fFxuXG4gICAgICAgICAgICAvL09wZXJhIE1pbmkgKDUuMC02LjUpIC0gVGVzdGVkIG9uIGlPUyAzLjIvNC4zIGFuZCBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgKCB0LnZlcnNpb24oJ09wZXJhIE1pbmknKT49NS4wICYmIHQudmVyc2lvbignT3BlcmEgTWluaScpPD02LjUgJiZcbiAgICAgICAgICAgICAgICAodC52ZXJzaW9uKCdBbmRyb2lkJyk+PTIuMyB8fCB0LmlzKCdpT1MnKSkgKSB8fFxuXG4gICAgICAgICAgICAvLyBOb2tpYSBTeW1iaWFuXjMgLSBUZXN0ZWQgb24gTm9raWEgTjggKFN5bWJpYW5eMyksIEM3IChTeW1iaWFuXjMpLCBhbHNvIHdvcmtzIG9uIE45NyAoU3ltYmlhbl4xKVxuICAgICAgICAgICAgdC5tYXRjaCgnTm9raWFOOHxOb2tpYUM3fE45Ny4qU2VyaWVzNjB8U3ltYmlhbi8zJykgfHxcblxuICAgICAgICAgICAgLy8gQHRvZG86IHJlcG9ydCB0aGlzICh0ZXN0ZWQgb24gTm9raWEgTjcxKVxuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYSBNb2JpJyk+PTExICYmIHQuaXMoJ1N5bWJpYW5PUycpXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgcmV0dXJuICdCJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgLy8gQmxhY2tiZXJyeSA0LnggLSBUZXN0ZWQgb24gdGhlIEN1cnZlIDgzMzBcbiAgICAgICAgICAgIHQudmVyc2lvbignQmxhY2tCZXJyeScpPDUuMCB8fFxuICAgICAgICAgICAgLy8gV2luZG93cyBNb2JpbGUgLSBUZXN0ZWQgb24gdGhlIEhUQyBMZW8gKFdpbk1vIDUuMilcbiAgICAgICAgICAgIHQubWF0Y2goJ01TSUVNb2JpbGV8V2luZG93cyBDRS4qTW9iaWxlJykgfHwgdC52ZXJzaW9uKCdXaW5kb3dzIE1vYmlsZScpPD01LjJcblxuICAgICAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnQyc7XG4gICAgICAgIH1cblxuICAgICAgICAvL0FsbCBvbGRlciBzbWFydHBob25lIHBsYXRmb3JtcyBhbmQgZmVhdHVyZXBob25lcyAtIEFueSBkZXZpY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllc1xuICAgICAgICAvL3dpbGwgcmVjZWl2ZSB0aGUgYmFzaWMsIEMgZ3JhZGUgZXhwZXJpZW5jZS5cbiAgICAgICAgcmV0dXJuICdDJztcbiAgICB9O1xuXG4gICAgaW1wbC5kZXRlY3RPUyA9IGZ1bmN0aW9uICh1YSkge1xuICAgICAgICByZXR1cm4gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5vc3MwLCB1YSkgfHxcbiAgICAgICAgICAgIGltcGwuZmluZE1hdGNoKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMub3NzLCB1YSk7XG4gICAgfTtcblxuICAgIGltcGwuZ2V0RGV2aWNlU21hbGxlclNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2NyZWVuLndpZHRoIDwgd2luZG93LnNjcmVlbi5oZWlnaHQgP1xuICAgICAgICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA6XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIE1vYmlsZURldGVjdCBvYmplY3QuXG4gICAgICogPGJyPlxuICAgICAqIFN1Y2ggYW4gb2JqZWN0IHdpbGwga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZ2l2ZW4gdXNlci1hZ2VudCBzdHJpbmcgYW5kIGNhY2hlIG1vc3Qgb2YgdGhlIGRldGVjdCBxdWVyaWVzLjxicj5cbiAgICAgKiA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNzsgYm9yZGVyOiAxcHggc29saWQgI2JjZThmMTsgY29sb3I6ICMzYTg3YWQ7IHBhZGRpbmc6IDE0cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgbWFyZ2luLXRvcDogMjBweFwiPlxuICAgICAqICAgICA8c3Ryb25nPkZpbmQgaW5mb3JtYXRpb24gaG93IHRvIGRvd25sb2FkIGFuZCBpbnN0YWxsOjwvc3Ryb25nPlxuICAgICAqICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzL1wiPmdpdGh1Yi5jb20vaGdvZWJsL21vYmlsZS1kZXRlY3QuanMvPC9hPlxuICAgICAqIDwvZGl2PlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPHByZT5cbiAgICAgKiAgICAgdmFyIG1kID0gbmV3IE1vYmlsZURldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICogICAgIGlmIChtZC5tb2JpbGUoKSkge1xuICAgICAqICAgICAgICAgbG9jYXRpb24uaHJlZiA9IChtZC5tb2JpbGVHcmFkZSgpID09PSAnQScpID8gJy9tb2JpbGUvJyA6ICcvbHlueC8nO1xuICAgICAqICAgICB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IHR5cGljYWxseSB0YWtlbiBmcm9tIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IG9yIGh0dHBfaGVhZGVyWydVc2VyLUFnZW50J11cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFBob25lV2lkdGg9NjAwXSA8c3Ryb25nPm9ubHkgZm9yIGJyb3dzZXJzPC9zdHJvbmc+IHNwZWNpZnkgYSB2YWx1ZSBmb3IgdGhlIG1heGltdW1cbiAgICAgKiAgICAgICAgd2lkdGggb2Ygc21hbGxlc3QgZGV2aWNlIHNpZGUgKGluIGxvZ2ljYWwgXCJDU1NcIiBwaXhlbHMpIHVudGlsIGEgZGV2aWNlIGRldGVjdGVkIGFzIG1vYmlsZSB3aWxsIGJlIGhhbmRsZWRcbiAgICAgKiAgICAgICAgYXMgcGhvbmUuXG4gICAgICogICAgICAgIFRoaXMgaXMgb25seSB1c2VkIGluIGNhc2VzIHdoZXJlIHRoZSBkZXZpY2UgY2Fubm90IGJlIGNsYXNzaWZpZWQgYXMgcGhvbmUgb3IgdGFibGV0Ljxicj5cbiAgICAgKiAgICAgICAgU2VlIDxhIGhyZWY9XCJodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2d1aWRlL3ByYWN0aWNlcy9zY3JlZW5zX3N1cHBvcnQuaHRtbFwiPkRlY2xhcmluZyBUYWJsZXQgTGF5b3V0c1xuICAgICAqICAgICAgICBmb3IgQW5kcm9pZDwvYT4uPGJyPlxuICAgICAqICAgICAgICBJZiB5b3UgcHJvdmlkZSBhIHZhbHVlIDwgMCwgdGhlbiB0aGlzIFwiZnV6enlcIiBjaGVjayBpcyBkaXNhYmxlZC5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAZ2xvYmFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gTW9iaWxlRGV0ZWN0KHVzZXJBZ2VudCwgbWF4UGhvbmVXaWR0aCkge1xuICAgICAgICB0aGlzLnVhID0gcHJlcGFyZVVzZXJBZ2VudCh1c2VyQWdlbnQpO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgICAvLzYwMGRwIGlzIHR5cGljYWwgN1wiIHRhYmxldCBtaW5pbXVtIHdpZHRoXG4gICAgICAgIHRoaXMubWF4UGhvbmVXaWR0aCA9IG1heFBob25lV2lkdGggfHwgNjAwO1xuICAgIH1cblxuICAgIE1vYmlsZURldGVjdC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBNb2JpbGVEZXRlY3QsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIHBob25lIG9yIHRhYmxldCB0eXBlIG9yIDx0dD5udWxsPC90dD4gaWYgaXQgaXMgbm90IGEgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBGb3IgYSBsaXN0IG9mIHBvc3NpYmxlIHJldHVybiB2YWx1ZXMgc2VlIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uPGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAqIGlzIHBvc2l0aXZlLCBhIHZhbHVlIG9mIDxjb2RlPlVua25vd25QaG9uZTwvY29kZT4sIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+IG9yXG4gICAgICAgICAqIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGlzIHJldHVybmVkLjxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgc2VydmVyLXNpZGUgKG5vZGUuanMpLCB0aGVyZSBpcyBubyB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+XG4gICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGhlcmUuPGJyPlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAqIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfSwgbm90IGZvciB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9LlxuICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgdXNlIHRoZSByZXR1cm4gdmFsdWUganVzdCBhcyBhIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBwaG9uZSBmYW1pbHkgb3IgdGFibGV0IGZhbWlseSwgZS5nLiBcIk5leHVzXCIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjbW9iaWxlXG4gICAgICAgICAqL1xuICAgICAgICBtb2JpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGltcGwucHJlcGFyZURldGVjdGlvbkNhY2hlKHRoaXMuX2NhY2hlLCB0aGlzLnVhLCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLm1vYmlsZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgcGhvbmUgdHlwZS9mYW1pbHkgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIHJldHVybmVkIHRhYmxldCAoZmFtaWx5IG9yIHByb2R1Y2VyKSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PmlQaG9uZSwgQmxhY2tCZXJyeSwgUGl4ZWwsIEhUQywgTmV4dXMsIERlbGwsIE1vdG9yb2xhLCBTYW1zdW5nLCBMRywgU29ueSwgQXN1cyxcbiAgICAgICAgICogWGlhb21pLCBOb2tpYUx1bWlhLCBNaWNyb21heCwgUGFsbSwgVmVydHUsIFBhbnRlY2gsIEZseSwgV2lrbywgaU1vYmlsZSxcbiAgICAgICAgICogU2ltVmFsbGV5LCBXb2xmZ2FuZywgQWxjYXRlbCwgTmludGVuZG8sIEFtb2ksIElOUSwgT25lUGx1cywgR2VuZXJpY1Bob25lPC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSWYgdGhlIGRldmljZSBpcyBub3QgZGV0ZWN0ZWQgYnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBNb2JpbGUtRGV0ZWN0LCBhIHRlc3QgaXMgbWFkZSBhZ2FpbnN0XG4gICAgICAgICAqIHRoZSBwYXR0ZXJucyBvZiA8YSBocmVmPVwiaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cIj5kZXRlY3Rtb2JpbGVicm93c2Vycy5jb208L2E+LiBJZiB0aGlzIHRlc3RcbiAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blBob25lPC9jb2RlPiBvciA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBpcyByZXR1cm5lZC48YnI+XG4gICAgICAgICAqIFdoZW4gdXNlZCBpbiBicm93c2VyLCB0aGUgZGVjaXNpb24gd2hldGhlciBwaG9uZSBvciB0YWJsZXQgaXMgbWFkZSBiYXNlZCBvbiA8Y29kZT5zY3JlZW4ud2lkdGgvaGVpZ2h0PC9jb2RlPi48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIHNlcnZlci1zaWRlIChub2RlLmpzKSwgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPlxuICAgICAgICAgKiBhbmQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4sIHNvIHlvdSB3aWxsIGdldCA8Y29kZT5udWxsPC9jb2RlPiBoZXJlLCB3aGlsZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX1cbiAgICAgICAgICogd2lsbCByZXR1cm4gPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4uPGJyPlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAqIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfSwgbm90IGZvciB7QGxpbmsgTW9iaWxlRGV0ZWN0I3Bob25lfSBhbmQge0BsaW5rIE1vYmlsZURldGVjdCN0YWJsZXR9LlxuICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgdXNlIHRoZSByZXR1cm4gdmFsdWUganVzdCBhcyBhIGJvb2xlYW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgb2YgdGhlIHBob25lIGZhbWlseSBvciBwcm9kdWNlciwgZS5nLiBcImlQaG9uZVwiXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjcGhvbmVcbiAgICAgICAgICovXG4gICAgICAgIHBob25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5waG9uZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgdGFibGV0IHR5cGUvZmFtaWx5IHN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIFRoZSByZXR1cm5lZCB0YWJsZXQgKGZhbWlseSBvciBwcm9kdWNlcikgaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5pUGFkLCBOZXh1c1RhYmxldCwgR29vZ2xlVGFibGV0LCBTYW1zdW5nVGFibGV0LCBLaW5kbGUsIFN1cmZhY2VUYWJsZXQsXG4gICAgICAgICAqIEhQVGFibGV0LCBBc3VzVGFibGV0LCBCbGFja0JlcnJ5VGFibGV0LCBIVEN0YWJsZXQsIE1vdG9yb2xhVGFibGV0LCBOb29rVGFibGV0LFxuICAgICAgICAgKiBBY2VyVGFibGV0LCBUb3NoaWJhVGFibGV0LCBMR1RhYmxldCwgRnVqaXRzdVRhYmxldCwgUHJlc3RpZ2lvVGFibGV0LFxuICAgICAgICAgKiBMZW5vdm9UYWJsZXQsIERlbGxUYWJsZXQsIFlhcnZpa1RhYmxldCwgTWVkaW9uVGFibGV0LCBBcm5vdmFUYWJsZXQsXG4gICAgICAgICAqIEludGVuc29UYWJsZXQsIElSVVRhYmxldCwgTWVnYWZvblRhYmxldCwgRWJvZGFUYWJsZXQsIEFsbFZpZXdUYWJsZXQsXG4gICAgICAgICAqIEFyY2hvc1RhYmxldCwgQWlub2xUYWJsZXQsIE5va2lhTHVtaWFUYWJsZXQsIFNvbnlUYWJsZXQsIFBoaWxpcHNUYWJsZXQsXG4gICAgICAgICAqIEN1YmVUYWJsZXQsIENvYnlUYWJsZXQsIE1JRFRhYmxldCwgTVNJVGFibGV0LCBTTWlUVGFibGV0LCBSb2NrQ2hpcFRhYmxldCxcbiAgICAgICAgICogRmx5VGFibGV0LCBicVRhYmxldCwgSHVhd2VpVGFibGV0LCBOZWNUYWJsZXQsIFBhbnRlY2hUYWJsZXQsIEJyb25jaG9UYWJsZXQsXG4gICAgICAgICAqIFZlcnN1c1RhYmxldCwgWnluY1RhYmxldCwgUG9zaXRpdm9UYWJsZXQsIE5hYmlUYWJsZXQsIEtvYm9UYWJsZXQsIERhbmV3VGFibGV0LFxuICAgICAgICAgKiBUZXhldFRhYmxldCwgUGxheXN0YXRpb25UYWJsZXQsIFRyZWtzdG9yVGFibGV0LCBQeWxlQXVkaW9UYWJsZXQsIEFkdmFuVGFibGV0LFxuICAgICAgICAgKiBEYW55VGVjaFRhYmxldCwgR2FsYXBhZFRhYmxldCwgTWljcm9tYXhUYWJsZXQsIEthcmJvbm5UYWJsZXQsIEFsbEZpbmVUYWJsZXQsXG4gICAgICAgICAqIFBST1NDQU5UYWJsZXQsIFlPTkVTVGFibGV0LCBDaGFuZ0ppYVRhYmxldCwgR1VUYWJsZXQsIFBvaW50T2ZWaWV3VGFibGV0LFxuICAgICAgICAgKiBPdmVybWF4VGFibGV0LCBIQ0xUYWJsZXQsIERQU1RhYmxldCwgVmlzdHVyZVRhYmxldCwgQ3Jlc3RhVGFibGV0LFxuICAgICAgICAgKiBNZWRpYXRla1RhYmxldCwgQ29uY29yZGVUYWJsZXQsIEdvQ2xldmVyVGFibGV0LCBNb2RlY29tVGFibGV0LCBWb25pbm9UYWJsZXQsXG4gICAgICAgICAqIEVDU1RhYmxldCwgU3RvcmV4VGFibGV0LCBWb2RhZm9uZVRhYmxldCwgRXNzZW50aWVsQlRhYmxldCwgUm9zc01vb3JUYWJsZXQsXG4gICAgICAgICAqIGlNb2JpbGVUYWJsZXQsIFRvbGlub1RhYmxldCwgQXVkaW9Tb25pY1RhYmxldCwgQU1QRVRhYmxldCwgU2trVGFibGV0LFxuICAgICAgICAgKiBUZWNub1RhYmxldCwgSlhEVGFibGV0LCBpSm95VGFibGV0LCBGWDJUYWJsZXQsIFhvcm9UYWJsZXQsIFZpZXdzb25pY1RhYmxldCxcbiAgICAgICAgICogVmVyaXpvblRhYmxldCwgT2R5c1RhYmxldCwgQ2FwdGl2YVRhYmxldCwgSWNvbmJpdFRhYmxldCwgVGVjbGFzdFRhYmxldCxcbiAgICAgICAgICogT25kYVRhYmxldCwgSmF5dGVjaFRhYmxldCwgQmxhdXB1bmt0VGFibGV0LCBEaWdtYVRhYmxldCwgRXZvbGlvVGFibGV0LFxuICAgICAgICAgKiBMYXZhVGFibGV0LCBBb2NUYWJsZXQsIE1wbWFuVGFibGV0LCBDZWxrb25UYWJsZXQsIFdvbGRlclRhYmxldCwgTWVkaWFjb21UYWJsZXQsXG4gICAgICAgICAqIE1pVGFibGV0LCBOaWJpcnVUYWJsZXQsIE5leG9UYWJsZXQsIExlYWRlclRhYmxldCwgVWJpc2xhdGVUYWJsZXQsXG4gICAgICAgICAqIFBvY2tldEJvb2tUYWJsZXQsIEtvY2Fzb1RhYmxldCwgSGlzZW5zZVRhYmxldCwgSHVkbCwgVGVsc3RyYVRhYmxldCxcbiAgICAgICAgICogR2VuZXJpY1RhYmxldDwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAqIGlzIHBvc2l0aXZlLCBhIHZhbHVlIG9mIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+IG9yIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGlzIHJldHVybmVkLjxicj5cbiAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBXaGVuIHVzZWQgc2VydmVyLXNpZGUgKG5vZGUuanMpLCB0aGVyZSBpcyBubyB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPlVua25vd25UYWJsZXQ8L2NvZGU+XG4gICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPm51bGw8L2NvZGU+IGhlcmUsIHdoaWxlIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfVxuICAgICAgICAgKiB3aWxsIHJldHVybiA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPi48YnI+XG4gICAgICAgICAqIEJlIGF3YXJlIHRoYXQgc2luY2UgdjEuMC4wIGluIHRoaXMgc3BlY2lhbCBjYXNlIHlvdSB3aWxsIGdldCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBvbmx5IGZvcjpcbiAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAqIEluIHZlcnNpb25zIGJlZm9yZSB2MS4wLjAgYWxsIDMgbWV0aG9kcyByZXR1cm5lZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiB3aGljaCB3YXMgdGVkaW91cyB0byB1c2UuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBvZiB0aGUgdGFibGV0IGZhbWlseSBvciBwcm9kdWNlciwgZS5nLiBcIlNhbXN1bmdUYWJsZXRcIlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3RhYmxldFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS50YWJsZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIChmaXJzdCkgZGV0ZWN0ZWQgdXNlci1hZ2VudCBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdXNlci1hZ2VudCBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkNocm9tZSwgRG9sZmluLCBPcGVyYSwgU2t5ZmlyZSwgRWRnZSwgSUUsIEZpcmVmb3gsIEJvbHQsIFRlYVNoYXJrLCBCbGF6ZXIsXG4gICAgICAgICAqIFNhZmFyaSwgV2VDaGF0LCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgTWVyY3VyeSxcbiAgICAgICAgICogT2JpZ29Ccm93c2VyLCBOZXRGcm9udCwgR2VuZXJpY0Jyb3dzZXIsIFBhbGVNb29uPC90dD48YnI+XG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogSW4gbW9zdCBjYXNlcyBjYWxsaW5nIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50fSB3aWxsIGJlIHN1ZmZpY2llbnQuIEJ1dCB0aGVyZSBhcmUgcmFyZVxuICAgICAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAgICAgKiBsaXN0IG9mIGFsbCBtYXRjaGVzIHdpdGgge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnRzfSBvciBjaGVjayBmb3IgYSBwYXJ0aWN1bGFyIHZhbHVlIGJ5XG4gICAgICAgICAqIHByb3ZpZGluZyBvbmUgb2YgdGhlIGRlZmluZWQga2V5cyBhcyBmaXJzdCBhcmd1bWVudCB0byB7QGxpbmsgTW9iaWxlRGV0ZWN0I2lzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBmb3IgdGhlIGRldGVjdGVkIHVzZXItYWdlbnQgb3IgPHR0Pm51bGw8L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckFnZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUudXNlckFnZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS51c2VyQWdlbnQgPSBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnVhcywgdGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudXNlckFnZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFsbCBkZXRlY3RlZCB1c2VyLWFnZW50IHN0cmluZ3MuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogVGhlIGFycmF5IGlzIGVtcHR5IG9yIGNvbnRhaW5zIG9uZSBvciBtb3JlIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5DaHJvbWUsIERvbGZpbiwgT3BlcmEsIFNreWZpcmUsIEVkZ2UsIElFLCBGaXJlZm94LCBCb2x0LCBUZWFTaGFyaywgQmxhemVyLFxuICAgICAgICAgKiBTYWZhcmksIFdlQ2hhdCwgVUNCcm93c2VyLCBiYWlkdWJveGFwcCwgYmFpZHVicm93c2VyLCBEaWlnb0Jyb3dzZXIsIE1lcmN1cnksXG4gICAgICAgICAqIE9iaWdvQnJvd3NlciwgTmV0RnJvbnQsIEdlbmVyaWNCcm93c2VyLCBQYWxlTW9vbjwvdHQ+PGJyPlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgICAgICogY2FzZXMgd2hlcmUgYSBtb2JpbGUgZGV2aWNlIHByZXRlbmRzIHRvIGJlIG1vcmUgdGhhbiBvbmUgcGFydGljdWxhciBicm93c2VyLiBZb3UgY2FuIGdldCB0aGVcbiAgICAgICAgICogbGlzdCBvZiBhbGwgbWF0Y2hlcyB3aXRoIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50c30gb3IgY2hlY2sgZm9yIGEgcGFydGljdWxhciB2YWx1ZSBieVxuICAgICAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIGFycmF5IG9mIGRldGVjdGVkIHVzZXItYWdlbnQga2V5cyBvciA8dHQ+W108L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHNcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJBZ2VudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS51c2VyQWdlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS51c2VyQWdlbnRzID0gaW1wbC5maW5kTWF0Y2hlcyhpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnVhcywgdGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudXNlckFnZW50cztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgb3BlcmF0aW5nIHN5c3RlbSBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBUaGUgb3BlcmF0aW5nIHN5c3RlbSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkFuZHJvaWRPUywgQmxhY2tCZXJyeU9TLCBQYWxtT1MsIFN5bWJpYW5PUywgV2luZG93c01vYmlsZU9TLCBXaW5kb3dzUGhvbmVPUyxcbiAgICAgICAgICogaU9TLCBpUGFkT1MsIFNhaWxmaXNoT1MsIE1lZUdvT1MsIE1hZW1vT1MsIEphdmFPUywgd2ViT1MsIGJhZGFPUywgQlJFV09TPC90dD48YnI+XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBkZXRlY3RlZCBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I29zXG4gICAgICAgICAqL1xuICAgICAgICBvczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLm9zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5vcyA9IGltcGwuZGV0ZWN0T1ModGhpcy51YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUub3M7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgdmVyc2lvbiAoYXMgTnVtYmVyKSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICogV2lsbCByZXR1cm4gYSBmbG9hdCBudW1iZXIuIChlZy4gMl8wIHdpbGwgcmV0dXJuIDIuMCwgNC4zLjEgd2lsbCByZXR1cm4gNC4zMSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBhIGtleSBkZWZpbmluZyBhIHRoaW5nIHdoaWNoIGhhcyBhIHZlcnNpb24uPGJyPlxuICAgICAgICAgKiAgICAgICAgWW91IGNhbiB1c2Ugb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5Nb2JpbGUsIEJ1aWxkLCBWZXJzaW9uLCBWZW5kb3JJRCwgaVBhZCwgaVBob25lLCBpUG9kLCBLaW5kbGUsIENocm9tZSwgQ29hc3QsXG4gICAgICAgICAqIERvbGZpbiwgRmlyZWZveCwgRmVubmVjLCBFZGdlLCBJRSwgTmV0RnJvbnQsIE5va2lhQnJvd3NlciwgT3BlcmEsIE9wZXJhIE1pbmksXG4gICAgICAgICAqIE9wZXJhIE1vYmksIFVDQnJvd3NlciwgTVFRQnJvd3NlciwgTWljcm9NZXNzZW5nZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsXG4gICAgICAgICAqIFNhbXN1bmdCcm93c2VyLCBJcm9uLCBTYWZhcmksIFNreWZpcmUsIFRpemVuLCBXZWJraXQsIFBhbGVNb29uLFxuICAgICAgICAgKiBTYWlsZmlzaEJyb3dzZXIsIEdlY2tvLCBUcmlkZW50LCBQcmVzdG8sIEdvYW5uYSwgaU9TLCBBbmRyb2lkLCBTYWlsZmlzaCxcbiAgICAgICAgICogQmxhY2tCZXJyeSwgQlJFVywgSmF2YSwgV2luZG93cyBQaG9uZSBPUywgV2luZG93cyBQaG9uZSwgV2luZG93cyBDRSwgV2luZG93c1xuICAgICAgICAgKiBOVCwgU3ltYmlhbiwgd2ViT1M8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge051bWJlcn0gdGhlIHZlcnNpb24gYXMgZmxvYXQgb3IgPHR0Pk5hTjwvdHQ+IGlmIFVzZXItQWdlbnQgZG9lc24ndCBjb250YWluIHRoaXMgdmVyc2lvbi5cbiAgICAgICAgICogICAgICAgICAgQmUgY2FyZWZ1bCB3aGVuIGNvbXBhcmluZyB0aGlzIHZhbHVlIHdpdGggJz09JyBvcGVyYXRvciFcbiAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN2ZXJzaW9uXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaW1wbC5nZXRWZXJzaW9uKGtleSwgdGhpcy51YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgdmVyc2lvbiAoYXMgU3RyaW5nKSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqIDxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBhIGtleSBkZWZpbmluZyBhIHRoaW5nIHdoaWNoIGhhcyBhIHZlcnNpb24uPGJyPlxuICAgICAgICAgKiAgICAgICAgWW91IGNhbiB1c2Ugb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICogPGJyPjx0dD5Nb2JpbGUsIEJ1aWxkLCBWZXJzaW9uLCBWZW5kb3JJRCwgaVBhZCwgaVBob25lLCBpUG9kLCBLaW5kbGUsIENocm9tZSwgQ29hc3QsXG4gICAgICAgICAqIERvbGZpbiwgRmlyZWZveCwgRmVubmVjLCBFZGdlLCBJRSwgTmV0RnJvbnQsIE5va2lhQnJvd3NlciwgT3BlcmEsIE9wZXJhIE1pbmksXG4gICAgICAgICAqIE9wZXJhIE1vYmksIFVDQnJvd3NlciwgTVFRQnJvd3NlciwgTWljcm9NZXNzZW5nZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsXG4gICAgICAgICAqIFNhbXN1bmdCcm93c2VyLCBJcm9uLCBTYWZhcmksIFNreWZpcmUsIFRpemVuLCBXZWJraXQsIFBhbGVNb29uLFxuICAgICAgICAgKiBTYWlsZmlzaEJyb3dzZXIsIEdlY2tvLCBUcmlkZW50LCBQcmVzdG8sIEdvYW5uYSwgaU9TLCBBbmRyb2lkLCBTYWlsZmlzaCxcbiAgICAgICAgICogQmxhY2tCZXJyeSwgQlJFVywgSmF2YSwgV2luZG93cyBQaG9uZSBPUywgV2luZG93cyBQaG9uZSwgV2luZG93cyBDRSwgV2luZG93c1xuICAgICAgICAgKiBOVCwgU3ltYmlhbiwgd2ViT1M8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIFwicmF3XCIgdmVyc2lvbiBhcyBTdHJpbmcgb3IgPHR0Pm51bGw8L3R0PiBpZiBVc2VyLUFnZW50IGRvZXNuJ3QgY29udGFpbiB0aGlzIHZlcnNpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdmVyc2lvblN0clxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvblN0cjogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGltcGwuZ2V0VmVyc2lvblN0cihrZXksIHRoaXMudWEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWwgdGVzdCBrZXkgYWdhaW5zdCB1c2VyQWdlbnQsIG9zLCBwaG9uZSwgdGFibGV0IGFuZCBzb21lIG90aGVyIHByb3BlcnRpZXMgb2YgdXNlckFnZW50IHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUga2V5IChjYXNlLWluc2Vuc2l0aXZlKSBvZiBhIHVzZXJBZ2VudCwgYW4gb3BlcmF0aW5nIHN5c3RlbSwgcGhvbmUgb3JcbiAgICAgICAgICogICAgICAgIHRhYmxldCBmYW1pbHkuPGJyPlxuICAgICAgICAgKiAgICAgICAgRm9yIGEgY29tcGxldGUgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZXMsIHNlZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0sXG4gICAgICAgICAqICAgICAgICB7QGxpbmsgTW9iaWxlRGV0ZWN0I29zfSwge0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0sIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS48YnI+XG4gICAgICAgICAqICAgICAgICBBZGRpdGlvbmFsbHkgeW91IGhhdmUgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgKiA8YnI+PHR0PkJvdCwgTW9iaWxlQm90LCBEZXNrdG9wTW9kZSwgVFYsIFdlYktpdCwgQ29uc29sZSwgV2F0Y2g8L3R0Pjxicj5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IDx0dD50cnVlPC90dD4gd2hlbiB0aGUgZ2l2ZW4ga2V5IGlzIG9uZSBvZiB0aGUgZGVmaW5lZCBrZXlzIG9mIHVzZXJBZ2VudCwgb3MsIHBob25lLFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgdGFibGV0IG9yIG9uZSBvZiB0aGUgbGlzdGVkIGFkZGl0aW9uYWwga2V5cywgb3RoZXJ3aXNlIDx0dD5mYWxzZTwvdHQ+XG4gICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjaXNcbiAgICAgICAgICovXG4gICAgICAgIGlzOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnNJQyh0aGlzLnVzZXJBZ2VudHMoKSwga2V5KSB8fFxuICAgICAgICAgICAgICAgICAgIGVxdWFsSUMoa2V5LCB0aGlzLm9zKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgZXF1YWxJQyhrZXksIHRoaXMucGhvbmUoKSkgfHxcbiAgICAgICAgICAgICAgICAgICBlcXVhbElDKGtleSwgdGhpcy50YWJsZXQoKSkgfHxcbiAgICAgICAgICAgICAgICAgICBjb250YWluc0lDKGltcGwuZmluZE1hdGNoZXMoaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy51dGlscywgdGhpcy51YSksIGtleSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERvIGEgcXVpY2sgdGVzdCBhZ2FpbnN0IG5hdmlnYXRvcjo6dXNlckFnZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IHBhdHRlcm4gdGhlIHBhdHRlcm4sIGVpdGhlciBhcyBTdHJpbmcgb3IgUmVnRXhwXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgKGEgc3RyaW5nIHdpbGwgYmUgY29udmVydGVkIHRvIGEgY2FzZS1pbnNlbnNpdGl2ZSBSZWdFeHApLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gPHR0PnRydWU8L3R0PiB3aGVuIHRoZSBwYXR0ZXJuIG1hdGNoZXMsIG90aGVyd2lzZSA8dHQ+ZmFsc2U8L3R0PlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21hdGNoXG4gICAgICAgICAqL1xuICAgICAgICBtYXRjaDogZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghKHBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBtb2JpbGUgZGV2aWNlIGNhbiBiZSBjb25zaWRlcmVkIGFzIHBob25lIHJlZ2FyZGluZyA8Y29kZT5zY3JlZW4ud2lkdGg8L2NvZGU+LlxuICAgICAgICAgKiA8YnI+XG4gICAgICAgICAqIE9idmlvdXNseSB0aGlzIG1ldGhvZCBtYWtlcyBzZW5zZSBpbiBicm93c2VyIGVudmlyb25tZW50cyBvbmx5IChub3QgZm9yIE5vZGUuanMpIVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFBob25lV2lkdGhdIHRoZSBtYXhpbXVtIGxvZ2ljYWwgcGl4ZWxzIChha2EuIENTUy1waXhlbHMpIHRvIGJlIGNvbnNpZGVyZWQgYXMgcGhvbmUuPGJyPlxuICAgICAgICAgKiAgICAgICAgVGhlIGFyZ3VtZW50IGlzIG9wdGlvbmFsIGFuZCBpZiBub3QgcHJlc2VudCBvciBmYWxzeSwgdGhlIHZhbHVlIG9mIHRoZSBjb25zdHJ1Y3RvciBpcyB0YWtlbi5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW58dW5kZWZpbmVkfSA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIHNjcmVlbiBzaXplIHdhc24ndCBkZXRlY3RhYmxlLCBlbHNlIDxjb2RlPnRydWU8L2NvZGU+XG4gICAgICAgICAqICAgICAgICAgIHdoZW4gc2NyZWVuLndpZHRoIGlzIGxlc3Mgb3IgZXF1YWwgdG8gbWF4UGhvbmVXaWR0aCwgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi48YnI+XG4gICAgICAgICAqICAgICAgICAgIFdpbGwgYWx3YXlzIHJldHVybiA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IHNlcnZlci1zaWRlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNQaG9uZVNpemVkOiBmdW5jdGlvbiAobWF4UGhvbmVXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQobWF4UGhvbmVXaWR0aCB8fCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBtb2JpbGUgZ3JhZGUgKCdBJywgJ0InLCAnQycpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBvbmUgb2YgdGhlIG1vYmlsZSBncmFkZXMgKCdBJywgJ0InLCAnQycpLlxuICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21vYmlsZUdyYWRlXG4gICAgICAgICAqL1xuICAgICAgICBtb2JpbGVHcmFkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLmdyYWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5ncmFkZSA9IGltcGwubW9iaWxlR3JhZGUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUuZ3JhZGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZW52aXJvbm1lbnQtZGVwZW5kZW50XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zY3JlZW4pIHtcbiAgICAgICAgTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZCA9IGZ1bmN0aW9uIChtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4UGhvbmVXaWR0aCA8IDAgPyB1bmRlZmluZWQgOiBpbXBsLmdldERldmljZVNtYWxsZXJTaWRlKCkgPD0gbWF4UGhvbmVXaWR0aDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBNb2JpbGVEZXRlY3QuaXNQaG9uZVNpemVkID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgLy8gc2hvdWxkIG5vdCBiZSByZXBsYWNlZCBieSBhIGNvbXBsZXRlbHkgbmV3IG9iamVjdCAtIGp1c3Qgb3ZlcndyaXRlIGV4aXN0aW5nIG1ldGhvZHNcbiAgICBNb2JpbGVEZXRlY3QuX2ltcGwgPSBpbXBsO1xuICAgIFxuICAgIE1vYmlsZURldGVjdC52ZXJzaW9uID0gJzEuNC41IDIwMjEtMDMtMTMnO1xuXG4gICAgcmV0dXJuIE1vYmlsZURldGVjdDtcbn0pOyAvLyBlbmQgb2YgY2FsbCBvZiBkZWZpbmUoKVxufSkoKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZhY3RvcnkpIHsgd2luZG93Lk1vYmlsZURldGVjdCA9IGZhY3RvcnkoKTsgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGVhc2UgZmlsZSBhIGJ1ZyBpZiB5b3UgZ2V0IHRoaXMgZXJyb3IhXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBlbnZpcm9ubWVudCcpO1xuICAgIH1cbn0pKCkpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/buffer/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/buffer/node_modules/isarray/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/ieee754/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__node_modules/base64-js/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

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
//------QC-SOURCE-SPLIT------
