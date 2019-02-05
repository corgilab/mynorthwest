import React from 'react';
import { Link } from 'react-router-dom';
import { MAP_ROUTE } from '~/constants/routers';

const MainPage = () => {
	return (
		<>
			<Link to={ MAP_ROUTE }>
				Открыть карту
			</Link>
		</>
	);
}

export default MainPage;