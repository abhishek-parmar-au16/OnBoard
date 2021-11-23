import axios from 'axios'
import React, { Component } from 'react';
class Profile extends Component {
  

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePresentAdd = this.onChangePresentAdd.bind(this);
        this.onChangePermanentAdd = this.onChangePermanentAdd.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleClick= this.handleClick.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          dob: '',
          gender:'',
          presentAdd:'',
          permanentAdd:'',
          city:'',
          state:'',
          zip:''

        }
      }
      
     
      onChangeName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeEmail(e) {
        this.setState({ email: e.target.value })
      }
    
      onChangeDob(e) {
        this.setState({ dob: e.target.value })
      }
      onChangeGender(e) {
        this.setState({ gender: e.target.value })
      }
      onChangePresentAdd(e) {
        this.setState({ presentAdd: e.target.value })
      }
      onChangePermanentAdd(e) {
        this.setState({ permanentAdd: e.target.value })
      }
      onChangeState(e) {
        this.setState({ state: e.target.value })
      }
      onChangeCity(e) {
        this.setState({ city: e.target.value })
      }
      onChangeZip(e) {
        this.setState({ zip: e.target.value })
      }
      
      
    
      onSubmit(e) {
        e.preventDefault()
        alert("Personal Detail Saved Sucessfully");
        
        const PersonalDetailObject = {
          name: this.state.name,
          email: this.state.email,
          dob: this.state.dob,
          gender: this.state.gender,
          presentAdd: this.state.presentAdd,
          permanentAdd: this.state.permanentAdd,
          state: this.state.state,
          city: this.state.city,
          zip: this.state.zip
        };
        axios.post('http://localhost:2021/api/personal-details', PersonalDetailObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', email: '', dob: '',gender:'',presentAdd:'',permanentAdd:'',state:'',city:'',zip:'' })
      }

      
     

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'left',
                    height: '100vh'
	}}
	>
	<div>
            <form class="row g-3" onSubmit={this.onSubmit}>
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" value={this.state.name} onChange={this.onChangeName} />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" value={this.state.email} onChange={this.onChangeEmail} />
                </div>
                <div class="col-md-4">
                    <label for="dob" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" id="date" value={this.state.dob} onChange={this.onChangeDob} />
                </div>
                           
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Present Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.presentAdd} onChange={this.onChangePresentAdd} />
                </div>
                <div class="col-6">
                    <label for="inputAddress2" class="form-label">Permanent Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.permanentAdd} onChange={this.onChangePermanentAdd} />
                </div>
                <div class="col-md-4">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" value={this.state.city} onChange={this.onChangeCity} />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" value={this.state.state} onChange={this.onChangeState} >
                        <option selected>Choose...</option>
                        <option>Madhya Pradesh</option>
                        <option>Andhra Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Goa</option>
                        <option>Delhi</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="number" class="form-control" id="inputZip" value={this.state.zip} onChange={this.onChangeZip} />
                </div>
                <div lass="col-5">
                    <select value={this.state.gedner} onChange={this.onChangeGender} >
                        
                        <option name="gender"> Gender</option>
                        <option name="male"> Male</option>
                        <option name="female">Female</option>
                    </select>                   
                </div >
                
                <div class="col-12">
                    <button type="submit" class="btn btn-danger btn-lg">Save</button>
  
                    
                </div>
                
            </form>
            <button type="button" onClick={event =>  window.location.href='/Contact'} class="btn btn-primary">Next</button>
            

        </div>
	</div>
        );
    }
}



export default Profile;
