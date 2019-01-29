import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import ControlPanel from '~/components/ControlPanel/ControlPanel';
import { TOKEN, LATITUDE, LONGITUDE, ZOOM } from '~/constants/map';


class Map extends Component {
  state = {
    viewport: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      zoom: ZOOM
    }
  };

  updateMap = (viewport) => {
    this.setState({
      viewport
    });
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        { ...viewport }
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={ TOKEN }
        onViewportChange={ this.updateMap } 
      >
        <ControlPanel />
      </MapGL>
    );
  }
}
export default Map;