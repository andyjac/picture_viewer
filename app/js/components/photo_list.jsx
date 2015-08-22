var React = require('react');
var _ = require('lodash');
var Photo = require('./photo.jsx');

var PhotoList = React.createClass({
  getInitialState: function() {
    return { loaded: false, photosLoaded: 0 };
  },

  handleLoad: function() {
    this.state.photosLoaded++;

    if (this.state.photosLoaded === this.props.photos.length) {
      this.setState({loaded: true});
    }
  },

  renderPhotos: function() {
    return _.map(this.props.photos, function(photo) {
      return (
        <Photo photo={photo} key={photo.id} load={this.handleLoad}/>
      );
    }.bind(this));
  },

  render: function() {
    var listClass = 'photo-list hidden';
    var loaderClass = 'loader visible';

    if (this.state.loaded) {
      listClass = 'photo-list visible';
      loaderClass = 'loader hidden';
    }

    return (
      <section className="photo-list-container">
        <h1 className={loaderClass}>Loading...</h1>
        <ul className={listClass}>
          {this.renderPhotos()}
        </ul>
      </section>
    );
  }
});

module.exports = PhotoList;
