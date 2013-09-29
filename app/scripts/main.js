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
        <Menu pokes={this.props.pokes} poke={this.props.poke}/>
      </div>
    )
  }
})

var EnemySection = React.createClass({
  render: function() {
      if (this.props.poke.isDead()) {
        return (
           <div>
           <TopBar pokes={this.props.pokes} poke={this.props.poke}/>
           </div>
           )
        }
      else {
        return (
         <div>
         <div class={"poke topPoke pokemon-"+this.props.poke.id_number}></div>
         <TopBar pokes={this.props.pokes} poke={this.props.poke}/>
         </div>
        )
      }
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      playerPokes: this.props.game.playerPokemon,
      badPokes: this.props.game.computerPokemon,
      playerPokemon: this.props.game.currPlayerPokemon,
      badPokemon: this.props.game.currComputerPokemon
    }
  },
  handleChange: function(event) {
    console.log('here')
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
