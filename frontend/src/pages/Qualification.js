import React from 'react';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

const Qualification = () => {
return (
	<div class="form-wrapper  col-md-5 position-absolute top-50 start-50 translate-middle">
			<Form>
				<Form.Group controlId="Name">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text"/>
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>10th Board Marks</Form.Label>
				<Form.Control type="number"/>
				</Form.Group>

				<Form.Group controlId="number">
				<Form.Label>12th Board Marks</Form.Label>
				<Form.Control type="number"/>
				</Form.Group>
				<Form.Group controlId="text">
				<Form.Label>College Name</Form.Label>
				<Form.Control type="text"/>
				</Form.Group>
				<Form.Group controlId="number">
				<Form.Label>CGPA/Percentage</Form.Label>
				<Form.Control type="number"/>
				</Form.Group>
				<br/>
				<Button variant="danger" size="lg" block="block" type="submit">
				Submit
				</Button>
			</Form>
		</div>
);
};

export default Qualification;
