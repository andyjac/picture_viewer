var React = require('react');

var Photo = React.createClass({
  handleLoad: function() {
    this.props.load();
  },

  render: function() {
    var photoSrc = this.props.photo.picture;
    var caption = this.props.photo.text;

    return (
      <li className="photo">
        <img className="image" onLoad={this.handleLoad} src={photoSrc} alt={caption}/>
        <div className="caption-container">
          <p className="caption">{caption}</p>
        </div>
      </li>
    );
  }
});

module.exports = Photo;
