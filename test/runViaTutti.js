var Tutti = require('tutti').Tutti

function indent(str){
    return String(str).split('\n').map(function(line){
        return '  ' + line
    }).join('\n')
}

function display(msg){
    if (msg.console){
        console.log(msg.browser)
        console.log(indent(msg.console))
    }
}

var scripts = [
"data/testinit.js",

"../src/core.js",
"../src/deferred.js",
"../src/support.js",
"../src/data.js",
"../src/queue.js",
"../src/attributes.js",
"../src/event.js",
"../src/sizzle/sizzle.js",
"../src/sizzle-jquery.js",
"../src/traversing.js",
"../src/manipulation.js",
"../src/css.js",
"../src/ajax.js",
"../src/ajax/jsonp.js",
"../src/ajax/script.js",
"../src/ajax/xhr.js",
"../src/effects.js",
"../src/offset.js",
"../src/dimensions.js",

"data/versioncheck.js",

"qunit/qunit/qunit.js",

"data/testrunner.js",

"unit/core.js",
"unit/support.js",
"unit/deferred.js",
"unit/data.js",
"unit/queue.js",
"unit/attributes.js",
"unit/event.js",
"../src/sizzle/test/unit/selector.js",
"unit/traversing.js",
"unit/manipulation.js",
"unit/css.js",
"unit/ajax.js",
"unit/effects.js",
"unit/offset.js",
"unit/dimensions.js",

"glueForTutti.js"
]

var tt = Tutti('http://localhost:8080/')
tt.on('message', display)
    .reset()
    .load(scripts)
    .wait('console', 3000)
    .exit()
    