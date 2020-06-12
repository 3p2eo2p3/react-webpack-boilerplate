import React, { useState } from 'react';

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
   alert('Имя:   ' + this.state.value1 + 'Пароль:   ' + this.state.value2);
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