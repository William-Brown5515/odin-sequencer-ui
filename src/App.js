import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import ModuleList from './components/ModuleList'
import { Col } from 'react-bootstrap';

/*
  This is the main application for the React interface.
  It calls the ModuleList component from the components file, which in turn creates other components.
*/

function BasicExample() {

  /*
  This constant has been created to imitate the object passed to it by the sequencer.
  It should, eventually, be change to an adapter endpoint call.
  */

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

  /* Returns a ModuleList, which is a component found in the 'components' folder */

  return (
    <Col sm={7}>
      <Accordion>
        <ModuleList sequence_modules={sequence_modules}></ModuleList>
      </Accordion>
    </Col>
  );
}

export default BasicExample;
