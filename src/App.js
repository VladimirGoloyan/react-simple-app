import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

import AppRoutes from "./components/AppRoutes/AppRoutes";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
