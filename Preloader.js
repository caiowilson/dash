Dash.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Dash.Preloader.prototype = {
	
	preload: function () {
        //game stuff
        this.load.image('player', 'images/player.png');
        this.load.image('block', 'images/bloco.png');
        this.load.image('spawn', 'images/spawn.png');
        this.load.image('antiBlock', 'images/antiBloco.png');
        //preload bar ;)
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');//centrar a barra de preloader
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
        //fonte
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');//em bitmap, acho que o phaser atual suporta fonte em ttf @todo: chegar se suporta para mudarmos fontes e cores sem refazer o bitmap
	},

	create: function () {
		this.preloadBar.cropEnabled = false; //força mostrar tudo
	},

	update: function () {
        this.ready = true;
        this.state.start('StartMenu');
	}
};