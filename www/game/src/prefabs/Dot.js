
// You can write more code here

/* START OF COMPILED CODE */

class Dot extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// circle
		const circle = scene.add.image(0, 0, "Circle");
		this.name = "dot";
		this.add(circle);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
