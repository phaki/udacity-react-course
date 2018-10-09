import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    text: ''
  }

  changeText(text) {
    this.setState(() => ({
      text: text
    }))
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
          <div className="container">
            <input onChange={(event) => this.changeText(event.target.value)} value={this.state.text} type="text"
                   placeholder="Say Something"/>
            <p className="echo">Echo:</p>
            <p>{this.state.text}</p>
          </div>
        </div>
    );
  }
}

export default App;
