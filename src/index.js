import React, {useState} from 'react'
import ReactDOM from "react-dom/client"
import {Main} from "./components"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)


// root.render(<React.StrictMode>
//     <RouterProvider router={router}/>
// </React.StrictMode>)
root.render(<Main />)