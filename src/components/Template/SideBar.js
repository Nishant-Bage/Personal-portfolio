import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2 style={{ color: '#40e0d0' }}>Nishant Bage</h2>
        <p>
          <a href="mailto:hello@nisahtbage.xyz">hello@nishantbage.xyz</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Nishant.I&apos;m a fullstack developer with 3 years of experience, holding a MCA degree. Currently,
        I&apos;m working as a frontend developer at <a href="https://metafic.co/"> Metafic</a>. I&apos;ve contributed to various projects,
        leveraging my expertise in both frontend and backend development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Nishant Bage <Link to="/">nishantbage.xyz</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
