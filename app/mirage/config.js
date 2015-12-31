export default function() {
  this.get('/game', function() {
    return {
      data: [{
        type: 'tiles',
        id: 1,
        attributes: {
          piece: 'wall'
        }
      },{
         type: 'tiles',
        id: 1,
        attributes: {
          piece: 'floor'
        }
      },{
         type: 'tiles',
        id: 1,
        attributes: {
          piece: 'subject'
        }
      },{
         type: 'tiles',
        id: 1,
        attributes: {
          piece: 'player'
        }
      },{
         type: 'tiles',
        id: 1,
        attributes: {
          piece: 'floor'
        }
      },{
        type: 'tiles',
        id: 1,
        attributes: {
          piece: 'target'
        }
      }]
    }
  });
}
