import '../App.css';
import { Link, /* useNavigate */ } from 'react-router-dom'
import { Box } from '@mui/material';
import TextField7 from './forms/TextField7';
import Button7 from './forms/Button7';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';
import { useState } from 'react';
import Message7 from './Message';


export default function PasswordReset() {
    //const navigate = useNavigate()
    const { control, handleSubmit } = useForm()
    const [showMessage, setShowMessage] = useState(false)
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        AxiosInstance.post(`api/password_reset/`, {
            email: data.email,
        })
            .then((response) => {
                setShowMessage(true)
                console.log(response)
            })
            .catch((error) => {
                console.error('Error sending ', error)
            })
    }
    return (
        <div className={"myBackground"}>
            {showMessage ? <Message7 text={"Password Reset sent successfully for existing user..."} /> : null}
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
                    <Box className={"itemBox"}>
                        <Link to={"/"}>
                            <Button7
                                label={"Home"}
                                type={"submit"}
                            />
                        </Link>

                    </Box>
                </Box>
            </form>
        </div >
    )
}