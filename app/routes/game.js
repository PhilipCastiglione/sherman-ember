import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var tiles =  this.store.findAll('tile').then(function(tiles) {
      return tiles.sortBy('position');
    });
    return tiles;
  }
});
