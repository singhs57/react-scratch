import "./App.css";
import rootRoutes from "./rootRoutes";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={rootRoutes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
