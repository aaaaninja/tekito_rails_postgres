export default class Greeter {
  constructor(name) {
    this.name = name;
  }

  hello() {
    const element = document.getElementById("message");
    element.innerHTML = `hellooooooo, ${this.name}!!!!!!!!!`;
  }
}
