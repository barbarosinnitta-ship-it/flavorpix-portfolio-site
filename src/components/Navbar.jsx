import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categoryLinks = [
    { label: 'Cupcakes', to: '/cupcakes' },
    { label: 'Cookies', to: '/cookies' },
    { label: 'Holiday', to: '/holiday' },
    { label: 'Drinks', to: '/drinks' },
  ];

  const toggle = () => setOpen((prev) => !prev);
  const close = () => {
    setOpen(false);
    setCategoriesOpen(false);
  };

  const toggleCategories = () => setCategoriesOpen((prev) => !prev);

  const openCategories = () => setCategoriesOpen(true);
  const closeCategories = () => setCategoriesOpen(false);

  const handleDropdownBlur = (event) => {
    if (!dropdownRef.current?.contains(event.relatedTarget)) {
      closeCategories();
    }
  };

  const handleDropdownLeave = (event) => {
    if (!dropdownRef.current?.contains(event.relatedTarget)) {
      closeCategories();
    }
  };

  return (
    <header className={`navbar ${open ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" onClick={close}>
          Flavorpix
        </Link>
        <nav className="navbar__links">
          <Link to="/" onClick={close}>
            Home
          </Link>
          <div
            className={`navbar__dropdown ${categoriesOpen ? 'navbar__dropdown--open' : ''}`}
            onMouseEnter={openCategories}
            onMouseLeave={handleDropdownLeave}
            onBlur={handleDropdownBlur}
            onFocus={openCategories}
            ref={dropdownRef}
          >
            <button
              type="button"
              className="navbar__dropdown-toggle"
              aria-expanded={categoriesOpen}
              onClick={toggleCategories}
            >
              Categories
            </button>
            <div className="navbar__dropdown-menu">
              {categoryLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={close}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" onClick={close}>
            My story
          </Link>
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
        <Link to="/" onClick={close}>
          Home
        </Link>
        <div className="navbar__drawer-group">
          <p className="navbar__drawer-label">Categories</p>
          {categoryLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/about" onClick={close}>
          My story
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
