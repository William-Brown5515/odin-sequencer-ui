import { Row } from "react-bootstrap"

/* Constructing the labels and input boxes for the parameters inside the modal. */

const ModalParams = ({sequence}) => {
    const params = JSON.parse(sequence)

    const paramBoxes = Object.entries(params).flatMap(([paramKey, param]) => {
        return (
        <>
            <Row>
                <label>{paramKey}:    
                    <input name={paramKey} defaultValue={param}></input>
                </label>
            </Row>
        </>
        )
    })
    return paramBoxes
}

export default ModalParams