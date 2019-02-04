import React from 'react';

import store from '~/store/store'
import Map from '~/components/Map/Map';
import ControlPanel from '~/components/ControlPanel/ControlPanel';
import Logo from '~/components/Logo/Logo';

const MapPage = () => {
	return (
		<>
			<ControlPanel store={store} />
			<Map store={store} />
			<Logo />
		</>
	);
}

export default MapPage;