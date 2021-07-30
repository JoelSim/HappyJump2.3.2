var betSelection =0;
var sound = 1;
var effect_volume = 1;
var rotate_volume = 1;
var betAmount = 0;
var multiplier = 0;
var socket = null;
export var isKicked = false;
export var kickMessage = "";
export var isProduction = false;
export var isDemo=false;
export var currentBet=0;
export var platform =0;
export var  consoScore = 0;
export var perfectScore =0;
export var finishGetData= false;
export var finishGeneratingBalance=false;
export function getSocket(){
    return socket;
}
export var host_id =0;
export var access_token =0;
export var isfullScreen=0;
export function setSocket(value){
    cc.log("Setting socket");
    socket = value;
    return (socket);
}

export var settings = {
    balance : 9999999999999999,
    currency : "MYR",
    exit_btn : 0,
    game_on : 0,
    game_type : "dsg-006",
    guest_mode : 0,
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
}

export var game_code = 23;
export var ticket_id = -1;

export var errorMessage = "";
export var isEncrypt = true;
export var firstPrompt = false;

export var winMultiplier = [40,38,36,34,32];
export function getMultiplier(){
    return multiplier;
}

export function setMultiplier(value){
    multiplier = value;
    return (multiplier);
}
export function getBetAmount(){
    return betAmount;
}
export function setBetAmount(value){
    betAmount = value;
    return (betAmount);
}
export function getBetSelection(){
    return betSelection;
}

export function setBetSelection(value){
    betSelection = value;
    return (betSelection);
}


export function getSound(){
    return sound;
}

export function setSound(value){
    sound = value;
    return (sound);
}

export function setEffectVolume(value){
    effect_volume = value;
    return (effect_volume);
}

export function getEffectVolume(){
    return effect_volume;
}


export function setRotateVolume(value){
    rotate_volume = value;
    return (rotate_volume);
}

export function getRotateVolume(){
    return rotate_volume;
}

export var geoIP_url;
export var api_url;

export var currentBetSlot;