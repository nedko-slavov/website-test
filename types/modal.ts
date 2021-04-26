export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export type ModalHeaderProps = {
  title?: string;
  onClose: () => void;
};
