import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import ScrollToTop from './ScrollToTop';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const customHistory = createBrowserHistory()

const App = () =>

    <Router history={customHistory}>
        <ScrollToTop>
        <div className="app">
            <Header />

            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home} />

            <Footer />
        </div>
        </ScrollToTop>
    </Router>

export default App;
