import React from "react";
import { Route, Switch } from "react-router-dom";

import ItemList from '../List/List'

import usersList from "../../mockup/users.json";
import productsList from "../../mockup/products.json"
import categoryList from '../../mockup/categories.json'


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <ItemList list={usersList}/>} />
      <Route exact path="/products" component={() => <ItemList list={productsList}/>}/>
      <Route exact path="/categories" component={() => <ItemList list={categoryList}/>}/>
    </Switch>
  );
};

export default AppRoutes;
