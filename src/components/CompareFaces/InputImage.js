import React from 'react'
import ImageCompressor from 'image-compressor.js'
export default class InputImage extends React.Component{
  constructor(props){
    super(props)
    this.inputFile = null
  }
  onUpload(){
    let file
    if(this.inputFile.files.length !== 0)
      file = this.inputFile.files[0]
    else
      return;
    if(file['type'].search("image") === -1)
      return;
    new ImageCompressor(file, {
      quality: .8,
      success: (result) => {
        this.props.handleFile(file)
      } 
    })
  }
  render(){
    return (
      <div
        className={this.props.className}
        style={this.props.style}
      >
        <button 
          onClick={() => this.inputFile.click()}
          className="btn btn-info"
          
        >
          <div style={{display: "flex"}}>
            <i className="material-icons md-18">file_upload</i>{' '}{this.props.children}
          </div>
        </button>
        <input
          ref={inputFile => this.inputFile=inputFile}
          type="file" 
          autoComplete="off" 
          style={{display: "none"}}
          onChange={this.onUpload.bind(this)}/>
      </div>
    )
  }
}