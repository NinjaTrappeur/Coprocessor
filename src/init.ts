import * as THREE from "three";
import {Scene, createWorld} from "./data/world"

export function init () {
  let world = createWorld();
  document.body.appendChild(world.renderer.domElement);
}
