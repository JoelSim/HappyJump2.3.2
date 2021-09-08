
(function () {
var scripts = [{"deps":{"./assets/Bet Selection Code/Betting":7,"./assets/res/FollowCamera":3,"./assets/src/BetSelection":11,"./assets/src/AutojumpManager":15,"./assets/src/BackgroundControl":10,"./assets/src/Collision":13,"./assets/src/G":17,"./assets/src/GlobalData":16,"./assets/src/InGameBetting":1,"./assets/src/NewBetSelection":18,"./assets/src/PortraitPrompt":19,"./assets/src/PropItem":21,"./assets/src/SettingManager":24,"./assets/src/ScoreMoving":20,"./assets/src/StartScene":22,"./assets/src/TutorialManager":23,"./assets/src/backgroundImage":26,"./assets/src/AudioManager":28,"./assets/src/Network/API_NEW ":27,"./assets/src/Network/Constant":25,"./assets/src/Network/Encrypt":4,"./assets/src/Network/Socket":31,"./assets/src/Network/ecrypt_New":29,"./assets/src/Network/ecrypt":2,"./assets/src/Network/API":30,"./assets/src/events/PlayerJumpSuccessEvent":32,"./assets/src/events/PlayerDieEvent":6,"./assets/src/utils/Audio":8,"./assets/migration/use_v2.0.x_cc.Toggle_event":5,"./assets/src/components/game/GameScene":14,"./assets/src/components/game/stage/Player":35,"./assets/src/components/game/stage/Stage":34,"./assets/src/components/game/stage/Block":9,"./assets/src/components/menu/MenuScene":12,"./assets/src/components/game/OverPanel":33},"path":"preview-scripts/__qc_index__.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/InGameBetting.js"},{"deps":{"buffer":36},"path":"preview-scripts/assets/src/Network/ecrypt.js"},{"deps":{},"path":"preview-scripts/assets/res/FollowCamera.js"},{"deps":{},"path":"preview-scripts/assets/src/Network/Encrypt.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/src/events/PlayerDieEvent.js"},{"deps":{},"path":"preview-scripts/assets/Bet Selection Code/Betting.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/Audio.js"},{"deps":{},"path":"preview-scripts/assets/src/components/game/stage/Block.js"},{"deps":{},"path":"preview-scripts/assets/src/BackgroundControl.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/BetSelection.js"},{"deps":{"../../G":17},"path":"preview-scripts/assets/src/components/menu/MenuScene.js"},{"deps":{},"path":"preview-scripts/assets/src/Collision.js"},{"deps":{"./OverPanel":33,"../../G":17,"./stage/Stage":34,"../../events/PlayerDieEvent":6,"../../GlobalData":16,"../../events/PlayerJumpSuccessEvent":32},"path":"preview-scripts/assets/src/components/game/GameScene.js"},{"deps":{},"path":"preview-scripts/assets/src/AutojumpManager.js"},{"deps":{},"path":"preview-scripts/assets/src/GlobalData.js"},{"deps":{"./components/game/GameScene":14},"path":"preview-scripts/assets/src/G.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/NewBetSelection.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/PortraitPrompt.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/ScoreMoving.js"},{"deps":{},"path":"preview-scripts/assets/src/PropItem.js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/StartScene.js"},{"deps":{},"path":"preview-scripts/assets/src/TutorialManager.js"},{"deps":{},"path":"preview-scripts/assets/src/SettingManager.js"},{"deps":{},"path":"preview-scripts/assets/src/Network/Constant.js"},{"deps":{},"path":"preview-scripts/assets/src/backgroundImage.js"},{"deps":{"GlobalData":16,"Constant":25},"path":"preview-scripts/assets/src/Network/API_NEW .js"},{"deps":{"GlobalData":16},"path":"preview-scripts/assets/src/AudioManager.js"},{"deps":{"buffer":36},"path":"preview-scripts/assets/src/Network/ecrypt_New.js"},{"deps":{"GlobalData":16,"Constant":25,"Encrypt":4,"ecrypt":2},"path":"preview-scripts/assets/src/Network/API.js"},{"deps":{"GlobalData":16,"Constant":25,"Encrypt":4},"path":"preview-scripts/assets/src/Network/Socket.js"},{"deps":{},"path":"preview-scripts/assets/src/events/PlayerJumpSuccessEvent.js"},{"deps":{},"path":"preview-scripts/assets/src/components/game/OverPanel.js"},{"deps":{"./Player":35,"./Block":9,"../../../G":17,"../../../events/PlayerDieEvent":6,"../../../events/PlayerJumpSuccessEvent":32,"../../../GlobalData":16},"path":"preview-scripts/assets/src/components/game/stage/Stage.js"},{"deps":{"../../../GlobalData":16},"path":"preview-scripts/assets/src/components/game/stage/Player.js"},{"deps":{"isarray":37,"ieee754":38,"base64-js":39},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

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
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
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
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
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

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
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
    