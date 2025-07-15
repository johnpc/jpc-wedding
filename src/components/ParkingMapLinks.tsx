import React from "react";

interface ParkingMapLinksProps {
  name: string;
  address: string;
  note?: string;
}

const ParkingMapLinks: React.FC<ParkingMapLinksProps> = ({
  name,
  address,
  note,
}) => {
  const encodedAddress = encodeURIComponent(`${name}, ${address}`);

  const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}&address=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="parking-map-links">
      <p className="parking-name">
        <strong>{name}</strong>
      </p>
      <p className="parking-address">{address}</p>
      {note && <p className="parking-note">{note}</p>}
      <div className="map-buttons">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button google-maps"
        >
          Open in Google Maps
        </a>
        <a
          href={appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button apple-maps"
        >
          Open in Apple Maps
        </a>
      </div>
      <style jsx>{`
        .parking-map-links {
          margin: 1rem 0;
        }
        .parking-name {
          margin-bottom: 0.25rem;
        }
        .parking-address {
          margin-bottom: 0.25rem;
        }
        .parking-note {
          margin-bottom: 0.5rem;
          font-style: italic;
          font-size: 0.9rem;
        }
        .map-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .map-button {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .map-button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .google-maps {
          background-color: var(--color-primary);
          color: white;
        }
        .apple-maps {
          background-color: var(--color-secondary);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ParkingMapLinks;
