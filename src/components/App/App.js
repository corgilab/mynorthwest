import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';

import MainPage from '~/pages/MainPage/MainPage';
import MapPage from '~/pages/MapPage/MapPage';

const App = () => {
	return (
		<MemoryRouter
			initialEntries={['/', '/map']}
			initialIndex={1} >
			<div>
				<Route path='/' component={ MainPage } exact />
				<Route path='/map' component={ MapPage } exact />
			</div>
		</MemoryRouter>
	);
}

export default React.memo(App);
