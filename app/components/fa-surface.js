import Ember from 'ember';
import Engine from 'famous/core/Engine';
import Surface from 'famous/core/Surface';

var get = Ember.get;

export default Ember.Component.extend({
  ctx: Ember.computed.alias('parentView.ctx'),

  renderSurface: function() {
    var html = this.$().html();
    var surface = new Surface(Ember.merge({
      content: html
    }, this.get('options')));

    this.$().html('');
    this.get('ctx').add(surface)
  }.on('didInsertElement')
});
