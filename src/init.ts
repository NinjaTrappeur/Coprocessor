import * as THREE from "three";
import * as DAT from "dat-gui";
import {Scene, World, createWorld} from "./data/world"

export function init (): Promise<World> {
  let worldPromise = createWorld ();
  createWorld().then((world)=>{
    document.body.appendChild(world.renderer.domElement);
    let gui = new DAT.GUI();
    gui.add(world, "ms", 0, 256000).listen();
    let playButton = gui.add(world, "play")
    playButton.onChange(b => {
      if(b){world.music.play();}
      else{world.music.stop();}})
  });
  return worldPromise;
}
