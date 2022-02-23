import React, { Component } from "react";
class Contador extends Component {
  state = {
    number: 0
  };
  add = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1
      });
    }
  }
  subt = () => {
    if (this.state.number > 0) {
      this.setState ({
        number: this.state.number - 1
      });
    }
  }
    clear = () => {
      if (this.state.number > 0){
        this.setState ({
          number: 0
        });
      }
    }
  render() {
    return (
      <div className="contain-box">
        <h1>Contador</h1>
        <div className="inbox">
          <h2>{this.state.number}</h2>
          <button onClick = {this.add}>+1</button>
          <button onClick = {this.clear}>C</button>
          <button onClick = {this.subt}>-1</button>
        </div>
      </div>
    );
  }
}
export default Contador;