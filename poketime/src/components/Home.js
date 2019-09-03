import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}> <span className="card-title">{post.title}</span> </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No posts yet
            </div>
        )

        return(
            <div className="Home container">
                <h3 className="center">Home</h3>
                {postList}
            </div>
        )
    }
    
}

const mapStatetoProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStatetoProps)(Home)