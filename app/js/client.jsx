var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return { photos: [] };
  },

  render: function() {
    return (
      <main className="main">
        <h1>Hello World!</h1>
      </main>
    );
  }
});

React.render(<App/>, document.body);
