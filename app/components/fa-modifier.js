import Ember from 'ember';
import Modifier from 'famous/core/Modifier';
import FamousComponent from './famous';

export default FamousComponent.extend({
  options: Ember.Object.create(),

  modifier: null,

  transitions: null,

  renderModifier: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-modifier: renderModifier');

    var modifier = new Modifier(this.get('options'));
    this.set('modifier', modifier);

    this.addTransitionsIfAny(modifier);

    this.addToMainContext(modifier);
  }),

  addTransitionsIfAny: function() {
    // the transition object carries extra properties that famous does not use.
    // For this case, it's famousTransition and coordinates. Passing them to
    // Famous doesn't seem to be causing any issue but it's good to know.
    var transitions = this.get('transitions');

    if (!transitions) {
      return;
    }

    if (Ember.isArray(transitions)) {
      return Ember.A(transitions).forEach(function(transition) {
        this.makeTransition(transition);
      }, this);
    }

    this.makeTransition(transitions);
  }

});
