import React, { Component } from 'react'
import List from './components/List'
import { posts } from './pool';
import { rateAvarage } from './helpers/helper';
import Feed from './components/Feed';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      pool: rateAvarage(posts),  
    }

    this.addPost = this.addPost.bind(this);
    this.changeShown = this.changeShown.bind(this);
  } 


  addPost(changeList){
    let arr = this.state.pool;
    for (const post of arr){
      if(!post.isInList){
        post.isInList = true;
        changeList(post);
        break;
      }
    }
    this.setState({pool: arr})
  }

  changeShown(id){
    let arr = this.state.pool;
    for (const post of this.state.pool){
      if(post.id === id){
        post.isInList = false;
        break;   
      }
    }
    this.setState({pool: arr})
  }

  render() {
    return (
      <div className='container'>
        <Feed posts={this.state.pool} />
        <div className='columns'>
          <List addPost={this.addPost} changeShown={this.changeShown}/>
          <List addPost={this.addPost} changeShown={this.changeShown}/>
        </div>
      </div>
    )
  }
}
