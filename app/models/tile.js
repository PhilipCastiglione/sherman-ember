import DS from 'ember-data';
import ENV from 'sherman-ember/config/environment';

export default DS.Model.extend({
  piece: DS.attr(),
  position: DS.attr(),
  col: Ember.computed('position', function() {
    return this.get('position') % ENV.APP.game.columns;
  }),
  row: Ember.computed('position', 'row', function() {
    return (this.get('position') - this.get('col')) / ENV.APP.game.columns + 1;
  }),
  actions: {
    move(direction) {
    }
  },
  init() {
    if (this.get('piece') == "player") {
      console.log('this is the player piece I guess');
      console.log(this.get('col'));
      console.log(this.get('row'));
      // attach event listeners for player piece to initiate moves
    }
    this._super(...arguments)
  }
});
