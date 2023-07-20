import React, { Component } from "react";
import Post from "../components/Post";
import { v4 } from "uuid";
import { asc, desc } from "../constants";
import { sortBy } from "../helpers";

export default class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      comments: this.props.post.comments,
      count: 0,
    };

    this.addComment = this.addComment.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.sortComments = this.sortComments.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(value) {
    this.setState({ input: value });
  }

  addComment(e) {
    e.preventDefault();
    const newComment = {
      id: v4(),
      rate: 0,
      text: this.state.input,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      input: "",
    });
    this.props.updatePool(
      [...this.state.comments, newComment],
      this.props.post.id
    );
  }

  updateComments(newComments) {
    this.setState({ comments: newComments });
    this.props.updatePool(newComments, this.props.post.id);
  }

  sortComments() {
    if (this.state.comments.length <= 1) {
      return;
    } else if (this.state.count % 2 === 1) {
      sortBy(this.state.comments, "rate", asc);
      this.setState({ count: this.state.count + 1 });
    } else {
      sortBy(this.state.comments, "rate", desc);
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <Post
        {...{
          post: this.props.post,
          sortComments: this.sortComments,
          updateComments: this.updateComments,
          addComment: this.addComment,
          changeInput: this.changeInput,
          input: this.state.input,
          comments: this.state.comments,
        }}
      />
    );
  }
}
