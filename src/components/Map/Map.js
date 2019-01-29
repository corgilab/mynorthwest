import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import ControlPanel from '~/components/ControlPanel/ControlPanel';
import { TOKEN, LATITUDE, LONGITUDE, ZOOM } from '~/constants/map';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { loadState } from "~/helpers/localStorage";
import { insertPoint, selectPoints } from '~/helpers/firebase';


@observer class Map extends Component {
    @observable pointType = loadState('point_type');
    @observable userId = loadState('user_id');

    state = {
        viewport: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          zoom: ZOOM
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

    handlePointDragEnd = (event, ind) => {
        event.preventDefault();
        console.log(event);
        console.log(ind)
        //change position of point in the this.state.points[ind]
    };

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        { ...viewport }
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={ TOKEN }
        onViewportChange={ this.updateMap }
        onClick={this.handleAddPoint.bind(this)}
      >
        {
            this.state.points.map((val, ind) => (
                <Marker
                    key={ind}
                    longitude={val.long}
                    latitude={val.lat}
                    draggable={true}
                    onDragEnd={(event) => this.handlePointDragEnd(event, ind)}
                >
                    <div>Pin {val.type}</div>
                </Marker>
            ))
        }
        <ControlPanel />
      </MapGL>
    );
  }
}
export default Map;