import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, PrivateRoute } from "./components";
import { Login } from "./pages";
import { AuthContext } from "./contexts/AuthContext";
const RegisterLazy = lazy(() => import(`./pages/Register/Register`));
const ViewBooksLazy = lazy(() => import(`./pages/ViewBooks/ViewBooks`));
const AddBooksLazy = lazy(() => import(`./pages/AddBooks/AddBooks`));

function Routes() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      <Header logged={!!auth} />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterLazy} />
          <PrivateRoute
            exact
            path="/viewBooks"
            redirectPath="/"
            component={ViewBooksLazy}
          />
          <PrivateRoute
            exact
            redirectPath="/"
            path="/addBooks"
            component={AddBooksLazy}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
