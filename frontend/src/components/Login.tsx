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
            .then((response) => {
                console.log(response)
                localStorage.setItem('Token', response.data.token)
                navigate(`/home`)
            })
            .catch((error) => {
                console.error('Error during login', error)
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
                    <Box className={"adjacentBox"} sx={{ alignItems: 'center', justifyItems: 'center', marginLeft: '15px', marginTop: '-10px' }}>
                        <Box className={"itemBox"}>
                            <Link to={"/home"}>
                                <Button7
                                    label={"Home"}
                                    type={"button"}
                                />
                            </Link>
                        </Box>
                        <Box className={"itemBox"}>
                            <Link to={"/signup"}>
                                <Button7
                                    label={"Signup"}
                                    type={"button"}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Box className={"itemBox"} sx={{ padding: '10px', marginLeft: '15px', marginTop: '-10px' }}>
                        <Link to={"/request/password_reset"}>
                            <Button7
                                label={"Password reset"}
                                type={"button"}
                            />
                        </Link>
                    </Box>

                </Box>
            </form>
        </div >
    )
}