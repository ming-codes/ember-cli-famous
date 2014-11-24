import Ember from 'ember';
import View from 'famous/core/View';

export default Ember.Controller.extend({
  text: 'Hey',
  options: {
    size: [200, 200],
    properties: {
      backgroundColor: 'rgb(240, 238, 233)',
      textAlign: 'center',
      padding: '5px',
      border: '2px solid rgb(210, 208, 203)',
      marginTop: '50px',
      marginLeft: '50px'
    }
  }
});
