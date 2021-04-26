export type ModalHeaderProps = {
  title?: string;
  onClose: () => void;
};

export type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
} & ModalHeaderProps;
