
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

		// tilesContainer
		const tilesContainer = this.add.container(322, 325);

		// Tile_64
		const tile_64 = this.add.image(245, -245, "blackTile");
		tile_64.name = "Tile_64";
		tile_64.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_64.scaleX = 7;
		tile_64.scaleY = 7;
		tilesContainer.add(tile_64);

		// Tile_63
		const tile_63 = this.add.image(175, -245, "whiteTile");
		tile_63.name = "Tile_63";
		tile_63.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_63.scaleX = 7;
		tile_63.scaleY = 7;
		tilesContainer.add(tile_63);

		// Tile_62
		const tile_62 = this.add.image(105, -245, "blackTile");
		tile_62.name = "Tile_62";
		tile_62.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_62.scaleX = 7;
		tile_62.scaleY = 7;
		tilesContainer.add(tile_62);

		// Tile_61
		const tile_61 = this.add.image(35, -245, "whiteTile");
		tile_61.name = "Tile_61";
		tile_61.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_61.scaleX = 7;
		tile_61.scaleY = 7;
		tilesContainer.add(tile_61);

		// Tile_60
		const tile_60 = this.add.image(-35, -245, "blackTile");
		tile_60.name = "Tile_60";
		tile_60.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_60.scaleX = 7;
		tile_60.scaleY = 7;
		tilesContainer.add(tile_60);

		// Tile_59
		const tile_59 = this.add.image(-105, -245, "whiteTile");
		tile_59.name = "Tile_59";
		tile_59.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_59.scaleX = 7;
		tile_59.scaleY = 7;
		tilesContainer.add(tile_59);

		// Tile_58
		const tile_58 = this.add.image(-175, -245, "blackTile");
		tile_58.name = "Tile_58";
		tile_58.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_58.scaleX = 7;
		tile_58.scaleY = 7;
		tilesContainer.add(tile_58);

		// Tile_57
		const tile_57 = this.add.image(-245, -245, "whiteTile");
		tile_57.name = "Tile_57";
		tile_57.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_57.scaleX = 7;
		tile_57.scaleY = 7;
		tilesContainer.add(tile_57);

		// Tile_56
		const tile_56 = this.add.image(245, -175, "whiteTile");
		tile_56.name = "Tile_56";
		tile_56.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_56.scaleX = 7;
		tile_56.scaleY = 7;
		tilesContainer.add(tile_56);

		// Tile_55
		const tile_55 = this.add.image(175, -175, "blackTile");
		tile_55.name = "Tile_55";
		tile_55.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_55.scaleX = 7;
		tile_55.scaleY = 7;
		tilesContainer.add(tile_55);

		// Tile_54
		const tile_54 = this.add.image(105, -175, "whiteTile");
		tile_54.name = "Tile_54";
		tile_54.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_54.scaleX = 7;
		tile_54.scaleY = 7;
		tilesContainer.add(tile_54);

		// Tile_53
		const tile_53 = this.add.image(35, -175, "blackTile");
		tile_53.name = "Tile_53";
		tile_53.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_53.scaleX = 7;
		tile_53.scaleY = 7;
		tilesContainer.add(tile_53);

		// Tile_52
		const tile_52 = this.add.image(-35, -175, "whiteTile");
		tile_52.name = "Tile_52";
		tile_52.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_52.scaleX = 7;
		tile_52.scaleY = 7;
		tilesContainer.add(tile_52);

		// Tile_51
		const tile_51 = this.add.image(-105, -176, "blackTile");
		tile_51.name = "Tile_51";
		tile_51.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_51.scaleX = 7;
		tile_51.scaleY = 7;
		tilesContainer.add(tile_51);

		// Tile_50
		const tile_50 = this.add.image(-175, -175, "whiteTile");
		tile_50.name = "Tile_50";
		tile_50.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_50.scaleX = 7;
		tile_50.scaleY = 7;
		tilesContainer.add(tile_50);

		// Tile_49
		const tile_49 = this.add.image(-245, -175, "blackTile");
		tile_49.name = "Tile_49";
		tile_49.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_49.scaleX = 7;
		tile_49.scaleY = 7;
		tilesContainer.add(tile_49);

		// Tile_48
		const tile_48 = this.add.image(245, -105, "blackTile");
		tile_48.name = "Tile_48";
		tile_48.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_48.scaleX = 7;
		tile_48.scaleY = 7;
		tilesContainer.add(tile_48);

		// Tile_47
		const tile_47 = this.add.image(175, -105, "whiteTile");
		tile_47.name = "Tile_47";
		tile_47.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_47.scaleX = 7;
		tile_47.scaleY = 7;
		tilesContainer.add(tile_47);

		// Tile_46
		const tile_46 = this.add.image(105, -105, "blackTile");
		tile_46.name = "Tile_46";
		tile_46.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_46.scaleX = 7;
		tile_46.scaleY = 7;
		tilesContainer.add(tile_46);

		// Tile_45
		const tile_45 = this.add.image(35, -105, "whiteTile");
		tile_45.name = "Tile_45";
		tile_45.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_45.scaleX = 7;
		tile_45.scaleY = 7;
		tilesContainer.add(tile_45);

		// Tile_44
		const tile_44 = this.add.image(-35, -105, "blackTile");
		tile_44.name = "Tile_44";
		tile_44.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_44.scaleX = 7;
		tile_44.scaleY = 7;
		tilesContainer.add(tile_44);

		// Tile_43
		const tile_43 = this.add.image(-105, -105, "whiteTile");
		tile_43.name = "Tile_43";
		tile_43.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_43.scaleX = 7;
		tile_43.scaleY = 7;
		tilesContainer.add(tile_43);

		// Tile_42
		const tile_42 = this.add.image(-175, -105, "blackTile");
		tile_42.name = "Tile_42";
		tile_42.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_42.scaleX = 7;
		tile_42.scaleY = 7;
		tilesContainer.add(tile_42);

		// Tile_41
		const tile_41 = this.add.image(-245, -105, "whiteTile");
		tile_41.name = "Tile_41";
		tile_41.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_41.scaleX = 7;
		tile_41.scaleY = 7;
		tilesContainer.add(tile_41);

		// Tile_40
		const tile_40 = this.add.image(245, -35, "whiteTile");
		tile_40.name = "Tile_40";
		tile_40.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_40.scaleX = 7;
		tile_40.scaleY = 7;
		tilesContainer.add(tile_40);

		// Tile_39
		const tile_39 = this.add.image(175, -35, "blackTile");
		tile_39.name = "Tile_39";
		tile_39.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_39.scaleX = 7;
		tile_39.scaleY = 7;
		tilesContainer.add(tile_39);

		// Tile_38
		const tile_38 = this.add.image(105, -35, "whiteTile");
		tile_38.name = "Tile_38";
		tile_38.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_38.scaleX = 7;
		tile_38.scaleY = 7;
		tilesContainer.add(tile_38);

		// Tile_37
		const tile_37 = this.add.image(35, -35, "blackTile");
		tile_37.name = "Tile_37";
		tile_37.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_37.scaleX = 7;
		tile_37.scaleY = 7;
		tilesContainer.add(tile_37);

		// Tile_36
		const tile_36 = this.add.image(-35, -35, "whiteTile");
		tile_36.name = "Tile_36";
		tile_36.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_36.scaleX = 7;
		tile_36.scaleY = 7;
		tilesContainer.add(tile_36);

		// Tile_35
		const tile_35 = this.add.image(-105, -36, "blackTile");
		tile_35.name = "Tile_35";
		tile_35.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_35.scaleX = 7;
		tile_35.scaleY = 7;
		tilesContainer.add(tile_35);

		// Tile_34
		const tile_34 = this.add.image(-175, -35, "whiteTile");
		tile_34.name = "Tile_34";
		tile_34.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_34.scaleX = 7;
		tile_34.scaleY = 7;
		tilesContainer.add(tile_34);

		// Tile_33
		const tile_33 = this.add.image(-245, -35, "blackTile");
		tile_33.name = "Tile_33";
		tile_33.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_33.scaleX = 7;
		tile_33.scaleY = 7;
		tilesContainer.add(tile_33);

		// Tile_32
		const tile_32 = this.add.image(245, 35, "blackTile");
		tile_32.name = "Tile_32";
		tile_32.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_32.scaleX = 7;
		tile_32.scaleY = 7;
		tilesContainer.add(tile_32);

		// Tile_31
		const tile_31 = this.add.image(175, 35, "whiteTile");
		tile_31.name = "Tile_31";
		tile_31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_31.scaleX = 7;
		tile_31.scaleY = 7;
		tilesContainer.add(tile_31);

		// Tile_30
		const tile_30 = this.add.image(105, 35, "blackTile");
		tile_30.name = "Tile_30";
		tile_30.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_30.scaleX = 7;
		tile_30.scaleY = 7;
		tilesContainer.add(tile_30);

		// Tile_29
		const tile_29 = this.add.image(35, 35, "whiteTile");
		tile_29.name = "Tile_29";
		tile_29.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_29.scaleX = 7;
		tile_29.scaleY = 7;
		tilesContainer.add(tile_29);

		// Tile_28
		const tile_28 = this.add.image(-35, 35, "blackTile");
		tile_28.name = "Tile_28";
		tile_28.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_28.scaleX = 7;
		tile_28.scaleY = 7;
		tilesContainer.add(tile_28);

		// Tile_27
		const tile_27 = this.add.image(-105, 35, "whiteTile");
		tile_27.name = "Tile_27";
		tile_27.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_27.scaleX = 7;
		tile_27.scaleY = 7;
		tilesContainer.add(tile_27);

		// Tile_26
		const tile_26 = this.add.image(-175, 35, "blackTile");
		tile_26.name = "Tile_26";
		tile_26.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_26.scaleX = 7;
		tile_26.scaleY = 7;
		tilesContainer.add(tile_26);

		// Tile_25
		const tile_25 = this.add.image(-245, 35, "whiteTile");
		tile_25.name = "Tile_25";
		tile_25.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_25.scaleX = 7;
		tile_25.scaleY = 7;
		tilesContainer.add(tile_25);

		// Tile_24
		const tile_24 = this.add.image(245, 105, "whiteTile");
		tile_24.name = "Tile_24";
		tile_24.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_24.scaleX = 7;
		tile_24.scaleY = 7;
		tilesContainer.add(tile_24);

		// Tile_23
		const tile_23 = this.add.image(175, 105, "blackTile");
		tile_23.name = "Tile_23";
		tile_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_23.scaleX = 7;
		tile_23.scaleY = 7;
		tilesContainer.add(tile_23);

		// Tile_22
		const tile_22 = this.add.image(105, 105, "whiteTile");
		tile_22.name = "Tile_22";
		tile_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_22.scaleX = 7;
		tile_22.scaleY = 7;
		tilesContainer.add(tile_22);

		// Tile_21
		const tile_21 = this.add.image(35, 105, "blackTile");
		tile_21.name = "Tile_21";
		tile_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_21.scaleX = 7;
		tile_21.scaleY = 7;
		tilesContainer.add(tile_21);

		// Tile_20
		const tile_20 = this.add.image(-35, 105, "whiteTile");
		tile_20.name = "Tile_20";
		tile_20.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_20.scaleX = 7;
		tile_20.scaleY = 7;
		tilesContainer.add(tile_20);

		// Tile_19
		const tile_19 = this.add.image(-105, 104, "blackTile");
		tile_19.name = "Tile_19";
		tile_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_19.scaleX = 7;
		tile_19.scaleY = 7;
		tilesContainer.add(tile_19);

		// Tile_18
		const tile_18 = this.add.image(-175, 105, "whiteTile");
		tile_18.name = "Tile_18";
		tile_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_18.scaleX = 7;
		tile_18.scaleY = 7;
		tilesContainer.add(tile_18);

		// Tile_17
		const tile_17 = this.add.image(-245, 105, "blackTile");
		tile_17.name = "Tile_17";
		tile_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_17.scaleX = 7;
		tile_17.scaleY = 7;
		tilesContainer.add(tile_17);

		// Tile_16
		const tile_16 = this.add.image(245, 175, "blackTile");
		tile_16.name = "Tile_16";
		tile_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_16.scaleX = 7;
		tile_16.scaleY = 7;
		tilesContainer.add(tile_16);

		// Tile_15
		const tile_15 = this.add.image(175, 175, "whiteTile");
		tile_15.name = "Tile_15";
		tile_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_15.scaleX = 7;
		tile_15.scaleY = 7;
		tilesContainer.add(tile_15);

		// Tile_14
		const tile_14 = this.add.image(105, 175, "blackTile");
		tile_14.name = "Tile_14";
		tile_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_14.scaleX = 7;
		tile_14.scaleY = 7;
		tilesContainer.add(tile_14);

		// Tile_13
		const tile_13 = this.add.image(35, 175, "whiteTile");
		tile_13.name = "Tile_13";
		tile_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_13.scaleX = 7;
		tile_13.scaleY = 7;
		tilesContainer.add(tile_13);

		// Tile_12
		const tile_12 = this.add.image(-35, 175, "blackTile");
		tile_12.name = "Tile_12";
		tile_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_12.scaleX = 7;
		tile_12.scaleY = 7;
		tilesContainer.add(tile_12);

		// Tile_11
		const tile_11 = this.add.image(-105, 175, "whiteTile");
		tile_11.name = "Tile_11";
		tile_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_11.scaleX = 7;
		tile_11.scaleY = 7;
		tilesContainer.add(tile_11);

		// Tile_10
		const tile_10 = this.add.image(-175, 175, "blackTile");
		tile_10.name = "Tile_10";
		tile_10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_10.scaleX = 7;
		tile_10.scaleY = 7;
		tilesContainer.add(tile_10);

		// Tile_9
		const tile_9 = this.add.image(-245, 175, "whiteTile");
		tile_9.name = "Tile_9";
		tile_9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_9.scaleX = 7;
		tile_9.scaleY = 7;
		tilesContainer.add(tile_9);

		// Tile_8
		const tile_8 = this.add.image(245, 245, "whiteTile");
		tile_8.name = "Tile_8";
		tile_8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_8.scaleX = 7;
		tile_8.scaleY = 7;
		tilesContainer.add(tile_8);

		// Tile_7
		const tile_7 = this.add.image(175, 245, "blackTile");
		tile_7.name = "Tile_7";
		tile_7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_7.scaleX = 7;
		tile_7.scaleY = 7;
		tilesContainer.add(tile_7);

		// Tile_6
		const tile_6 = this.add.image(105, 245, "whiteTile");
		tile_6.name = "Tile_6";
		tile_6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_6.scaleX = 7;
		tile_6.scaleY = 7;
		tilesContainer.add(tile_6);

		// Tile_5
		const tile_5 = this.add.image(35, 245, "blackTile");
		tile_5.name = "Tile_5";
		tile_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_5.scaleX = 7;
		tile_5.scaleY = 7;
		tilesContainer.add(tile_5);

		// Tile_4
		const tile_4 = this.add.image(-35, 245, "whiteTile");
		tile_4.name = "Tile_4";
		tile_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_4.scaleX = 7;
		tile_4.scaleY = 7;
		tilesContainer.add(tile_4);

		// Tile_3
		const tile_3 = this.add.image(-105, 244, "blackTile");
		tile_3.name = "Tile_3";
		tile_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_3.scaleX = 7;
		tile_3.scaleY = 7;
		tilesContainer.add(tile_3);

		// Tile_2
		const tile_2 = this.add.image(-175, 245, "whiteTile");
		tile_2.name = "Tile_2";
		tile_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_2.scaleX = 7;
		tile_2.scaleY = 7;
		tilesContainer.add(tile_2);

		// Tile_1
		const tile_1 = this.add.image(-245, 245, "blackTile");
		tile_1.name = "Tile_1";
		tile_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		tile_1.scaleX = 7;
		tile_1.scaleY = 7;
		tilesContainer.add(tile_1);

		// lists
		const tiles = [tile_1, tile_2, tile_3, tile_4, tile_5, tile_6, tile_7, tile_8, tile_9, tile_10, tile_11, tile_12, tile_13, tile_14, tile_15, tile_16, tile_17, tile_18, tile_19, tile_20, tile_21, tile_22, tile_23, tile_24, tile_25, tile_26, tile_27, tile_28, tile_29, tile_30, tile_31, tile_32, tile_33, tile_34, tile_35, tile_36, tile_37, tile_38, tile_39, tile_40, tile_41, tile_42, tile_43, tile_44, tile_45, tile_46, tile_47, tile_48, tile_49, tile_50, tile_51, tile_52, tile_53, tile_54, tile_55, tile_56, tile_57, tile_58, tile_59, tile_60, tile_61, tile_62, tile_63, tile_64];

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
		this.tiles = tiles;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	advName;
	/** @type {Phaser.GameObjects.Text} */
	userName;
	/** @type {Phaser.GameObjects.Image} */
	tile_64;
	/** @type {Phaser.GameObjects.Image} */
	tile_63;
	/** @type {Phaser.GameObjects.Image} */
	tile_62;
	/** @type {Phaser.GameObjects.Image} */
	tile_61;
	/** @type {Phaser.GameObjects.Image} */
	tile_60;
	/** @type {Phaser.GameObjects.Image} */
	tile_59;
	/** @type {Phaser.GameObjects.Image} */
	tile_58;
	/** @type {Phaser.GameObjects.Image} */
	tile_57;
	/** @type {Phaser.GameObjects.Image} */
	tile_56;
	/** @type {Phaser.GameObjects.Image} */
	tile_55;
	/** @type {Phaser.GameObjects.Image} */
	tile_54;
	/** @type {Phaser.GameObjects.Image} */
	tile_53;
	/** @type {Phaser.GameObjects.Image} */
	tile_52;
	/** @type {Phaser.GameObjects.Image} */
	tile_51;
	/** @type {Phaser.GameObjects.Image} */
	tile_50;
	/** @type {Phaser.GameObjects.Image} */
	tile_49;
	/** @type {Phaser.GameObjects.Image} */
	tile_48;
	/** @type {Phaser.GameObjects.Image} */
	tile_47;
	/** @type {Phaser.GameObjects.Image} */
	tile_46;
	/** @type {Phaser.GameObjects.Image} */
	tile_45;
	/** @type {Phaser.GameObjects.Image} */
	tile_44;
	/** @type {Phaser.GameObjects.Image} */
	tile_43;
	/** @type {Phaser.GameObjects.Image} */
	tile_42;
	/** @type {Phaser.GameObjects.Image} */
	tile_41;
	/** @type {Phaser.GameObjects.Image} */
	tile_40;
	/** @type {Phaser.GameObjects.Image} */
	tile_39;
	/** @type {Phaser.GameObjects.Image} */
	tile_38;
	/** @type {Phaser.GameObjects.Image} */
	tile_37;
	/** @type {Phaser.GameObjects.Image} */
	tile_36;
	/** @type {Phaser.GameObjects.Image} */
	tile_35;
	/** @type {Phaser.GameObjects.Image} */
	tile_34;
	/** @type {Phaser.GameObjects.Image} */
	tile_33;
	/** @type {Phaser.GameObjects.Image} */
	tile_32;
	/** @type {Phaser.GameObjects.Image} */
	tile_31;
	/** @type {Phaser.GameObjects.Image} */
	tile_30;
	/** @type {Phaser.GameObjects.Image} */
	tile_29;
	/** @type {Phaser.GameObjects.Image} */
	tile_28;
	/** @type {Phaser.GameObjects.Image} */
	tile_27;
	/** @type {Phaser.GameObjects.Image} */
	tile_26;
	/** @type {Phaser.GameObjects.Image} */
	tile_25;
	/** @type {Phaser.GameObjects.Image} */
	tile_24;
	/** @type {Phaser.GameObjects.Image} */
	tile_23;
	/** @type {Phaser.GameObjects.Image} */
	tile_22;
	/** @type {Phaser.GameObjects.Image} */
	tile_21;
	/** @type {Phaser.GameObjects.Image} */
	tile_20;
	/** @type {Phaser.GameObjects.Image} */
	tile_19;
	/** @type {Phaser.GameObjects.Image} */
	tile_18;
	/** @type {Phaser.GameObjects.Image} */
	tile_17;
	/** @type {Phaser.GameObjects.Image} */
	tile_16;
	/** @type {Phaser.GameObjects.Image} */
	tile_15;
	/** @type {Phaser.GameObjects.Image} */
	tile_14;
	/** @type {Phaser.GameObjects.Image} */
	tile_13;
	/** @type {Phaser.GameObjects.Image} */
	tile_12;
	/** @type {Phaser.GameObjects.Image} */
	tile_11;
	/** @type {Phaser.GameObjects.Image} */
	tile_10;
	/** @type {Phaser.GameObjects.Image} */
	tile_9;
	/** @type {Phaser.GameObjects.Image} */
	tile_8;
	/** @type {Phaser.GameObjects.Image} */
	tile_7;
	/** @type {Phaser.GameObjects.Image} */
	tile_6;
	/** @type {Phaser.GameObjects.Image} */
	tile_5;
	/** @type {Phaser.GameObjects.Image} */
	tile_4;
	/** @type {Phaser.GameObjects.Image} */
	tile_3;
	/** @type {Phaser.GameObjects.Image} */
	tile_2;
	/** @type {Phaser.GameObjects.Image} */
	tile_1;
	/** @type {Phaser.GameObjects.Container} */
	tilesContainer;
	/** @type {Phaser.GameObjects.Image[]} */
	tiles;

	/* START-USER-CODE */

	// Write more your code here

	updateGameState(playerID) {
		return new Promise((resolve, reject) => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					if (xhttp.status == 200) {
						// Parse the JSON response
						var gameState = JSON.parse(xhttp.responseText);
	
						// Get the player names from the response
						var player1Name = gameState[0].player_name;
						var player2Name = gameState[1].player_name;
	
						// Set the player names in the game
						this.userName.text = player1Name;
						this.advName.text = player2Name;
	
						for (let i = 0; i < gameState.length; i++) {
							if (playerID == gameState[i].player_id) {
								if (gameState[i].mp_pc_id == 1) {
									this.tilesContainer.angle = 0;
								} else if (gameState[i].mp_pc_id == 2) {
									this.tilesContainer.angle = -180;
								}
							}
						}
						resolve(gameState);
					} else {
						reject('Error fetching game state');
					}
				}
			};
	
			// Send a GET request to the server (just testing with /match/11 endpoint)
			xhttp.open("GET", "../state/game/1", true);
			xhttp.send();
		});
	}
	

	updateBoardState(gameState, playerID) {
		return new Promise((resolve, reject) => {
			var boardState;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4) {
					if (xhttp.status == 200) {
						// Parse the JSON response
						var data = JSON.parse(xhttp.responseText);
						boardState = data;
	
						for (let i = 0; i < boardState.length; i++) {
							for (let k = 0; k < this.tiles.length; k++) {
								// Get the current tile element at the 'index' position
								const element = this.tiles[k];
								// Extract the number from the tile's name using the 'extractNumberFromString' function
								var numbFromImage = extractNumberFromString(element.name);
								if (numbFromImage == boardState[i].tile_id) {
									switch (boardState[i].mpp_piece_id) {
										case 5:
											if (boardState[i].mp_pc_id == 1) {
												const whitePawn = new WhitePawn(this, element.x, element.y);
												this.add.existing(whitePawn);
												this.tilesContainer.add(whitePawn);
												for (let i = 0; i < gameState.length; i++) {
													if (playerID == gameState[i].player_id) {
														if (gameState[i].mp_pc_id == 1) {
															whitePawn.angle = 0;
														} else if (gameState[i].mp_pc_id == 2) {
															whitePawn.angle = -180;
														}
													}
												}
											} else {
												const blackPawn = new BlackPawn(this, element.x, element.y);
												this.add.existing(blackPawn);
												this.tilesContainer.add(blackPawn);
												for (let i = 0; i < gameState.length; i++) {
													if (playerID == gameState[i].player_id) {
														if (gameState[i].mp_pc_id == 1) {
															blackPawn.angle = 0;
														} else if (gameState[i].mp_pc_id == 2) {
															blackPawn.angle = -180;
														}
													}
												}
											}
											break;
									}
								}
							}
						}
						resolve(boardState);
					} else {
						reject('Error fetching board state');
					}
				}
			};
	
			// Send a GET request to the server (just testing with /match/1 endpoint)
			xhttp.open("GET", "../state/boardR/1", true);
			xhttp.send();
		});
	}
	

	tileClicked(boardState, playerID) {
		var possibleMoves;
	
		// Loop through each tile in the 'tiles' array
		for (let index = 0; index < this.tiles.length; index++) {
			// Get the current tile element at the 'index' position
			const element = this.tiles[index];
	
			// Add an event listener to the tile for the 'pointerdown' event
			element.on("pointerdown", event => {
				// Extract the number from the tile's name using the 'extractNumberFromString' function
				var numbFromImage = extractNumberFromString(element.name);
	
				for (let i = 0; i < boardState.length; i++) {
					var k = i;
					k++;
	
					if (boardState[i].mpp_ps_id && k == numbFromImage && boardState[i].playerID == playerID) {
						// Check if a tile was already pressed
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
									var numbFromImage = extractNumberFromString(element.name);
									var tilePossition = numberToCoordinates(numbFromImage);
									if (tilePossition.x == possibleMoves[i].x && tilePossition.y == possibleMoves[i].y) {
										console.log(possibleMoves);
										if (!possibleMoves[i].enemyOnTheWay) {
											const visualPossibleMoves = new Dot(this, element.x, element.y);
											this.add.existing(visualPossibleMoves);
											this.tilesContainer.add(visualPossibleMoves);
										} else {
											const killingArea = new redSquare(this, element.x, element.y);
											this.add.existing(killingArea);
											this.tilesContainer.add(killingArea);
										}
									}
								}
							}
	
							possibleMoves.push({ x: xPosition, y: yPosition });
							console.log("1st Tile Selected: ", possibleMoves);
						} else {
							// If not, set the array back to null so a new tile can be selected
							possibleMoves = makeMove(possibleMoves, numbFromImage);
						}
						break;
					}
					// Check if the user selected a tile before
					if (possibleMoves) {
						possibleMoves = makeMove(possibleMoves, numbFromImage);
					}
				}
			});
		}
	}
	

	

	create() {

		this.editorCreate();
		var playerID = -1;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				playerID = parseInt(xhttp.responseText);

				// this.updateGameState(playerID, this.updateBoardState, this.tileClicked);+
				console.log(playerID);

				async function updateStates(playerID) {
					try {
						const gameState = await this.updateGameState(playerID);
						const boardState = await this.updateBoardState.call(this, gameState, playerID);
						this.tileClicked(boardState, playerID);
					} catch (error) {
						console.error(error);
					}
				}
				
				// Assuming `this` context is correct, you can call it like this:
				updateStates.call(this, playerID);
			}
		};

		// Send a GET request to the server (just testing with /match/11 endpoint)
		xhttp.open("GET", "/signing/playerID", true);
		xhttp.send();

		// Sync the game state every 2 seconds
		var TIME_BETWEEN_SYNC = 2000;

		// // call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		// setInterval(() => {
		// 	var xhttp = new XMLHttpRequest();
		// 	xhttp.onreadystatechange = () => {
		// 		if (xhttp.readyState == 4) {
		// 			// Parse the JSON response
		// 			var data = JSON.parse(xhttp.responseText);
		// 			gameState = data;

		// 			// Get the player names from the response
		// 			var player1Name = gameState[0].player_name
		// 			var player2Name = gameState[1].player_name

		// 			// Set the player names in the game
		// 			this.userName.text = player1Name;
		// 			this.advName.text = player2Name;


		// 			for (let i = 0; i < gameState.length; i++) {
		// 				if(playerID == gameState[i].player_id){
		// 					if(gameState[i].mp_pc_id == 1){
		// 						this.tilesContainer.angle = 0;
		// 					}
		// 					else if(gameState[i].mp_pc_id == 2){
		// 						this.tilesContainer.angle = -180;
		// 					}
		// 				}
		// 			}
		// 		}
		// 	};

		// 	// Send a GET request to the server (just testing with /match/11 endpoint)
		// 	xhttp.open("GET", "../state/game/1", true);
		// 	xhttp.send();
		// }, TIME_BETWEEN_SYNC)


		// call function every 2 seconds (TIME_BETWEEN_SYNC milliseconds)
		//setInterval(this.updateGameState, TIME_BETWEEN_SYNC) 



	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function makeMove(possibleMoves, numbFromImage) {
	var cordinates = numberToCoordinates(numbFromImage);
	for (let i = 0; i < possibleMoves.length; i++) {
		//console.log(possibleMoves[i].x , possibleMoves[i].y)
		if(possibleMoves[i].x == cordinates.x && possibleMoves[i].y == cordinates.y){
			console.log(possibleMoves);
            console.log("Move from ", possibleMoves[possibleMoves.length - 1].x, possibleMoves[possibleMoves.length - 1].y," to position ", cordinates.x, cordinates.y);
            return possibleMoves = undefined;
        }
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