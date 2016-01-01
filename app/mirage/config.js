export default function() {
  this.get('/tiles', function() {
    var tiles = [{
      type: 'tiles',
      id: 1,
      attributes: {
        piece: 'wall',
        position: 1
      }
    },{
       type: 'tiles',
      id: 2,
      attributes: {
        piece: 'floor',
        position: 2
      }
    },{
       type: 'tiles',
      id: 3,
      attributes: {
        piece: 'subject',
        position: 3
      }
    },{
       type: 'tiles',
      id: 4,
      attributes: {
        piece: 'player',
        position: 4
      }
    },{
       type: 'tiles',
      id: 5,
      attributes: {
        piece: 'floor',
        position: 5
      }
    },{
      type: 'tiles',
      id: 6,
      attributes: {
        piece: 'target',
        position: 6
      }
    }];
    return {
      data: tiles
    }
  });
}
