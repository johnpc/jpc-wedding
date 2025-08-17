import React from "react";

const MapLinks = () => {
  const venueName = "Circ";
  const venueAddress = "210 S 1st St, Ann Arbor, MI 48104";
  const encodedAddress = encodeURIComponent(`${venueName}, ${venueAddress}`);

  const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}&address=${encodeURIComponent(
    venueAddress,
  )}`;

  return (
    <div className="map-links">
      <p className="venue-address">
        {venueName}, {venueAddress}
      </p>
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
        .map-links {
          margin: 1rem 0;
        }
        .venue-address {
          margin-bottom: 0.5rem;
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
          background-color: var(--color-sage);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default MapLinks;
