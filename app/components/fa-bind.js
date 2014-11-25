import Ember from 'ember';
import FamousComponent from './famous';

export default Ember.Component.extend({
  tagName: '',

  valueDidChange: Ember.observer('value', function() {
    this.get('parentView').trigger('famousBoundPropertyDidChange', this);
  })
});
