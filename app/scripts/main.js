/**
 * @jsx React.DOM
 */

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div class='row'>
          <TopBar />
        </div>
        <div class='row'>
          <div class='col-sm-6'></div>
          <div class='col-sm-4'>
            <Menu />
          </div>
        </div>
      </div>
    )
  }
})

setInterval(function() {
  React.renderComponent(
    <App />,
    document.getElementById('stuff')
  );
}, 100);
