'use strict';
var angular = require('../bower_components/angular');
var MODULE_NAME = 'myApp.view1';
angular.module(MODULE_NAME, ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    // templateUrl: 'view1/view1.html',
    template: require('./view1.html'),
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

module.exports = MODULE_NAME;