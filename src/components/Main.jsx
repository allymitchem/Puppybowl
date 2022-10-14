import React, { useState, useEffect } from "react";
import {Navbar} from './'
import {PuppyList} from './'

const Main = () => {
const [puppyData, setPuppyData] = useState([])
const [puppyDetails, setPuppyDetails] = useState({})

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
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
      console.log(result)
      const Details =  result.data.players[i]
      setPuppyDetails(Details)
    }
    getPuppyDetails()
  }, [])

  return (
    <div id="main">
    <Navbar/>
    <PuppyList puppyData={puppyData} puppyDetails={puppyDetails} />
  </div>
  );
};

export default Main;
