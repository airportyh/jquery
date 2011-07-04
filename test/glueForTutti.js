var dom = '	<h1 id="qunit-header"><a href="/jquery/test/index.html">jQuery Test Suite</a>\
		<a href="?jquery=min">(minified)</a>\
	</h1>\
	<h2 id="qunit-banner"></h2>\
	<div id="qunit-testrunner-toolbar"></div>\
	<h2 id="qunit-userAgent"></h2>\
	<ol id="qunit-tests"></ol>\
\
	<!-- Test HTML -->\
	<div id="nothiddendiv" style="height:1px;background:white;" class="nothiddendiv">\
		<div id="nothiddendivchild"></div>\
	</div>\
	<!-- this iframe is outside the #qunit-fixture so it won\'t reload constantly wasting time, but it means the tests must be "safe" and clean up after themselves -->\
	<iframe id="loadediframe" name="loadediframe" style="display:none;" src="data/iframe.html"></iframe>\
	<dl id="dl" style="position:absolute;top:-32767px;left:-32767px;width:1px">\
	<div id="qunit-fixture">\
		<p id="firstp">See <a id="simon1" href="http://simon.incutio.com/archive/2003/03/25/#getElementsBySelector" rel="bookmark">this blog entry</a> for more information.</p>\
		<p id="ap">\
			Here are some links in a normal paragraph: <a id="google" href="http://www.google.com/" title="Google!">Google</a>,\
			<a id="groups" href="http://groups.google.com/" class="GROUPS">Google Groups (Link)</a>.\
			This link has <code><a href="http://smin" id="anchor1">class="blog"</a></code>:\
			<a href="http://diveintomark.org/" class="blog" hreflang="en" id="mark">diveintomark</a>\
\
		</p>\
		<div id="foo">\
			<p id="sndp">Everything inside the red border is inside a div with <code>id="foo"</code>.</p>\
			<p lang="en" id="en">This is a normal link: <a id="yahoo" href="http://www.yahoo.com/" class="blogTest">Yahoo</a></p>\
			<p id="sap">This link has <code><a href="#2" id="anchor2">class="blog"</a></code>: <a href="http://simon.incutio.com/" class="blog link" id="simon">Simon Willison\'s Weblog</a></p>\
\
		</div>\
		<span id="name+value"></span>\
		<p id="first">Try them out:</p>\
		<ul id="firstUL"></ul>\
		<ol id="empty"></ol>\
		<form id="form" action="formaction">\
			<label for="action" id="label-for">Action:</label>\
			<input type="text" name="action" value="Test" id="text1" maxlength="30"/>\
			<input type="text" name="text2" value="Test" id="text2" disabled="disabled"/>\
			<input type="radio" name="radio1" id="radio1" value="on"/>\
\
			<input type="radio" name="radio2" id="radio2" checked="checked"/>\
			<input type="checkbox" name="check" id="check1" checked="checked"/>\
			<input type="checkbox" id="check2" value="on"/>\
\
			<input type="hidden" name="hidden" id="hidden1"/>\
			<input type="text" style="display:none;" name="foo[bar]" id="hidden2"/>\
\
			<input type="text" id="name" name="name" value="name" />\
			<input type="search" id="search" name="search" value="search" />\
\
			<button id="button" name="button" type="button">Button</button>\
\
			<textarea id="area1" maxlength="30">foobar</textarea>\
\
			<select name="select1" id="select1">\
				<option id="option1a" class="emptyopt" value="">Nothing</option>\
				<option id="option1b" value="1">1</option>\
				<option id="option1c" value="2">2</option>\
				<option id="option1d" value="3">3</option>\
			</select>\
			<select name="select2" id="select2">\
				<option id="option2a" class="emptyopt" value="">Nothing</option>\
				<option id="option2b" value="1">1</option>\
				<option id="option2c" value="2">2</option>\
				<option id="option2d" selected="selected" value="3">3</option>\
			</select>\
			<select name="select3" id="select3" multiple="multiple">\
				<option id="option3a" class="emptyopt" value="">Nothing</option>\
				<option id="option3b" selected="selected" value="1">1</option>\
				<option id="option3c" selected="selected" value="2">2</option>\
				<option id="option3d" value="3">3</option>\
				<option id="option3e">no value</option>\
			</select>\
			<select name="select4" id="select4" multiple="multiple">\
				<optgroup disabled="disabled">\
					<option id="option4a" class="emptyopt" value="">Nothing</option>\
					<option id="option4b" disabled="disabled" selected="selected" value="1">1</option>\
					<option id="option4c" selected="selected" value="2">2</option>\
				</optgroup>\
				<option selected="selected" disabled="disabled" id="option4d" value="3">3</option>\
				<option id="option4e">no value</option>\
			</select>\
			<select name="select5" id="select5">\
				<option id="option5a" value="3">1</option>\
				<option id="option5b" value="2">2</option>\
				<option id="option5c" value="1">3</option>\
			</select>\
\
			<object id="object1" codebase="stupid">\
				<param name="p1" value="x1" />\
				<param name="p2" value="x2" />\
			</object>\
\
			<span id="台北Táiběi"></span>\
			<span id="台北" lang="中文"></span>\
			<span id="utf8class1" class="台北Táiběi 台北"></span>\
			<span id="utf8class2" class="台北"></span>\
			<span id="foo:bar" class="foo:bar"></span>\
			<span id="test.foo[5]bar" class="test.foo[5]bar"></span>\
\
			<foo_bar id="foobar">test element</foo_bar>\
		</form>\
		<b id="floatTest">Float test.</b>\
		<iframe id="iframe" name="iframe"></iframe>\
		<form id="lengthtest">\
			<input type="text" id="length" name="test"/>\
			<input type="text" id="idTest" name="id"/>\
		</form>\
		<table id="table"></table>\
\
		<form id="name-tests">\
			<!-- Inputs with a grouped name attribute. -->\
			<input name="types[]" id="types_all" type="checkbox" value="all" />\
			<input name="types[]" id="types_anime" type="checkbox" value="anime" />\
			<input name="types[]" id="types_movie" type="checkbox" value="movie" />\
		</form>\
\
		<form id="testForm" action="#" method="get">\
			<textarea name="T3" rows="2" cols="15">?\
Z</textarea>\
			<input type="hidden" name="H1" value="x" />\
			<input type="hidden" name="H2" />\
			<input name="PWD" type="password" value="" />\
			<input name="T1" type="text" />\
			<input name="T2" type="text" value="YES" readonly="readonly" />\
			<input type="checkbox" name="C1" value="1" />\
			<input type="checkbox" name="C2" />\
			<input type="radio" name="R1" value="1" />\
			<input type="radio" name="R1" value="2" />\
			<input type="text" name="My Name" value="me" />\
			<input type="reset" name="reset" value="NO" />\
			<select name="S1">\
				<option value="abc">ABC</option>\
				<option value="abc">ABC</option>\
				<option value="abc">ABC</option>\
			</select>\
			<select name="S2" multiple="multiple" size="3">\
				<option value="abc">ABC</option>\
				<option value="abc">ABC</option>\
				<option value="abc">ABC</option>\
			</select>\
			<select name="S3">\
				<option selected="selected">YES</option>\
			</select>\
			<select name="S4">\
				<option value="" selected="selected">NO</option>\
			</select>\
			<input type="submit" name="sub1" value="NO" />\
			<input type="submit" name="sub2" value="NO" />\
			<input type="image" name="sub3" value="NO" />\
			<button name="sub4" type="submit" value="NO">NO</button>\
			<input name="D1" type="text" value="NO" disabled="disabled" />\
			<input type="checkbox" checked="checked" disabled="disabled" name="D2" value="NO" />\
			<input type="radio" name="D3" value="NO" checked="checked" disabled="disabled" />\
			<select name="D4" disabled="disabled">\
				<option selected="selected" value="NO">NO</option>\
			</select>\
			<input id="list-test" type="text" />\
			<datalist id="datalist">\
				<option value="option"></option>\
			</datalist>\
		</form>\
		<div id="moretests">\
			<form>\
				<div id="checkedtest" style="display:none;">\
					<input type="radio" name="checkedtestradios" checked="checked"/>\
					<input type="radio" name="checkedtestradios" value="on"/>\
					<input type="checkbox" name="checkedtestcheckboxes" checked="checked"/>\
					<input type="checkbox" name="checkedtestcheckboxes" />\
				</div>\
			</form>\
			<div id="nonnodes"><span>hi</span> there <!-- mon ami --></div>\
			<div id="t2037">\
				<div><div class="hidden">hidden</div></div>\
			</div>\
		</div>\
\
		<div id="tabindex-tests">\
			<ol id="listWithTabIndex" tabindex="5">\
				<li id="foodWithNegativeTabIndex" tabindex="-1">Rice</li>\
				<li id="foodNoTabIndex">Beans</li>\
				<li>Blinis</li>\
				<li>Tofu</li>\
			</ol>\
\
			<div id="divWithNoTabIndex">I\'m hungry. I should...</div>\
			<span>...</span><a href="#" id="linkWithNoTabIndex">Eat lots of food</a><span>...</span> |\
			<span>...</span><a href="#" id="linkWithTabIndex" tabindex="2">Eat a little food</a><span>...</span> |\
			<span>...</span><a href="#" id="linkWithNegativeTabIndex" tabindex="-1">Eat no food</a><span>...</span>\
			<span>...</span><a id="linkWithNoHrefWithNoTabIndex">Eat a burger</a><span>...</span>\
			<span>...</span><a id="linkWithNoHrefWithTabIndex" tabindex="1">Eat some funyuns</a><span>...</span>\
			<span>...</span><a id="linkWithNoHrefWithNegativeTabIndex" tabindex="-1">Eat some funyuns</a><span>...</span>\
		</div>\
\
		<div id="liveHandlerOrder">\
			<span id="liveSpan1"><a href="#" id="liveLink1"></a></span>\
			<span id="liveSpan2"><a href="#" id="liveLink2"></a></span>\
		</div>\
\
		<div id="siblingTest">\
			<em id="siblingfirst">1</em>\
			<em id="siblingnext">2</em>\
		</div>\
	</div>\
	</dl>\
	<div id="fx-test-group" style="position:absolute;width:1px;height:1px;overflow:hidden;">\
		<div id="fx-queue" name="test">\
			<div id="fadein" class=\'chain test\' name=\'div\'>fadeIn<div>fadeIn</div></div>\
			<div id="fadeout" class=\'chain test out\'>fadeOut<div>fadeOut</div></div>\
\
			<div id="show" class=\'chain test\'>show<div>show</div></div>\
			<div id="hide" class=\'chain test out\'>hide<div>hide</div></div>\
\
			<div id="togglein" class=\'chain test\'>togglein<div>togglein</div></div>\
			<div id="toggleout" class=\'chain test out\'>toggleout<div>toggleout</div></div>\
\
\
			<div id="slideup" class=\'chain test\'>slideUp<div>slideUp</div></div>\
			<div id="slidedown" class=\'chain test out\'>slideDown<div>slideDown</div></div>\
\
			<div id="slidetogglein" class=\'chain test\'>slideToggleIn<div>slideToggleIn</div></div>\
			<div id="slidetoggleout" class=\'chain test out\'>slideToggleOut<div>slideToggleOut</div></div>\
\
			<div id="fadetogglein" class=\'chain test\'>fadeToggleIn<div>fadeToggleIn</div></div>\
			<div id="fadetoggleout" class=\'chain test out\'>fadeToggleOut<div>fadeToggleOut</div></div>\
\
			<div id="fadeto" class=\'chain test\'>fadeTo<div>fadeTo</div></div>\
		</div>\
\
		<div id="fx-tests"></div>\
	</div>'
