import Accordion from 'react-bootstrap/Accordion'
import CardRow from './CardRow'

const AccItem = ({sequences, header}) => {
    console.log("ACC ITEM", sequences, header)
    return (
        <Accordion.Item>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                <CardRow sequences={sequences}></CardRow>
            </Accordion.Body>
        </Accordion.Item>
    )

}

export default AccItem