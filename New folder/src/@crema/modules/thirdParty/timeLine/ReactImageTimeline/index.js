import React from 'react';
import Timeline from 'react-image-timeline';
import {StyledTimelineImage} from './index.styled';

const events = [
  {
    date: new Date(2021, 10, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Madrid, Spain',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2021, 10, 27),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'New York, New York',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2021, 11, 2),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'London, England',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2021, 11, 20),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Cairo, Egypt',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/800x600',
  },
  {
    date: new Date(2021, 12, 5),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Chicago, Illinois',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2021, 12, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Paris, France',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2021, 12, 25),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Rome, Italy',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/1000x600',
  },
  {
    date: new Date(2021, 12, 28),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Seoul, South Korea',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2020, 1, 1),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Berlin, Germany',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/800x600',
  },
  {
    date: new Date(2020, 1, 10),
    text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
    title: 'Tokyo, Japan',
    buttonText: 'Read More',
    imageUrl: 'https://via.placeholder.com/800x600',
  },
];

const ReactImageTimeline = () => {
  return (
    <StyledTimelineImage>
      <Timeline events={events} />
    </StyledTimelineImage>
  );
};
export default ReactImageTimeline;
