var React = require('react');

var Photo = React.createClass({
  handleLoad: function() {
    console.log('load');
    this.props.load();
  },

  render: function() {
    var photoSrc = this.props.photo.picture;
    var caption = this.props.photo.text;

    return (
      <li className="photo">
        <img onLoad={this.handleLoad} className="image" src={photoSrc} alt={caption}/>
        <p className="caption">{caption}</p>
      </li>
    );
  }
});

module.exports = Photo;
