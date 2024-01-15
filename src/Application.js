import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h3>clicked the button {count} times</h3>
        <span>
          <button onClick={() => this.handleClick()}>Click This</button>
        </span>
      </div>
    );
  }
}

export default Application;
