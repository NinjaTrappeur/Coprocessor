import {init} from "./init";
import {render} from "./render";

main();

function main() {
  init().then(world =>{
    render(world);
  });
}
