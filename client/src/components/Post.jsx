import { ImportExport, Send } from "@mui/icons-material";
import React, { Component } from "react";
import Comment from "./Comment";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <button className="btn sort" onClick={this.props.sortComments}>
          <ImportExport />
        </button>
        <p className="postText">
          {this.props.post.id}. {this.props.post.postText}
        </p>
        {this.props.comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            comments={this.props.comments}
            updateComments={this.props.updateComments}
          />
        ))}
        <form onSubmit={this.props.addComment} className="postForm">
          <input
            className="postInput"
            type="text"
            value={this.props.input}
            onChange={(e) => this.props.changeInput(e.target.value)}
            placeholder="Write your comment"
          />
          <button className="btn">
            <Send />
          </button>
        </form>
      </div>
    );
  }
}
