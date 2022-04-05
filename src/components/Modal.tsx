import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FC } from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="white" bg="purple.700">
          {title}
        </ModalHeader>
        <ModalCloseButton color="white" fontSize="xl" />
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
export default Modal;
