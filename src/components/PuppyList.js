import React, {useState} from 'react'
import 

// const Main = () => {
// const PuppyList = () => {
// const [details, setDetails] = useState()
// const getDetails = async () => {
//     const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/2209-FTB-ET-WEB-FT')
//     const details = await response.json()
//     setDetails(details)
// }

// }

const AllPuppies = (props) => {
    const myPuppies = props.puppyData

}

return (
    <div className='box'>
    {myPuppies ? myPuppies.map((puppy)=> {
        return (
            <div key={`player-${puppy.id}`} className='puppy'>
                <div>{puppy.name}</div>
                <div>{puppy.breed}</div>
                <div>{puppy.status}</div>
            </div>) })
        : <div>loading</div>}
   </div>
    
       

export default PuppyList