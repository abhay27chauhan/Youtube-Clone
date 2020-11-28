import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
