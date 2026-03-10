"use client";

import { useModalStore } from "@/store/useModalStore";
import Modal from "react-modal";
import TrailerPlayer from "./TrailerPlayer";

const VideoModal = () => {
  const { closeModal, isOpen, trailerKey } = useModalStore();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
      className="w-[90%] max-w-3xl outline-none"
      contentLabel="Trailer Modal"
    >
      <div className="relative bg-black rounded-xl overflow-hidden">
        <TrailerPlayer videoId={trailerKey} isOpen={isOpen} />
      </div>
    </Modal>
  );
};

export default VideoModal;
