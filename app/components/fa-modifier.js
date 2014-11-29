import Ember from 'ember';
import Modifier from 'famous/core/Modifier';
import FamousComponent from './famous';
import Transform from 'famous/core/Transform';

/*
 * Transitions
 */
import Transitionable from 'famous/transitions/Transitionable';
import CachedMap from 'famous/transitions/CachedMap';
import Easing from 'famous/transitions/Easing';
import MultipleTransitions from 'famous/transitions/MultipleTransition';
import SnapTransition from 'famous/transitions/SnapTransition';
import SpringTransition from 'famous/transitions/SpringTransition';
import TransitionableTransform from 'famous/transitions/TransitionableTransform';
import TweenTransition from 'famous/transitions/TweenTransition';
import WallTransition from 'famous/transitions/WallTransition';

export default FamousComponent.extend({
  options: Ember.Object.create(),

  modifier: null,

  transition: null,

  renderModifier: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-modifier: renderModifier');

    var modifier = new Modifier(this.get('options'));
    this.set('modifier', modifier);

    this.addTransitionsIfAny(modifier);

    this.setNewContext(modifier);
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
      var msg = 'You must defined a famousTransition property so the addon '
      msg += 'knows which transition library to import.'
      throw new Error(msg)
    }

    Transitionable.registerMethod(
      transition.method,
      // TODO: figure out a better way to do this.
      eval(transition.famousTransition)
    );

    var context = this.get('mainContext');

    var coords = transition.coordinates;

    this.get('modifier').setTransform(
      Transform.translate(coords.x, coords.y, coords.z), transition
    );
  },

  setNewContext: function(modifier) {
    this.set('mainContext', this.get('mainContext').add(modifier));
  }
});
