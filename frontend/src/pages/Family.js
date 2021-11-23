import React, { Component } from 'react';
import axios from 'axios';

class Family extends Component {
	constructor(props) {
        super(props)
    
        // Setting up functions
        
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeFOccupation = this.onChangeFOccupation.bind(this);
        this.onChangeFDOB = this.onChangeFDOB.bind(this);
        this.onChangeMName = this.onChangeMName.bind(this);
        this.onChangeMOccupation = this.onChangeMOccupation.bind(this);
        this.onChangeMDOB = this.onChangeMDOB.bind(this);
        this.onChangeOther = this.onChangeOther.bind(this);
		this.onChangeOName = this.onChangeOName.bind(this);
        this.onChangeOQualification = this.onChangeOQualification.bind(this);
        this.onChangeOthers = this.onChangeOthers.bind(this);
		this.onChangeONames = this.onChangeONames.bind(this);
        this.onChangeOQualifications = this.onChangeOQualifications.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
			fName: '',
			fOccupation: '',
			fDob: '',
			mName:'',
			mOccupation:'',
			mDob:'',
			other:'',
			oName:'',
			oQualification:'',
			others:'',
			oNames:'',
			oQualifications:''

        }
      }
      onChangeFName(e) {
        this.setState({ fName: e.target.value })
      }
    
      onChangeFOccupation(e) {
        this.setState({ fOccupation: e.target.value })
      }
    
      onChangeFDOB(e) {
        this.setState({ fDob: e.target.value })
      }
      onChangeMName(e) {
        this.setState({ mName: e.target.value })
      }
      onChangeMOccupation(e) {
        this.setState({ mOccupation: e.target.value })
      }
      onChangeMDOB(e) {
        this.setState({ mDob: e.target.value })
      }
      onChangeOther(e) {
        this.setState({ other: e.target.value })
      }
      onChangeOName(e) {
        this.setState({ oName: e.target.value })
      }
      onChangeOQualification(e) {
        this.setState({ oQualification: e.target.value })
      }
      onChangeOthers(e) {
        this.setState({ others: e.target.value })
      }
      onChangeONames(e) {
        this.setState({ oNames: e.target.value })
      }
      onChangeOQualifications(e) {
        this.setState({ oQualifications: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
        alert("Family  Detail Saved Sucessfully")
        
        const FamilyDetailObject = {
          fName: this.state.fName,
          fOccupation: this.state.fOccupation,
          fDob: this.state.fDob,
          mName: this.state.mName,
          mOccupation: this.state.mOccupation,
          mDob: this.state.mDob,
          other: this.state.other,
          oName: this.state.oName,
          oQualification: this.state.oQualification,
		  others: this.state.others,
          oNames: this.state.oNames,
          oQualifications: this.state.oQualifications,
        };
        axios.post('http://localhost:2021/api/family-info', FamilyDetailObject)
          .then(res => console.log(res.data));
    
        this.setState({ fName: '', fOccupation: '', fDob: '',mName:'',mOccupation:'',mDob:'',other:'',oName:'',oQualification:'',others:'',oNames:'',oQualifications:''})
      }
	render() {
		return (
			<div>
			<div>
            <form class="row g-3" onSubmit={this.onSubmit}>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Father Name</label>
                    <input type="text" class="form-control" id="inputName4" value={this.state.fName} onChange={this.onChangeFName} />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Father Occupation</label>
                    <input type="text" class="form-control" id="inputEmail4" value={this.state.fOccupation} onChange={this.onChangeFOccupation} />
                </div>
                <div class="col-md-4">
                    <label for="dob" class="form-label">Date Of birth</label>
                    <input type="date" class="form-control" id="date" value={this.state.fDob} onChange={this.onChangeFDOB} />
                </div>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Mother Name</label>
                    <input type="text" class="form-control" id="inputName4" value={this.state.mName} onChange={this.onChangeMName}  />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Mother Occupation</label>
                    <input type="text" class="form-control" id="inputEmail4" value={this.state.MOccupation} onChange={this.onChangeMOccupation} />
                </div>
                <div class="col-md-4">
                    <label for="dob" class="form-label">Date Of birth</label>
                    <input type="date" class="form-control" id="date" value={this.state.mDob} onChange={this.onChangeMDOB}  />
                </div>

				<div class="col-md-4">
                    <label for="others" class="form-label">Others</label>
                    <select id="Others" class="form-select" value={this.state.other} onChange={this.onChangeOther} >
                        <option selected>Choose...</option>
                        <option>Brother</option>
                        <option>Sister</option>
                    </select>
                </div>
				<div class="col-md-4">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" value={this.state.oName} onChange={this.onChangeOName} />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Qualification</label>
                    <input type="text" class="form-control" id="inputEmail4" value={this.state.oQualification} onChange={this.onChangeOQualification} />
                </div>
				<div class="col-md-4">
                    <label for="others" class="form-label">Others</label>
                    <select id="Others" class="form-select" value={this.state.others} onChange={this.onChangeOthers}  >
                        <option selected>Choose...</option>
                        <option>Brother</option>
                        <option>Sister</option>
                    </select>
                </div>
				<div class="col-md-4">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" value={this.state.oNames} onChange={this.onChangeONames}  />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Qualification</label>
                    <input type="text" class="form-control" id="inputEmail4" value={this.state.oQualifications} onChange={this.onChangeOQualifications} />
                </div>
                
                
                <div class="col-12">
                    <button type="submit" class="btn btn-danger">Save</button>
                    {/* <button type="submit" class="btn btn-primary">Next</button> */}
                </div>
                
            </form>

        </div>
	</div>
		);
	}
}

export default Family;