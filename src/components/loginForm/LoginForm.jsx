import { FormControl, Stack, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
export const LoginForm = ()=>{
    return(
        <Container >
            <FormControl>
                <Stack 
                    spacing={3}  >
               
                    <TextField  
                        required
                        id="outlined-required"
                        label="Username"
                        placeholder="e.g Dilan"/>
                    <TextField  
                        required
                        id="outlined-required"
                        type="password"
                        label="Password"
                        defaultValue=""/>
                </Stack>
            </FormControl>
        </Container>

    )
}