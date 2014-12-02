import Ember from 'ember';

export default Ember.Object.extend(Ember.Evented, {
  registry:  Ember.Object.create(),

  // This is here so that it's easy to watch for changes using a computed
  // property if needed.
  keys:  Ember.A(),

  updateKeys: Ember.on('registration', function() {
    return this.set('keys', Ember.keys(this.get('registry')));
  }),

  lookup: function(fullName) {
    return this.get('registry.' + fullName);
  },

  register: function(fullName, instance) {
    this.set('registry.' + fullName, instance);
    this.trigger('registration', fullName, instance);

    return this.get(fullName);
  }
});
