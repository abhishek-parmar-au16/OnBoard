import React from 'react';

const Qualification = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'centre',
		alignItems: 'centre',
		height: '100vh'
	}}
	>
	<div class="col-md-4">
			<ul>

				<li>
					<label for="name4" class="form-label">Full name:	</label>
					<input type="text" class="form-name" id="name" />
				</li>
				<li>
					<label for="hsc" class="form-label">HSC Marks:</label>
					<input type="number" class="form-hsc" id="hsc" />
				</li>
				<li>
					<label for="ssc" class="form-label">SSC  Marks:</label>
					<input type="number" class="form-ssc" id="ssc" />
				</li>
				<li>
					<label for="graduation" class="form-label">Graduation:</label>
					<input type="text" class="form-graduation" id="graduation" />
				</li>
				
			</ul>
			

			<div class="col-12" >
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>

		</div>
	</div>
);
};

export default Qualification;
