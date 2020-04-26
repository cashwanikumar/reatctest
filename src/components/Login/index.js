import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import InputValue from './InputValue'

class Login extends PureComponent {
    state = {
        username: "",
        password: "",
        err: "",
    };

  goLogin = () => {
    const { username, password } = this.state;
    const { history } = this.props;
    if (username === "ashwani" && password === "pua") {
      history.push("/dashboard");
    } else {
      this.setState({
        err: "Username and password is incorrect",
      });
    }
  };

  onChangeValue = (type, value) => {
    this.setState({
        [type]: value,
    });
  };

  render() {
    const { username, password, err } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {err && <div>{err}</div>}
        <InputValue value={username} type="username" onChangeData={this.onChangeValue}/>
        <br />
        <br />
        <InputValue value={password} type="password" onChangeData={this.onChangeValue}/>
        <br />
        <button onClick={this.goLogin}>Click Me</button>
      </div>
    );
  }
}

export default withRouter(Login);
