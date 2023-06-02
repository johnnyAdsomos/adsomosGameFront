import React from 'react'
import { Link } from 'react-router-dom' 
import { Box, Avatar } from "@mui/material"
import logo from "../assets/logo.png"
import { css } from "@emotion/react"

const Nav: React.FC = () => {

    return (
        <Box
            sx={{
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between", 
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "30vw",
                    marginLeft: "1vw",
                }}
            >
                <Avatar alt="Logo" src={logo} />
                <Link to="/">Ranking</Link>
                <Link to="/quest">Missões</Link>
                <Link to="/profile">Perfil</Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Link to="/signup" css={css`
                    margin-right: 2vw;
                `}
                >Cadastrar</Link>
                <Link to="/login" css={css`
                    margin-right: 2vw;
                `}>Login</Link>
            </Box>
        </Box>
    )
}

export default Nav