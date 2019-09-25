import {CREATE_TODO,SUCCESSFULLY_CREATED,NOT_CREATED_TODO} from './types'


export const createTodo=(todo)=>(dispatch)=>{
    dispatch({
        type:CREATE_TODO,
        todo:todo
    })
}
export const confirmTodo=()=>(dispatch)=>{
    dispatch({
        type:SUCCESSFULLY_CREATED
    })
}
export const donotConfirm=()=>(dispatch)=>{
    dispatch({
        type:NOT_CREATED_TODO
    })
}