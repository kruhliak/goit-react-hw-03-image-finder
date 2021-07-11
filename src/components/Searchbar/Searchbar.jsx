import React, { Component } from 'react';
import { Wrapper } from './Searchbar.styles';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.resetForm();
  };

  handleChangeForm = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Wrapper>
        <header>
          <form onSubmit={this.handleSubmitForm}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              onChange={this.handleChangeForm}
              value={this.state.searchQuery}
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </Wrapper>
    );
  }
}
