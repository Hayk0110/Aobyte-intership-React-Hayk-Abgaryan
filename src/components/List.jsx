import React, { Component } from "react";
import Post from "./Post";
import { Sort } from "../helpers/helper";

const asc = "ascending order";
const desc = "descending order"

export default class List extends Component {

  constructor(props){
    super(props);

    this.state ={
      list: [],
      count: 1,
    }

    this.addHandler = this.addHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  addHandler(post){
    if(this.state.count % 2 === 1){
      this.setState(prev=>({
        list: Sort([...prev.list,post],desc)
      }));
    }else{
      this.setState(prev=>({
        list: Sort([...prev.list,post],asc)
      }));
    }
    
  }

  removePost(id){
    this.setState({
      list: this.state.list.filter(post => post.id !== id),
    })
    this.props.changeShown(id);
  }

  sortHandler(){
    if(this.state.list.length <= 1){
      return;
    }else if(this.state.count % 2 === 1){
      Sort(this.state.list,asc)
      this.setState({count: this.state.count + 1})
    } else{
      Sort(this.state.list,desc)
      this.setState({count: this.state.count + 1})
    }
  }

  render() {
    return (
      <div className="list">
        <div className="buttons">
          <button className="btn" onClick={()=>this.props.addPost(this.addHandler)}>+</button>
          <button className="btn" onClick={this.sortHandler}>sort</button>
        </div>
        {
          this.state.list.map(post=>(
            <Post 
            key={post.id}
            text={post.postText}
            id={post.id}
            rate={post.avarageRate}
            removePost = {this.removePost}
            />
          ))
        }
        
      </div>
    );
  }
}
