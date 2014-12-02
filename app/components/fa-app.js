import Ember from 'ember';
import Engine from 'famous/core/Engine';
import FamousComponent from './famous';
import Container from 'ember-cli-famous/container';

export default FamousComponent.extend({
  mainContext: null,

  createEngine: Ember.on('didInsertElement', function() {
    Ember.debug('fa-app: createEngine');
    var mainContext = Engine.createContext(this.$()[0]);
    this.set('mainContext', mainContext);

    this.triggerFamousDidLoad(this.get('childViews'));
  }),

  faContainer: Container.create(),
})
