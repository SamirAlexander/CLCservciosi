import React from "react";
import Pagina from "pages/pagina";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pagina} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
