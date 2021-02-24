import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import Axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    sentPost = () => {
        let data = {
            'title': this.state.title,
            'content': this.state.content,
            'author': 'SOHAG',
        }
        Axios.post("/posts/", data)
            .then(response => {
                console.log(response.data);
                this.props.history.replace('/posts');
                // this.setState({
                //     submitted: true
                // });
            });
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        // let redirect = null;
        // redirect = this.state.submitted ? <Redirect to="/posts" /> : null;


        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.sentPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;