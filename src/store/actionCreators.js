import * as actionTypes from './actionTypes'
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