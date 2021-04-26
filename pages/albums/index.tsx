import { FC } from 'react';
import { Container } from '../../components/grid';
import Albums from '../../components/albums';

const AlbumsPage: FC = () => {
  return (
    <>
      <Container className="spacing-top">
        <h3>Albums</h3>
      </Container>
      <Albums />
    </>
  );
};

export default AlbumsPage;
