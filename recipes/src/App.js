import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        {/* NAVBAR POSITION */}
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/" component={Recipes} />
          <Route path="/" component={SingleRecipe} />
          <Route path="/" component={Switch} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
