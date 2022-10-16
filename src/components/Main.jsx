import React, { useState, useEffect } from "react";
import {Navbar} from './'
import {PuppyList} from './'
import {PuppyPlayer} from "./";

const Main = () => {
const [puppyData, setPuppyData] = useState([])
console.log(puppyData)
const [puppyDetails, setPuppyDetails] = useState({})
console.log(puppyDetails)
const [searchPups, setSearchPups] = useState('')
  useEffect(() => {
    async function getPuppyData(){
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
      console.log(result)
      const puppies =  result.data.players
      console.log(puppies)
      setPuppyData(puppies)
    }
    getPuppyData()
  }, [])

  function searchFilter (){
    if (!searchPups){
      return puppyData
    } else {
      return puppyData.filter((puppy)=>{
        return puppy.name.toLowerCase() === searchPups.toLowerCase()
      })
    }

  }
  // need to call searchFilter in Navbar?******

//   useEffect(() => {
// async function getPuppyDetails(){
//       const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/')
//       const result = await response.json()
//       // console.log('test')
//       const Details =  result.data.players
      
//       setPuppyDetails(Details)
//     }
//     getPuppyDetails()
//   }, [])

  return (
    <div id="main">
        <div>
          <Navbar/>

          {/* <ul>
          {puppyData.map((puppy)=>(
            <li key={puppy.id}>{puppy.name}</li>
          ))}
          </ul> */}
        </div>
     {puppyDetails.id ? <PuppyPlayer puppyDetails={puppyDetails} puppyData={puppyData}/> : <PuppyList puppyData={puppyData} setPuppyDetails={setPuppyDetails}/>}
    
    
  </div>
  );
};

export default Main;
