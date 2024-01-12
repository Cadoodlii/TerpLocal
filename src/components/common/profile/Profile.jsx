import "../page-title/PageTitle.css"
import './Profile.css'
import React, {Component} from 'react';

class Profile extends Component {

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
    console.log('Image uploaded:', this.state.selectedFile);
  }

  render() {
    
    //default profile picture
    const defaultPFP = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';
    
    return (
      <div className="App">

        <input type="file" onChange={this.fileSelectedHandler} />
      
        <div>
        {this.state.selectedFile ? (
          //true condition
            <img
              src={URL.createObjectURL(this.state.selectedFile)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
        ) : (
          //default condition
          <img
          src = {defaultPFP}
          alt = "Default"
          style = {{maxWidth: '100%', maxHeight: '300px' }}
          />
        )}
      </div>
      <button onClick = {this.handleUpload}> Upload </button>
      </div>
    );
  }
}

export default Profile;
