class Logging {
  constructor() {
    if (typeof Logging.INSTANCE === "object") {
      return Logging.INSTANCE;
    }

    this.logs = [];
    Logging.INSTANCE = this;
  }

  addLog(log) {
    this.logs.push(log);
  }

  viewLogs() {
    console.log(this.logs);
    // console.log(typeof Logging.INSTANCE);
  }
}

const loggingA = new Logging();
const loggingB = new Logging();

loggingA.addLog("log 1");
loggingB.addLog("log 2");
loggingB.addLog("log 3");

loggingA.viewLogs();
// console.log(loggingA.viewLogs());
