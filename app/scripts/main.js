/**
 * @jsx React.DOM
 */

var PlayerSection = React.createClass({
  render: function() {
    return (
      <div>
        <div class={"pokemon-"+this.props.poke.id}></div>
        <BottomBar poke={this.props.poke}/>
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
        <TopBar poke={this.props.poke}/>
        <Menu />
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      playerPokemon: this.props.game.getPlayerPokemon()[0],
      badPokemon: this.props.game.getPlayerPokemon()[1]
    }
  },

  render: function() {
    return (
      <div>
        <div class=''>
          <TopBar />
        </div>
        <div class=''>
          <div class=''>
            <EnemySection poke={this.state.badPokemon} />
          </div>
          <div class=''>
            <PlayerSection poke={this.state.playerPokemon} />
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
