import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SeqCard =  ({sequence, header}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Text>
          <Button>Execute</Button>
          <Button>Parameters</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SeqCard;