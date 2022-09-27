import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [],
      value: ''
    }
  }

  addTodo = () => {
    this.state.todo.push(this.state.value)
    this.setState({
      todo: this.state.todo,
      value: ''
    })

  }

deleteTodo =(index)=>{
this.state.todo.splice(index,1)
this.setState({
  todo: this.state.todo,

 })
}


edit=(index)=>{
  let  updateValue = prompt('put edit value')
  this.state.todo[index]=updateValue
  this.setState({
    todo: this.state.todo,
  
   })
  
}

  render() {
    let { todo, value } = this.state
    return (
      <div>
        <h1>todo app</h1>

        <input value={value} type='text' placeholder="enter value" onChange={(e) => this.setState({ value: e.target.value })}></input>
        <button onClick={this.addTodo} > add val</button>
        <ul>
          {todo.map((val, i) => {
            return <li key={i} > {val}
            <button  onClick={()=> this.edit(i)} >edit</button>
            <button  onClick={ ()=> this.deleteTodo(i) } >   delete</button>
            
             </li>
          })}

        </ul>

      </div>
    )
  }
}

export default App;
