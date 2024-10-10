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
/*import alfa from '../../assets/alfa.png'*/
import bmw from '../../assets/bmw.png'
import { LoginForm } from "../../components/loginForm/LoginForm"
import { Grid2, Link, Typography } from "@mui/material"
export const Login = ()=>{
    const images = [  land,opel, ford ,volvo, toyota ,nissan,bmw, mercedes,volkswagen   ]
    return(
    <Box className="login-back">
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
                        ,color:"#ffffff"
                        ,fontWeight:"700"
                        ,width:"7rem"
                        ,justifySelf:"left"
                        ,marginLeft:"2rem"
                        ,padding:"0.4rem"
                    }}>
                        Your Tavelling Partner
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
                                                style={{width:"4rem"}}/>
                                        </Grid2>
                                    </>
                                )
                            })}
                    </Grid2>
                </Box>    }
            </Box>
        </Container>
    </Box>
    )
}