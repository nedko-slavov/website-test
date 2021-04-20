import React from 'react';
import { Container } from '../../components/ui/grid';
import Albums from '../../components/albums';

const AlbumsPage = (): React.ReactNode => {
  // console.log('Render Albums Page');

  return (
    <Container>
      <div className="spacing-top">
        <h3>Albums</h3>
      </div>
      <Albums />
    </Container>
  );
};

export default AlbumsPage;
