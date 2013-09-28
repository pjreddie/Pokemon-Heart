/**
 * @jsx React.DOM
 */

var TopBar = React.createClass({
  getInitialState: function() {
    console.log('here')
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
