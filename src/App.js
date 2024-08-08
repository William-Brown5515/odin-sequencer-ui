import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardRow from './components/CardRow';
import { useState } from 'react';
import ModuleList from './components/ModuleList'
import { Col } from 'react-bootstrap';

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
      }, 
      spi_write: {
        abc : 20
      }
    }
  }))

  return (
    <Col sm={7}>
      <Accordion>
        <ModuleList sequence_modules={sequence_modules}></ModuleList>
      </Accordion>
    </Col>
  );
}

export default BasicExample;
