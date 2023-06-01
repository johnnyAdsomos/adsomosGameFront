import React from 'react';
import { Button, Paper, Box, TextField } from '@mui/material'

const Login: React.FC = () => {

    return (
        <Paper>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <TextField id="standard-basic" label="Usuário" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" type="password"/>
                <Box>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="contained">Contained</Button>
                </Box>
            </Box>
        </Paper>
    )
}

export default Login