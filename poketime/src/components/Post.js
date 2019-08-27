import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state = {
        post: null
    } 

    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            }) 
    }

    render(){
        const Finalpost = this.state.post ? (
            <div className="post">
                <h4 className='center'>{this.state.post.title}</h4>
                <p className='center'>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                Loading Post........
            </div>
        )
        return(
            <div className="container">
                { Finalpost }
            </div>
        )
    }
}
export default Post