import React, { Component } from "react";

import ListItem from "./ListItem";

import { Add, ImportExport } from "@mui/icons-material";

const List = ({ addPost, list, sortHandler, removePost, addHandler }) => {
  return (
    <div className="list">
        <div className="buttons">
          <button
            className="btn"
            onClick={() => addPost(addHandler)}
          >
            <Add />
          </button>
          <button className="btn" onClick={sortHandler}>
            <ImportExport />
          </button>
        </div>
        {list.map((post) => (
          <ListItem
            key={post.id}
            text={post.postText}
            id={post.id}
            rate={post.averageRate}
            removePost={removePost}
          />
        ))}
      </div>
  )
}

export default List
