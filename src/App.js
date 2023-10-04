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
		<div> 
			<Link to="/"> Home </Link > 
			<Link to="/data"> Data </Link > 
			<Link to="/contact"> Contact </Link > 
		</div>


		{/* Outlet */}
		<div>
			<Outlet />
		</div>
	</>
};

export default App;
