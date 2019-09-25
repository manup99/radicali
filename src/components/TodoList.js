import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
class TodoList extends Component {
    render() {
        const array=this.props.todos.map(todo=>(
            <div key={todo.id} style={{borderLeft:'3px solid black'}}>
                <hr />
                <h4>Title:</h4><span>{todo.title}</span>
                <h4>Description:</h4><span>{todo.description}</span>
                <h4>Due Date:</h4><span>{todo.due_date}</span>
                <h4>Status:</h4><span>{todo.status}</span>
                <hr />
            </div>

        ))
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={{offset:2,span:8}}>
                           {array}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

TodoList.propTypes={
    todos:PropTypes.array.isRequired
}
const mapStateToProps=(state)=>({
    todos:state.todo.todos
})

export default connect(mapStateToProps)(TodoList);