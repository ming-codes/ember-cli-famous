import Ember from 'ember';

export default function(type) {
  return Ember.computed('elementId', function() {
    return this.lookup(type + ':' + this.get('elementId'));
  });
}
