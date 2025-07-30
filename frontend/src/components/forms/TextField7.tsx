//import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css'

type labelProps = {
    label: string;
};
export default function TextField7({ label }: labelProps) {
    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            className= {'myForm'}
        />
    );
}