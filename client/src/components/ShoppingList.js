import React, { useContext } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ItemContext } from '../contexts/ItemContext';

const ShoppingList = () => {
  const { items, dispatch } = useContext(ItemContext);

  console.log({ items });

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
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', id: _id })}
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
