import Ember from 'ember';
import FamousComponent from './famous';

export default Ember.Component.extend({
  tagName: '',

  valueDidChange: function() {
    this.get('parentView').trigger('famousBoundPropertyDidChange', this);
  }.observes('value')
});
