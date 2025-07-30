import { Link } from 'react-router-dom'
import '../App.css'
import { Box } from '@mui/material'
import TextField7 from './forms/TextField7'
import PassField7 from './forms/PassField7'
import Button7 from './forms/Button7'

export default function Signup() {
    return (
        <div className={"myBackground"}>
            <Box className={"whiteBox"}>
                <Box className={"itemBox"}>
                    <Box className={"loginTitle"}> User Registration </Box>
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
                    <PassField7
                        label={"Confirm Password"}
                    />
                </Box>
                <Box className={"itemBox"}>
                    <Button7
                        label={"Signup"} />
                </Box>
                <Box className={"itemBox"}>
                    <Box className={"itemBox"}>
                        <Link to={"/"}>
                            Forgot Password
                        </Link>
                    </Box>
                    <Box className={"itemBox"}>
                        <Link to={"/login"}>
                            Link to Login
                        </Link>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}