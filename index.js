const { existsSync } = require("fs");
const { resolve } = require("path");

const platform = process.platform;
const prebuilt = resolve(__dirname, `prebuilt/desktopIdle.${platform}`);
const built = resolve(__dirname, `build/Release/desktopIdle.${platform}`);
if (existsSync(`${prebuilt}.node`)) {
  module.exports = require(prebuilt);
} else if (existsSync(`${built}.node`)) {
  module.exports = require(built);
} else {
  throw `desktopIdle node binding for ${platform} not found`;
}
