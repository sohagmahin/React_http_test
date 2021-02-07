import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: null,
    }
    componentDidMount() {
        Axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max',
                    };
                });
                this.setState({ posts: updatedPost })
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            })
    }
    selectedPostHandler = (id) => {
        this.setState({ selectedPostId: id });
    }
    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.selectedPostHandler(post.id)}
                />;
            }
            );
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;