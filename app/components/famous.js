import Ember from 'ember';

export default Ember.Component.extend({
  watcher: {},

  ctx: function() {
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
  }.property('parentView.ctx'),

  watchForPropChanges: function() {
    var watcher = this.get('watcher');

    if (!watcher || Ember.keys(watcher).length === 0) {
      return;
    }

    watcher.props.forEach(function(prop) {
      Ember.addObserver(watcher.ctx, prop, this, function() {
        Ember.run.scheduleOnce('afterRender', this, this.famousRerender);
      });
    }, this);
  }.on('didInsertElement'),

  famousRerender: function(/* dataCtx, path */) {
    throw new Error('You must implement the famousRerender method when passing in the watcher property.');
  },

  triggerFamousDidLoad: function() {
    this.get('childViews').forEach(function(view) {
      if (view.famousDidLoad) {
        view.famousDidLoad();
      }

      view.trigger('famousDidLoad');
    });
  }
});
