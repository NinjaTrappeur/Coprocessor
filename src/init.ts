import * as THREE from "three";
import * as DAT from "dat-gui";
import {Scene, World, createWorld} from "./data/world"

export function init (): Promise<World> {
  return new Promise( (res, rej) => {
  createWorld().then((world)=>{
      document.body.appendChild(world.renderer.domElement);
      let gui = createDebugGui(world);
      res(world);
    });
  });
}

function createDebugGui (world: World) {
  let gui = new DAT.GUI();
  gui.add(world, "ms", 0, 256000).listen();
  let playButton = gui.add(world, "play")
  playButton.onChange(b => {
    if(b){
      world.play = true;
      world.startTime = new Date();
      world.music.play();
    }
    else{
      world.play = false;
      world.music.stop();}
  });
  return gui;
}
