
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 46, y ?? 17, texture || "worm", frame);

		this.scaleX = 2;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	ammount = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
