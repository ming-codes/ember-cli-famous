import Ember from 'ember';

export default function(properties, dataCtx) {
  return function() {
    return {
      ctx: dataCtx || this,
      props: Ember.makeArray(properties)
    };
  }.property();
}
