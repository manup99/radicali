import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
class Todo extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={{span:6,offset:3}} style={{width:'100%',marginTop:'20px'}}>
                            <CreateTodo />
                        </Col>                        
                    </Row>
                </Container>
                <TodoList/>
            </div>
        );
    }
}


export default Todo;