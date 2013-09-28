/**
 * @jsx React.DOM
 */

var MonsterInfo = React.createClass({
  render: function() {
    return (
      <div>
        <span class="name">{ this.props.name }</span>
      </div>
    )
  }
})

var HealthBar = React.createClass({
  getInitialState: function() {
    console.log(this.props.curr, this.props.max)
    return { hpPercent: (this.props.curr / this.props.max) * 100 }
  },
  handleChange: function(event) {
    return { hpPercent: (this.props.curr / this.props.max) * 100 }
  },
  render: function() {
    return (
      <div class="progress progress-striped">
        <div class="progress-bar progress-bar-danger" role="progressbar" style={{width: this.state.hpPercent+'%'}}>
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
      <div class='info topInfo'>
          <MonsterInfo name={this.props.poke.name} />
        <div class='bar topBar'>
          <HealthBar max={this.props.poke.maxHP} curr={this.props.poke.currHP}/>
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
	 <div class='info bottomInfo'>
        <MonsterInfo name={this.props.poke.name}/>
        <div class='bar bottomBar'>
          <HealthBar max={this.props.poke.maxHP} curr={this.props.poke.currHP}/>
        </div>
      </div>
    );
  }
})
