import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Table />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
