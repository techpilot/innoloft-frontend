import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import MapSkeleton from './utils/skeletons/MapSkeleton';

const Map = ({ company }) => {
  const [center, setCenter] = useState({
    lat: Number(company?.address?.latitude),
    lng: Number(company?.address?.longitude),
  });
  const [activeMarker, setActiveMarker] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_KEY',
  });

  const handleActiveMarker = () => {
    setActiveMarker(!activeMarker);
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      const geoId = navigator.geolocation.watchPosition(
        (position) => {
          setCenter({
            lat: Number(company?.address?.latitude),
            lng: Number(company?.address?.longitude),
          });
        },
        (e) => {
          console.log(e);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
      return () => {
        window.navigator.geolocation.clearWatch(geoId);
      };
    }
  }, [company?.address?.latitude, company?.address?.longitude, setCenter]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={center}
      zoom={15}
    >
      <Marker
        position={{
          lat: center?.lat,
          lng: center?.lng,
        }}
        onMouseOver={() => handleActiveMarker}
        onClick={() => handleActiveMarker}
      >
        {activeMarker && (
          <InfoWindow
            position={center}
            onCloseClick={() => setActiveMarker(false)}
          >
            <div>
              <img src={company?.logo} alt="" />
              <p className="text-lg mt-1">{company?.name}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ) : (
    <MapSkeleton />
  );
};

export default Map;
