var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', Metknight.Boot);
game.state.add('Preloader', Metknight.Preload);
game.state.add('MainMenu', Metknight.MainMenu);
game.state.add('Game', Metknight.Game);

game.state.start('Boot');
