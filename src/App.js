import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardRow from './components/CardRow';
import { useState } from 'react';

const sequences = {
  example: 'one',
  test: 'two'
}



// abortable_sequence_test = ['num_loops', 15, 'loop_delay',4]

// const sequence_modules_pre = [
//   'example_sequences' = [
//     'abortable_sequence_test' =  ['num_loops', 15, 'loop_delay',4],
//     'another_sequence' = ['c_val',10, 'd',20],
//     'no_params' = []
//   ],
//   'spi_commands' = [
//     'spi_read' = ['num_bytes', 38],
//     'spi_write' = ['vals', 64]
//   ],
// ]





function BasicExample() {
  const [sequence_modules, setSequenceModules] = useState (JSON.stringify({
    example_sequences: {
      abortable_sequence_test: {
        num_loops: 15,
        loop_delay: 4
      },
      another_sequence: {
        c_val: 10,
        d: 20
      },
      no_params: {}
  
      },
    spi_commands: {
      spi_read: {
        num_bytes: 38,
        vals: 64
      }
    }
  }))
  console.log("1", sequence_modules)
  console.log("2", JSON.stringify(sequence_modules))
  const test = JSON.stringify(sequence_modules)
  console.log("3", JSON.parse(test))

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          {/* <CardRow sequences = {sequences}></CardRow> */}
          {/* <CardRow sequences = {Object.values(sequence_modules)}></CardRow> */}
          <CardRow sequences = {sequence_modules}></CardRow>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          {/* <CardRow sequences = {sequences}></CardRow> */}
          {/* <CardRow sequences = {Object.values(sequence_modules)}></CardRow> */}
          <CardRow sequences = {sequence_modules}></CardRow>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;

function BigAccordion() {
  return (
    <span>Hello</span>
  )
  // return (
  //   <Accordion defaultActiveKey="0">
  //     <Accordion.Item eventKey="0">
  //       <Accordion.Header>Accordion Item #1</Accordion.Header>
  //       <Accordion.Body>
  //         Sequence One
  //       </Accordion.Body>
  //     </Accordion.Item>
  //     <Accordion.Item eventKey="1">
  //       <Accordion.Header>Accordion Item #2</Accordion.Header>
  //       <Accordion.Body>
  //         Sequence Two
  //       </Accordion.Body>
  //     </Accordion.Item>
  //   </Accordion>
  // );
}

// function NewAccordion() {
//   return (
//     <Accordion>
//       {addAccordionItems(sequences)}
//     </Accordion>
//   );
// }

// function addAccordionItems() {
//   let items = ""
//   for (let seq in sequences) {
//     items += (
//       <Accordion.Item eventKey={String(seq)}>
//         <Accordion.Header>{seq}</Accordion.Header>
//         <Accordion.Body>
//           {console.log(sequences[seq])}
//         </Accordion.Body>
//       </Accordion.Item>
//     )
//   }
//   return items
// }

// function addCards(seq) {
//   let cards = ""
//   for (let sequence in sequences[seq]) {
//     cards += (
//       <Card>
//         <Card.Body>
//           <Card.Title>{sequence}</Card.Title>
//           {console.log("Updated")}
//           <Button>Parameters</Button>
//           <Button>Execute</Button>
//         </Card.Body>
//       </Card>
//     )
//   }
//   return cards
// }



// export default BigAccordion();
