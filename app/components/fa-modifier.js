import Ember from 'ember';
import Modifier from 'famous/core/Modifier';
import FamousComponent from './famous';
import Transform from 'famous/core/Transform';
import Transitionable from 'famous/transitions/Transitionable';

export default FamousComponent.extend({
  options: Ember.Object.create(),

  modifier: null,

  transition: null,

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
    var transition = this.get('transition');

    if (!transition) {
      return;
    }

    if (!transition.famousTransition) {
      var msg = 'You must define a famousTransition property so the addon '
      msg += 'knows which transition library to use.'
      throw new Ember.Error(msg)
    }

    Transitionable.registerMethod(
      transition.method, transition.famousTransition
    );

    var context = this.get('mainContext');

    var coords = transition.coordinates;

    this.get('modifier').setTransform(
      Transform.translate(coords.x, coords.y, coords.z), transition
    );
  }
});
