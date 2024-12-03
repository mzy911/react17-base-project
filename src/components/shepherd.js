import React, { useRef } from 'react';
// import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { Tour } from 'react-shepherd';

const defaultSteps = [
  {
    id: 'intro',
    title: 'Welcome to the Tour!',
    text: 'This is a simple tour of our application.',
    attachTo: { element: '.tour-intro', on: 'bottom' },
    buttons: [
      {
        text: 'Next',
        action: tour => tour.next(),
      },
    ],
  },
  {
    id: 'button',
    title: 'Click Me!',
    text: 'Click this button to proceed.',
    attachTo: { element: '.tour-button', on: 'top' },
    buttons: [
      {
        text: 'Back',
        action: tour => tour.back(),
      },
      {
        text: 'Next',
        action: tour => tour.next(),
      },
    ],
  },
  {
    id: 'end',
    title: 'All Done!',
    text: 'You have completed the tour.',
    attachTo: { element: '.tour-end', on: 'bottom' },
    buttons: [
      {
        text: 'Finish',
        action: tour => tour.complete(),
      },
    ],
  },
];

const TourDemo = () => {
  const tour = useRef(null);

  const startTour = () => {
    tour.current.start();
  };

  return (
    <div>
      <h1 className="tour-intro">Welcome to Our Application</h1>
      <button className="tour-button" onClick={startTour}>
        Start Tour
      </button>
      <p className="tour-end">End of Tour</p>
      {/*<Tour*/}
      {/*  ref={tour}*/}
      {/*  steps={defaultSteps}*/}
      {/*  defaultOptions={{*/}
      {/*    classes: 'custom-class-name',*/}
      {/*    scrollTo: true,*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};

export default TourDemo;
