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
	antwortliste := {'Heute nicht...'. 'Ja, Mann!!'. 'Auf keinen Fall.'. 'Frag mich morgen nochmal.'. Silk IMG: {'src'->'https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif'. 'alt'->'kindly nodding'}. Silk IMG: {'src'->'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif'. 'alt'->'hell no!!'}. Silk IMG: {'src'->'https://media.giphy.com/media/3o7aDbJJV5n7Y6KgkU/giphy.gif'. 'alt'->'well well'}. Silk IMG: {'src'->'https://media.giphy.com/media/bzE1WAm8BifiE/giphy.gif'. 'alt'->'oh yeah...'}. Silk IMG: {'src'->'https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif'. 'alt'->'frustrated Kermit'}. Silk IMG: {'src'->'https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif'. 'alt'->'crazy yeah'}. Silk IMG: {'src'->'https://media.giphy.com/media/pKBZfGcYcgzrG/giphy.gif'. 'alt'->'shrek n donkey'}. Silk IMG: {'src'->'https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif'. 'alt'->'donkey shaking head'}.}.  
	random := Random new.
	index := (random next * 11 + 1) rounded.
	antwort := antwortliste at: index.
	
	"(index > 4)
		ifTrue:
			[antwort := '#muschel' asSilk. blase. antwortliste at: index]
		ifFalse: 
			[antwort:= antwortliste at: index]."
	^{
		Silk DIV: aString.
		Silk DIV: {'class'->'answer'. 'ID'->'answer'. blase. Silk DIV: {'class'->'text'. (Silk P: antwort)}}}
!

augmentPage
	| intro input button antwort |
	
	intro := Silk new DIV: {'class'->'intro'. self muschelDiv.  self frageAufforderung}.
	input := intro INPUT: {'class'->'input'}.
	button := intro BUTTON: 'Klick'.
	antwort := intro DIV.
	input on: #keydown bind: [:event | 
		event keyCode = 13 ifTrue: [
			self eingabeLoeschen: input ausgabeelement: antwort]].		
	button on: #click bind: [
		self eingabeLoeschen: input ausgabeelement: antwort]
!

frageAufforderung
	^ Silk DIV: 'Gib eine Ja/Nein-Frage ein:'
!

muschelBild
	^ Silk IMG: { 
		'src'->'https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg'. 
		'alt'->'Miesmuschel'}
!

muschelDiv
	^ Silk DIV: {'ID'->'muschel'. self muschelBild}
! !

!Miesmuschel class methodsFor: 'starting'!

start
	self new augmentPage
!

todo
^'Eingabefeld bei Klick löschen'
! !

