import { Outlet, useNavigate } from "react-router-dom"
import useUserStore from "../store/useUserStore"
import { useEffect, useState } from "react"
import { Loading } from "../components/loginForm/Loading"

export const PrivateRoute = ()=>{
    const [loading, setLoading] = useState(true)
    const {loggedIn} = useUserStore()
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        const checkVerification = async () => {
            if (loggedIn) {
                setLoading(false);
            } else {
               navigate('/')
            }
        };
        setTimeout(()=>{
            checkVerification(); 
        },800)       
    },[loggedIn])

    if(loading){
        return(<Loading/>)
    }
    else{
        return<Outlet/>
    }   
}

export default PrivateRoute