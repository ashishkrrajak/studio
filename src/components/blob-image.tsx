// src/components/blob-image.tsx
import type React from 'react';

interface BlobImageProps {
  imageUrl: string;
  className?: string;
  alt?: string;
}

const BlobImage: React.FC<BlobImageProps> = ({ imageUrl, className, alt = "Profile image" }) => {
  const clipPathId = "blob";
  const gradientId = "blobGradient";
  const blobPathData = "M460.5,273.5Q446,307,431.5,338Q417,369,397,399Q377,429,344,443.5Q311,458,275.5,465.5Q240,473,206,461.5Q172,450,137,439.5Q102,429,77.5,402.5Q53,376,40,342.5Q27,309,18,274.5Q9,240,16,205Q23,170,40,138.5Q57,107,81.5,81.5Q106,56,136,34.5Q166,13,203,9Q240,5,276,11.5Q312,18,340,41.5Q368,65,398.5,83.5Q429,102,445,135Q461,168,468,204Q475,240,460.5,273.5Z";

  return (
    <svg
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      aria-label={alt}
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "hsl(300, 80%, 60%)", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "hsl(200, 85%, 60%)", stopOpacity: 1}} />
        </linearGradient>
        <clipPath id={clipPathId}>
          <path fill="#474bff" d={blobPathData} />
        </clipPath>
      </defs>
      {/* New path for the gradient background */}
      <path d={blobPathData} fill={`url(#${gradientId})`} />
      {/* Image clipped by the blob path */}
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(#${clipPathId})`}
        href={imageUrl}
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default BlobImage;
