import Ember from 'ember';
import Engine from 'famous/core/Engine';

export default Ember.Component.extend({
  ctx: null,

  createEngine: function() {
    this.set('ctx', Engine.createContext(this.$()[0]));
  }.on('didInsertElement')
})
