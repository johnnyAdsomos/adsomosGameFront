import { css } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import useImage from "../hooks/useImage";
import granMaster from '../assets/grandMaster.webp'

interface RankingCellProps {
    champion: string;
    score: number;
}

const RankingCell: React.FC<RankingCellProps> = (props: RankingCellProps) => {
    const url = `../assets/champions-centered/${props.champion}_0.jpg`;
    const { image } = useImage(url)

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 -15vh",
            minHeight: "40vh",
            width: "100%",
            backgroundSize: "cover",
        }}>
            <h2 css={css`
                margin-top: 20px;
                margin-right: 100px;
                font-size: 3em;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                align-self: flex-end;
            `}>{props.champion}</h2>
            <div css={css`
                display: flex;
                flex-direction: column;
                width: 150px;
                margin-left: 100px;
                margin-bottom: 20px;
            `}>
                <img src={granMaster} css={css`
                `} />
                <span css={css`
                    align-self: center;
                    font-size: 2em;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                `}>{props.score}</span>
            </div>

        </Box>
    )
}

export default RankingCell