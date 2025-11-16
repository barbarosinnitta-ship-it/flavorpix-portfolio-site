import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Portfolio', href: '#best-of' },
    { label: 'Categories', href: '#categories' },
    { label: 'My story', href: '#about' },
  ];

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className={`navbar ${open ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" onClick={close}>
          Flavorpix
        </Link>
        <nav className="navbar__links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar__drawer">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
