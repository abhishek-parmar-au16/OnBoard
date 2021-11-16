import React from 'react';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';



const Bank = (props) => {
return (
	
		<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form>
				<Form.Group controlId="Name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text"/>
				</Form.Group>

				<Form.Group controlId="Bank-Name">
				<Form.Label>Bank Name</Form.Label>
				<Form.Control type="bankname"/>
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
};

export default Bank;
