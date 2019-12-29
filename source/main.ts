/**
 * @author       Johan Lindfors <johan.lindfors@coderox.se>
 * @copyright    2018 Coderox AB
 * @license      Coderox AB
 **/

/// <reference path="scenes/mainScene.ts"/>

// main game configuration
const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

// game class
class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.onload = () => {
  var game = new Game(config);
};