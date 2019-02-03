import React, { Component } from 'react';
import styled from 'styled-components';
import MapGL, { Marker } from 'react-map-gl';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import find from 'lodash/find';
import 'mapbox-gl/dist/mapbox-gl.css';

import { loadState } from "~/helpers/localStorage";
import { insertPoint, selectPoints } from '~/helpers/firebase';
import { TOKEN, STYLE, LATITUDE, LONGITUDE, ZOOM } from '~/constants/map';
import { MAIN_COLOR } from '~/constants/styles';
import { POINTS } from '~/constants/points';

const MarketImage = styled.span`
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
	@observable pointType = loadState('point_type');
	@observable userId = loadState('user_id');

	state = {
		viewport: {
			latitude: LATITUDE,
			longitude: LONGITUDE,
			zoom: ZOOM,
			attributionControl: false
		},
		points: []
	};

	componentDidMount() {
		if (this.userId) {
			this.setState({
				points: selectPoints(this.userId)
			})
		}
	}

	updateMap = (viewport) => {
		this.setState({
			viewport: viewport
		});
	};

	handleAddPoint = (event) => {
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
				width='100vw'
        height='100vh'
				mapboxApiAccessToken={ TOKEN }
				mapStyle={ STYLE }
				onViewportChange={ this.updateMap }
				onClick={ this.handleAddPoint }
			>
				{
					this.state.points.map((value, index) => (
						<Marker
							key={ index }
							longitude={ value.long }
							latitude={ value.lat }
							draggable={ false }
						>
							<MarketImage>
								<Icon
									src={ find(POINTS, p => p.id === value.type).imgSrc }
								/>
							</MarketImage>
						</Marker>
					))
				}
			</MapGL>
		);
	}
}
export default Map;
