import DS from 'ember-data';
import ENV from 'sherman-ember/config/environment';

export default DS.Model.extend({
  piece: DS.attr(),
  position: DS.attr(),
  actions: {
    move(input) {
      // convert the input to a direction
      // using the current location of the piece and the direction, assign the target square
      // check if the target square is valid:
      //   - inside the game space
      //   - not into a wall
      // check if the target square is the subject
      // if so, run move on the target square with the relevant input
    }
  },
  init() {
    if (this.get('piece') === "player") {
      console.log('this is the player piece I guess');
      // attach event listeners for player piece to initiate moves
    }
    this._super(...arguments);
  }
});
