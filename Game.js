Dash.Game = function(game) {};

Dash.Game.prototype = {
    
    create: function() {
        //var creation
        var player;var block;var spawn;var antiBlock;var qntAnti = 0;var receber;var alea;var i;var testKey = 0;var testBlock = 0;var leftKey;var rightKey;var downKey;
        
        this.stage.backgroundColor = '#fff';
        player = this.add.sprite(200, 300, 'player');
        block = this.add.group();
        spawn = this.add.sprite(700,325, 'spawn');
        antiBlock = this.add.group();

        leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        
    },
    
    update: function() {
            if (leftKey.isDown) {

            testKey = testKey +1;

                if(testKey == 1) {

                    rand =  game.rnd.integerInRange(0, 1);
                    qntAnti = qntAnti + rand;
                    createBlock(rand);

                    for(i = 0; i < block.length; i++) {
                        block.getAt(i).x = block.getAt(i).x - 25;

                        }

                    for(i = 0; i < antiBlock.length; i++) {
                        antiBlock.getAt(i).x = antiBlock.getAt(i).x - 25;

                        }

                    rand =  game.rnd.integerInRange(0, 1);
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
    function createBlock(rand) {
	
        if(rand == 0||rand == null){

            var blockSpawn = block.create(spawn.x, 325, 'block');

            }

        if(rand == 1){

            var antiBlockSpawn = antiBlock.create(spawn.x, 325,'antiBlock');

            }
    }

    function createOne() {

        var blockOne = block.create(spawn.x,325, 'block');

    }
};