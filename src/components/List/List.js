import React, { Component } from "react";


import ListItem from "../ListItem/ListItem";

import "./List.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.list });
  }

  listItemDeleter = (id) => {
    this.setState({ list: this.state.list.filter((el) => el.id !== id) });
    console.log(this.state.list.filter((el) => el.id === id))
  };

  render() {
    return (
      <div className="app-list">
        {this.state.list.length !== 0 ? (
          <div className="app-list__container">
            <ListItem element={this.state.list[0]} heading={true} />
            {this.state.list.map((el, idx) => {
              return (
                <ListItem
                  element={el}
                  key={idx}
                  heading={false}
                  deleter={() => this.listItemDeleter(el.id)}
                  className="app-list__container__item"
                />
              );
            })}
          </div>
        ) : (
          <div>No list yet</div>
        )}
      </div>
    );
  }
}
