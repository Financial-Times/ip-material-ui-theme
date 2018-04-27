import React, { Component } from 'react';
import AppBar from './AppBar';
import Buttons from './Buttons';
import Switch from './Switch';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Buttons />
        <Switch />
        <Select />
        <Checkbox />
        <Radio />
      </div>
    );
  }
}

export default App;
