import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";

export default function CreateRoom() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="bg-primary-blue min-w-[179px] w-fit rounded-lg flex items-center px-3 font-semibold py-2 gap-2 text-sm text-white"
      >
        <Plus className="w-4 h-4 text-white" weight="bold" />
        Create New Room
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalHeader fontWeight={"bold"}>Create New Room</ModalHeader>
          <ModalBody className="flex flex-col gap-8">
            <div className="fee flex flex-col gap-3">
              <p className="label font-semibold">Entry Fee</p>
              <Select placeholder="Select option" className="cursor-pointer">
                <option value="0.003">0.003 ETH</option>
                <option value="0.004">0.004 ETH</option>
                <option value="0.005">0.005 ETH</option>
              </Select>
            </div>
            <div className="privacy flex flex-col gap-3">
              <p className="label font-semibold">Room Privacy</p>
              <Select
                defaultValue="private"
                className="relative cursor-pointer"
              >
                <option value="private">Private</option>
                <option value="public">Public</option>
              </Select>
            </div>
          </ModalBody>

          <ModalFooter className="flex gap-2">
            <button
              onClick={onClose}
              className="border border-[#929292] rounded-md text-[#929292] px-4 py-1"
            >
              Cancel
            </button>
            <button className="border border-primary-blue rounded-md text-white bg-primary-blue px-4 py-1">
              Save
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
