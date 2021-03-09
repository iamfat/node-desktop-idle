const { existsSync } = require("fs");
const { resolve } = require("path");

const tag = `${process.platform}-${process.arch}`;
const prebuilt = resolve(__dirname, `prebuilt/desktopIdle.${tag}`);
const built = resolve(__dirname, `build/Release/desktopIdle.${tag}`);
if (existsSync(`${built}.node`)) {
  module.exports = require(built);
} else if (existsSync(`${prebuilt}.node`)) {
  module.exports = require(prebuilt);
} else {
  throw `desktopIdle node binding for ${tag} not found`;
}
