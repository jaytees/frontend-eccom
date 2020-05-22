import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

  handleChange = e => {
    // get name type and value
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="title">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
