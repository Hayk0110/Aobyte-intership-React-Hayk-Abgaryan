import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";

import { searchComent } from "../helpers";

const Feed = ({ input, pool, changeInput, updatePool }) => {
  
  return (
    <div className="feed">
        <input
          type="text"
          className="search"
          placeholder="Search by comment"
          value={input}
          onChange={(e) => changeInput(e.target.value)}
        />
        {input
          ? searchComent(pool, input).map((post) => (
              <PostContainer
                key={post.id}
                post={post}
                updatePool={updatePool}
              />
            ))
          : pool.map((post) => {
              return post.isInList ? null : (
                <PostContainer
                  key={post.id}
                  post={post}
                  updatePool={updatePool}
                />
              );
            })}
      </div>
  )
}

export default Feed
