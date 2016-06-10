'use strict';

var MODULE_NAME = 'myApp.version.version-directive';

module.export = angular.module(MODULE_NAME, [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

module.exports = MODULE_NAME;