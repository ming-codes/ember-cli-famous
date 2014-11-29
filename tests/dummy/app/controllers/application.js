import Ember from 'ember';

export default Ember.Controller.extend({
  dependentKeys: ['text', 'colors.[]'],

  text: 'I\'m a surface',

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
