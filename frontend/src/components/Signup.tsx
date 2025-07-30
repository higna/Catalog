import { Link } from 'react-router-dom'
import '../App.css'
import { Box } from '@mui/material'
import TextField7 from './forms/TextField7'
import PassField7 from './forms/PassField7'
import Button7 from './forms/Button7'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()
    const onSubmit = (data: any) => {
        AxiosInstance.post(
            `register/`, {
            email: data.email,
            password: data.password,
        })
            .then(() => {
                navigate(`/login`)
            })
    }
    return (
        <div className={"myBackground"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className={"whiteBox"}>
                    <Box className={"itemBox"}>
                        <Box className={"loginTitle"}> User Registration </Box>
                    </Box>
                    <Box className={"itemBox"}>
                        <TextField7
                            name={"Email"}
                            control={control}
                            label={"Email"}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <PassField7
                            label={"Password"}
                            name={"Password"}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <PassField7
                            label={"Confirm Password"}
                            name={"Confirm Password"}
                            control={control}
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
            </form>
        </div >
    )
}