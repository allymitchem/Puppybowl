import React from "react"

const Navbar = () => {
    return (
        <div id ="navbar">
            <form className="nameForm"><label>Name:<input type="text"/></label></form>
            <form className="breedForm"><label>Breed:<input type="text"/></label></form>
        </div>
    )

    
}

export default Navbar;