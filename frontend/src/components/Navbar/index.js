import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/profile' activeStyle>
			Profile
		</NavLink>
		<NavLink to='/contact' activeStyle>
            Contact
		</NavLink>
		<NavLink to='/document' activeStyle>
			Document
		</NavLink>
		<NavLink to='/bank' activeStyle>
            Bank/PF Details
		</NavLink>
		<NavLink to='/qualification' activeStyle>
            Qualification
		</NavLink>
		<NavLink to='/medical' activeStyle>
            Medical-Details
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
