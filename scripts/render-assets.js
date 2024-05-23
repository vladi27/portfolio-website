"use strict";
const fs = require("fs");
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderAssets() {
  const sourcePath = upath.resolve(upath.dirname(__filename), "../src/assets");
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/.");
  const headersPath = upath.resolve(
    upath.dirname(__filename),
    "../src/_headers"
  );

  sh.cp("-R", sourcePath, headersPath, destPath);
  // sh.cp("-R", headersPath, destPath);
};
