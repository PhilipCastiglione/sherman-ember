import DS from 'ember-data';
import ENV from 'sherman-ember/config/environment';

export default DS.Model.extend({
  piece: DS.attr(),
  position: DS.attr(),
  col: Ember.computed('position', function() {
    var c = this.get('position') % ENV.APP.game.columns;
    return (c == 0)? ENV.APP.game.columns : c;
  }),
  actions: {
    move(direction) {
    }
  },
  init() {
    if (this.get('piece') == "player") {
      console.log('this is the player piece I guess');
      // attach event listeners for player piece to initiate moves
    }
    console.log('col:');
    console.log(this.get('col'));
    this._super(...arguments)
  }
});
