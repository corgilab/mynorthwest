import React from 'react';

import Map from '~/components/Map/Map';
import ControlPanel from '~/components/ControlPanel/ControlPanel';
import Logo from '~/components/Logo/Logo';

const App = () => {
	return (
		<>
			<ControlPanel />
			<Map />
			<Logo />
		</>
	);
}

export default React.memo(App);
