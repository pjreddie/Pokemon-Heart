/**
 * @jsx React.DOM
 */

var MonsterInfo = React.createClass({
  render: function() {
    return (
      <div>
        <span>{ this.props.name }</span>
        <img src={true ? "Female_Symbol.png" : "Male_Symbol.png" }/>
      </div>
    )
  }
})

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
      <div class=''>
        <div class='topBar'>
          < HealthBar />
          <MonsterInfo name='DavidBot'/>
        </div>
      </div>
    );
  }
});


var BottomBar = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <MenuItem name={itemText} />
    }
    return (
      <div>
        <MonsterInfo name='JoeBot'/>
        <div class='bottomBar'>
          <HealthBar />
        </div>
      </div>
    );
  }
})
