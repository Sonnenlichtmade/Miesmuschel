define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Miesmuschel");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-miesmuschel"};

$core.addClass("Miesmuschel", $globals.Object, "Miesmuschel");
$core.setSlots($globals.Miesmuschel, ["muschelDiv", "random", "antwortDiv", "input", "button"]);
$core.addMethod(
$core.method({
selector: "antwortDiv",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "antwortDiv\x0a\x09\x22Behälter für Frage, Text und Sprechblase\x22\x0a\x09^ antwortDiv ifNil: [\x0a\x09\x09antwortDiv := Silk DIV]\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "DIV"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.antwortDiv;
if($1 == null || $1.a$nil){
$self.antwortDiv=$recv($globals.Silk)._DIV();
return $self.antwortDiv;
} else {
return $1;
}
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
source: "antwortliste\x0a\x09^ {\x0a\x09\x09'Heute nicht...'. \x0a\x09\x09'Ja, Mann!'. \x0a\x09\x09'Auf keinen Fall.'. \x0a\x09\x09'Frag mich morgen nochmal.'. \x0a\x09\x09self kindlyNodding.\x0a\x09\x09self hellNo. \x0a\x09\x09self wellWell. \x0a\x09\x09self ohYeah. \x0a\x09\x09self frustratedKermit. \x0a\x09\x09self crazyYeah. \x0a\x09\x09self shrekAndDonkey. \x0a\x09\x09self donkeyShakingHead.\x0a\x09\x09self thumbsUp.\x0a\x09\x09self slothNo}  ",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["kindlyNodding", "hellNo", "wellWell", "ohYeah", "frustratedKermit", "crazyYeah", "shrekAndDonkey", "donkeyShakingHead", "thumbsUp", "slothNo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ["Heute nicht...","Ja, Mann!","Auf keinen Fall.","Frag mich morgen nochmal.",$self._kindlyNodding(),$self._hellNo(),$self._wellWell(),$self._ohYeah(),$self._frustratedKermit(),$self._crazyYeah(),$self._shrekAndDonkey(),$self._donkeyShakingHead(),$self._thumbsUp(),$self._slothNo()];
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
source: "augmentPage\x0a\x0a\x09self button.\x0a\x09Silk new DIV: {\x0a\x09\x09'class'->'intro'.\x0a\x09\x09self muschelDiv.\x0a\x09\x09self frageAufforderung.\x0a\x09\x09self input.\x0a\x09\x09self button.\x0a\x09\x09self antwortDiv}.\x0a\x09\x0a\x09self input on: #keydown bind: [:event | \x0a\x09\x09event keyCode = 13 ifTrue: [\x0a\x09\x09\x09self zeigeAntwort]].\x09\x09\x0a\x09self button on: #click bind: [\x0a\x09\x09self zeigeAntwort]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["button", "DIV:", "new", "->", "muschelDiv", "frageAufforderung", "input", "antwortDiv", "on:bind:", "ifTrue:", "=", "keyCode", "zeigeAntwort"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._button()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["button"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($globals.Silk)._new())._DIV_(["class".__minus_gt("intro"),$self._muschelDiv(),$self._frageAufforderung(),[$self._input()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["input"]=1
//>>excludeEnd("ctx");
][0],[$self._button()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["button"]=2
//>>excludeEnd("ctx");
][0],$self._antwortDiv()]);
[$recv($self._input())._on_bind_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(event)._keyCode()).__eq((13)))){
return [$self._zeigeAntwort()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["zeigeAntwort"]=1
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
$recv($self._button())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._zeigeAntwort();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Miesmuschel);

$core.addMethod(
$core.method({
selector: "button",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "button\x0a\x09^ button ifNil: [\x0a\x09\x09button := Silk BUTTON: '♥']\x0a\x09",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "BUTTON:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.button;
if($1 == null || $1.a$nil){
$self.button=$recv($globals.Silk)._BUTTON_("♥");
return $self.button;
} else {
return $1;
}
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
source: "input\x0a\x09\x22Eingabefeld für Frage\x22\x0a\x09^ input ifNil: [\x0a\x09\x09input := Silk INPUT: {'class'->'input'}]",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "INPUT:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.input;
if($1 == null || $1.a$nil){
$self.input=$recv($globals.Silk)._INPUT_(["class".__minus_gt("input")]);
return $self.input;
} else {
return $1;
}
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
selector: "slothNo",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slothNo \x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif'. \x0a\x09\x09'alt'->'how about... no'}",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["IMG:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Silk)._IMG_([["src".__minus_gt("https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],"alt".__minus_gt("how about... no")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slothNo",{})});
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
selector: "thumbsUp",
protocol: "accessing images",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thumbsUp\x0a\x09^ Silk IMG: {\x0a\x09\x09'src'->'https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif'. \x0a\x09\x09'alt'->'thumbs up'}  ",
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
][0],"alt".__minus_gt("thumbs up")]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"thumbsUp",{})});
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
selector: "zeigeAntwort",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zeigeAntwort\x0a\x09| frage antwort |\x0a\x09\x0a\x09frage := self input element value.\x0a\x09antwort := self zufaelligeAntwort.\x0a\x09self antwortDiv resetContents.\x0a\x09self antwortDiv << (Silk DIV: frage).\x0a\x09(antwort isKindOf: Silk)\x0a\x09\x09ifTrue: [self setzeAntwortBild: antwort] \x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self initialisiereMuschelBild.\x0a\x09\x09\x09self antwortDiv << (self antwortText: antwort)].\x0a\x09self input element value: ''",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "element", "input", "zufaelligeAntwort", "resetContents", "antwortDiv", "<<", "DIV:", "ifTrue:ifFalse:", "isKindOf:", "setzeAntwortBild:", "initialisiereMuschelBild", "antwortText:", "value:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var frage,antwort;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
frage=$recv([$recv([$self._input()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["input"]=1
//>>excludeEnd("ctx");
][0])._element()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["element"]=1
//>>excludeEnd("ctx");
][0])._value();
antwort=$self._zufaelligeAntwort();
$recv([$self._antwortDiv()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["antwortDiv"]=1
//>>excludeEnd("ctx");
][0])._resetContents();
[$recv([$self._antwortDiv()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["antwortDiv"]=2
//>>excludeEnd("ctx");
][0]).__lt_lt($recv($globals.Silk)._DIV_(frage))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<<"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv(antwort)._isKindOf_($globals.Silk))){
$self._setzeAntwortBild_(antwort);
} else {
$self._initialisiereMuschelBild();
$recv($self._antwortDiv()).__lt_lt($self._antwortText_(antwort));
}
$recv($recv($self._input())._element())._value_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"zeigeAntwort",{frage:frage,antwort:antwort})});
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
