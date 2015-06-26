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
    $scope.currentOperator = null;
    $scope.currentValue = 0;
    $scope.display = '0';

    $scope.pressClear = function () {
      $scope.currentValue = 0;
      $scope.display = $scope.currentValue.toString();
    };

    $scope.pressNumber = function (value) {
      if ($scope.display === '0') {
        $scope.display = '';
      }
      $scope.display = $scope.display + value;
    };

    $scope.pressEquals = function () {
      var secondArgument = +$scope.display;

      if ($scope.currentOperator === 'divide') {
        $scope.display = ($scope.currentValue / secondArgument).toString();
      } else if ($scope.currentOperator === 'times') {
        $scope.display = ($scope.currentValue * secondArgument).toString();
      } else if ($scope.currentOperator === 'minus') {
        $scope.display = ($scope.currentValue - secondArgument).toString();
      } else if ($scope.currentOperator === 'plus') {
        $scope.display = ($scope.currentValue + secondArgument).toString();
      }
    };

    $scope.pressOperator = function (operator) {
      $scope.currentOperator = operator;
      $scope.currentValue = +$scope.display;
      $scope.display = '0';
    };

    // $scope.pressPercent = function () {
    //   $scope.display = (+$scope.display / 100).toString();
    // };

    // $scope.pressInverse = function () {
    //   $scope.display = (+$scope.display * -1).toString();
    // };

    $scope.pressModify = function (modifier) {
      $scope.display = (+$scope.display * modifier).toString();
    };

  });
