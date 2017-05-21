import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

class PointsMap extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.customPoint);
    return (
      <Map center={this.props.center} zoom={this.props.zoom} onClick={this.props.addCustomPoint.bind(this)}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
          this.props.points.map((point, index) => 
            <Marker onClick={this.props.onMarkerClick.bind(this, index)} position={[point.lat, point.lng]} key={index} />
          )
        }

        { this.props.customPoint ? <Marker position={[this.props.customPoint.lat, this.props.customPoint.lng]} key={1} /> : null }
      </Map>
    )
  }
} 

export default PointsMap;