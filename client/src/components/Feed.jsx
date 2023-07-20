import React, { Component } from "react";
import { searchComent } from "../helpers";
import PostContainer from "../containers/PostContainer";

export default class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <input
          type="text"
          className="search"
          placeholder="Search by comment"
          value={this.props.input}
          onChange={(e) => this.props.changeInput(e.target.value)}
        />
        {this.props.input
          ? searchComent(this.props.pool, this.props.input).map((post) => (
              <PostContainer
                key={post.id}
                post={post}
                updatePool={this.props.updatePool}
              />
            ))
          : this.props.pool.map((post) => {
              return post.isInList ? null : (
                <PostContainer
                  key={post.id}
                  post={post}
                  updatePool={this.props.updatePool}
                />
              );
            })}
      </div>
    );
  }
}
