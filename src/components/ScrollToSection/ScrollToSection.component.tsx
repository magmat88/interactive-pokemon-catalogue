import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import './ScrollToSection.scss';

interface ScrollToSectionProps {
  selector: string;
}

export function ScrollToSection({selector}: ScrollToSectionProps): JSX.Element {
  return (
    <ScrollIntoView className="scrollToSection" selector={selector}>
      <button className="scrollToSection__btn scrollToSection__btn--light-no-border">
        Scroll to top
      </button>
    </ScrollIntoView>
  );
}
