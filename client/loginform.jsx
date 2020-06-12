import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', loginstatus: '', errortext: ''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({value1: event.target.value});
  }

    handleChangePassword(event) {
    this.setState({value2: event.target.value});
  }

  async handleSubmit(event) {
    console.log('Имя:   ' + this.state.value1 + 'Пароль:   ' + this.state.value2);
    event.preventDefault();
    axios.post('/api/login', {
      name: this.state.value1,
      password: this.state.value2
    }).then((res) => {
                this.state.loginstatus = res.data;
                if (this.state.loginstatus == '1') {
                localStorage.setItem('loginstatus', this.state.loginstatus);
                this.props.setUserAction({user: this.state.value1}); ////REFERS TO REDUX >>>>>>>
                window.location = "/home";
              }
               else {this.setState({errortext: 'Не удалось войти. Попробуйте снова или зарегестрируйтесь'})}
              })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value1} onChange={this.handleChangeName} />
        </label>
        <br></br>
        <label>
          Пароль:
          <input type="text" value={this.state.value2} onChange={this.handleChangePassword} />
        </label>
        <br></br>
        <input type="submit" value="Отправить" />
        <br></br>
        <i>{this.state.errortext}</i>
      </form>
    );
  }
}

export default LoginForm