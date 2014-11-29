import Ember from 'ember';
import Engine from 'famous/core/Engine';
import FamousComponent from './famous';

export default FamousComponent.extend({
  mainContext: null,

  createEngine: Ember.on('didInsertElement', function() {
    Ember.debug('fa-app: createEngine');
    var mainContext = Engine.createContext(this.$().get(0));
    this.set('mainContext', mainContext);

    this.triggerFamousDidLoad(this.get('childViews'));
  })
})
