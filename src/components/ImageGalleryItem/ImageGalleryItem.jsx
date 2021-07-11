import React, { Component } from 'react';
import { Item } from './ImageGalleryItem.styles';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <Item className="ImageGalleryItem">
        <img
          src={this.props.item.webformatURL}
          alt={this.props.item.tags}
          id={this.props.item.id}
          onClick={() => this.props.onClick(this.props.item)}
        />
      </Item>
    );
  }
}
