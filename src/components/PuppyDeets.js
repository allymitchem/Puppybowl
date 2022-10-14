import React from 'react'
import {PuppyPlayer} from './PuppyPlayer'

const PuppyDetails = props => {
    return (
        <tr>
            <td>{props.puppy.name}</td>
            <td>{props.puppy.breed}</td>
            <td>{props.puppy.status}</td>
    
        </tr>
    )
}

export default PuppyDetails