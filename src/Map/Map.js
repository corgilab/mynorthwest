import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxToken = "pk.eyJ1IjoiZ3Jpc21lIiwiYSI6ImNqaTBhODJvMzEyaDAzcW9ldW1ybTNleXEifQ.wzvwfOMRBdoECeg3v5lFew";

class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render() {
        return (
            <ReactMapGL mapboxApiAccessToken={MapboxToken}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}
export default Map;