import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapUpdater = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 15);
    }
  }, [coords, map]);

  return null;
};

const InteractiveMap = ({ address, height = '400px' }) => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (address) {
      setError(null);
      setLoading(true);
      
      // Mock geocoding - in a real app, use a geocoding service
      setTimeout(() => {
        try {
          // Simulate successful geocoding with random coordinates near a known location
          const mockCoords = [
            37.7749 + (Math.random() * 0.02 - 0.01), 
            -122.4194 + (Math.random() * 0.02 - 0.01)
          ];
          setCoords(mockCoords);
        } catch (err) {
          setError('Error fetching location data');
        } finally {
          setLoading(false);
        }
      }, 500);
    }
  }, [address]);

  // Fix for Tailwind dynamic height class
  const containerClasses = `rounded-lg w-full ${height === '400px' ? 'h-[400px]' : 'h-full'}`;

  if (!address) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 rounded-lg ${containerClasses}`}>
        <p>No address selected</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 rounded-lg ${containerClasses}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 rounded-lg ${containerClasses}`}>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <MapContainer
        center={coords || [0, 0]}
        zoom={coords ? 15 : 2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coords && (
          <>
            <Marker position={coords} icon={icon}>
              <Popup>{address}</Popup>
            </Marker>
            <MapUpdater coords={coords} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;