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

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler} />
        {this.state.selectedFile && (
          <div>
            <img
              src={URL.createObjectURL(this.state.selectedFile)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
            <button>hey</button>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
