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
            <RankingCell champion="AurelionSol" score={6300} />
            <RankingCell champion="Leona" score={6300} />
            <RankingCell champion="Yuumi" score={6300} />
            <RankingCell champion="Seraphine" score={6300} />
            <RankingCell champion="Pyke" score={6300} />
            <RankingCell champion="Talon" score={6300} />
            <RankingCell champion="Yasuo" score={6300} />
            <RankingCell champion="Veigar" score={6300} />
            <RankingCell champion="Yone" score={6300} />
        </Paper>
    );
};

export default Ranking;
