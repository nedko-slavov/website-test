export type Photo = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

export type PhotoModalProps = {
  selectedPhotoId: string;
  isOpen: boolean;
  onClose: () => void;
};
