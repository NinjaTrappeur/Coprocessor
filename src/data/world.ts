import * as THREE from "three";
import {loadScene1} from "../scenes/scene1";

export interface World {
  renderer:      THREE.WebGLRenderer,
  camera:        THREE.PerspectiveCamera 
  scenes:        [Scene],
  startTime?:    Date,
  ms:            number,
  play:          boolean,
  music:         THREE.Audio,
  audioListener: THREE.AudioListener
}

export interface Scene {
  meshes?: [THREE.Mesh],
  lights?: [THREE.Light],
  scene:   THREE.Scene
}

interface AudioParams{
  audio:         THREE.Audio,
  audioListener: THREE.AudioListener
}

export function createWorld (): Promise<World> {
  return new Promise((worldResolve, worldReject) => {
    let musicPromise:Promise<AudioParams> = new Promise((res, rej) => {
          let audioListener = new THREE.AudioListener();
          let audioLoader   = new THREE.AudioLoader();
          let audio         = new THREE.Audio(audioListener);
          audioLoader.load("music.mp3", (buffer) => {
            audio.setBuffer(buffer);
            let result = {audio: audio, audioListener: audioListener}
            res(result);
            }, 
          () => {},
          () => {});
      });
      let promises: [Promise<AudioParams>, Promise<Scene>] = [musicPromise, loadScene1()]
      let worldPromises = Promise.all(promises);
      worldPromises.then( prList => {
        let renderer = new THREE.WebGLRenderer();
        let music    = prList[0]
        renderer.setSize(window.innerWidth, window.innerHeight);
        worldResolve({
          renderer: renderer,
          camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
          scenes: [prList[1]],
          ms: 0,
          play: false,
          music: music['audio'],
          audioListener: music['audioListener']});
      });
  });
}
