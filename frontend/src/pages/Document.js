import React from 'react';

const Document = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'centre',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<div>
            <h1>
              Document
            </h1>
			<ul>
				<li>
				<h3>
              Upload your 10th Marksheet
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
				<br/>
				<li>
				<h3>
              Upload your 12th Marksheet
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
				<br/>
				<li>
				<h3>
              Upload your Degree
            </h3>
            <div>
                <input type="file"  />
                <button >
                  Upload!
                </button>
            </div>
				</li>
			</ul>
            <div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
        </div>
	</div>
);
};

export default Document;
