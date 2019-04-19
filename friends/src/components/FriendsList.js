import React from "react";
import FriendCard from "./FriendCard";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewFriendForm from "./NewFriendForm";

class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
        };
    }
    componentDidMount() {
        axios
        .get("http://localhost:5000/friends")
        .then(res => {
            this.setState({ friends: res.data });
        })
        .catch(err => console.log(err));
    }
    addFriend = (e, friend) => {
        console.log("Friend", friend);
        e.preventDefault();
        axios
            .post("http://localhost:5000/friends", friend)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    
    }
    render() {
        return(
            <div>
                <div>{this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}</div>
                
            </div>
        )
    }

        
}
 
export default FriendsList;