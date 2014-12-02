import Ember from 'ember';

import findComponentProperty from 'ember-cli-famous/utils/find-component-property';

import Transitionable from 'famous/transitions/Transitionable';
import Transform from 'famous/core/Transform';

export default Ember.Component.extend({
  mainContext:  findComponentProperty('mainContext', 'Are you within an #fa-app component?'),
  faContainer:  findComponentProperty('faContainer', 'Are you within an #fa-app component?'),

  famousRerender: function() {
    throw new Ember.Error('You must implement the famousRerender method when passing in the watcher property.');
  },

  triggerFamousDidLoad: function(childViews) {
    Ember.A(childViews).forEach(function(view) {
      view.trigger('famousDidLoad');

      var childViews = Ember.A(view.get('childViews'));

      if (childViews && childViews.get('length')) {
        this.triggerFamousDidLoad(childViews);
      }
    }, this);
  },

  scheduleFamousRerender: Ember.on('famousBoundPropertyDidChange', function() {
    Ember.run.scheduleOnce('afterRender', this, this.famousRerender);
  }),

  addToMainContext: function(renderableObject) {
    var newContext = this.get('mainContext').add(renderableObject);
    return this.set('mainContext', newContext);
  },

  makeTransition: function(transition) {
    if (!transition.famousTransition) {
      var msg = 'You must define a famousTransition property so the addon '
      msg += 'knows which transition library to use.'
      throw new Ember.Error(msg);
    }

    Transitionable.registerMethod(transition.method, transition.famousTransition);

    var coords = transition.coordinates;

    this.get('modifier').setTransform(
      Transform.translate(coords.x, coords.y, coords.z), transition
    );
  },

  register: function(fullName, faInstance) {
    return this.get('faContainer').register(fullName, faInstance);
  },

  lookup: function(fullName) {
    return this.get('faContainer').lookup(fullName);
  },

  registerWithId: function(type, faInstance) {
    this.register(type + ':' + this.get('elementId'), faInstance);
  }
});
