import React, { FC, useRef, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { PHOTOS } from '../../graphql/queries';
import Thumbnail from '../../components/Thumbnail';
import Button from '../../components/Button';
import { Photo } from '../../types';

const PhotosPage: FC = () => {
  const { loading, error, data, fetchMore } = useQuery(PHOTOS, {
    variables: { options: { paginate: { page: 1, limit: 12 } } },
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

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

  if (loading)
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  if (error) return <p>`Error! ${error.message}`</p>;

  const photos = data.photos.data;
  const photosTotalCount = data.photos.meta.totalCount;

  return (
    <div className="spacing-top">
      <div className="container">
        <h3>Photos total: {photosTotalCount}</h3>
      </div>

      <div id="list" className="container">
        <div className="row">
          {photos.map((photo: Photo) => (
            <Thumbnail key={photo.id} thumbnailUrl={photo.thumbnailUrl} title={photo.title} />
          ))}
        </div>

        <Button
          type="button"
          ref={setButtonRef}
          kind="primary"
          id="buttonLoadMore"
          onClick={() =>
            fetchMore({
              variables: {
                options: { paginate: { page: data.photos.links.next.page, limit: 12 } },
              },
            })
          }
        >
          load more
        </Button>
      </div>
    </div>
  );
};

export default PhotosPage;
