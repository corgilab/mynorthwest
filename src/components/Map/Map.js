/* global PATH_TO_RESOURCES */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapGL, { Marker } from 'react-map-gl';
import find from 'lodash/find';
import without from 'lodash/without';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import { insertPoint, selectPoints, deletePoint } from '~/helpers/firebase';
import { TOKEN, STYLE, LATITUDE, LONGITUDE, ZOOM } from '~/constants/map';
import { MAIN_COLOR } from '~/constants/styles';
import { POINTS } from '~/constants/points';

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
	right: 16px;
	top: -52px;
	z-index: 1;
	height: 13px;
	width: 13px;
	background: url('${PATH_TO_RESOURCES}/images/close.svg') no-repeat;
	background-size: cover;
	cursor: pointer;
`;

const Map = props => {
	const { store } = props;

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
		console.log('handleAddPoint'); // eslint-disable-line no-console

		event.preventDefault();

		if (store.pointType && store.userId) {
			const newPoint = {
				long: event.lngLat[0],
				lat: event.lngLat[1],
				type: store.pointType,
				userId: store.userId,
			};
			insertPoint(newPoint);
			setPoints([...points, newPoint]);
		}
	};

	const handleDeleteMarker = point => event => {
		console.log('handleDeleteMarker'); // eslint-disable-line no-console
		event.stopPropagation();
		deletePoint(point);
		setPoints([...without(points, point)]);
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
						{value.userId === store.userId ? <MarkerDelete onClick={handleDeleteMarker(value)} /> : null}
						<MarketImage>
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
