import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Nishant Bage personal website'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A sleek, modern, and fully responsive React application, statically generated and built with the latest JavaScript technologies.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to know more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}or{' '}
        <Link to="/contact">contact me</Link> and discover interactive features throughout.
      </p>
      <p>
        {' '}
        Inspiration from{' '}
        <a rel="noreferrer" target="_blank" href="https://html5up.net/future-imperfect"> Future Imperfect</a>.
      </p>
    </article>
  </Main>
);

export default Index;
