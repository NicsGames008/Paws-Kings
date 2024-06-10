
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

		// background
		const background = this.add.image(-106, -105, "whiteTile");
		background.scaleX = 150;
		background.scaleY = 100;
		background.setOrigin(0, 0);
		background.tintTopLeft = 922921;
		background.tintTopRight = 922921;
		background.tintBottomLeft = 922921;
		background.tintBottomRight = 922921;

		// advName
		const advName = this.add.text(43, 10, "", {});
		advName.text = "%adversaryName%";
		advName.setStyle({ "color": "#7f00f8ff", "fixedHeight":30,"fontSize": "30px", "shadow.offsetX":-6,"shadow.offsetY":-5,"shadow.color": "#972bff2b", "shadow.fill":true});

		// userName
		const userName = this.add.text(43, 650, "", {});
		userName.text = "%userName%";
		userName.setStyle({ "color": "#fff7bbff", "fixedHeight":30,"fontSize": "30px", "shadow.offsetX":-4,"shadow.offsetY":5,"shadow.color": "#fff5a821", "shadow.blur":1,"shadow.fill":true});

		// tilesContainer
		const tilesContainer = this.add.container(322, 325);

		// Tile_64
		const tile_64 = new Black_Tile(this, 245, -245);
		tile_64.name = "Tile_64";
		tile_64.angle = 0;
		tilesContainer.add(tile_64);

		// Tile_63
		const tile_63 = new White_Tile(this, 175, -245);
		tile_63.name = "Tile_63";
		tile_63.angle = 0;
		tilesContainer.add(tile_63);

		// Tile_62
		const tile_62 = new Black_Tile(this, 105, -245);
		tile_62.name = "Tile_62";
		tile_62.angle = 0;
		tilesContainer.add(tile_62);

		// Tile_61
		const tile_61 = new White_Tile(this, 35, -245);
		tile_61.name = "Tile_61";
		tile_61.angle = 0;
		tilesContainer.add(tile_61);

		// Tile_60
		const tile_60 = new Black_Tile(this, -35, -245);
		tile_60.name = "Tile_60";
		tile_60.angle = 0;
		tilesContainer.add(tile_60);

		// Tile_59
		const tile_59 = new White_Tile(this, -105, -245);
		tile_59.name = "Tile_59";
		tile_59.angle = 0;
		tilesContainer.add(tile_59);

		// Tile_58
		const tile_58 = new Black_Tile(this, -175, -245);
		tile_58.name = "Tile_58";
		tile_58.angle = 0;
		tilesContainer.add(tile_58);

		// Tile_57
		const tile_57 = new White_Tile(this, -245, -245);
		tile_57.name = "Tile_57";
		tile_57.angle = 0;
		tilesContainer.add(tile_57);

		// Tile_56
		const tile_56 = new White_Tile(this, 245, -175);
		tile_56.name = "Tile_56";
		tilesContainer.add(tile_56);

		// Tile_55
		const tile_55 = new Black_Tile(this, 175, -175);
		tile_55.name = "Tile_55";
		tilesContainer.add(tile_55);

		// Tile_54
		const tile_54 = new White_Tile(this, 105, -175);
		tile_54.name = "Tile_54";
		tilesContainer.add(tile_54);

		// Tile_53
		const tile_53 = new Black_Tile(this, 35, -175);
		tile_53.name = "Tile_53";
		tilesContainer.add(tile_53);

		// Tile_52
		const tile_52 = new White_Tile(this, -35, -175);
		tile_52.name = "Tile_52";
		tilesContainer.add(tile_52);

		// Tile_51
		const tile_51 = new Black_Tile(this, -105, -175);
		tile_51.name = "Tile_51";
		tilesContainer.add(tile_51);

		// Tile_50
		const tile_50 = new White_Tile(this, -175, -175);
		tile_50.name = "Tile_50";
		tilesContainer.add(tile_50);

		// Tile_49
		const tile_49 = new Black_Tile(this, -245, -175);
		tile_49.name = "Tile_49";
		tilesContainer.add(tile_49);

		// Tile_48
		const tile_48 = new Black_Tile(this, 245, -105);
		tile_48.name = "Tile_48";
		tile_48.angle = 0;
		tilesContainer.add(tile_48);

		// Tile_47
		const tile_47 = new White_Tile(this, 175, -105);
		tile_47.name = "Tile_47";
		tile_47.angle = 0;
		tilesContainer.add(tile_47);

		// Tile_46
		const tile_46 = new Black_Tile(this, 105, -105);
		tile_46.name = "Tile_46";
		tile_46.angle = 0;
		tilesContainer.add(tile_46);

		// Tile_45
		const tile_45 = new White_Tile(this, 35, -105);
		tile_45.name = "Tile_45";
		tile_45.angle = 0;
		tilesContainer.add(tile_45);

		// Tile_44
		const tile_44 = new Black_Tile(this, -35, -105);
		tile_44.name = "Tile_44";
		tile_44.angle = 0;
		tilesContainer.add(tile_44);

		// Tile_43
		const tile_43 = new White_Tile(this, -105, -105);
		tile_43.name = "Tile_43";
		tile_43.angle = 0;
		tilesContainer.add(tile_43);

		// Tile_42
		const tile_42 = new Black_Tile(this, -175, -105);
		tile_42.name = "Tile_42";
		tile_42.angle = 0;
		tilesContainer.add(tile_42);

		// Tile_41
		const tile_41 = new White_Tile(this, -245, -105);
		tile_41.name = "Tile_41";
		tile_41.angle = 0;
		tilesContainer.add(tile_41);

		// Tile_40
		const tile_40 = new White_Tile(this, 245, -35);
		tile_40.name = "Tile_40";
		tilesContainer.add(tile_40);

		// Tile_39
		const tile_39 = new Black_Tile(this, 175, -35);
		tile_39.name = "Tile_39";
		tilesContainer.add(tile_39);

		// Tile_38
		const tile_38 = new White_Tile(this, 105, -35);
		tile_38.name = "Tile_38";
		tilesContainer.add(tile_38);

		// Tile_37
		const tile_37 = new Black_Tile(this, 35, -35);
		tile_37.name = "Tile_37";
		tilesContainer.add(tile_37);

		// Tile_36
		const tile_36 = new White_Tile(this, -35, -35);
		tile_36.name = "Tile_36";
		tilesContainer.add(tile_36);

		// Tile_35
		const tile_35 = new Black_Tile(this, -105, -35);
		tile_35.name = "Tile_35";
		tilesContainer.add(tile_35);

		// Tile_34
		const tile_34 = new White_Tile(this, -175, -35);
		tile_34.name = "Tile_34";
		tilesContainer.add(tile_34);

		// Tile_33
		const tile_33 = new Black_Tile(this, -245, -35);
		tile_33.name = "Tile_33";
		tilesContainer.add(tile_33);

		// Tile_32
		const tile_32 = new Black_Tile(this, 245, 35);
		tile_32.name = "Tile_32";
		tile_32.angle = 0;
		tilesContainer.add(tile_32);

		// Tile_31
		const tile_31 = new White_Tile(this, 175, 35);
		tile_31.name = "Tile_31";
		tile_31.angle = 0;
		tilesContainer.add(tile_31);

		// Tile_30
		const tile_30 = new Black_Tile(this, 105, 35);
		tile_30.name = "Tile_30";
		tile_30.angle = 0;
		tilesContainer.add(tile_30);

		// Tile_29
		const tile_29 = new White_Tile(this, 35, 35);
		tile_29.name = "Tile_29";
		tile_29.angle = 0;
		tilesContainer.add(tile_29);

		// Tile_28
		const tile_28 = new Black_Tile(this, -35, 35);
		tile_28.name = "Tile_28";
		tile_28.angle = 0;
		tilesContainer.add(tile_28);

		// Tile_27
		const tile_27 = new White_Tile(this, -105, 35);
		tile_27.name = "Tile_27";
		tile_27.angle = 0;
		tilesContainer.add(tile_27);

		// Tile_26
		const tile_26 = new Black_Tile(this, -175, 35);
		tile_26.name = "Tile_26";
		tile_26.angle = 0;
		tilesContainer.add(tile_26);

		// Tile_25
		const tile_25 = new White_Tile(this, -245, 35);
		tile_25.name = "Tile_25";
		tile_25.angle = 0;
		tilesContainer.add(tile_25);

		// Tile_24
		const tile_24 = new White_Tile(this, 245, 105);
		tile_24.name = "Tile_24";
		tilesContainer.add(tile_24);

		// Tile_23
		const tile_23 = new Black_Tile(this, 175, 105);
		tile_23.name = "Tile_23";
		tilesContainer.add(tile_23);

		// Tile_22
		const tile_22 = new White_Tile(this, 105, 105);
		tile_22.name = "Tile_22";
		tilesContainer.add(tile_22);

		// Tile_21
		const tile_21 = new Black_Tile(this, 35, 105);
		tile_21.name = "Tile_21";
		tilesContainer.add(tile_21);

		// Tile_20
		const tile_20 = new White_Tile(this, -35, 105);
		tile_20.name = "Tile_20";
		tilesContainer.add(tile_20);

		// Tile_19
		const tile_19 = new Black_Tile(this, -105, 105);
		tile_19.name = "Tile_19";
		tilesContainer.add(tile_19);

		// Tile_18
		const tile_18 = new White_Tile(this, -175, 105);
		tile_18.name = "Tile_18";
		tilesContainer.add(tile_18);

		// Tile_17
		const tile_17 = new Black_Tile(this, -245, 105);
		tile_17.name = "Tile_17";
		tilesContainer.add(tile_17);

		// Tile_16
		const tile_16 = new Black_Tile(this, 245, 175);
		tile_16.name = "Tile_16";
		tile_16.angle = 0;
		tilesContainer.add(tile_16);

		// Tile_15
		const tile_15 = new White_Tile(this, 175, 175);
		tile_15.name = "Tile_15";
		tile_15.angle = 0;
		tilesContainer.add(tile_15);

		// Tile_14
		const tile_14 = new Black_Tile(this, 105, 175);
		tile_14.name = "Tile_14";
		tile_14.angle = 0;
		tilesContainer.add(tile_14);

		// Tile_13
		const tile_13 = new White_Tile(this, 35, 175);
		tile_13.name = "Tile_13";
		tile_13.angle = 0;
		tilesContainer.add(tile_13);

		// Tile_12
		const tile_12 = new Black_Tile(this, -35, 175);
		tile_12.name = "Tile_12";
		tile_12.angle = 0;
		tilesContainer.add(tile_12);

		// Tile_11
		const tile_11 = new White_Tile(this, -105, 175);
		tile_11.name = "Tile_11";
		tile_11.angle = 0;
		tilesContainer.add(tile_11);

		// Tile_10
		const tile_10 = new Black_Tile(this, -175, 175);
		tile_10.name = "Tile_10";
		tile_10.angle = 0;
		tilesContainer.add(tile_10);

		// Tile_9
		const tile_9 = new White_Tile(this, -245, 175);
		tile_9.name = "Tile_9";
		tile_9.angle = 0;
		tilesContainer.add(tile_9);

		// Tile_8
		const tile_8 = new White_Tile(this, 245, 245);
		tile_8.name = "Tile_8";
		tilesContainer.add(tile_8);

		// Tile_7
		const tile_7 = new Black_Tile(this, 175, 245);
		tile_7.name = "Tile_7";
		tilesContainer.add(tile_7);

		// Tile_6
		const tile_6 = new White_Tile(this, 105, 245);
		tile_6.name = "Tile_6";
		tilesContainer.add(tile_6);

		// Tile_5
		const tile_5 = new Black_Tile(this, 35, 245);
		tile_5.name = "Tile_5";
		tilesContainer.add(tile_5);

		// Tile_4
		const tile_4 = new White_Tile(this, -35, 245);
		tile_4.name = "Tile_4";
		tilesContainer.add(tile_4);

		// Tile_3
		const tile_3 = new Black_Tile(this, -105, 245);
		tile_3.name = "Tile_3";
		tilesContainer.add(tile_3);

		// Tile_2
		const tile_2 = new White_Tile(this, -175, 245);
		tile_2.name = "Tile_2";
		tilesContainer.add(tile_2);

		// Tile_1
		const tile_1 = new Black_Tile(this, -245, 245);
		tile_1.name = "Tile_1";
		tilesContainer.add(tile_1);

		// shardBackground_1
		const shardBackground_1 = this.add.image(876, 200, "promotionPlaceholder");

		// shardBackground_2
		const shardBackground_2 = this.add.image(989, 200, "promotionPlaceholder");

		// shardBackground_3
		const shardBackground_3 = this.add.image(1102, 200, "promotionPlaceholder");

		// shardBackground_4
		const shardBackground_4 = this.add.image(1216, 200, "promotionPlaceholder");

		// cardBackground_1
		const cardBackground_1 = this.add.image(876, 450, "promotionPlaceholder");

		// cardBackground_2
		const cardBackground_2 = this.add.image(989, 450, "promotionPlaceholder");

		// cardBackground_3
		const cardBackground_3 = this.add.image(1102, 450, "promotionPlaceholder");

		// cardBackground_4
		const cardBackground_4 = this.add.image(1215, 450, "promotionPlaceholder");

		// cardPlaceholder_1
		const cardPlaceholder_1 = new Card(this, 830, 434);
		this.add.existing(cardPlaceholder_1);
		cardPlaceholder_1.alpha = 1;

		// cardPlaceholder_2
		const cardPlaceholder_2 = new Card(this, 943, 434);
		this.add.existing(cardPlaceholder_2);
		cardPlaceholder_2.alpha = 1;

		// cardPlaceholder_3
		const cardPlaceholder_3 = new Card(this, 1055, 434);
		this.add.existing(cardPlaceholder_3);
		cardPlaceholder_3.alpha = 1;

		// cardPlaceholder_4
		const cardPlaceholder_4 = new Card(this, 1169, 434);
		this.add.existing(cardPlaceholder_4);
		cardPlaceholder_4.alpha = 1;

		// cardText_1
		const cardText_1 = this.add.text(876, 528, "", {});
		cardText_1.text = "%Bishop Number%";

		// cardText_2
		const cardText_2 = this.add.text(989, 528, "", {});
		cardText_2.text = "%Roock Number%";

		// cardText_3
		const cardText_3 = this.add.text(1102, 528, "", {});
		cardText_3.text = "%Knight Number%";

		// cardText_4
		const cardText_4 = this.add.text(1215, 528, "", {});
		cardText_4.text = "%Qween Number%";

		// cardWhiteKnight
		const cardWhiteKnight = this.add.image(1216, 42, "cardWhiteKnight");
		cardWhiteKnight.visible = false;
		cardWhiteKnight.tintTopLeft = 16655612;
		cardWhiteKnight.tintTopRight = 10551553;

		// text_1
		const text_1 = this.add.text(77, 609, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.text = "A";
		text_1.setStyle({ "fontSize": "36px" });

		// text
		const text = this.add.text(147, 609, "", {});
		text.setOrigin(0.5, 0);
		text.text = "B";
		text.setStyle({ "fontSize": "36px" });

		// text_2
		const text_2 = this.add.text(217, 609, "", {});
		text_2.setOrigin(0.5, 0);
		text_2.text = "C";
		text_2.setStyle({ "fontSize": "36px" });

		// text_3
		const text_3 = this.add.text(287, 609, "", {});
		text_3.setOrigin(0.5, 0);
		text_3.text = "D";
		text_3.setStyle({ "fontSize": "36px" });

		// text_4
		const text_4 = this.add.text(357, 609, "", {});
		text_4.setOrigin(0.5, 0);
		text_4.text = "E";
		text_4.setStyle({ "fontSize": "36px" });

		// text_5
		const text_5 = this.add.text(427, 609, "", {});
		text_5.setOrigin(0.5, 0);
		text_5.text = "F";
		text_5.setStyle({ "fontSize": "36px" });

		// text_6
		const text_6 = this.add.text(497, 609, "", {});
		text_6.setOrigin(0.5, 0);
		text_6.text = "G";
		text_6.setStyle({ "fontSize": "36px" });

		// text_7
		const text_7 = this.add.text(567, 609, "", {});
		text_7.setOrigin(0.5, 0);
		text_7.text = "H";
		text_7.setStyle({ "fontSize": "36px" });

		// text_15
		const text_15 = this.add.text(22, 570, "", {});
		text_15.setOrigin(0.5, 0.5);
		text_15.text = "1";
		text_15.setStyle({ "fontSize": "36px" });

		// text_14
		const text_14 = this.add.text(22, 500, "", {});
		text_14.setOrigin(0.5, 0.5);
		text_14.text = "2";
		text_14.setStyle({ "fontSize": "36px" });

		// text_13
		const text_13 = this.add.text(22, 430, "", {});
		text_13.setOrigin(0.5, 0.5);
		text_13.text = "3";
		text_13.setStyle({ "fontSize": "36px" });

		// text_12
		const text_12 = this.add.text(22, 360, "", {});
		text_12.setOrigin(0.5, 0.5);
		text_12.text = "4";
		text_12.setStyle({ "fontSize": "36px" });

		// text_11
		const text_11 = this.add.text(22, 290, "", {});
		text_11.setOrigin(0.5, 0.5);
		text_11.text = "5";
		text_11.setStyle({ "fontSize": "36px" });

		// text_10
		const text_10 = this.add.text(22, 220, "", {});
		text_10.setOrigin(0.5, 0.5);
		text_10.text = "6";
		text_10.setStyle({ "fontSize": "36px" });

		// text_9
		const text_9 = this.add.text(22, 150, "", {});
		text_9.setOrigin(0.5, 0.5);
		text_9.text = "7";
		text_9.setStyle({ "fontSize": "36px" });

		// text_8
		const text_8 = this.add.text(22, 80, "", {});
		text_8.setOrigin(0.5, 0.5);
		text_8.text = "8";
		text_8.setStyle({ "fontSize": "36px" });

		// cardIdVar
		const cardIdVar = new CardIdVar(this, 1264, 16);
		this.add.existing(cardIdVar);

		// pTBlackBishop
		const pTBlackBishop = new PTBlackBishop(this, 721, 480);
		this.add.existing(pTBlackBishop);
		pTBlackBishop.scaleX = 0;
		pTBlackBishop.scaleY = 1;

		// pTBlackRoock
		const pTBlackRoock = new PTBlackRoock(this, 721, 382);
		this.add.existing(pTBlackRoock);
		pTBlackRoock.scaleX = 0;
		pTBlackRoock.scaleY = 1;

		// pTBlackKnight
		const pTBlackKnight = new PTBlackKnight(this, 721, 284);
		this.add.existing(pTBlackKnight);
		pTBlackKnight.scaleX = 0;
		pTBlackKnight.scaleY = 1;

		// pTBlackQueen
		const pTBlackQueen = new PTBlackQueen(this, 721, 178);
		this.add.existing(pTBlackQueen);
		pTBlackQueen.scaleX = 0;
		pTBlackQueen.scaleY = 1;

		// pTWhiteBishop
		const pTWhiteBishop = new PTWhiteBishop(this, 721, 480);
		this.add.existing(pTWhiteBishop);
		pTWhiteBishop.scaleX = 0;
		pTWhiteBishop.scaleY = 1;

		// pTWhiteRoock
		const pTWhiteRoock = new PTWhiteRoock(this, 721, 382);
		this.add.existing(pTWhiteRoock);
		pTWhiteRoock.scaleX = 0;
		pTWhiteRoock.scaleY = 1;

		// pTWhiteKnight
		const pTWhiteKnight = new PTWhiteKnight(this, 721, 284);
		this.add.existing(pTWhiteKnight);
		pTWhiteKnight.scaleX = 0;
		pTWhiteKnight.scaleY = 1;

		// pTWhiteQueen
		const pTWhiteQueen = new PTWhiteQueen(this, 721, 178);
		this.add.existing(pTWhiteQueen);
		pTWhiteQueen.scaleX = 0;
		pTWhiteQueen.scaleY = 1;

		// blackTile_1
		const blackTile_1 = this.add.image(721, 480, "blackTile");
		blackTile_1.scaleX = 15.600415167885103;
		blackTile_1.scaleY = 9.85;
		blackTile_1.alpha = 0.6;
		blackTile_1.alphaTopLeft = 0.6;
		blackTile_1.alphaTopRight = 0.6;
		blackTile_1.alphaBottomLeft = 0.6;
		blackTile_1.alphaBottomRight = 0.6;

		// blackTile_2
		const blackTile_2 = this.add.image(721, 382, "blackTile");
		blackTile_2.scaleX = 15.600415167885103;
		blackTile_2.scaleY = 9.781727169244308;
		blackTile_2.alpha = 0.6;
		blackTile_2.alphaTopLeft = 0.6;
		blackTile_2.alphaTopRight = 0.6;
		blackTile_2.alphaBottomLeft = 0.6;
		blackTile_2.alphaBottomRight = 0.6;

		// blackTile_3
		const blackTile_3 = this.add.image(721, 284, "blackTile");
		blackTile_3.scaleX = 15.600415167885103;
		blackTile_3.scaleY = 9.781727169244308;
		blackTile_3.alpha = 0.6;
		blackTile_3.alphaTopLeft = 0.6;
		blackTile_3.alphaTopRight = 0.6;
		blackTile_3.alphaBottomLeft = 0.6;
		blackTile_3.alphaBottomRight = 0.6;

		// blackTile_4
		const blackTile_4 = this.add.image(721, 178, "blackTile");
		blackTile_4.scaleX = 15.600415167885103;
		blackTile_4.scaleY = 11.450615277574254;
		blackTile_4.alpha = 0.6;
		blackTile_4.alphaTopLeft = 0.6;
		blackTile_4.alphaTopRight = 0.6;
		blackTile_4.alphaBottomLeft = 0.6;
		blackTile_4.alphaBottomRight = 0.6;

		// text_16
		const text_16 = this.add.text(865, 194, "", {});
		text_16.visible = false;
		text_16.text = "%Bishop%";

		// text_17
		const text_17 = this.add.text(978, 194, "", {});
		text_17.visible = false;
		text_17.text = "%Roock%";

		// text_18
		const text_18 = this.add.text(1089, 194, "", {});
		text_18.visible = false;
		text_18.text = "%Knight%";

		// text_19
		const text_19 = this.add.text(1204, 194, "", {});
		text_19.visible = false;
		text_19.text = "%Queen%";

		// currentTurnColor
		const currentTurnColor = this.add.text(640, 0, "", {});
		currentTurnColor.setOrigin(0.5, 0);
		currentTurnColor.text = "%Color Playing%";
		currentTurnColor.setStyle({ "align": "center", "backgroundColor": "", "fixedHeight":46,"fontSize": "46px", "shadow.offsetY":-2,"shadow.color": "#13214177", "shadow.fill":true});

		// shardBishopBottom
		const shardBishopBottom = new ShardBottom(this, 878, 235, "mefrfr");
		this.add.existing(shardBishopBottom);
		shardBishopBottom.visible = false;

		// shardBishopTop
		const shardBishopTop = new ShardTop(this, 875, 147, "mefrfr");
		this.add.existing(shardBishopTop);
		shardBishopTop.scaleX = 1;
		shardBishopTop.scaleY = 1;
		shardBishopTop.visible = false;

		// shardRoockBottom
		const shardRoockBottom = new ShardBottom(this, 988, 235);
		this.add.existing(shardRoockBottom);
		shardRoockBottom.visible = false;

		// shardRoockTop
		const shardRoockTop = new ShardTop(this, 988, 147);
		this.add.existing(shardRoockTop);
		shardRoockTop.visible = false;

		// shardKnightBottom
		const shardKnightBottom = new ShardBottom(this, 1102, 235);
		this.add.existing(shardKnightBottom);
		shardKnightBottom.visible = false;

		// shardKnightTop
		const shardKnightTop = new ShardTop(this, 1101, 147);
		this.add.existing(shardKnightTop);
		shardKnightTop.visible = false;

		// shardQueenBottom
		const shardQueenBottom = new ShardBottom(this, 1216, 259);
		this.add.existing(shardQueenBottom);
		shardQueenBottom.visible = false;

		// shardMiddle
		const shardMiddle = new ShardMiddle(this, 1217, 202);
		this.add.existing(shardMiddle);
		shardMiddle.visible = false;

		// shardQueenTop
		const shardQueenTop = new ShardTop(this, 1216, 133);
		this.add.existing(shardQueenTop);
		shardQueenTop.visible = false;

		// lists
		const tiles = [tile_64, tile_1, tile_2, tile_3, tile_4, tile_5, tile_6, tile_7, tile_8, tile_9, tile_10, tile_11, tile_12, tile_13, tile_14, tile_15, tile_16, tile_17, tile_18, tile_19, tile_20, tile_21, tile_22, tile_23, tile_24, tile_25, tile_26, tile_27, tile_28, tile_29, tile_30, tile_31, tile_32, tile_33, tile_34, tile_35, tile_36, tile_37, tile_38, tile_39, tile_40, tile_41, tile_42, tile_43, tile_44, tile_45, tile_46, tile_47, tile_48, tile_49, tile_50, tile_51, tile_52, tile_53, tile_54, tile_55, tile_56, tile_57, tile_58, tile_59, tile_60, tile_61, tile_62, tile_63];
		const shardBackground = [shardBackground_1, shardBackground_2, shardBackground_3, shardBackground_4];
		const card = [cardPlaceholder_1, cardPlaceholder_2, cardPlaceholder_3, cardPlaceholder_4];
		const cardBackground = [cardBackground_1, cardBackground_2, cardBackground_3, cardBackground_4];
		const cardText = [cardText_1, cardText_2, cardText_3, cardText_4];
		const letters = [text_1, text, text_2, text_3, text_4, text_5, text_6, text_7];
		const numbers = [text_15, text_14, text_13, text_12, text_11, text_10, text_9, text_8];
		const promotionTiersBlack = [pTBlackBishop, pTBlackRoock, pTBlackKnight, pTBlackQueen];
		const promotionTiersWhite = [pTWhiteBishop, pTWhiteRoock, pTWhiteKnight, pTWhiteQueen];
		const promotionTiersBackground = [blackTile_1, blackTile_2, blackTile_3, blackTile_4];
		const shardsText = [text_16, text_17, text_18, text_19];
		const shardsBishop = [shardBishopTop, shardBishopBottom];
		const shardsRoock = [shardRoockTop, shardRoockBottom];
		const shardsKnight = [shardKnightTop, shardKnightBottom];
		const shardsQueen = [shardQueenTop, shardMiddle, shardQueenBottom];

		// tile_64 (prefab fields)
		tile_64.tileId = 64;

		// tile_63 (prefab fields)
		tile_63.tileId = 63;

		// tile_62 (prefab fields)
		tile_62.tileId = 62;

		// tile_61 (prefab fields)
		tile_61.tileId = 61;

		// tile_60 (prefab fields)
		tile_60.tileId = 60;

		// tile_59 (prefab fields)
		tile_59.tileId = 59;

		// tile_58 (prefab fields)
		tile_58.tileId = 58;

		// tile_57 (prefab fields)
		tile_57.tileId = 57;

		// tile_56 (prefab fields)
		tile_56.tileId = 56;

		// tile_55 (prefab fields)
		tile_55.tileId = 55;

		// tile_54 (prefab fields)
		tile_54.tileId = 54;

		// tile_53 (prefab fields)
		tile_53.tileId = 53;

		// tile_52 (prefab fields)
		tile_52.tileId = 52;

		// tile_51 (prefab fields)
		tile_51.tileId = 51;

		// tile_50 (prefab fields)
		tile_50.tileId = 50;

		// tile_49 (prefab fields)
		tile_49.tileId = 49;

		// tile_48 (prefab fields)
		tile_48.tileId = 48;

		// tile_47 (prefab fields)
		tile_47.tileId = 47;

		// tile_46 (prefab fields)
		tile_46.tileId = 46;

		// tile_45 (prefab fields)
		tile_45.tileId = 45;

		// tile_44 (prefab fields)
		tile_44.tileId = 44;

		// tile_43 (prefab fields)
		tile_43.tileId = 43;

		// tile_42 (prefab fields)
		tile_42.tileId = 42;

		// tile_41 (prefab fields)
		tile_41.tileId = 41;

		// tile_40 (prefab fields)
		tile_40.tileId = 40;

		// tile_39 (prefab fields)
		tile_39.tileId = 39;

		// tile_38 (prefab fields)
		tile_38.tileId = 38;

		// tile_37 (prefab fields)
		tile_37.tileId = 37;

		// tile_36 (prefab fields)
		tile_36.tileId = 36;

		// tile_35 (prefab fields)
		tile_35.tileId = 35;

		// tile_34 (prefab fields)
		tile_34.tileId = 34;

		// tile_33 (prefab fields)
		tile_33.tileId = 33;

		// tile_32 (prefab fields)
		tile_32.tileId = 32;

		// tile_31 (prefab fields)
		tile_31.tileId = 31;

		// tile_30 (prefab fields)
		tile_30.tileId = 30;

		// tile_29 (prefab fields)
		tile_29.tileId = 29;

		// tile_28 (prefab fields)
		tile_28.tileId = 28;

		// tile_27 (prefab fields)
		tile_27.tileId = 27;

		// tile_26 (prefab fields)
		tile_26.tileId = 26;

		// tile_25 (prefab fields)
		tile_25.tileId = 25;

		// tile_24 (prefab fields)
		tile_24.tileId = 24;

		// tile_23 (prefab fields)
		tile_23.tileId = 23;

		// tile_22 (prefab fields)
		tile_22.tileId = 22;

		// tile_21 (prefab fields)
		tile_21.tileId = 21;

		// tile_20 (prefab fields)
		tile_20.tileId = 20;

		// tile_19 (prefab fields)
		tile_19.tileId = 19;

		// tile_18 (prefab fields)
		tile_18.tileId = 18;

		// tile_17 (prefab fields)
		tile_17.tileId = 17;

		// tile_16 (prefab fields)
		tile_16.tileId = 16;

		// tile_15 (prefab fields)
		tile_15.tileId = 15;

		// tile_14 (prefab fields)
		tile_14.tileId = 14;

		// tile_13 (prefab fields)
		tile_13.tileId = 13;

		// tile_12 (prefab fields)
		tile_12.tileId = 12;

		// tile_11 (prefab fields)
		tile_11.tileId = 11;

		// tile_10 (prefab fields)
		tile_10.tileId = 10;

		// tile_9 (prefab fields)
		tile_9.tileId = 9;

		// tile_8 (prefab fields)
		tile_8.tileId = 8;

		// tile_7 (prefab fields)
		tile_7.tileId = 7;

		// tile_6 (prefab fields)
		tile_6.tileId = 6;

		// tile_5 (prefab fields)
		tile_5.tileId = 5;

		// tile_4 (prefab fields)
		tile_4.tileId = 4;

		// tile_3 (prefab fields)
		tile_3.tileId = 3;

		// tile_2 (prefab fields)
		tile_2.tileId = 2;

		// tile_1 (prefab fields)
		tile_1.tileId = 1;

		// cardPlaceholder_1 (prefab fields)
		cardPlaceholder_1.cardId = 1;

		// cardPlaceholder_2 (prefab fields)
		cardPlaceholder_2.cardId = 2;

		// cardPlaceholder_3 (prefab fields)
		cardPlaceholder_3.cardId = 3;

		// cardPlaceholder_4 (prefab fields)
		cardPlaceholder_4.cardId = 4;

		// shardBishopBottom (prefab fields)
		shardBishopBottom.index = 0;

		// shardBishopTop (prefab fields)
		shardBishopTop.index = 2;

		// shardRoockBottom (prefab fields)
		shardRoockBottom.index = 0;

		// shardRoockTop (prefab fields)
		shardRoockTop.index = 2;

		// shardKnightBottom (prefab fields)
		shardKnightBottom.index = 0;

		// shardKnightTop (prefab fields)
		shardKnightTop.index = 2;

		// shardQueenBottom (prefab fields)
		shardQueenBottom.index = 0;

		// shardMiddle (prefab fields)
		shardMiddle.index = 1;

		// shardQueenTop (prefab fields)
		shardQueenTop.index = 2;

		this.advName = advName;
		this.userName = userName;
		this.tile_64 = tile_64;
		this.tile_63 = tile_63;
		this.tile_62 = tile_62;
		this.tile_61 = tile_61;
		this.tile_60 = tile_60;
		this.tile_59 = tile_59;
		this.tile_58 = tile_58;
		this.tile_57 = tile_57;
		this.tile_56 = tile_56;
		this.tile_55 = tile_55;
		this.tile_54 = tile_54;
		this.tile_53 = tile_53;
		this.tile_52 = tile_52;
		this.tile_51 = tile_51;
		this.tile_50 = tile_50;
		this.tile_49 = tile_49;
		this.tile_48 = tile_48;
		this.tile_47 = tile_47;
		this.tile_46 = tile_46;
		this.tile_45 = tile_45;
		this.tile_44 = tile_44;
		this.tile_43 = tile_43;
		this.tile_42 = tile_42;
		this.tile_41 = tile_41;
		this.tile_40 = tile_40;
		this.tile_39 = tile_39;
		this.tile_38 = tile_38;
		this.tile_37 = tile_37;
		this.tile_36 = tile_36;
		this.tile_35 = tile_35;
		this.tile_34 = tile_34;
		this.tile_33 = tile_33;
		this.tile_32 = tile_32;
		this.tile_31 = tile_31;
		this.tile_30 = tile_30;
		this.tile_29 = tile_29;
		this.tile_28 = tile_28;
		this.tile_27 = tile_27;
		this.tile_26 = tile_26;
		this.tile_25 = tile_25;
		this.tile_24 = tile_24;
		this.tile_23 = tile_23;
		this.tile_22 = tile_22;
		this.tile_21 = tile_21;
		this.tile_20 = tile_20;
		this.tile_19 = tile_19;
		this.tile_18 = tile_18;
		this.tile_17 = tile_17;
		this.tile_16 = tile_16;
		this.tile_15 = tile_15;
		this.tile_14 = tile_14;
		this.tile_13 = tile_13;
		this.tile_12 = tile_12;
		this.tile_11 = tile_11;
		this.tile_10 = tile_10;
		this.tile_9 = tile_9;
		this.tile_8 = tile_8;
		this.tile_7 = tile_7;
		this.tile_6 = tile_6;
		this.tile_5 = tile_5;
		this.tile_4 = tile_4;
		this.tile_3 = tile_3;
		this.tile_2 = tile_2;
		this.tile_1 = tile_1;
		this.tilesContainer = tilesContainer;
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
		this.cardIdVar = cardIdVar;
		this.pTBlackBishop = pTBlackBishop;
		this.pTBlackRoock = pTBlackRoock;
		this.pTBlackKnight = pTBlackKnight;
		this.pTBlackQueen = pTBlackQueen;
		this.pTWhiteBishop = pTWhiteBishop;
		this.pTWhiteRoock = pTWhiteRoock;
		this.pTWhiteKnight = pTWhiteKnight;
		this.pTWhiteQueen = pTWhiteQueen;
		this.blackTile_1 = blackTile_1;
		this.blackTile_2 = blackTile_2;
		this.blackTile_3 = blackTile_3;
		this.blackTile_4 = blackTile_4;
		this.text_16 = text_16;
		this.text_17 = text_17;
		this.text_18 = text_18;
		this.text_19 = text_19;
		this.currentTurnColor = currentTurnColor;
		this.shardBishopBottom = shardBishopBottom;
		this.shardBishopTop = shardBishopTop;
		this.shardRoockBottom = shardRoockBottom;
		this.shardRoockTop = shardRoockTop;
		this.shardKnightBottom = shardKnightBottom;
		this.shardKnightTop = shardKnightTop;
		this.shardQueenBottom = shardQueenBottom;
		this.shardQueenTop = shardQueenTop;
		this.tiles = tiles;
		this.shardBackground = shardBackground;
		this.card = card;
		this.cardBackground = cardBackground;
		this.cardText = cardText;
		this.letters = letters;
		this.numbers = numbers;
		this.promotionTiersBlack = promotionTiersBlack;
		this.promotionTiersWhite = promotionTiersWhite;
		this.promotionTiersBackground = promotionTiersBackground;
		this.shardsText = shardsText;
		this.shardsBishop = shardsBishop;
		this.shardsRoock = shardsRoock;
		this.shardsKnight = shardsKnight;
		this.shardsQueen = shardsQueen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	advName;
	/** @type {Phaser.GameObjects.Text} */
	userName;
	/** @type {Black_Tile} */
	tile_64;
	/** @type {White_Tile} */
	tile_63;
	/** @type {Black_Tile} */
	tile_62;
	/** @type {White_Tile} */
	tile_61;
	/** @type {Black_Tile} */
	tile_60;
	/** @type {White_Tile} */
	tile_59;
	/** @type {Black_Tile} */
	tile_58;
	/** @type {White_Tile} */
	tile_57;
	/** @type {White_Tile} */
	tile_56;
	/** @type {Black_Tile} */
	tile_55;
	/** @type {White_Tile} */
	tile_54;
	/** @type {Black_Tile} */
	tile_53;
	/** @type {White_Tile} */
	tile_52;
	/** @type {Black_Tile} */
	tile_51;
	/** @type {White_Tile} */
	tile_50;
	/** @type {Black_Tile} */
	tile_49;
	/** @type {Black_Tile} */
	tile_48;
	/** @type {White_Tile} */
	tile_47;
	/** @type {Black_Tile} */
	tile_46;
	/** @type {White_Tile} */
	tile_45;
	/** @type {Black_Tile} */
	tile_44;
	/** @type {White_Tile} */
	tile_43;
	/** @type {Black_Tile} */
	tile_42;
	/** @type {White_Tile} */
	tile_41;
	/** @type {White_Tile} */
	tile_40;
	/** @type {Black_Tile} */
	tile_39;
	/** @type {White_Tile} */
	tile_38;
	/** @type {Black_Tile} */
	tile_37;
	/** @type {White_Tile} */
	tile_36;
	/** @type {Black_Tile} */
	tile_35;
	/** @type {White_Tile} */
	tile_34;
	/** @type {Black_Tile} */
	tile_33;
	/** @type {Black_Tile} */
	tile_32;
	/** @type {White_Tile} */
	tile_31;
	/** @type {Black_Tile} */
	tile_30;
	/** @type {White_Tile} */
	tile_29;
	/** @type {Black_Tile} */
	tile_28;
	/** @type {White_Tile} */
	tile_27;
	/** @type {Black_Tile} */
	tile_26;
	/** @type {White_Tile} */
	tile_25;
	/** @type {White_Tile} */
	tile_24;
	/** @type {Black_Tile} */
	tile_23;
	/** @type {White_Tile} */
	tile_22;
	/** @type {Black_Tile} */
	tile_21;
	/** @type {White_Tile} */
	tile_20;
	/** @type {Black_Tile} */
	tile_19;
	/** @type {White_Tile} */
	tile_18;
	/** @type {Black_Tile} */
	tile_17;
	/** @type {Black_Tile} */
	tile_16;
	/** @type {White_Tile} */
	tile_15;
	/** @type {Black_Tile} */
	tile_14;
	/** @type {White_Tile} */
	tile_13;
	/** @type {Black_Tile} */
	tile_12;
	/** @type {White_Tile} */
	tile_11;
	/** @type {Black_Tile} */
	tile_10;
	/** @type {White_Tile} */
	tile_9;
	/** @type {White_Tile} */
	tile_8;
	/** @type {Black_Tile} */
	tile_7;
	/** @type {White_Tile} */
	tile_6;
	/** @type {Black_Tile} */
	tile_5;
	/** @type {White_Tile} */
	tile_4;
	/** @type {Black_Tile} */
	tile_3;
	/** @type {White_Tile} */
	tile_2;
	/** @type {Black_Tile} */
	tile_1;
	/** @type {Phaser.GameObjects.Container} */
	tilesContainer;
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
	/** @type {CardIdVar} */
	cardIdVar;
	/** @type {PTBlackBishop} */
	pTBlackBishop;
	/** @type {PTBlackRoock} */
	pTBlackRoock;
	/** @type {PTBlackKnight} */
	pTBlackKnight;
	/** @type {PTBlackQueen} */
	pTBlackQueen;
	/** @type {PTWhiteBishop} */
	pTWhiteBishop;
	/** @type {PTWhiteRoock} */
	pTWhiteRoock;
	/** @type {PTWhiteKnight} */
	pTWhiteKnight;
	/** @type {PTWhiteQueen} */
	pTWhiteQueen;
	/** @type {Phaser.GameObjects.Image} */
	blackTile_1;
	/** @type {Phaser.GameObjects.Image} */
	blackTile_2;
	/** @type {Phaser.GameObjects.Image} */
	blackTile_3;
	/** @type {Phaser.GameObjects.Image} */
	blackTile_4;
	/** @type {Phaser.GameObjects.Text} */
	text_16;
	/** @type {Phaser.GameObjects.Text} */
	text_17;
	/** @type {Phaser.GameObjects.Text} */
	text_18;
	/** @type {Phaser.GameObjects.Text} */
	text_19;
	/** @type {Phaser.GameObjects.Text} */
	currentTurnColor;
	/** @type {ShardBottom} */
	shardBishopBottom;
	/** @type {ShardTop} */
	shardBishopTop;
	/** @type {ShardBottom} */
	shardRoockBottom;
	/** @type {ShardTop} */
	shardRoockTop;
	/** @type {ShardBottom} */
	shardKnightBottom;
	/** @type {ShardTop} */
	shardKnightTop;
	/** @type {ShardBottom} */
	shardQueenBottom;
	/** @type {ShardTop} */
	shardQueenTop;
	/** @type {Array<Black_Tile|White_Tile>} */
	tiles;
	/** @type {Phaser.GameObjects.Image[]} */
	shardBackground;
	/** @type {Card[]} */
	card;
	/** @type {Phaser.GameObjects.Image[]} */
	cardBackground;
	/** @type {Phaser.GameObjects.Text[]} */
	cardText;
	/** @type {Phaser.GameObjects.Text[]} */
	letters;
	/** @type {Phaser.GameObjects.Text[]} */
	numbers;
	/** @type {Array<PTBlackBishop|PTBlackRoock|PTBlackKnight|PTBlackQueen>} */
	promotionTiersBlack;
	/** @type {Array<PTWhiteBishop|PTWhiteRoock|PTWhiteKnight|PTWhiteQueen>} */
	promotionTiersWhite;
	/** @type {Phaser.GameObjects.Image[]} */
	promotionTiersBackground;
	/** @type {Phaser.GameObjects.Text[]} */
	shardsText;
	/** @type {Array<ShardTop|ShardBottom>} */
	shardsBishop;
	/** @type {Array<ShardTop|ShardBottom>} */
	shardsRoock;
	/** @type {Array<ShardTop|ShardBottom>} */
	shardsKnight;
	/** @type {Array<ShardTop|ShardMiddle|ShardBottom>} */
	shardsQueen;

	/* START-USER-CODE */



	updateGameState(playerID, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				if (xhttp.status == 200) {
					// Parse the JSON response
					var gameState = JSON.parse(xhttp.responseText);

					//Displays who's turn is it and changes color accordingly
					//could be moved inside the following for so that the user can also see somehting like "White's turn(you)" or "Black's turn(opponent)"
					if(gameState[0].match_pc_id == 1){ //White

						//changes color
						this.currentTurnColor.setColor("#fff7bbff");
						//changes text	
						this.currentTurnColor.text = "White's turn";

					} else if (gameState[0].match_pc_id == 2){//Black

						//changes color
						this.currentTurnColor.setColor("#7f00f8ff");	
						//changes text					
						this.currentTurnColor.text = "Black's turn";

					}

					//Defines the player color and assigns it it's defined assets or rotation
					for (let i = 0; i < gameState.length; i++) {
						if (playerID == gameState[i].player_id) {
							if (gameState[i].mp_pc_id == 1) {
								//Functions for the white
								this.tilesContainer.angle = 0;

								//sets up the name according to position
								//top = black
								this.advName.text = gameState[1].player_name;
								this.advName.setColor("#7f00f8ff");

								//bot = white
								this.userName.text = gameState[0].player_name;
								this.userName.setColor("#fff7bbff");


								//Display Promotion Tiers
								//begins with initializing the id and it's img
								this.pTDisplay(gameState[i].mp_ut_id, gameState[i].pc_name, gameState[i].mp_pc_id, this.promotionTiersWhite);


							} else if (gameState[i].mp_pc_id == 2) {
								//Functions for the black
								this.tilesContainer.angle = -180;

								//sets up the name accordingly to position
								//top = white
								this.advName.text = gameState[0].player_name;
								this.advName.setColor("#fff7bbff");

								//bottom = black
								this.userName.text = gameState[1].player_name;
								this.userName.setColor("#7f00f8ff");

								//inversion of side letters and numbers according to color.

								this.reversingNumbers(this.numbers);
								this.reversingLetter(this.letters);
								// this.numbers.reverse();
								// this.letters.reverse();

								//Display Promotion Tiers
								//begins with initializing the id and it's img
								this.pTDisplay(gameState[i].mp_ut_id, gameState[i].pc_name, gameState[i].mp_pc_id, this.promotionTiersBlack);
							}
						}
					}

					callback(gameState);
				} else {
					console.error('Error fetching game state');
				}
			}
		};

		// Send a GET request to the server (just testing with /match/11 endpoint)
		xhttp.open("GET", "../state/game/1", true);
		xhttp.send();
	}

	reversingLetter(arr){
		let j = arr.length - 1;
		let arrLetters = ["A", "B", "C", "D","E", "F", "G", "H"];

		for (let i = 0; i < arr.length; i++) {

			arr[i].text = arrLetters[j];
			j--;
		}
	}

	reversingNumbers(arr){
		let j = arr.length - 1;
		let arrNumbers =  [1, 2, 3, 4, 5, 6, 7,8];

		for (let i = 0; i < arr.length; i++) {
			arr[i].text = arrNumbers[j];
			j--;
		}
	}

	updateBoardState(gameState, playerID, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				if (xhttp.status == 200) {
					// Parse the JSON response
					var boardState = JSON.parse(xhttp.responseText);

					boardState.forEach(state => {
						const tileElement = this.tiles.find(tile => tile.tileId === state.tile_id);
						if (tileElement) {
							switch (state.mpp_piece_id) {
								case 1:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteBishop);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackBishop);
									}
									break;
								case 2:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteRook);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackRook);
									}
									break;
								case 3:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteKnight);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackKnight);
									}
									break;
								case 4:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteQueen);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackQueen);
									}
									break;
								case 5:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhitePawn);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackPawn);
									}
									break;
								case 6:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteKing);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackKing);
									}
									break;
							}
						}
					});

					callback(boardState);
				} else {
					console.error('Error fetching board state');
				}
			}
		};

		// Send a GET request to the server (just testing with /match/1 endpoint)
		xhttp.open("GET", "../state/boardR/1", true);
		xhttp.send();
	}

	cardClicked() {
		this.card.forEach(element => {
			//console.log(element);
			element.worm.setInteractive(); // Ensure the element is interactive
			element.worm.on("pointerdown", () => {
				//changes the value of the beanz
				if(this.cardIdVar.cardId != element.cardId){

					this.cardIdVar.cardId = element.cardId;

					//greyout function
					this.cardGreyOut(element);
					//debug line
					console.log('Card id saved on the beanz: ' + this.cardIdVar.cardId + " / card_id property: " + element.cardId);

				}else{

					//highlight function
					this.cardUnGreyOut();
					this.cardIdVar.cardId = 0;
					console.log('Card id reset on the beanz: ' + this.cardIdVar.cardId);
				}
				//Not selected cards could be shadowed.


				// Debugging lines

				// this.cardRequest();
			});
		});
	}

	tileClicked(playerID) {
		let possibleMoves;
		let cardId = 0;

		// Loop through each tile in the 'tiles' array
		for (let index = 0; index < this.tiles.length; index++) {
			// Get the current tile element at the 'index' position
			const element = this.tiles[index];

			// Add an event listener to the tile for the 'pointerdown' event
			element.setInteractive();
			element.on("pointerdown", event => {
				this.updateGameState(playerID, (gameState) => {
					this.updateBoardState(gameState, playerID, (boardState) => {
						// Extract the number from the tile's name using the 'extractNumberFromString' function
						var tileId = element.tileId;


						this.tiles.forEach(element => {
							const children = element.getAll();
							const childToDestroyInHell = children.find(child => child.name === 'dot' || child.name === 'redSquare');
							if (childToDestroyInHell) {
								childToDestroyInHell.destroy();
								element.remove(childToDestroyInHell);
							}
						});


						for (let i = 0; i < boardState.length; i++) {
							var k = i + 1;

							//console.log(gameState);
							var gameStateForPlayer = gameState.find(state => state.player_id == playerID);

							if (boardState[i].mpp_ps_id && k == tileId && boardState[i].playerID == playerID && gameStateForPlayer.match_pc_id == gameStateForPlayer.mp_pc_id) {

								//Promotion section
								// if(cardId == this.cardIdVar.cardId){
								// 	this.cardIdVar.cardId = 0;
								// 	console.log("Card deselected");
								// }else{
									cardId = this.cardIdVar.cardId;
									if (cardId != 0) {
										var coordinates = numberToCoordinates(tileId)
										this.promotion(coordinates.x, coordinates.y, cardId, playerID);

										this.cardIdVar.cardId = 0;
										break;
										//highlight all the other cards
									}else{
										console.log("no promotion. SELECT a Card first.");
									}
									this.cardIdVar.cardId = 0;
								// }
								//end promotion section


								//Movement section
								if (!possibleMoves) {
									// If it was, check all the possible moves that the piece on the tile selected can do
									var xPosition = boardState[i].x;
									var yPosition = boardState[i].y;
									var pieceType = boardState[i].mpp_piece_id;
									possibleMoves = getPossibleMoves(xPosition, yPosition, pieceType, boardState);
									for (let i = 0; i < possibleMoves.length; i++) {
										for (let k = 0; k < this.tiles.length; k++) {
											// Get the current tile element at the 'index' position
											const element = this.tiles[k];

											// Extract the number from the tile's name using the 'extractNumberFromString' function
											var tileId = element.tileId;
											var tilePosition = numberToCoordinates(tileId);
											if (tilePosition.x == possibleMoves[i].x && tilePosition.y == possibleMoves[i].y) {
												if (!possibleMoves[i].enemyOnTheWay) {
													const visualPossibleMoves = new Dot(this, 0, 0);
													this.add.existing(visualPossibleMoves);
													element.add(visualPossibleMoves);
												} else {
													const killingArea = new redSquare(this, 0, 0);
													this.add.existing(killingArea);
													element.add(killingArea);
												}
											}
										}
									}

									possibleMoves.push({ x: xPosition, y: yPosition });
									console.log("1st Tile Selected: ", possibleMoves);
								} else {
									// If not, set the array back to null so a new tile can be selected
										possibleMoves = this.makeMove(possibleMoves, tileId, playerID);
								}
								break;
							}
							// Check if the user selected a tile before
							if (possibleMoves) {
								possibleMoves = this.makeMove(possibleMoves, tileId, playerID);
							}
						}
					});
				});
			});
		}
	}



	makeMove(possibleMoves, numbFromImage, playerID) {
		var cordinates = numberToCoordinates(numbFromImage);
		for (let i = 0; i < possibleMoves.length; i++) {
			// console.log(possibleMoves[i].x , possibleMoves[i].y)
			if (possibleMoves[i].x == cordinates.x && possibleMoves[i].y == cordinates.y && (possibleMoves[possibleMoves.length - 1].x != cordinates.x || possibleMoves[possibleMoves.length - 1].y != cordinates.y)) {

				// Construct JSON object with form data
				var data = {
					startX: possibleMoves[possibleMoves.length - 1].x,
					startY: possibleMoves[possibleMoves.length - 1].y,
					endX: cordinates.x,
					endY: cordinates.y,
					matchId: 1
				};

				// Create an XMLHttpRequest object
				var xhttp = new XMLHttpRequest();
				// Define the callback function to handle the response
				xhttp.onreadystatechange = () => { // Use arrow function to maintain `this` context
					if (xhttp.readyState == 4) { // When the request is complete
						if (xhttp.status == 200) { // If the request was successful
							// Get the response from the server
							var response = xhttp.responseText;

							this.tilesContainer.list
							.filter(child => !child.name.startsWith('Tile_')) // Ignore 'Tile_X' elements
							.forEach(child => {
								child.destroy();
								// Ensure you have a reference to the parent container to remove the child
								this.tilesContainer.remove(child);

							});			

							this.updateGameState(playerID, (gameState) => {
								this.updateBoardState(gameState, playerID, (boardState) => {});
							});

							console.log("Move from ", possibleMoves[possibleMoves.length - 1].x, possibleMoves[possibleMoves.length - 1].y, " to position ", cordinates.x, cordinates.y);
							console.log(response);
							return possibleMoves = undefined;

						}
					}
				};

				// Configure the XMLHttpRequest object
				xhttp.open("POST", "/piece/move", true); // Specify the method and URL
				xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Set the request header
				xhttp.send(JSON.stringify(data)); // Send JSON data to the server

			}
		}

		//Dunkey endpoint should be called
	}

	promotion(currentX, currentY, cardId, playerID){

		var promotionData = {
			startX: currentX,
			startY: currentY,
			cardId: cardId,
			matchId: 1
		}


		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					// Parse the JSON response
					this.tilesContainer.list
						.filter(child => !child.name.startsWith('Tile_')) // Ignore 'Tile_X' elements
						.forEach(child => {
							child.destroy();
							// Ensure you have a reference to the parent container to remove the child
							this.tilesContainer.remove(child);

					});

					this.updateGameState(playerID, (gameState) => {
						this.updateBoardState(gameState, playerID, (boardState) => {});
					});

					console.log("Piece Promoted to: " + cardId + " on Position(" + currentX + ", " + currentY + ").");
				}
			};

			// Send a GET request to the server, need a way to get the playerId from the  coockies or when the match is accessed
			xhttp.open("POST", "/piece/promote", true);
			xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Set the request header
			xhttp.send(JSON.stringify(promotionData));
	}

	create() {

		this.editorCreate();
		var playerID = -1;

		//---------------------------------------------------
		//how it sohuld work:
		//first iteration of the create, every asset get's called once, just for display reason.
		// -> one iteration of the donkey is called, without the setInterval
		//		->if returns false, sets the interval.
		//		->if returns true,  all the assets are updated and then allows the user to move and everything.
		//			-> at the end of the movement a setInterval of the donkey should be called.
		//----------------------------------------------

		//used for card clicking event
		this.cardClicked();


		//fetches the playerID from the session.
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				playerID = parseInt(xhttp.responseText);

				this.cardRequest();

				//some shards funciton

				this.shardRandom();
				this.shardRequest();





				this.updateGameState(playerID, (gameState) => {
					this.updateBoardState(gameState, playerID, (boardState) => {
						this.tileClicked(playerID);
					});
				});

				// let canPlay = false;
				// var amogus;
				// amogus = setInterval(this.donkey, 2000, canPlay, amogus, playerID);


			}
			//; can be deleted?
		};
		// Send a GET request to the server
		xhttp.open("GET", "/signing/playerID", true);
		xhttp.send();
		//until here


		// setInterval(() =>{
		// 	console.log("Displaying everything");

		// 	//funciton used purerly for display
		// 	this.cardRequest();
		// 	this.shardRequest();
		// 	//series of function to update the page
		// 	this.gameRequest(playerID);
		// }, 4000)


		//Donkey function




	}

	//useless doneky
	gameRequest(playerID){
		this.gameStateRequest(playerID, (gameState) => {
			this.boardStateRequest(gameState, playerID, (boardState) => {
				this.tileRequest(playerID);
			});
		});
	}

	gameStateRequest(playerID, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				if (xhttp.status == 200) {
					// Parse the JSON response
					var gameState = JSON.parse(xhttp.responseText);

					//Displays who's turn is it and changes color accordingly
					//could be moved inside the following for so that the user can also see somehting like "White's turn(you)" or "Black's turn(opponent)"
					if(gameState[0].match_pc_id == 1){ //White

						//changes color
						this.currentTurnColor.setColor("#fff7bbff");
						//changes text	
						this.currentTurnColor.text = "White's turn";

					} else if (gameState[0].match_pc_id == 2){//Black

						//changes color
						this.currentTurnColor.setColor("#7f00f8ff");	
						//changes text					
						this.currentTurnColor.text = "Black's turn";

					}

					//Defines the player color and assigns it it's defined assets or rotation
					for (let i = 0; i < gameState.length; i++) {
						if (playerID == gameState[i].player_id) {
							if (gameState[i].mp_pc_id == 1) {
								//Functions for the white
								this.tilesContainer.angle = 0;

								//sets up the name according to position
								//top = black
								this.advName.text = gameState[1].player_name;
								this.advName.setColor("#7f00f8ff");

								//bot = white
								this.userName.text = gameState[0].player_name;
								this.userName.setColor("#fff7bbff");


								//Display Promotion Tiers
								//begins with initializing the id and it's img
								this.pTDisplay(gameState[i].mp_ut_id, gameState[i].pc_name, gameState[i].mp_pc_id, this.promotionTiersWhite);


							} else if (gameState[i].mp_pc_id == 2) {
								//Functions for the black
								this.tilesContainer.angle = -180;

								//sets up the name accordingly to position
								//top = white
								this.advName.text = gameState[0].player_name;
								this.advName.setColor("#fff7bbff");

								//bottom = black
								this.userName.text = gameState[1].player_name;
								this.userName.setColor("#7f00f8ff");

								//inversion of side letters and numbers according to color.

								this.reversingNumbers(this.numbers);
								this.reversingLetter(this.letters);
								// this.numbers.reverse();
								// this.letters.reverse();

								//Display Promotion Tiers
								//begins with initializing the id and it's img
								this.pTDisplay(gameState[i].mp_ut_id, gameState[i].pc_name, gameState[i].mp_pc_id, this.promotionTiersBlack);
							}
						}
					}

					callback(gameState);
				} else {
					console.error('Error fetching game state');
				}
			}
		};

		// Send a GET request to the server (just testing with /match/11 endpoint)
		xhttp.open("GET", "../state/game/1", true);
		xhttp.send();
	}

	boardStateRequest(gameState, playerID, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				if (xhttp.status == 200) {
					// Parse the JSON response
					var boardState = JSON.parse(xhttp.responseText);

					boardState.forEach(state => {
						const tileElement = this.tiles.find(tile => tile.tileId === state.tile_id);
						if (tileElement) {
							switch (state.mpp_piece_id) {
								case 1:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteBishop);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackBishop);
									}
									break;
								case 2:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteRook);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackRook);
									}
									break;
								case 3:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteKnight);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackKnight);
									}
									break;
								case 4:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteQueen);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackQueen);
									}
									break;
								case 5:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhitePawn);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackPawn);
									}
									break;
								case 6:
									if (state.mp_pc_id === 1) {
										placePiece.call(this, boardState, gameState, playerID, tileElement, WhiteKing);
									} else {
										placePiece.call(this, boardState, gameState, playerID, tileElement, BlackKing);
									}
									break;
							}
						}
					});

					callback(boardState);
				} else {
					console.error('Error fetching board state');
				}
			}
		};

		// Send a GET request to the server (just testing with /match/1 endpoint)
		xhttp.open("GET", "../state/boardR/1", true);
		xhttp.send();
	}

	tileRequest(playerID) {
		// Loop through each tile in the 'tiles' array
		for (let index = 0; index < this.tiles.length; index++) {
			// Get the current tile element at the 'index' position
			const element = this.tiles[index];

			// Add an event listener to the tile for the 'pointerdown' event
			this.updateGameState(playerID, (gameState) => {
				this.updateBoardState(gameState, playerID, (boardState) => {
					// Extract the number from the tile's name using the 'extractNumberFromString' function
					var tileId = element.tileId;


					this.tiles.forEach(element => {
						const children = element.getAll();
						const childToDestroyInHell = children.find(child => child.name === 'dot' || child.name === 'redSquare');
						if (childToDestroyInHell) {
							childToDestroyInHell.destroy();
							element.remove(childToDestroyInHell);
						}
					});

				});
			});

		}
	}

	donkey(canPlay, donkeyFunction, playerID){
		var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				//sends back true if you can play and false if you cannot play
			  	canPlay = JSON.parse(xhttp.responseText);

			  	console.log(canPlay);

				if (canPlay) {
					clearInterval(this.amogus);
					console.log("im able to play!");

					//series of function to update the page
					//this.cardRequest();
					//this.shardRequest();
					//this.gameRequest(playerID);
				}else{
					console.log("it's not your turn to play yet!")
				}
			}
		  };

		  // Send a GET request to the server (just testing with /match/11 endpoint)
		  xhttp.open("GET", "/state/donkey/1", true);
		  xhttp.send();
	}

	//end of useless donkey funcitons


	cardRequest(){
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
						switch(data[i].card_id){
							case 1:     //Bishop
								cardAssetName += "Bishop";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, cardAssetName, i);
							break;
							case 2:     // Roock
								cardAssetName += "Roock";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, cardAssetName, i);
							break;
							case 3:     // Knight
								cardAssetName += "Knight";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, cardAssetName, i);
							break;
							case 4:     // Quween
								cardAssetName += "Queen";
								this.CardDisplay(this.card[i], this.cardText[i], data[i].mpc_ammount, cardAssetName, i);
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
			xhttp.open("GET", "../state/card/1", true);
			xhttp.send();
	}

	CardDisplay(cardReference, cardText, cardAmmount, cardArtReference, i){
		//assigning done better, giving name of asset and color possibly. or cereate a name based of of the asset



		cardReference.cardId = i + 1;
		cardReference.ammount = cardAmmount;
		cardReference.worm.scaleX = 1;

		if(cardAmmount > 0){
			//allows it to be shown, or it could make it not ; not necessarily changing it's size
			cardReference.worm.setTexture(cardArtReference);

			this.fadeIntoScene(cardReference.worm, 1000);

			//changes the text on the bottom of each card
			if(cardAmmount > 1){
				cardText.text = "x" + cardAmmount;
			}else{
				cardText.text = "";
			}
		}else if(cardAmmount <= 0){//assures that a change in card has appened

			this.fadeOutOfScene(cardReference.worm, 1000);
			//allows it to be hidden, or it could make it gray; not necessarily changing it's size
			cardText.text = "";
			//cardReference.worm.scaleX = 0;
		}

	}

	fadeIntoScene(imgRef, dur) {
		//imgRef.alpha = 0;
		imgRef.visible = true;
		this.tweens.add({
			targets: imgRef,
			alpha: 1,
			duration: dur,
			ease: 'Power2'
		});
	}

	fadeOutOfScene(imgRef, dur) {
		//imgRef.alpha = 1;
		this.tweens.add({
			targets: imgRef,
			alpha: 0,
			duration: dur,
			ease: 'Power2'
		});

		imgRef.visible = false;
	}

	cardGreyOut(cardReference){
		this.card.forEach(element => {

			if(element == cardReference){
				element.worm.alpha = 1;
				console.log("highlithing: " + element.cardId);
			}else{
				console.log("greying out: " + element.cardId);
				element.worm.alpha = 0.5;
			}
		})
	}

	cardUnGreyOut(){
		this.card.forEach(element => {

			element.worm.alpha = 1;
			console.log("highlithing ALL: " + element.cardId);

		})
	}

	shardRequest(){
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					// Parse the JSON response
					var data = JSON.parse(xhttp.responseText);

					var shardAssetNameT = "";
					var shardAssetNameB = "";
					var shardAssetNameM = "";


					for(let i = 0; i < data.length; i++){

						//Constructing the name for the card prefab
						// shard + Top/Bottom + White/Black + Piece-type
						shardAssetNameT = "shard";
						shardAssetNameM = "shard";
						shardAssetNameB = "shard";

						if(data[i].mp_pc_id == 1){
							shardAssetNameT += "TopWhite";
							shardAssetNameM += "MiddleWhite";
							shardAssetNameB += "BottomWhite";
						}else if(data[i].mp_pc_id == 2){
							shardAssetNameT += "TopBlack";
							shardAssetNameM += "MiddleBlack";
							shardAssetNameB += "BottomBlack";
						}

						//Detecting the piecce type
						switch(data[i].card_id){
							case 1:     //Bishop
								shardAssetNameT += "Bishop";
								shardAssetNameB += "Bishop";
								this.shardDispaly(this.shardsBishop, data[i].mps_shard_ammount, shardAssetNameT, shardAssetNameB, shardAssetNameM);
							break;
							case 2:     // Roock
								shardAssetNameT += "Roock";
								shardAssetNameB += "Roock";
								this.shardDispaly(this.shardsRoock, data[i].mps_shard_ammount, shardAssetNameT, shardAssetNameB, shardAssetNameM);
							break;
							case 3:     // Knight
								shardAssetNameT += "Knight";
								shardAssetNameB += "Knight";
								this.shardDispaly(this.shardsKnight, data[i].mps_shard_ammount, shardAssetNameT, shardAssetNameB, shardAssetNameM);
							break;
							case 4:     // Quween
								shardAssetNameT += "Queen";
								shardAssetNameM += "Queen";
								shardAssetNameB += "Queen";
								this.shardDispaly(this.shardsQueen, data[i].mps_shard_ammount, shardAssetNameT, shardAssetNameB, shardAssetNameM);
							break;
							default:
								console.log("cannot shard for " + i);
						}

						//resetting for the successive shard
						shardAssetNameT = "";
						shardAssetNameM = "";
						shardAssetNameB = "";


						//TEXT functionality
						// this.shardsText[i].text = data[i].mps_shard_ammount + "/" + data[i].shard_ammount_needed;
						// if(i == 0)
						// 	this.shardDispaly(this.shardsBishop, data[i].mps_shard_ammount);
						//missing the img and animation;
					}

				}
			};

			// Send a GET request to the server, need a way to get the playerId from the  coockies or when the match is accessed
			xhttp.open("GET", "../state/shard/1", true);
			xhttp.send();
	}

	shardRandom(){

		//defines how randomly the shards should appear
		this.shardsBishop.sort(()=> Math.random() - 0.5);
		this.shardsRoock.sort(()=> Math.random() - 0.5);
		this.shardsKnight.sort(()=> Math.random() - 0.5);
		this.shardsQueen.sort(()=> Math.random() - 0.5);

		// for(let i = 0; i < this.shardsBishop.length; i++){
		// 	//const randomNum = Math.random() < 0.5 ? 0 : 1;
		// 	console.log("Bishop shard index: " + this.shardsBishop[i].index);
		// 	console.log("queen : " + orderQueen);
		// 	//this.shardsBishop[i].setOrder(order[randomNum]);
		// 	//this.shardsBishop[order[0]]
		// }


	}

	shardDispaly(shardsReference, shardNum, shardAssetReferenceT, shardAssetReferenceB, shardAssetNameM){


		if(shardNum > 0){
			for(let i = 0; i < shardNum; i++){
				shardsReference[i].visible = true;

				if(shardsReference[i].index == 0){
					//bottom display
					shardsReference[i].setTexture(shardAssetReferenceB);

				}else if(shardsReference[i].index == 2){
					// top display
					shardsReference[i].setTexture(shardAssetReferenceT);
				}else if (shardsReference[i].index == 1){
					// middle display
					shardsReference[i].setTexture(shardAssetNameM);
				}

			}
		}else{
			for(let i = 0; i < shardNum; i++){
				shardsReference[i].visible = false;
			}
		}
	}

	pTDisplay(ptIdSentDB, player_color_nane, pc_id, pTList){
		//displays the right set of PT assets
		for(let j = 0; j < pTList.length; j++){
			pTList[j].scaleX = 1;
		}

		//based off the PT reached in the db, 0 the alpha of the bacjground
		for(let i = 0; i < ptIdSentDB-1; i++){

			pTList[i].PtId = i + 2;
			this.promotionTiersBackground[i].alpha = 0;
		}	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

// function fadeIntoScene(imgRef, dur) {
// 	scene.tweens.add({
// 		targets: imgRef,
// 		alpha: 1,
// 		duration: dur,
// 		ease: 'Power2'
// 	})	
// }


function placePiece(boardState, gameState, playerID, tileElement, PieceClass) {
    const piece = new PieceClass(this, tileElement.x, tileElement.y);
    this.add.existing(piece);
    this.tilesContainer.add(piece);

    const playerGameState = gameState.find(state => state.player_id === playerID);
    if (playerGameState) {
        piece.angle = playerGameState.mp_pc_id === 1 ? 0 : -180;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
//Numbers transformations
///////////////////////////////////////////////////////////////////////////////////////////

function extractNumberFromString(str) {
    // Use a regular expression to match the numeric part of the string
    const match = str.match(/(\d+)$/);

    // If a match is found, return it as a number
    if (match) {
        return parseInt(match[1], 10);
    }

    // If no match is found, return null or throw an error
    return null; // or you could throw an error
}

function numberToCoordinates(num) {

	// Calculate the zero-based index
	const index = num - 1;

	// Calculate the x coordinate (column)
	const x = (index % 8) + 1;

	// Calculate the y coordinate (row)
	const y = Math.floor(index / 8) + 1;

	return { x, y };
}

///////////////////////////////////////////////////////////////////////////////////////////
//Move Validations
///////////////////////////////////////////////////////////////////////////////////////////

function getPossibleMoves(X, Y, pieceType, piecesArray) {
    switch (pieceType) {
        case 1: // Bishop
            return getPossibleBishopMoves(X, Y, piecesArray);
        case 2: // Rook
            return getPossibleRookMoves(X, Y, piecesArray);
        case 3: // Knight
            return getPossibleKnightMoves(X, Y, piecesArray);
        case 4: // Queen
            return getPossibleQueenMoves(X, Y, piecesArray);
        case 5: // Pawn
            return getPossiblePawnMoves(X, Y, piecesArray);
        case 6: // King
            return getPossibleKingMoves(X, Y, piecesArray);
        default:
            return [];
    }
}

function getPossiblePawnMoves(X, Y, piecesArray) {
    const moves = [];
    const pieceAtStart = piecesArray.find(piece => piece.x === X && piece.y === Y);
    const direction = pieceAtStart.mp_pc_id === 1 ? 1 : -1; // 1 for white, -1 for black

    // One step forward
    if (!isTileOccupied(X, Y + direction, piecesArray) && !isTileOccupiedByOpponent(X, Y + direction, piecesArray, pieceAtStart.mp_pc_id)) {
        moves.push({ x: X, y: Y + direction });
    }

    // Two steps forward from initial position
    if (pieceAtStart.mpp_ps_id === 4 && !isTileOccupied(X, Y + direction, piecesArray) && !isTileOccupied(X, Y + 2 * direction, piecesArray) && !isTileOccupiedByOpponent(X, Y + 2 * direction, piecesArray, pieceAtStart.mp_pc_id)) {
        moves.push({ x: X, y: Y + 2 * direction });
    }

    // Capturing diagonally
    if (isTileOccupiedByOpponent(X + 1, Y + direction, piecesArray, pieceAtStart.mp_pc_id)) {
        moves.push({ x: X + 1, y: Y + direction, enemyOnTheWay: { x: X + 1, y: Y + direction } });
    }
    if (isTileOccupiedByOpponent(X - 1, Y + direction, piecesArray, pieceAtStart.mp_pc_id)) {
        moves.push({ x: X - 1, y: Y + direction, enemyOnTheWay: { x: X - 1, y: Y + direction } });
    }
    return moves;
}

function getPossibleRookMoves(X, Y, piecesArray) {
    const moves = [];
    const pieceAtStart = piecesArray.find(piece => piece.x === X && piece.y === Y);
    const directions = [
        { dx: 0, dy: 1 }, { dx: 1, dy: 0 },
        { dx: 0, dy: -1 }, { dx: -1, dy: 0 }
    ];

    directions.forEach(direction => {
        let x = X + direction.dx, y = Y + direction.dy;
        while (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
            if (isTileOccupied(x, y, piecesArray)) {
                if (isTileOccupiedByOpponent(x, y, piecesArray, pieceAtStart.mp_pc_id)) {
                    moves.push({ x, y, enemyOnTheWay: { x, y } });
                }
                break;
            }
            moves.push({ x, y });
            x += direction.dx;
            y += direction.dy;
        }
    });

    return moves;
}

function getPossibleKnightMoves(X, Y, piecesArray) {
    const moves = [];
    const pieceAtStart = piecesArray.find(piece => piece.x === X && piece.y === Y);
    const knightMoves = [
        { dx: 2, dy: 1 }, { dx: 2, dy: -1 }, { dx: -2, dy: 1 }, { dx: -2, dy: -1 },
        { dx: 1, dy: 2 }, { dx: 1, dy: -2 }, { dx: -1, dy: 2 }, { dx: -1, dy: -2 }
    ];

    knightMoves.forEach(move => {
        const x = X + move.dx;
        const y = Y + move.dy;
        if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
            if (isTileOccupied(x, y, piecesArray)) {
                if (isTileOccupiedByOpponent(x, y, piecesArray, pieceAtStart.mp_pc_id)) {
                    moves.push({ x, y, enemyOnTheWay: { x, y } });
                }
            } else {
                moves.push({ x, y });
            }
        }
    });

    return moves;
}

function getPossibleBishopMoves(X, Y, piecesArray) {
    const moves = [];
    const pieceAtStart = piecesArray.find(piece => piece.x === X && piece.y === Y);
    const directions = [
        { dx: 1, dy: 1 }, { dx: 1, dy: -1 },
        { dx: -1, dy: 1 }, { dx: -1, dy: -1 }
    ];
    directions.forEach(direction => {
        let x = X, y = Y;
        while (true) {
            x += direction.dx;
            y += direction.dy;
            if (x < 1 || x > 8 || y < 1 || y > 8) break;
            if (isTileOccupied(x, y, piecesArray)) {
                if (isTileOccupiedByOpponent(x, y, piecesArray, pieceAtStart.mp_pc_id)) {
                    moves.push({ x, y, enemyOnTheWay: { x, y } });
                }
                break;
            }
            moves.push({ x, y });
        }
    });
    return moves;
}


function getPossibleQueenMoves(X, Y, piecesArray) {
    return [
        ...getPossibleRookMoves(X, Y, piecesArray),
        ...getPossibleBishopMoves(X, Y, piecesArray)
    ];
}

function getPossibleKingMoves(X, Y, piecesArray) {
    const moves = [];
    const pieceAtStart = piecesArray.find(piece => piece.x === X && piece.y === Y);
    const directions = [
        { dx: 0, dy: 1 }, { dx: 1, dy: 0 }, { dx: 0, dy: -1 }, { dx: -1, dy: 0 },
        { dx: 1, dy: 1 }, { dx: 1, dy: -1 }, { dx: -1, dy: 1 }, { dx: -1, dy: -1 }
    ];
    directions.forEach(direction => {
        const x = X + direction.dx;
        const y = Y + direction.dy;
        if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
            if (!isTileOccupied(x, y, piecesArray) || isTileOccupiedByOpponent(x, y, piecesArray, pieceAtStart.mp_pc_id)) {
                moves.push({ x, y, ...(isTileOccupiedByOpponent(x, y, piecesArray, pieceAtStart.mp_pc_id) ? { enemyOnTheWay: { x, y } } : {}) });
            }
        }
    });
    return moves;
}


function isTileOccupied(x, y, piecesArray) {
    return piecesArray.some(piece => piece.x === x && piece.y === y && (piece.mpp_ps_id === 1 || piece.mpp_ps_id === 3 || piece.mpp_ps_id === 4));
}

function isTileOccupiedByOpponent(x, y, piecesArray, color) {
    return piecesArray.some(piece => piece.x == x && piece.y == y && (piece.mpp_ps_id === 1 || piece.mpp_ps_id === 3 || piece.mpp_ps_id === 4) && piece.mp_pc_id !== color);
}
