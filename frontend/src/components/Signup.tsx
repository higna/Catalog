import { Link } from 'react-router-dom'
import '../App.css'
import { Box } from '@mui/material'
import TextField7 from './forms/TextField7'

export default function Signup() {
    return (
        <div className={"myBackground"}>
            <Box className={"whiteBox"}>
                <Box className={"itemBox"}>
                    <Box className={"loginTitle"}> Signup to Catalog </Box>
                </Box>
                <Box className={"itemBox"}>
                    <TextField7
                        label={"First Name"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <TextField7
                        label={"Last Name"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <TextField7
                        label={"Email"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <TextField7
                        label={"Password"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    Button
                </Box>
                <Box className={"itemBox"}>
                    <Box component={Link} to="/signup">
                    </Box>
                </Box>
            </Box>
        </div>
    )
}