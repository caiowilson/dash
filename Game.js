Dash.Game = function (game) {};

Dash.Game.prototype = {
    
    create: function () {
        
		this.dashScore = 0;
		qntAnti = 0;
        dtDashes = 0;
       	antiBlockSpawn = null;
        blockSpawn = null;
		
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		        
		this.block = this.add.group();
		this.antiBlock = this.add.group();
		this.antiBlock.enableBody = false;
				
		
        player = this.add.sprite(this.world.centerX, this.world.centerY-25, 'player');
						
		//blocos iniciais
		this.blockSpawn = this.block.createMultiple(12,'block',null,true);
				
		for(var i = 0; i < this.block.length; i++) {
        	this.block.getAt(i).x = this.world.centerX - 25 + (25*(i+1));
			this.block.getAt(i).y = this.world.centerY;
		}
		
		//stage color
		this.stage.backgroundColor = "#ffffff";//em branco para melhor visualisação dos malditos blocos <3

		//Movimentação
        sDash = this.input.keyboard.addKey(Phaser.Keyboard.A);
		sDash.onDown.add(this.dash,this);
		sDash.name = 'singleDash';
		
		dDash = this.input.keyboard.addKey(Phaser.Keyboard.S);
		dDash.onDown.add(this.dash,this);
		dDash.name = 'doubleDash';
		
		tDash = this.input.keyboard.addKey(Phaser.Keyboard.D);
		tDash.onDown.add(this.dash,this);
		tDash.name = 'tripleDash';
		
		this.dashPoints = this.add.bitmapText(this.world.centerX-118, this.world.centerY-250, 'eightbitwonder', '0', 40);
        
    },
    
    update: function() {
		for(var i = 0; i <= this.antiBlock.length; i++) {
			if(this.antiBlock.getAt(i).x == player.x){
				//console.log("forninho caiu!");
				this.physics.arcade.enable(player);
				player.body.gravity.y = 3000;
    			player.body.collideWorldBounds = true;
				this.time.events.add(Phaser.Timer.SECOND * 1, this.restartGame, this);
			}
		}
		this.dashPoints.setText(String(this.dashScore));
    },
	render: function () {
		this.game.debug.text(this.game.time.fps || '--', 20, 20, '#000000');
		
		
	},
    
	restartGame: function () {this.state.start('Game');},
	
    dash: function(key) {
        
        switch(key.name){
				case 'singleDash':
					if(dtDashes > 0){
						rand =  Math.round(Math.random());
						this.createBlock(rand);
						this.moveBlocks();	
						dtDashes = 0;
						this.dashScore+= 3;
					}
				break;
				
                case 'doubleDash':
					rand =  Math.round(Math.random());
                    this.createBlock(rand);
                    this.moveBlocks();
					rand =  Math.round(Math.random());
					this.createBlock(rand);
					this.moveBlocks();
					dtDashes++;
					this.dashScore+= 1;
                break;
				
				case 'tripleDash':
					rand =  Math.round(Math.random());
                    this.createBlock(rand);
                    this.moveBlocks();
					rand =  Math.round(Math.random());
					this.createBlock(rand);
					this.moveBlocks();
					rand =  Math.round(Math.random());
                    this.createBlock(rand);
                    this.moveBlocks();
					dtDashes++;
					this.dashScore+= 2;
				break;
                default:
                break;
        }

    },
    
    createBlock: function (rand) {
		
        switch(rand){
                case 0:
					qntAnti++;
					if(qntAnti <= 2){
                    	this.antiBlockSpawn = this.antiBlock.create(this.world.width+25, this.world.centerY,'antiBlock');
						break;
					}
					else {
						qntAnti = 0;
					}
					
                case 1:
                    this.blockSpawn = this.block.create(this.world.width+25, this.world.centerY, 'block');
					qntAnti = 0	;
                    break;
        }
    },
	moveBlocks: function () {
		
		for(var i = 0; i <= this.block.length; i++) {
                    	this.block.getAt(i).x = this.block.getAt(i).x - 25;
					}
		for(var i = 0; i <= this.antiBlock.length; i++) {
						this.antiBlock.getAt(i).x = this.antiBlock.getAt(i).x - 25;
					}
			
	}
        
};