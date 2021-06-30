import GoogleMapReact from 'google-map-react';


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -25.8275,
      lng:  -48.5414
    },
    zoom: 17
  };

  return (
  <div>
    
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBh6leFC8FWyqROV55VdQEe498RVr5_YwU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
    </div>
  );
}