import React from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainContaner } from "./components/MainContaner";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { FavouritePage } from "./pages/FavouritePage";
import { AddProductPage } from "./pages/AddProduct";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <MainContaner>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add" component={AddProductPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/123" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/favourite" component={FavouritePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </MainContaner>
  );
}

export default App;
