import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';


import MainPage from '~/pages/MainPage/MainPage';
import MapPage from '~/pages/MapPage/MapPage';

const App = () => {
	return (
		<MemoryRouter
			initialEntries={['/', '/map']}
			initialIndex={1} >
			
			<>
				<Route path='/' component={ MainPage } exact />
				<Route path='/map' component={ MapPage } exact />
			</>

		</MemoryRouter>
	);
}

export default React.memo(App);
