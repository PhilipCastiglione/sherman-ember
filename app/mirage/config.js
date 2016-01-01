export default function() {
  this.get('/tiles', function() {
    var tiles = [{
       type: 'tiles',
      id: 50,
      attributes: {
        piece: 'floor',
        position: 50
      }
    },{
       type: 'tiles',
      id: 51,
      attributes: {
        piece: 'subject',
        position: 51
      }
    },{
       type: 'tiles',
      id: 52,
      attributes: {
        piece: 'player',
        position: 52
      }
    },{
       type: 'tiles',
      id: 53,
      attributes: {
        piece: 'floor',
        position: 53
      }
    },{
      type: 'tiles',
      id: 54,
      attributes: {
        piece: 'target',
        position: 54
      }
    }];
    for (var i = 1; i <= 49; i++) {
      tiles.unshift({
        type: 'tiles',
        id: i,
        attributes: {
          piece: 'wall',
          position: i
        }
      });
    }
    for (var i = 55; i <= 16*8; i++) {
      tiles.push({
        type: 'tiles',
        id: i,
        attributes: {
          piece: 'wall',
          position: i
        }
      });
    }
    tiles.sort(function(a, b) { return a.id - b.id; });
    return { data: tiles }
  });
}
