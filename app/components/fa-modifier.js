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

  renderModifier: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-modifier: renderModifier');

    var modifier = new Modifier(this.get('options'));

    this.set('mainContext', this.get('mainContext').add(modifier));
  })
});
