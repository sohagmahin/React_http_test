import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
// import NewPost from '../Blog/NewPost/NewPost';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink to="/posts"
                                className="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li> <NavLink to={{
                                pathname: 'new-post',
                                hash: "#submit",
                                search: "?quick-submit=true",
                            }}
                            > New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found!</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>

        );
    }
}

export default Blog;