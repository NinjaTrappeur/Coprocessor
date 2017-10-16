import * as THREE from "three";
import {Scene} from "../data/world";

export function loadScene1 (): Scene {
  let scene = new THREE.Scene();
  return {scene: scene};
};
