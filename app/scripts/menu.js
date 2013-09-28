/**
 * @jsx React.DOM
 */


var MenuItem = React.createClass({
  actions: {
      'Talk': ['first', 'second', 'third'],
      'Accessories': ['sdklfj'],
      'Run!': ['really?!!']
  },
  click: function(event) {
  },
  render: function() {
    return (
      <div class='menuItem pull-left text-center' style= {{width: '50%'}} onClick={this.click}>
        {this.props.name}
      </div>
    )
  }
})

var Menu = React.createClass({
  getInitialState: function() {
  },
  handleChange: function(event) {
  },
  menuItems:  [
    'Talk',
    'Accessories',
    'Run!'
  ],
  menuClicked: function(event){
    console.log('sdkjfsd')
  },
  render: function() {
    var createItem = function(itemText) {
      return <MenuItem name={itemText} />
    }
    return (
      <div>
        <div class='menuContainer'>
          { this.menuItems.map(createItem) }
        </div>
      </div>
    );
  }
});

React.renderComponent(
  <Menu />,
  document.getElementById('menu')
);
