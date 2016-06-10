'use strict';


// require('./bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js');

var angular = require('angular');
var ngRoute = require('angular-route');
var moduleView1 = require('./view1/view1');
var moduleView2 = require('./view2/view2');
var moduleVersion = require('./components/version/version');

require('./bower_components/html5-boilerplate/dist/css/normalize.css')
require('./bower_components/html5-boilerplate/dist/css/main.css')
require('./app.css')

var MODULE_NAME = 'myApp';
var app = angular.module(MODULE_NAME, [
  ngRoute,
  moduleView1,
  moduleView2,
  moduleVersion
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

module.exports = MODULE_NAME;