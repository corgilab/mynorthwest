import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapGL, { Marker } from 'react-map-gl';
import find from 'lodash/find';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import { insertPoint, selectPoints, deletePoint } from '~/helpers/firebase';
import { TOKEN, STYLE, LATITUDE, LONGITUDE, ZOOM } from '~/constants/map';
import { MAIN_COLOR } from '~/constants/styles';
import { POINTS } from '~/constants/points';
import store from '~/store/store';

const MarketImage = styled.span`
	pointer-events: none;
	position: relative;
	top: -50px;
	left: -20px;

	&:after {
		content: '';
		position: absolute;
		box-sizing: border-box;
		display: block;
		left: calc(50% - 10px);
		top: 10px;
		border-style: solid;
		border-color: ${MAIN_COLOR} transparent transparent transparent;
		border-width: 10px;
	}
`;

const Icon = styled.img`
	box-sizing: border-box;
	width: 40px;
	padding: 5px;
	background-color: ${MAIN_COLOR};
	border-radius: 5px;
`;

const MarkerDelete = styled.span`
	position: absolute;
	right: 0;
	height: 10px;
	width: 10px;
	background-color: #000;
	pointer-events: auto;
	cursor: pointer;
`;

const Map = props => {
	const [viewport, setViewport] = useState({
		latitude: LATITUDE,
		longitude: LONGITUDE,
		zoom: ZOOM,
		minZoom: ZOOM,
		attributionControl: false,
	});

	const [points, setPoints] = useState([]);

	useEffect(() => {
		if (!points.length) {
			selectPoints().then(res => setPoints(res));
		}
	});

	const updateMap = viewport => {
		setViewport(viewport);
	};

	const handleAddPoint = event => {
		const { store } = props;

		event.preventDefault();

		if (store.pointType && store.userId) {
			const newPoint = {
				long: event.lngLat[0],
				lat: event.lngLat[1],
				type: store.pointType,
				userId: store.userId,
			};
			setPoints([...points, newPoint]);
			insertPoint(newPoint);
		}
	};

	const handleDelMarker = (ind, point, event) => {
		event.preventDefault();

		deletePoint(point);
		points.splice(ind, 1);
	};

	const _validatePointType = (id, type) => id === type || id === type.split('_')[0];

	return (
		<MapGL
			{...viewport}
			width='100vw'
			height='100vh'
			mapboxApiAccessToken={TOKEN}
			mapStyle={STYLE}
			onViewportChange={updateMap}
			onClick={handleAddPoint}
		>
			{points.map((value, index) => {
				const validPoint = find(POINTS, p => _validatePointType(p.id, value.type));

				return validPoint ? (
					<Marker key={index} longitude={value.long} latitude={value.lat} draggable={false}>
						<MarketImage>
							{value.userId === store.userId ? (
								<MarkerDelete onClick={e => handleDelMarker(index, value, e)} />
							) : null}
							<Icon src={validPoint && validPoint.imgSrc} />
						</MarketImage>
					</Marker>
				) : null;
			})}
		</MapGL>
	);
};

Map.propTypes = {
	store: PropTypes.objectOf(PropTypes.shape({})),
};

export default Map;
