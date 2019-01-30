import React from 'react';

import Map from '~/components/Map/Map';
import ControlPanel from '~/components/ControlPanel/ControlPanel';

const App = () => {
	return (
		<>
			<ControlPanel />
			<Map />
		</>
	);
}

export default React.memo(App);
