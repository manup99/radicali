import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createTodo} from '../actions/Todo'
import './styles.css'
class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            description:'',
            due_date:'',
            status:'Todo',
            yo:''
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.todo=this.state
        }
    }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
        this.props.createTodo(this.state)
    }

    render() {
        if(this.props.save){
            return(
                <Redirect to="/confirm" />
            )
        }
        else{
            return (
                <div className="form-style-10">
                    <form onSubmit={this.submit}>
                        <div className="section"><span>1</span>First Name &amp; Address</div>
                        <div className="inner-wrap">
                            <input type="text" name="title" onChange={this.handleChange}  value={this.state.title} required/>
                        </div>
    
                        <div className="section"><span>2</span>Description</div>
                        <div className="inner-wrap">
                            <textarea name="description" onChange={this.handleChange}  value={this.state.description} required></textarea>
                        </div>
    
                        <div className="section"><span>3</span>Status</div>
                            <div className="inner-wrap">
                            <select name="status" onChange={this.handleChange} value={this.state.status}>
                                <option value="Todo">Todo</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Stalled">Stalled</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div className="section"><span>4</span>Due Date</div>
                            <div className="inner-wrap">
                            <input type="date" name="due_date" onChange={this.handleChange} value={this.state.due_date} />
                        </div>
                        <div className="button-section" style={{textAlign:'center'}}>
                            <button type="submit" style={{fontSize:'25px',background:'black',color:'white',borderRadius:'10px',width:'100%'}}>Save</button>
                        </div>
                    </form>
                </div>
            );
        }
        
    }
}

CreateTodo.propTypes={
    createTodo:PropTypes.func.isRequired,
    save:PropTypes.bool
}
const mapStateToProps=(state)=>({
    save:state.todo.save
})
export default connect(mapStateToProps,{createTodo})(CreateTodo);