import { takeEvery, put} from 'redux-saga/effects';
import  * as types from './actionTypes';
import axios from 'axios';
import * as creators from './actionCreators';

function* getInitList(){
  try{
    const res =  yield axios.get('http://localhost:8989/todolist/list');
    const action = creators.setInitialList(res.data);
    yield put(action);
  } catch(e){
    console.log('网络请求失败')
  }
  
}
function*  mySaga() {
  yield takeEvery(types.GET_INITAIL_LIST,getInitList)
}

export default mySaga;