'use strict';
class GameFactory {
  static create() {
      const canvas = new Canvas(
        document.getElementsByClassName('canvas')[0],
        window.innerWidth,
        window.innerHeight,
      );
      const tree = new Tree (
        document.getElementsByClassName('summer-tree')[0],
        250,
        300,
      )
      const house = new House (
        document.getElementsByClassName('house')[0],
        220,
        200
      )
      const seasons = new Seasons(tree,);
      const time = new Time(seasons,);
      const player = new Player(
        document.getElementsByClassName('player')[0],
        40,
        60,
        tree,
        seasons,
      );

      const game = new Game(canvas, player, tree, house, seasons, time);

      return game;
  }
}
const game = GameFactory.create();