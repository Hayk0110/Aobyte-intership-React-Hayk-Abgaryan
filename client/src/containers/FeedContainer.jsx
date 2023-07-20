import React, { Component } from "react";
import { searchComent } from "../helpers";
import PostContainer from "../containers/PostContainer";
import Feed from "../components/Feed";

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      pool: [...this.props.posts].sort((a, b) => a.id - b.id),
    };

    this.updatePool = this.updatePool.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  updatePool(newComments, id) {
    const updatedPool = this.state.pool.map((post) => {
      if (post.id === id) {
        post.comments = newComments;
      }

      return post;
    });

    this.setState({ pool: updatedPool });
  }

  changeInput(value) {
    this.setState({ input: value });
  }

  render() {
    return (
      <Feed
        {...{
          input: this.state.input,
          pool: this.state.pool,
          changeInput: this.changeInput,
          updatePool: this.updatePool,
        }}
      />
    );
  }
}
