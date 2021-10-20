import React, { Component } from "react";

import usersList from "../../mockup/users.json";
import ListItem from "../ListItem/ListItem";

import "./UserList.scss";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ users: usersList });
  }

  render() {
    return (
      <div className="app-user-list">
        {this.state.users.length !== 0 ? (
          <div className="app-user-list__container">
            <ListItem element={this.state.users[0]} heading={true}/>
            {this.state.users.map((el,idx) => {
              return (
                  <ListItem element={el} key={idx} heading={false} className="app-user-list__container__item" />
              );
            })}
          </div>
        ) : (
          <div>No users yet</div>
        )}
      </div>
    );
  }
}
