import React, { useState } from "react";

import ListContainer from "./ListContainer";
import FeedContainer from "./FeedContainer";

import { posts } from "../pool";
import { rateAvarage } from "../helpers";

const MainContainer = () => {
  const [pool, setPool] = useState(rateAvarage(posts));

  const addPost = (changeList) => {
    const arr = pool.map((post) => ({ ...post }));

    for (const post of arr) {
      if (!post.isInList) {
        post.isInList = true;
        changeList(post);
        break;
      }
    }

    setPool(arr);
  };


  const changeShown = (id) => {
    let arr = pool.map((post) => ({...post}));

    for (const post of arr) {
      if (post.id === id) {
        post.isInList = false;
        break;
      }
    }

    setPool(arr);
  };

  return (
    <div className="container">
      <FeedContainer posts={pool} />
      <div className="columns">
        <ListContainer addPost={addPost} changeShown={changeShown} />
        <ListContainer addPost={addPost} changeShown={changeShown} />
      </div>
    </div>
  );
};

export default MainContainer;
