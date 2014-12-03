/* jshint node: true */
'use strict';

var path = require('path');
var vm = require('vm');
var fs = require('fs');

module.exports = {
  name: 'ember-cli-famous',

  detectModules: function(src) {
    var src = fs.readFileSync(src, 'utf8');
    var modules = [];
    var sandbox = { define: function(name) { modules.push(name); } };

    vm.runInNewContext(src, sandbox, 'famous.js');

    return modules;
  },

  included: function(app) {
    var famous = path.join(app.bowerDirectory, 'famous/dist');

    this.detectModules(path.join(famous, 'famous.js'))
      .forEach(function(module) {
        app.importWhitelist[module] = [ 'default' ];
      });

    app.import(path.join(famous, 'famous.css'))
    app.import({
      development: path.join(famous, 'famous.js'),
      production:  path.join(famous, 'famous.min.js')
    });

  }
};
