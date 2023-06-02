import React from "react";
import { Button, Paper, Box, TextField, Autocomplete, FormLabel, Tooltip, Checkbox } from "@mui/material";
import { AdminPanelSettingsOutlined, AdminPanelSettings, AccountCircleOutlined, AccountCircle } from '@mui/icons-material'

const champions = [
    { label: "Yasuo", value: "Yasuo" }, 
    { label: "Cho'Gath",  value: "ChoGath"}
];

const SignUp: React.FC = () => {
    const [champion, selectChampion] = React.useState('')
    const [championValue, selectChampionValue] = React.useState('')
    const [type, setType] = React.useState<"admin" | "normal">("normal")
    const handleChangeType = (input) => {
        setType(input)
    };
    console.log(championValue)
    return (
        <Paper>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <TextField
                    autoFocus
                    id="standard-basic"
                    label="Usuário"
                    variant="filled"
                    margin="dense"
                    size="small"
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
                    margin="dense"
                    size="small"
                    sx={{
                        backgroundColor: "#bbbbbb",
                        color: "#808080",
                        width: "20vw",
                        borderRadius: "5px",
                        marginBottom: "2vh",
                    }}
                    type="password"
                />
                <Autocomplete
                    disablePortal
                    disableClearable
                    options={champions}
                    value={champion}
                    size="small"
                    sx={{
                        width: "20vw",
                        borderRadius: "5px",
                        marginBottom: "2vh",
                        backgroundColor: "#bbbbbb",
                        color: "#808080",
                    }}
                    onChange={(event: any, champion: any) => {
                        selectChampion(champion.label);
                        selectChampionValue(champion.value);
                        console.log(event)
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Champions" variant="filled" />
                    )}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "20vw",
                        alignItems: "center",
                        marginBottom: "2vh",
                    }}
                >
                    <FormLabel>User Type</FormLabel>
                    <Box>
                        <Tooltip title="Administrator">
                            <Checkbox
                                checked={type === "admin"}
                                onChange={() => handleChangeType("admin")}
                                icon={<AdminPanelSettingsOutlined sx={{ fontSize: 35 }} />}
                                checkedIcon={<AdminPanelSettings sx={{ fontSize: 35 }} />}
                                sx={{
                                    marginRight: '.5em',
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Normal user">
                            <Checkbox
                                checked={type === "normal"}
                                onChange={() => handleChangeType("normal")}
                                icon={<AccountCircleOutlined sx={{ fontSize: 35 }} />}
                                checkedIcon={<AccountCircle sx={{ fontSize: 35 }} />}
                                />
                        </Tooltip>
                    </Box>
                </Box>
                <Box>
                    <Button variant="outlined">Limpar</Button>
                    <Button variant="contained">Confirmar</Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default SignUp;
