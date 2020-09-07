import React,{ Component } from 'react'
import 'antd/dist/antd.css';
import store from './store';
import * as creators from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange =this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem =  this.handleDeleteItem.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (
    <TodoListUI  
        inputValue = { this.state.inputValue }
        list = { this.state.list }
        handleInputChange = { this.handleInputChange }
        handleSubmit = { this.handleSubmit }
        handleDeleteItem = { this.handleDeleteItem }
    />)
  }
  
  componentDidMount(){
    axios.get('http://localhost:8989/todolist/list').then((res)=>{
      const result = res.data
      const action = creators.setInitialList(result);
      store.dispatch(action);
    })
  }
  handleInputChange(e){
    const action = creators.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleSubmit(){
    const action =creators.getChangeList();
    store.dispatch(action)
  }
  handleDeleteItem(index){
    const action = creators.getDeleteList(index)
    store.dispatch(action)
  }
}
export default TodoList