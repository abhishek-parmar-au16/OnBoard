import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile';
import Contact from './pages/Contact';
import Document from './pages/Document';
import Bank from './pages/Bank';
import Qualification from './pages/Qualification';
import Family from './pages/Family';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/profile' element={<Profile/>} />
		<Route path='/Contact' element={<Contact/>} />
		<Route path='/document' element={<Document/>} />
		<Route path='/bank' 	element={<Bank/>} />
		<Route path='/qualification' element={<Qualification/>} />
		<Route path='/family' element={<Family/>} />
	</Routes >
	</Router>
);
}

export default App;
