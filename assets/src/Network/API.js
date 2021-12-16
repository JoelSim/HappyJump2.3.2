import * as global from "GlobalData";
import * as constant from "Constant";
import * as ecrypt from "Encrypt";
import * as ecryptContoller from 'ecrypt';

cc.Class({
    extends: cc.Component,

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
		
		betScene:{
			default:null,
			type:cc.Node,
		},

		errorLayer:{
			default:null,
			type:cc.Node,
		},
		
		errorLabel:{
			default:null,
			type:cc.Label,
		},

		backHome:{
			default:null,
			type:cc.Node,	
		},
		betSelectionNode:{
			default:null,
			type:cc.Node,
		},
    },

    // use this for initialization
    onLoad: function () {
    },

    start(){
        // this.connectAPI();
    },
	startGuestMode() {
		this.errorLayer.active=false;
		global.isDemo = true;
		this.betScene.getComponent("StartScene").updateCreditLabel();
	},
    getSettings(){
		if(window.endPointConfig != null){
            var networkConfig = ecryptContoller.decrypt(window.endPointConfig);
            if(networkConfig != null){
                var networkConfigJson = JSON.parse(networkConfig);

                //cc.log(networkConfigJson.geoip_url);
                //cc.log(networkConfigJson.api_url);

                global.geoIP_url = networkConfigJson.geoip_url;
                global.api_url = networkConfigJson.api_url;

                // cc.log(global.SetGeoip_Url(networkConfigJson.geoip_url));
                // cc.log(global.SetApi_Url(networkConfigJson.api_url));
            }
        }

		global.host_id = this.getParameterByName('host_id');
		global.access_token = this.getParameterByName('access_token');
		global.is_promotion = this.getParameterByName('is_promotion');
		global.h5_app = this.getH5App();
		let xhr = new XMLHttpRequest();
		var self = this;

		if(global.host_id==null && global.access_token==null){
			if(!global.isDemo){
				self.errorLayer.active = true;
				self.errorLabel.string=" You Are Playing For Fun.";
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 &&(xhr.status >= 200 && xhr.status < 400)) {
						var response = xhr.responseText;
						var parsed = JSON.parse(response);
		
						global.settings = parsed.data;
						cc.log(global.settings);
						constant.setSocketURL(global.settings.socket_url);
						if(!global.getSocket()){
							self.getComponent("Socket").connectSocket();
						}
						self.getErrorMessage();
						self.betSelectionNode.getComponent("BetSelection").updateBetRangeAndBetAmountConfig(global.settings);
					}
				
				};
			}
			else{
				self.scheduleOnce(function(){
					self.betScene.getComponent("StartScene").updateCreditLabel();
					
				},0.2);
			}
		

			var body = {
				"device_type": "Desktop",
				"game_code": 23,
				"country_code": "MY"
			}
	
			
			var json = JSON.stringify(body);
			var apiURL= global.api_url;
			if (global.api_url == undefined) {
				apiURL = "https://bo-stage.slot28.com";
				if (global.isProduction) {
					apiURL = "https://bo.slot28.com";
				}
			}
			let url = apiURL+"/api/user/get-settings-demo";
		
			// let url = "https://bo-stage-apl.velachip.com/api/user/get-settings?host_id=0e83088027d4c42c8e9934388480c996&access_token=demo01&game_code=21";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept-Language", "en-US");
			xhr.send(json);
		}

		else{
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 &&(xhr.status >= 200 && xhr.status < 400)) {
					var response = xhr.responseText;
					var parsed = JSON.parse(response);
	
					global.settings = parsed.data;
					cc.log(global.settings);
					constant.setSocketURL(global.settings.socket_url);
					if(!global.getSocket()){
						self.getComponent("Socket").connectSocket();
					}
					self.getErrorMessage();
					self.betSelectionNode.getComponent("BetSelection").updateBetRangeAndBetAmountConfig(global.settings);
					
					//global.balance = global.settings.balance;
	
					if(global.settings==undefined){
						self.errorLayer.active = true;
						self.errorLabel.string = parsed.error.message;
						global.settings=global.DemoSettings;
						self.backHome.active=true;
					}
					else{
						global.isPlayerBalanceUpdated = true;
						self.betScene.getComponent("StartScene").updateCreditLabel();
	
					}
					// console.log(global.getSettings());
				}
				else{
				}
			};
	
			var body = {
				"host_id": this.getParameterByName('host_id'), 
				"access_token": this.getParameterByName('access_token'),
				"device_type": "Desktop",
				"game_code": 23,
				"country_code": "MY"
			}
	
			var json = JSON.stringify(body);
			var apiURL = global.api_url;
			if (global.api_url == undefined) {
				apiURL = "https://bo-stage.slot28.com";
				if (global.isProduction) {
					apiURL = "https://bo.slot28.com";
				}
				global.api_url=apiURL;
			}

			let url = apiURL + "/api/user/get-settings?host_id="+global.host_id+
			"&access_token="+global.access_token+
			"&game_code=" + global.game_code
			"&is_promotion=" + global.is_promotion + 
            "&h5_app=" + global.h5_app;
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Accept-Language", "en-US");
			xhr.send(json);
		}
		
	},
	getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';

			return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	getH5App()
    {
        let h5_app = this.getParameterByName('h5_app', undefined);
        if(h5_app == null || h5_app == "")
        {
            return 99;
        }
        return h5_app;
    },
	getErrorMessage(){
        let url = global.settings.dynamic_assets_url + '/errorMessage.json'; 
        cc.loader.load(url, function(err, info){
            if(!err){
                global.commonErrorMessage = info;
                cc.log("getErrorMessage:", global.commonErrorMessage);
            }
        });
    },
});
