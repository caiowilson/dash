Dash.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.startInstruct;
}

Dash.StartMenu.prototype = {
	
	create: function() {
		this.startBG = this.add.bitmapText(this.world.centerX-118, this.world.centerY-150, 'eightbitwonder', 'DASH', 60);
		this.startBG.inputEnabled = true;
		this.startBG.events.onInputDown.addOnce(this.startGame, this);
		
		this.startPrompt = this.add.bitmapText(this.world.centerX-180, this.world.centerY+180, 'eightbitwonder', 'Toque para Jogar!', 24);
        
        this.startInstruct = this.add.bitmapText(this.world.centerX-245, this.world.height-20, 'eightbitwonder', 'MOUSE Esquerdo 2 blk, Direito 3 blk, Meio 1 blk', 12);
        //startInstruct.bitmapText.tint(0x000000); @todo: não funfou tem que testar com outra bitmapfont ou font mesmo acho que o phaser carrega na versao atual
	},

	startGame: function(pointer) {
		this.state.start('Game');
	}
};