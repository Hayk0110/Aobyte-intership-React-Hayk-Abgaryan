import React, { useState } from "react";

import List from "../components/List";

import { sortBy } from "../helpers";
import { asc, desc } from "../constants";

const ListContainer = ({ addPost, changeShown }) => {

  const [list,setList] = useState([]);
  const [count,setCount] = useState(1);

  const addHandler = (post) => {
    if (count % 2 === 1) {
      setList((prev) => 
        sortBy([...prev, post], "averageRate", desc)
      );
    } else {
      setList((prev) => 
        sortBy([...prev, post], "averageRate", asc)
      );
    }
  }

  const removePost = (id) => {
    setList(
      list.filter((post) => post.id !== id),
    );
    changeShown(id);
  }

  const sortHandler = () => {
    if (list.length <= 1) {
      return;
    } else if (count % 2 === 1) {
      sortBy(list, "averageRate", asc);
      setCount( count + 1 );
    } else {
      sortBy(list, "averageRate", desc);
      setCount( count + 1 );
    }
  }

  return (
    <List
        {...{
          addPost,
          changeShown,
          list,
          sortHandler,
          removePost,
          addHandler,
        }}
      />
  )
}

export default ListContainer