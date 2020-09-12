import React, {Component} from "react";


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleCountChangeIncrement = () => {
    this.setState((state) => {
      return {count: state.count++}
    })
  };

  handleCountChangeDecrement = () => {
    this.setState(state => {
      return {count: state.count--}
    })
  };

  render() {
    return (
      <>
      <button onClick={this.handleCountChangeIncrement}>
        {this.state.count}
      </button>

      <button onClick={this.handleCountChangeDecrement}>{this.state.count}</button>
      </>
    )
  }

};
export default Counter;
