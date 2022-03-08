import React from 'react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor',
    };
  }

  handleChange() {
    this.setState({
      message: 'Thank You',
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleChange()}>Click to Change</button>
      </div>
    );
  }
}

export default Message;
