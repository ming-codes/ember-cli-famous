import Ember from 'ember';

export default Ember.Component.extend({
  ctx: Ember.computed('parentView.ctx', function() {
    function tryParentCtx(parent) {
      var parentCtx = parent.get('ctx')

      if (parentCtx) {
        return parentCtx;
      }

      var parentsParent = parent.get('parentView');

      if (parentsParent) {
        return tryParentCtx(parentsParent);
      }

      throw new Error('Could not find parent context to return. Are you within an #fa-app component?');
    }

    return tryParentCtx(this.get('parentView'));
  }),

  famousRerender: function(/* dataCtx, path */) {
    throw new Error('You must implement the famousRerender method when passing in the watcher property.');
  },

  triggerFamousDidLoad: function() {
    Ember.A(this.get('childViews')).forEach(function(view) {
      if (view.famousDidLoad) {
        view.famousDidLoad();
      }

      view.trigger('famousDidLoad');
    });
  },

  famousDidLoad: function() {
    this.triggerFamousDidLoad();
  },

  scheduleFamousRerender: Ember.on('famousBoundPropertyDidChange', function() {
    Ember.run.scheduleOnce('afterRender', this, this.famousRerender);
  })
});
