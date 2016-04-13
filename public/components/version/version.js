'use strict';

angular.module('angularApp.version', [
  'angularApp.version.interpolate-filter',
  'angularApp.version.version-directive'
])

.value('version', '0.1');
