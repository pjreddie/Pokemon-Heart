/**
 * @jsx React.DOM
 */


var MenuItem = React.createClass({
  actions: {
      'Talk': {'first': function() {
        Game.playerPokemon[0].currHP -= 10
      }}
 //     'Items': ['sdklfj'],
  //    'Run!': ['really?!!']
  },

  isFunction: function(x){
    return Object.prototype.toString.call(x) == '[object Function]';
  },
  click: function(event) {
    var thing = this.actions[this.props.name]
    if (!this.isFunction(thing)) {
      menuItems = Object.keys(thing)
      this.actions = this.actions[this.props.name]
    } else {
      console.log("DO action!")
      thing()
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


var topMenuItems =  [
  'Talk',
  'Items',
  'Run!'
]

var menuItems = topMenuItems

var Menu = React.createClass({
  getInitialState: function() {
  },
  handleChange: function(event) {
  },
  back: function(event) {
    console.log('heeloo')
    menuItems = topMenuItems
  },
  render: function() {
    var that = this
    var createItem = function(itemText) {
      return <MenuItem name={itemText} pokes={that.props.pokes} poke={that.props.poke} />
    }
    return (
      <div>
        <div class='menu'>
          { menuItems.map(createItem) }
        </div>
      </div>
    );
  }
});
