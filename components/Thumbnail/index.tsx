import { memo } from 'react';

interface ThumbnailProps {
  thumbnailUrl: string;
  title: string;
}

const Thumbnail = ({ thumbnailUrl, title }: ThumbnailProps): JSX.Element => (
  <div className="col-4 thumbnail-wrapper">
    <img src={thumbnailUrl} alt="" />
    <h5>{title}</h5>
  </div>
);

export default memo(Thumbnail);
