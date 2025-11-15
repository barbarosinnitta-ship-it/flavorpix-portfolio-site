import React from 'react';
import { Link } from 'react-router-dom';

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder">
      <div className="placeholder__inner">
        <p className="eyebrow">Gallery coming soon</p>
        <h1>{title}</h1>
        <p>I’m curating the full collection for this section. Check back soon or explore the rest of the portfolio.</p>
        <Link to="/" className="button button--ghost">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default PlaceholderPage;
