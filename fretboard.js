(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fretboard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	<div class=\"fretboard--fret ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.highlight), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-fret=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"left:";
  if (helper = helpers.left) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.left); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%\">\n		";
  options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}
  if (helper = helpers.notes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.notes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inlays), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "fretboard--highlight";
  }

function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n			<div class=\"fretboard--note\" data-note=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\n		";
  return buffer;
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"fretboard-inlays\">\n			<div class=\"fretboard--inlay\"></div>\n			";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.highlight), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n			<div class=\"fretboard--inlay\"></div>\n			";
  }

function program9(depth0,data) {
  
  var buffer = "";
  buffer += "\n	<div class=\"fretboard--string\" data-string=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.frets) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.frets); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.frets) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"fretboard--strings\">\n";
  options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}
  if (helper = helpers.strings) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.strings); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.strings) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
}());
(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('handlebars'));
    } else if (typeof define === 'function' && define.amd) {
        define(['handlebars'], factory);
    } else {
        root.HandlebarsHelpersRegistry = factory(root.Handlebars);
    }
}(this, function (Handlebars) {
    
    Handlebars.registerHelper('eachProperty', function(context, options) {
    	var ret = [];

    	if(_.isObject(context)) {
	    	_.each(context, function(value, property) {
	    		var parse = {
	    			property: property,
	    			value: value
	    		};

	    		ret.push(options.fn(parse));
	    	});
	    }

    	return ret.join("\n");
    });

}));

(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('handlebars'));
    } else if (typeof define === 'function' && define.amd) {
        define(['handlebars'], factory);
    } else {
        root.HandlebarsHelpersRegistry = factory(root.Handlebars);
    }
}(this, function (Handlebars) {

    var isArray = function(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };

    var ExpressionRegistry = function() {
        this.expressions = [];
    };

    ExpressionRegistry.prototype.add = function (operator, method) {
        this.expressions[operator] = method;
    };

    ExpressionRegistry.prototype.call = function (operator, left, right) {
        if ( ! this.expressions.hasOwnProperty(operator)) {
            throw new Error('Unknown operator "'+operator+'"');
        }

        return this.expressions[operator](left, right);
    };

    var eR = new ExpressionRegistry();
    eR.add('not', function(left, right) {
        return left != right;
    });
    eR.add('>', function(left, right) {
        return left > right;
    });
    eR.add('<', function(left, right) {
        return left < right;
    });
    eR.add('>=', function(left, right) {
        return left >= right;
    });
    eR.add('<=', function(left, right) {
        return left <= right;
    });
    eR.add('==', function(left, right) {
        return left == right;
    });
    eR.add('===', function(left, right) {
        return left === right;
    });
    eR.add('!==', function(left, right) {
        return left !== right;
    });
    eR.add('in', function(left, right) {
        if ( ! isArray(right)) {
            right = right.split(',');
        }
        return right.indexOf(left) !== -1;
    });

    var isHelper = function() {
        var args = arguments,
            left = args[0],
            operator = args[1],
            right = args[2],
            options = args[3];

        if (args.length == 2) {
            options = args[1];
            if (left) return options.fn(this);
            return options.inverse(this);
        }

        if (args.length == 3) {
            right = args[1];
            options = args[2];
            if (left == right) return options.fn(this);
            return options.inverse(this);
        }

        if (eR.call(operator, left, right)) {
            return options.fn(this);
        }
        return options.inverse(this);
    };

    Handlebars.registerHelper('is', isHelper);

    /*
    Handlebars.registerHelper('nl2br', function(text) {
        var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
        return new Handlebars.SafeString(nl2br);
    });

    Handlebars.registerHelper('log', function() {
        console.log(['Values:'].concat(
            Array.prototype.slice.call(arguments, 0, -1)
        ));
    });

    Handlebars.registerHelper('debug', function() {
        console.log('Context:', this);
        console.log(['Values:'].concat(
            Array.prototype.slice.call(arguments, 0, -1)
        ));
    });
	*/

    return eR;

}));
(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('handlebars'));
    } else if (typeof define === 'function' && define.amd) {
        define(['handlebars'], factory);
    } else {
        root.HandlebarsHelpersRegistry = factory(root.Handlebars);
    }
}(this, function (Handlebars) {

    Handlebars.registerHelper('not', function(value, options) {
    	return !value || value == 0 ? options.fn(value) : false;
    });

    Handlebars.registerHelper('undefined', function(value, options) {
    	return _.isUndefined(value) ? true : false;
    });

}));

(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('handlebars'));
    } else if (typeof define === 'function' && define.amd) {
        define(['handlebars'], factory);
    } else {
        root.HandlebarsHelpersRegistry = factory(root.Handlebars);
    }
}(this, function (Handlebars) {

    Handlebars.registerHelper('propertyOf', function(object, prop) {
        if(object.hasOwnProperty(prop)) {
            return new Handlebars.SafeString(object[prop]);
        }

        return null;
    });

}));

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

