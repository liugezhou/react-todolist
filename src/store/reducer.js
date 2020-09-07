import * as actiontypes from "./actionTypes";
const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接收state，但绝不可以修改state
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if(Object.is(action.type,actiontypes.CHANGE_INPUT_VALUE)){
    newState.inputValue = action.value;
    return newState;
  }
  if(Object.is(action.type,actiontypes.CHANGE_LIST)){
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }
  if(Object.is(action.type,actiontypes.DLETE_LIST)){
    newState.list.splice(action.index,1);
    newState.inputValue='';
    return newState;
  }
  if(Object.is(action.type,actiontypes.INITIAL_LIST)){
    newState.list=[...action.list];
    newState.inputValue=action.inputValue;
    return newState;
  }
  return state;
}
