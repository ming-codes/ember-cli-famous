import Ember from 'ember';
import View from 'famous/core/Surface';
import FamousComponent from './famous';

export default FamousComponent.extend({
  tagName: '',

  hideContent: Ember.on('didInsertElement', function() {
    this.$().css('display', 'none');
  }),

  renderView: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-view: renderView');

    var view = new View(this.get('options'));

    this.addToMainContext(view);
  })
});
