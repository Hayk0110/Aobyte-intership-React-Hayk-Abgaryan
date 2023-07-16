import { ThumbUp } from '@mui/icons-material'
import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <p className='commentText'>{this.props.comment.id}. {this.props.comment.text} <p className='rate'><ThumbUp style={{fontSize: "20px"}} />{this.props.comment.rate}</p></p>
      </div>
    )
  }
}
