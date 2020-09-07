import * as actionTypes from './actionTypes';
import axios from 'axios';
export const getInputChangeAction = ((value)=>({
    type:actionTypes.CHANGE_INPUT_VALUE,
    value
}))

export const getChangeList = (()=>({
  type:actionTypes.CHANGE_LIST
}))

export const getDeleteList = ((index)=>({
  type:actionTypes.DLETE_LIST,
  index
}))

export const setInitialList = ((obj)=>({
  type:actionTypes.INITIAL_LIST,
  inputValue:obj.inputValue,
  list:obj.list
}))

export const getTodoList = () => {
  return (dipatch)=>{
    axios.get('http://localhost:8989/todolist/list').then((res)=>{
      const data = res.data
      const action = setInitialList(data);
      dipatch(action);
    })
  }
}