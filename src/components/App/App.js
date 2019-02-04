import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from '~/pages/MainPage/MainPage';
import MapPage from '~/pages/MapPage/MapPage';

const App = () => {
	return (
		<>
			<Route path='/' component={ MainPage } exact />
			<Route path='/map' component={ MapPage } exact />
		</>
	);
}

export default React.memo(App);
