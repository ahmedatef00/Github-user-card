import React, { Component } from "react";
import "./App.css";
import "./Card";
import Card from "./Card";
import SearchBar from "./SearchBar";
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      value: "",
      didSubmit: false
    };
  }

  onChange = (e) => {
    this.setState(

      {
        value: e.target.value,
        didSubmit: false
      }

    )



  }

  onClick = () => {

    this.setState({
      didSubmit: true
    });

  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <div className="header">
          <SearchBar onChange={this.onChange} onClick={this.onClick} value={value} />
        </div>
        {this.state.didSubmit && <Card username={value} />}

      </div>
    )
  }
}
// ReactDOM.render(<App title="Github"/>,document.getElementById('root'));
export default App;




