'use strict';
var interpolateFilter = require('./interpolate-filter');
var versionDirective = require('./version-directive');

var MODULE_NAME = 'myApp.version';

angular.module(MODULE_NAME, [
  interpolateFilter,
  versionDirective
])

.value('version', '0.1');


module.exports = MODULE_NAME;