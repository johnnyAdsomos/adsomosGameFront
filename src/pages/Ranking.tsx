import React from "react";
import { Paper } from "@mui/material";

import RankingCell from "../components/RankingCell";

const Ranking: React.FC = () => {
    return (
        <Paper
            sx={{
                width: "100%",
                height: "90vh",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <RankingCell champion="Yasuo" score={6300} />
            <RankingCell champion="Syndra" score={6300} />
            <RankingCell champion="Aatrox" score={6300} />
            <RankingCell champion="Akali" score={6300} />
            <RankingCell champion="Jinx" score={6300} />
            <RankingCell champion="Vi" score={6300} />
            <RankingCell champion="Alistar" score={6300} />
            <RankingCell champion="Darius" score={6300} />
            <RankingCell champion="Lux" score={6300} />
            <RankingCell champion="Zed" score={6300} />
            <RankingCell champion="AurelionSol" score={6300} />
            <RankingCell champion="Vayne" score={6300} />
        </Paper>
    );
};

export default Ranking;
