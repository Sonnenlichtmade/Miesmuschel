Smalltalk createPackage: 'Miesmuschel'!
(Smalltalk packageAt: 'Miesmuschel' ifAbsent: [ self error: 'Package not created: Miesmuschel' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Miesmuschel
	slots: {#muschelDiv. #random}
	package: 'Miesmuschel'!

!Miesmuschel methodsFor: 'accessing'!

antwortDiv

	^ Silk DIV.
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

frageAufforderung
	^ Silk DIV: 'Gib eine Ja/Nein-Frage ein:'
!

input
	^ Silk INPUT: {'class'->'input'}
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

!Miesmuschel methodsFor: 'actions'!

eingabeLoeschen: einSilkInput ausgabeelement: einAntwortDiv
	| frage antwort |
	
	antwort := self zufaelligeAntwort.
	frage := einSilkInput element value.
	einAntwortDiv resetContents.
	einAntwortDiv << (Silk DIV: frage).
	(antwort isKindOf: Silk)
		ifTrue: [self setzeAntwortBild: antwort] 
		ifFalse: [
			self initialisiereMuschelBild.
			einAntwortDiv << (self antwortText: antwort)].
	einSilkInput element value: ''
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

