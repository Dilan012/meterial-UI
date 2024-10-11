import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import Link from "@mui/material/Link"
import Stack  from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import google from '../../assets/Google.png'
import { useState } from "react"
import axios from "axios"
import useUserStore from "../../store/useUserStore"
import { useNavigate } from "react-router-dom"
export const LoginForm = ()=>{

    const {login} = useUserStore();
    const [submitted, setSubmitted] = useState(false);
    const [errors, setError] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const handleChange = (event)=>{
        setError(null)
        const {name, value} = event.target
        setFormData((prevState)=>({...prevState, [name]:value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)
        axios.post('/api/login',{
            email:formData.username,
            password:formData.password
        })
        .then((response)=>{
            setSubmitted(false)
            console.log(response)
            login(response.data)
            navigate('/dashbord')
        })
        .catch((error)=>{
            setSubmitted(false)
            console.log(error.response.data)
            setError(error.response.data)
        })
    }
    return(
        <Container className="form-container" >

                <form onSubmit={handleSubmit}>
                    <Stack 
                        spacing={3} width="100%" >
                        <FormControl>
                            <TextField  
                                required
                                label="Username"
                                variant="standard"
                                id="username"
                                name="username"
                                disabled={submitted ? true:false}                                
                                onChange={handleChange}
                                value={formData.username}
                                error={errors && errors.field==="username" ? true:false}
                                helperText={errors && errors.field === "username" ? errors.Error : ""}
                                placeholder="e.g Dilan"/>
                        </FormControl>

                        <FormControl>
                            <TextField  
                                required
                                disable={submitted ? true:false}                                
                                id="password"
                                error={errors && errors.field==="password" ? true:false}
                                variant="standard"
                                type="password"
                                name="password"
                                label="Password"
                                onChange={handleChange}
                                value={formData.password}
                                placeholder="e.g ******s"
                                helperText={errors && errors.field === "password" ? errors.Error : ""}/>
                        </FormControl>
                        <Box>
                            <Typography align="right" style={{fontSize:"0.9rem"}}>
                                <Link href="/">forget Password</Link>
                            </Typography>
                        </Box>
                        <FormControl>
                            <Button type="submit" 
                                variant="contained"
                                disabled={submitted ? true:false}                                
                                >{submitted ? "signing in..." : "sign in"}</Button>
                        </FormControl>
                       
                        <FormControl>
                            <Button variant="outlined">
                                <img src={google}
                                    alt="Google"
                                    style={{width:"1rem", paddingInline:"0.5rem"}}/>
                                sign in with Google
                            </Button>
                        </FormControl>
                    </Stack>
                </form>
               
                
        </Container>

    )
}