import { Link } from 'react-router-dom'
import '../App.css'
import { Box } from '@mui/material'
import TextField7 from './forms/TextField7'
import PassField7 from './forms/PassField7'
import Button7 from './forms/Button7'

export default function Login() {
    return (
        <div className={"myBackground"}>
            <Box className={"whiteBox"}>
                <Box className={"itemBox"}>
                    <Box className={"loginTitle"}> Login to Catalog </Box>
                </Box>
                <Box className={"itemBox"}>
                    <TextField7
                        label={"Email"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <PassField7
                        label={"Password"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <Button7
                    label = {"Submit"}/>
                </Box>
                <Box className={"itemBox"}>
                    <Box component={Link} to="/signup">
                    </Box>
                </Box>
            </Box>
        </div>
    )
}