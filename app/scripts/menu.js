/**
 * @jsx React.DOM
 */


var MenuItem = React.createClass({
  actions: {
      'Talk': ['first', 'second', 'third'],
      'Items': ['sdklfj'],
      'Run!': ['really?!!']
  },
  click: function(event) {
    if (this.actions[this.props.name]) {
      menuItems = this.actions[this.props.name]
    }
    else {
      console.log("DO action!")
      
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
  render: function() {
    var createItem = function(itemText) {
      return <MenuItem name={itemText} />
    }
    return (
      <div>
        <div class='menuContainer'>
          { menuItems.map(createItem) }
        </div>
      </div>
    );
  }
});
