Dash.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.startInstruct;
}

Dash.StartMenu.prototype = {
	
	create: function() {
        this.startBG = this.add.bitmapText(this.world.centerX-118, this.world.centerY-150, 'eightbitwonder', 'DASH', 60);
		this.startBG.inputEnabled = true;
		
		this.startPrompt = this.add.bitmapText(this.world.centerX-180, this.world.centerY-50, 'eightbitwonder', 'Toque para Jogar!', 24);
		this.startPrompt.inputEnabled = true;
        
        this.startInstruct = this.add.bitmapText(this.world.centerX-100, this.world.height-30, 'eightbitwonder', 'Controles A S D', 14);
				
		
		//on down events pra começar
		this.startPrompt.events.onInputDown.addOnce(this.startGame, this);
		this.startBG.events.onInputDown.addOnce(this.startGame, this);
        //this.startInstruct.bitmapText(0x00FF00); //@todo: não funfou tem que testar com outra bitmapfont ou font mesmo acho que o phaser carrega na versao atual
	},

	startGame: function(pointer) {
		this.state.start('Game');
	}
};