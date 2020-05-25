import React, { Component } from 'react'
import './GridComp.css'

class GridComp extends Component {
  render() {
    return (
      <div onClick={this.props.HandleGrid} name={this.props.name} className='gridClass'>
        <p>{this.props.mark}</p>
      </div>
    )
  }
}

export default GridComp
