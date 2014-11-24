'use strict';

module.exports = {
  name: 'ember-cli-famous',

  normalizeEntityName: function() { },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'famous', target: '^0.3.1'},
      {name: 'loader.js', target: '^1.1.0'}
    ]);
  }
};
