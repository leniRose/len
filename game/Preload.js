Metknight.Preload=function(){
    this.ready=false;
};

Metknight.Preload.prototype={
    preload: function(){
      this.splash=this.add.sprite(this.game.world.centerX,this.game.world.centerY-30, 'logo' );
      this.splash.anchor.setTo(0.5);

      this.preloadBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY+185, 'preloadbar' );
      this.preloadBar.anchor.setTo(0.5);
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('ground', 'assets/images/ground.png');
      this.load.image('background', 'assets/images/dark.png')
      this.load.image('foreground', 'assets/images/foreground.png')

      this.load.spritesheet('coins', 'assets/images/icon.png', 150, 150, 1);
      this.load.spritesheet('player', 'assets/images/mona.png', 156, 224, 1);
      this.load.spritesheet('jet', 'assets/images/jets.png', 500, 500, 1);

      this.load.audio('gameMusic' , ['assets/audio/Pamgaea.mp3' , 'assets/audio/Pamgaea.ogg']);
      this.load.audio('rocket' , 'assets/audio/rocket.wav');
      this.load.audio('bounce', 'assets/audio/bounce.wav');
      this.load.audio('coin' , 'assets/audio/coin.wav');
      this.load.audio('death' , 'assets/audio/death.wav');

      this.load.bitmapFont('minecraftia','assets/fonts/minecraftia/minecraftia.png','assets/fonts/minecraftia/minecraftia.xml');

      this.load.onLoadComplete.add(this.onLoadComplete, this);
      },
      create:function(){
        this.preloadBar.cropEnabled = false;
      },
      update : function(){
        if(this.cache.isSoundDecoded('gameMusic') && this.ready === true){
          this.state.start('MainMenu');
      }
      },
      onLoadComplete: function(){
        this.ready = true;
      }
      };
