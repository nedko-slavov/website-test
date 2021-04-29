import { GetId } from './getId';

export type AlbumModalProps = {
  selectedAlbumId: string;
  isOpen: boolean;
  onClose: () => void;
};

export type ThumbnailUrl = { id?: string; thumbnailUrl: string };

export type PhotosThumb = {
  data: ThumbnailUrl[];
};

export type AlbumType = {
  id: string;
  title: string;
  photos: PhotosThumb;
};

export type AlbumsListProps = {
  albums: AlbumType[];
  onSelect: GetId;
};

export type AlbumSearch = {
  onAlbumSelect: GetId;
};

export type AlbumPreviewProps = {
  title: string;
  photos: { data: ThumbnailUrl[] };
};
