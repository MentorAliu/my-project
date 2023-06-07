import { useRef, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { deleteUser } from '../../../api/users'

export const DeleteUserModal = ({ isOpen, onClose, userId }) => {
  const toast = useToast()

  const submitForm = async () => {
    const response = await deleteUser(userId)
    toast({
      title: 'User Delete.',
      description: `User with id ${response.id} and name ${response.firstName} has been deleted successfully `,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    onClose()
  }

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete User</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          Are you sure you want to delete user with id : {userId}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={submitForm}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
