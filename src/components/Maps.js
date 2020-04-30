import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogelMapsStyle";

export class Maps extends React.Component {
  render() {
    // console.log(this.props[0]);
    console.log(this.props[0].map((index, val) => index.Style));
    return this.props[0].map((index, val) => (
      <div
        style={{
          height: "420px",
          marginBottom: " 80px",
          position: "relative",
          overflow: "hidden",
        }}
        key={val}
      >
        <h1>{index.Name}</h1>
        <Map
          google={this.props.google}
          zoom={15}
          styles={index.Style}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        >
          <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
        </Map>
      </div>
    ));
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: "AIzaSyDCn8TFXGg17HAUcNpkwtxxyT9Io9B_NcM",
})(Maps);
