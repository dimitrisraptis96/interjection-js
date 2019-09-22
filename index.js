/*!
 * interjection.js v0.0.0
 * https://github.com/
 *
 * Copyright (c) 2019 DIMITRIS RAPTIS
 * Released under the MIT license
 */

const interjections = require("./interjections");

function generate() {
  return interjections[Math.floor(Math.random() * interjections.length)];
}

module.exports = generate;
