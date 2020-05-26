import SingleItem from '../components/SingleItem';

// amend this
const Item = ({ query }) => {
  return (
    <div>
      <SingleItem id={query.id}>Single Item</SingleItem>
    </div>
  );
};

export default Item;
