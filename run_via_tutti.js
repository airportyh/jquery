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
"test/qunit/qunit/qunit.css",
"test/data/iframe.html",
"test/data/testsuite.css",
"test/data/ua.txt",
"test/data/testinit.js",
"test/data/dashboard.xml",
"test/data/support/boxModelIE.html",
"test/data/support/bodyBackground.html",
"test/data/with_fries.xml",
"test/data/name.html",
"test/data/test.html",
"test/data/test2.html",
"test/data/test3.html",
"test/data/test.js",
"test/data/json_obj.js",
"test/data/offset/absolute.html",
"test/data/offset/relative.html",
"test/data/offset/static.html",
"test/data/offset/table.html",
"test/data/offset/scroll.html",
"test/data/offset/fixed.html",
"test/data/offset/body.html",
"dist/jquery.js",

"src/core.js",
"src/deferred.js",
"src/support.js",
"src/data.js",
"src/queue.js",
"src/attributes.js",
"src/event.js",
"src/sizzle/sizzle.js",
"src/sizzle-jquery.js",
"src/traversing.js",
"src/manipulation.js",
"src/css.js",
"src/ajax.js",
"src/ajax/jsonp.js",
"src/ajax/script.js",
"src/ajax/xhr.js",
"src/effects.js",
"src/offset.js",
"src/dimensions.js",

"test/data/versioncheck.js",

"test/qunit/qunit/qunit.js",

"test/data/testrunner.js",

"test/unit/core.js",
"test/unit/support.js",
"test/unit/deferred.js",
"test/unit/data.js",
"test/unit/queue.js",
"test/unit/attributes.js",
"test/unit/event.js",
"src/sizzle/test/unit/selector.js",
"test/unit/traversing.js",
"test/unit/manipulation.js",
"test/unit/css.js",
"test/unit/ajax.js",
"test/unit/effects.js",
"test/unit/offset.js",
"test/unit/dimensions.js",
"test/index.html"
]

var tt = Tutti('http://localhost:8080/')
tt.on('message', display)
    .upload(scripts)
    .open('test/index.html')
