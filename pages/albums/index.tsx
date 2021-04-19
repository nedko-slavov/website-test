import React from 'react';
import { Container } from '../../components/ui/grid';
import Albums from '../../components/albums';

const AlbumsPage = (): React.ReactNode => {
  // console.log('Render Albums Page');

  return (
    <Container>
      <h3>Albums</h3>
      <Albums />
    </Container>
  );
};

export default AlbumsPage;
