'use strict';

var MODULE_NAME = 'myApp.version.interpolate-filter';

angular.module(MODULE_NAME, [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

module.exports = MODULE_NAME;