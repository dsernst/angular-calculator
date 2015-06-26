'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.result = 0;
    $scope.display = $scope.result;
  });
