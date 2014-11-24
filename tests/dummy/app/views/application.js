import Ember from 'ember';
import Engine from 'famous/core/Engine';
import Surface from 'famous/core/Surface';
import Transform from 'famous/core/Transform';
import StateModifier from 'famous/modifiers/StateModifier';
import Easing from 'famous/transitions/Easing';

export default Ember.View.extend({
  // didInsertElement: function() {
    // var mainContext = Engine.createContext(this.$()[0]);

    // var surface = new Surface({
      // content: "<h3>Hi!</h3><p>I'm a surface!<br>I live inside a context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p>",
      // size: [200, 200],
      // properties: {
        // backgroundColor: 'rgb(240, 238, 233)',
        // textAlign: 'center',
        // padding: '5px',
        // border: '2px solid rgb(210, 208, 203)',
        // marginTop: '50px',
        // marginLeft: '50px'
      // }
    // });

    // var stateModifier = new StateModifier({
      // origin: [0.5, 0],
      // align: [0.5, 0]
    // });

    // mainContext.add(stateModifier).add(surface);

    // stateModifier.setTransform(
      // Transform.translate(0, 400, 0),
      // { duration : 8000, curve: 'linear' }
    // );

    // surface.on('click', function() {
      // stateModifier.halt();
      // stateModifier.setTransform(
        // Transform.translate(0, 400, 0),
        // { duration : 400, curve: Easing.outBounce }
      // );
    // });
  // }
});
