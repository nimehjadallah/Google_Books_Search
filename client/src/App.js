import React from "react";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm"
import "./App.css"

function App() {
  return (
    // <Router>
      <div>
        <Nav />
        {/* <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} /> 
        </Switch>
        <Footer /> */}
      </div>
    // </Router>
  );
}

export default App;