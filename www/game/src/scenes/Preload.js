
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(553.0120849609375, 361, 256, 20);
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20);
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(552.0120849609375, 329, "", {});
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });

		// guapen
		const guapen = this.add.image(688, 462, "guapen");
		guapen.scaleY = 3;

		// guapen_1
		const guapen_1 = this.add.image(412, 367, "guapen");
		guapen_1.scaleX = 3;
		guapen_1.scaleY = 3;

		// guapen_2
		const guapen_2 = this.add.image(727, 291, "guapen");
		guapen_2.scaleX = 8;
		guapen_2.scaleY = 2;

		this.loadingText = loadingText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	loadingText;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.checkLogin(this.scene));
	}

	// Check if the user is logged in
	checkLogin(scene) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.status);
				if (xhttp.status == 200)
					{					
						// If the user is logged in, we show the navbar and load the scene "Level"
						//document.getElementById("navbar").style.display = "block";
						this.scene.start("Level")
					}
					else
					{
						// If the user is not logged in, we show a message and redirect to the login page in 3 seconds.
						this.loadingText.text = "Log in please!";
						// Redirect to login page in 3 seconds
						setTimeout(() => {
							window.location.replace("../login.html");
						}, 3000)
					}
			}
		};

		xhttp.open("GET", "/signing/checkLogin", true);
		xhttp.send();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