(function() {

	"use strict";

	Fretboard.Views.Fretboard = Marionette.ItemView.extend({

		className: 'fretboard--board',

		template: Fretboard.Template('fretboard'),

		options: {
			masterScale: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'],
			inlays: [3, 5, 7, 9, 12, 15, 17, 19],
			highlightFrets: [12],
			strings: ['E', 'A', 'D', 'G', 'B', 'E'],
			frets: 19,
			availableChords: {
				'major': [1, 5, 8],
				'minor': [1, 4, 8],
				'major 7th': [1, 5, 8, 12],
				'minor 7th': [1, 4, 8, 11],
				'dominant 7th': [1, 5, 8, 11],
				'suspended': [1, 6, 8],
				'diminished': [1, 4, 7],
				'augmented': [1, 5, 9]
			},
			availableScales: {
				'major': [1, 3, 5, 6, 8, 10, 12],
				'minor': [1, 3, 4, 6, 8, 9, 11],
				'major pentatonic': [1, 3, 5, 8, 10],
				'minor pentatonic': [1, 4, 6, 8, 11],
				'major blues': [1, 3, 4, 5, 8, 10],
				'minor blues': [1, 4, 6, 7, 8, 11],
				'ionian': [1, 3, 5, 6, 8, 10, 12],
				'dorian': [3, 5, 6, 8, 10, 12, 1],
				'phrygian': [5, 6, 8, 10, 12, 1, 3],
				'lydian': [6, 8, 10, 12, 1, 3, 5],
				'mixolydian': [8, 10, 12, 1, 3, 5, 6],
				'aeolian': [10, 12, 1, 3, 5, 6, 8],
				'locrian': [12, 1, 3, 5, 6, 8, 10]
			}
		},

		events:  {
			'mouseover .fretboard--note': function(e) {
				this.triggerMethod('note:hover', e);
			},
			'mouseout .fretboard--note': function(e) {
				this.triggerMethod('note:blur', e);
			},
			'click .fretboard--note': function(e) {
				this.triggerMethod('note:click', e);
			}
		},

		onNoteHover: function(e) {
			$(e.target).addClass('hover');
		},

		onNoteBlur: function(e) {
			$(e.target).removeClass('hover');
		},

		onNoteClick: function(e) {
			var note = $(e.target).data('note');

			//this.highlightRoot(note);
			this.unhighlightRoot();
			this.highlightNote(note);

			// $('[data-note="'++'"]').removeClass('root');
			// $('[data-note="'+$(e.target).data('note')+'"]').toggleClass('active');
		},

		getScale: function(scale) {
			if(this.getOption('availableScales')[scale]) {
				return this.getOption('availableScales')[scale];
			}

			throw new Error('The scale is not available: ' + scale);
		},

		getChord: function(chord) {
			if(this.getOption('availableChords')[chord]) {
				return this.getOption('availableChords')[chord];
			}

			throw new Error('The scale is not available: ' + chord);
		},

		getScaleNotes: function(key, scale) {
			var offset = this.getOption('masterScale').indexOf(key);

			var scale = this.getScale(scale);
			var notes = [];

			for(var i in scale) {
				var note = ((scale[i] - 1 + offset) % 12);

				notes.push(this.getOption('masterScale')[note]);
			}

			return notes;
		},

		getChordNotes: function(key, chord) {
			var offset = this.getOption('masterScale').indexOf(key);

			var chord = this.getChord(chord);
			var notes = [];

			for(var i in chord) {
				var note = ((chord[i] - 1 + offset) % 12);

				notes.push(this.getOption('masterScale')[note]);
			}

			return notes;
		},

		showNotes: function(notes) {
			this.unhighlightNotes();
			this.unhighlightRoot();

			this.highlightRoot(notes[0]);

			for(var i in notes) {
				var note = notes[i];

				this.highlightNote(note);
			}
		},

		highlightRoot: function(note) {
			this.$el.find('[data-note="'+note+'"]').addClass('root');
		},

		unhighlightRoot: function() {
			this.$el.find('.fretboard--note.root').removeClass('root');
		},

		unhighlightNotes: function() {
			this.$el.find('.fretboard--note.active').removeClass('active');
		},

		highlightNote: function(note) {
			this.$el.find('[data-note="'+note+'"]').addClass('active');
		},

		templateHelpers: function() {
			var strings = this.getOption('strings');
			var frets = [], left = 100 / this.getOption('frets');

			for(var x = 0; x <= this.getOption('frets'); x++) {
				var notes = [];

				for(var i in strings) {
					var string = strings[(strings.length - 1) - i];
					var note = this.getOption('masterScale')[(this.getOption('masterScale').indexOf(string) + x) % 12];

					notes.push(note);
				}

				frets.push({
					left: left + (left * (x - 1)),
					value: x,
					highlight: this.getOption('highlightFrets').indexOf(x) >= 0,
					inlays: this.getOption('inlays').indexOf(x) >= 0,
					notes: notes
				});
			}

			return {
				frets: frets,
				strings: this.getOption('strings')
			};
		}

	});

}());