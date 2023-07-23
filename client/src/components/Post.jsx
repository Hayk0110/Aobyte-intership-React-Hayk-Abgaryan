import React, { Component } from "react";

import Comment from "./Comment";

import { ImportExport, Send } from "@mui/icons-material";

const Post = ({ post, sortComments, updateComments, addComment, changeInput, input, comments }) => {
  return (
    <div className="post">
        <button className="btn sort" onClick={sortComments}>
          <ImportExport />
        </button>
        <p className="postText">
          {post.id}. {post.postText}
        </p>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            comments={comments}
            updateComments={updateComments}
          />
        ))}
        <form onSubmit={addComment} className="postForm">
          <input
            className="postInput"
            type="text"
            value={input}
            onChange={(e) => changeInput(e.target.value)}
            placeholder="Write your comment"
          />
          <button className="btn">
            <Send />
          </button>
        </form>
      </div>
  )
}

export default Post