import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading } from "./components";
import { Login } from "./pages";
const RegisterLazy = lazy(() => import(`./pages/Register/Register`));
const ViewBooksLazy = lazy(() => import(`./pages/ViewBooks/ViewBooks`));
const AddBooksLazy = lazy(() => import(`./pages/AddBooks/AddBooks`));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterLazy} />
          <Route exact path="/viewbooks" component={ViewBooksLazy} />
          <Route exact path="/addbooks" component={AddBooksLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
