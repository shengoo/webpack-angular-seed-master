'use strict';

var MODULE_NAME = 'myApp.view2';

angular.module(MODULE_NAME, ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

module.exports = MODULE_NAME;