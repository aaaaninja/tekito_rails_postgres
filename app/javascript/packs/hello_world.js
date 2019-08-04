import $ from "jquery/dist/jquery";
import Greeter from "../modules/greeter";

$("#button").on("click", () => {
  const g = new Greeter("alice");
  g.hello();
});
