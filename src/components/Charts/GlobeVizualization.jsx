// GlobeVisualization.js
import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Chip } from '@material-tailwind/react';

const GlobeVisualization = () => {
  const globeRef = useRef();

  const markers = [
    { lat: 40.7128, lng: -74.006, city: 'New York', color: 'red' },
    { lat: 35.6895, lng: 139.6917, city: 'Tokyo', color: 'blue' },
    { lat: 51.5074, lng: -0.1278, city: 'London', color: 'green' },
    { lat: 48.8566, lng: 2.3522, city: 'Paris', color: 'purple' },
    { lat: 34.0522, lng: -118.2437, city: 'Los Angeles', color: 'orange' },
    { lat: 39.9042, lng: 116.4074, city: 'Beijing', color: 'yellow' },
    { lat: 55.7558, lng: 37.6173, city: 'Moscow', color: 'cyan' },
    { lat: -33.8688, lng: 151.2093, city: 'Sydney', color: 'magenta' },
    ];

  useEffect(() => {
    const globe = globeRef.current;
    globe.pointOfView({ altitude: 2.5 });
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* small */}
      <div className='block md:hidden'>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointAltitude={0.01}
        pointRadius={0.2} // Increase the size of the points
        pointColor={'#ffffff'} // Set a fixed color for all points
        pointLabel={d => `${d.city} (${d.lat.toFixed(2)}, ${d.lng.toFixed(2)})`} // Tooltip
        labelsData={markers} // Add labels
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.city}
        labelSize={1.2}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelDotRadius={0.5}
        labelAltitude={0.01}
        height={500}
        width={320}
      />
      </div>
      {/* medium */}
      <div className='hidden md:block lg:hidden'>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointAltitude={0.01}
        pointRadius={0.2} // Increase the size of the points
        pointColor={'#ffffff'} // Set a fixed color for all points
        pointLabel={d => `${d.city} (${d.lat.toFixed(2)}, ${d.lng.toFixed(2)})`} // Tooltip
        labelsData={markers} // Add labels
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.city}
        labelSize={1.2}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelDotRadius={0.5}
        labelAltitude={0.01}
        height={500}
        width={670}
      />
      </div>
      {/* lg */}
      <div className='hidden lg:block xl:hidden'>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointAltitude={0.01}
        pointRadius={0.2} // Increase the size of the points
        pointColor={'#ffffff'} // Set a fixed color for all points
        pointLabel={d => `${d.city} (${d.lat.toFixed(2)}, ${d.lng.toFixed(2)})`} // Tooltip
        labelsData={markers} // Add labels
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.city}
        labelSize={1.2}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelDotRadius={0.5}
        labelAltitude={0.01}
        height={500}
        width={650}
      />
      </div>
      {/* xl */}
      <div className='hidden xl:block'>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointAltitude={0.01}
        pointRadius={0.2} // Increase the size of the points
        pointColor={'#ffffff'} // Set a fixed color for all points
        pointLabel={d => `${d.city} (${d.lat.toFixed(2)}, ${d.lng.toFixed(2)})`} // Tooltip
        labelsData={markers} // Add labels
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.city}
        labelSize={1.2}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelDotRadius={0.5}
        labelAltitude={0.01}
        height={500}
        width={470}
      />
      </div>
      {/* Countries Name Displayed */}
      <div className='w-11/12 mx-auto flex mt-10 
      flex-wrap gap-2'>
        {markers.map((marker, index) => (
          <Chip
            key={index}
            className="rounded-full"
            value={
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {marker.city}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GlobeVisualization;
