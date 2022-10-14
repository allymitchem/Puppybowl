import React from 'react'

const PuppyPlayer = (props) => {
    const puppy = props.puppyDetails
    return(
    <div key={`player-${puppy.id}`} className='puppy'>
                <div>{puppy.name}</div>
                <div> 
                    <img className="puppyPic" src = {puppy.imageUrl}
                    alt ="puppyPic"/>
                </div>
                <div>{puppy.breed}</div>
                <div>{puppy.status}</div>
            </div>)
}

export default PuppyPlayer