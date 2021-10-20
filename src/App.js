import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./components/AppRoutes/AppRoutes";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
