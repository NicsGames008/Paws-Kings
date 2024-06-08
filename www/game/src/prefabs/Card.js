
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		
		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 140), Phaser.Geom.Rectangle.Contains);
		// worm
		const worm = scene.add.image(46, 16, "worm");
		worm.scaleX = 2;
		this.add(worm);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(worm);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		this.worm = worm;

		/* START-USER-CTR-CODE */
		//worm.on('pointerdown', () => {
			//giving back the var "worm" to later be used as to change the texture
			//console.log(onPointerDownScript);
			//this.print();
			//worm.alpha = 0;
			//fadeIntoScene();
		//})
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	worm;
	/** @type {number} */
	ammount = 0;
	/** @type {number} */
	cardId = 0;

	/* START-USER-CODE */

	// Write your code here.

	//function fadeIntoScene(dur) {
	//	scene.tweens.add({
	//		targets: this,
	//		alpha: 1,
	//		duration: dur,
	//		ease: 'Power2'
	//});



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
