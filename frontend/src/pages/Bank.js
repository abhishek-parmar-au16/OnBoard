import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from 'axios';


class Bank extends Component {
	constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);

		this.state = {
			name: '',
			phonenumber: '',
			
			
  
		  }
		}
		onChangeName(e) {
		  this.setState({ name: e.target.value })
		}
	  
		onChangeBank(e) {
		  this.setState({ bank: e.target.value })
		}
	  
		
		
	  
		onSubmit(e) {
		  e.preventDefault()
		  alert("Personal Detail Saved Sucessfully")
		  
		  const ContactDetailObject = {
			name: this.state.name,
			bank: this.state.bank,
		  
			
		  };
		  axios.post('http://localhost:2021/api/contact-info', ContactDetailObject)
			.then(res => console.log(res.data));
	  
		  this.setState({ name: '', bank: '' })
		}
	render() {
		return (
			<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form>
				<Form.Group controlId="Name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
				</Form.Group>

				<Form.Group controlId="Bank-Name">
				<Form.Label>Bank Name</Form.Label>
				<Form.Control type="bankname" value={this.state.bank} onChange={this.onChangeBank} />
				</Form.Group>

				<Form.Group controlId="IFSC">
				<Form.Label>IFSC</Form.Label>
				<Form.Control type="text"/>
				</Form.Group>
				<Form.Group controlId="Account">
				<Form.Label>Account Number</Form.Label>
				<Form.Control type="text"/>
				</Form.Group>
				<Form.Group controlId="text">
				<Form.Label>Pan Card </Form.Label>
				<Form.Control type="text"/>
				</Form.Group>
				<br/>
				<Button variant="danger" size="lg" block="block" type="submit">
				Submit
				</Button>
			</Form>
		</div>
		);
	}
}




export default Bank;
