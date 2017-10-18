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

  let cameraFolder = gui.addFolder("Camera");
  let camera       = world.camera;
  let cameraPos    = cameraFolder.addFolder("Position");
  let cameraRot    = cameraFolder.addFolder("Rotation");
  cameraPos.add(camera.position, "x")
  cameraPos.add(camera.position, "y")
  cameraPos.add(camera.position, "z")
  cameraRot.add(camera.rotation, "x")
  cameraRot.add(camera.rotation, "y")
  cameraRot.add(camera.rotation, "z")
  return gui;
}
