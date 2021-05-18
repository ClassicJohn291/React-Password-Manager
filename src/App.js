import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import './bootstrap.min.css';

import SiteNav from './components/SiteNav';
import Index from './Pages/Index/Index';
import NewCredential from './Pages/New/NewCredential';
import EditCredential from './Pages/Edit/EditCredential';


function App() {
return (
<BrowserRouter>
  <SiteNav />
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/new-credential" component={NewCredential} />
    <Route exact path="/edit/:id" component={EditCredential} />
  </Switch>
</BrowserRouter>
);
}

export default App;