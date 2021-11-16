import React from 'react';

const Contact = () => {
return (
	<div
	style={{
		paddingTop: '3 px',
		display: 'flex',
		justifyContent: 'centre',
		alignItems: 'centre',
		height: '100vh'
	}}
	>
		<div class="col-md-4">
			<ul>

				<li>
				<label for="mobile4" class="form-label">Mobile Number:</label>
			<input type="number" class="form-mobile" id="mobile" />
				</li>
				<li>
				<label for="mobile4" class="form-label">Alternative Number:</label>
			<input type="number" class="form-mobile" id="mobile" />
				</li>

			</ul>
			

			<div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>

		</div>
		
	</div>
);
};

export default Contact;
