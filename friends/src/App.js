import React, { Component } from 'react';
import FriendList from "./components/FriendsList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList />
      </div>
    );
  }
}

export default App;
