/*jshint expr: true*/
describe('eha.unique.directive', function() {
  'use strict';

  beforeEach(module('eha.unique.directive'));

  var scope;
  var element;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<form name="form">' +
      '<input name="unique" ng-model="model.result" eha-unique="model.left" eha-unique-property="{{model.right}}">' +
      '</form>'
    );
    scope = $rootScope.$new();
    scope.model = {
      result: '',
      left: {},
      right: 'hello'
    };
    element = $compile(element)(scope);
  }));

  it('should invalidate if property matches', function() {
    scope.form.unique.$setViewValue('hello');
    scope.model.left = {
      hello: 'hello'
    };
    scope.$digest();
    expect(scope.form.unique.$valid).toBe(false);
  });
});
