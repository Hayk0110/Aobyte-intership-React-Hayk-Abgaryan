import React, { Component } from "react";
import { sortBy } from "../helpers";
import List from "../components/List";
import { asc, desc } from "../constants";

export default class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      count: 1,
    };

    this.addHandler = this.addHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  addHandler(post) {
    if (this.state.count % 2 === 1) {
      this.setState((prev) => ({
        list: sortBy([...prev.list, post], "averageRate", desc),
      }));
    } else {
      this.setState((prev) => ({
        list: sortBy([...prev.list, post], "averageRate", asc),
      }));
    }
  }

  removePost(id) {
    this.setState({
      list: this.state.list.filter((post) => post.id !== id),
    });
    this.props.changeShown(id);
  }

  sortHandler() {
    if (this.state.list.length <= 1) {
      return;
    } else if (this.state.count % 2 === 1) {
      sortBy(this.state.list, "averageRate", asc);
      this.setState({ count: this.state.count + 1 });
    } else {
      sortBy(this.state.list, "averageRate", desc);
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <List
        {...{
          addPost: this.props.addPost,
          changeShown: this.props.changeShown,
          list: this.state.list,
          sortHandler: this.sortHandler,
          removePost: this.removePost,
          addHandler: this.addHandler,
        }}
      />
    );
  }
}
