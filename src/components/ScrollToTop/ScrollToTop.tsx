import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export function ScrollToTop(): JSX.Element {
  return (
    <ScrollIntoView selector="#landing-page">
      <button className="scrollToTop__btn scrollToTop__btn--light-no-border">
        Scroll to top
      </button>
    </ScrollIntoView>
  );
}
