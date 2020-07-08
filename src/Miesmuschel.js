define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Miesmuschel");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-miesmuschel"};

$core.addClass("Miesmuschel", $globals.Object, "Miesmuschel");
$core.addMethod(
$core.method({
selector: "alert:after:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aNumberOfMilliseconds"],
source: "alert: aString after: aNumberOfMilliseconds\x0a\x09[ Terminal alert: aString ] valueWithTimeout: aNumberOfMilliseconds",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithTimeout:", "alert:"]
}, function ($methodClass){ return function (aString,aNumberOfMilliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Terminal)._alert_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(aNumberOfMilliseconds);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:after:",{aString:aString,aNumberOfMilliseconds:aNumberOfMilliseconds})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "antwortFuer:",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "antwortFuer: aString\x0a\x09| antwort antwortliste blase index random|\x0a\x09\x0a\x09blase := Silk IMG: {'ID'->'blase'. 'src'->'https://www.freeiconspng.com/uploads/speech-bubble-png-22.png'. 'alt'->'Sprechblase'}.\x0a\x09antwortliste := {'Heute nicht...'. 'Ja, Mann!'. 'Auf keinen Fall.'. 'Frag mich morgen nochmal.'}.\x0a\x09random := Random new.\x0a\x09index := (random next * 3 + 1) rounded.\x0a\x09antwort := antwortliste at: index.\x0a\x09^  {\x0a\x09\x09Silk DIV: aString.\x0a\x09\x09Silk DIV: {'class'->'answer'. 'ID'->'answer'. antwort}. (blase)}.",
referencedClasses: ["Silk", "Random"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->", "new", "rounded", "+", "*", "next", "at:", "DIV:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var antwort,antwortliste,blase,index,random;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
blase=$recv($globals.Silk)._IMG_([["ID".__minus_gt("blase")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["src".__minus_gt("https://www.freeiconspng.com/uploads/speech-bubble-png-22.png")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["alt".__minus_gt("Sprechblase")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0]]);
antwortliste=["Heute nicht...","Ja, Mann!","Auf keinen Fall.","Frag mich morgen nochmal."];
random=$recv($globals.Random)._new();
index=$recv($recv($recv($recv(random)._next()).__star((3))).__plus((1)))._rounded();
antwort=$recv(antwortliste)._at_(index);
return [[$recv($globals.Silk)._DIV_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._DIV_([["class".__minus_gt("answer")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0],"ID".__minus_gt("answer"),antwort]),blase];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"antwortFuer:",{aString:aString,antwort:antwort,antwortliste:antwortliste,blase:blase,index:index,random:random})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| intro button input muschel antwort |\x0a\x09\x0a\x09muschel := Silk IMG: {'class'->'muschel'. 'ID'->'muschel'. 'src'->'https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg'. 'alt'->'Miesmuschel'}.\x0a\x09intro := Silk new DIV: {'class'->'intro'. Silk DIV: muschel.  Silk DIV: 'Gib eine Ja/Nein-Frage ein:'}.\x0a\x09input := intro INPUT: {'class'->'input'. 'ID'->'Eingabe'}.\x0a\x09button := intro BUTTON: 'Klick'.\x0a\x09antwort := intro DIV.\x0a\x09input on: #keydown bind: [:event | \x0a\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]].\x09\x09\x0a\x09button on: #click bind: [\x0a\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->", "DIV:", "new", "INPUT:", "BUTTON:", "DIV", "on:bind:", "ifTrue:", "=", "keyCode", "eingabeLoeschen:ausgabeelement:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var intro,button,input,muschel,antwort;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
muschel=$recv($globals.Silk)._IMG_([["class".__minus_gt("muschel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["ID".__minus_gt("muschel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],["src".__minus_gt("https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["alt".__minus_gt("Miesmuschel")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0]]);
intro=[$recv($recv($globals.Silk)._new())._DIV_([["class".__minus_gt("intro")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._DIV_(muschel)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=2
//>>excludeEnd("ctx");
][0],$recv($globals.Silk)._DIV_("Gib eine Ja/Nein-Frage ein:")])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
input=$recv(intro)._INPUT_([["class".__minus_gt("input")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0],"ID".__minus_gt("Eingabe")]);
button=$recv(intro)._BUTTON_("Klick");
antwort=$recv(intro)._DIV();
[$recv(input)._on_bind_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(event)._keyCode()).__eq((13)))){
return [$self._eingabeLoeschen_ausgabeelement_(input,antwort)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["eingabeLoeschen:ausgabeelement:"]=1
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
$recv(button)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._eingabeLoeschen_ausgabeelement_(input,antwort);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{intro:intro,button:button,input:input,muschel:muschel,antwort:antwort})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09'#output-list' asBrush with: [ :html | html li: 'Amber Web #with: added me!' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "asBrush", "li:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asBrush())._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._li_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "doConsoleLog",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doConsoleLog\x0a\x09| greeting target |\x0a\x09greeting := 'Hello'.\x0a\x09target := 'world'.\x0a\x09console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!' ] }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["log:", ","]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var greeting,target;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
greeting="Hello";
target="world";
[$recv(console)._log_($globals.HashedCollection._newFromPairs_(["greeting",greeting,"target",target,"callback",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(console)._log_([$recv([$recv($recv(greeting).__comma(", ")).__comma(target)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["log:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doConsoleLog",{greeting:greeting,target:target})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "doInspectStatus",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doInspectStatus\x0a\x09(self getApi: '/status')\x0a\x09\x09then: {#json. #inspect}\x0a\x09\x09catch: [ :err | Terminal alert: err ]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:catch:", "getApi:", "alert:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._getApi_("/status"))._then_catch_(["json","inspect"],(function(err){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Terminal)._alert_(err);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doInspectStatus",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["append:", "asJQuery"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["LI:", "asSilk"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "eingabeLoeschen:ausgabeelement:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInput", "aDiv"],
source: "eingabeLoeschen: anInput ausgabeelement: aDiv\x0a\x09aDiv resetContents.\x0a\x09aDiv << (self antwortFuer: anInput element value).\x0a\x09anInput element value: ''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "<<", "antwortFuer:", "value", "element", "value:"]
}, function ($methodClass){ return function (anInput,aDiv){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDiv)._resetContents();
$recv(aDiv).__lt_lt($self._antwortFuer_($recv([$recv(anInput)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._value()));
$recv($recv(anInput)._element())._value_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eingabeLoeschen:ausgabeelement:",{anInput:anInput,aDiv:aDiv})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "endpoint",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endpoint\x0a\x09\x22Return something like 'https://<char mess>.execute-api.eu-central-1.amazonaws.com/default'\x22\x0a\x09^ self error: 'Not yet implemented'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._error_("Not yet implemented");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endpoint",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "getApi:",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path"],
source: "getApi: path\x0a\x09^ Platform fetch: self endpoint, path",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fetch:", ",", "endpoint"]
}, function ($methodClass){ return function (path){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Platform)._fetch_($recv($self._endpoint()).__comma(path));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getApi:",{path:path})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel.a$cls);

$core.addMethod(
$core.method({
selector: "todo",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "todo\x0a^'Eingabefeld bei Klick löschen'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Eingabefeld bei Klick löschen";

}; }),
$globals.Miesmuschel.a$cls);

});
