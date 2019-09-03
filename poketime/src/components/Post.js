import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component{
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){
        const Finalpost = this.props.post ? (
            <div className="post">
                <h4 className='center'>{this.props.post.title}</h4>
                <p className='center'>{this.props.post.body}</p>
                <div className="center">
                    <button className='btn cyan' onClick={this.handleClick}>Delete Post</button>
                </div>
                
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

const mapStatetoProps = (state, ownProps) => {
    
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapStatetoDispatch = (Dispatch) =>{
    return {
        deletePost: (id) => {Dispatch({type: 'DELETE_POST', id: id})} 
    }
}

export default connect(mapStatetoProps, mapStatetoDispatch)(Post)