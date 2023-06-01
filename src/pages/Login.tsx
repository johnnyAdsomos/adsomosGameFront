import React from "react";
import { IconButton, Paper, Box, TextField } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import background from "../assets/background.jpg"

const Login: React.FC = () => {
    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Box
                sx={{
                    height: "90vh",
                    width: "30vw",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TextField
                    id="standard-basic"
                    label="Usuário"
                    variant="filled"
                    sx={{
                        backgroundColor: "#bbbbbb",
                        color: "#808080",
                        width: "20vw",
                        marginBottom: "1vh",
                        borderRadius: "5px",
                    }}
                    />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="filled"
                    sx={{
                        backgroundColor: "#bbbbbb",
                        color: "#808080",
                        width: "20vw",
                        borderRadius: "5px",
                        marginBottom: "2vh",
                    }}
                    type="password"
                />
                <IconButton 
                    aria-label="submit"
                    sx={{
                        backgroundColor: "#bbbbbb",
                        borderRadius: "15px",
                    }}
                >
                    <ArrowForwardRoundedIcon fontSize="large" />
                </IconButton>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: "left",
                    width: "70vw",
                }}
            >
            </Box>
        </Paper>
    );
};

export default Login;
