Smalltalk createPackage: 'Miesmuschel'!
(Smalltalk packageAt: 'Miesmuschel' ifAbsent: [ self error: 'Package not created: Miesmuschel' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Miesmuschel
	slots: {}
	package: 'Miesmuschel'!

!Miesmuschel methodsFor: 'action'!

alert: aString after: aNumberOfMilliseconds
	[ Terminal alert: aString ] valueWithTimeout: aNumberOfMilliseconds
!

doAmberWith
	'#output-list' asBrush with: [ :html | html li: 'Amber Web #with: added me!!' ]
!

doConsoleLog
	| greeting target |
	greeting := 'Hello'.
	target := 'world'.
	console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!!' ] }
!

doInspectStatus
	(self getApi: '/status')
		then: {#json. #inspect}
		catch: [ :err | Terminal alert: err ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
!

eingabeLoeschen: anInput ausgabeelement: aDiv
	aDiv resetContents.
	aDiv << (self antwortFuer: anInput element value).
	anInput element value: ''
! !

!Miesmuschel methodsFor: 'backend'!

endpoint
	"Return something like 'https://<char mess>.execute-api.eu-central-1.amazonaws.com/default'"
	^ self error: 'Not yet implemented'
!

getApi: path
	^ Platform fetch: self endpoint, path
! !

!Miesmuschel methodsFor: 'starting'!

antwortFuer: aString
	| antwort antwortliste blase index random|
	
	blase := Silk IMG: {'ID'->'blase'. 'src'->'https://www.freeiconspng.com/uploads/speech-bubble-png-22.png'. 'alt'->'Sprechblase'}.
	antwortliste := {'Heute nicht...'. 'Ja, Mann!!'. 'Auf keinen Fall.'. 'Frag mich morgen nochmal.'}.
	random := Random new.
	index := (random next * 3 + 1) rounded.
	antwort := antwortliste at: index.
	^  {
		Silk DIV: aString.
		Silk DIV: {'class'->'answer'. 'ID'->'answer'. blase. Silk DIV: {'class'->'text'. (Silk P: antwort)}}}
!

augmentPage
	| intro button input muschel antwort |
	
	muschel := Silk IMG: {'class'->'muschel'. 'ID'->'muschel'. 'src'->'https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg'. 'alt'->'Miesmuschel'}.
	intro := Silk new DIV: {'class'->'intro'. Silk DIV: muschel.  Silk DIV: 'Gib eine Ja/Nein-Frage ein:'}.
	input := intro INPUT: {'class'->'input'. 'ID'->'Eingabe'}.
	button := intro BUTTON: 'Klick'.
	antwort := intro DIV.
	input on: #keydown bind: [:event | 
		event keyCode = 13 ifTrue: [
			self eingabeLoeschen: input ausgabeelement: antwort]].		
	button on: #click bind: [
		self eingabeLoeschen: input ausgabeelement: antwort]
! !

!Miesmuschel class methodsFor: 'starting'!

start
	self new augmentPage
!

todo
^'Eingabefeld bei Klick löschen'
! !

