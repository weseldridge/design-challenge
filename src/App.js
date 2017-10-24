import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const cards = [1,2,3,4,5,6,7];

    return (
      <div className="App">
      {cards.map(card => (<div key={`card-${card}`} className="card">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="content">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </div>
            <div className="buttons">
              <a href="#">Site</a>
              <a href="#">Details</a>
            </div>
        </div>))}
      </div>
    );
  }
}

export default App;
