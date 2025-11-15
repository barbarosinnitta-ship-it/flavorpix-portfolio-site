import { Link } from 'react-router-dom';
import { buildCloudinaryUrl } from '../data/imageConfig.js';

function AboutTeaser({ portraitId, eyebrow, heading, copy }) {
  const portraitUrl = portraitId
    ? buildCloudinaryUrl(portraitId, {
        width: 900,
        height: 1200,
        crop: 'fill',
        gravity: 'faces',
      })
    : null;

  return (
    <section className="about-teaser">
      <Link to="/about" className="about-teaser__card">
        <div className="about-teaser__media">
          {portraitUrl ? (
            <div className="about-teaser__portrait">
              <img src={portraitUrl} alt="Portrait of Priya" loading="lazy" />
            </div>
          ) : (
            <div className="about-teaser__placeholder">Portrait coming soon</div>
          )}
        </div>
        <div className="about-teaser__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <p>{copy}</p>
          <span className="text-link">Read my story →</span>
        </div>
      </Link>
    </section>
  );
}

export default AboutTeaser;
