import Ember from 'ember';
import SpringTransition from 'famous/transitions/SpringTransition';
import TweenTransition from 'famous/transitions/TweenTransition';
import WallTransition from 'famous/transitions/WallTransition';

export default Ember.Controller.extend({
  dependentKeys: ['text', 'colors.[]'],

  text: 'I\'m a surface',

  surface2: null,

  modifierOptions: {
    opacity: 0.5
  },

  surfaceOptions: {
    size: [200, 250],
    properties: {
      backgroundColor: 'rgb(240, 238, 233)',
      textAlign: 'center',
      padding: '5px',
      border: '2px solid rgb(210, 208, 203)',
      marginTop: '10px',
      marginLeft: '0px'
    }
  },

  transition: {
    // famousTransition is not part of Famous, but we pass it to know which
    // Famous Transition lib to use.
    famousTransition: SpringTransition,
    method: 'spring',
    period: 1000,
    dampingRatio: 0.3,
    coordinates: {
      x: 50,
      y: 0,
      z: 0
    }
  },

  anotherTransition: {
    famousTransition: TweenTransition,
    method: 'tween',
    curve: 'easeInOut',
    duration: 800,
    coordinates: {
      x: 300,
      y: -200,
      z: 0
    }
  },

  thirdTransition: {
    famousTransition: WallTransition,
    method: 'wall',
    dampingRatio: 0.2,
    period: 800,
    coordinates: {
      x: 500,
      y: -200,
      z: 0
    }
  },

  chainedTransitions: function() {
    return [
      this.get('thirdTransition'),
      this.get('transition'),
      this.get('anotherTransition')
    ];
  }.property('anotherTransition', 'transition', 'thirdTransition'),

  surface2Options: {
    size: [75, 75],
    properties: {
      backgroundColor: 'red',
      marginTop: '5px'
    }
  },

  colors: [
    'green', 'red'
  ],

  // If you assing a property to the surface key on the fa-surface componenent,
  // you can get the actual Famous Surface bound to that property. This is
  // useful if you need to work directy with the surface, for example, for
  // events.
  // The following function will run when the Surface gets bound to the surface2
  // property in order to add an event handler to the Surface itself.
  surface2Events: Ember.observer('surface2', function() {
    var surface = this.get('surface2');
    surface.on('click', function() {
      this.setContent('I haz clicked!');
      this.setProperties({
        backgroundColor: 'blue'
      });
    });
  }),

  actions: {
    deleteColor: function(color) {
      this.get('colors').removeObject(color);
    },

    resetColors: function() {
      this.set('colors', [
        'green', 'red'
      ]);
    },

    addColor: function() {
      var newColor = this.get('newColor');
      this.get('colors').pushObject(newColor);
    }
  }
});
