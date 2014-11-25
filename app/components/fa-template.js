import Ember from 'ember';
import FamousComponent from './famous';

export default FamousComponent.extend({
  tagName: '',

  dependentKeys: Ember.A([]),
  bindCtx: Ember.Object.create(),

  setupObservers: Ember.on('famousDidLoad', function() {
    Ember.A(this.get('dependentKeys')).forEach(function(key) {
      Ember.addObserver(this.get('bindCtx'), key, this, function() {
        this.get('parentView').trigger('famousBoundPropertyDidChange', this);
      });
    }, this);
  })
});
