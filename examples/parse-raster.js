"use strict";

var fs = require('fs');
var path = require('path');
var s = require('../test/support');
var npos = require('../');
var raster = npos.codecs.raster;

var parser = npos.parser();

var raw = fs.readFileSync(path.join(__dirname, 'fixtures', 'raster-2.bin'));
console.time('parse');
parser.parse(raw).then(function (ast) {
  console.timeEnd('parse');
  npos.textualize(ast, {
    ocr: {
      tessdata: s.fixtures('tessdata'),
      language: 'pos.chs.fast'
    }
  }).then(function (results) {
    console.log(results);
  });
});
