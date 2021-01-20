const { existsSync } = require("fs");

const prebuilt = `./prebuilt/${process.platform}/desktopIdle`;
const built = `./build/Release/desktopIdle.${process.platform}`;
if (existsSync(`${prebuilt}.node`)) {
  module.exports = require(prebuilt);
} else if (existsSync(`${built}.node`)) {
  module.exports = require(built);
} else {
  throw "desktopIdle node binding not found";
}
