import { useUI } from '@contexts/ui.context';
import Modal from './modal';
// import dynamic from 'next/dynamic';

const ManagedModal: React.FC = () => {
  const { displayModal, closeModal } = useUI();
  return (
    <Modal open={displayModal} onClose={closeModal}>
      {/* modal content */}
    </Modal>
  );
};

export default ManagedModal;
