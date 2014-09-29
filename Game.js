Dash.Game = function (game) {};

Dash.Game.prototype = {
    
    create: function () {
        
		qntAnti = 0;
        dtDashes = 0;
       	antiBlockSpawn = null;
        blockSpawn = null;
		this.stage.backgroundColor = '#f0f0f0';
		this.physics.startSystem(Phaser.Physics.ARCADE);
		        
		this.block = this.add.group();
		this.antiBlock = this.add.group();
		this.antiBlock.enableBody = false;
				
		
        player = this.add.sprite(this.world.centerX, this.world.centerY-25, 'player');
		this.physics.arcade.enable(player);
		player.body.gravity.y = 300;
    	player.body.collideWorldBounds = true;
		
		//blocos iniciais
		this.blockSpawn = this.block.createMultiple(12,'block',null,true);
				
		for(var i = 0; i < this.block.length; i++) {
        	this.block.getAt(i).x = this.world.centerX - 25 + (25*(i+1));
			this.block.getAt(i).y = this.world.centerY;
			//this.block.getAt(i).body.immovable = true;
			//console.log(this.block.getAt(i).x);
		}
		
		//this.physics.arcade.enable(this.blockSpawn);
		//blocks.body.enableBody = true;
		//blocks.body.immovable = true;
		//blocks.gravity.y = 300;
		
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
        
    },
    
    update: function() {
       //if(this.blockSpawn){};
		//this.physics.arcade.collide(player, this.block);
    },
    
    dash: function(key) {
        
        switch(key.name){
				case 'singleDash':
					if(dtDashes > 0){
						rand =  Math.round(Math.random());
						this.createBlock(rand);
						this.moveBlocks();	
						dtDashes = 0;
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