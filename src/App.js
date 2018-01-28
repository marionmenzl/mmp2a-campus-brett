import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SavedPosts from './pages/SavedPosts';
import Messenger from './pages/Messenger';
import Login from './pages/Login';
import Register from './pages/Register';
import NewPost from './pages/NewPost';
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';
import Search from './pages/Search/index';
import Chatroom from './pages/Chatroom/index';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <EnsureLoggedInContainer history={history}>
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/saved-posts" component={SavedPosts} />
                        <Route path="/messenger" component={Messenger} />
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/search" component={Search} />
                        <Route path="/chat" component={Chatroom} />
                    </EnsureLoggedInContainer>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;