import React, { useState, useEffect } from "react";
import {Navbar} from './'
import {PuppyList} from './'
import {PuppyPlayer} from "./";

const Main = () => {
const [puppyData, setPuppyData] = useState([])
const [puppyDetails, setPuppyDetails] = useState({})
console.log(puppyDetails)
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

  useEffect(() => {
async function getPuppyDetails(){
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/')
      const result = await response.json()
      // console.log('test')
      const Details =  result.data.players
      
      setPuppyDetails(Details)
    }
    getPuppyDetails()
  }, [])

  return (
    <div id="main">
    <Navbar/>
     {puppyDetails.id ? <PuppyPlayer puppyDetails={puppyDetails}/> : <PuppyList puppyData={puppyData} setPuppyDetails={setPuppyDetails}/>}
    
    
  </div>
  );
};

export default Main;
