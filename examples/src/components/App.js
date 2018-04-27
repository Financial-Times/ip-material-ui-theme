import React, { Component } from 'react';
import Buttons from './Buttons';
import Switch from './Switch';
import Select from './Select';
import Checkbox from './Checkbox';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
        <Switch />
        <Select />
        <Checkbox />
      </div>
    );
  }
}

export default App;
