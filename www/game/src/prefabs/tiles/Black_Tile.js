
// You can write more code here

/* START OF COMPILED CODE */

class Black_Tile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(-35, -35, 70, 70), Phaser.Geom.Rectangle.Contains);

		// blackTile
		const blackTile = scene.add.image(0, 0, "blackTile");
		blackTile.scaleX = 7;
		blackTile.scaleY = 7;
		this.add(blackTile);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */

		// custom definition props
		this.tileId = 0;
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
