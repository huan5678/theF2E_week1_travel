import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/router";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
      <BrowserRouter>
        <Header />
      <Switch>{renderRoutes(routes)}</Switch>
      <Footer />
      </BrowserRouter>
  );
}

export default App;