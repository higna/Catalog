import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { Box } from '@mui/material'
import TextField7 from './forms/TextField7'
import PassField7 from './forms/PassField7'
import Button7 from './forms/Button7'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'

export default function Signup() {
    const navigate = useNavigate()
    const { handleSubmit, control } = useForm()
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);

        AxiosInstance.post(`register/`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                console.log(response)
                navigate(`/login`)
            })
            .catch((error) => {
                console.error('Error during registration', error)
            })
    }
    return (
        <div className={"myBackground"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className={"whiteBox"}>
                    <Box className={"itemBox"}>
                        <Box className={"loginTitle"}> User Registration </Box>
                    </Box>
                    <Box>
                        <Box className={"itemBox"}>
                            <TextField7
                                label={"First Name"}
                                name={"first_name"}
                                control={control}

                            />
                        </Box>
                        <Box className={"itemBox"}>
                            <TextField7
                                label={"Last Name"}
                                name={"last_name"}
                                control={control}

                            />
                        </Box>
                    </Box>
                    <Box className={"itemBox"}>
                        <TextField7
                            label={"Email"}
                            name={"email"}
                            control={control}

                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <PassField7
                            label={"Password"}
                            name={"password"}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <PassField7
                            label={"Confirm Password"}
                            name={"confirmPassword"}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Button7
                            type={"submit"}
                            label={"Signup"} />
                    </Box>
                    <Box className={"itemBox"}>
                        <Box className={"itemBox"}>
                            <Link to={"/"}>
                                <Button7
                                    type={"button"}
                                    label={"Home"}
                                />
                            </Link>
                        </Box>
                        <Box className={"itemBox"}>
                            <Link to={"/login"}>
                                <Button7
                                    type={"button"}
                                    label={"Login"}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </form>
        </div >
    )
}