#!/usr/bin/env node

const fs = require("fs");
const pickKeys = require("../../../app/pickKeys.js");

fs.writeFileSync(__dirname + "/keys.json", JSON.stringify(pickKeys(), null, 4));