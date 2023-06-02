import React from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import Banner from "../assets/banner_challenger.webp";
import Elo from "../assets/challenger.webp";

import Match from '../components/Match'

const Profile: React.FC = () => {
    return (
            <Box
                sx={{
                    height: "90vh",
                    "&::before": {
                        content: "''",
                        backgroundImage: `url(https://adgameback.vercel.app/static/Yasuo.jpg)`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        display: "block",
                        position: "fixed",
                        left: "0",
                        width: "100vw",
                        height: "90vh",
                        right: "0",
                        zIndex: "1",
                        filter: "brightness(0.5)",
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${Banner})`,
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        height: "600px",
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        alignItems: "center",
                        zIndex: "2",
                        left: "80px"
                    }}
                >
                    <img
                        src={Elo}
                        alt="elo"
                        css={css`
                            margin-top: 5vh;
                            margin-right: 5px;
                            width: 300px;
                        `}
                    />
                    <h2>Yasuo</h2>
                    <span>6300</span>
                </Box>
                <Box
                    sx={{
                        zIndex: "2",
                        position: "fixed",
                        right: "80px",
                        top: "100px",
                    }}
                >
                    Histórico
                    <Match />
                </Box>
            </Box>
    );
};

export default Profile;
