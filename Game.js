Dash.Game = function (game) {
    this.player = null;
    this.block = null;
    this.spawn = null;
    this.antiBlock = null;
    this.qntAnti = 0;
    this.receber = null;
    this.rand = null;
    this.i = null;
    this.testKey = 0;
    this.testBlock = 0;
    this.leftKey = null;
    this.rightKey = null;
    this.downKey = null;
    this.antiBlockSpawn = null;
    this.blockSpawn = null;
    
};

Dash.Game.prototype = {
    
    create: function () {
        
        player = this.add.sprite(200, 300, 'player');
        block = this.add.group();
        spawn = this.add.sprite(700, 325, 'spawn');
        antiBlock = this.add.group();

        leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        //leftKey.onDown
       // rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        //this.leftKey.onDown
        
       // downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        
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
    },
    
    update: function() {
        if (leftKey.isDown) {

            testKey = testKey+1;

                if(testKey == 1) {
                    qntAnti = this.qntAnti;
                    rand =  this.rnd.integerInRange(0, 1);
                    qntAnti = qntAnti + rand;
                    createBlock(rand);

                    for(i = 0; i < block.length; i++) {
                        block.getAt(i).x = block.getAt(i).x - 25;

                        }

                    for(i = 0; i < antiBlock.length; i++) {
                        antiBlock.getAt(i).x = antiBlock.getAt(i).x - 25;

                        }

                    rand =  this.rnd.integerInRange(0, 1);
                    qntAnti = qntAnti + rand;
                    createBlock(rand);

                    for(i = 0; i < block.length; i++) {

                        block.getAt(i).x = block.getAt(i).x - 25;
                        testBlock = 0;	

                        }

                    for(i = 0; i < antiBlock.length; i++) {

                        antiBlock.getAt(i).x = antiBlock.getAt(i).x - 25;
                        testBlock = 0;

                        }

                     }	
        }

        else {

            testKey = 0;
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