import SequenceModule from './SequenceModule'

/* Initialises a SequenceModule component for each module found in the object. */

const ModuleList = ({sequence_modules}) => {

    const sequences_modules_obj = JSON.parse(sequence_modules)

    const listHeaders = Object.entries(sequences_modules_obj).flatMap(([moduleKey,sequences]) =>
        <SequenceModule key={moduleKey} header={moduleKey} sequences={JSON.stringify(sequences)}></SequenceModule>
    )

    return (listHeaders)
}

export default ModuleList