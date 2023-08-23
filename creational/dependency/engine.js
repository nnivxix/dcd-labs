class Engine {
  constructor() {
    this.status = "inactive";
  }

  activate() {
    this.status = "active";
  }
  inActivate() {
    this.status = "inactive";
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.activate();

    console.log(`status mesin: ${this.engine.status}`);
  }

  stop() {
    this.engine.inActivate();

    console.log(`status mesin: ${this.engine.status}`);
  }
}

const engine = new Engine();
const car = new Car(engine);
car.stop();
car.start();
