Smalltalk createPackage: 'Miesmuschel'!
(Smalltalk packageAt: 'Miesmuschel' ifAbsent: [ self error: 'Package not created: Miesmuschel' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Miesmuschel
	slots: {#muschelDiv. #random. #antwortDiv. #input. #button. #gespeicherteAntworten}
	package: 'Miesmuschel'!

!Miesmuschel methodsFor: 'accessing'!

antwortDiv
	"Behälter für Frage, Text und Sprechblase"
	^ antwortDiv ifNil: [
		antwortDiv := Silk DIV]
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
		self donkeyShakingHead.
		self thumbsUp.
		self slothNo}
!

button
	^ button ifNil: [
		button := Silk BUTTON: '♥']
!

frageAufforderung
	^ Silk DIV: 'Gib eine Ja/Nein-Frage ein:'
!

gespeicherteAntworten
	^ gespeicherteAntworten ifNil: [
		gespeicherteAntworten := OrderedCollection new]
!

input
	"Eingabefeld für Frage"
	^ input ifNil: [
		input := Silk INPUT: {'class'->'input'}]
!

muschelDiv
	^muschelDiv ifNil: [
		muschelDiv := Silk DIV.
		self initialisiereMuschelBild.
		muschelDiv]
!

random
	^ random ifNil: [
		random := Random new]
!

zufaelligeAntwort
	"liefert einen zufaelligen String oder zufaelliges Image"
	
	| antwortliste index |

	antwortliste := self antwortliste.
	index := ( self random next * (antwortliste size - 1)) rounded.
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

slothNo 
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif'. 
		'alt'->'how about... no'}
!

sprechblase
	^ Silk IMG: {
		'ID'->'blase'. 
		'src'->'https://www.freeiconspng.com/uploads/speech-bubble-png-22.png'. 
		'alt'->'Sprechblase'}
!

thumbsUp
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/Sr9NHwRKlsD3unMK43/giphy.gif'. 
		'alt'->'thumbs up'}
!

wellWell
	^ Silk IMG: {
		'src'->'https://media.giphy.com/media/3o7aDbJJV5n7Y6KgkU/giphy.gif'. 
		'alt'->'well well'}
! !

!Miesmuschel methodsFor: 'actions'!

ermittleAntwort
	"gibt eine andere Antwort aus, als die letzten 3 Antworten"
	
	| antwort |
	
	antwort := self zufaelligeAntwort.
	(self enthaltenInCollection: antwort) ifTrue: [
		^ self ermittleAntwort].
	self gespeicherteAntworten addFirst: antwort.
	(self gespeicherteAntworten size = 4) ifTrue: [
		self gespeicherteAntworten removeLast].
	^ antwort
!

initialisiereAntwortDiv
	| frage |
	
	frage := self input element value.
	self antwortDiv resetContents.
	self antwortDiv << (Silk DIV: frage).
	self input element value: ''
!

initialisiereMuschelBild
	
	self muschelDiv resetContents.
	self muschelDiv << {'ID'->'muschel'.  self muschelBild}
!

setzeAntwortBild: einBild
	
	self muschelDiv resetContents.
	self muschelDiv << (Silk DIV: {
		'class'->'antwortbild'. 
		einBild})
!

zeigeAntwort
	| antwort |
	
	antwort := self ermittleAntwort.
	self initialisiereAntwortDiv.
	(antwort isKindOf: Silk)
		ifTrue: [self setzeAntwortBild: antwort] 
		ifFalse: [
			self initialisiereMuschelBild.
			self antwortDiv << (self antwortText: antwort)].
! !

!Miesmuschel methodsFor: 'starting'!

augmentPage

	self button.
	Silk new DIV: {
		'class'->'intro'.
		self muschelDiv.
		self frageAufforderung.
		self input.
		self button.
		self antwortDiv}.
	"(self input element value ~= '')"
		self input on: #keydown bind: [:event | 
			event keyCode = 13 ifTrue: [
				self zeigeAntwort]].		
		self button on: #click bind: [
			self zeigeAntwort]
! !

!Miesmuschel methodsFor: 'testing'!

enthaltenInCollection: eineAntwort
	"^ <Boolean>"
	
	"findet heraus, ob Antwort in Collection enthalten ist"
	^ self gespeicherteAntworten anySatisfy: [ :gespeicherteAntwort |
		self ist: gespeicherteAntwort gleich: eineAntwort ]
!

ist: eineAlteAntwort gleich: eineNeueAntwort
	"testet, ob die gespeicherte Antwort identisch mit der neuen ist"
	
	 eineAlteAntwort class = eineNeueAntwort class ifFalse: [
		^ false].
	(eineAlteAntwort isKindOf: Silk) ifTrue: [
		^ eineAlteAntwort element src = eineNeueAntwort element src].
	^ eineAlteAntwort = eineNeueAntwort
! !

!Miesmuschel class methodsFor: 'starting'!

start
	self new augmentPage
!

todo
^'Keine Aktion bei leerem Inputfield'
! !

