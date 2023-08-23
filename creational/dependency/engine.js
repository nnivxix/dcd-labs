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
  constructor() {
    this.engine = new Engine();
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

const car = new Car();
car.stop();
car.start();
