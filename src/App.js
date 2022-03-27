import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Error from "./pages/Error";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <main className="bg-gray-100 dark:bg-gray-900">
        <Header />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:details" exact component={Country} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
