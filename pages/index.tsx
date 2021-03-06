import React, { FC, useRef, useState, useEffect, useCallback } from 'react';
import { useQuery } from '../hooks';
import { PHOTOS } from '../graphql/queries';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { Photo } from '../types';
import { Column, Row, Container } from '../components/grid';
import { GetId } from '../types';
import PhotoModal from '../components/photos/PhotoModal';
import { FullPageLoader } from '../components/Loaders';

type PhotosQuery = {
  photos: {
    data: Photo[];
    meta: { totalCount: number };
    links: {
      next: { page: number };
    };
  };
};

type PhotosQueryVars = {
  variables: {
    options: {
      paginate: {
        page: number;
        limit: number;
      };
    };
  };
};

const HomePage: FC = () => {
  const { loading, data, fetchMore } = useQuery<PhotosQuery, PhotosQueryVars>(PHOTOS, {
    variables: { options: { paginate: { page: 1, limit: 12 } } },
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [selectedPhotoId, setSelectedPhoto] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePhotoSelect = useCallback<GetId>(
    (id) => {
      setSelectedPhoto(id);
      setModalOpen(true);
    },
    [setSelectedPhoto]
  );

  const handleModalClose = (): void => {
    setModalOpen(false);
  };

  useEffect(() => {
    const options = {
      root: document.querySelector('#list'),
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.click();
      }
    }, options);
  }, []);

  useEffect(() => {
    if (buttonRef && observerRef.current) {
      const button = document.querySelector('#buttonLoadMore') as HTMLElement;
      observerRef.current.observe(button);
    }
  }, [buttonRef]);

  if (loading) return <FullPageLoader />;
  if (!data?.photos?.data) return null;

  const photos = data.photos.data;
  const photosTotalCount = data.photos.meta.totalCount;

  return (
    <div className="spacing-both-lg">
      <Container>
        <h3>Photos total: {photosTotalCount}</h3>
      </Container>

      <PhotoModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedPhotoId={selectedPhotoId}
      />

      <Container id="list">
        <Row>
          {photos.map((photo: Photo) => (
            <Column colWidth="3" key={photo.id}>
              <Thumbnail
                id={photo.id}
                thumbnailUrl={photo.thumbnailUrl}
                title={photo.title}
                onSelect={handlePhotoSelect}
              />
            </Column>
          ))}
        </Row>

        <Button
          type="button"
          ref={setButtonRef}
          kind="primary"
          id="buttonLoadMore"
          label="Load more"
          onClick={() =>
            fetchMore({
              variables: {
                options: { paginate: { page: data.photos.links.next.page, limit: 12 } },
              },
            })
          }
        />
      </Container>
    </div>
  );
};

export default HomePage;
