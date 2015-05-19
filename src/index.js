;(function() {

  var ngModule = angular.module('eha.unique', [
    'eha.unique.directive'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
