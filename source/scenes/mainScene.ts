/**
 * @author       Johan Lindfors <johan.lindfors@coderox.se>
 * @copyright    2018 Coderox AB
 * @license      Coderox AB
 **/

class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;
  
    constructor() {
      super({
        key: "MainScene"
      });
    }
  
    preload(): void {
      this.load.image("cube", "./assets/cube.png");
    }
  
    create(): void {
      this.phaserSprite = this.add.sprite(400, 300, "cube");
    }
}
