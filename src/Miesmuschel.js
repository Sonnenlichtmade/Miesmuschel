define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Miesmuschel");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-miesmuschel"};

$core.addClass("Miesmuschel", $globals.Object, "Miesmuschel");
$core.setSlots($globals.Miesmuschel, ["muschelDiv", "random"]);
$core.addMethod(
$core.method({
selector: "antwortDiv",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "antwortDiv\x0a\x0a\x09^ Silk DIV.\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._DIV();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"antwortDiv",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "antwortText:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["einText"],
source: "antwortText: einText\x0a\x0a\x09^ Silk DIV: {\x0a\x09\x09\x09'class'->'answer'. \x0a\x09\x09\x09'ID'->'answer'. \x0a\x09\x09\x09self sprechblase.\x0a\x09\x09\x09Silk DIV: {\x0a\x09\x09\x09\x09'class'->'text'. \x0a\x09\x09\x09\x09(Silk P: einText)}}\x0a\x09\x09\x09\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["DIV:", "->", "sprechblase", "P:"]
}, function ($methodClass){ return function (einText){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($globals.Silk)._DIV_([["class".__minus_gt("answer")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["ID".__minus_gt("answer")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0],$self._sprechblase(),$recv($globals.Silk)._DIV_(["class".__minus_gt("text"),$recv($globals.Silk)._P_(einText)])])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["DIV:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"antwortText:",{einText:einText})});
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
source: "augmentPage\x0a\x09| intro input button antwort |\x0a\x09antwort := self antwortDiv.\x0a\x09button := self button.\x0a\x09input := self input.\x0a\x09intro := Silk new DIV: {'class'->'intro'. self muschelDiv.  self frageAufforderung. input. button. antwort}.\x0a\x09\x0a\x09input on: #keydown bind: [:event | \x0a\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]].\x09\x09\x0a\x09button on: #click bind: [\x0a\x09\x09self eingabeLoeschen: input ausgabeelement: antwort]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["antwortDiv", "button", "input", "DIV:", "new", "->", "muschelDiv", "frageAufforderung", "on:bind:", "ifTrue:", "=", "keyCode", "eingabeLoeschen:ausgabeelement:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var intro,input,button,antwort;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
antwort=$self._antwortDiv();
button=$self._button();
input=$self._input();
intro=$recv($recv($globals.Silk)._new())._DIV_(["class".__minus_gt("intro"),$self._muschelDiv(),$self._frageAufforderung(),input,button,antwort]);
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
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["einSilkInput", "einAntwortDiv"],
source: "eingabeLoeschen: einSilkInput ausgabeelement: einAntwortDiv\x0a\x09| frage antwort |\x0a\x09\x0a\x09antwort := self zufaelligeAntwort.\x0a\x09frage := einSilkInput element value.\x0a\x09einAntwortDiv resetContents.\x0a\x09einAntwortDiv << (Silk DIV: frage).\x0a\x09(antwort isKindOf: Silk)\x0a\x09\x09ifTrue: [self setzeAntwortBild: antwort] \x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self initialisiereMuschelBild.\x0a\x09\x09\x09einAntwortDiv << (self antwortText: antwort)].\x0a\x09einSilkInput element value: ''",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["zufaelligeAntwort", "value", "element", "resetContents", "<<", "DIV:", "ifTrue:ifFalse:", "isKindOf:", "setzeAntwortBild:", "initialisiereMuschelBild", "antwortText:", "value:"]
}, function ($methodClass){ return function (einSilkInput,einAntwortDiv){
var self=this,$self=this;
var frage,antwort;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
antwort=$self._zufaelligeAntwort();
frage=$recv([$recv(einSilkInput)._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._value();
$recv(einAntwortDiv)._resetContents();
[$recv(einAntwortDiv).__lt_lt($recv($globals.Silk)._DIV_(frage))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv(antwort)._isKindOf_($globals.Silk))){
$self._setzeAntwortBild_(antwort);
} else {
$self._initialisiereMuschelBild();
$recv(einAntwortDiv).__lt_lt($self._antwortText_(antwort));
}
$recv($recv(einSilkInput)._element())._value_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eingabeLoeschen:ausgabeelement:",{einSilkInput:einSilkInput,einAntwortDiv:einAntwortDiv,frage:frage,antwort:antwort})});
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
selector: "initialisiereMuschelBild",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialisiereMuschelBild\x0a\x09\x0a\x09self muschelDiv resetContents.\x0a\x09self muschelDiv << {'ID'->'muschel'.  self muschelBild}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "muschelDiv", "<<", "->", "muschelBild"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._muschelDiv()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["muschelDiv"]=1
//>>excludeEnd("ctx");
][0])._resetContents();
$recv($self._muschelDiv()).__lt_lt(["ID".__minus_gt("muschel"),$self._muschelBild()]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialisiereMuschelBild",{})});
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
source: "muschelDiv\x0a\x09^muschelDiv ifNil: [\x0a\x09\x09muschelDiv := Silk DIV.\x0a\x09\x09self initialisiereMuschelBild.\x0a\x09\x09muschelDiv]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "DIV", "initialisiereMuschelBild"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.muschelDiv;
if($1 == null || $1.a$nil){
$self.muschelDiv=$recv($globals.Silk)._DIV();
$self._initialisiereMuschelBild();
return $self.muschelDiv;
} else {
return $1;
}
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
selector: "random",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "random\x0a\x09^ random ifNil: [\x0a\x09\x09random := Random new]\x0a\x09",
referencedClasses: ["Random"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.random;
if($1 == null || $1.a$nil){
$self.random=$recv($globals.Random)._new();
return $self.random;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"random",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "setzeAntwortBild:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["einBild"],
source: "setzeAntwortBild: einBild\x0a\x09\x0a\x09self muschelDiv resetContents.\x0a\x09self muschelDiv << (Silk DIV: {\x0a\x09\x09'class'->'antwortbild'. \x0a\x09\x09einBild})",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["resetContents", "muschelDiv", "<<", "DIV:", "->"]
}, function ($methodClass){ return function (einBild){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._muschelDiv()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["muschelDiv"]=1
//>>excludeEnd("ctx");
][0])._resetContents();
$recv($self._muschelDiv()).__lt_lt($recv($globals.Silk)._DIV_(["class".__minus_gt("antwortbild"),einBild]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setzeAntwortBild:",{einBild:einBild})});
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
selector: "zufaelligeAntwort",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zufaelligeAntwort\x0a\x09\x22liefert einen zufaelligen String oder zufaelliges Image\x22\x0a\x09\x0a\x09| antwortliste index |\x0a\x0a\x09antwortliste := self antwortliste.\x0a\x09index := ( self random next * (antwortliste size - 1)) rounded.\x0a\x09^ antwortliste at: index + 1\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["antwortliste", "rounded", "*", "next", "random", "-", "size", "at:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var antwortliste,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
antwortliste=$self._antwortliste();
index=$recv($recv($recv($self._random())._next()).__star($recv($recv(antwortliste)._size()).__minus((1))))._rounded();
return $recv(antwortliste)._at_($recv(index).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zufaelligeAntwort",{antwortliste:antwortliste,index:index})});
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
