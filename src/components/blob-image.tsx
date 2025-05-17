// src/components/blob-image.tsx
import type React from 'react';

interface BlobImageProps {
  imageUrl: string;
  className?: string;
  alt?: string;
}

const BlobImage: React.FC<BlobImageProps> = ({ imageUrl, className, alt = "Profile image" }) => {
  // The unique ID for the clipPath must match the one used in `clip-path` CSS property.
  // Using a fixed ID like "blobClipPath" is fine as long as this component isn't rendered
  // multiple times on the same page where IDs might conflict.
  // For unique IDs if needed: const clipId = React.useId();
  const clipPathId = "blob";

  return (
    <svg
      id="10015.io" // Using the ID from the provided SVG
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" // React uses camelCase for namespaced attributes
      className={className}
      aria-label={alt} // For accessibility
      role="img"
    >
      <defs>
        <clipPath id={clipPathId}>
          {/* New path data from your provided SVG */}
          <path fill="#474bff" d="M460.5,273.5Q446,307,431.5,338Q417,369,397,399Q377,429,344,443.5Q311,458,275.5,465.5Q240,473,206,461.5Q172,450,137,439.5Q102,429,77.5,402.5Q53,376,40,342.5Q27,309,18,274.5Q9,240,16,205Q23,170,40,138.5Q57,107,81.5,81.5Q106,56,136,34.5Q166,13,203,9Q240,5,276,11.5Q312,18,340,41.5Q368,65,398.5,83.5Q429,102,445,135Q461,168,468,204Q475,240,460.5,273.5Z" />
        </clipPath>
      </defs>
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(#${clipPathId})`} // Referencing the clipPath by its ID
        href={imageUrl} // For SVG <image>, 'href' or 'xlinkHref' can be used. React prefers 'href'.
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default BlobImage;
