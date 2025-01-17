import React from "react";
import { MdClose } from "react-icons/md";
import { ModalOverlay, ModalContent, CloseButton } from "./styles";
import DetailView from "../detailed-view-modal/DetailedView";
import { ISelectedItem, SearchType } from "../../models/search";

interface ModalProps<T extends SearchType> {
  selectedItem: ISelectedItem<T>;
  closeModal: () => void;
}

const Modal = <T extends SearchType>({
  selectedItem,
  closeModal,
}: ModalProps<T>) => {
  const handleOverlayClick = (event: React.MouseEvent) => {
    // Close the modal only if the click is outside the ModalContent
    if ((event.target as HTMLElement).id === "overlay") {
      closeModal();
    }
  };

  return (
    <>
      {selectedItem && (
        <ModalOverlay id="overlay" onClick={handleOverlayClick}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton
              data-testid="close-modal-button"
              onClick={closeModal}
              aria-label="Close details modal"
              tabIndex={0}
            >
              <MdClose />
            </CloseButton>
            <DetailView selectedItem={selectedItem} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
