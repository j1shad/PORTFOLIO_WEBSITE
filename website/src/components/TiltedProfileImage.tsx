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
      className="sm:w-72 sm:h-72"
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
        scaleOnHover={1.1}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
      />
      <style jsx>{`
        :global(.tilted-card-img) {
          border-radius: 50% !important;
          border: 2px solid hsl(var(--primary) / 0.2);
          box-shadow: 0 4px 12px hsla(262, 80%, 50%, 0.3);
        }
      `}</style>
    </div>
  );
}
