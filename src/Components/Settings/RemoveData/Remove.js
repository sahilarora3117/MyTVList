import React from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import './Remove.css';
function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)
  function emptylocal () {
    setOpen(false);
    localStorage.removeItem ("myfav");
    localStorage.removeItem ("episodes");
    localStorage.setItem("myfav", "[]");
    localStorage.setItem("episodes", "[]");
}
  return (
      <Container>

    <Modal className="modal"
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      centered={true}
      size='small'
      trigger={<Button inverted color="red">Delete all user data</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Remove all user data
      </Header>
      <Modal.Content>
        <p>
          Are You sure that you want to remove all user data.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => emptylocal(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    </Container>

  )
}

export default ModalExampleBasic