import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

componentDidMount(){
  const users = [
    {
      'firstname': 'Vadim',
      'lastname': 'Prosvirnov',
      'email': 'mback.edu@gmail.com'
    },
    {
      'firstname': 'User',
      'lastname': 'Superuser',
      'email': 'anyuser@gmail.com'
    }
  ]
  this.setState(
    {
      'users': users
    }
  )
}

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App;