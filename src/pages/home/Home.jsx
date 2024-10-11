import { Box, Button, Typography } from "@mui/material"
import useUserStore from "../../store/useUserStore"
import './home.css'

export const Home = ()=>{
    const {user, logout} = useUserStore()

    const handleLogout=()=>{
        logout()
    }
    return(
        <Box className="home-container">
            
            <Box className="user-profile">
                <Typography variant="h5">Profile</Typography>
                <Typography>Name : {user.name}</Typography>
                <Typography>email : {user.email}</Typography>
                <Typography>Role : {user.role}</Typography>
                <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </Box>
            
        </Box>
    )
}