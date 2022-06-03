import Phaser from "phaser";
// P2E integration: 3. import event types to communicate with ReactJS app
import { startGame } from "../store/events-slice";
import store from "../store/configure-store";
import { STARTGAME, gameEvents } from "./gameEvents";


// initial vars for game (optional)
const initState = { player: {}, score: 0, nft: "", gameOver: false };

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");

    gameEvents.on(STARTGAME, (event) => {
      // check user has signed-in; id exists
      console.log("STARTGAME:", event);
      // check user has signed-in; id exists
      //if (!event.player?.id) {
      this.sound.stopAll();
      this.sound.play("shot");
      this.scene.start("MainGame");
      //}
    });
  }

  preload() {}

  startCactusAnimation() {
    let cactus1 = this.add.image(150, 680, "assets", "cactus");
    let cactus2 = this.add.image(880, 680, "assets", "cactus").setFlipX(true);

    this.tweens.add({
      targets: cactus1,
      props: {
        scaleX: { value: 0.9, duration: 250 },
        scaleY: { value: 1.1, duration: 250 },
        angle: { value: -20, duration: 500, delay: 250 },
        y: { value: 660, duration: 250 },
      },
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: cactus2,
      props: {
        scaleX: { value: 0.9, duration: 250 },
        scaleY: { value: 1.1, duration: 250 },
        angle: { value: 20, duration: 500, delay: 250 },
        y: { value: 660, duration: 250 },
      },
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
    });
  }

  create() {
    this.add.image(512, 384, "title");
    this.startCactusAnimation();
    this.tweens.add({
      targets: this.add.image(512, -400, "logo"),
      y: 180,
      ease: "Bounce.easeOut",
      duration: 2000,
    });
    
    this.music = this.sound.play("music", { loop: true });
    
    this.input.once("pointerdown", () => {
      store.dispatch(startGame(initState));
    });
  }
}
