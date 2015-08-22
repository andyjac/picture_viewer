var React = require('react');
var request = require('superagent');
var PHOTO_URL = 'https://appsheettest1.azurewebsites.net/sample/posts';
var PhotoList = require('./components/photo_list.jsx');

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
    return (
      <main className="main">
        <PhotoList photos={this.state.photos}/>
      </main>
    );
  }
});

React.render(<App/>, document.body);
