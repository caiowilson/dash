Dash.Game = function (game) {};

Dash.Game.prototype = {
    
    create: function () {
        
        //player = null;
       // block = null;
        //spawn = null;
        //antiBlock = null;
        qntAnti = 0;
        testBlock = 0;
       	antiBlockSpawn = null;
        blockSpawn = null;
		this.stage.backgroundColor = '#f0f0f0'; //não funciona "pq não."
		        
		this.block = this.add.group();
        this.antiBlock = this.add.group();
		        
        //agora, dDash "double dash" é modular, vinculamos ela a qualquer tecla, toque ou clique. idem para as demais.
        sDash = this.input.keyboard.addKey(Phaser.Keyboard.A);
		sDash.onDown.add(this.dash,this);
		sDash.name = 'singleDash';
		
		dDash = this.input.keyboard.addKey(Phaser.Keyboard.S);
		dDash.onDown.add(this.dash,this);
		dDash.name = 'doubleDash';
		
		tDash = this.input.keyboard.addKey(Phaser.Keyboard.D);
		tDash.onDown.add(this.dash,this);
		//tDash.onDown.add(this.dash,this);
		//tDash.onDown.add(this.dash,this); //testar adicionar o evento 3 vezes invés de tratar no metodo
		tDash.name = 'tripleDash';
		
		
		//this.spawn.
		//refazer o posicionamento
        spawn = this.add.sprite(this.world.centerX, this.world.centerY-25, 'spawn');
		//this.spawn.anchor.setTo(1 , 1);
		blockOne = this.block.create(this.world.centerX,this.world.centerY, 'block');//@todo: arrumar a posição dos blocos iniciais.fazer um "floor"
		this.stage.backgroundColor = "#ffffff";//em branco para melhor visualisação dos malditos blocos <3
        
    },
    
    update: function() {
       //if(this.blockSpawn){};
    },
    
    dash: function(key) {
        //console.log("Recebendo a key: "+key.name);
		
        switch(key.name){
				case 'singleDash':
					rand =  Math.round(Math.random());
                    this.createBlock(rand);
                    this.moveBlocks();										
				break;
				
                case 'doubleDash':
					rand =  Math.round(Math.random());
                    this.createBlock(rand);
                    this.moveBlocks();
					rand =  Math.round(Math.random());
					this.createBlock(rand);
					this.moveBlocks();
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