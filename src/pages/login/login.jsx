import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import "./login.css"
import logo from '../../assets/logo.png'
import nissan from '../../assets/nissan.png'
import mercedes from '../../assets/mercedes.png'
import volvo from '../../assets/volvo.png'
import volkswagen from '../../assets/volkswagen.png'
import ford from '../../assets/ford.png'
import toyota from '../../assets/toyota.png'
import land from '../../assets/land.png'
import opel from '../../assets/opel.png'
import bmw from '../../assets/bmw.png'
import { LoginForm } from "../../components/loginForm/LoginForm"
import  Grid2 from "@mui/material/Grid2"
import  Link from "@mui/material/Link"
import Typography from "@mui/material/Typography" 
import { useEffect, useState } from "react"
import { Loading } from "../../components/loginForm/Loading"
export const Login = ()=>{
    const [loading, setLoading] = useState(true)
    const images = [  land,opel, ford ,volvo, toyota ,nissan,bmw, mercedes,volkswagen]
     useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },100)
     })
     
    return(
        
    <Box className="login-back">
        {loading ? <Loading style={{justifySelf:"center"}}/> : 
        <Container maxWidth="md" className="login-container">
            <Box className="login-form">
                <Box className="login-header">
                    <img src={logo} alt="logo"/>
                </Box>
                <Box className="login-layer">
                    <Typography className="title">Welcome back!</Typography>
                    <span style={{
                        display:"inline-block"
                        ,fontSize:"0.7rem"
                        ,textAlign:"center"
                        ,padding:"1rem 2rem"}}> 
                        At Dream Car, we make it easy to find, choose, and drive the car you've always wanted
                    </span>
                    <LoginForm/>
                </Box>
                <Box 
                    style={{display:"flex",
                    justifyContent:"center"}}>
                    <Typography 
                        variant="subtitle2" >
                        Don't have an account?
                        <Link 
                            style={{paddingInline:"0.5rem"}} 
                            href="/">
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box className="login-side">
               { <Box className="login-slogon">
                    <Typography style={{
                        background:"rgba(255,255,255,0.3)"
                        ,color:'#242424'
                        ,fontWeight:"700"
                        ,width:"12rem"
                        ,justifySelf:"left"
                        ,marginLeft:"2rem"
                        ,padding:"0.4rem"
                        ,fontFamily:"'Comic Sans MS', cursive, sans-serif"
                        ,borderRadius:"0.2rem"
                        ,boxShadow:"2px 2px 4px 0 #000000;"
                    }} className="abc">
                        Find Your Perfect Ride!
                    </Typography>
                    <Box style={{
                        borderBottom:"solid #ffffff 3px"
                        ,height:"0.5rem"
                        ,width:"4rem"
                        ,margin:"1rem 0 0.4rem 2rem"
                    }}>

                    </Box>
                    
                    <Typography 
                        className="title"
                        style={{
                            paddingLeft:"2rem"
                        }}>
                        Supported Brands
                    </Typography>
                    <Grid2 container 
                        spacing={2}
                        rowSpacing={5}
                        style={{paddingTop:"1rem"
                                ,width:"60%"
                                ,alignSelf:"center"}}>
                            {images.map((image, index)=>{
                                return(
                                    <>
                                        <Grid2 size={4} style={{
                                            display:"flex"
                                            ,justifyContent:"center"
                                            }}>
                                            <img src={image} 
                                                alt="Brand icon"
                                                className="brand-icons"/>
                                        </Grid2>
                                    </>
                                )
                            })}
                    </Grid2>
                </Box>    }
            </Box>
        </Container>
        }
    </Box>
    )
}