import { GetId } from './getId';

export type ThumbnailProps = {
  thumbnailUrl: string;
  title?: string;
  id?: string;
  onSelect?: GetId;
};
