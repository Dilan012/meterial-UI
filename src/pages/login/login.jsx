import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import "./login.css"
import { LoginForm } from "../../components/loginForm/LoginForm"
export const Login = ()=>{
    return(
        <Container maxWidth="lg" className="login-container">
            <Box className="login-form">
                <LoginForm/>
            </Box>
            <Box className="login-side">
                <h1>test</h1>
            </Box>
        </Container>
    )
}