Dash.Game = function (game) {};

Dash.Game.prototype = {
    
    create: function () {
        
        //player = null;
       // block = null;
        //spawn = null;
        //antiBlock = null;
        qntAnti = 0;
        testKey = 0;
        testBlock = 0;
        antiBlockSpawn = null;
        blockSpawn = null;
        
        player = this.add.sprite(200, 300, 'player');
        player.enableBody = true;
        block = this.add.group();
        spawn = this.add.sprite(700, 325, 'spawn');
        antiBlock = this.add.group();
        
        //agora, dDash "double dash" é modular, vinculamos ela a qualquer tecla, toque ou clique. idem para as demais.
        dDash = this.input.keyboard.addKey(Phaser.Keyboard.S);
		dDash.onDown.add(this.dash,this);
		dDash.name = 'doubleDash';
		 
        //this.dDash.isDown.add(Dash.Game.prototype.dash(this.dDash), this);
        //dDash.addCallbacks(this, Dash.Game.prototype.dash(dDash));
        //tDash = this.input.keyboard.addKey(Phaser.Keyboard.D);
        //sDash = this.input.keyboard.addKey(Phaser.Keyboard.A);
        
    },
    
    update: function() {
        //if(dDash.is){this.dash(dDash)};
        //this.dash();
		//dDash.onDownCallback = function (e){this.dash(e)};
    },
    
    dash: function(key) {
        
        switch(key.name){
                case 'dDash':
                	         console.log(key.name);//está recebendo a key.           
                    if(testKey == 1) {
                        rand =  Math.floor(Math.random());
                        qntAnti = qntAnti + rand;
                        createBlock(this.rand);

                        for(var i = 0; i < block.length; i++) {
                            block.getAt(i).x = block.getAt(i).x - 25;

                            }
                        for(var i = 0; i < antiBlock.length; i++) {
                            antiBlock.getAt(i).x = antiBlock.getAt(i).x - 25;

                            }

                        rand =  Math.floor(Math.random() * (1 - 0)) + 0;
                        qntAnti = qntAnti + rand;
                        createBlock(rand);

                        for(var i = 0; i < block.length; i++) {

                            block.getAt(i).x = block.getAt(i).x - 25;
                            testBlock = 0;	

                            }
                        for(var i = 0; i < antiBlock.length; i++) {

                            antiBlock.getAt(i).x = antiBlock.getAt(i).x - 25;
                            testBlock = 0;

                            }
                    }	

                    else {testKey = 0;}
                    break;
                default:
                    testKey = 0;
                break;
        }

    },
    
    createBlock: function (rand) {
	
        switch(rand){
                case 0:
                    this.antiBlockSpawn = antiBlock.create(spawn.x, 325,'antiBlock');
                    break;
                case 1:
                    this.blockSpawn = block.create(spawn.x, 325, 'block');
                    break;
                default:
                    this.antiBlockSpawn = antiBlock.create(spawn.x, 325,'antiBlock');
        }
    }
        
};
function createBlock(rand) {
	
    switch(rand){
            case 0:
                antiBlockSpawn = antiBlock.create(spawn.x, 325,'antiBlock');
                break;
            case 1:
                blockSpawn = block.create(spawn.x, 325, 'block');
                break;
            default:
                antiBlockSpawn = antiBlock.create(spawn.x, 325,'antiBlock');
    }
};

function createOne() {

    var blockOne = block.create(spawn.x,325, 'block');

};