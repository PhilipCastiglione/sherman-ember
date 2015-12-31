export default function() {
  this.get('/tiles', function() {
    return {
      data: [{
        type: 'tiles',
        id: 1,
        attributes: {
          piece: 'wall'
        }
      },{
         type: 'tiles',
        id: 2,
        attributes: {
          piece: 'floor'
        }
      },{
         type: 'tiles',
        id: 3,
        attributes: {
          piece: 'subject'
        }
      },{
         type: 'tiles',
        id: 4,
        attributes: {
          piece: 'player'
        }
      },{
         type: 'tiles',
        id: 5,
        attributes: {
          piece: 'floor'
        }
      },{
        type: 'tiles',
        id: 6,
        attributes: {
          piece: 'target'
        }
      }]
    }
  });
}