document.body.innerHTML = dom


setTimeout(function(){
    
var defined = {
	setTimeout: typeof window.setTimeout !== "undefined",
	sessionStorage: (function() {
		try {
			return !!sessionStorage.getItem;
		} catch(e){
			return false;
		}
  })()
};
function addEvent(elem, type, fn) {
	if ( elem.addEventListener ) {
		elem.addEventListener( type, fn, false );
	} else if ( elem.attachEvent ) {
		elem.attachEvent( "on" + type, fn );
	} else {
		fn();
	}
}
function extend(a, b) {
	for ( var prop in b ) {
		if ( b[prop] === undefined ) {
			delete a[prop];
		} else {
			a[prop] = b[prop];
		}
	}

	return a;
}
function id(name) {
	return !!(typeof document !== "undefined" && document && document.getElementById) &&
		document.getElementById( name );
}
var config = QUnit.config;
QUnit.begin({});

// Initialize the config, saving the execution queue
var oldconfig = extend({}, config);
QUnit.init();
extend(config, oldconfig);

config.blocking = false;
console.log('set blocking to false')
var userAgent = id("qunit-userAgent");
if ( userAgent ) {
	userAgent.innerHTML = navigator.userAgent;
}
var banner = id("qunit-header");
if ( banner ) {
	banner.innerHTML = '<a href="' + QUnit.url({ filter: undefined }) + '"> ' + banner.innerHTML + '</a> ' +
		'<label><input name="noglobals" type="checkbox"' + ( config.noglobals ? ' checked="checked"' : '' ) + '>noglobals</label>' +
		'<label><input name="notrycatch" type="checkbox"' + ( config.notrycatch ? ' checked="checked"' : '' ) + '>notrycatch</label>';
	addEvent( banner, "change", function( event ) {
		var params = {};
		params[ event.target.name ] = event.target.checked ? true : undefined;
		window.location = QUnit.url( params );
	});
}

var toolbar = id("qunit-testrunner-toolbar");
if ( toolbar ) {
	var filter = document.createElement("input");
	filter.type = "checkbox";
	filter.id = "qunit-filter-pass";
	addEvent( filter, "click", function() {
		var ol = document.getElementById("qunit-tests");
		if ( filter.checked ) {
			ol.className = ol.className + " hidepass";
		} else {
			var tmp = " " + ol.className.replace( /[\n\t\r]/g, " " ) + " ";
			ol.className = tmp.replace(/ hidepass /, " ");
		}
		if ( defined.sessionStorage ) {
			if (filter.checked) {
				sessionStorage.setItem("qunit-filter-passed-tests",  "true");
			} else {
				sessionStorage.removeItem("qunit-filter-passed-tests");
			}
		}
	});
	if ( defined.sessionStorage && sessionStorage.getItem("qunit-filter-passed-tests") ) {
		filter.checked = true;
		var ol = document.getElementById("qunit-tests");
		ol.className = ol.className + " hidepass";
	}
	toolbar.appendChild( filter );

	var label = document.createElement("label");
	label.setAttribute("for", "qunit-filter-pass");
	label.innerHTML = "Hide passed tests";
	toolbar.appendChild( label );
}

var main = id('qunit-fixture');
if ( main ) {
	config.fixture = main.innerHTML;
}

if (config.autostart) {
	QUnit.start();
	console.log('QUnit started.')
}
console.log('done init.')
}, 1)

function keys(obj){
    var ret = []
    for (var key in obj)
        ret.push(key)
    return ret
}