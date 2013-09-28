/**
 * @jsx React.DOM
 */

var PlayerSection = React.createClass({
  render: function() {
    return (
      <div>
        <img class="cocktail" src="table.png"></img>
        <div class={"poke bottomPoke pokemon-"+this.props.poke.id_number}></div>
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
        <div class={"poke topPoke pokemon-"+this.props.poke.id_number}></div>
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
      badPokes: this.props.game.getComputerPokemon(),
      playerPokemon: this.props.game.getPlayerPokemon()[0],
      badPokemon: this.props.game.getComputerPokemon()[0]
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
