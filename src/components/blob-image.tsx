// src/components/blob-image.tsx
import type React from 'react';

interface BlobImageProps {
  imageUrl: string;
  className?: string;
  alt?: string; // Added alt for accessibility, though it won't render directly in the SVG image tag
}

const BlobImage: React.FC<BlobImageProps> = ({ imageUrl, className, alt = "Profile image" }) => {
  return (
    <svg
      id="blob-svg-container" // Changed ID to be more specific
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" // React uses camelCase for namespaced attributes
      className={className}
      aria-label={alt} // For accessibility
      role="img"
    >
      <defs>
        <clipPath id="blob-clippath"> {/* Changed ID to be more specific */}
          <path
            fill="#474bff" // This fill is for the path itself, usually not visible when used as a clipPath
            d="M466.5,275Q455,310,444,345Q433,380,404.5,404Q376,428,343.5,443.5Q311,459,275.5,459Q240,459,206,454.5Q172,450,138.5,437.5Q105,425,79,400.5Q53,376,37,343.5Q21,311,11,275.5Q1,240,14.5,205.5Q28,171,44,140Q60,109,86,86.5Q112,64,142.5,48.5Q173,33,206.5,25Q240,17,275,21.5Q310,26,341,42Q372,58,397,83Q422,108,444.5,137Q467,166,472.5,203Q478,240,466.5,275Z"
          />
        </clipPath>
      </defs>
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#blob-clippath)" // Use the specific ID
        href={imageUrl} // For SVG <image>, 'href' or 'xlinkHref' can be used. React prefers 'href'.
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default BlobImage;
