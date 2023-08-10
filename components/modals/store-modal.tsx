"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {

  const storeModal = useStoreModal();

  return (
    <Modal isOpen={storeModal.isOpen} onClose={storeModal.onClose} title="Create Store"
    description="Add a new store to manage products and categories">
      <div>Store Modal</div>
    </Modal>
  );
};
