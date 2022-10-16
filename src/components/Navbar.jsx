import React, {useState} from "react"
import { render } from "react-dom"
import Main from "./Main"
import PuppyDetails from "./PuppyDeets"
import PuppyList from "./PuppyList"

const Navbar = (props) => {

// const [searchWord, setSearchWord] = useState("")


    return (
        <div id ="navbar">
            <form className="nameForm"><label>Name: <input type="text" placeholder="Search..." onChange={event => {setSearchWord(event.target.element)}}/></label></form>
            {/* {PuppyList.map((element)=> {
                return(
                    <div>{element.name}</div>
                )
            })} */}
            {/* <form className="breedForm"><label>Breed:<input type="text"/></label></form> */}
        </div>
    )

    
}

export default Navbar


// this.state={
// search:null
// }
      
// searchBar=(e)=>{
//     let word = e.target.value
//     this.setState({search:word})
// }
// render();{
// const puppySearch = myPuppies.filter((data)=>{
//     if(this.state.search== null) {return data}
//     else if(data.name.includes(this.state.search)) {return data}
// })


// .map((data) => {
//     return(
//         <div>{data.name}</div>
//     )
// })