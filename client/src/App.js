import React, { Component } from 'react';

import './App.css';

class App extends Component {
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: '',
  // };
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      responseToPost: '',
      email: '',
      password: ''
    };
  }
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };
  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email,password:this.state.password }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />

          {/* <input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })} /> */}
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;