import Home from "./dashboard"
import { Route,Routes } from "react-router-dom"
import RegisterUser from "./register_user"

export default function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register_user" element={<RegisterUser/>}/>
            </Routes>
            
        </>
    )
}