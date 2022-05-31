const mongoose = require("mongoose");

module.exports = class WhatscodeMongo {
  constructor(url) {
    this.url = url;
    if (!this.url) throw new Error("url required");

    const a = mongoose.connect(url, { autoIndex: true });
    a.then(() => {
      console.log("[mongodb] Connected to mongo server.");
    }).catch((e) => {
      console.log("[mongodb] Failed to connect to server.");
    });

    this.model = mongoose.model("model", { name: String, value: String });
  }
  set(name, value) {
    const s = new this.model({ name, value });
    s.save();
  }

  all() {
    return this.model.find({}, "-_id -__v");
  }

  async get(n) {
    const a = await this.model.findOne({ name: n }, "-_id -__v -name").exec()
    return a? a.value : null;
  }

  async has(n) {
    const a = await this.model.exists({ name: n });
    return a ? true : false;
  }
};
