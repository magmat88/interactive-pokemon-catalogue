import React from 'react';
import { URL_ABOUT_API, URL_AUTHOR } from '../../config/constants';
import './Footer.scss';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <p className="footer__text--description">
        This page relies on data provided by{' '}
        <a href={URL_ABOUT_API} target="_blank" rel="noreferrer">
          PokeApi
        </a>
      </p>
      <p className="footer__text--description">
        &copy;
        <a href={URL_AUTHOR} target="_blank" rel="noreferrer">
          magmat88
        </a>
      </p>
    </footer>
  );
}
