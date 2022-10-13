import React, {useState} from 'react'


const PuppyList = () => {
const [details, setDetails] = useState()
const getDetails = async () => {
    const response = await fetch ('')
    const details = await response.json()
    setDetails(details)
}

}

export default PuppyList