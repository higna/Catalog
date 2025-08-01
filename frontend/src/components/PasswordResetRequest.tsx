import '../App.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import TextField7 from './forms/TextField7';
import Button7 from './forms/Button7';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';


export default function PasswordResetRequest() {
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        AxiosInstance.post(`api/password_reset/`, {
            email: data.email,
        })
            .then((response) => {
                console.log(response)
                localStorage.setItem('Token', response.data.token)
                navigate(`/login`)
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
                        <Box className={"loginTitle"}> Reset Password </Box>
                    </Box>
                    <Box className={"itemBox"}>
                        <TextField7
                            label={"Email"}
                            name={"email"}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Button7
                            label={"Reset Password"}
                            type={"submit"}
                        />
                    </Box>
                </Box>
            </form>
        </div >
    )
}