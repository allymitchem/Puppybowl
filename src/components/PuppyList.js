import React, {useState} from 'react'
import PuppyDetails from './PuppyDeets'

const PuppyList = (props) => {
    const myPuppies = props.puppyData

console.log(myPuppies)

return (
    <div className='box'>
    {myPuppies.length ? myPuppies.map((puppy)=> {
        return (
            <div key={`player-${puppy.id}`} className='puppy'> 
                <div>{puppy.name}</div>
                <div> 
                    <img className="puppyPic" src = {puppy.imageUrl}
                    alt ="puppyPic"/>
                </div>
                {/* <div>{puppy.breed}</div>
                <div>{puppy.status}</div> */}
                <button onClick= {PuppyDetails}>See Details</button>
            </div>) })
        : <div>loading</div>}
   
   </div>
       ) }
       

export default PuppyList