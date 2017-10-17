import * as THREE from "three";
import {Scene, World, createWorld} from "./data/world"

export function init (): Promise<World> {
  let worldPromise = createWorld ();
  createWorld().then((world)=>{
    document.body.appendChild(world.renderer.domElement);
    world.music.play();
  });
  return worldPromise;
}
