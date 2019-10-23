import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import { Container, Row, Col } from 'reactstrap';

const App = () => (
  <Container>
    <Row mt="5">
      <Col mt="5">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </Col>
    </Row>
  </Container>
)

export default App