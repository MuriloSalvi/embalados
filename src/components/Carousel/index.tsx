import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i.pinimg.com/originals/46/fc/ea/46fceacf44dcc4ee00501ca2891d9814.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://i.pinimg.com/originals/46/fc/ea/46fceacf44dcc4ee00501ca2891d9814.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://i.pinimg.com/originals/46/fc/ea/46fceacf44dcc4ee00501ca2891d9814.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;