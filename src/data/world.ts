import * as THREE from "three";
import {loadScene1} from "../scenes/scene1";

export interface World {
  renderer:      THREE.WebGLRenderer,
  camera:        THREE.PerspectiveCamera 
  scenes:        [Scene],
  ms:            number,
  musicListener: THREE.AudioListener
}

export interface Scene {
  meshes?: [THREE.Mesh],
  lights?: [THREE.Light],
  scene:  THREE.Scene
}

export function createWorld (): World {
  let renderer      = new THREE.WebGLRenderer();
  let audioListener = new THREE.AudioListener();
  let scene1 = loadScene1()
  renderer.setSize(window.innerWidth, window.innerHeight);
  return {
    renderer: renderer,
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
    scenes: [scene1],
    ms: 0,
    musicListener: audioListener   
  };
}

