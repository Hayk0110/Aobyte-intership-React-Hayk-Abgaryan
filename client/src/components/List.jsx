import React, { Component } from "react";
import ListItem from "./ListItem";
import { Add, ImportExport } from "@mui/icons-material";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="buttons">
          <button
            className="btn"
            onClick={() => this.props.addPost(this.props.addHandler)}
          >
            <Add />
          </button>
          <button className="btn" onClick={this.props.sortHandler}>
            <ImportExport />
          </button>
        </div>
        {this.props.list.map((post) => (
          <ListItem
            key={post.id}
            text={post.postText}
            id={post.id}
            rate={post.averageRate}
            removePost={this.props.removePost}
          />
        ))}
      </div>
    );
  }
}
