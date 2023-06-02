import React from 'react'
import { ArrowDropUpRounded, ArrowDropDownRounded } from '@mui/icons-material';
import { Box, Typography, Tooltip, Zoom } from '@mui/material'
const Match: React.FC = () => {

    return (
        <Tooltip title="#ID" placement="left" TransitionComponent={Zoom}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                    <Typography variant='h6'>Tícket correto</Typography>
                    <Typography marginLeft={5} >3</Typography>
                    {true ? <ArrowDropUpRounded color='success' fontSize='large'/> : 
                        <ArrowDropDownRounded color='error' fontSize='large'/>
                    }
            </Box>
        </Tooltip>
    )
}

export default Match