import Ember from 'ember';
import Engine from 'famous/core/Engine';
import FamousComponent from './famous';

export default FamousComponent.extend({
  ctx: null,

  createEngine: function() {
    var ctx = Engine.createContext(this.$()[0]);
    this.set('ctx', ctx);

    this.triggerFamousDidLoad();
  }.on('didInsertElement'),

  triggerFamousDidLoad: function() {
    this.get('childViews').forEach(function(view) {
      view.trigger('famousDidLoad');
    });
  }
})
