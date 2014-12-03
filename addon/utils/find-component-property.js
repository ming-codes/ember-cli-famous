import Ember from 'ember';

export default function(propertyName, errMsg) {
  return Ember.computed('parentView.' + propertyName, function() {
    function tryParentContext(parent) {
      var parentContext = parent.get(propertyName);

      if (parentContext) {
        return parentContext;
      }

      var parentsParent = parent.get('parentView');

      if (parentsParent) {
        return tryParentContext(parentsParent);
      }

      throw new Ember.Error('Could not find parent view ' + propertyName + ' to return. ' + errMsg);
    }

    return tryParentContext(this.get('parentView'));
  });
}
