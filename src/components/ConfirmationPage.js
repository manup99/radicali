import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom'
import {Card,Container,Col,Row} from 'react-bootstrap'
import {confirmTodo,donotConfirm} from '../actions/Todo'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './styles.css'
class ConfirmationPage extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            description:'',
            due_date:'',
            status:''
        }
    }
    accept=(e)=>{
        e.preventDefault()
        this.props.confirmTodo()
    }
    reject=(e)=>{
        e.preventDefault()
        this.props.donotConfirm()
    }
    render() {
        if(this.props.save==false){
            return(
                <Redirect to="/" />
            )
        }
        return (
            <div style={{marginTop:'60px'}}>
                <Container fluid>
                    <Row>
                        <Col md={{offset:3,span:6}}>
                            <fieldset style={{border:'2px solid black',textAlign:'center'}}>
                                <legend>Do you Confirm?</legend>
                                <Card style={{ width: '100%',marginTop:'10px',marginBottom:'20px' }} className="card">
                                     <Card.Body>
                                         <h1>Title:</h1>
                                        <h3>{this.props.todo.title}</h3>
                                        <h1>Description:</h1>
                                        <h3>{this.props.todo.description}</h3>
                                        <h1>Due Date:</h1>
                                    <h3>{this.props.todo.due_date}</h3>
                                        <h1>Status:</h1>
                                    <h3>{this.props.todo.status}</h3>    
                                    </Card.Body>
                                    <hr />
                                    <button type="submit" onClick={this.accept} style={{fontSize:'25px',background:'black',color:'white',borderRadius:'10px',width:'100%',marginTop:'10px'}}>Yes</button>
                                    <button type="submit" onClick={this.reject} style={{fontSize:'25px',background:'black',color:'white',borderRadius:'10px',width:'100%',marginTop:'10px'}}>No</button>
                                </Card>
                            </fieldset>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

ConfirmationPage.propTypes={
    todo:PropTypes.object.isRequired,
    confirmTodo:PropTypes.func.isRequired,
    save:PropTypes.bool.isRequired,
    donotConfirm:PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
    todo:state.todo.todo,
    save:state.todo.save
})

export default connect(mapStateToProps,{confirmTodo,donotConfirm})(ConfirmationPage);




