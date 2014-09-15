var Dash = {};

Dash.Boot = function (game) {};

Dash.Boot.prototype = {
	
	preload: function () {
        this.load.image('preloadBar', 'images/loader_bar.png');
    },

	create: function () {
		this.input.maxPointers = 1; //@todo: decidir como vai ser o input no cel.nesse caso só uma key ou pointer por vez.
		this.stage.disableVisibilityChange = false; // pausar o jogo por exemplo
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 270; //tem que ver a proporção.
		this.scale.minHeight = 480; //idem ^
		this.scale.pageAlignHorizontally = true; //centralizar mesmo que mechendo no tamanho
		this.scale.pageAlignVertically = true; //idem ^
		this.stage.forcePortrait = true;  // forcar o portrait mode
		this.scale.setScreenSize(true);  // seta o tamanho da janela mesmo que fodasitudu
 
		this.input.addPointer();
		//this.stage.backgroundColor = '#f0f0f0'; não funciona "pq não."
        
        this.state.start('Preloader');
	}
	
};