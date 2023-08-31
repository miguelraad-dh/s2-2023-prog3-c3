import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritos: [],
    };
  }

  render() {
    console.log(this.state.favoritos);
    return (
      <React.Fragment>
        <Navbar />
        <section>
          <h1>Coming soon...</h1>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
  x;
}

export default Favorites;
