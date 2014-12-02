import Ember from 'ember';
import Surface from 'famous/core/Surface';
import FamousComponent from './famous';
import computedLookupById from 'ember-cli-famous/utils/computed-lookup-by-id';

export default FamousComponent.extend({
  surface: computedLookupById('surface'),

  hideContent: Ember.on('didInsertElement', function() {
    this.$().css('display', 'none');
  }),

  renderSurface: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-surface: renderSurface');
    var options = Ember.merge({
      content: this.$().html()
    }, this.get('options'));

    var surface = new Surface(options);
    this.registerWithId('surface', surface);

    this.addToMainContext(surface);
  }),

  famousRerender: function() {
    this.get('surface').setContent(this.$().html());
  }
});
