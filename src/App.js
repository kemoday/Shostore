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
    <React.Fragment>
      <Switch>
        <Route path="/user" component={RegisterPage} />
        <Route path="/">
          <MainContaner>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/product/add/" component={AddProductPage} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/products/cart" component={CartPage} />
              <Route path="/products/favourite" component={FavouritePage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </MainContaner>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
