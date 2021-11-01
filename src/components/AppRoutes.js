import React from "react";
import { Route, Switch } from "react-router-dom";

import List from './List'

import usersList from "../mockup/users.json";
import productsList from "../mockup/products.json"
import categoryList from '../mockup/categories.json'


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <List list={usersList}/>} />
      <Route exact path="/products" component={() => <List list={productsList}/>}/>
      <Route exact path="/categories" component={() => <List list={categoryList}/>}/>
    </Switch>
  );
};

export default AppRoutes;
