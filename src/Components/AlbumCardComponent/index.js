// Task 1: Advanced React Component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Collapse,
  Container,
  Row,
  Col,
  List,
  Navbar,
  Jumbotron,
  Lead,
  Button,
  ButtonGroup,
  Card,
  BH1,
  BH4,
  BP,
  BA,
  BDiv,
  BSmall,
  BFooter
} from 'bootstrap-4-react';

const DataFetchingComponent = ({item}) => {



  return (
      <Card mb="4" shadow="sm" key={item.id}>
        <Card.Image top src={item.thumbnailUrl} />
        <Card.Body>
          <Card.Text>{item.title}</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button secondary outline sm>View</Button>
              <Button secondary outline sm>Edit</Button>
            </ButtonGroup>
            <BSmall text="muted">9 mins</BSmall>
          </BDiv>
        </Card.Body>
      </Card>
  );
};

export default DataFetchingComponent;