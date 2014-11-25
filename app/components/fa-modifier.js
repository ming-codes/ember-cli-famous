import Ember from 'ember';
import Modifier from 'famous/core/Modifier';
import FamousComponent from './famous';

export default FamousComponent.extend({
  options: Ember.Object.create(),

  renderModifier: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-modifier: renderModifier');

    var modifier = new Modifier(this.get('options'));

    this.set('ctx', this.get('ctx').add(modifier));
  })
});
