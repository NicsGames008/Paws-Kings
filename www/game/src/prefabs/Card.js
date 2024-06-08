
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container
		const container = scene.add.container(46, 17);
		this.add(container);

		// worm
		const worm = scene.add.image(0, 0, "worm");
		worm.scaleX = 2;
		container.add(worm);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(worm);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		this.worm = worm;

		/* START-USER-CTR-CODE */
		worm.on('pointerdown', () => {
			//giving back the var "worm" to later be used as to change the texture
			console.log(worm.displayWidth + worm.displayHeight);
			//this.print();
			//worm.alpha = 0;
			//fadeIntoScene();
		})
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	worm;
	/** @type {number} */
	ammount = 0;

	/* START-USER-CODE */

	// Write your code here.

	print(){
		console.log("adoro diO");
	}


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
