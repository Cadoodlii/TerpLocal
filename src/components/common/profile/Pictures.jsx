import './Profile.css';
import React, { Component } from 'react';

class Pictures extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: [],
    };
  }

  fileSelectedHandler = (event, index) => {
    const pictures = Array.from(event.target.files);
    this.setState((prevState) => {
      const updatedFiles = [...prevState.selectedFiles];
      updatedFiles[index] = pictures[0];
      return {
        selectedFiles: updatedFiles,
      };
    });
  };

  handleUpload = () => {
    console.log('Image uploaded:', this.state.selectedFile);
  };

  render() {
    // Default profile picture
    const defaultPFPs = [
        'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg',
        'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg',
        'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg'
    ];

    const max = 3;
    const displayDefaultPictures = defaultPFPs.slice(0, max);

    return (
      <div className="Pictures">
        <div>
          <div>
            {this.state.selectedFile.length > 0 ? (
              // More pictures allows
              this.state.selectedFile.map((pictures, index) => (
              <img
              key = {index}
                src={URL.createObjectURL(pictures)}
                alt={`Selected ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '300px', marginRight: '10px'}}
              />
            ))) : (
              // Display default pictures
             displayDefaultPictures.map((url, index) => (
              <img
              key = {index}
                src={url}
                alt={`Default ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '300px',  marginRight: '10px'}}
              />
            ))
            )
            }
          </div>
          <div className="choose_file">
            <input type="file" id="fileInput" onChange={this.fileSelectedHandler} multiple/>
            <label className="label" htmlFor="fileInput">
              Choose File
            </label>
          </div>
        </div>
      </div>
    );
  }

}

export default Pictures;