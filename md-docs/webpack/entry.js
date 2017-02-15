import React, { Component } from 'react';
import {render} from 'react-dom';
import ConfigLoader from './components/ConfigLoader';

class App extends Component {
  render() {
    return (
      <ConfigLoader />
    )
  }
}

render(<App />, document.getElementById('root'));
