import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User';
import axios from 'axios';
import ProjectList from './components/Projects';
import ToDoList from './components/Todo';
import {HashRouter, Route, Link, BrowserRouter} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        'items': new Array(),
        'users': new Array(),
        'todos': new Array()
      }
    }


  componentDidMount(){
    axios.get('http://127.0.0.1:8000/userapi/projects/').then(response => {
        const projects = response.data.results
        this.setState(
          {
            'items': projects
          }
          )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/users/').then(response => {
        const users = response.data.results
        this.setState(
          {
            'users': users
          }
          )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/userapi/todo/').then(response => {
      const todos = response.data.results
      this.setState(
        {
          'todos': todos
        }
        )
      }).catch(error => console.log(error))
    }


  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <nav><ul><li><Link to='/Projects'>Projects</Link></li></ul></nav>
        <nav><ul><li><Link to='/Users'>Users</Link></li></ul></nav>
        <nav><ul><li><Link to='/Todo'>ToDo</Link></li></ul></nav>
        <Route exact path='/' component={() => <ProjectList items={this.state.items}/>} />
        <Route exact path='/Users' component={() => <UserList users={this.state.users}/>} />
        <Route exact path='/Todo' component={() => <ToDoList todos={this.state.todos}/>} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;