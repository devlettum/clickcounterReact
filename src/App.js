import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter : 0
    }
  }
  render() {
    return (
      <div className="App">
        <p style={{ fontSize: 35, fontWeight: 700, color: "#0080ff" }}>
          You have pushed the button this many times:
        </p>
        <p style={{ fontSize: 38, fontWeight: 600, color: "red"}}>{this.state.counter}</p>
        <button style={{ fontSize:20,borderRadius: 5,backgroundColor:'aqua',width:200}} onClick={()=>{this.setState({counter:this.state.counter+1})}}>
          Click Me!
        </button>

        <button style={{ fontSize:20,borderRadius: 5,backgroundColor:'aqua',width:200}} 
          onClick={()=>{this.setState({counter:0})}}>
          Reset Counter!
        </button>
      </div>
    );
  }
}
