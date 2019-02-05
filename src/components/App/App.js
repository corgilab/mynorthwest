import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';


import MainPage from '~/pages/MainPage/MainPage';
import MapPage from '~/pages/MapPage/MapPage';
import { INDEX_ROUTE, MAP_ROUTE } from '~/constants/routers';

const App = () => {
	return (
		<MemoryRouter
			initialEntries={[INDEX_ROUTE, MAP_ROUTE]}
			initialIndex={1} >
			
			<>
				<Route path={ INDEX_ROUTE } component={ MainPage } exact />
				<Route path={ MAP_ROUTE } component={ MapPage } exact />
			</>

		</MemoryRouter>
	);
}

export default React.memo(App);
