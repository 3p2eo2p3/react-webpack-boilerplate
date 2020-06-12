import React from 'react'
import LoginForm from './loginform.jsx';

class App extends React.Component {
  render() {
    return (
    <div>
    <center><h1>Войдите или зарегестрируйтесь</h1></center>
    <center><LoginForm /></center>
    <center><a href="/registration">Регистрация</a></center>
    </div>
    );
  }
}

export default App;


