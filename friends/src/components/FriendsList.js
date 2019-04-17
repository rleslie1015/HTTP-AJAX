import React from "react";
import FriendCard from "./FriendCard";
import axios from "axios";


class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/friends")
        .then(res => {
            this.setState({ friends: res.data });
        })
        .catch(err => console.log(err));
    }
    render() {
        return(
            <div>{this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}</div>
        )
    }

        
}
 
export default FriendsList;