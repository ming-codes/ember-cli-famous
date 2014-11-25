import Ember from 'ember';
import Engine from 'famous/core/Engine';
import Surface from 'famous/core/Surface';
import FamousComponent from './famous';

var get = Ember.get;

export default FamousComponent.extend({
  renderSurface: function() {
    var options = Ember.merge({
      content: this.$().html()
    }, this.get('options'));

    var surface = new Surface(options);

    this.set('surface', surface);
    this.get('ctx').add(surface);
  }.on('famousDidLoad'),

  famousRerender: function() {
    this.get('surface').setContent(this.$().html());
  }
});
