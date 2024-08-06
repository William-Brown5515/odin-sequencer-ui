import SeqCard from "./SeqCard";

// const CardRow = ({sequences}) => {
//     // return (
//     //     <Row>
//     //         {sequences.map((item, index) => (
//     //             <SeqCard sequence = {item}/>
//     //         ))}
//     //     </Row>
//     // );
//     const listItems = (Object.values(sequences)).map((sequence) => 
//         <SeqCard sequence={sequence}></SeqCard>
//     );
//     return (listItems)      
// };

const CardRow = ({sequences}) => {
    // return (
    //     <Row>
    //         {sequences.map((item, index) => (
    //             <SeqCard sequence = {item}/>
    //         ))}
    //     </Row>
    // );
    sequences = JSON.parse(sequences)
    const listItems = (Object.entries(sequences)).flatMap(([sequenceKey, sequence]) => 
        <SeqCard key={sequenceKey} header={sequenceKey} sequence={JSON.stringify(sequence)}></SeqCard>
    );
    return (listItems)      
};

export default CardRow;