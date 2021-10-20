import React from "react";
import { Route, Switch } from "react-router-dom";

import UserList from "../UserList/UserList";
import ProductList from "../ProductList/ProductList";
import CategoryList from "../CategoryList/CategoryList";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/categories" component={CategoryList} />
    </Switch>
  );
};

export default AppRoutes;
