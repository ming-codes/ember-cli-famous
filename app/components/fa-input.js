import Ember from 'ember';

export default Ember.TextField.extend({
  setValue: function(e) {
    this.set('value', Ember.$(e.target).val());
  },

  change: function(e) { return this.setValue(e); },
  blur:   function(e) { return this.setValue(e); },
  keyUp:  function(e) { return this.setValue(e); }
});
