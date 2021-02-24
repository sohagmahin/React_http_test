import React, { Component } from 'react';
import Axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
import post from '../../../components/Post/Post';

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
        // this.props.history.push({ pathname: '/' + id });
        this.props.history.push('/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                //  <Link to={'/' + post.id} key={post.id}>
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
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;