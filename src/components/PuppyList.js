import React, {useState} from 'react'
import {PuppyDetails} from './PuppyDeets'
import {PuppyPlayer} from './PuppyPlayer'

const PuppyList = (props) => {
    const myPuppies = props.puppyData
    const SetPuppies= props.setPuppyDetails

console.log(myPuppies)

return (
    <div className='box'>
    {myPuppies.length ? myPuppies.map((puppy)=> {
        return (
            <div key={`player-${puppy.id}`} className='puppy'> 
           
               <span className= "nameId"><div>{puppy.name}</div>
                <div>{puppy.id}</div></span>
                <div> 
                    <img className="puppyPic" src = {puppy.imageUrl}
                    alt ="puppyPic"/>
                </div>
                {/* <div>{puppy.breed}</div>
                <div>{puppy.status}</div> */}
                <button onClick={()=>SetPuppies(puppy)}>See Details</button>
            </div>) })
        : <div>loading</div>}
   
   </div>
       ) }
       

export default PuppyList