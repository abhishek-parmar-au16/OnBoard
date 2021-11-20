import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from 'axios';


class Bank extends Component {
	constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBankName = this.onChangeBankName.bind(this);
        this.onChangeIFSC = this.onChangeIFSC.bind(this);
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          bankName: '',
          ifsc: '',
          account_number:'',
          

        }
      }
      onChangeName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeBankName(e) {
        this.setState({ bankName: e.target.value })
      }
    
      onChangeIFSC(e) {
        this.setState({ ifsc: e.target.value })
      }
      onChangeAccountNumber(e) {
        this.setState({ account_number: e.target.value })
      }
      
      
    
      onSubmit(e) {
        e.preventDefault()
        alert("Bank Detail Saved Sucessfully")
        
        const BankDetailObject = {
          name: this.state.name,
          bankName: this.state.bankName,
          ifsc: this.state.ifsc,
          account_number: this.state.account_number,
          
        };
        axios.post('http://localhost:2021/api/bank-info', BankDetailObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', bankName: '', ifsc: '',account_number:'' })
      }
	render() { 
		return (
			<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form onSubmit={this.onSubmit} >
				<Form.Group controlId="Name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
				</Form.Group>

				<Form.Group controlId="BankName">
				<Form.Label>Bank Name</Form.Label>
				<Form.Control type="text" value={this.state.bankName} onChange={this.onChangeBankName}  />
				</Form.Group>

				<Form.Group controlId="IFSC">
				<Form.Label>IFSC</Form.Label>
				<Form.Control type="text" value={this.state.ifsc} onChange={this.onChangeIFSC} />
				</Form.Group>

				<Form.Group controlId="Account">
				<Form.Label>Account Number</Form.Label>
				<Form.Control type="number" value={this.state.account_number} onChange={this.onChangeAccountNumber} />
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
