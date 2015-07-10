(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'marionette', 'handlebars', 'underscore'], function(Backbone, Marionette, Handlebars, _) {
      return (root.Fretboard = factory(root, Backbone, Marionette, Handlebars, _));
    });
  } else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Marionette = require('marionette');
    var Handlebars = require('handlebars');
    module.exports = factory(root, Backbone, Marionette, Handlebars, _);
  } else {
    root.Fretboard = factory(root, root.Backbone, root.Marionette, root.Handlebars, root._);
  }

}(this, function(root, Backbone, Marionette, Handlebars, _) {

    'use strict';

    var previousFretboard = root.Fretboard;

    var Fretboard = Backbone.Fretboard = {};

    Fretboard.Views = {};

    Fretboard.VERSION = '0.0.1';

    Fretboard.noConflict = function() {
        root.Fretboard = previousFretboard;
        return this;
    };

    // Fretboard.Template
    // -------------------
    // Get an existing rendered handlebars template

    Fretboard.Template = function(name) {
        if(Handlebars.templates[name]) {
            return Handlebars.templates[name];
        }
        else {
            throw 'Cannot locate the Handlebars template with the name of "'+name+'".';
        }
    };

    return Fretboard;
}));
