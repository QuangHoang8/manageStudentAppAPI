import React from "react";
import style from "./App.module.css";
import "antd/dist/antd.css";
import {  Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NewStudent from "./components/NewStudent";
import ModifyStudent from "./components/ModifyStudent";
import { ConnectedRouter } from 'connected-react-router'

export default function App({history}) {
  return (
    <div className={style.app}>
      <ConnectedRouter history={history}>
     
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/NewStudent" component={NewStudent} />
          <Route path="/ModifyStudent/:id" component={ModifyStudent} />
        </Switch>
     
      </ConnectedRouter>
    </div>
  );
}
