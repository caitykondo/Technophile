function GameConsole(systemName) {
  this.systemName = systemName;
}
GameConsole.prototype.play = function(game) {
  game = {
    title: game
  };
  return this.systemName + ' plays ' + game.title;
};

module.exports = GameConsole;