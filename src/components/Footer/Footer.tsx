import React from 'react';
import { URL_ABOUT_API } from '../../config/constants';
import './Footer.scss';

function renderAPIInfo(): JSX.Element {
    return (
        <article className="used-api-container">
            <p>
                This page relies on data provided by
                <a
                    href={URL_ABOUT_API}
                    target="_blank"
                    rel="noreferrer"
                >
                    PokeApi
                </a> - The RESTful Pokemon API
            </p>
        </article>
    );
}

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            {renderAPIInfo()}
        </footer>
    );
}
