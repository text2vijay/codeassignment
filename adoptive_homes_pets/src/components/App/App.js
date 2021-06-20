import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
//import Details from "../Details/Details";
import useToken from "./useToken";
import Header from "../common/Header";

function App() {
  const { token, setToken } = useToken();

  const [dogInfo, setDogsInfo] = useState(dogsInfo);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Header username={token}></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Dashboard dogsInfo={dogInfo} username={token} setDogsInfo={setDogsInfo} />
          </Route>
          <Route path="/dashboard">
            <Dashboard dogsInfo={dogInfo} username={token} setDogsInfo={setDogsInfo} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

var dogsInfo = [
  {
    id: 1,
    dogName: "Bull",
    price: 30000,
    available: 10,
  },
  {
    id: 2,
    dogName: "GermanShepherd",
    price: 40000,
    available: 20,
  },
  {
    id: 3,
    dogName: "Labrador",
    price: 50000,
    available: 30,
  },
];

export default App;
