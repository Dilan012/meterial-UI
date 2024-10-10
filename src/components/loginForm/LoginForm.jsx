import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Link, Stack, TextField, Typography } from "@mui/material"
import Container from "@mui/material/Container"
import img from '../../assets/back.jpg'
import google from '../../assets/Google.png'
export const LoginForm = ()=>{
    return(
        <Container className="form-container" >

                <form>
                    <Stack 
                        spacing={3} width="100%" >
                        <FormControl>
                            <InputLabel htmlFor="username">
                                Username
                            </InputLabel>
                            <Input  
                                required
                                id="username"
                                placeholder="e.g Dilan"/>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="password">
                                Password
                            </InputLabel>
                            <Input  
                                required
                                id="password"
                                type="password"
                                placeholder="e.g ******s"
                                endAdornment={<InputAdornment><img src={img} style={{width:"1rem"}}/></InputAdornment>}/>
                        </FormControl>
                        <Box>
                            <Typography align="right" style={{fontSize:"0.9rem"}}>
                                <Link href="/">forget Password</Link>
                            </Typography>
                        </Box>
                        <FormControl>
                            <Button type="submit" 
                                variant="contained"
                                >sign in</Button>
                        </FormControl>
                       
                        <FormControl>
                            <Button variant="outlined">
                                <img src={google}
                                    style={{width:"1rem", paddingInline:"0.5rem"}}/>
                                sign in with Google
                            </Button>
                        </FormControl>
                    </Stack>
                </form>
               
                
        </Container>

    )
}