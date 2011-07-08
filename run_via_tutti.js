var Tutti = require('tutti').Tutti

function red(s){ return ["\033[31m", s, "\033[0m"].join('') }
function green(s){ return ["\033[32m", s, "\033[0m"].join('') }
function cyan(s){ return ["\033[36m", s, "\033[0m"].join('') }
function yellow(s){ return ["\033[33m", s, "\033[0m"].join('') }
function blue(s){ return ["\033[34m", s, "\033[0m"].join('') }

function indent(str){
    return str.split('\n').map(function(line){
        return '  ' + line
    }).join('\n')
}

function printTestResults(msg){
    console.log(yellow(msg.browser))
    var status = [
        msg.total,
        'tests ran,',
        msg.failed,
        'failed.'
        ].join(' ')
    if (msg.failed === 0)
        console.log(indent(green(status)))
    else{
        console.log(indent(red(status)))
        if (msg.items)
            msg.items.forEach(function(item){
                console.log(indent(item.name))
                console.log(indent(item.message))
                if (item.stackTrace)
                    console.log(indent(item.stackTrace))
            })
    }
}

var files = [
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
"test/qunitTuttiAdapter.js",

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

var testResults = {},
    testProgress = {},
    testPassed = {},
    browsers = null
var tt = Tutti('http://localhost:8080/')
    .on('message', function(msg){
        if (msg.browsers){
            console.log()
            console.log('Progress(# tests run)')
            console.log('=====================')
            browsers = msg.browsers.map(function(b){
                return b.browser
            })
            browsers.forEach(function(b){
                testPassed[b] = 0
                testProgress[b] = 0
            })
            console.log(cyan(browsers.join('\t')))
        }else if (msg.test === 'caseResult'){
            if (msg.failed === 0)
                testPassed[msg.browser]++
            testProgress[msg.browser]++
            process.stdout.write('\r' + browsers.map(function(b){
                return [green(testPassed[b]), '/', testProgress[b]].join('')
            }).join('\t\t'))
        }else if (msg.test === 'done'){
            testResults[msg.browser] = msg
        }
    })
    .upload(files)
    .open('test/index.html')
    .wait(function(msg){
        return msg.test === 'done'
    }, 100000)
    .run(function(){
        console.log('\n')
        console.log('Final Test Results')
        console.log('==================')
        for (var browser in testResults){
            printTestResults(testResults[browser])
        }
        console.log()
    })
    .exit()
    
