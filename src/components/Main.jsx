import React, { useState, useEffect } from "react";
import {Navbar} from './'
import {PuppyList} from './'

const Main = () => {
const [puppyData, setPuppyData] = useState([])

  useEffect(() => {
    async function getPuppyData(){
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
    }
    getPuppyData()
  }, [])

  return (
    <div id="main">
    <Navbar/>
    <PuppyList puppyData={puppyData} />
  </div>
  );
};

export default Main;
