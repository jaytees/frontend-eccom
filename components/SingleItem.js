import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <div>
        <Query
          query={SINGLE_ITEM_QUERY}
          variables={{
            id: this.props.id,
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <p>Error!</p>;
            if (loading) return <p>Loading...</p>;
            return (
              <p>
                {this.props.children} for {this.props.id}
              </p>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default SingleItem;
