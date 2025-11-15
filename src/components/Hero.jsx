import { buildCloudinaryUrl } from '../data/imageConfig.js';

function Hero({ title, subtitle, description, ctaLabel, ctaHref, backgroundImage }) {
  const backgroundUrl = backgroundImage
    ? buildCloudinaryUrl(backgroundImage, {
        width: 2400,
        height: 1600,
        crop: 'fill',
        gravity: 'auto',
        effect: 'blur:1200',
      })
    : null;

  return (
    <header
      className="hero"
      style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : undefined}
    >
      <div className="hero__scrim" />
      <div className="hero__content">
        <p className="eyebrow">Editorial food photography</p>
        <h1>{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {description && <p className="hero__description">{description}</p>}
        <a className="button" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export default Hero;
