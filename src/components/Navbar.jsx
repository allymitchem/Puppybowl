import React, { useState } from "react";

const Navbar = (props) => {
  const searchPuppies = props.setSearchPups;

  function searchFilter() {
    if (!searchPups) {
      return puppyData;
    } else {
      return puppyData.filter((puppy) => {
        return puppy.name.toLowerCase() === searchPups.toLowerCase();
      });
    }
  }

  return (
    <div id="navbar">
      <form
        className="nameForm"
        onSubmit={(e) => {
          e.preventDefault();
          searchPuppies(e.target[0].value);
        }}
      >
        <label>
          Name: <input type="text" placeholder="Search..." />
        </label>
      </form>
    </div>
  );
};
export default Navbar;

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

{
  /* {PuppyList.map((element)=> {
                return(
                    <div>{element.name}</div>
                )
            })} */
}
{
  /* <form className="breedForm"><label>Breed:<input type="text"/></label></form> */
}
//onChange={(event) => myPuppies(event.target.element)} word={myPuppies}
{
  /* need to set value inside of props.setSearchPups */
}
// const myPuppies = props.puppyData
// const [searchWord, setSearchWord] = useState("")

// useEffect(() => {
//     const newWord = myPuppies.filter(word => word.name.toLowerCase().includes(myPuppies.toLowerCase()))
//     setProps(newWord)
// }, [])
// const [searchPups, setSearchPups] = useState('')
