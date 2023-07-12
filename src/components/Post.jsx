import React, { Component } from 'react'
import { rateColor } from '../helpers/helper';

export default class Post extends Component {

  constructor(props){
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove(){
    this.props.removePost(this.props.id)
  }

  render() {
    return (
      <div className='post'>
        <p className='text'>{this.props.id}. {this.props.text}</p>
        <p className='rate' style={rateColor(this.props.rate)}>{this.props.rate}</p>
        <button className='btn' onClick={this.remove}>-</button>
      </div>
    )
  }
}
