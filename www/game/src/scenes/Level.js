
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// advName
		const advName = this.add.text(67, 10, "", {});
		advName.text = "%adversaryName%";
		advName.setStyle({ "color": "#955757ff", "fontSize": "24px" });

		// userName
		const userName = this.add.text(70, 630, "", {});
		userName.text = "%userName%";
		userName.setStyle({ "fontSize": "24px" });

		// worm
		const worm = this.add.image(892, 61, "worm");
		worm.tintTopLeft = 0;
		worm.tintTopRight = 0;
		worm.tintBottomLeft = 12434363;
		worm.tintBottomRight = 12434363;

		// shardBackground_1
		const shardBackground_1 = this.add.image(916, 200, "promotionPlaceholder");

		// shardBackground_2
		const shardBackground_2 = this.add.image(1016, 200, "promotionPlaceholder");

		// shardBackground_3
		const shardBackground_3 = this.add.image(1116, 200, "promotionPlaceholder");

		// shardBackground_4
		const shardBackground_4 = this.add.image(1216, 200, "promotionPlaceholder");

		// cardBackground_1
		const cardBackground_1 = this.add.image(916, 400, "promotionPlaceholder");

		// cardBackground_2
		const cardBackground_2 = this.add.image(1016, 400, "promotionPlaceholder");

		// cardBackground_3
		const cardBackground_3 = this.add.image(1116, 400, "promotionPlaceholder");

		// cardBackground_4
		const cardBackground_4 = this.add.image(1216, 400, "promotionPlaceholder");

		// cardPlaceholder_1
		const cardPlaceholder_1 = new Card(this, 866, 374);
		this.add.existing(cardPlaceholder_1);

		// cardPlaceholder_2
		const cardPlaceholder_2 = new Card(this, 966, 384);
		this.add.existing(cardPlaceholder_2);

		// cardPlaceholder_3
		const cardPlaceholder_3 = new Card(this, 1070, 383);
		this.add.existing(cardPlaceholder_3);

		// cardPlaceholder_4
		const cardPlaceholder_4 = new Card(this, 1166, 380);
		this.add.existing(cardPlaceholder_4);

		// cardText_1
		const cardText_1 = this.add.text(851, 487, "", {});
		cardText_1.text = "%Bishop Number%";

		// cardText_2
		const cardText_2 = this.add.text(967, 517, "", {});
		cardText_2.text = "%Roock Number%";

		// cardText_3
		const cardText_3 = this.add.text(1060, 487, "", {});
		cardText_3.text = "%Knight Number%";

		// cardText_4
		const cardText_4 = this.add.text(1147, 514, "", {});
		cardText_4.text = "%Qween Number%";

		// pTBlack
		this.add.image(739, 311, "PTBlack");

		// cardWhiteKnight
		const cardWhiteKnight = this.add.image(916, 200, "cardWhiteKnight");
		cardWhiteKnight.tintTopLeft = 16655612;
		cardWhiteKnight.tintTopRight = 10551553;

		// lists
		const shardBackground = [shardBackground_1, shardBackground_2, shardBackground_3, shardBackground_4];
		const card = [cardPlaceholder_1, cardPlaceholder_2, cardPlaceholder_3, cardPlaceholder_4];
		const cardBackground = [cardBackground_1, cardBackground_2, cardBackground_3, cardBackground_4];
		const cardText = [cardText_1, cardText_2, cardText_3, cardText_4];

		this.advName = advName;
		this.userName = userName;
		this.shardBackground_1 = shardBackground_1;
		this.shardBackground_2 = shardBackground_2;
		this.shardBackground_3 = shardBackground_3;
		this.shardBackground_4 = shardBackground_4;
		this.cardBackground_1 = cardBackground_1;
		this.cardBackground_2 = cardBackground_2;
		this.cardBackground_3 = cardBackground_3;
		this.cardBackground_4 = cardBackground_4;
		this.cardPlaceholder_1 = cardPlaceholder_1;
		this.cardPlaceholder_2 = cardPlaceholder_2;
		this.cardPlaceholder_3 = cardPlaceholder_3;
		this.cardPlaceholder_4 = cardPlaceholder_4;
		this.cardText_1 = cardText_1;
		this.cardText_2 = cardText_2;
		this.cardText_3 = cardText_3;
		this.cardText_4 = cardText_4;
		this.shardBackground = shardBackground;
		this.card = card;
		this.cardBackground = cardBackground;
		this.cardText = cardText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	advName;
	/** @type {Phaser.GameObjects.Text} */
	userName;
	/** @type {Phaser.GameObjects.Image} */
	shardBackground_1;
	/** @type {Phaser.GameObjects.Image} */
	shardBackground_2;
	/** @type {Phaser.GameObjects.Image} */
	shardBackground_3;
	/** @type {Phaser.GameObjects.Image} */
	shardBackground_4;
	/** @type {Phaser.GameObjects.Image} */
	cardBackground_1;
	/** @type {Phaser.GameObjects.Image} */
	cardBackground_2;
	/** @type {Phaser.GameObjects.Image} */
	cardBackground_3;
	/** @type {Phaser.GameObjects.Image} */
	cardBackground_4;
	/** @type {Card} */
	cardPlaceholder_1;
	/** @type {Card} */
	cardPlaceholder_2;
	/** @type {Card} */
	cardPlaceholder_3;
	/** @type {Card} */
	cardPlaceholder_4;
	/** @type {Phaser.GameObjects.Text} */
	cardText_1;
	/** @type {Phaser.GameObjects.Text} */
	cardText_2;
	/** @type {Phaser.GameObjects.Text} */
	cardText_3;
	/** @type {Phaser.GameObjects.Text} */
	cardText_4;
	/** @type {Phaser.GameObjects.Image[]} */
	shardBackground;
	/** @type {Card[]} */
	card;
	/** @type {Phaser.GameObjects.Image[]} */
	cardBackground;
	/** @type {Phaser.GameObjects.Text[]} */
	cardText;

	/* START-USER-CODE */

	// Write more your code here

	create() {


		this.editorCreate();

		// for(let i = 0; i < this.card.length; i++){
		// 	this.card[i].on('pointerdown', () => {
		// 		console.log("amogus");
		// 			//console.log(this.card[i]);
		// 		})

		// }

		// this.pawnArray = []

		// const pawn1 = new Card(this, 648, 571);
		// this.add.existing(pawn1);
		// this.pawnArray.push(this.pawn1);

		// this.Tile_1.on('pointerdown', () => {
		// 	console.log(this.Tile_1)
		// })

		const blackTilesId = [1, 3, 5, 7, 10, 12, 14, 16, 17, 19, 21, 23, 26, 28, 30, 32, 33, 35, 37, 39, 42, 44, 46, 48, 49, 51, 53, 55, 58, 60, 62, 64];
		const whiteTilesId = [0, 2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24, 25, 27, 29, 31, 34, 36, 38, 40, 41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];


		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		setInterval(() => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					//console.log(data);

					// Get the player names from the response
					var player1Name = data[0].player_name
					var player2Name = data[1].player_name

					// Set the player names in the game
					this.userName.text = player1Name;
					this.advName.text = player2Name;

				}
			};

			// Send a GET request to the server (just testing with /match/11 endpoint)
			xhttp.open("GET", "../state/game/1", true);
			xhttp.send();
		}, TIME_BETWEEN_SYNC)

		//idk

		//var piecesOnBoard = [];
		//save the coordinates and then eleborates them instes of increasigly create a new object
		//legendary queer, get the piece and it's tile id, then it goes thoutght all of them and CHANGES their texture


		//CARDS
		//either the placeholder raffigures a greyed out version of the card and when the number is higher than 0, it gets illuminated and we write how many in a text or we add many underlying copy
		//or we have a common placeholder and when the number is > 0, the card appears and to show multiple copies we could stack some more or have a text to say that.



		setInterval(() => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);
					var cardAssetName = "";
					for(let i = 0; i < data.length; i++){

						//Constructing the name for the card prefab
						cardAssetName = "card"
						if(data[i].mp_pc_id == 1){
							cardAssetName += "White";
						}else if(data[i].mp_pc_id == 2){
							cardAssetName += "Black";
						}

						//Detecting the piecce type
						switch(data[i].card_name){
							case 'Bishop':     //Bishop
								cardAssetName += "Bishop";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, data[i].card_name, cardAssetName);
								break;
							case 'Roock':     // Roock
								cardAssetName += "Roock";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, data[i].card_name, cardAssetName);
								break;
							case 'Knight':     // Knight
								cardAssetName += "Knight";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, data[i].card_name, cardAssetName);
								break;
							case 'Queen':     // Quween
								cardAssetName += "Queen";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, data[i].card_name, cardAssetName);
								break;
							default:
								console.log("gg i guess");
							}

							//resetting for the successive card
							cardAssetName = "";
						}	

				}
			};

			// Send a GET request to the server, need a way to get the playerId from the  coockies or when the match is accessed
			xhttp.open("GET", "../state/card/1/1", true);
			xhttp.send();
		}, TIME_BETWEEN_SYNC)


		//Progressive tile generative prefab with properies in mind, idk tho

		// var arrTiles = [];
		// var tileSprite = "";
		// var originX = 0;
		// var originY = 0;

		// for (let i = 0; i < 64; i++){
		// 	tileName += i;

		// 	if(whiteTilesId.includes(i)){
		// 		tileSprite = "whiteTile";
		// 	}else if(blackTilesId.includes(i)){
		// 		tileSprite = "blackTile";
		// 	}
		// 	arrTiles[`tile_${i+1}`] = new Tiles(originX, originY, tileSprite);
		// 	arrTiles[`tile_${i+1}`].name = `Tile_${i+1}`;
		// 	arrTiles[`tile_${i+1}`].scaleX = 7;
		// 	arrTiles[`tile_${i+1}`].scaleY = 7;

		// 	this.add.existing(`tile_${i+1}`);

		// 	originX += 70;
		// 	originY += 70;
		// }

	}

	update(){
		//maybe "donkey" enpoint => asking if it's your turn to play.
	}

	CardDisplay(cardReference, cardText, cardAmmount, cardName, cardArtReference){
		//color necessary to be used to detected the rigth card
		//assigning done better, giving name of asset and color possibly. or cereate a name based of of the asset

		cardReference.ammount = cardAmmount;
		//console.log("card: " + i + " numb: " + cardReference.ammount);

		cardText.text = cardName + ": x" + cardAmmount;
		if(cardAmmount > 0){
			//allows it to be shown, or it could make it not ; not necessarily changing it's size
			//console.log(cardReference);

			cardReference.worm.setTexture(cardArtReference);
			//cardReference.worm.setSize(200,124);
			cardReference.worm.scaleX = 1;

			//cardReference.print();
			//cardReference.fadeIntoScene(5000);

		}else if(cardAmmount <= 0){//assures that a change in card has appened

			//allows it to be hidden, or it could make it gray; not necessarily changing it's size

			//nelio is a portuGUESS man
			cardReference.worm.scaleX = 0;
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


