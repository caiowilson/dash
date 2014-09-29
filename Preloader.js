Dash.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Dash.Preloader.prototype = {
	
	preload: function () {
        //game stuff loading
        this.load.image('block', 'images/bloco.png');
        this.load.image('player', 'images/spawn.png');
        this.load.image('antiBlock', 'images/antiBloco.png');	
        //preload bar ;)
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');//centrar a barra de preloader
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
        //fonte
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');//em bitmap, acho que o phaser atual suporta fonte em ttf @todo: checar se suporta para mudarmos fontes e cores sem refazer o bitmap
		//adicionando advanced timming pra ver o fps.
		this.time.advancedTiming = true;
		
	},

	create: function () {
		this.preloadBar.cropEnabled = false; //força mostrar tudo
	},

	update: function () {
        this.ready = true;
        this.state.start('StartMenu');
	}
};