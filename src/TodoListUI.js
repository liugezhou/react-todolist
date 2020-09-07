import React from 'react';
import { Input,Button ,List } from 'antd';

const TodoListUI = (props) => {
  return (
          <div style={{margin:"10px"}}>
            <Input 
              placeholder="todo info" 
              style={{width:'300px'}} 
              value={props.inputValue}
              onChange={props.handleInputChange}  
            />
            <Button type="primary" onClick={props.handleSubmit}>提交 </Button>
            <List
              style={{marginTop:'10px',width:"350px"}}
              bordered
              dataSource={props.list}
              renderItem={(item,index) => (
                <List.Item onClick={(index)=> { props.handleDeleteItem(index) }}>
                  {item}
                </List.Item>
              )}
            />
          </div>
        )
}
// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{margin:"10px"}}>
//         <Input 
//           placeholder="todo info" 
//           style={{width:'300px'}} 
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}  
//         />
//         <Button type="primary" onClick={this.props.handleSubmit}>提交 </Button>
//         <List
//           style={{marginTop:'10px',width:"350px"}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (
//             <List.Item onClick={(index)=> { this.props.handleDeleteItem(index) }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }
 export default TodoListUI;