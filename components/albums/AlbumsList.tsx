import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import { Column, Row } from '../grid';
import { AlbumsListProps, AlbumType } from '../../types';

const AlbumsList: FC<AlbumsListProps> = ({ albums, onSelect }) => {
  return (
    <Row>
      {albums.map((album: AlbumType) => (
        <Column colWidth="3" key={album.id}>
          <Thumbnail
            id={album.id}
            title={album.title}
            thumbnailUrl={album.photos.data[0].thumbnailUrl}
            onSelect={onSelect}
          />
        </Column>
      ))}
    </Row>
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AlbumsList;
