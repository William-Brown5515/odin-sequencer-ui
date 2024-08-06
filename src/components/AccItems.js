import AccItem from './AccItem'

const AccItems = ({sequence_modules}) => {
    console.log("ACC ITEMS")
    const sequences_modules_obj = JSON.parse(sequence_modules)

    const listHeaders = Object.entries(sequences_modules_obj).flatMap(([moduleKey,sequences]) =>
        <AccItem key={moduleKey} header={moduleKey} sequences={JSON.stringify(sequences)}></AccItem>
    )


    // const listHeaders = (Object.values(sequences_modules_obj)).map(([sequenceKey, sequence]) =>
    //     <AccItem header={sequenceKey} sequences={(JSON.stringify(sequence))}></AccItem>
    // );
    return (listHeaders)
}

export default AccItems