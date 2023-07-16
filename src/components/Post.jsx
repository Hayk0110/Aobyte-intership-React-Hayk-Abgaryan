import React, { Component } from 'react'
import Comment from './Comment';

export default class Post extends Component {

  render() {
    return (
      <div className='post'>
        <p className='postText'>{this.props.post.id}. {this.props.post.postText}</p>
        {
            this.props.post.comments.map(comment=>(
                <Comment key={comment.id} comment={comment} />
            ))
        }
      </div>
    )
  }
}
