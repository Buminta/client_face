import React from 'react'

export default class Passport extends React.Component{
  state = {
    deleting: false
  }
  onClickDelete(){
    this.setState({deleting: true})
    this.props.onDelete(this.props._id)
  }
  render(){
    return (
      <figure className="figure">
        <img 
          className="img-thumbnail"
          style={{width: "180px", "height": "240px"}} 
          src={`api/passports/${this.props._id}`} 
          alt={this.props._id} 
          width={180} 
          height={240}/>
        <figcaption className="figure-caption">
          <button 
            className="btn btn-danger" 
            disabled={this.state.deleting} 
            onClick={() => this.onClickDelete()}>
            Delete
          </button>
        </figcaption>
      </figure>)
  }
}