import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User';
import axios from 'axios';
import ProjectList from './components/Projects';
import ToDoList from './components/Todo';
import {HashRouter, Route, Switch, Redirect, Link, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/Auth';
import Cookies from 'universal-cookie'
import ProjectForm from './components/ProjectForm'


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
    this.setState({'token': token}, () => this.load_data())
  }
  

  is_authentificated() {
    return this.state.token != ''
  }


  logout() {
    this.set_token('')
  }


  get_token_from_storage(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, () => this.load_data())
  }


  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Wrong Pass'))
  }


  get_headers(){
    let headers = {
      'Content-Type': 'application/json',
    }
    if (this.is_authentificated())
    {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  deleteProject(id) {
    const headers = this.get_headers()
    axios.delete(`http://127.0.0.1:8000/userapi/projects/${id}`, {headers}).then(response => {
      this.setState({projects: this.state.projects.filter((item) => item.id !==id)})
    }).catch(error => console.log(error))
  }


  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/userapi/projects/', {headers}).then(response => {
      const projects = response.data.results
      this.setState(
        {
          'items': projects
        }
        )
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/users/', {headers}).then(response => {
        const users = response.data.results
        this.setState(
          {
            'users': users
          }
          )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/userapi/todo/', {headers}).then(response => {
      const todos = response.data.results
      this.setState(
        {
          'todos': todos
        }
        )
      }).catch(error => console.log(error))
    }


  componentDidMount() {
    this.get_token_from_storage()
  }
    

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <nav><ul>
        <li><Link to='/Projects'>Projects</Link></li>
        <li><Link to='/Users'>Users</Link></li>
        <li><Link to='/Todo'>ToDo</Link></li>
        <li>
          {this.is_authentificated() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
        </li>
        </ul></nav>
        <Route exact path='/Projects/create' component={() => <ProjectForm />}/>
        <Route exact path='/Projects' component={() => <ProjectList items={this.state.items} deleteProject={(id) => this.deleteProject(id)} />} />
        <Route exact path='/Users' component={() => <UserList users={this.state.users}/>} />
        <Route exact path='/Todo' component={() => <ToDoList todos={this.state.todos}/>} />
        <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)}/>} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;