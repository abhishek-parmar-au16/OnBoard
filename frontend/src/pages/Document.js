import React, { Component } from 'react';
import axios from 'axios';


class Document extends Component {
  state = {
 
    // Initially, no file is selected
    selectedFile: null
  };
  
  // On file select (from the pop up)
  onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };
  
  // On file upload (click the upload button)
  onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {
  
    if (this.state.selectedFile) {
       
      return (
        <div>
          <h2>File Details:</h2>
           
<p>File Name: {this.state.selectedFile.name}</p>

           
<p>File Type: {this.state.selectedFile.type}</p>

           
<p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  
  render() {
    return (
      <div>
        <div>
            <h1>
              Document
            </h1>
			<ul>
				<li>
				<h3>
              Aadhar Card
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
				<br/>
				<li>
				<h3>
              Pan Card
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
				<br/>
				<li>
				<h3>
              Passport Size Photo
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
			</ul>
            <div class="col-12">
                    <button type="submit" class="btn btn-danger">Save</button>
                </div>
        </div>
      </div>
    );
  }
}

export default Document;

