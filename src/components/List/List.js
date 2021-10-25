import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsers } from "../../actions/appActions";

import ListItem from "../ListItem/ListItem";

import "./List.scss";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.list });
    this.props.setUsers(this.props.list)
    console.log(this.props)
  }

  listItemDeleter = (id) => {
    this.setState({ list: this.state.list.filter((el) => el.id !== id) });
    console.log(this.state.list.filter((el) => el.id === id));
  };

  render() {
    return (
      <div className="app-list">
        {this.props.users.length > 0? (
          <div className="app-list__container">
            <ListItem element={this.state.list[0]} heading={true} />
            {this.props.users.map((el, idx) => {
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps,{setUsers})(List)