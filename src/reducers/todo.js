import {CREATE_TODO,SUCCESSFULLY_CREATED,NOT_CREATED_TODO} from '../actions/types'

const initialState={
    todo:{},
    todos:[{title:'Hello',description:'uooihoi',due_date:'02/09/19',status:'Todo'}],
    save:false,
}


export default function(state=initialState,action){
    switch(action.type){
        case CREATE_TODO:
            return Object.assign({},state,{
                todo:action.todo,
                save:true,
                todos:[...state.todos]
            })
        case SUCCESSFULLY_CREATED:
            return{
                ...state,
                todos:[...state.todos,state.todo],
                todo:{},
                save:false
            }
        case NOT_CREATED_TODO:
            return{
                ...state,
                save:false,
            }
        default:
            return state;
    }
}