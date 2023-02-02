import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User';
import axios from 'axios';
import ProjectList from './components/Projects';
import {HashRouter, Route} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        'items': new Array(),
        'users': new Array()
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
    }


  render() {
    return (
      <div>
        <ProjectList items={this.state.items}/> 
        <UserList users={this.state.users}/> 
      </div>
    )
  }
}

export default App;