
(function () {
var scripts = [{"deps":{"./assets/migration/use_reversed_rotateBy":1,"./assets/src/Network/Constant":2,"./assets/res/FollowCamera":3,"./assets/Bet Selection Code/Betting":4,"./assets/src/events/PlayerJumpSuccessEvent":5,"./assets/migration/use_v2.0.x_cc.Toggle_event":7,"./assets/src/utils/Audio":8,"./assets/src/BackgroundControl":11,"./assets/src/AutojumpManager":12,"./assets/src/Collision":15,"./assets/src/GlobalData":16,"./assets/src/NewBetSelection":17,"./assets/src/PropItem":18,"./assets/src/PortraitPrompt":19,"./assets/src/ScoreMoving":20,"./assets/src/InGameBetting":21,"./assets/src/SettingManager":22,"./assets/src/backgroundImage":23,"./assets/src/StartScene":24,"./assets/src/TutorialManager":25,"./assets/src/AudioManager":27,"./assets/src/Network/Encrypt":28,"./assets/src/events/PlayerDieEvent":29,"./assets/src/BetSelection":13,"./assets/src/components/game/stage/Block":34,"./assets/src/Network/API_NEW ":26,"./assets/src/Network/Socket":30,"./assets/src/components/game/OverPanel":35,"./assets/src/Network/ecrypt":31,"./assets/src/Network/API":33,"./assets/src/G":14,"./assets/src/components/menu/MenuScene":10,"./assets/src/components/game/GameScene":9,"./assets/src/components/game/stage/Player":6,"./assets/src/components/game/stage/Stage":36,"./assets/src/Network/ecrypt_New":32},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateBy.js"},{"deps":{},"path":"preview-scripts/assets/src/Network/Constant.js"},{"deps":{},"path":"preview-scripts/assets/res/FollowCamera.js"},{"deps":{},"path":"preview-scripts/assets/Bet Selection Code/Betting.js"},{"deps":{},"path":"preview-scripts/assets/src/events/PlayerJumpSuccessEvent.js"},{"deps":{"../../../GlobalData":16},"path":"preview-scripts/assets/src/components/game/stage/Player.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/Audio.js"},{"deps":{"./OverPanel":35,"../../G":14,"./stage/Stage":36,"../../events/PlayerDieEvent":29,"../../events/PlayerJumpSuccessEvent":5,"../../GlobalData":16},"path":"preview-scripts/assets/src/components/game/GameScene.js"},{"deps":{"../../G":14},"path":"preview-scripts/assets/src/components/menu/MenuScene.js"},{"deps":{},"path":"preview-scripts/assets/src/BackgroundControl.js"},{"deps":{},"path":"preview-scripts/assets/src/AutojumpManager.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/BetSelection.js"},{"deps":{"./components/game/GameScene":9},"path":"preview-scripts/assets/src/G.js"},{"deps":{},"path":"preview-scripts/assets/src/Collision.js"},{"deps":{},"path":"preview-scripts/assets/src/GlobalData.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/NewBetSelection.js"},{"deps":{},"path":"preview-scripts/assets/src/PropItem.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/PortraitPrompt.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/ScoreMoving.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/InGameBetting.js"},{"deps":{},"path":"preview-scripts/assets/src/SettingManager.js"},{"deps":{},"path":"preview-scripts/assets/src/backgroundImage.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/StartScene.js"},{"deps":{},"path":"preview-scripts/assets/src/TutorialManager.js"},{"deps":{"GlobalData":16,"Constant":2},"path":"preview-scripts/assets/src/Network/API_NEW .js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/AudioManager.js"},{"deps":{},"path":"preview-scripts/assets/src/Network/Encrypt.js"},{"deps":{},"path":"preview-scripts/assets/src/events/PlayerDieEvent.js"},{"deps":{"GlobalData":16,"Constant":2,"Encrypt":28},"path":"preview-scripts/assets/src/Network/Socket.js"},{"deps":{"buffer":37},"path":"preview-scripts/assets/src/Network/ecrypt.js"},{"deps":{"buffer":37},"path":"preview-scripts/assets/src/Network/ecrypt_New.js"},{"deps":{"GlobalData":16,"Constant":2,"Encrypt":28,"ecrypt":31},"path":"preview-scripts/assets/src/Network/API.js"},{"deps":{},"path":"preview-scripts/assets/src/components/game/stage/Block.js"},{"deps":{},"path":"preview-scripts/assets/src/components/game/OverPanel.js"},{"deps":{"./Player":6,"./Block":34,"../../../G":14,"../../../events/PlayerDieEvent":29,"../../../events/PlayerJumpSuccessEvent":5,"../../../GlobalData":16},"path":"preview-scripts/assets/src/components/game/stage/Stage.js"},{"deps":{"ieee754":38,"isarray":39,"base64-js":40},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    