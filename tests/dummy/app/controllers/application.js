import Ember from 'ember';

export default Ember.Controller.extend({
  text: 'I\'m a surface',
  options: {
    size: [200, 200],
    properties: {
      backgroundColor: 'rgb(240, 238, 233)',
      textAlign: 'center',
      padding: '5px',
      border: '2px solid rgb(210, 208, 203)',
      marginTop: '10px',
      marginLeft: '0px'
    }
  }
});
