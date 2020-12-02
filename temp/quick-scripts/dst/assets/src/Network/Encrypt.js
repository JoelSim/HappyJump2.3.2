
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