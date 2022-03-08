import React from 'react';

class EventBind extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'GoodBye!'
  //   })
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: 'GoodBye!',
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}>Click to Change</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click to Change</button> */}
        <button onClick={this.clickHandler}>Click to Change</button>
      </div>
    );
  }
}

export default EventBind;
