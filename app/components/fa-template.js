import Ember from 'ember';
import FamousComponent from './famous';

export default FamousComponent.extend({
  tagName: '',

  dependentKeys: Ember.A([]),
  bindContext: Ember.Object.create(),

  setupObservers: Ember.on('famousDidLoad', function() {
    Ember.debug('fa-template: setupObservers');
    Ember.A(this.get('dependentKeys')).forEach(function(key) {
      Ember.addObserver(this.get('bindContext'), key, this, function() {
        this.get('parentView').trigger('famousBoundPropertyDidChange', this);
      });
    }, this);
  })
});
