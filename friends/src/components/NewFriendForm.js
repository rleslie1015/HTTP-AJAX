import React, { Component } from "react";

class NewFriendForm extends Component {
    constructor(){
        super()
        this.state ={
            friend: {
                name: "",
                age: "",
                email: "",
            }
        }
    }

  render() {
    return (
      <div>
        <h2>Add Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            value={this.state.friend.name}
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <div className="baseline" />
          <input
            placeholder="age"
            value={this.state.item.age}
            type="number"
            name="age"
            onChange={this.handleChange}
          />
          <div className="baseline" />
          <input
            placeholder="email"
            value={this.state.item.email}
            type="text"
            name="email"
            onChange={this.handleChange}
            />
          <button className="md-button form-button">Add New Item</button>
        </form>
        </div>)
}
}

export default NewFriendForm;