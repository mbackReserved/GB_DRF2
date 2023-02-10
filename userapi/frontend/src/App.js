import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User';
import axios from 'axios';
import ProjectList from './components/Projects';
import ToDoList from './components/Todo';
import {HashRouter, Route, Link, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/Auth';
import Cookies from 'universal-cookie'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        'items': new Array(),
        'users': new Array(),
        'todos': new Array(),
        'token': ''
      }
    }
  

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState(({'token': token}))
  }
  

  is_authentificated(){
    return this.state.token != ''
  }


  logout() {
    this.set_token('')
  }


  get_token_from_storage(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token})
  }


  get_token(login, password) {
    axios.post('http://127.0.0.1/api-token-auth/', {login: login, password: password})
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Wrong Pass'))
  }


  componentDidMount(){
    this.get_token_from_storage()
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
        <nav><ul><li><Link to='/login'>Login</Link></li></ul></nav>
        <Route exact path='/' component={() => <ProjectList items={this.state.items}/>} />
        <Route exact path='/Users' component={() => <UserList users={this.state.users}/>} />
        <Route exact path='/Todo' component={() => <ToDoList todos={this.state.todos}/>} />
        <Route exact path='/login' component={() => <LoginForm/>} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;