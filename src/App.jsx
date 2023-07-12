import React, { Component } from 'react'
import List from './components/List'
import { posts } from './pool';
import { rateAvarage } from './helpers/helper';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      pool: posts,
    }

    this.addPost = this.addPost.bind(this);
    this.changeShown = this.changeShown.bind(this);
  } 

  componentDidMount(){
    this.setState(()=>{
      {pool: rateAvarage(this.state.pool)}
    })
  }

  addPost(changeList){
    for (const post of this.state.pool){
      if(!post.isShown){
        post.isShown = true;
        changeList(post);
        return;
      }
    }
  }

  changeShown(id){
    for (const post of this.state.pool){
      if(post.id === id){
        post.isShown = false;
        return;   
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <List addPost={this.addPost} changeShown={this.changeShown}/>
        <List addPost={this.addPost} changeShown={this.changeShown}/>
      </div>
    )
  }
}
