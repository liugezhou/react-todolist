import React,{ Component } from 'react'
import { Input,Button ,List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import * as creators from './store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange =this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return(
      <div style={{margin:"10px"}}>
        <Input 
          placeholder="todo info" 
          style={{width:'300px'}} 
          value={this.state.inputValue}
          onChange={this.handleInputChange}  
        />
        <Button type="primary" onClick={this.handleSubmit}>提交 </Button>
        <List
          style={{marginTop:'10px',width:"350px"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDeleteItem.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
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