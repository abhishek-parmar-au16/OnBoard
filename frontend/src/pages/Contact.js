import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from 'axios';




class Contact extends Component {
	constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmerConPerName = this.onChangeEmerConPerName.bind(this);
        this.onChangePersonNum = this.onChangePersonNum.bind(this);
        this.onChangeAltrNum = this.onChangeAltrNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          phonenumber: '',
          alternativePhone_number: '',
          emergency_contactPerson_name:'',
          emergency_contactPerson_number:'',
          

        }
      }
      onChangeName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeNumber(e) {
        this.setState({ phonenumber: e.target.value })
      }
    
      onChangeEmerConPerName(e) {
        this.setState({ emergency_contactPerson_name: e.target.value })
      }
      onChangePersonNum(e) {
        this.setState({ emergency_contactPerson_number: e.target.value })
      }
      onChangeAltrNum(e) {
        this.setState({ alternativePhone_number: e.target.value })
      }
      
    
      onSubmit(e) {
        e.preventDefault()
        alert("Personal Detail Saved Sucessfully")
        
        const ContactDetailObject = {
          name: this.state.name,
          phonenumber: this.state.phonenumber,
          alternativePhone_number: this.state.alternativePhone_number,
          emergency_contactPerson_name: this.state.emergency_contactPerson_name,
          emergency_contactPerson_number: this.state.emergency_contactPerson_number,
          
        };
        axios.post('http://localhost:2021/api/contact-info', ContactDetailObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', phonenumber: '', alternativePhone_number: '',emergency_contactPerson_name:'',emergency_contactPerson_number:'' })
      }
	render() {
		return (
			<div>
				<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form onSubmit={this.onSubmit} >

				<Form.Group controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
				</Form.Group>

				<Form.Group controlId="contact">
				<Form.Label>Contact Number</Form.Label>
				<Form.Control type="number" value={this.state.phonenumber} onChange={this.onChangeNumber} />
				</Form.Group>

				<Form.Group controlId="name">
				<Form.Label>Emergency Contact Person Name</Form.Label>
				<Form.Control type="text" value={this.state.emergency_contactPerson_name} onChange={this.onChangeEmerConPerName} />
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>Contact Number of Person</Form.Label>
				<Form.Control type="number" value={this.state.emergency_contactPerson_number} onChange={this.onChangePersonNum} />
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>Alternative Number</Form.Label>
				<Form.Control type="number" value={this.state.alternativePhone_number} onChange={this.onChangeAltrNum} />
				</Form.Group>
				<br/>
				<Button variant="danger" size="lg" block="block" type="submit">
				Submit
				</Button>
			</Form>
		</div>
			</div>
		);
	}
}



export default Contact;
