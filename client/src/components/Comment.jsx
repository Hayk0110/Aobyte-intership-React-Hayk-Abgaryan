import { Delete, Star, ThumbUp } from "@mui/icons-material";
import React, { Component } from "react";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(id) {
    const newComments = this.props.comments.filter((com) => com.id !== id);
    this.props.updateComments(newComments);
  }

  render() {
    return (
      <div className="comment">
        <div className="commentWrapper">
          <p className="commentText">{this.props.comment.text}</p>
          <p className="rate">
            <Star className="star" />
            {this.props.comment.rate}
          </p>
          <button
            className="btn"
            onClick={() => this.deleteComment(this.props.comment.id)}
          >
            <Delete />
          </button>
        </div>
      </div>
    );
  }
}
