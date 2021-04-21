import { FC } from 'react';
import { Container } from '../../components/ui/grid';
import Albums from '../../components/albums';

const AlbumsPage: FC = () => {
  return (
    <>
      <Container>
        <h3>Albums</h3>
      </Container>
      <Albums />
    </>
  );
};

export default AlbumsPage;
