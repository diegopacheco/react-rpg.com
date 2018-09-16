const tiles = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
  [6, 0, 0, 0, 0, 6, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6],
  [6, 0, 0, 0, 0, 6, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6],
  [6, 0, 0, 0, 0, 6, 0, 6, 6, 6, 6, 6, 0, 0, 4, 0, 0, 0, 0, 6],
  [6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 6],
  [6, 6, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6],
  [6, 6, 6, 6, 6, 6, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
  [6, 6, 6, 6, 6, 6, 0, 6, 6, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6],
  [6, 6, 0, 0, 0, 0, 0, 6, 6, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6],
  [6, 6, 0, 0, 0, 0, 0, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 2, 0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 3, 0, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];

const monsters = [
  {
    type: 'rat',
    position: [ 5, 10 ]
  },
  {
    type: 'stone-golem',
    position: [ 3, 3 ]
  },
  {
    type: 'goblin',
    position: [ 16, 3 ]
  },
  {
    type: 'goblin',
    position: [ 14, 2 ]
  },
  {
    type: 'stone-golem',
    position: [ 16, 8 ]
  }
];

const stairs = {
  down: '1_3',
  up: '1_5'
}

export default {
  tiles,
  monsters,
  stairs
};