import React, { Component } from 'react'
import Post from './Post'
import { search } from '../helpers/helper';

export default class Feed extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: ""
    }

    this.pool = [...this.props.posts].sort((a,b)=>a.id-b.id);
  }

  render() {
    return (
      <div className='feed' onClick={this.fn}>
      <input
       type="text"
       className='search' 
       placeholder='Search by comment' 
       value={this.state.value}
       onChange={(e)=>this.setState({value: e.target.value})} 
      />
       {this.state.value ? 
       
        search(this.pool,this.state.value).map(post=>(
          <Post key={post.id} post={post} />
        ))

       :
       this.pool.map(post=>{
        return post.isInList ? null : (<Post key={post.id} post={post} />)
       } 
       )}
      </div>
    )
  }
}
