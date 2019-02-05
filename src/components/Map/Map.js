import React, { Component } from 'react';
import styled from 'styled-components';
import MapGL, { Marker } from 'react-map-gl';
import { observer } from 'mobx-react';
import find from 'lodash/find';
import 'mapbox-gl/dist/mapbox-gl.css';

import { insertPoint, selectPoints } from '~/helpers/firebase';
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
		border-color: ${ MAIN_COLOR } transparent transparent transparent;
		border-width: 10px;
	}
`;

const Icon = styled.img`
	box-sizing: border-box;
	width: 40px;
	padding: 5px;
	background-color: ${ MAIN_COLOR };
	border-radius: 5px;
`;

@observer class Map extends Component {
	store = this.props.store;
	userId = this.store.userId;
	pointType = this.store.pointType;

	state = {
		viewport: {
			latitude: LATITUDE,
			longitude: LONGITUDE,
			zoom: ZOOM,
			attributionControl: false
		},
		points: [],
		features: [
			{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [LONGITUDE, LATITUDE]
				},
				"properties": {
					"title": "Test Point",
					"icon": "gym"
				}
			},
			{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [36.135236593668125,  51.74294485208462]
				},
				"properties": {
					"title": "children",
					"icon": "children"
				}
			},
			{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [36.13784137605365, 51.742149580251734]
				},
				"properties": {
					"title": "sport",
					"icon": "sport"
				}
			}
		]
	};

	_addLayer = () => {
		const map = this.mapRef.getMap();
		map.addLayer({
			"id": "points",
			"type": "symbol",
			"source": {
				"type": "geojson",
				"data": {
					"type": "FeatureCollection",
					"features": this.state.features
				}
			},
			"layout": {
				"icon-image": "{icon}",
				"text-field": "{title}",
				//"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
				// "text-offset": [0, 0.6],
				"text-anchor": "top"
			}
		});
	}

	componentDidMount() {
		selectPoints()
			.then( res => this.setState({ points: res }))
	}

	updateMap = (viewport) => {
		this.setState({viewport});
	};

	handleAddPoint = (event) => {
		this.pointType = this.store.pointType;
		event.preventDefault();

		if (this.pointType && this.userId) {
			let newPoint = {
				long: event.lngLat[0],
				lat: event.lngLat[1],
				type: this.pointType,
				userId: this.userId
			};
			this.setState({
				points: [...this.state.points, newPoint]
			});
			insertPoint(newPoint)
		}
	};

	render() {
		const { viewport } = this.state;

		return (
			<MapGL
				{ ...viewport }
				ref={ map => this.mapRef = map }
				width='100vw'
				height='100vh'
				mapboxApiAccessToken={ TOKEN }
				mapStyle={ STYLE }
				onViewportChange={ this.updateMap }
				onClick={ this.handleAddPoint }
				onLoad={ this._addLayer }
			>
				{
					this.state.points.map((value, index) => {
						const validPoint = find(POINTS, p => p.id === value.type);
						return (validPoint ?
							<Marker
								key={ index }
								longitude={ value.long }
								latitude={ value.lat }
								draggable={ false }
							>
								<MarketImage>
									<Icon
										src={ validPoint && validPoint.imgSrc }
									/>
								</MarketImage>
							</Marker>
							:
							null
						)
					})
				}
			</MapGL>
		);
	}
}
export default Map;
