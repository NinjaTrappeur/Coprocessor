import * as THREE from "three";
import {Scene} from "../data/world";

export function loadScene1 (): Promise<Scene> {
  return new Promise( (resolve, reject) => {
    let scene = new THREE.Scene();
      resolve({scene: scene});
    }
  );
}
