import React, { Component } from 'react';
import FriendList from "./components/FriendsList";
import './App.css';
import { NavLink,  Route } from "react-router-dom";
import NewFriendForm from "./components/NewFriendForm";

class App extends Component {
  
  render() {
    return (
      <div className="App"> 
          <nav>
          <h1 className="store-header">Friends</h1>
          <div className="nav-links">
            <NavLink exact to="/New-Friend-Form">
              Add Friend
            </NavLink> 
            <br/>
            <NavLink exact to="/">
              Home
            </NavLink>
         
          </div>
        </nav> 

        <FriendList />
        <Route path="/New-friend-Form" Component={ NewFriendForm }/>
      </div>
    );
  }
}

export default App;
