import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
      value: '1'
    }
    
  }

  handleSelectCircle = (e) => {
    this.setState({value: e})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleSelectCircle={this.handleSelectCircle}
            circleSelected={this.state.value}
          />
          <Circles
            circleSelected={this.state.value}
          />
        </main>
      </div>
    );
  }
}

export default App;