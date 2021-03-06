import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input
} from 'reactstrap';
import { ItemContext } from '../contexts/ItemContext';

export default function ItemModal() {
  const [name, setName] = useState('');
  const [modal, setModal] = useState(false);
  const { dispatch } = useContext(ItemContext);

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      name
    };
    // add to db
    axios
      .post('/api/items', newItem)
      .then(({ data }) => {
        dispatch({ type: 'ADD_ITEM', payload: data });
      })
      .catch(err => console.log(err));

    // close modal
    toggle();
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: '2rem' }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to shopping list</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Label for="item">Item</Label>
            <Input
              type="text"
              name="name"
              id="item"
              placeholder="Add shopping item"
              onChange={handleChange}
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              onClick={handleSubmit}
              block
            >
              Add Item
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
