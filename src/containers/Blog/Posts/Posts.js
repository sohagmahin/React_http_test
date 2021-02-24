import React, { Component } from 'react';
import Axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props);
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
                // this.setState({ error: true });
            })
    }

    selectedPostHandler = (id) => {
        // this.props.history.push({ pathname: '/posts/' + id });
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                //  <Link to={'/posts/' + post.id} key={post.id}>
                return <Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.selectedPostHandler(post.id)}
                />
                //   </Link> 
            }
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;