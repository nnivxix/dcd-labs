const MathBasic = {
  add: function add(...args) {
    if (args.length !== 2) {
      throw new Error("fungsi add hanya menerima dua parameter");
    }

    const [first, second] = args;

    if (typeof first !== "number" || typeof second !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    return first + second;
  },
  subtract: function subtract() {},
  multiply(...args) {
    const [first, second] = args;

    if (typeof first !== "number" || typeof second !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }
    return first * second;
  },
  divide: function divide() {},
};

module.exports = MathBasic;
