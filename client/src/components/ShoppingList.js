import React, { useContext } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import { ItemContext } from '../contexts/ItemContext';

const ShoppingList = () => {
  const { items, dispatch } = useContext(ItemContext);

  const handleDelete = _id => {
    // add to db
    axios
      .delete(`/api/items/${_id}`)
      .then(res => {
        dispatch({ type: 'REMOVE_ITEM', _id });
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.length &&
            items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(_id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
