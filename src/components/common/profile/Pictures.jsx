import './Profile.css';
import React, { Component } from 'react';

class Pictures extends Component {
  constructor() {
    super();
    this.state = {
      selectedFiles: Array(3).fill(null), // Initialize with 3 null values
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
    console.log('Images uploaded:', this.state.selectedFiles);
  };

  render() {
    // Default profile pictures
    const defaultPFPs = [
      'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg',
      'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg',
      'https://www.digitalcitizen.life/wp-content/uploads/2020/10/photo_gallery-1-596x225.jpg',
    ];

    return (
      <div>
        <div>
          <div className="Pictures">
            {this.state.selectedFiles.map((picture, index) => (
              <div key={index}>
                {picture ? (
                  // Display selected picture
                  <img class = "pic"
                    src={URL.createObjectURL(picture)}
                    alt={`Selected ${index + 1}`}
                    style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }}
                  />
                ) : (
                  // Display default picture
                  <img
                  class = "pic"
                    src={defaultPFPs[index]}
                    alt={`Default ${index + 1}`}
                    style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }}
                  />
                )}
                <div className="choose_file">
                  <input
                  class = "pic"
                    type="file"
                    id={`fileInput${index}`}
                    onChange={(e) => this.fileSelectedHandler(e, index)}
                  />
                  <label className="label" htmlFor={`fileInput${index}`}>
                    Choose File
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;