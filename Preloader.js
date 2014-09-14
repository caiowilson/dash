Dash.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
}

Dash.Preloader.prototype = {
	
	preload: function() {
        //game stuff
        this.load.image('player', 'images/player.png');
        this.load.image('block', 'images/bloco.png');
        this.load.image('spawn', 'images/spawn.png');
        this.load.image('antiBlock', 'images/antiBloco.png');
        
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');//centrar a barra de preloader
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
	},

	create: function() {
		this.preloadBar.cropEnabled = false; //força mostrar tudo
	},

	update: function() {
	   	this.ready = true;
        this.state.start('StartMenu');
	}
};