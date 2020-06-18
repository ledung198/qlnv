import React from 'react';
import './App.css';

import { Get } from './components/Get';
import { Navigation } from './components/Navigation';
// import Login from './components/Login';
// import Admin from './components/Admin';
// import Logout from './components/Logout';

import { Button } from "react-bootstrap";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Post } from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <h1 className="text-center p-5">Quản Lý Nhân Viên</h1>
        <Navigation></Navigation>
        <Switch>
          {/* <Route exact path='/' component={Login} ></Route>
        <Route path='/admin' component={Admin} ></Route>
        <Route path='/logout' component={Logout} ></Route> */}
          <Route exact path='/home' component={Get} ></Route>
          <Route exact path='/post' component={Post} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
