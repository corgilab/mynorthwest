import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import ControlPanel from './ControlPanel/ControlPanel';

const mapboxToken = "pk.eyJ1IjoiZ3Jpc21lIiwiYSI6ImNqaTBhODJvMzEyaDAzcW9ldW1ybTNleXEifQ.wzvwfOMRBdoECeg3v5lFew";

class Map extends Component {
  state = {
    viewport: {
      latitude: 51.741117,
      longitude: 36.135659,
      zoom: 14.5
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
        mapboxApiAccessToken={ mapboxToken }
        onViewportChange={ this.updateMap } 
      >
        <ControlPanel />
      </MapGL>
    );
  }
}
export default Map;