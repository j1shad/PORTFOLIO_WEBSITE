import { useRef } from 'react';
import TiltedCard from './TiltedCard.jsx';

interface TiltedProfileImageProps {
  imageSrc: string;
  containerSize?: string;
  containerSizeSm?: string;
}

export default function TiltedProfileImage({
  imageSrc,
  containerSize = '14rem',
  containerSizeSm = '18rem'
}: TiltedProfileImageProps) {
  return (
    <div
      style={{
        width: containerSize,
        height: containerSize
      }}
      className="sm:w-72 sm:h-72 mx-auto"
    >
      <TiltedCard
        imageSrc={imageSrc}
        altText="Jason Acquah's profile photo"
        captionText=""
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
      />
      <style jsx>{`
        div :global(.tilted-card-container) {
          border-radius: 50% !important;
          background: linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.05)) !important;
          overflow: hidden !important;
        }
        div :global(.tilted-card-img) {
          border-radius: 50% !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}
