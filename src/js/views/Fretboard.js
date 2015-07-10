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