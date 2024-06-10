
// You can write more code here

/* START OF COMPILED CODE */

class ShardMiddle extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 28, y ?? 16, texture || "mefrfr", frame);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "LEFT";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	isdDsplayed = false;
	/** @type {number} */
	index = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
