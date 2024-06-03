
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

		// Tile_1
		const tile_1 = this.add.image(100, 570, "blackTile");
		tile_1.scaleX = 7;
		tile_1.scaleY = 7;

		// Tile_2
		const tile_2 = this.add.image(170, 570, "whiteTile");
		tile_2.scaleX = 7;
		tile_2.scaleY = 7;

		// Tile_3
		const tile_3 = this.add.image(240, 569, "blackTile");
		tile_3.scaleX = 7;
		tile_3.scaleY = 7;

		// Tile_4
		const tile_4 = this.add.image(310, 570, "whiteTile");
		tile_4.scaleX = 7;
		tile_4.scaleY = 7;

		// Tile_5
		const tile_5 = this.add.image(380, 570, "blackTile");
		tile_5.scaleX = 7;
		tile_5.scaleY = 7;

		// Tile_6
		const tile_6 = this.add.image(450, 570, "whiteTile");
		tile_6.scaleX = 7;
		tile_6.scaleY = 7;

		// Tile_7
		const tile_7 = this.add.image(520, 570, "blackTile");
		tile_7.scaleX = 7;
		tile_7.scaleY = 7;

		// Tile_8
		const tile_8 = this.add.image(590, 570, "whiteTile");
		tile_8.scaleX = 7;
		tile_8.scaleY = 7;

		// Tile_9
		const tile_9 = this.add.image(100, 500, "whiteTile");
		tile_9.scaleX = 7;
		tile_9.scaleY = 7;

		// Tile_10
		const tile_10 = this.add.image(170, 500, "blackTile");
		tile_10.scaleX = 7;
		tile_10.scaleY = 7;

		// Tile_11
		const tile_11 = this.add.image(240, 500, "whiteTile");
		tile_11.scaleX = 7;
		tile_11.scaleY = 7;

		// Tile_12
		const tile_12 = this.add.image(310, 500, "blackTile");
		tile_12.scaleX = 7;
		tile_12.scaleY = 7;

		// Tile_13
		const tile_13 = this.add.image(380, 500, "whiteTile");
		tile_13.scaleX = 7;
		tile_13.scaleY = 7;

		// Tile_14
		const tile_14 = this.add.image(450, 500, "blackTile");
		tile_14.scaleX = 7;
		tile_14.scaleY = 7;

		// Tile_15
		const tile_15 = this.add.image(520, 500, "whiteTile");
		tile_15.scaleX = 7;
		tile_15.scaleY = 7;

		// Tile_16
		const tile_16 = this.add.image(590, 500, "blackTile");
		tile_16.scaleX = 7;
		tile_16.scaleY = 7;

		// Tile_17
		const tile_17 = this.add.image(100, 430, "blackTile");
		tile_17.scaleX = 7;
		tile_17.scaleY = 7;

		// Tile_18
		const tile_18 = this.add.image(170, 430, "whiteTile");
		tile_18.scaleX = 7;
		tile_18.scaleY = 7;

		// Tile_19
		const tile_19 = this.add.image(240, 429, "blackTile");
		tile_19.scaleX = 7;
		tile_19.scaleY = 7;

		// Tile_20
		const tile_20 = this.add.image(310, 430, "whiteTile");
		tile_20.scaleX = 7;
		tile_20.scaleY = 7;

		// Tile_21
		const tile_21 = this.add.image(380, 430, "blackTile");
		tile_21.scaleX = 7;
		tile_21.scaleY = 7;

		// Tile_22
		const tile_22 = this.add.image(450, 430, "whiteTile");
		tile_22.scaleX = 7;
		tile_22.scaleY = 7;

		// Tile_23
		const tile_23 = this.add.image(520, 430, "blackTile");
		tile_23.scaleX = 7;
		tile_23.scaleY = 7;

		// Tile_24
		const tile_24 = this.add.image(590, 430, "whiteTile");
		tile_24.scaleX = 7;
		tile_24.scaleY = 7;

		// Tile_25
		const tile_25 = this.add.image(100, 360, "whiteTile");
		tile_25.scaleX = 7;
		tile_25.scaleY = 7;

		// Tile_26
		const tile_26 = this.add.image(170, 360, "blackTile");
		tile_26.scaleX = 7;
		tile_26.scaleY = 7;

		// Tile_27
		const tile_27 = this.add.image(240, 360, "whiteTile");
		tile_27.scaleX = 7;
		tile_27.scaleY = 7;

		// Tile_28
		const tile_28 = this.add.image(310, 360, "blackTile");
		tile_28.scaleX = 7;
		tile_28.scaleY = 7;

		// Tile_29
		const tile_29 = this.add.image(380, 360, "whiteTile");
		tile_29.scaleX = 7;
		tile_29.scaleY = 7;

		// Tile_30
		const tile_30 = this.add.image(450, 360, "blackTile");
		tile_30.scaleX = 7;
		tile_30.scaleY = 7;

		// Tile_31
		const tile_31 = this.add.image(520, 360, "whiteTile");
		tile_31.scaleX = 7;
		tile_31.scaleY = 7;

		// Tile_32
		const tile_32 = this.add.image(590, 360, "blackTile");
		tile_32.scaleX = 7;
		tile_32.scaleY = 7;

		// Tile_33
		const tile_33 = this.add.image(100, 290, "blackTile");
		tile_33.scaleX = 7;
		tile_33.scaleY = 7;

		// Tile_34
		const tile_34 = this.add.image(170, 290, "whiteTile");
		tile_34.scaleX = 7;
		tile_34.scaleY = 7;

		// Tile_35
		const tile_35 = this.add.image(240, 289, "blackTile");
		tile_35.scaleX = 7;
		tile_35.scaleY = 7;

		// Tile_36
		const tile_36 = this.add.image(310, 290, "whiteTile");
		tile_36.scaleX = 7;
		tile_36.scaleY = 7;

		// Tile_37
		const tile_37 = this.add.image(380, 290, "blackTile");
		tile_37.scaleX = 7;
		tile_37.scaleY = 7;

		// Tile_38
		const tile_38 = this.add.image(450, 290, "whiteTile");
		tile_38.scaleX = 7;
		tile_38.scaleY = 7;

		// Tile_39
		const tile_39 = this.add.image(520, 290, "blackTile");
		tile_39.scaleX = 7;
		tile_39.scaleY = 7;

		// Tile_40
		const tile_40 = this.add.image(590, 290, "whiteTile");
		tile_40.scaleX = 7;
		tile_40.scaleY = 7;

		// Tile_41
		const tile_41 = this.add.image(100, 220, "whiteTile");
		tile_41.scaleX = 7;
		tile_41.scaleY = 7;

		// Tile_42
		const tile_42 = this.add.image(170, 220, "blackTile");
		tile_42.scaleX = 7;
		tile_42.scaleY = 7;

		// Tile_43
		const tile_43 = this.add.image(240, 220, "whiteTile");
		tile_43.scaleX = 7;
		tile_43.scaleY = 7;

		// Tile_44
		const tile_44 = this.add.image(310, 220, "blackTile");
		tile_44.scaleX = 7;
		tile_44.scaleY = 7;

		// Tile_45
		const tile_45 = this.add.image(380, 220, "whiteTile");
		tile_45.scaleX = 7;
		tile_45.scaleY = 7;

		// Tile_46
		const tile_46 = this.add.image(450, 220, "blackTile");
		tile_46.scaleX = 7;
		tile_46.scaleY = 7;

		// Tile_47
		const tile_47 = this.add.image(520, 220, "whiteTile");
		tile_47.scaleX = 7;
		tile_47.scaleY = 7;

		// Tile_48
		const tile_48 = this.add.image(590, 220, "blackTile");
		tile_48.scaleX = 7;
		tile_48.scaleY = 7;

		// Tile_49
		const tile_49 = this.add.image(100, 150, "blackTile");
		tile_49.scaleX = 7;
		tile_49.scaleY = 7;

		// Tile_50
		const tile_50 = this.add.image(170, 150, "whiteTile");
		tile_50.scaleX = 7;
		tile_50.scaleY = 7;

		// Tile_51
		const tile_51 = this.add.image(240, 149, "blackTile");
		tile_51.scaleX = 7;
		tile_51.scaleY = 7;

		// Tile_52
		const tile_52 = this.add.image(310, 150, "whiteTile");
		tile_52.scaleX = 7;
		tile_52.scaleY = 7;

		// Tile_53
		const tile_53 = this.add.image(380, 150, "blackTile");
		tile_53.scaleX = 7;
		tile_53.scaleY = 7;

		// Tile_54
		const tile_54 = this.add.image(450, 150, "whiteTile");
		tile_54.scaleX = 7;
		tile_54.scaleY = 7;

		// Tile_55
		const tile_55 = this.add.image(520, 150, "blackTile");
		tile_55.scaleX = 7;
		tile_55.scaleY = 7;

		// Tile_56
		const tile_56 = this.add.image(590, 150, "whiteTile");
		tile_56.scaleX = 7;
		tile_56.scaleY = 7;

		// Tile_57
		const tile_57 = this.add.image(100, 80, "whiteTile");
		tile_57.scaleX = 7;
		tile_57.scaleY = 7;

		// Tile_58
		const tile_58 = this.add.image(170, 80, "blackTile");
		tile_58.scaleX = 7;
		tile_58.scaleY = 7;

		// Tile_59
		const tile_59 = this.add.image(240, 80, "whiteTile");
		tile_59.scaleX = 7;
		tile_59.scaleY = 7;

		// Tile_60
		const tile_60 = this.add.image(310, 80, "blackTile");
		tile_60.scaleX = 7;
		tile_60.scaleY = 7;

		// Tile_61
		const tile_61 = this.add.image(380, 80, "whiteTile");
		tile_61.scaleX = 7;
		tile_61.scaleY = 7;

		// Tile_62
		const tile_62 = this.add.image(450, 80, "blackTile");
		tile_62.scaleX = 7;
		tile_62.scaleY = 7;

		// Tile_63
		const tile_63 = this.add.image(520, 80, "whiteTile");
		tile_63.scaleX = 7;
		tile_63.scaleY = 7;

		// Tile_64
		const tile_64 = this.add.image(590, 80, "blackTile");
		tile_64.scaleX = 7;
		tile_64.scaleY = 7;

		// advName
		const advName = this.add.text(67, 10, "", {});
		advName.text = "%adversaryName%";
		advName.setStyle({ "color": "#955757ff", "fontSize": "24px" });

		// userName
		const userName = this.add.text(70, 630, "", {});
		userName.text = "%userName%";
		userName.setStyle({ "fontSize": "24px" });

		// boardData
		const boardData = this.add.text(702, 46, "", {});
		boardData.text = "%boardData%";
		boardData.setStyle({ "fontSize": "24px" });

		// worm
		const worm = this.add.image(892, 61, "worm");
		worm.tintTopLeft = 0;
		worm.tintTopRight = 16136762;
		worm.tintBottomLeft = 0;
		worm.tintBottomRight = 0;

		// lists
		const chessboard = [tile_64, tile_63, tile_62, tile_61, tile_60, tile_59, tile_58, tile_57, tile_56, tile_55, tile_54, tile_53, tile_52, tile_51, tile_50, tile_49, tile_48, tile_47, tile_46, tile_45, tile_44, tile_43, tile_42, tile_41, tile_40, tile_39, tile_38, tile_37, tile_36, tile_35, tile_34, tile_33, tile_32, tile_31, tile_30, tile_29, tile_28, tile_27, tile_26, tile_25, tile_24, tile_23, tile_22, tile_21, tile_20, tile_19, tile_18, tile_17, tile_16, tile_15, tile_14, tile_13, tile_12, tile_11, tile_10, tile_9, tile_8, tile_7, tile_6, tile_5, tile_4, tile_3, tile_2, tile_1];

		this.tile_1 = tile_1;
		this.tile_2 = tile_2;
		this.tile_3 = tile_3;
		this.tile_4 = tile_4;
		this.tile_5 = tile_5;
		this.tile_6 = tile_6;
		this.tile_7 = tile_7;
		this.tile_8 = tile_8;
		this.tile_9 = tile_9;
		this.tile_10 = tile_10;
		this.tile_11 = tile_11;
		this.tile_12 = tile_12;
		this.tile_13 = tile_13;
		this.tile_14 = tile_14;
		this.tile_15 = tile_15;
		this.tile_16 = tile_16;
		this.tile_17 = tile_17;
		this.tile_18 = tile_18;
		this.tile_19 = tile_19;
		this.tile_20 = tile_20;
		this.tile_21 = tile_21;
		this.tile_22 = tile_22;
		this.tile_23 = tile_23;
		this.tile_24 = tile_24;
		this.tile_25 = tile_25;
		this.tile_26 = tile_26;
		this.tile_27 = tile_27;
		this.tile_28 = tile_28;
		this.tile_29 = tile_29;
		this.tile_30 = tile_30;
		this.tile_31 = tile_31;
		this.tile_32 = tile_32;
		this.tile_33 = tile_33;
		this.tile_34 = tile_34;
		this.tile_35 = tile_35;
		this.tile_36 = tile_36;
		this.tile_37 = tile_37;
		this.tile_38 = tile_38;
		this.tile_39 = tile_39;
		this.tile_40 = tile_40;
		this.tile_41 = tile_41;
		this.tile_42 = tile_42;
		this.tile_43 = tile_43;
		this.tile_44 = tile_44;
		this.tile_45 = tile_45;
		this.tile_46 = tile_46;
		this.tile_47 = tile_47;
		this.tile_48 = tile_48;
		this.tile_49 = tile_49;
		this.tile_50 = tile_50;
		this.tile_51 = tile_51;
		this.tile_52 = tile_52;
		this.tile_53 = tile_53;
		this.tile_54 = tile_54;
		this.tile_55 = tile_55;
		this.tile_56 = tile_56;
		this.tile_57 = tile_57;
		this.tile_58 = tile_58;
		this.tile_59 = tile_59;
		this.tile_60 = tile_60;
		this.tile_61 = tile_61;
		this.tile_62 = tile_62;
		this.tile_63 = tile_63;
		this.tile_64 = tile_64;
		this.advName = advName;
		this.userName = userName;
		this.boardData = boardData;
		this.chessboard = chessboard;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	tile_1;
	/** @type {Phaser.GameObjects.Image} */
	tile_2;
	/** @type {Phaser.GameObjects.Image} */
	tile_3;
	/** @type {Phaser.GameObjects.Image} */
	tile_4;
	/** @type {Phaser.GameObjects.Image} */
	tile_5;
	/** @type {Phaser.GameObjects.Image} */
	tile_6;
	/** @type {Phaser.GameObjects.Image} */
	tile_7;
	/** @type {Phaser.GameObjects.Image} */
	tile_8;
	/** @type {Phaser.GameObjects.Image} */
	tile_9;
	/** @type {Phaser.GameObjects.Image} */
	tile_10;
	/** @type {Phaser.GameObjects.Image} */
	tile_11;
	/** @type {Phaser.GameObjects.Image} */
	tile_12;
	/** @type {Phaser.GameObjects.Image} */
	tile_13;
	/** @type {Phaser.GameObjects.Image} */
	tile_14;
	/** @type {Phaser.GameObjects.Image} */
	tile_15;
	/** @type {Phaser.GameObjects.Image} */
	tile_16;
	/** @type {Phaser.GameObjects.Image} */
	tile_17;
	/** @type {Phaser.GameObjects.Image} */
	tile_18;
	/** @type {Phaser.GameObjects.Image} */
	tile_19;
	/** @type {Phaser.GameObjects.Image} */
	tile_20;
	/** @type {Phaser.GameObjects.Image} */
	tile_21;
	/** @type {Phaser.GameObjects.Image} */
	tile_22;
	/** @type {Phaser.GameObjects.Image} */
	tile_23;
	/** @type {Phaser.GameObjects.Image} */
	tile_24;
	/** @type {Phaser.GameObjects.Image} */
	tile_25;
	/** @type {Phaser.GameObjects.Image} */
	tile_26;
	/** @type {Phaser.GameObjects.Image} */
	tile_27;
	/** @type {Phaser.GameObjects.Image} */
	tile_28;
	/** @type {Phaser.GameObjects.Image} */
	tile_29;
	/** @type {Phaser.GameObjects.Image} */
	tile_30;
	/** @type {Phaser.GameObjects.Image} */
	tile_31;
	/** @type {Phaser.GameObjects.Image} */
	tile_32;
	/** @type {Phaser.GameObjects.Image} */
	tile_33;
	/** @type {Phaser.GameObjects.Image} */
	tile_34;
	/** @type {Phaser.GameObjects.Image} */
	tile_35;
	/** @type {Phaser.GameObjects.Image} */
	tile_36;
	/** @type {Phaser.GameObjects.Image} */
	tile_37;
	/** @type {Phaser.GameObjects.Image} */
	tile_38;
	/** @type {Phaser.GameObjects.Image} */
	tile_39;
	/** @type {Phaser.GameObjects.Image} */
	tile_40;
	/** @type {Phaser.GameObjects.Image} */
	tile_41;
	/** @type {Phaser.GameObjects.Image} */
	tile_42;
	/** @type {Phaser.GameObjects.Image} */
	tile_43;
	/** @type {Phaser.GameObjects.Image} */
	tile_44;
	/** @type {Phaser.GameObjects.Image} */
	tile_45;
	/** @type {Phaser.GameObjects.Image} */
	tile_46;
	/** @type {Phaser.GameObjects.Image} */
	tile_47;
	/** @type {Phaser.GameObjects.Image} */
	tile_48;
	/** @type {Phaser.GameObjects.Image} */
	tile_49;
	/** @type {Phaser.GameObjects.Image} */
	tile_50;
	/** @type {Phaser.GameObjects.Image} */
	tile_51;
	/** @type {Phaser.GameObjects.Image} */
	tile_52;
	/** @type {Phaser.GameObjects.Image} */
	tile_53;
	/** @type {Phaser.GameObjects.Image} */
	tile_54;
	/** @type {Phaser.GameObjects.Image} */
	tile_55;
	/** @type {Phaser.GameObjects.Image} */
	tile_56;
	/** @type {Phaser.GameObjects.Image} */
	tile_57;
	/** @type {Phaser.GameObjects.Image} */
	tile_58;
	/** @type {Phaser.GameObjects.Image} */
	tile_59;
	/** @type {Phaser.GameObjects.Image} */
	tile_60;
	/** @type {Phaser.GameObjects.Image} */
	tile_61;
	/** @type {Phaser.GameObjects.Image} */
	tile_62;
	/** @type {Phaser.GameObjects.Image} */
	tile_63;
	/** @type {Phaser.GameObjects.Image} */
	tile_64;
	/** @type {Phaser.GameObjects.Text} */
	advName;
	/** @type {Phaser.GameObjects.Text} */
	userName;
	/** @type {Phaser.GameObjects.Text} */
	boardData;
	/** @type {Phaser.GameObjects.Image[]} */
	chessboard;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

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
		var piecesOnBoard = [...Array(64)].map(() => 0);

		setInterval(() => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);

					for(let i = 0; i < data.length; i++){

						//
						switch(data[i]){
							case 'wBi':     //White Bishop
								//data[i] = '♗';
								break;
							case 'wRo':     //White Roock
								//data[i] = '♖';
								break;
							case 'wKn':     //White Knight
								//data[i] = '♘';
								break;
							case 'wQw':     //White Quween
								//data[i] = '♕';
								break;
							case 'wPa':     //White Pawn
								
								var coordintates = this.chessboard[i].getCenter();

								piecesOnBoard[i] = this.add.image(coordintates.x, coordintates.y, "worm");
								//this.chessboard[i].scaleX = 1;
								//this.chessboard[i].scaleY = 1;
								//this.chessboard[i].setTexture("worm");
								break;
							case 'wKi':     //White King
								//data[i] = "♔";
								break;
							case 'bBi':     //Black Bishop
								//data[i] = '♝';
								break;
							case 'bRo':     //Black Roock
								//data[i] = '♜';
								break;
							case 'bKn':     //Black Knight
								//data[i] = '♞';
								break;
							case 'bQw':     //Black Quween
								//data[i] = '♛';
								break;
							case 'bPa':     //Black Pawn ♟️
								
								var coordintates = this.chessboard[i].getCenter();

								piecesOnBoard[i] = this.add.image(coordintates.x, coordintates.y, "worm");
								piecesOnBoard[i].setTint(0xFF00FF);
								break;
							case 'bKi':     //Black King

								break;
							default:
								//console.log(i);
								if(whiteTilesId.includes(i)){   
									//console.log(i + ": to be emptyed")
									//var coordintates = this.chessboard[i].getCenter();
									if(piecesOnBoard[i]){
										piecesOnBoard[i].destroy();
									}
									// this.chessboard[i].scaleX = 7;
									// this.chessboard[i].scaleY = 7;
									//this.piecesOnBoard[i].setTexture("whiteTile");


								}else if(blackTilesId.includes(i)){
									// this.chessboard[i].scaleX = 7;
									// this.chessboard[i].scaleY = 7;
									//this.piecesOnBoard[i].setTexture("blackTile");
									//console.log(i + ": to be emptyed")
									
									if(piecesOnBoard[i]){
										piecesOnBoard[i].destroy();
									}
									
								}
							}

					}	
					console.log(piecesOnBoard);
				}
			};

			// Send a GET request to the server (just testing with /match/11 endpoint)
			xhttp.open("GET", "../state/boardR/1", true);
			xhttp.send();
		}, TIME_BETWEEN_SYNC)




	}

	update(){

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
