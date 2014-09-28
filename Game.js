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
              
        spawn = this.add.sprite(this.world.centerX+1, this.world.centerY, 'spawn');
		spawn.anchor.setTo(0 , 1);
        
		this.block = this.add.group();
        this.antiBlock = this.add.group();
		        
        //agora, dDash "double dash" é modular, vinculamos ela a qualquer tecla, toque ou clique. idem para as demais.
        dDash = this.input.keyboard.addKey(Phaser.Keyboard.S);
		dDash.onDown.add(this.dash,this);
		dDash.name = 'doubleDash';
		tDash = this.input.keyboard.addKey(Phaser.Keyboard.D);
		tDash.onDown.add(this.dash,this);
		tDash.name = 'tripleDash';
		//this.spawn.
       
        var blockOne = this.block.create(this.world.centerX+1,this.world.centerY, 'block');//@todo: arrumar a posição dos blocos iniciais.
    },
    
    update: function() {
       if(this.blockSpawn){};
    },
    
    dash: function(key) {
        //console.log("Recebendo a key: "+key.name);
        switch(key.name){
                case 'doubleDash':
                    rand =  Math.round(Math.random());
					qntAnti = qntAnti + rand;
                    this.createBlock(rand);
                    
					for(var i = 0; i < this.block.length; i++) {
                    	this.block.getAt(i).x = this.block.getAt(i).x - 25;
					}
					for(var i = 0; i < this.antiBlock.length; i++) {
						this.antiBlock.getAt(i).x = this.antiBlock.getAt(i).x - 25;
					}

                    
                break;
				
				case 'tripleDash':
				break;
				
				case 'singleDash':
				break;
				
                default:
                break;
        }

    },
    
    createBlock: function (rand) {
		//console.log("dentro do createblock com rand = "+rand);
        switch(rand){
                case 0:
                    this.antiBlockSpawn = this.antiBlock.create(this.world.width+1, this.world.centerY,'antiBlock');
					//this.antiBlockSpawn.anchor.setTo(0 , 0);
                    break;
                case 1:
                    this.blockSpawn = this.block.create(this.world.width+1, this.world.centerY, 'block');
                    break;
                default:
                    break;
        }
    }
        
};

function createOne() {

    

};