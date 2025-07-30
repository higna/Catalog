import { Link } from 'react-router-dom';
import '../App.css';
import { Box } from '@mui/material';
import TextField7 from './forms/TextField7';
import PassField7 from './forms/PassField7';
import Button7 from './forms/Button7';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';

export default function Login() {
    const { control, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        AxiosInstance.post(
            `login/`, {
            email: data.email,
            password: data.password,
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
                            name={"Email"}
                            control={control}
                            label={"Email"}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <PassField7
                            name={'Password'}
                            control={control}
                            label={"Password"}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Button7
                            label={"Login"} />
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