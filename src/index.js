import React, {useState} from 'react'
import ReactDOM from "react-dom/client"



const Main = () => {
    const [details, setDetails] = useState()


    const getDetails = async () => {
        const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/2209-FTB-ET-WEB-FT')
        const details = await response.json()
        setDetails(details)
    }

}


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<Main />)