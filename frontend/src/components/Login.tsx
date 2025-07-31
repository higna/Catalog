import '../App.css';
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import TextField7 from './forms/TextField7';
import PassField7 from './forms/PassField7';
import Button7 from './forms/Button7';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';

export default function Login() {
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        AxiosInstance.post(`login/`, {
            email: data.email,
            password: data.password,
        })
            .then(() => {
                navigate(`/home`)
            })
    }
    return (
        <div className={"myBackground"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className={"whiteBox"}>
                    <Box className={"itemBox"}>
                        <Box className={"loginTitle"}> Login to Catalog </Box>
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
                            name={'password'}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Button7
                            label={"Login"}
                            type={"submit"}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Box className={"itemBox"}>
                            <Link to={"/"}>Forgot Password</Link>
                        </Box>
                        <Box className={"itemBox"}>
                            <Link to={"/signup"}>
                                Link to Signup
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </form>
        </div >
    )
}