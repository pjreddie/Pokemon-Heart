/**
 * @jsx React.DOM
 */

var HealthBar = React.createClass({
  getInitialState: function() {
  },
  handleChange: function(event) {
  },
  render: function() {
    return (
      <div class="progress progress-striped">
        <div class="progress-bar progress-bar-danger" role="progressbar" style={{width: '80%'}}>
          <span class="sr-only">80% Complete (danger)</span>
        </div>
      </div>
    )
  }
})

var TopBar = React.createClass({
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
        <div class='topBar'>
          < HealthBar />
        </div>
      </div>
    );
  }
});
