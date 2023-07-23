import React, { useState } from "react";

import Feed from "../components/Feed";

const FeedContainer = ({ posts }) => {

  const [input, setInput] = useState("");
  const [pool, setPool] = useState([...posts].sort((a,b) => a.id - b.id));

  const updatePool = (newComments, id) => {
    
    const updatedPool = pool.map((post) => {
      if (post.id === id) {
        post.comments = newComments;
      }

      return post;
    });

    setPool(updatedPool);
  }

  const changeInput = (value) => {
    setInput(value);
  }


  return (
    <Feed
        {...{
          input,
          pool,
          changeInput,
          updatePool,
        }}
      />
  )
}

export default FeedContainer
