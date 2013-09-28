/**
 * @jsx React.DOM
 */

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div class=''>
          <TopBar />
        </div>
        <div class=''>
          <div class=''></div>
          <div class=''>
            <BottomBar />
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
