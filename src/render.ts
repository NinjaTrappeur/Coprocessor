import {World} from "./data/world"

export function render (world: World) {
  requestAnimationFrame(() => {
    console.log(world);
    if (world.play) {
      world.ms = (new Date().getTime() - world.startTime.getTime());
    }
    render(world);
  });
}

