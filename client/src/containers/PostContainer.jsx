import React, { Component, useState } from "react";

import { v4 } from "uuid";

import Post from "../components/Post";

import { asc, desc } from "../constants";
import { sortBy } from "../helpers";

const PostContainer = ({ post, updatePool }) => {

  const [input, setInput] =  useState("");
  const [comments, setComments] =  useState(post.comments);
  const [count ,setCount] =  useState(0);

  const changeInput = (value) => {
    setInput(value);
  }

  const addComment = (e) => {
    e.preventDefault();

    const newComment = {
      id: v4(),
      rate: 0,
      text: input,
    };

    setComments((prev) => [...prev,newComment]);
    setInput("");

    updatePool([...comments, newComment], post.id)
    
  }

  const updateComments = (newComments) => {
    setComments(newComments);
    updatePool(newComments, post.id);
  }

  const sortComments = () => {
    if (comments.length <= 1) {
      return;
    } else if (count % 2 === 1) {
      sortBy(comments, "rate", asc);
      setCount( count + 1 );
    } else {
      sortBy(comments, "rate", desc);
      setCount( count + 1 );
    }
  }

  return (
    <Post
        {...{
          post,
          sortComments,
          updateComments,
          addComment,
          changeInput,
          input,
          comments,
        }}
      />
  )
}

export default PostContainer
