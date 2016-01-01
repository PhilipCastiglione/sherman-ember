import DS from 'ember-data';

export default DS.Model.extend({
  piece: DS.attr(),
  actions: {
    move(direction) {
    }
  },
  init() {
    if (this.get('piece') == "player") {
      console.log('this is the player piece I guess');
      // attach event listeners for player piece to initiate moves
    }
    this._super(...arguments)
  }
});
