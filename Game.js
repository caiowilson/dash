Dash.Game = function (game) {};

Dash.Game.prototype = {
    
    create: function () {
        
		this.dashScore = 0;
		this.gameOver = false;
		qntAnti = 0;
        dtDashes = 0;
       	antiBlockSpawn = null;
        blockSpawn = null;
		
		//physics start
		this.physics.startSystem(Phaser.Physics.ARCADE);
		        
		//blocks e antiblocks groups e props.
		this.block = this.add.group();
		this.block.checkWorldBounds = true;
  		this.block.outOfBoundsKill = true;
		this.antiBlock = this.add.group();
		this.antiBlock.enableBody = false;
		this.antiBlock.checkWorldBounds = true;
  		this.antiBlock.outOfBoundsKill = true;
				
		
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
		
		this.dashPoints = this.add.bitmapText(this.world.centerX, this.world.centerY-100, 'eightbitwonder', '0', 40);
        
    },
    
    update: function() {
		for(var i = 0, ii = this.antiBlock.length; i <= ii; i++) {
			if(this.antiBlock.getAt(i).x == player.x && !this.gameOver){//@todo fazer um check the overlap, otimizar codigo, olhar pocket e overlap em http://examples.phaser.io/_site/view_full.html?d=arcade%20physics&f=group+vs+group.js&t=group%20vs%20group
				
				this.physics.arcade.enable(player);
				player.body.gravity.y = 300;
    			player.body.collideWorldBounds = true;
				this.time.events.add(Phaser.Timer.SECOND * 3, this.restartGame, this);
				sDash.onDown.removeAll();
				dDash.onDown.removeAll(); 
				tDash.onDown.removeAll();
				this.fadeOutObj(player);
				this.gameOver = true;
				break;//@todo criar mais um state do jogo uma tela com a pontuação e um texto "toque para recomeçar" ou a tela inicial com a ultima pontuação. sei lá.
				
			}
		}
		this.dashPoints.setText(String(this.dashScore));
		Dash.Boot.lastScore = this.dashScore;
    },
	render: function () {
		//this.game.debug.text(this.game.time.fps || '--', 20, 20, '#000000');
		
	},
    fadeOutObj: function (obj) {
		obj.alpha = 1;
        var fader = this.add.tween(obj)
        fader.to({ alpha: 0 }, 1500);
		fader.start();
		
	},
	restartGame: function () {alert('Reiniciar o Jogo');this.state.start('Game');},
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