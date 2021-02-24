import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>

        );
    }
}

export default Blog;