import './Profile.css';
import React, { Component } from 'react';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
    };
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  handleUpload = () => {
    // Perform upload logic here
    console.log('Image uploaded:', this.state.selectedFile);
    // You can send the file to your server or perform any other necessary actions.
  };

  render() {
    // Default profile picture
    const defaultPFP = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';

    return (
      <div className="Image">
        <div className="profile_picture_container">
          <div className="picture">
            {this.state.selectedFile ? (
              // True condition: Display selected image
              <img
                src={URL.createObjectURL(this.state.selectedFile)}
                alt="Selected"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            ) : (
              // Default condition: Display default profile picture
              <img
                src={defaultPFP}
                alt="Default"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            )}
          </div>
          <div className="choose_file">
            <input type="file" id="fileInput" onChange={this.fileSelectedHandler} />
            <label className="label" htmlFor="fileInput">
              Choose File
            </label>
          </div>
        </div>
      </div>
    );
  }

}

export default Image;