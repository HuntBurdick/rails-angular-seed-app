'use strict';

describe('angularApp.version module', function() {
  beforeEach(module('angularApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
