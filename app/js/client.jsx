var React = require('react');
var request = require('superagent');
var PHOTO_URL = 'https://appsheettest1.azurewebsites.net/sample/posts';

var App = React.createClass({
  getInitialState: function() {
    return { photos: [] };
  },

  componentDidMount: function() {
    this.loadPhotos();
  },

  loadPhotos: function() {
    request
      .get(PHOTO_URL)
      .end(function(err, res) {
        if (err) {
          return console.log(err);
        }

        this.setState({photos: res.body});
      }.bind(this));
  },

  render: function() {
    console.log(this.state.photos);

    return (
      <main className="main">
        <h1>Hello World!</h1>
      </main>
    );
  }
});

React.render(<App/>, document.body);
