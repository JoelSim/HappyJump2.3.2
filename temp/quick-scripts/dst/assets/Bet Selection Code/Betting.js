
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