import React, { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

export default class ImageGallery extends Component {
  // handleImagesClick =  => {
  //   this.props.onClick(Number(e.target.id));
  // };

  render() {
    return (
      <Gallery>
        {this.props.images.map(img => (
          <ImageGalleryItem
            key={img.id}
            item={img}
            onClick={this.props.onClick}
          />
        ))}
      </Gallery>
    );
  }
}
