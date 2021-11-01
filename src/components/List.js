import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setUsers,
  deleteUser,
  addUser,
  editUser,
} from "../actions/appActions";

import ListItem from "./ListItem";

import "../styles/List.scss";

class List extends Component {
  sample = this.props.list[0];

  componentDidMount() {
    if(this.props[this.props.name].length === 0){
      this.props.setUsers(this.props.list,this.props.name);
    }
  }

  inputValueCombiner = () => {
    let temp = {};
    Object.keys(this.sample).map((el) => {
      if (el !== "id") {
        temp = { ...temp, [el]: document.getElementsByName(el)[0].value };
      }
    });

    return temp;
  };

  itemAdder = () => {
    let obj = this.inputValueCombiner();
    if (this.props.users.length > 0) {
      obj = {
        id: this.props.users[this.props.users.length - 1].id + 1,
        ...obj,
      };
    } else {
      obj = { id: 0, ...obj };
    }
    this.props.addUser(obj,this.props.name);
  };

  itemEditor = (id) => {
    let obj = this.inputValueCombiner();
    obj = { id, ...obj };
    this.props.editUser(obj,this.props.name);
  };

  itemDeleter = (id) => {
    this.props.deleteUser(id,this.props.name);
  };

  render() {
    return (
      <div className="app-list">
        <div className="app-list__adder">
          {Object.keys(this.sample).map((elem, idx) => {
            if (elem !== "id") {
              return (
                <input key={idx} name={`${elem}`} placeholder={`${elem}`} />
              );
            }
          })}
          <button onClick={() => this.itemAdder()}>Add</button>
        </div>
        {this.props[this.props.name].length > 0 ? (
          <div className="app-list__container">
            <ListItem element={this.props.users[0]} heading={true} />
            {this.props[this.props.name].map((el, idx) => {
              return (
                <ListItem
                  element={el}
                  key={idx}
                  heading={false}
                  editor={() => this.itemEditor(el.id)}
                  deleter={() => this.itemDeleter(el.id)}
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
    products: state.products,
    categories: state.categories
  };
};

const mapDispatchToProps = {
  setUsers,
  deleteUser,
  addUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
