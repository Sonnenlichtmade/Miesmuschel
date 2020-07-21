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
source: "antwortFuer: aString\x0a\x09| antwort antwortliste blase index random|\x0a\x09\x0a\x09blase := self sprechblase.\x0a\x09antwortliste := self antwortliste.\x0a\x09random := Random new.\x0a\x09index := (random next * 11 + 1) rounded.\x0a\x09antwort := antwortliste at: index.\x0a\x09\x0a\x09^{\x0a\x09\x09Silk DIV: aString.\x0a\x09\x09Silk DIV: {\x0a\x09\x09\x09'class'->'answer'. \x0a\x09\x09\x09'ID'->'answer'. \x0a\x09\x09\x09blase. \x0a\x09\x09\x09Silk DIV: {\x0a\x09\x09\x09\x09'class'->'text'. \x0a\x09\x09\x09\x09(Silk P: antwort)}}}",
referencedClasses: ["Random", "Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sprechblase", "antwortliste", "new", "rounded", "+", "*", "next", "at:", "DIV:", "->", "P:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var antwort,antwortliste,blase,index,random;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
blase=$self._sprechblase();
antwortliste=$self._antwortliste();
random=$recv($globals.Random)._new();
index=$recv($recv($recv($recv(random)._next()).__star((11))).__plus((1)))._rounded();
antwort=$recv(antwortliste)._at_(index);
return [[$recv($globals.Silk)._DIV_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0],[$recv($globals.Silk)._DIV_([["class".__minus_gt("answer")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["ID".__minus_gt("answer")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],blase,$recv($globals.Silk)._DIV_(["class".__minus_gt("text"),$recv($globals.Silk)._P_(antwort)])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=2
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"antwortFuer:",{aString:aString,antwort:antwort,antwortliste:antwortliste,blase:blase,index:index,random:random})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "antwortliste",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "antwortliste\x0a\x09^ {\x0a\x09\x09'Heute nicht...'. \x0a\x09\x09'Ja, Mann!'. \x0a\x09\x09'Auf keinen Fall.'. \x0a\x09\x09'Frag mich morgen nochmal.'. \x0a\x09\x09self kindlyNodding.\x0a\x09\x09self hellNo. \x0a\x09\x09self wellWell. \x0a\x09\x09self ohYeah. \x0a\x09\x09self frustratedKermit. \x0a\x09\x09self crazyYeah. \x0a\x09\x09self shrekAndDonkey. \x0a\x09\x09self donkeyShakingHead}  ",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["kindlyNodding", "hellNo", "wellWell", "ohYeah", "frustratedKermit", "crazyYeah", "shrekAndDonkey", "donkeyShakingHead"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ["Heute nicht...","Ja, Mann!","Auf keinen Fall.","Frag mich morgen nochmal.",$self._kindlyNodding(),$self._hellNo(),$self._wellWell(),$self._ohYeah(),$self._frustratedKermit(),$self._crazyYeah(),$self._shrekAndDonkey(),$self._donkeyShakingHead()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"antwortliste",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| intro input button antwort |\x0a\x09\x0a\x09button := self button.\x0a\x09input := self input.\x0a\x09intro := Silk new DIV: {'class'->'intro'. self muschelDiv.  self frageAufforderung. input. button}.\x0a\x09antwort := intro DIV.\x0a\x09input on: #keydown bind: [:event | \x0a\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]].\x09\x09\x0a\x09button on: #click bind: [\x0a\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["button", "input", "DIV:", "new", "->", "muschelDiv", "frageAufforderung", "DIV", "on:bind:", "ifTrue:", "=", "keyCode", "eingabeLoeschen:ausgabeelement:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var intro,input,button,antwort;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
button=$self._button();
input=$self._input();
intro=$recv($recv($globals.Silk)._new())._DIV_(["class".__minus_gt("intro"),$self._muschelDiv(),$self._frageAufforderung(),input,button]);
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
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{intro:intro,input:input,button:button,antwort:antwort})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "button",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "button\x0a\x09^ Silk BUTTON: '♥'.\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["BUTTON:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._BUTTON_("♥");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"button",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "crazyYeah",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crazyYeah \x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif'. \x0a\x09\x09'alt'->'crazy yeah'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("crazy yeah")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crazyYeah",{})});
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
selector: "donkeyShakingHead",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "donkeyShakingHead\x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif'. \x0a\x09\x09'alt'->'donkey shaking head'}  ",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("donkey shaking head")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"donkeyShakingHead",{})});
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
selector: "frageAufforderung",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frageAufforderung\x0a\x09^ Silk DIV: 'Gib eine Ja/Nein-Frage ein:'\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_("Gib eine Ja/Nein-Frage ein:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frageAufforderung",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "frustratedKermit",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frustratedKermit \x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif'. \x0a\x09\x09'alt'->'frustrated Kermit'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("frustrated Kermit")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frustratedKermit",{})});
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
selector: "hellNo",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hellNo\x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif'. \x0a\x09\x09'alt'->'hell no!'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("hell no!")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hellNo",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "input",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "input\x0a\x09^ Silk INPUT: {'class'->'input'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["INPUT:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._INPUT_(["class".__minus_gt("input")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"input",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "kindlyNodding",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "kindlyNodding\x0a\x09\x09^ Silk IMG: {\x0a\x09\x09\x09'src'->'https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif'. \x0a\x09\x09\x09'alt'->'kindly nodding'}. \x0a\x09\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("kindly nodding")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"kindlyNodding",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "muschelBild",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "muschelBild\x0a\x09^ Silk IMG: { \x0a\x09\x09'src'->'https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg'. \x0a\x09\x09'alt'->'Miesmuschel'}\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("Miesmuschel")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"muschelBild",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "muschelDiv",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "muschelDiv\x0a\x09^ Silk DIV: {'ID'->'muschel'. self muschelBild}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "muschelBild"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV_(["ID".__minus_gt("muschel"),$self._muschelBild()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"muschelDiv",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "ohYeah",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ohYeah \x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/bzE1WAm8BifiE/giphy.gif'. \x0a\x09\x09'alt'->'oh yeah...'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/bzE1WAm8BifiE/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("oh yeah...")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ohYeah",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "shrekAndDonkey",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shrekAndDonkey\x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/pKBZfGcYcgzrG/giphy.gif'. \x0a\x09\x09'alt'->'shrek n donkey'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/pKBZfGcYcgzrG/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("shrek n donkey")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shrekAndDonkey",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "sprechblase",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sprechblase\x0a\x09^ Silk IMG: {\x0a\x09\x09'ID'->'blase'. \x0a\x09\x09'src'->'https://www.freeiconspng.com/uploads/speech-bubble-png-22.png'. \x0a\x09\x09'alt'->'Sprechblase'}\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["ID".__minus_gt("blase")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["src".__minus_gt("https://www.freeiconspng.com/uploads/speech-bubble-png-22.png")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("Sprechblase")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sprechblase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "wellWell",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: " wellWell\x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/3o7aDbJJV5n7Y6KgkU/giphy.gif'. \x0a\x09\x09'alt'->'well well'}\x0a\x09\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/3o7aDbJJV5n7Y6KgkU/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("well well")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wellWell",{})});
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
