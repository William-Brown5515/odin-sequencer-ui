import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ModalParams from './ModalParams'

// function SequenceCard ({sequence, header}) {
//   const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow =() => setShow(true)



//   return (
//     <>
//     <Card>
//       <Card.Body>
//         <Card.Title>{header}</Card.Title>
//         <Card.Text>
//           <Button>Execute</Button>
//           <Button onClick={handleShow}>
//             Parameters
//           </Button>
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>hello</Modal.Title>
//             </Modal.Header>
//           </Modal>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </>
//   )
// }

// const SequenceCard = ({sequence, header}) => {
//   const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow =() => setShow(true)



//   return (
//     <>
//     <Card>
//       <Card.Body>
//         <Card.Title>{header}</Card.Title>
//         <Card.Text>
//           <Button>Execute</Button>
//           <Button onClick={handleShow}>
//             Parameters
//           </Button>
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>hello</Modal.Title>
//             </Modal.Header>
//           </Modal>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </>
//   )
// }



// const SequenceCard = ({sequence, header}) => {

//   return (
//     <>
//     <Card>
//       <Card.Body>
//         <Card.Title>{header}</Card.Title>
//         <Card.Text>
//           <Button>Execute</Button>
//           <Button>Parameters</Button>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </>
//   )
// }


const SequenceCard = ({ sequence, header }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  console.log("SEQUENCE, HEADER", sequence, header)

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{header}</Card.Title>
          <Card.Text>
            <Button>Execute</Button>
            <Button onClick={handleOpenModal}>Parameters</Button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your form or parameters content here */}
          <ModalParams sequence={sequence} header={header}></ModalParams>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { /* Handle save action */ }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SequenceCard;

