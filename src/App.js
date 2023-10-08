import React from 'react';
import './App.css';
import { 
	createBrowserRouter, 
	createRoutesFromElements, 
	Route, 
	Link, 
	Outlet, 
	RouterProvider
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Data, dataLoader } from './pages/Data';

function App() {

	// Create routes using a tree structure
	const router = createBrowserRouter(
		createRoutesFromElements(
			// Route of the routing system
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}/>	
				<Route path="/contact" element={<Contact />} />
				<Route path="/data" element={<Data />} loader={dataLoader}/>
			</Route>
		)
	);

	return (
		<div className="App">	
			<RouterProvider router={router} />
		</div>
	);
};


// Define route system
const Root = () => {
	return <> 
	{/* This element will render either <Root> when the URL is
        "/contact", <Root> at "/data", or null if it is "/"
    */}
		<div> 
			<Link to="/"> Home </Link > 
			<Link to="/data"> Data </Link > 
			<Link to="/contact"> Contact </Link > 
		</div>


		{/* An <Outlet> should be used in parent route elements 
		to render their child route elements. This allows nested UI 
		to show up when child routes are rendered. If the parent route 
		matched exactly, it will render a child index route or nothing 
		if there is no index route.*/}
		<div>
			<Outlet />
		</div>
	</>
};

export default App;
