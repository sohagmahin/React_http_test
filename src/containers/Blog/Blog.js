import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import { Route, Link, NavLink } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink to="/"
                                exact
                                className="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Home</NavLink></li>
                            <li> <NavLink to={{
                                pathname: 'new-post',
                                hash: "#submit",
                                search: "?quick-submit=true",
                            }}
                            > New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" render={() => <h1>Hello</h1>} />
                <Route path="/" exact render={() => <h1>Hello 2</h1>} /> */}
                {<Route path="/" exact component={Posts} />}
                {<Route path="/:id" exact component={FullPost} />}
                {<Route path="/new-post" component={NewPost} />}
            </div>

        );
    }
}

export default Blog;