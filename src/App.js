import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';

export default class App extends Component {
  static defaultProps = { key: '21737964-f95ae509173e22fa890b9705b' };

  state = {
    searchQuery: '',
    page: 1,
    images: [],
    showLoader: false,
    showModal: false,
    modalImage: '',
    // idle, panding, resolved, rejected
  };

  handleSubmit = value => {
    this.setState({ searchQuery: value, page: 1, images: [] });
  };

  async componentDidUpdate(_, prevState) {
    axios.defaults.baseURL = 'https://pixabay.com/api/';

    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.togleLoader();
      const response = await axios.get(
        `?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.props.key}&image_type=photo&orientation=horizontal&per_page=12`,
      );
      this.togleLoader();

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        showLoader: false,
      }));
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  btnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  modalShow = data => {
    this.setState({ showModal: true, modalImage: data });
  };

  togleLoader = () => {
    this.setState(prevState => ({ showLoader: !prevState.showLoader }));
  };

  render() {
    const { images, showModal, showLoader } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onClick={this.modalShow} />
        {images.length !== 0 && (
          <Button text="Load More" onClick={this.btnClick} />
        )}
        {showModal && (
          <Modal onClose={this.modalClose} onOpen={this.state.modalImage} />
        )}
        {showLoader && <Loader />}
      </div>
    );
  }
}
