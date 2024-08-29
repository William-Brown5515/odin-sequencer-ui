import SequenceCard from "./SequenceCard";
import { Col } from "react-bootstrap";

/* Creates a row within the accordion, for each sequence to go into. */

const CardRow = ({sequences}) => {
    sequences = JSON.parse(sequences)
    const listItems = (Object.entries(sequences)).flatMap(([sequenceKey, sequence]) => 
        <Col>
            <SequenceCard key={sequenceKey} header={sequenceKey} sequence={JSON.stringify(sequence)}></SequenceCard>
        </Col>
    );
    return (listItems)      
};

export default CardRow;