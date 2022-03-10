import React from "react";
import { AlertDialog, Button, Center } from "native-base";

const Logout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return <Center my="6">
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Logout
      </Button>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Logout</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure want to logout ?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Logout
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
};

    export default Logout