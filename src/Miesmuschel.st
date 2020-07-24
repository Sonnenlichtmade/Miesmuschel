Smalltalk createPackage: 'Miesmuschel'!
(Smalltalk packageAt: 'Miesmuschel' ifAbsent: [ self error: 'Package not created: Miesmuschel' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Miesmuschel
	slots: {#muschelDiv}
	package: 'Miesmuschel'!

!Miesmuschel methodsFor: 'accessing'!

antwortBild

	^ Silk DIV: {
		'class'->'antwortbild'. 
		self zufaelligeAntwort. self muschelDiv resetContents}
!

antwortBild: einBild
	
	self muschelDiv resetContents.
	self muschelDiv << (Silk DIV: {
		'class'->'antwortbild'. 
		einBild})
!

antwortDiv

	^ Silk DIV.
!

antwortText

	^ Silk DIV: {
			'class'->'answer'. 
			'ID'->'answer'. 
			self sprechblase.
			Silk DIV: {
				'class'->'text'. 
				(Silk P: self zufaelligeAntwort)}}
!

antwortText: einText

	^ Silk DIV: {
			'class'->'answer'. 
			'ID'->'answer'. 
			self sprechblase.
			Silk DIV: {
				'class'->'text'. 
				(Silk P: einText)}}
!

antwortliste
	^ {
		'Heute nicht...'. 
		'Ja, Mann!!'. 
		'Auf keinen Fall.'. 
		'Frag mich morgen nochmal.'. 
		self kindlyNodding.
		self hellNo. 
		self wellWell. 
		self ohYeah. 
		self frustratedKermit. 
		self crazyYeah. 
		self shrekAndDonkey. 
		self donkeyShakingHead}
!

button
	^ Silk BUTTON: '♥'.
!

eingabeLoeschen: einSilkInput ausgabeelement: einAntwortDiv
	| frage antwort |
	
	antwort := self zufaelligeAntwort.
	frage := einSilkInput element value.
	einAntwortDiv resetContents.
	einAntwortDiv << (Silk DIV: frage).
	(antwort isKindOf: Silk)
		ifTrue: [self antwortBild: antwort] 
		ifFalse: [einAntwortDiv << (self antwortText: antwort)].
	einSilkInput element value: ''
!

frageAufforderung
	^ Silk DIV: 'Gib eine Ja/Nein-Frage ein:'
!

input
	^ Silk INPUT: {'class'->'input'}
!

muschelDiv
	^muschelDiv ifNil: [
		muschelDiv := Silk DIV: {'ID'->'muschel'. self muschelBild}]
!

zufaelligeAntwort
	"liefert einen zufaelligen String oder zufaelliges Image"
	
	| antwortliste index random|

	antwortliste := self antwortliste.
	random := Random new.
	index := (random next * (antwortliste size - 1)) rounded.
	^ antwortliste at: index + 1
! !

!Miesmuschel methodsFor: 'accessing images'!

crazyYeah 
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif'. 
		'alt'->'crazy yeah'}
!

donkeyShakingHead
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif'. 
		'alt'->'donkey shaking head'}
!

frustratedKermit 
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif'. 
		'alt'->'frustrated Kermit'}
!

hellNo
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif'. 
		'alt'->'hell no!!'}
!

kindlyNodding
		^ Silk IMG: {
			'src'->'https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif'. 
			'alt'->'kindly nodding'}.
!

muschelBild
	^ Silk IMG: { 
		'src'->'https://static.giga.de/wp-content/uploads/2013/07/magische-miesmuschel-rcm625x0u.jpg'. 
		'alt'->'Miesmuschel'}
!

ohYeah 
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/bzE1WAm8BifiE/giphy.gif'. 
		'alt'->'oh yeah...'}
!

shrekAndDonkey
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/pKBZfGcYcgzrG/giphy.gif'. 
		'alt'->'shrek n donkey'}
!

sprechblase
	^ Silk IMG: {
		'ID'->'blase'. 
		'src'->'https://www.freeiconspng.com/uploads/speech-bubble-png-22.png'. 
		'alt'->'Sprechblase'}
!

wellWell
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/3o7aDbJJV5n7Y6KgkU/giphy.gif'. 
		'alt'->'well well'}
! !

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

augmentPage
	| intro input button antwort |
	antwort := self antwortDiv.
	button := self button.
	input := self input.
	intro := Silk new DIV: {'class'->'intro'. self muschelDiv.  self frageAufforderung. input. button. antwort}.
	
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

