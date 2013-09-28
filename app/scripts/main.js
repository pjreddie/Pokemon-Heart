/**
 * @jsx React.DOM
 */

var PlayerSection = React.createClass({
  render: function() {
    return (
      <div>
        <div class={"pokemon-"+this.props.poke.id}></div>
        <BottomBar pokes={this.props.pokes} poke={this.props.poke}/>
        <Menu />
      </div>
    )
  }
})

var EnemySection = React.createClass({
  render: function() {
    return (
      <div>
        <div class={"pokemon-"+this.props.poke.id}></div>
        <TopBar pokes={this.props.pokes} poke={this.props.poke}/>
        <Menu />
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      playerPokes: this.props.game.getPlayerPokemon(),
      badPokes: this.props.game.getPlayerPokemon(),
      playerPokemon: this.props.game.getPlayerPokemon()[0],
      badPokemon: this.props.game.getPlayerPokemon()[1]
    }
  },

  render: function() {
    return (
      <div>
        <div class=''>
          <div class=''>
            <EnemySection pokes={this.state.badPokes} poke={this.state.badPokemon} />
          </div>
          <div class=''>
            <PlayerSection pokes={this.state.playerPokes} poke={this.state.playerPokemon} />
          </div>
        </div>
      </div>
    )
  }
})

setInterval(function() {
  React.renderComponent(
    <App game={Game}/>,
    document.getElementById('stuff')
  );
}, 100);
