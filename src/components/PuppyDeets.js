import React from 'react'

const PuppyDetails = props => {
    return (
        <tr >
            <td>{props.puppy.name}</td>
            <td>{props.puppy.breed}</td>
            <td>{props.puppy.status}</td>
    
        </tr>
    )
}

export default PuppyDetails