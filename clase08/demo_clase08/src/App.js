import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Personajes from "./screens/Personajes/Personajes";
import UnPersonaje from "./screens/UnPersonaje/UnPersonaje";
import Favorites from "./screens/Favorites/Favorites";
import NoEncontrada from "./screens/NoEcontrada/NoEncontrada";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/personajes" exact={true} component={Personajes} />
        <Route path="/personajes/:id" component={UnPersonaje} />
        <Route path="/favorites" component={Favorites} />
        <Route path="" component={NoEncontrada} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
