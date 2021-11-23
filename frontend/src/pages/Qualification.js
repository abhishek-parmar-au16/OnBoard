import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button'; 
import React, { Component } from 'react';
import axios from 'axios';


class Qualification extends Component {
	constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSSC = this.onChangeSSC.bind(this);
        this.onChangeHSC = this.onChangeHSC.bind(this);
        this.onChangeCollegeName = this.onChangeCollegeName.bind(this);
        this.onChangeGraduation = this.onChangeGraduation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          ssc: '',
          hsc: '',
          collegeName:'',
		      graduation:'',
          

        }
      }
      onChangeName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeSSC(e) {
        this.setState({ ssc: e.target.value })
      }
    
      onChangeHSC(e) {
        this.setState({ hsc: e.target.value })
      }
      onChangeCollegeName(e) {
        this.setState({ collegeName: e.target.value })
      }
      onChangeGraduation(e) {
        this.setState({ graduation: e.target.value })
      }
      
      
    
      onSubmit(e) {
        e.preventDefault()
        alert("Qualification Detail Saved Sucessfully")
        
        const QualificationDetailObject = {
          name: this.state.name,
          ssc: this.state.ssc,
          hsc: this.state.hsc,
          collegeName: this.state.collegeName,
          graduation: this.state.graduation,
          
        };
        axios.post('http://localhost:2021/api/qualification-info', QualificationDetailObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', ssc: '', hsc: '',collegeName:'', graduation:''})
      }
	render() {
		return (
      <div>
			<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form onSubmit={this.onSubmit} >
				<Form.Group controlId="Name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>10th Board Marks</Form.Label>
				<Form.Control type="number" value={this.state.ssc} onChange={this.onChangeSSC} />
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>12th Board Marks</Form.Label>
				<Form.Control type="number" value={this.state.hsc} onChange={this.onChangeHSC} />
				</Form.Group>

				<Form.Group controlId="text">
				<Form.Label>College Name</Form.Label>
				<Form.Control type="text" value={this.state.collegeName} onChange={this.onChangeCollegeName}/>
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>CGPA/Percentage</Form.Label>
				<Form.Control type="number" value={this.state.graduation} onChange={this.onChangeGraduation}/>
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

export default Qualification;


