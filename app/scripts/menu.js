/**
 * @jsx React.DOM
 */


var MenuItem = React.createClass({
  isFunction: function(x){
    return Object.prototype.toString.call(x) == '[object Function]';
  },

  click: function(event) {
    var thing = menuItems[this.props.name]

    if (!this.isFunction(thing)) {
      menuItems = thing
    } else {
      thing()
      menuItems = topMenuItems()
    }
  },
  render: function() {
    return (
      <div class='menuItem pull-left text-center' style= {{width: '50%'}} onClick={this.click}>
        {this.props.name}
      </div>
    )
  }
})


var topMenuItems = function(){
  poke = Game.currPlayerPokemon
    console.log(poke)
  return {
    'Talk': poke.attacks,
    'Items': {
        'potion': function() {
          Game.playerPokemon[0].currHP += 10
        }
    },
    'Run!': {
      'Really?!!': function() {

      }
    }
  }
}

var menuItems = topMenuItems()

var Menu = React.createClass({
  getInitialState: function() {
  },
  handleChange: function(event) {
  },
  back: function(event) {
    console.log('heeloo')
    menuItems = topMenuItems()
  },
  render: function() {
    var that = this
    var createItem = function(itemText) {
      return <MenuItem name={itemText} pokes={that.props.pokes} poke={that.props.poke} />
    }
    return (
      <div>
        <div class='menu'>
          { Object.keys(menuItems).map(createItem) }
        </div>
      </div>
    );
  }
});
