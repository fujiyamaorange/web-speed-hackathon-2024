export const HeroImage: React.FC = () => {
  return (
    <div style={{ aspectRatio: '16 / 9', width: '100%' }}>
      <img
        alt="Cyber TOON"
        loading="eager"
        src="/assets/image.webp"
        style={{ display: 'inline-block', height: '680px', width: '1024px' }}
      />
    </div>
  );
};
